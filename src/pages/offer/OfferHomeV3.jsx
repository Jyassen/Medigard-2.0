import BookingWidget from "../../components/BookingWidget";
import { useOfferPaths } from "../../components/offer/OfferFunnelContext";
import {
  BOOKING_URLS,
  canEmbedBooking,
  CRM_SOURCES,
  withSource,
} from "../../constants/funnels";
import VslPlayer from "../../components/VslPlayer";
import {
  GROWTH_VSL_ASPECT,
  GROWTH_VSL_WISTIA_ID,
  VSL_VIDEO,
} from "../../constants/media";
import { OFFER_V3 } from "../../offer/copyV3";

export default function OfferHomeV3() {
  const paths = useOfferPaths();
  const bookingSrc = withSource(BOOKING_URLS.growth, CRM_SOURCES.offerBook);
  const embedsCalendar = canEmbedBooking(BOOKING_URLS.growth);

  return (
    <main>
      <section className="v3-hero">
        <div className="v3-wrap">
          <div className="v3-hero-copy">
            <h1>{OFFER_V3.hero.headline}</h1>
            <p className="v3-hero-sub">{OFFER_V3.hero.subhead}</p>
          </div>
          <div className="v3-video" title="See how Medigard works">
            <VslPlayer
              src={VSL_VIDEO}
              wistiaId={GROWTH_VSL_WISTIA_ID || undefined}
              wistiaAspect={GROWTH_VSL_ASPECT}
            />
          </div>
          <a className="v3-cta" href="#book">
            {OFFER_V3.hero.cta}
          </a>
        </div>
      </section>

      <section className="v3-book" id="book">
        <div className="v3-wrap">
          <p className="v3-kicker">{OFFER_V3.booking.kicker}</p>
          <h2>{OFFER_V3.booking.heading}</h2>
          <p className="v3-book-lead">{OFFER_V3.booking.subhead}</p>
          <div className="v3-book-grid">
            <ul className="v3-book-points">
              {OFFER_V3.booking.points.map((point) => (
                <li key={point.title}>
                  <strong>{point.title}</strong>
                  <span>{point.desc}</span>
                </li>
              ))}
            </ul>
            <div className="v3-calendar">
              {embedsCalendar ? (
                <BookingWidget
                  src={bookingSrc}
                  title="Schedule a Medigard agency review"
                  thankYouTo={paths.thanks}
                />
              ) : (
                <a
                  className="v3-cta"
                  href={bookingSrc}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open agency review calendar →
                </a>
              )}
              <small className="v3-fine">
                By booking, you agree to receive scheduling messages. Message
                frequency varies; message and data rates may apply. Reply STOP
                to unsubscribe. This is an agency fit review. We do not promise
                revenue, enrollments, commissions, or what agents write.
              </small>
            </div>
          </div>
        </div>
      </section>

      <section className="v3-installs" id="how-it-works">
        <div className="v3-wrap">
          <div className="v3-section-head">
            <p className="v3-kicker">{OFFER_V3.installsSection.kicker}</p>
            <h2>{OFFER_V3.installsSection.heading}</h2>
            <p className="v3-lead">{OFFER_V3.installsSection.lead}</p>
          </div>
          <div className="v3-cards">
            {OFFER_V3.installs.map((item) => (
              <article className="v3-card" key={item.title}>
                <p className="v3-card-kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="v3-stats">
                  {item.stats.map((stat) => (
                    <div className="v3-stat" key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="v3-mechanism">
        <div className="v3-wrap">
          <div className="v3-section-head">
            <p className="v3-kicker">{OFFER_V3.mechanism.kicker}</p>
            <h2>{OFFER_V3.mechanism.heading}</h2>
            <p className="v3-lead">{OFFER_V3.mechanism.lead}</p>
          </div>
          <div className="v3-layers">
            {OFFER_V3.mechanism.layers.map((layer) => (
              <article className="v3-layer" key={layer.n}>
                <p className="v3-layer-tag">
                  Layer {layer.n} · {layer.tag}
                </p>
                <h3>{layer.title}</h3>
                <p>{layer.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="v3-how">
        <div className="v3-wrap">
          <p className="v3-kicker">The reframe</p>
          <h2>Why agencies stall when they try to grow.</h2>
          <p className="v3-reframe">{OFFER_V3.reframe}</p>
          <div className="v3-guarantee">
            <p className="v3-kicker">{OFFER_V3.guarantee.kicker}</p>
            <h2>{OFFER_V3.guarantee.heading}</h2>
            <p>{OFFER_V3.guarantee.body}</p>
          </div>
        </div>
      </section>

      <section className="v3-close">
        <div className="v3-wrap v3-close-grid">
          <div>
            <p className="v3-kicker">{OFFER_V3.notFor.kicker}</p>
            <h2>{OFFER_V3.notFor.heading}</h2>
            <ul className="v3-not-for">
              {OFFER_V3.notFor.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="v3-kicker">{OFFER_V3.faqsSection.kicker}</p>
            <h2>{OFFER_V3.faqsSection.heading}</h2>
            <div className="v3-faq">
              {OFFER_V3.faqs.map((faq, index) => (
                <details key={faq.q} open={index === 0}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
