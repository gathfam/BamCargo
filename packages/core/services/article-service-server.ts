import "server-only"
import db from "../lib/db"
import type { RowDataPacket, ResultSetHeader } from "mysql2"
import type {
  Article,
  ArticleFilters,
  ArticleListItem,
  ArticleListResponse,
  PublicArticle,
} from "../types/article-types"
import { parseTags } from "../lib/utils"

interface ArticleRow
  extends RowDataPacket, Omit<Article, "isPublished" | "tags"> {
  tags: string | null
}

function mapArticle(row: ArticleRow): Article {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    content: row.content,
    image_url: row.image_url,
    author_id: row.author_id,
    status: row.status,
    tags: parseTags(row.tags),
    created_at: row.created_at,
    isPublished: row.status === "published",
  };
}

function mapArticleListItem(row: ArticleRow): ArticleListItem {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    image_url: row.image_url,
    author_id: row.author_id,
    status: row.status,
    tags: parseTags(row.tags),
    created_at: row.created_at,
    isPublished: row.status === "published",
  };
}

export const ArticleServerService = {
  /**
   * Admin list — semua status (published + draft).
   */
  async list(filters: ArticleFilters = {}): Promise<ArticleListResponse> {
    const page = Math.max(1, filters.page ?? 1);
    const limit = Math.min(100, Math.max(1, filters.limit ?? 10));
    const offset = (page - 1) * limit;

    const whereClauses: string[] = [];
    const whereParams: (string | number)[] = [];

    if (filters.status) {
      whereClauses.push("status = ?");
      whereParams.push(filters.status);
    }

    if (filters.tag) {
      whereClauses.push("JSON_CONTAINS(tags, ?)");
      whereParams.push(JSON.stringify(filters.tag));
    }

    const whereSql = whereClauses.length
      ? `WHERE ${whereClauses.join(" AND ")}`
      : "";

    const [countRows] = await db.query<RowDataPacket[]>(
      `SELECT COUNT(*) as total FROM articles ${whereSql}`,
      whereParams,
    );
    const total = Number(countRows[0]?.total ?? 0);

    const [rows] = await db.query<ArticleRow[]>(
      `SELECT id, title, slug, image_url, author_id, status, tags, created_at
       FROM articles ${whereSql}
       ORDER BY created_at DESC
       LIMIT ? OFFSET ?`,
      [...whereParams, limit, offset],
    );

    const totalPages = Math.max(1, Math.ceil(total / limit));

    return {
      data: rows.map(mapArticleListItem),
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    };
  },

  async getById(id: number): Promise<Article | null> {
    const [rows] = await db.query<ArticleRow[]>(
      `SELECT id, title, slug, content, image_url, author_id, status, tags, created_at
       FROM articles
       WHERE id = ?`,
      [id],
    );
    return rows[0] ? mapArticle(rows[0]) : null;
  },

  async getBySlug(slug: string): Promise<PublicArticle | null> {
    const [rows] = await db.query<ArticleRow[]>(
      `SELECT id, title, slug, content, image_url, tags, created_at
       FROM articles
       WHERE slug = ? AND status = 'published'`,
      [slug],
    );
    const row = rows[0];
    if (!row) return null;
    return {
      id: row.id,
      title: row.title,
      slug: row.slug,
      content: row.content,
      image_url: row.image_url,
      tags: parseTags(row.tags),
      created_at: row.created_at,
    };
  },

  async create(data: {
    author_id: number;
    title: string;
    slug: string;
    content: string;
    image_url: string;
    status: string;
    tags: string[] | null;
  }): Promise<Article> {
    let result: ResultSetHeader;
    try {
      const [res] = await db.query<ResultSetHeader>(
        `INSERT INTO articles
         (author_id, title, slug, content, image_url, status, tags)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          data.author_id,
          data.title,
          data.slug,
          data.content,
          data.image_url,
          data.status,
          data.tags ? JSON.stringify(data.tags) : null,
        ],
      );
      result = res;
    } catch (err: any) {
      if (err?.code === "ER_DUP_ENTRY") {
        const uniqueSlug = `${data.slug}-${Date.now()}`;
        const [res] = await db.query<ResultSetHeader>(
          `INSERT INTO articles
           (author_id, title, slug, content, image_url, status, tags)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [
            data.author_id,
            data.title,
            uniqueSlug,
            data.content,
            data.image_url,
            data.status,
            data.tags ? JSON.stringify(data.tags) : null,
          ],
        );
        result = res;
      } else {
        throw err;
      }
    }

    const created = await this.getById(result.insertId);
    if (!created) throw new Error("Artikel gagal dibuat");
    return created;
  },

  async update(
    id: number,
    data: {
      title?: string;
      content?: string;
      status?: string;
      tags?: string[] | null;
      image_url?: string;
    },
  ): Promise<Article> {
    const updates: string[] = [];
    const values: (string | number | null)[] = [];

    if (data.title !== undefined) {
      updates.push("title = ?");
      values.push(data.title);
    }
    if (data.content !== undefined) {
      updates.push("content = ?");
      values.push(data.content);
    }
    if (data.status !== undefined) {
      updates.push("status = ?");
      values.push(data.status);
    }
    if (data.tags !== undefined) {
      updates.push("tags = ?");
      values.push(
        data.tags && data.tags.length ? JSON.stringify(data.tags) : null,
      );
    }
    if (data.image_url !== undefined) {
      updates.push("image_url = ?");
      values.push(data.image_url);
    }

    if (updates.length > 0) {
      values.push(id);
      await db.query<ResultSetHeader>(
        `UPDATE articles SET ${updates.join(", ")} WHERE id = ?`,
        values,
      );
    }

    const updated = await this.getById(id);
    if (!updated) throw new Error("Artikel tidak ditemukan");
    return updated;
  },

  async delete(id: number): Promise<void> {
    await db.query<ResultSetHeader>(`DELETE FROM articles WHERE id = ?`, [id]);
  },
};
