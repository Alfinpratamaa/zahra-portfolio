"use server";

import { client } from "@/sanity/client";

export async function getCvUrl(): Promise<string | null> {
  const query = `
    *[_type == "settings"][0]{
      "cvUrl": cvFile.asset->url
    }
  `;

  try {
    const result = await client.fetch(query, {}, { next: { revalidate: 60 } });
    return result?.cvUrl ?? null;
  } catch (error) {
    console.error("Failed to fetch CV URL:", error);
    return null;
  }
}
