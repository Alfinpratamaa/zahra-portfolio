import { type SchemaTypeDefinition } from "sanity";
import { projectType } from "./projects";
import { settings } from "./settings";
import { skill } from "./skill";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, skill, settings],
};
