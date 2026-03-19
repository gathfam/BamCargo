export const ArticleService = {
  async getArticle(page: number = 1, limit: number = 10) {
    const res = await fetch(`/api/article?page=${page}&limit=${limit}`);

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Gagal mengambil data artikel");
    }

    return res.json();
  },
};
