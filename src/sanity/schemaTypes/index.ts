import { type SchemaTypeDefinition } from "sanity";
import { projectType } from "./projects";
import post from "./post";
import { author } from "./author";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType],
};
