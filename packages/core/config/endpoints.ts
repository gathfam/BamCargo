export const API_ENDPOINTS = {
  // Articles / Blog
  articles: {
    list: "/api/article",
    detail: (slug: string) => `/api/article/slug/${slug}`,
    admin: {
      list: "/api/admin/articles",
      detail: (id: number) => `/api/admin/articles/${id}`,
      create: "/api/admin/articles",
      update: (id: number) => `/api/admin/articles/${id}`,
      delete: (id: number) => `/api/admin/articles/${id}`,
    },
  },

  // Banners
  banners: {
    list: "/api/banners",
    admin: {
      list: "/api/admin/banners",
      detail: (id: number) => `/api/admin/banners/${id}`,
      create: "/api/admin/banners",
      update: (id: number) => `/api/admin/banners/${id}`,
      delete: (id: number) => `/api/admin/banners/${id}`,
    },
  },

  // Gallery
  gallery: {
    list: "/api/gallery",
    admin: {
      list: "/api/admin/gallery",
      detail: (id: number) => `/api/admin/gallery/${id}`,
      create: "/api/admin/gallery",
      update: (id: number) => `/api/admin/gallery/${id}`,
      delete: (id: number) => `/api/admin/gallery/${id}`,
    },
  },

  // Careers
  careers: {
    list: "/api/careers",
    detail: (slug: string) => `/api/careers/${slug}`,
    create: "/api/careers",
    update: (id: string) => `/api/careers/${id}`,
    delete: (id: string) => `/api/careers/${id}`,
    apply: (id: string) => `/api/careers/${id}/apply`,
    applications: (id: string) => `/api/careers/${id}/applications`,
    admin: {
      list: "/api/admin/careers",
      detail: (id: number) => `/api/admin/careers/${id}`,
      create: "/api/admin/careers",
      update: (id: number) => `/api/admin/careers/${id}`,
      delete: (id: number) => `/api/admin/careers/${id}`,
    },
  },
  // Receipts / Tracking
  receipts: {
    detail: (number: string) => `/api/receipts/${number}`,
  },

  // Shipping cost calculator
  shipping: {
    cargo: "/api/get-costs",
    motor: "/api/get_mtr_costs",
  },

  // Destinations
  destinations: {
    search: "/api/destinations",
  },

  // Auth
  auth: {
    login: "/api/auth/login",
    logout: "/api/auth/logout",
    session: "/api/auth/session",
  },
} as const;
