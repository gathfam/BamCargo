"use server"; // This directive is crucial. It keeps this code on the server.

export async function checkResiAction(prevState: any, formData: FormData) {
  const resi = formData.get("resi") as string;
  const apiKey = process.env.BAM_API_KEY;
  const baseUrl = process.env.BAM_BASE_URL;

  try {
    const response = await fetch(`${baseUrl}/receipts/${resi}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) return { error: "Failed to fetch" };
    console.log(response.json);
    return await response.json();
  } catch (e) {
    return { error: "Server error" };
  }
}
