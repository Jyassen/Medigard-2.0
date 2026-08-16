import { Link } from "react-router-dom";
import PrivacyPolicyContent from "../../components/PrivacyPolicyContent";
import { O } from "../../offer/constants";

export default function OfferPrivacy() {
  return (
    <main>
      <article className="legal container narrow">
        <div className="eyebrow">MEDIGARD</div>
        <h1>Privacy Policy</h1>
        <p className="updated">Effective as of June 4, 2026</p>
        <PrivacyPolicyContent termsTo={O.terms} />
        <p className="legal-note">
          This policy covers SMS, email, scheduling, and website tracking for
          Medigard Compliance Systems LLC, doing business as Medigard.
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
