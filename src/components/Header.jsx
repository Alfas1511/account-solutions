import { Link, NavLink } from "react-router-dom";
import { site } from "../data/site.js";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold">Account Solutions</span>
          {/* <span className="hidden text-xs uppercase tracking-[0.2em] text-gold sm:inline">
            Accounts Solutions
          </span> */}
        </Link>
        <nav className="flex gap-6 text-sm font-semibold">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end
              className={({ isActive }) =>
                isActive ? "text-gold" : "opacity-80 hover:opacity-100"
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
