// The Studio's sidebar: the two singletons first, then the document lists.
export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Contact Details")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings").title("Contact Details")),
      S.listItem()
        .title("Programmes & Impact")
        .id("programmesAndImpact")
        .child(S.document().schemaType("programmesAndImpact").documentId("programmesAndImpact").title("Programmes & Impact")),
      S.divider(),
      S.documentTypeListItem("newsPost").title("News & Stories"),
      S.documentTypeListItem("galleryAlbum").title("Gallery Albums"),
    ]);
