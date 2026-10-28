import { Link } from "react-router-dom";
import { site } from "../data/site.js";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Account Solutions</p>
          <p className="mt-2 text-sm opacity-70">
            Accounts, tax and business advisory in Kothamangalam.
          </p>
        </div>
        <div className="text-sm opacity-80">
          <p className="eyebrow mb-2">Office</p>
          {site.address.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
        <div className="text-sm opacity-80">
          <p className="eyebrow mb-2">Contact</p>
          <p className="flex items-center gap-3 text-white/60 text-sm py-2">
            <span className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-xl flex-shrink-0">
              <FaPhone className="text-white text-xs" />
            </span>
            <a
              href="tel:+919744668439"
              className="hover:text-white transition-colors duration-200"
            >
              +919744668439
            </a>
          </p>

          <p className="flex items-center gap-3 text-white/60 text-sm py-2">
            <span className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-xl flex-shrink-0">
              <FaPhone className="text-white text-xs" />
            </span>
            <a
              href="tel:+919847420649"
              className="hover:text-white transition-colors duration-200"
            >
              +919847420649
            </a>
          </p>

          <p className="flex items-center gap-3 text-white/60 text-sm py-2">
            <span className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-xl flex-shrink-0">
              <FaEnvelope className="text-white text-xs" />
            </span>
            <a
              href="mailto:taxconsultantklm2026@gmail.com"
              className="hover:text-white transition-colors duration-200"
            >
              taxconsultantklm2026@gmail.com
            </a>
          </p>
        </div>
      </div>
      <p className="border-t border-navy-foreground/10 py-4 text-center text-xs opacity-60">
        © {new Date().getFullYear()} {site.name} . All rights reserved.
      </p>
    </footer>
  );
}
