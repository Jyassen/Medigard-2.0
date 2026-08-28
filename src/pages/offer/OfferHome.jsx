import { Link } from "react-router-dom";
import { O } from "../../offer/constants";
import { OFFER } from "../../offer/copy";

export default function OfferHome() {
  return (
    <main>
      <section className="hero container">
        <div className="eyebrow">{OFFER.hero.kicker}</div>
        <h1>
          {OFFER.hero.headline} <span>{OFFER.hero.headlineAccent}</span>
        </h1>
        <p className="hero-copy">{OFFER.hero.subhead}</p>
        <div className="hero-actions">
          <Link className="btn" to={O.book}>
            Book Your Medigard Review <span>→</span>
          </Link>
          <a className="text-link" href="#how-it-works">
            See how it works ↓
          </a>
        </div>
        <div className="proof-strip">
          {OFFER.proof.map((item) => (
            <div key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-dark" id="problem">
        <div className="container">
          <div className="section-kicker">{OFFER.problem.kicker}</div>
          <h2>
            {OFFER.problem.heading} <span>{OFFER.problem.headingAccent}</span>
          </h2>
          <p className="lead">{OFFER.problem.lead}</p>
          <div className="cards three">
            {OFFER.problem.cards.map((card) => (
              <article className="card" key={card.n}>
                <div className="icon">{card.n}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" id="signals">
        <div className="section-kicker">{OFFER.signals.kicker}</div>
        <h2>
          {OFFER.signals.heading} <span>{OFFER.signals.headingAccent}</span>
        </h2>
        <p className="lead">{OFFER.signals.lead}</p>
        <div className="cards three">
          {OFFER.purchaseSignals.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-dark" id="how-it-works">
        <div className="container">
          <div className="section-kicker">{OFFER.how.kicker}</div>
          <h2>
            {OFFER.how.heading} <span>{OFFER.how.headingAccent}</span>
          </h2>
          <p className="lead">{OFFER.how.lead}</p>
          <div className="steps">
            {OFFER.steps.map((step) => (
              <article key={step.n}>
                <b>{step.n}</b>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container split">
          <div>
            <div className="section-kicker">{OFFER.whySection.kicker}</div>
            <h2>
              {OFFER.whySection.heading}{" "}
              <span>{OFFER.whySection.headingAccent}</span>
            </h2>
            <p className="lead light">{OFFER.whySection.lead}</p>
            <Link className="btn btn-gold" to={O.book}>
              See If It Fits Your Agency →
            </Link>
          </div>
          <ul className="check-list">
            {OFFER.why.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section container">
        <div className="section-kicker">BEFORE &amp; AFTER</div>
        <h2>
          {OFFER.compare.heading} <span>{OFFER.compare.headingAccent}</span>
        </h2>
        <div className="compare">
          <div>
            <h3>{OFFER.compare.before.heading}</h3>
            <p>{OFFER.compare.before.lead}</p>
            <ul>
              {OFFER.compare.before.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="compare-after">
            <h3>{OFFER.compare.after.heading}</h3>
            <p>{OFFER.compare.after.lead}</p>
            <ul>
              {OFFER.compare.after.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-kicker">{OFFER.enemyKicker}</div>
          <h2>
            {OFFER.enemyHeading} <span>{OFFER.enemyHeadingAccent}</span>
          </h2>
          <p className="lead">{OFFER.enemyTagline}</p>
          <div className="cards two">
            {OFFER.truthBombs.map((item) => (
              <article className="card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-kicker">{OFFER.day30.kicker}</div>
        <h2>{OFFER.day30.heading}</h2>
        <p className="lead">{OFFER.day30.body}</p>
        <ul className="not-for">
          {OFFER.day30.activeMeans.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="fine">{OFFER.day30.note}</p>
        <div className="section-kicker">THE 30-DAY RAMP</div>
        <div className="steps">
          {OFFER.ramp.map((phase) => (
            <article key={phase.days}>
              <b>Days {phase.days}</b>
              <h3>{phase.title}</h3>
              <p>{phase.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-kicker">{OFFER.notForSection.kicker}</div>
          <h2>
            {OFFER.notForSection.heading}{" "}
            <span>{OFFER.notForSection.headingAccent}</span>
          </h2>
          <ul className="not-for">
            {OFFER.notFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section container">
        <div className="narrow">
          <div className="section-kicker">THE GUARANTEE</div>
          <h2>{OFFER.promise.heading}</h2>
          <p className="lead">{OFFER.promise.body}</p>
          <Link className="btn" to={O.book}>
            See If You’re a Fit →
          </Link>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-kicker">{OFFER.reviewSection.kicker}</div>
          <h2>
            {OFFER.reviewSection.heading}{" "}
            <span>{OFFER.reviewSection.headingAccent}</span>
          </h2>
          <p className="lead">{OFFER.reviewSection.lead}</p>
          <div className="cards two">
            {OFFER.review.map((item, index) => (
              <article className="card" key={item.title}>
                <div className="icon">{String(index + 1).padStart(2, "0")}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-kicker">{OFFER.compliance.kicker}</div>
        <h2>
          {OFFER.compliance.heading}{" "}
          <span>{OFFER.compliance.headingAccent}</span>
        </h2>
        <p className="lead">{OFFER.compliance.lead}</p>
        <div className="cards two">
          <article className="card">
            <div className="section-kicker">
              {OFFER.compliance.inOffer.kicker}
            </div>
            <h3>{OFFER.compliance.inOffer.title}</h3>
            <p>{OFFER.compliance.inOffer.desc}</p>
          </article>
          <article className="card">
            <div className="section-kicker">
              {OFFER.compliance.adjacent.kicker}
            </div>
            <h3>{OFFER.compliance.adjacent.title}</h3>
            <p>{OFFER.compliance.adjacent.desc}</p>
          </article>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-kicker">{OFFER.faqsSection.kicker}</div>
          <h2>{OFFER.faqsSection.heading}</h2>
          <div className="faq">
            {OFFER.faqs.map((faq, index) => (
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
          <h2>{OFFER.cta.heading}</h2>
          <p>{OFFER.cta.subhead}</p>
          <Link className="btn btn-gold" to={O.book}>
            Book Your Medigard Review →
          </Link>
        </div>
      </section>
    </main>
  );
}
