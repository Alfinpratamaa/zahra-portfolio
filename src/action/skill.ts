"use server";

import { client } from "@/sanity/client";

export type Skill = {
  name: string;
  icon: string;
  category: string;
};

export async function getAllSkills(): Promise<Skill[]> {
  const query = `
    *[_type == "skill"] | order(category asc, name asc) {
      name,
      "icon": icon.asset->url,
      category
    }
  `;

  try {
    const skills = await client.fetch(query, {}, { next: { revalidate: 60 } });
    return skills;
  } catch (error) {
    console.error("Failed to fetch skills:", error);
    return [];
  }
}
