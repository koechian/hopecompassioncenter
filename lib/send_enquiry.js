import emailjs from "@emailjs/browser";

// EmailJS identifiers are public by design: they only allow sending through the configured template.
const EMAILJS_SERVICE_ID = "service_pozgjuc";
const EMAILJS_TEMPLATE_ID = "template_7yfuiqt";
const EMAILJS_PUBLIC_KEY = "Youw4xtWKzvQsLBA5";

function formatMessage({ category, organisation, phone, message }) {
  const details = [
    `Enquiry type: ${category}`,
    organisation && `Organisation: ${organisation}`,
    phone && `Phone: ${phone}`,
  ].filter(Boolean);
  return `${details.join("\n")}\n\n${message}`;
}

// The EmailJS template expects first_name, last_name, email, subject and message.
export function sendEnquiry(enquiry) {
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      first_name: enquiry.name,
      last_name: "",
      email: enquiry.email,
      subject: `[${enquiry.category}] ${enquiry.subject}`,
      message: formatMessage(enquiry),
    },
    { publicKey: EMAILJS_PUBLIC_KEY },
  );
}
