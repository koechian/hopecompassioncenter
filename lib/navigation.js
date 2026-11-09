// Menu entries tied to an optional section are kept only while that section is switched on.
export function enabledLinks(links, sections) {
  return links.filter((link) => !link.section || sections[link.section]);
}
