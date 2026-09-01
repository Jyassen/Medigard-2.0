import BookingWidget from "../../components/BookingWidget";
import { useOfferPaths } from "../../components/offer/OfferFunnelContext";
import {
  BOOKING_URLS,
  canEmbedBooking,
  CRM_SOURCES,
  withSource,
} from "../../constants/funnels";
import { OFFER_V2 } from "../../offer/copyV2";

export default function ReviewBooking() {
  const paths = useOfferPaths();
  const bookingSrc = withSource(BOOKING_URLS.growth, CRM_SOURCES.reviewBook);
  const embedsCalendar = canEmbedBooking(BOOKING_URLS.growth);

  return (
    <main className="review-book">
      <section className="container">
        <div className="review-book-intro">
          <div className="review-book-copy">
            <div className="eyebrow">{OFFER_V2.reviewBook.kicker}</div>
            <h1>
              {OFFER_V2.reviewBook.headline}{" "}
              <span>{OFFER_V2.reviewBook.headlineAccent}</span>
            </h1>
            <p className="hero-copy">{OFFER_V2.reviewBook.subhead}</p>
          </div>
          <div
            className="review-book-visual"
            aria-label="What Medigard installs"
          >
            {OFFER_V2.how.steps.map((step) => (
              <article key={step.n}>
                <b>{step.n}</b>
                <h2>{step.title}</h2>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="calendar-card home-calendar">
          {embedsCalendar ? (
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
    </main>
  );
}
