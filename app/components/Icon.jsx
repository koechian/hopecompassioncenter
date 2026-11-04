import {
  LuBuilding2,
  LuHandCoins,
  LuHandHeart,
  LuHandshake,
  LuHeart,
  LuLandmark,
  LuScale,
  LuShieldCheck,
  LuSprout,
  LuUsers,
} from "react-icons/lu";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa6";

// Content files name icons by meaning; this maps those names to icon components.
const icons = {
  compassion: LuHeart,
  service: LuHandHeart,
  integrity: LuShieldCheck,
  inclusion: LuUsers,
  empowerment: LuSprout,
  stewardship: LuScale,
  give: LuHandCoins,
  volunteer: LuHandshake,
  institution: LuBuilding2,
  grant: LuLandmark,
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  LinkedIn: FaLinkedinIn,
  WhatsApp: FaWhatsapp,
};

export default function Icon({ name, className }) {
  const Component = icons[name];
  return Component ? <Component aria-hidden="true" className={className} /> : null;
}
