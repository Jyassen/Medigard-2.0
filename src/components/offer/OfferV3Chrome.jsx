import { Link } from "react-router-dom";
import { LOGO_VARIATION } from "../../constants/media";
import { OFFER_V3 } from "../../offer/copyV3";

function V3Logo({ to }) {
  return (
    <Link to={to} aria-label="Medigard home">
      <img
        src={LOGO_VARIATION}
        alt="Medigard Growth + Compliance"
        className="v3-logo"
        decoding="async"
      />
    </Link>
  );
}

export function OfferV3Header({ paths }) {
  return (
    <header className="v3-header">
      <div className="v3-wrap v3-header-inner">
        <V3Logo to={paths.home} />
        <p className="v3-audience">{OFFER_V3.audience}</p>
      </div>
    </header>
  );
}

export function OfferV3Footer({ paths }) {
  const year = new Date().getFullYear();
  return (
    <footer className="v3-footer">
      <div className="v3-wrap">
        <V3Logo to={paths.home} />
        <p className="v3-footer-line">{OFFER_V3.footer.line}</p>
        <div className="v3-footer-links">
          <Link to={paths.howTo}>How it works</Link>
          <Link to={paths.contact}>Contact</Link>
          <Link to={paths.privacy}>Privacy Policy</Link>
          <Link to={paths.terms}>Terms &amp; Conditions</Link>
        </div>
        <p className="v3-footer-note">
          © {year} Medigard Compliance Systems LLC. All rights reserved. We
          install consumer-growth, recruiting, follow-up, and agent-progression
          systems for Medicare agencies. We do not guarantee agent production,
          revenue, commissions, enrollments, or outcomes controlled by carriers,
          agency managers, or individual recruits.
        </p>
      </div>
    </footer>
  );
}
