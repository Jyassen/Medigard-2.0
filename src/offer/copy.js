import { SPOKEN } from "../voice/lexicon";

export const OFFER = {
  hero: {
    kicker: "For Medicare agency owners",
    headline: "Scale your Medicare agency",
    headlineAccent: "without building another department.",
    subhead:
      "We install growth infrastructure around the agency you already have. The consumer side fills calendars—ads, funnels, routing, booking. The salesforce side turns interested agents into active capacity. You turn growth up instead of hiring for it. Not another lead package, ad-agency report, or software login.",
  },
  proof: [
    { value: "60-day install", label: "not a production promise" },
    { value: "Calendar fill", label: "ads, funnels, routing, booking" },
    {
      value: "Then capacity",
      label: "interested, joined, active—then turn it up",
    },
  ],
  reframe: SPOKEN.reframe,
  problem: {
    kicker: "THE TRAP",
    heading: "If growth means assembling a department,",
    headingAccent: "you cannot turn it up.",
    lead: `${SPOKEN.reframe} Hire a marketing agency? They know ads, not Medicare. Buy from a lead vendor? Their job ends at delivery. Bring it in-house? Now you own strategy, creative, funnels, CRM, recruiting, and activation—plus every handoff between them.`,
    cards: [
      {
        n: "01",
        title: "Vendors who stop at their piece",
        desc: "A marketing agency runs Facebook. A lead vendor delivers a list. Neither owns what happens next—and neither understands Medicare.",
      },
      {
        n: "02",
        title: "In-house becomes another department",
        desc: "Strategy, ads, funnels, CRM, automations, recruiting, onboarding, activation. That is a whole company under the one you are already trying to scale.",
      },
      {
        n: "03",
        title: "The owner becomes the connector",
        desc: "The editor can’t see what the media buyer sees. The funnel isn’t watching agent capacity. The CRM holds data nobody connects. So you do.",
      },
    ],
  },
  signals: {
    kicker: "SIGNS YOU’RE ASSEMBLING GROWTH",
    heading: "This is you if any of these are",
    headingAccent: "already true.",
    lead: "These are not curiosity signals. They are signs you are assembling growth—not that you need another lead package.",
  },
  purchaseSignals: [
    {
      title: "You’re teaching the marketing company Medicare",
      desc: "They know Facebook. They do not understand enrollment periods, agent economics, or why people in your market respond. You are paying them to learn your business.",
    },
    {
      title: "The lead vendor stops when the list arrives",
      desc: "You get names. Routing, follow-up, booking, and capacity stay on you. Their job is done. Yours is just starting.",
    },
    {
      title: "In-house means hiring a department",
      desc: "Strategy, filming, ads, Meta, funnels, CRM, automations, recruiting, onboarding, activation. That is a company underneath the company you are already trying to scale.",
    },
    {
      title: "The pieces never become a loop",
      desc: "The editor does not see what the media buyer sees. The media buyer is not connected to recruiting. The funnel is not watching agent capacity. Nobody is running a loop.",
    },
    {
      title: "You became the connector",
      desc: `${SPOKEN.coordinateLine} Adding another person adds another salary, another workflow, and another handoff. ${SPOKEN.leverageLine}`,
    },
    {
      title: "The build list keeps getting longer",
      desc: "Creative, advertising, funnels, automation, recruiting, onboarding, reporting, another employee, another vendor, another manager for the vendors. That list is the problem.",
    },
  ],
  how: {
    kicker: "THE GROWTH LOOP",
    heading: "Two sides.",
    headingAccent: "One growth loop.",
    lead: `${SPOKEN.reframe} So we don’t sell another lead package, report, or software login. We install both sides—consumer growth and salesforce growth—and the loop that connects them, around the agency you already run.`,
  },
  steps: [
    {
      n: "01",
      title: "Full calendars",
      desc: "Ads, funnels, routing, booking. Attention in your market becomes booked opportunities—routed and followed up to the agents who can take them.",
    },
    {
      n: "02",
      title: "Active capacity",
      desc: "Full calendars need more agents. Recruiting campaigns and candidate funnels move people along a defined path: interested, joined, active.",
    },
    {
      n: "03",
      title: "A connected loop",
      desc: "Filling calendars? Turn the campaign up. Calendars full? Add agents. Agents active? Turn it up again.",
    },
    {
      n: "04",
      title: "A custom install",
      desc: "Built around your market, agents, tools, and recruiting—not a generic template, and not a department you assemble yourself.",
    },
  ],
  whySection: {
    kicker: "BUILT TO TURN UP",
    heading: "Stop assembling. Start",
    headingAccent: "turning it up.",
    lead: "Built for Medicare agencies that already have agents, a market, and acquisition—and are done paying outsiders to learn the business on their dime.",
  },
  why: [
    {
      title: "Opportunities that reach your agents",
      desc: "Attention and funnels create opportunities—then route, follow up, and book them to the people who can close.",
    },
    {
      title: "A path from interested to active",
      desc: "Recruiting isn’t the finish line. Candidates keep moving: interested, joined, active.",
    },
    {
      title: "System work stays in the system",
      desc: `${SPOKEN.humanWork} Routing, follow-up, scheduling, reminders, and reporting run because the system knows what happens next.`,
    },
    {
      title: "Infrastructure, not a production promise",
      desc: "We guarantee the agreed install—not revenue, enrollments, or what agents write. Agents still sell. Managers still coach. You still call the shots.",
    },
  ],
  compare: {
    heading: "Stop rebuilding the company",
    headingAccent: "every time you want the next level.",
    before: {
      heading: "Before",
      lead: "Hire the creative, media, funnel, and automation people. Then connect it all, manage everyone, and hope the handoffs hold.",
      items: [
        "Vendors who stop when their piece is delivered",
        "An in-house list that keeps getting longer",
        "The owner as the integration layer",
        "Payroll and administration scaling with every new level",
      ],
    },
    after: {
      heading: "After",
      lead: "Consumer and salesforce growth run on one system. You turn up what’s working instead of assembling the next department.",
      items: [
        "Attention that becomes booked opportunity",
        "A path from interested to joined to active",
        "System work the system can run",
        "A loop you can turn up, then expand, then turn up again",
      ],
    },
  },
  enemy: SPOKEN.enemy,
  enemyKicker: "STRAIGHT TALK",
  enemyHeading: "Scaling shouldn’t mean assembling a new company",
  enemyHeadingAccent: "under the one you already have.",
  enemyTagline: `Every hire adds another salary, another workflow, and another handoff. Scale like that and payroll grows as fast as revenue. ${SPOKEN.leverageLine}`,
  truthBombs: [
    {
      q: SPOKEN.reframe,
      a: "Five hires and six vendors isn’t a growth engine. It’s another department—and you’re still holding the pieces together.",
    },
    {
      q: "Their responsibility ends when the lead gets delivered.",
      a: "The agency knows ads. The vendor knows lists. Everything after delivery is on you. That’s why the pieces never become a loop.",
    },
    {
      q: SPOKEN.coordinateLine,
      a: "The editor can’t see the media buyer. The media buyer isn’t linked to recruiting. The funnel ignores agent capacity. So you become the connection.",
    },
    {
      q: SPOKEN.humanWork,
      a: "Agents talk to prospects. Managers coach. You make the calls. Routing, follow-up, reminders, and reporting run because the system knows what’s next.",
    },
  ],
  day30: {
    kicker: "HOW WE DEFINE ACTIVE",
    heading: "Interested. Joined. Active. Not a production promise.",
    body: "The salesforce side follows one path: interested, joined, active. But “active” isn’t a vibe. It’s a checklist:",
    activeMeans: [
      "Contracted and certified as required",
      "Trained and equipped to work",
      "Assigned clear first actions",
      "Documenting activity",
      "Inside a coaching cadence",
    ],
    note: "What they write is still on them, your managers, and the market—not a vendor guarantee.",
  },
  ramp: [
    {
      days: "1–7",
      title: "Foundation",
      desc: "Access, schedule, standards, and system readiness—without you chasing every login.",
    },
    {
      days: "8–14",
      title: "Progression",
      desc: "Scripts, role-play, and CRM practice, then a readiness check before live opportunities. The next step is never a guess.",
    },
    {
      days: "15–21",
      title: "Live activity",
      desc: "Assigned opportunities, supervised outreach, and manager feedback. Activity starts on purpose.",
    },
    {
      days: "22–30",
      title: "Active rhythm",
      desc: "A steady cadence of activity, documentation, and coaching—managed by exception. That’s active, not a production promise.",
    },
  ],
  notForSection: {
    kicker: "WHO THIS ISN’T FOR",
    heading: "We will not install this as",
    headingAccent: "another vendor on the pile.",
  },
  notFor: [
    "Agencies with no live producers and no capacity to handle conversations",
    "Buyers shopping another lead package",
    "Owners who will not provide calendar access, approvals, or agent participation",
    "One-off campaigns with no operating cadence",
    "Teams that only want recruiting applications, not agents who become active",
    "Buyers expecting enrollments, commissions, revenue, or what agents write",
    "Organizations whose primary need is full compliance oversight",
    "Buyers who want another software login, another ad-agency report, or a generic marketing template",
  ],
  promise: {
    heading: "We guarantee the infrastructure install—not what happens after.",
    body: "If the agreed system isn’t fully set up, we keep working the affected build at no extra service fee, per your written terms. It covers the consumer, salesforce, follow-up, reporting, and agent-progression systems. It doesn’t cover revenue, enrollments, or what agents sell.",
  },
  reviewSection: {
    kicker: "YOUR 30-MINUTE REVIEW",
    heading: "What we cover in",
    headingAccent: "30 minutes.",
    lead: "Thirty minutes on how you generate growth today, what’s already working, where it breaks, and what we’d install—so you can stop asking what else to hire.",
  },
  review: [
    {
      title: "How you grow today",
      desc: "See what’s already working—your market, acquisition, agents, and tools—before anyone adds a vendor.",
    },
    {
      title: "Where it’s fragmented",
      desc: "See which pieces stop at delivery, which handoffs still land on you, and where growth disconnects from capacity.",
    },
    {
      title: "What we’d install",
      desc: "See the consumer side, the salesforce side, and the loop that connects them.",
    },
    {
      title: "Whether it actually fits",
      desc: `Leave knowing if it fits—and whether your next question becomes “${SPOKEN.unlock}” instead of “${SPOKEN.hireQuestion}.”`,
    },
  ],
  compliance: {
    kicker: "WHERE COMPLIANCE FITS",
    heading: "Compliance oversight is",
    headingAccent: "not this offer.",
    lead: "Medicare isn’t a generic local niche—enrollment periods, consumer segments, and agent economics change how growth gets built. This offer installs consumer growth, recruiting, follow-up, and progression. Funnel-level consent, source tracking, and routing are in scope. Full monitoring and audit-ready oversight is a separate path.",
    inOffer: {
      kicker: "IN THIS OFFER",
      title: "Compliant capture and routing",
      desc: "TCPA/CMS-safe funnels with named ownership, so your producers get usable conversations.",
    },
    adjacent: {
      kicker: "ADJACENT SYSTEM",
      title: "Oversight as you scale",
      desc: "When the primary need is documented monitoring and audit-ready review, that is a different Medigard system.",
    },
  },
  faqsSection: {
    kicker: "BEFORE YOU BOOK",
    heading: "Before you book, know this.",
  },
  faqs: [
    {
      q: "Is this just a lead service?",
      a: "No. Anyone can sell you 100 leads. This is growth infrastructure: consumer growth (attention, funnels, routing, follow-up, booking) and salesforce growth (recruiting and the path from interested to active). Full compliance oversight is separate.",
    },
    {
      q: "Do you guarantee sales or revenue?",
      a: "No. Sales depend on your agents, carriers, market, and many other factors. We guarantee the agreed infrastructure install and delivery work—not what agents write.",
    },
    {
      q: "Who is this for?",
      a: "Medicare agency owners who want to grow this year without assembling a marketing and operations department. You already have agents, a market, and some acquisition—and you’re tired of vendors who don’t understand Medicare, or of being the person who connects every handoff.",
    },
    {
      q: "How long does it take?",
      a: "The infrastructure install takes up to 60 days. New agents follow a defined path from interested to joined to active, including a 30-day ramp.",
    },
    {
      q: "Do you replace our CRM, recruiting, or sales leadership?",
      a: "The CRM has the data—but someone still has to make sense of it. We connect consumer growth, follow-up, recruiting, and the path to active. You keep interviews, carriers, coaching, and the call to turn a campaign up.",
    },
    {
      q: "Is the review a sales pitch?",
      a: `A 30-minute working conversation. We look at how you generate growth, where it breaks, and whether we should install with you—so the question becomes “${SPOKEN.unlock}” instead of “${SPOKEN.hireQuestion}.”`,
    },
  ],
  cta: {
    heading: "Stop asking what else you need to hire.",
    subhead: `Start asking “${SPOKEN.unlock}” Book your Medigard Growth Infrastructure Review.`,
  },
};
