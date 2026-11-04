import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

const variants = {
  primary: "bg-forest text-white hover:bg-forest-deep",
  accent: "bg-rust text-white hover:bg-rust-deep",
  outline: "border border-forest text-forest hover:bg-forest hover:text-white",
  light: "bg-white text-forest hover:bg-cream",
  "outline-light": "border border-white/70 text-white hover:bg-white hover:text-forest",
};

export default function ButtonLink({ href, children, variant = "primary", arrow = true, className = "", ...props }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {arrow && (
        <LuArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}
