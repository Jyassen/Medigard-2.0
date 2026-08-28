import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import MedigardLogo from "../MedigardLogo";
import { G, growthBenefitsTo } from "../../growth/constants";
import { getSiteOrigin } from "../../site";
import { useFunnelTracking } from "../../hooks/useFunnelTracking";

function GrowthNav() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const solutionActive = pathname === G.home && hash === "#solution";
  const link = ({ isActive }) =>
    `text-sm font-bold uppercase tracking-widest transition-colors ${
      isActive ? "text-[#137f73]" : "text-slate-500 hover:text-[#1e293b]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 py-4 px-6 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <div onClick={() => setOpen(false)}>
          <MedigardLogo to={G.home} />
        </div>
        <button
          type="button"
          className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-black uppercase tracking-widest text-slate-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          Menu
        </button>
        <nav
          className={`${
            open ? "flex" : "hidden"
          } w-full flex-col gap-6 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-8`}
        >
          <NavLink
            to={G.home}
            className={link}
            onClick={() => setOpen(false)}
            end
          >
            Home
          </NavLink>
          <Link
            to={growthBenefitsTo}
            onClick={() => setOpen(false)}
            className={link({ isActive: solutionActive })}
          >
            How It Works
          </Link>
          <NavLink
            to={G.contact}
            className={link}
            onClick={() => setOpen(false)}
          >
            Contact Us
          </NavLink>
          <Link
            to={G.book}
            onClick={() => setOpen(false)}
            className="inline-block rounded-xl bg-[#137f73] px-6 py-2.5 text-center text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-[#0f665d]"
          >
            Book Review
          </Link>
        </nav>
      </div>
    </header>
  );
}

function GrowthFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-slate-100 bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="mb-8 flex justify-center">
          <MedigardLogo size="sm" to={G.home} />
        </div>
        <div className="mb-8 flex flex-wrap justify-center gap-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400 md:gap-10">
          <Link to={G.privacy} className="hover:text-[#137f73]">
            Privacy Policy
          </Link>
          <Link to={G.terms} className="hover:text-[#137f73]">
            Terms of Service
          </Link>
          <Link to={growthBenefitsTo} className="hover:text-[#137f73]">
            How It Works
          </Link>
          <Link to={G.contact} className="hover:text-[#137f73]">
            Contact Us
          </Link>
        </div>
        <p className="mb-6 text-sm font-medium text-slate-500">
          © {year} Medigard Compliance Systems LLC. All rights reserved.
        </p>
        <p className="mx-auto mb-6 max-w-2xl text-xs leading-relaxed text-slate-500">
          Medigard Compliance Systems LLC, doing business as Medigard, operates
          this Growth infrastructure funnel and the services described herein.
          References to &quot;Medigard&quot; refer to Medigard Compliance
          Systems LLC.
        </p>
        <p className="mx-auto max-w-2xl text-[10px] uppercase tracking-widest leading-relaxed text-slate-400">
          We install Agency Scale Infrastructure for Medicare agencies. We do
          not guarantee agent production, revenue, commissions, enrollments, or
          outcomes controlled by carriers, agency managers, or individual
          recruits.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-[10px] leading-relaxed text-slate-400">
          This site is not part of the Facebook Inc. website or Google Inc. In
          addition, this site is not endorsed by Facebook in any way or by
          Google.
        </p>
      </div>
    </footer>
  );
}

export default function GrowthLayout() {
  const { pathname } = useLocation();
  useFunnelTracking(pathname);

  useEffect(() => {
    const origin = getSiteOrigin();
    if (!origin) return;
    const href = `${origin}${pathname}`;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white font-['Inter'] text-slate-900">
      <GrowthNav />
      <Outlet />
      <GrowthFooter />
    </div>
  );
}
