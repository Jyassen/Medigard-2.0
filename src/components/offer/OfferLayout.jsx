import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LOGO_VARIATION } from "../../constants/media";
import { ROUTES } from "../../constants/routes";
import { O, offerHowTo } from "../../offer/constants";
import { getSiteOrigin } from "../../site";
import { useFunnelTracking } from "../../hooks/useFunnelTracking";
import "../../offer/offer.css";

function OfferLogo({ to = O.home }) {
  return (
    <Link to={to} aria-label="Medigard home" className="brand">
      <img
        src={LOGO_VARIATION}
        alt="Medigard Growth + Compliance"
        className="offer-logo"
        decoding="async"
      />
    </Link>
  );
}

function OfferNav() {
  const { pathname } = useLocation();
  const onHome = pathname === O.home;
  const onV2 = pathname === ROUTES.offerV2;

  return (
    <header className="nav container">
      <OfferLogo to={onV2 ? ROUTES.offerV2 : O.home} />
      {onV2 ? (
        <a className="btn btn-small" href="#book">
          Book a Review
        </a>
      ) : onHome ? (
        <Link className="btn btn-small" to={O.book}>
          Book a Review
        </Link>
      ) : (
        <Link className="text-link" to={O.home}>
          ← Back home
        </Link>
      )}
    </header>
  );
}

function OfferFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer container">
      <div>
        <OfferLogo />
        <span>Growth infrastructure for Medicare agencies.</span>
      </div>
      <div className="footer-links">
        <Link to={offerHowTo}>How it works</Link>
        <Link to={O.contact}>Contact</Link>
        <Link to={O.privacy}>Privacy Policy</Link>
        <Link to={O.terms}>Terms &amp; Conditions</Link>
        <Link to={ROUTES.compliance}>Compliance</Link>
      </div>
      <p className="footer-note">
        © {year} Medigard Compliance Systems LLC. All rights reserved. We
        install consumer-growth, recruiting, follow-up, and agent-progression
        systems for Medicare agencies. We do not guarantee agent production,
        revenue, commissions, enrollments, or outcomes controlled by carriers,
        agency managers, or individual recruits.
      </p>
    </footer>
  );
}

export default function OfferLayout() {
  const { pathname } = useLocation();
  const ownChrome = pathname === ROUTES.offerV3 || pathname === ROUTES.offerV4;
  const shellClass = {
    [ROUTES.offerV3]: "offer-v3-shell",
    [ROUTES.offerV4]: "offer-v4-shell",
  }[pathname];
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
    <div className={shellClass || "offer-shell"}>
      {ownChrome ? null : <OfferNav />}
      <Outlet />
      {ownChrome ? null : <OfferFooter />}
    </div>
  );
}
