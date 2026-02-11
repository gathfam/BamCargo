// lib/data.ts
export async function fetchResi(receiptNumber: string) {
  const url = `/api/resi?resi=${receiptNumber}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return {
        error: "Failed to fetch",
        status: response.status,
      };
    }

    return await response.json();
  } catch (error) {
    return { error: "Network Error", status: 500, message: error };
  }
}
