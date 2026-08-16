import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import MedigardLogo from "./MedigardLogo";
import { ROUTES } from "../constants/routes";

const linkClass = ({ isActive }) =>
  `text-sm font-bold uppercase tracking-widest transition-colors ${
    isActive ? "text-[#3b82f6]" : "text-slate-500 hover:text-[#1e293b]"
  }`;

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const bookingPath = pathname.startsWith(ROUTES.launch)
    ? ROUTES.launchBook
    : pathname.startsWith(ROUTES.compliance)
      ? ROUTES.complianceBook
      : ROUTES.contact;

  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white/95 px-6 py-3 backdrop-blur md:px-8">
      <div className="relative z-10 shrink-0">
        <MedigardLogo />
      </div>
      <button
        type="button"
        className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-widest"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="site-nav-links"
      >
        Menu
      </button>
      <nav
        id="site-nav-links"
        className={`${open ? "flex" : "hidden"} md:flex w-full md:w-auto flex-col md:flex-row md:items-center gap-6 md:gap-8`}
      >
        <NavLink
          to={ROUTES.home}
          className={linkClass}
          onClick={() => setOpen(false)}
          end
        >
          Systems
        </NavLink>
        <NavLink
          to={ROUTES.launch}
          className={linkClass}
          onClick={() => setOpen(false)}
        >
          Growth
        </NavLink>
        <NavLink
          to={ROUTES.t65}
          className={linkClass}
          onClick={() => setOpen(false)}
        >
          T-65
        </NavLink>
        <NavLink
          to={ROUTES.compliance}
          className={linkClass}
          onClick={() => setOpen(false)}
        >
          Compliance
        </NavLink>
        <NavLink
          to={bookingPath}
          className="inline-block bg-[#14251f] px-6 py-3 text-center text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-[#137f73]"
          onClick={() => setOpen(false)}
        >
          Book a review
        </NavLink>
      </nav>
    </header>
  );
}
