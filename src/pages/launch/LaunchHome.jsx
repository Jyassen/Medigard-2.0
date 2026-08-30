import { useState } from "react";
import { Link } from "react-router-dom";
import HomeOptIn from "../../components/HomeOptIn";
import BookingWidget from "../../components/BookingWidget";
import {
  BOOKING_URLS,
  canEmbedBooking,
  CRM_SOURCES,
  withSource,
} from "../../constants/funnels";
import { GROWTH } from "../../growth/copy";
import { G } from "../../growth/constants";

function CTAButton({ children, className = "", primary = true }) {
  return (
    <a
      href="#booking"
      onClick={(e) => {
        e.preventDefault();
        document
          .getElementById("booking")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
      className={`inline-block cursor-pointer rounded-xl px-10 py-5 text-center text-lg font-bold transition-all transform hover:scale-105 active:scale-95 ${
        primary
          ? "bg-[#137f73] text-white shadow-xl shadow-teal-500/20 hover:bg-[#0f665d]"
          : "border-2 border-[#137f73] text-[#137f73] hover:bg-teal-50"
      } ${className}`}
    >
      {children}
    </a>
  );
}

const stageStyles = [
  { color: "text-teal-700", bgColor: "bg-teal-100" },
  { color: "text-cyan-700", bgColor: "bg-cyan-100" },
  { color: "text-emerald-700", bgColor: "bg-emerald-100" },
  { color: "text-orange-700", bgColor: "bg-orange-100" },
];

export default function LaunchHome() {
  const [openFaq, setOpenFaq] = useState(null);
  const bookingSrc = withSource(BOOKING_URLS.growth, CRM_SOURCES.growthBook);
  const embedsCalendar = canEmbedBooking(BOOKING_URLS.growth);

  return (
    <main className="flex-1">
      <section className="px-6 pb-20 pt-24">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-[#137f73]">
            {GROWTH.category}
          </p>
          <h1 className="mx-auto mb-8 max-w-5xl text-4xl font-black leading-[1.1] tracking-tight text-[#1e293b] md:text-5xl lg:text-6xl">
            {GROWTH.hero.headline}
            <br />
            <span className="text-[#137f73]">{GROWTH.hero.headlineAccent}</span>
          </h1>
          <p className="mx-auto mb-6 max-w-3xl text-xl font-medium leading-relaxed text-slate-500 md:text-2xl">
            {GROWTH.hero.subhead}
          </p>
          <p className="mx-auto mb-12 max-w-2xl text-sm font-black uppercase tracking-[0.18em] text-[#137f73]">
            {GROWTH.tagline}
          </p>

          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton>See The Growth Order</CTAButton>
            <Link
              to={G.book}
              className="inline-block rounded-xl border-2 border-[#137f73] px-10 py-5 text-lg font-bold text-[#137f73] transition-all hover:bg-teal-50"
            >
              Book Your Agency Review
            </Link>
          </div>

          <div id="booking" className="mx-auto mb-32 max-w-4xl scroll-mt-24">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-[#1e293b] md:text-5xl">
              {GROWTH.booking.heading}{" "}
              <span className="text-[#137f73]">
                {GROWTH.booking.headingAccent}
              </span>
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl font-medium leading-relaxed text-slate-500">
              {GROWTH.booking.subhead}
            </p>
            {embedsCalendar ? (
              <BookingWidget
                src={bookingSrc}
                title="Schedule a Medigard Growth Order review"
                className="border border-slate-100 shadow-xl shadow-teal-500/5"
                thankYouTo={G.thanks}
              />
            ) : (
              <div className="rounded-[2.5rem] border border-slate-100 bg-slate-50 p-12 shadow-xl shadow-teal-500/5">
                <p className="mb-6 text-lg font-medium text-slate-600">
                  Open the calendar and pick a time. Come ready with one idle
                  producer calendar—and one recruit who signed but never
                  launched.
                </p>
                <a
                  href={bookingSrc}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-xl bg-[#137f73] px-10 py-5 text-lg font-bold text-white transition-colors hover:bg-[#0f665d]"
                >
                  Open Agency Review Calendar
                </a>
              </div>
            )}
          </div>

          <div className="border-t border-slate-100 py-24">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#137f73]">
                {GROWTH.mechanism}
              </p>
              <h2 className="mb-6 text-5xl font-black tracking-tight text-[#1e293b] md:text-6xl">
                Fill. Attract. Route. Activate.
              </h2>
              <p className="mx-auto max-w-3xl text-xl font-medium text-slate-600">
                A parallel operating sequence, not another disconnected
                purchase. Calendar fill serves producers you already pay.
                Recruiting builds future capacity. Booking keeps both rails
                moving. Activation turns signed into working.
              </p>
            </div>
            <div className="grid gap-6 text-left md:grid-cols-2 lg:grid-cols-4">
              {GROWTH.sequence.map((item) => (
                <div
                  key={item.n}
                  className="rounded-3xl border border-teal-200 bg-teal-50/60 p-8 shadow-sm"
                >
                  <p className="mb-3 font-mono text-xs font-black tracking-[0.2em] text-[#137f73]">
                    {item.n}
                  </p>
                  <h3 className="mb-3 text-xl font-black text-[#1e293b]">
                    {item.title}
                  </h3>
                  <p className="font-medium leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 py-24">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#137f73]">
                Purchase signals
              </p>
              <h2 className="mb-6 text-5xl font-black tracking-tight text-[#1e293b] md:text-6xl">
                If You Have Said Any Of These, This Is Not Curiosity
              </h2>
            </div>
            <div className="grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
              {GROWTH.purchaseSignals.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-teal-200 bg-teal-50/60 p-8 shadow-sm"
                >
                  <h3 className="mb-3 text-xl font-black text-[#1e293b]">
                    {item.title}
                  </h3>
                  <p className="font-medium leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 py-24">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                This is not for
              </p>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-[#1e293b] md:text-5xl">
                We Will Not Install This As Another Lead Vendor
              </h2>
            </div>
            <ul className="mx-auto grid max-w-4xl gap-4 text-left md:grid-cols-2">
              {GROWTH.notFor.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 font-medium leading-relaxed text-slate-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-slate-100 py-24">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#137f73]">
                {GROWTH.enemy}
              </p>
              <h2 className="mb-6 text-5xl font-black tracking-tight text-[#1e293b] md:text-6xl">
                {GROWTH.enemyTagline}
              </h2>
              <p className="mx-auto max-w-3xl text-xl font-medium text-slate-600 md:text-2xl">
                The market sells leads, recruiting, CRMs, and training as
                separate purchases. That forces a choice between filling
                calendars today and recruiting for tomorrow. Either way, the
                owner becomes the rescue desk.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {GROWTH.truthBombs.map((item) => (
                <div
                  key={item.q}
                  className="rounded-3xl border border-teal-200 bg-teal-50/40 p-10 text-left shadow-sm"
                >
                  <h4 className="mb-4 text-2xl font-black tracking-tight text-[#1e293b]">
                    {item.q}
                  </h4>
                  <p className="text-lg font-medium leading-relaxed text-slate-600">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 bg-white py-24">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="text-left">
                <h2 className="mb-8 text-5xl font-black tracking-tight text-[#1e293b]">
                  From Forced-Choice Operator To{" "}
                  <span className="text-[#137f73]">
                    Compound-Growth Operator
                  </span>
                </h2>
                <p className="mb-8 text-xl font-medium text-slate-600">
                  Stop managing every lead and recruit. Start managing the
                  system that moves them.
                </p>
                <div className="space-y-6">
                  <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
                    <h4 className="mb-3 text-xs font-black uppercase tracking-widest text-red-600">
                      The Old Way
                    </h4>
                    <ul className="space-y-2 font-medium text-slate-600">
                      <li>
                        Buy leads, recruit agents, add a CRM, hope it connects
                      </li>
                      <li>
                        Measure CPL, applications, contracts, and headcount
                      </li>
                      <li>Producers idle while signed recruits stay silent</li>
                      <li>The owner personally chases every handoff</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                    <h4 className="mb-3 text-xs font-black uppercase tracking-widest text-emerald-600">
                      The Growth Order
                    </h4>
                    <ul className="space-y-2 font-medium text-slate-700">
                      <li>Usable conversations for current producers</li>
                      <li>Recruiting infrastructure that holds volume</li>
                      <li>
                        Routing, nurture, and booking with named ownership
                      </li>
                      <li>
                        A defined path from signed agent to working producer
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rounded-[2.5rem] border border-slate-100 bg-slate-50 p-10 text-left shadow-xl">
                <p className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-[#137f73]">
                  How we define Day 30
                </p>
                <h3 className="mb-4 text-3xl font-black text-[#1e293b]">
                  Working capacity. Not a production promise.
                </h3>
                <p className="font-medium leading-relaxed text-slate-600">
                  By Day 30, the people we help you launch are contracted and
                  certified as required, trained, equipped, assigned clear first
                  actions, documenting activity, and inside a coaching cadence.
                  What they write remains on them, your managers, and the
                  market—not a vendor guarantee.
                </p>
              </div>
            </div>
          </div>

          <div
            id="solution"
            className="scroll-mt-28 border-t border-slate-100 py-24"
          >
            <h2 className="mb-6 text-4xl font-black leading-tight text-[#1e293b] md:text-6xl lg:text-7xl">
              {GROWTH.mechanism}
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-xl font-medium text-slate-500 md:text-2xl">
              Four stages. One installed sequence. Then a loop: fill, attract,
              route, activate, measure, repeat.
            </p>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
              {GROWTH.stages.map((stage, index) => (
                <div
                  key={stage.title}
                  className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-10 text-left shadow-sm transition-all duration-500 hover:shadow-xl"
                >
                  <div className="relative z-10">
                    <div
                      className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 shadow-inner ${stageStyles[index].bgColor}`}
                    >
                      <span
                        className={`text-xl font-black ${stageStyles[index].color}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mb-2 text-3xl font-black text-[#1e293b] md:text-4xl">
                      {stage.title}
                    </h3>
                    <p className="mb-6 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 md:text-xs">
                      {stage.tagline}
                    </p>
                    <p className="text-base font-medium leading-relaxed text-slate-500 md:text-lg">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 py-24">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#137f73]">
                What we run after Activation Day 0
              </p>
              <h2 className="mb-6 text-5xl font-black tracking-tight text-[#1e293b]">
                The 30-Day Working Ramp
              </h2>
            </div>
            <div className="grid gap-6 text-left md:grid-cols-4">
              {GROWTH.ramp.map((phase) => (
                <div
                  key={phase.days}
                  className="rounded-3xl border border-teal-200 bg-teal-50/40 p-8 shadow-sm"
                >
                  <p className="mb-3 text-xs font-black uppercase tracking-widest text-[#137f73]">
                    Days {phase.days}
                  </p>
                  <h3 className="mb-3 text-xl font-black text-[#1e293b]">
                    {phase.title}
                  </h3>
                  <p className="font-medium leading-relaxed text-slate-600">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 border-t border-slate-100 py-16 sm:flex-row">
            <CTAButton>Book Your Agency Walkthrough</CTAButton>
          </div>

          <div className="border-y border-slate-100 py-24">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-5xl font-black tracking-tight text-[#1e293b]">
                What We Cover On Your Agency Review
              </h2>
              <p className="text-xl font-medium text-slate-500">
                A focused 30-minute session on whether the Growth Order fits
                your agency.
              </p>
            </div>
            <div className="grid gap-8 text-left md:grid-cols-4">
              {GROWTH.review.map((item) => (
                <div
                  key={item.step}
                  className="relative rounded-3xl border border-teal-200 bg-teal-50/40 p-8 shadow-sm"
                >
                  <span className="absolute -left-2 -top-8 z-0 text-6xl font-black text-teal-600/10">
                    {item.step}
                  </span>
                  <div className="relative z-10">
                    <h3 className="mb-3 text-xl font-black text-[#1e293b]">
                      {item.title}
                    </h3>
                    <p className="font-medium leading-relaxed text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <CTAButton className="px-12 py-5">
                Schedule Your Agency Review
              </CTAButton>
            </div>
          </div>

          <div className="border-t border-slate-100 py-24">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                Separate when you need oversight at scale
              </p>
              <h2 className="mb-4 text-3xl font-black tracking-tight text-[#1e293b] md:text-4xl">
                Compliance oversight is not this offer
              </h2>
              <p className="mx-auto max-w-2xl font-medium text-slate-500">
                This page installs Agency Scale Infrastructure. Funnel-level
                consent, source tracking, and routing visibility are in scope.
                Full monitoring and audit-ready oversight for larger
                organizations lives on a different path.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 text-left md:grid-cols-2">
              <div className="rounded-3xl border border-amber-200 bg-amber-50/50 p-8">
                <p className="mb-2 text-xs font-black uppercase tracking-widest text-amber-700">
                  In this offer
                </p>
                <h3 className="mb-3 text-xl font-black text-[#1e293b]">
                  Compliant capture and routing
                </h3>
                <p className="mb-6 font-medium leading-relaxed text-slate-600">
                  TCPA/CMS-safe funnels and named ownership so current producers
                  get usable conversations.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <p className="mb-2 text-xs font-black uppercase tracking-widest text-emerald-700">
                  Adjacent system
                </p>
                <h3 className="mb-3 text-xl font-black text-[#1e293b]">
                  Oversight as you scale
                </h3>
                <p className="font-medium leading-relaxed text-slate-600">
                  When the primary need is documented monitoring and audit-ready
                  review, that is a different Medigard system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-5xl font-black tracking-tight text-[#1e293b]">
            Questions Agencies Ask Us
          </h2>
          <div className="space-y-4">
            {GROWTH.faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-slate-100"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between bg-teal-50/60 px-8 py-6 text-left transition-colors hover:bg-teal-50"
                >
                  <span className="font-black text-[#1e293b]">{faq.q}</span>
                  <span className="text-2xl text-[#137f73]">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="border-t border-slate-100 bg-white px-8 py-6 font-medium leading-relaxed text-slate-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeOptIn
        eyebrow="Next Step For Your Agency"
        heading="Ready To Install The Growth Order?"
        subtext="Leave your details. We will follow up about calendar fill, recruiting infrastructure, and the 30-day path from signed agent to working producer."
        submitLabel="Get Started"
        source="medigard_growth_opt_in"
        sectionClass="border-t border-slate-100 bg-gradient-to-b from-teal-50/40 to-white px-6 py-24"
        containerClass="max-w-2xl"
        headingClassName="mb-4 text-4xl font-black tracking-tight text-[#1e293b] md:text-5xl"
        subtextClassName="mb-10 text-xl font-medium leading-relaxed text-slate-500"
      />
    </main>
  );
}
