import BookingWidget from "../../components/BookingWidget";
import { useOfferPaths } from "../../components/offer/OfferFunnelContext";
import VslPlayer from "../../components/VslPlayer";
import {
  BOOKING_URLS,
  canEmbedBooking,
  CRM_SOURCES,
  withSource,
} from "../../constants/funnels";
import {
  GROWTH_VSL_ASPECT,
  GROWTH_VSL_WISTIA_ID,
  VSL_VIDEO,
} from "../../constants/media";
import { OFFER_V2 } from "../../offer/copyV2";

export default function OfferHomeV2() {
  const paths = useOfferPaths();
  const bookingSrc = withSource(BOOKING_URLS.compliance, CRM_SOURCES.offerBook);

  return (
    <main>
      <section className="hero container hero-v2">
        <div className="eyebrow">{OFFER_V2.hero.kicker}</div>
        <h1>
          {OFFER_V2.hero.headline} <span>{OFFER_V2.hero.headlineAccent}</span>
        </h1>
        <div className="vsl-slot" id="vsl">
          <VslPlayer
            title="See how the Medigard Growth System works"
            src={VSL_VIDEO}
            wistiaId={GROWTH_VSL_WISTIA_ID || undefined}
            wistiaAspect={GROWTH_VSL_ASPECT}
          />
        </div>
        <div className="proof-strip">
          {OFFER_V2.proof.map((item) => (
            <div key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <p className="hero-copy">{OFFER_V2.hero.subhead}</p>
        <div className="hero-actions">
          <a className="btn" href="#book">
            Book Your Review <span>→</span>
          </a>
          <a className="text-link" href="#how-it-works">
            See how it works ↓
          </a>
        </div>
      </section>

      <section className="section container" id="book">
        <div className="section-kicker">{OFFER_V2.booking.kicker}</div>
        <h2>
          {OFFER_V2.booking.heading}{" "}
          <span>{OFFER_V2.booking.headingAccent}</span>
        </h2>
        <p className="lead">{OFFER_V2.booking.subhead}</p>
        <div className="calendar-card home-calendar">
          {canEmbedBooking(BOOKING_URLS.compliance) ? (
            <BookingWidget
              src={bookingSrc}
              title="Schedule a Medigard agency review"
              thankYouTo={paths.thanks}
            />
          ) : (
            <a
              className="btn full"
              href={bookingSrc}
              target="_blank"
              rel="noreferrer"
            >
              Open agency review calendar →
            </a>
          )}
          <small className="fine">
            By booking, you agree to receive scheduling messages. Message
            frequency varies; message and data rates may apply. Reply STOP to
            unsubscribe. This is an agency fit review. We do not promise
            revenue, enrollments, commissions, or what agents write.
          </small>
        </div>
      </section>

      <section className="section section-dark" id="problem">
        <div className="container">
          <div className="section-kicker">{OFFER_V2.problem.kicker}</div>
          <h2>
            {OFFER_V2.problem.heading}{" "}
            <span>{OFFER_V2.problem.headingAccent}</span>
          </h2>
          <p className="lead">{OFFER_V2.problem.lead}</p>
          <div className="cards three">
            {OFFER_V2.problem.cards.map((card) => (
              <article className="card" key={card.n}>
                <div className="icon">{card.n}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" id="how-it-works">
        <div className="section-kicker">{OFFER_V2.how.kicker}</div>
        <h2>
          {OFFER_V2.how.heading} <span>{OFFER_V2.how.headingAccent}</span>
        </h2>
        <p className="lead">{OFFER_V2.how.lead}</p>
        <div className="steps">
          {OFFER_V2.how.steps.map((step) => (
            <article key={step.n}>
              <b>{step.n}</b>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-kicker">BEFORE &amp; AFTER</div>
          <h2>
            {OFFER_V2.compare.heading}{" "}
            <span>{OFFER_V2.compare.headingAccent}</span>
          </h2>
          <div className="compare">
            <div className="compare-before">
              <h3>{OFFER_V2.compare.before.heading}</h3>
              <p>{OFFER_V2.compare.before.lead}</p>
              <ul>
                {OFFER_V2.compare.before.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="compare-after">
              <h3>{OFFER_V2.compare.after.heading}</h3>
              <p>{OFFER_V2.compare.after.lead}</p>
              <ul>
                {OFFER_V2.compare.after.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-kicker">{OFFER_V2.review.kicker}</div>
        <h2>
          {OFFER_V2.review.heading} <span>{OFFER_V2.review.headingAccent}</span>
        </h2>
        <p className="lead">{OFFER_V2.review.lead}</p>
        <div className="cards three">
          {OFFER_V2.review.items.map((item, index) => (
            <article className="card" key={item.title}>
              <div className="icon">{String(index + 1).padStart(2, "0")}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-navy">
        <div className="container narrow">
          <div className="section-kicker">{OFFER_V2.guarantee.kicker}</div>
          <h2>{OFFER_V2.guarantee.heading}</h2>
          <p className="lead light">{OFFER_V2.guarantee.body}</p>
          <a className="btn btn-gold" href="#book">
            See If You’re a Fit →
          </a>
        </div>
      </section>

      <section className="section container">
        <div className="section-kicker">{OFFER_V2.notFor.kicker}</div>
        <h2>
          {OFFER_V2.notFor.heading} <span>{OFFER_V2.notFor.headingAccent}</span>
        </h2>
        <ul className="not-for">
          {OFFER_V2.notFor.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-kicker">{OFFER_V2.faqsSection.kicker}</div>
          <h2>{OFFER_V2.faqsSection.heading}</h2>
          <div className="faq">
            {OFFER_V2.faqs.map((faq, index) => (
              <details key={faq.q} open={index === 0}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>{OFFER_V2.cta.heading}</h2>
          <p>{OFFER_V2.cta.subhead}</p>
          <a className="btn btn-gold" href="#book">
            Book Your Review →
          </a>
        </div>
      </section>
    </main>
  );
}
