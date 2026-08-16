import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";
import { getSiteOrigin } from "../site";
import { useFunnelTracking } from "../hooks/useFunnelTracking";

export default function MainLayout() {
  const { pathname } = useLocation();
  useFunnelTracking(pathname);

  useEffect(() => {
    const origin = getSiteOrigin();
    if (!origin) return;
    const href = `${origin}${pathname === "/" ? "" : pathname}`;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-slate-900 flex flex-col">
      <SiteNav />
      <Outlet />
      <SiteFooter />
    </div>
  );
}
