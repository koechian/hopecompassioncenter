// The Studio's sidebar: settings first, then the pages' content.
function singleton(S, type, title) {
  return S.listItem().title(title).id(type).child(S.document().schemaType(type).documentId(type).title(title));
}

export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      singleton(S, "siteSettings", "Contact Details"),
      singleton(S, "siteSections", "Site Sections"),
      S.divider(),
      singleton(S, "programmesAndImpact", "Programmes & Impact"),
      S.documentTypeListItem("newsPost").title("News & Stories"),
      S.documentTypeListItem("galleryAlbum").title("Gallery Albums"),
      S.documentTypeListItem("event").title("Events"),
      S.documentTypeListItem("opportunity").title("Opportunities"),
      S.documentTypeListItem("publication").title("Reports & Publications"),
      S.divider(),
      singleton(S, "team", "Our Team"),
      singleton(S, "partners", "Partners & Supporters"),
      singleton(S, "testimonials", "Testimonials"),
      singleton(S, "faqs", "FAQs"),
    ]);
