// Link targets for the organisation's phone numbers, which content files store as displayed.
export function telephoneHref(number) {
  return `tel:+${number.replace(/\D/g, "")}`;
}

export function whatsappHref(number) {
  return `https://wa.me/${number.replace(/\D/g, "")}`;
}
