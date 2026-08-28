import { Link } from "react-router-dom";
import { LOGO_VARIATION } from "../../constants/media";
import { OFFER_V4 } from "../../offer/copyV4";

function V4Logo({ to }) {
  return (
    <Link to={to} aria-label="Medigard home">
      <img
        src={LOGO_VARIATION}
        alt="Medigard Growth + Compliance"
        className="v4-logo"
        decoding="async"
      />
    </Link>
  );
}

export function OfferV4Header({ paths }) {
  return (
    <header className="v4-header">
      <div className="v4-wrap v4-header-inner">
        <V4Logo to={paths.home} />
        <a className="v4-btn" href={`${paths.home}#book`}>
          {OFFER_V4.navCta}
        </a>
      </div>
    </header>
  );
}

export function OfferV4Footer({ paths }) {
  const year = new Date().getFullYear();
  return (
    <footer className="v4-footer">
      <div className="v4-wrap">
        <div className="v4-footer-top">
          <V4Logo to={paths.home} />
          <p className="v4-footer-line">{OFFER_V4.footer.line}</p>
        </div>
        <div className="v4-footer-links">
          <Link to={paths.howTo}>How it works</Link>
          <Link to={paths.contact}>Contact</Link>
          <Link to={paths.privacy}>Privacy Policy</Link>
          <Link to={paths.terms}>Terms &amp; Conditions</Link>
        </div>
        <p className="v4-footer-note">
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
