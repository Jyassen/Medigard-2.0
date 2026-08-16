import { Link } from "react-router-dom";
import TermsAndConditionsContent from "../../components/TermsAndConditionsContent";
import { O } from "../../offer/constants";

export default function OfferTerms() {
  return (
    <main>
      <article className="legal container narrow">
        <div className="eyebrow">MEDIGARD</div>
        <h1>Terms &amp; Conditions</h1>
        <p className="updated">Effective as of June 4, 2026</p>
        <TermsAndConditionsContent privacyTo={O.privacy} />
        <p className="legal-note">
          Fees, scope, and any setup guarantee are stated in a written
          agreement. We do not promise enrollments, revenue, commissions, or
          agent production.
        </p>
        <p>
          <Link className="text-link" to={O.home}>
            ← Back home
          </Link>
        </p>
      </article>
    </main>
  );
}
