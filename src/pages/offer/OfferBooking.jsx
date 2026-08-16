import { Link } from "react-router-dom";
import BookingWidget from "../../components/BookingWidget";
import { BOOKING_URLS, CRM_SOURCES, withSource } from "../../constants/funnels";
import { VSL_VIDEO } from "../../constants/media";
import { O } from "../../offer/constants";
import { OFFER } from "../../offer/copy";

export default function OfferBooking() {
  const bookingSrc = withSource(BOOKING_URLS.growth, CRM_SOURCES.offerBook);
  const embedsCalendar = BOOKING_URLS.growth.startsWith(
    "https://api.leadconnectorhq.com/widget/booking/",
  );

  return (
    <main className="booking-page">
      <section className="booking-hero container narrow">
        <div className="eyebrow">FOR MEDICARE AGENCY OWNERS</div>
        <h1>
          See how <span>Medigard</span> can help your team.
        </h1>
        <p className="hero-copy">
          We will look at your appointments, follow-up, recruiting, and
          new-agent process. No jargon. No pressure. Just a clear look at what
          needs to change. Bring one agent with open time and one new agent who
          has not started yet.
        </p>
        <div className="review-badge">
          ★★★★★ <span>Simple, practical agency review</span>
        </div>
      </section>
      <section className="section container booking-grid">
        <div>
          <div className="asset-box">
            <video
              src={VSL_VIDEO}
              controls
              playsInline
              preload="metadata"
              title="See how Medigard works"
            />
            <div className="asset-copy">
              <h3>See how it works</h3>
              <p>
                Watch the short video to see how appointments, recruiting,
                follow-up, and the 30-day ramp fit together.
              </p>
            </div>
          </div>
          <div className="discover">
            <div className="section-kicker">WHAT YOU’LL LEAVE WITH</div>
            <h2>What you will learn</h2>
            <ul className="check-list dark-list">
              {OFFER.review.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.desc}</span>
                </li>
              ))}
            </ul>
            <p className="lead">
              Prefer email first?{" "}
              <Link className="text-link" to={O.contact}>
                Contact the team.
              </Link>
            </p>
          </div>
        </div>
        <aside className="calendar-card">
          <div className="section-kicker">STEP 1 · PICK A TIME</div>
          <h2>Book your review.</h2>
          <p>
            Choose a time that works for you. We will send the meeting details
            by email.
          </p>
          {embedsCalendar ? (
            <BookingWidget
              src={bookingSrc}
              title="Schedule a Medigard agency review"
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
        </aside>
      </section>
    </main>
  );
}
