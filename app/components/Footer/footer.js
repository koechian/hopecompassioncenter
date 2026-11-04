import Link from "next/link";

const footerLinks = [
  { href: "/pages/about", label: "About" },
  { href: "/pages/projects", label: "Projects" },
  { href: "/pages/gallery", label: "Gallery" },
  { href: "/pages/donate", label: "Donate" },
  { href: "/pages/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="bg-cream text-brown! shadow-sm">
      <div className="w-full max-w-screen-xl mx-auto p-4 tablet:py-8">
        <div className="tablet:flex tablet:items-center tablet:justify-between">
          <Link href="/" className="flex items-center mb-4 tablet:mb-0">
            <img src="/logo.png" className="h-8" alt="Hope Compassion Center" />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 tablet:mb-0">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:underline me-4 tablet:me-6">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 tablet:mx-auto laptop:my-8" />
        <span className="block text-sm text-gray-500 tablet:text-center">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline">
            Hope Compassion Center
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
