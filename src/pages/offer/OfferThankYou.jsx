import { Link } from "react-router-dom";
import VslPlayer from "../../components/VslPlayer";
import { useOfferPaths } from "../../components/offer/OfferFunnelContext";
import {
  GROWTH_VSL_ASPECT,
  PRE_CALL_VSL_WISTIA_ID,
  PRE_VSL_VIDEO,
} from "../../constants/media";

const nextSteps = [
  {
    title: "Check Inbox",
    desc: "We will send a confirmation email with your meeting link. Accept the time so we can start on time.",
  },
  {
    title: "Add Calendar",
    desc: "Add the session to your calendar so the 30-minute review does not get lost.",
  },
  {
    title: "Invite Team",
    desc: "Include whoever owns interviews or onboarding so we can design around how your agency actually works.",
  },
];

const prepItems = [
  "How many new leads you get each month",
  "How fast your team contacts a new lead",
  "How many appointments are booked and attended",
  "How many active agents have open time",
  "How many new agents have signed up but not started",
  "The task you spend the most time chasing",
  "Your AEP or next growth deadline",
  "The calendar invite accepted in your inbox",
];

export default function OfferThankYou() {
  const paths = useOfferPaths();
  return (
    <main className="thank-page">
      <section className="thank-hero container narrow">
        <div className="success-icon">✓</div>
        <div className="eyebrow">REVIEW REQUEST RECEIVED</div>
        <h1>
          Your review is <span>almost confirmed.</span>
        </h1>
        <p className="hero-copy">
          Check your inbox for the calendar invite and accept the time. Before
          we meet, pick one producer who should already be working—but is not.
          That example is how we will find the gap.
        </p>
        <div className="detail-grid">
          <div>
            <strong>When</strong>
            <span>See your confirmation email for the time.</span>
          </div>
          <div>
            <strong>Where</strong>
            <span>Your meeting link will be in the email.</span>
          </div>
          <div>
            <strong>Duration</strong>
            <span>30 minutes. Clear advice, not a pressure pitch.</span>
          </div>
        </div>
      </section>
      <section className="section container narrow">
        <div className="video-frame">
          <VslPlayer
            kicker="PRE-CALL BRIEFING"
            title="Watch this before the call"
            className="thank-vsl"
            src={PRE_VSL_VIDEO}
            wistiaId={PRE_CALL_VSL_WISTIA_ID || undefined}
            wistiaAspect={GROWTH_VSL_ASPECT}
          />
          <div className="asset-copy">
            <p>
              A short briefing so we can hit the ground running on appointments,
              recruiting, follow-up, and getting new agents working.
            </p>
          </div>
        </div>
        <div className="notice">
          <div className="section-kicker">BEFORE THE CALL</div>
          <h2>Bring a few simple numbers.</h2>
          <p>Have these ready so we can find the biggest gap quickly:</p>
          <ul className="prep-list">
            {prepItems.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
        </div>
        <div className="detail-grid">
          {nextSteps.map((step) => (
            <div key={step.title}>
              <strong>{step.title}</strong>
              <span>{step.desc}</span>
            </div>
          ))}
        </div>
        <p className="pull-quote">
          “Most agency owners see it quickly: the problem is not always more
          leads. It is what happens after the lead comes in.”
        </p>
        <p>
          <Link className="text-link" to={paths.home}>
            ← Back to Medigard
          </Link>
        </p>
      </section>
    </main>
  );
}
