"use server";

import { client } from "@/sanity/client";

export type Settings = {
  cvUrl: string | null;
  heroImageUrl: string | null;
  heroDescription: string | null;
};

export async function getSettings(): Promise<Settings> {
  const query = `
    *[_type == "settings"][0]{
      "cvUrl": cvFile.asset->url,
      "heroImageUrl": heroImage.asset->url,
      heroDescription
    }
  `;

  try {
    const result = await client.fetch(query, {}, { next: { revalidate: 60 } });
    return {
      cvUrl: result?.cvUrl ?? null,
      heroImageUrl: result?.heroImageUrl ?? null,
      heroDescription: result?.heroDescription ?? null,
    };
  } catch (error) {
    console.error("Failed to fetch settings:", error);
    return { cvUrl: null, heroImageUrl: null, heroDescription: null };
  }
}
