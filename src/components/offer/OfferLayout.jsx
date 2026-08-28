import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LOGO_VARIATION } from "../../constants/media";
import { offerPaths, offerVariantFromPath } from "../../offer/constants";
import { getSiteOrigin } from "../../site";
import { useFunnelTracking } from "../../hooks/useFunnelTracking";
import { OfferFunnelContext } from "./OfferFunnelContext";
import { OfferV3Footer, OfferV3Header } from "./OfferV3Chrome";
import { OfferV4Footer, OfferV4Header } from "./OfferV4Chrome";
import "../../offer/offer.css";
import "../../offer/offer-v3.css";
import "../../offer/offer-v4.css";

function OfferLogo({ to }) {
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

function OfferNav({ paths }) {
  const { pathname } = useLocation();
  const onV2 = paths.variant === "v2";
  const onHome = pathname === paths.home;

  return (
    <header className="nav container">
      <OfferLogo to={paths.home} />
      {onV2 ? (
        <a className="btn btn-small" href={`${paths.home}#book`}>
          Book a Review
        </a>
      ) : onHome ? (
        <Link className="btn btn-small" to={paths.book}>
          Book a Review
        </Link>
      ) : (
        <Link className="text-link" to={paths.home}>
          ← Back home
        </Link>
      )}
    </header>
  );
}

function OfferFooter({ paths }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer container">
      <div>
        <OfferLogo to={paths.home} />
        <span>Growth infrastructure for Medicare agencies.</span>
      </div>
      <div className="footer-links">
        <Link to={paths.howTo}>How it works</Link>
        <Link to={paths.contact}>Contact</Link>
        <Link to={paths.privacy}>Privacy Policy</Link>
        <Link to={paths.terms}>Terms &amp; Conditions</Link>
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
  const variant = offerVariantFromPath(pathname);
  const paths = offerPaths(variant);
  const onLanding = pathname === paths.home;
  const shellClass = {
    v3: "offer-v3-shell",
    v4: "offer-v4-shell",
  }[variant];
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

  const themed =
    variant === "v3" ? (
      <>
        <OfferV3Header paths={paths} />
        {onLanding ? (
          <Outlet />
        ) : (
          <div className="offer-shell offer-variant-subpage">
            <Outlet />
          </div>
        )}
        <OfferV3Footer paths={paths} />
      </>
    ) : variant === "v4" ? (
      <>
        <OfferV4Header paths={paths} />
        {onLanding ? (
          <Outlet />
        ) : (
          <div className="offer-shell offer-variant-subpage">
            <Outlet />
          </div>
        )}
        <OfferV4Footer paths={paths} />
      </>
    ) : (
      <>
        <OfferNav paths={paths} />
        <Outlet />
        <OfferFooter paths={paths} />
      </>
    );

  return (
    <OfferFunnelContext.Provider value={paths}>
      <div className={shellClass || "offer-shell"}>{themed}</div>
    </OfferFunnelContext.Provider>
  );
}
