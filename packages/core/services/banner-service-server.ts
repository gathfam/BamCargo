import "server-only";
import db from "../lib/db";
import type { RowDataPacket, ResultSetHeader } from "mysql2"
import type {
  Banner,
  BannerFilters,
  BannerListResponse,
  PublicBanner,
  PublicBannersResponse,
} from "../types/banner-types"

interface BannerRow extends RowDataPacket, Banner {}

function mapBanner(row: BannerRow): Banner {
  return {
    ...row,
    is_portrait: Boolean(row.is_portrait),
    is_active: Boolean(row.is_active),
  };
}

export const BannerServerService = {
  async list(filters: BannerFilters = {}): Promise<BannerListResponse> {
    const page = Math.max(1, filters.page ?? 1);
    const limit = Math.min(100, Math.max(1, filters.limit ?? 20));
    const offset = (page - 1) * limit;

    const whereClauses: string[] = [];
    const whereParams: (string | number)[] = [];

    if (typeof filters.is_active === "boolean") {
      whereClauses.push("is_active = ?");
      whereParams.push(filters.is_active ? 1 : 0);
    }

    const whereSql = whereClauses.length
      ? `WHERE ${whereClauses.join(" AND ")}`
      : "";

    const [countRows] = await db.query<RowDataPacket[]>(
      `SELECT COUNT(*) as total FROM banners ${whereSql}`,
      whereParams,
    );
    const total = Number(countRows[0]?.total ?? 0);

    const [rows] = await db.query<BannerRow[]>(
      `SELECT * FROM banners ${whereSql}
       ORDER BY sort_order ASC, created_at DESC
       LIMIT ? OFFSET ?`,
      [...whereParams, limit, offset],
    );

    const totalPages = Math.max(1, Math.ceil(total / limit));

    return {
      data: rows.map(mapBanner),
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

  async getById(id: number): Promise<Banner | null> {
    const [rows] = await db.query<BannerRow[]>(
      `SELECT * FROM banners WHERE id = ?`,
      [id],
    );
    return rows[0] ? mapBanner(rows[0]) : null;
  },

  async create(data: {
    title: string
    description: string | null
    image_url: string
    alt: string
    width: number
    height: number
    is_portrait: boolean
    link: string | null
    sort_order: number
    is_active: boolean
    start_date: string | null
    end_date: string | null
  }): Promise<Banner> {
    const [result] = await db.query<ResultSetHeader>(
      `INSERT INTO banners
       (title, description, image_url, alt, width, height, is_portrait, link, sort_order, is_active, start_date, end_date)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.title,
        data.description,
        data.image_url,
        data.alt,
        data.width,
        data.height,
        data.is_portrait ? 1 : 0,
        data.link,
        data.sort_order,
        data.is_active ? 1 : 0,
        data.start_date,
        data.end_date,
      ],
    )

    const created = await this.getById(result.insertId)
    if (!created) throw new Error("Banner gagal dibuat")
    return created
  },

  async update(
    id: number,
    data: {
      title?: string
      description?: string | null
      image_url?: string
      alt?: string
      width?: number
      height?: number
      is_portrait?: boolean
      link?: string | null
      sort_order?: number
      is_active?: boolean
      start_date?: string | null
      end_date?: string | null
    },
  ): Promise<Banner> {
    const updates: string[] = []
    const values: (string | number | null)[] = []

    if (data.title !== undefined) {
      updates.push("title = ?")
      values.push(data.title)
    }
    if (data.description !== undefined) {
      updates.push("description = ?")
      values.push(data.description)
    }
    if (data.image_url !== undefined) {
      updates.push("image_url = ?")
      values.push(data.image_url)
    }
    if (data.alt !== undefined) {
      updates.push("alt = ?")
      values.push(data.alt)
    }
    if (data.width !== undefined) {
      updates.push("width = ?")
      values.push(data.width)
    }
    if (data.height !== undefined) {
      updates.push("height = ?")
      values.push(data.height)
    }
    if (data.is_portrait !== undefined) {
      updates.push("is_portrait = ?")
      values.push(data.is_portrait ? 1 : 0)
    }
    if (data.link !== undefined) {
      updates.push("link = ?")
      values.push(data.link)
    }
    if (data.sort_order !== undefined) {
      updates.push("sort_order = ?")
      values.push(data.sort_order)
    }
    if (data.is_active !== undefined) {
      updates.push("is_active = ?")
      values.push(data.is_active ? 1 : 0)
    }
    if (data.start_date !== undefined) {
      updates.push("start_date = ?")
      values.push(data.start_date)
    }
    if (data.end_date !== undefined) {
      updates.push("end_date = ?")
      values.push(data.end_date)
    }

    if (updates.length > 0) {
      values.push(id)
      await db.query<ResultSetHeader>(
        `UPDATE banners SET ${updates.join(", ")} WHERE id = ?`,
        values,
      )
    }

    const updated = await this.getById(id)
    if (!updated) throw new Error("Banner tidak ditemukan")
    return updated
  },

  async delete(id: number): Promise<void> {
    await db.query<ResultSetHeader>(`DELETE FROM banners WHERE id = ?`, [id])
  },

  async listPublic(): Promise<PublicBannersResponse> {
    const [rows] = await db.query<BannerRow[]>(
      `SELECT title, image_url, alt, width, height, is_portrait, link
       FROM banners
       WHERE is_active = TRUE
         AND (start_date IS NULL OR start_date <= NOW())
         AND (end_date IS NULL OR end_date >= NOW())
       ORDER BY sort_order ASC, created_at DESC`
    )

    const data: PublicBanner[] = rows.map((row) => ({
      src: row.image_url,
      alt: row.alt,
      width: row.width,
      height: row.height,
      isPortrait: Boolean(row.is_portrait),
      title: row.title || undefined,
      link: row.link || undefined,
    }))

    return { data }
  },
};