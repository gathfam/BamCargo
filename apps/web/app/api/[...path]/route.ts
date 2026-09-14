import { NextResponse } from "next/server";

function getEnvVars() {
  const BACKEND_URL = process.env.BAM_BACKEND_URL;
  const API_KEY = process.env.BAM_API_KEY;

  if (!BACKEND_URL) {
    throw new Error("BAM_BACKEND_URL is required");
  }
  if (!API_KEY) {
    throw new Error("BAM_API_KEY is required");
  }

  return { BACKEND_URL, API_KEY };
}

async function getTargetUrl(
  request: Request,
  paramsPromise: Promise<{ path: string[] }>,
  backendUrl: string
): Promise<string> {
  const params = await paramsPromise;
  const path = params.path.join("/");
  const { searchParams } = new URL(request.url);
  const queryString = searchParams.toString();
  return `${backendUrl}/${path}${queryString ? `?${queryString}` : ""}`;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  try {
    const { BACKEND_URL, API_KEY } = getEnvVars();
    const targetUrl = await getTargetUrl(request, params, BACKEND_URL);

    const res = await fetch(targetUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("[Proxy GET] error:", error);
    return NextResponse.json(
      { error: "Gagal menghubungi backend" },
      { status: 502 },
    );
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  try {
    const { BACKEND_URL, API_KEY } = getEnvVars();
    const targetUrl = await getTargetUrl(request, params, BACKEND_URL);
    const body = await request.json();

    const res = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("[Proxy POST] error:", error);
    return NextResponse.json(
      { error: "Gagal menghubungi backend" },
      { status: 502 },
    );
  }
}