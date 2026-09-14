import "server-only";
import db from "../lib/db";
import type { RowDataPacket, ResultSetHeader } from "mysql2"
import type {
  Gallery,
  GalleryFilters,
  GalleryListResponse,
} from "../types/gallery-types";

interface GalleryRow extends RowDataPacket, Omit<Gallery, "isActive"> {}

export const GalleryServerService = {
  async list(filters: GalleryFilters = {}): Promise<GalleryListResponse> {
    const page = Math.max(1, filters.page ?? 1);
    const limit = Math.min(100, Math.max(1, filters.limit ?? 20));
    const offset = (page - 1) * limit;
    const whereClauses: string[] = [];
    const whereParams: (string | number)[] = [];

    if (typeof filters.is_active === "boolean") {
      whereClauses.push("is_active = ?");
      whereParams.push(filters.is_active ? 1 : 0);
    }
    if (filters.category) {
      whereClauses.push("category = ?");
      whereParams.push(filters.category);
    }

    const whereSql = whereClauses.length
      ? `WHERE ${whereClauses.join(" AND ")}`
      : "";
    const [countRows] = await db.query<RowDataPacket[]>(
      `SELECT COUNT(*) as total FROM gallery ${whereSql}`,
      whereParams,
    );
    const total = Number(countRows[0]?.total ?? 0);

    const [rows] = await db.query<GalleryRow[]>(
      `SELECT * FROM gallery ${whereSql} ORDER BY sort_order ASC, created_at DESC LIMIT ? OFFSET ?`,
      [...whereParams, limit, offset],
    );

    const totalPages = Math.max(1, Math.ceil(total / limit));
    return {
      data: rows.map((r) => ({
        ...r,
        is_active: Boolean(r.is_active),
        isActive: Boolean(r.is_active),
      })),
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
  async getById(id: number): Promise<Gallery | null> {
    const [rows] = await db.query<GalleryRow[]>(
      `SELECT * FROM gallery WHERE id = ?`,
      [id],
    );
    return rows[0]
      ? {
          ...rows[0],
          is_active: Boolean(rows[0].is_active),
          isActive: Boolean(rows[0].is_active),
        }
      : null;
  },

  async create(data: {
    title: string
    description: string | null
    alt: string
    image_url: string
    category: string
    sort_order: number
    is_active: boolean
  }): Promise<Gallery> {
    const [result] = await db.query<ResultSetHeader>(
      `INSERT INTO gallery
       (title, description, alt, image_url, category, sort_order, is_active)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        data.title,
        data.description,
        data.alt,
        data.image_url,
        data.category,
        data.sort_order,
        data.is_active ? 1 : 0,
      ],
    )

    const created = await this.getById(result.insertId)
    if (!created) throw new Error("Gallery gagal dibuat")
    return created
  },

  async update(
    id: number,
    data: {
      title?: string
      description?: string | null
      alt?: string
      image_url?: string
      category?: string
      sort_order?: number
      is_active?: boolean
    },
  ): Promise<Gallery> {
    const updates: string[] = []
    const params: (string | number | null)[] = []

    if (data.title !== undefined) {
      updates.push("title = ?")
      params.push(data.title)
    }
    if (data.description !== undefined) {
      updates.push("description = ?")
      params.push(data.description)
    }
    if (data.alt !== undefined) {
      updates.push("alt = ?")
      params.push(data.alt)
    }
    if (data.image_url !== undefined) {
      updates.push("image_url = ?")
      params.push(data.image_url)
    }
    if (data.category !== undefined) {
      updates.push("category = ?")
      params.push(data.category)
    }
    if (data.sort_order !== undefined) {
      updates.push("sort_order = ?")
      params.push(data.sort_order)
    }
    if (data.is_active !== undefined) {
      updates.push("is_active = ?")
      params.push(data.is_active ? 1 : 0)
    }

    if (updates.length > 0) {
      await db.query<ResultSetHeader>(
        `UPDATE gallery SET ${updates.join(", ")} WHERE id = ?`,
        [...params, id],
      )
    }

    const updated = await this.getById(id)
    if (!updated) throw new Error("Gallery tidak ditemukan")
    return updated
  },

  async delete(id: number): Promise<void> {
    await db.query<ResultSetHeader>(`DELETE FROM gallery WHERE id = ?`, [id])
  },

  async listPublic(filters: { category?: string; limit?: number; page?: number } = {}): Promise<GalleryListResponse> {
    const page = Math.max(1, filters.page ?? 1)
    const limit = Math.min(100, Math.max(1, filters.limit ?? 24))
    const offset = (page - 1) * limit
    const whereClauses = ["is_active = 1"]
    const whereParams: (string | number)[] = []

    if (filters.category) {
      whereClauses.push("category = ?")
      whereParams.push(filters.category)
    }

    const whereSql = `WHERE ${whereClauses.join(" AND ")}`

    const [countRows] = await db.query<RowDataPacket[]>(
      `SELECT COUNT(*) as total FROM gallery ${whereSql}`,
      whereParams,
    )
    const total = Number(countRows[0]?.total ?? 0)

    const [rows] = await db.query<GalleryRow[]>(
      `SELECT * FROM gallery ${whereSql} ORDER BY sort_order ASC, created_at DESC LIMIT ? OFFSET ?`,
      [...whereParams, limit, offset],
    )

    const totalPages = Math.max(1, Math.ceil(total / limit))
    return {
      data: rows.map((r) => ({
        ...r,
        is_active: Boolean(r.is_active),
        isActive: Boolean(r.is_active),
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    }
  },
}

