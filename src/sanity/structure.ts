import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("skill").title("Skills"),
      S.divider(),
      S.listItem()
        .title("Settings")
        .child(S.document().schemaType("settings").documentId("settings")),
    ]);
