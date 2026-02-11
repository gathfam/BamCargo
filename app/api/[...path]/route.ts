import { NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_BAM_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";

// Helper untuk construct URL
async function getTargetUrl(request: Request, params: Promise<{ path: string[] }>) {
  const parameter = await params;
  const path = parameter.path.join("/");
  const { searchParams } = new URL(request.url);
  const queryString = searchParams.toString();
  return `${BACKEND_URL}/${path}${queryString ? `?${queryString}` : ""}`;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const targetUrl = await getTargetUrl(request, params);

  try {
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
    return NextResponse.json(
      { message: "Proxy Error (GET)", error },
      { status: 500 },
    );
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const targetUrl = await getTargetUrl(request, params);

  try {
    // Baca body dari request client
    const body = await request.json();

    const res = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(body), // Forward body ke backend
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("Proxy Error:", error);
    return NextResponse.json(
      { message: "Proxy Error (POST)", error },
      { status: 500 },
    );
  }
}