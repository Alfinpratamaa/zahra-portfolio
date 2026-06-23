"use server";

import { client } from "@/sanity/client";
export async function getAllProjects() {
  const query = `
    *[_type == "project"] | order(startDate desc) {
      _id,
      title,
      "slug": slug.current,
      startDate,
      isOngoing,
      endDate,
      link,
      "imageUrl": image.asset->url,
      description
    }
  `;

  try {
    const projects = await client.fetch(
      query,
      {},
      { next: { revalidate: 60 } }
    );
    return projects;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}
