import { Link } from "react-router-dom";
import { LEGAL_BUSINESS_NAME } from "../../smsConsentCopy";
import { O } from "../../offer/constants";
import { getSiteOrigin } from "../../site";

export default function OfferContact() {
  const origin = getSiteOrigin();
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

  return (
    <main>
      <section className="booking-hero container narrow">
        <div className="eyebrow">REACH THE TEAM</div>
        <h1>
          Talk with the <span>Medigard</span> team.
        </h1>
        <p className="hero-copy">
          Reach {LEGAL_BUSINESS_NAME} (d/b/a Medigard) about appointments,
          recruiting, follow-up, and the 30-day path from signed agent to
          working producer.
        </p>
      </section>
      <section className="section container narrow">
        <div className="contact-card">
          {origin && (
            <p>
              <label>Website</label>
              <a className="text-link" href={origin}>
                {origin}
              </a>
            </p>
          )}
          {contactEmail && typeof contactEmail === "string" && (
            <p>
              <label>Email</label>
              <a className="text-link" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </p>
          )}
          <p className="lead">
            For a structured look at your agency,{" "}
            <Link className="text-link" to={O.book}>
              book your agency review
            </Link>{" "}
            so we can prepare.
          </p>
        </div>
      </section>
    </main>
  );
}
