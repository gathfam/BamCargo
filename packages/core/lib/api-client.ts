import { ApiError } from "./api-error";

export interface RequestOptions extends Omit<RequestInit, "body"> {
  body?: unknown;
  params?: Record<string, string | number | boolean | undefined | null>;
  /**
   * Timeout dalam ms. Kalau tidak di-set:
   * - FormData upload: 60_000 (60 detik)
   * - Request biasa: 15_000 (15 detik)
   * Set ke 0 atau false untuk disable timeout.
   */
  timeout?: number | false;
}

const DEFAULT_TIMEOUT = 15_000;
const DEFAULT_UPLOAD_TIMEOUT = 60_000;

class ApiClient {
  private async request<T>(
    url: string,
    options: RequestOptions = {},
  ): Promise<T> {
    const { body, params, headers, timeout, signal: externalSignal, ...rest } =
      options;

    const fullUrl = this.buildUrl(url, params);

    const isFormData = body instanceof FormData;
    const finalBody = isFormData
      ? body
      : body
        ? JSON.stringify(body)
        : undefined;

    const finalHeaders: HeadersInit = {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...headers,
    };

    // Resolve timeout (false = disable, undefined = default)
    const resolvedTimeout =
      timeout === false
        ? null
        : typeof timeout === "number"
          ? timeout
          : isFormData
            ? DEFAULT_UPLOAD_TIMEOUT
            : DEFAULT_TIMEOUT;

    // Setup abort controller
    const controller = new AbortController();
    const timeoutId = resolvedTimeout
      ? setTimeout(() => controller.abort(), resolvedTimeout)
      : null;

    // Combine external signal (kalau ada) dengan internal timeout signal
    if (externalSignal) {
      if (externalSignal.aborted) controller.abort();
      else externalSignal.addEventListener("abort", () => controller.abort());
    }

    try {
      const res = await fetch(fullUrl, {
        ...rest,
        headers: finalHeaders,
        body: finalBody,
        signal: controller.signal,
      });

      return await this.handleResponse<T>(res);
    } catch (err) {
      // Bedakan timeout (kita yang abort) vs external abort
      if (err instanceof DOMException && err.name === "AbortError") {
        if (timeoutId && !externalSignal?.aborted) {
          throw new ApiError(
            isFormData
              ? "Upload timeout. Periksa koneksi internet atau coba file yang lebih kecil."
              : "Request timeout. Periksa koneksi internet Anda.",
            408,
          );
        }
        // External abort (mis. user cancel) — re-throw apa adanya
        throw err;
      }
      throw err;
    } finally {
      if (timeoutId) clearTimeout(timeoutId);
    }
  }

  private buildUrl(
    path: string,
    params?: Record<string, string | number | boolean | undefined | null>,
  ): string {
    const baseUrl =
      typeof window !== "undefined"
        ? ""
        : process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const url = `${baseUrl}${path}`;
    if (!params) return url;

    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        searchParams.append(key, String(value));
      }
    });

    const queryString = searchParams.toString();
    return queryString ? `${url}?${queryString}` : url;
  }

  private async handleResponse<T>(res: Response): Promise<T> {
    if (!res.ok) {
      let errorData: { message?: string; error?: string } = {};
      try {
        errorData = await res.json();
      } catch {
        // Response bukan JSON
      }

      throw new ApiError(
        errorData.message ||
          errorData.error ||
          `Request failed with status ${res.status}`,
        res.status,
        errorData,
      );
    }

    const contentType = res.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      return res.json();
    }

    return {} as T;
  }

  // ── Public methods ──

  get<T>(url: string, options?: Omit<RequestOptions, "body">): Promise<T> {
    return this.request<T>(url, { ...options, method: "GET" });
  }

  post<T>(
    url: string,
    body?: unknown,
    options?: Omit<RequestOptions, "body">,
  ): Promise<T> {
    return this.request<T>(url, { ...options, method: "POST", body });
  }

  put<T>(
    url: string,
    body?: unknown,
    options?: Omit<RequestOptions, "body">,
  ): Promise<T> {
    return this.request<T>(url, { ...options, method: "PUT", body });
  }

  patch<T>(
    url: string,
    body?: unknown,
    options?: Omit<RequestOptions, "body">,
  ): Promise<T> {
    return this.request<T>(url, { ...options, method: "PATCH", body });
  }

  delete<T>(url: string, options?: Omit<RequestOptions, "body">): Promise<T> {
    return this.request<T>(url, { ...options, method: "DELETE" });
  }
}

export const apiClient = new ApiClient();