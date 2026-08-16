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

  return (
    <header className="nav container">
      <OfferLogo />
      {onHome ? (
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
    <div className="offer-shell">
      <OfferNav />
      <Outlet />
      <OfferFooter />
    </div>
  );
}
