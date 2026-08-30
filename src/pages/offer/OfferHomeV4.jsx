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
import { OFFER_V4 } from "../../offer/copyV4";

export default function OfferHomeV4() {
  const paths = useOfferPaths();
  const bookingSrc = withSource(BOOKING_URLS.growth, CRM_SOURCES.offerBook);
  const embedsCalendar = canEmbedBooking(BOOKING_URLS.growth);

  return (
    <main>
      <section className="v4-hero">
        <div className="v4-wrap">
          <p className="v4-audience">{OFFER_V4.audience}</p>
          <h1>
            {OFFER_V4.hero.headline} <em>{OFFER_V4.hero.headlineAccent}</em>
          </h1>
          <p className="v4-hero-sub">{OFFER_V4.hero.subhead}</p>
          <div className="v4-hero-actions">
            <a className="v4-btn" href="#book">
              {OFFER_V4.hero.cta}
            </a>
            <a className="v4-btn v4-btn-ghost" href="#how-it-works">
              {OFFER_V4.hero.ctaSecondary}
            </a>
          </div>
          <div className="v4-proof">
            {OFFER_V4.proof.map((item) => (
              <div key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v4-platform" id="how-it-works">
        <div className="v4-wrap">
          <p className="v4-kicker">{OFFER_V4.platform.kicker}</p>
          <h2>{OFFER_V4.platform.heading}</h2>
          <p className="v4-lead">{OFFER_V4.platform.lead}</p>
          <div className="v4-platform-grid">
            <div className="v4-features">
              {OFFER_V4.platform.features.map((feature) => (
                <article className="v4-feature" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                  <ul>
                    {feature.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="v4-video" title="See how Medigard works">
              <VslPlayer
                className="v4-player"
                src={VSL_VIDEO}
                wistiaId={GROWTH_VSL_WISTIA_ID || undefined}
                wistiaAspect={GROWTH_VSL_ASPECT}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="v4-phases">
        <div className="v4-wrap">
          <p className="v4-kicker">{OFFER_V4.phases.kicker}</p>
          <h2>{OFFER_V4.phases.heading}</h2>
          <div className="v4-phase-grid">
            {OFFER_V4.phases.items.map((phase) => (
              <article className="v4-phase" key={phase.tag}>
                <span className="v4-phase-tag">{phase.tag}</span>
                <h3>{phase.title}</h3>
                <ul>
                  {phase.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="v4-book" id="book">
        <div className="v4-wrap">
          <p className="v4-kicker">{OFFER_V4.booking.kicker}</p>
          <h2>{OFFER_V4.booking.heading}</h2>
          <p className="v4-book-lead">{OFFER_V4.booking.subhead}</p>
          <div className="v4-book-grid">
            <ul className="v4-book-points">
              {OFFER_V4.booking.points.map((point) => (
                <li key={point.title}>
                  <strong>{point.title}</strong>
                  <span>{point.desc}</span>
                </li>
              ))}
            </ul>
            <div className="v4-calendar">
              {embedsCalendar ? (
                <BookingWidget
                  src={bookingSrc}
                  title="Schedule a Medigard agency review"
                  thankYouTo={paths.thanks}
                />
              ) : (
                <a
                  className="v4-btn"
                  href={bookingSrc}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open agency review calendar →
                </a>
              )}
              <small className="v4-fine">
                By booking, you agree to receive scheduling messages. Message
                frequency varies; message and data rates may apply. Reply STOP
                to unsubscribe. This is an agency fit review. We do not promise
                revenue, enrollments, commissions, or what agents write.
              </small>
            </div>
          </div>
        </div>
      </section>

      <section className="v4-close-sec">
        <div className="v4-wrap">
          <p className="v4-kicker">{OFFER_V4.guarantee.kicker}</p>
          <p className="v4-reframe">{OFFER_V4.reframe}</p>
          <div className="v4-guarantee">
            <h2>{OFFER_V4.guarantee.heading}</h2>
            <p>{OFFER_V4.guarantee.body}</p>
          </div>
          <div className="v4-split">
            <div>
              <p className="v4-kicker">{OFFER_V4.notFor.kicker}</p>
              <h2>{OFFER_V4.notFor.heading}</h2>
              <ul className="v4-not-for">
                {OFFER_V4.notFor.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="v4-kicker">{OFFER_V4.faqsSection.kicker}</p>
              <h2>{OFFER_V4.faqsSection.heading}</h2>
              <div className="v4-faq">
                {OFFER_V4.faqs.map((faq, index) => (
                  <details key={faq.q} open={index === 0}>
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="v4-band">
        <div className="v4-wrap">
          <h2>{OFFER_V4.close.heading}</h2>
          <p>{OFFER_V4.close.subhead}</p>
          <a className="v4-btn" href="#book">
            {OFFER_V4.close.cta}
          </a>
        </div>
      </section>
    </main>
  );
}
