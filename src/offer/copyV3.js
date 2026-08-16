import { SPOKEN } from "../voice/lexicon";

export const OFFER_V3 = {
  audience: "Medicare Agency Owners - Growth Minded Operators",
  hero: {
    headline:
      "Still Building Another Department Every Time You Want to Grow? We'll Install the System That Fills Calendars and Recruits Active Agents.",
    subhead:
      "Medigard turns attention in your market into booked appointments and interested agents into active producers — built around the agency you already run. Not another lead package, ad-agency report, or software login.",
    cta: "Free 30-Minute Agency Review",
  },
  booking: {
    kicker: "Book your review",
    heading: "Book Your Medigard Review",
    subhead:
      "Pick a time that works for you — we'll confirm your spot by email.",
    points: [
      {
        title: "How you grow now",
        desc: "Your market, your agents, and what’s already working.",
      },
      {
        title: "Where it breaks",
        desc: "The handoffs and gaps that keep landing back on you.",
      },
      {
        title: "What we’d build",
        desc: "The appointment side, the recruiting side, and whether it fits.",
      },
    ],
  },
  installsSection: {
    kicker: "What we install",
    heading: "Two engines. One system.",
    lead: "Here's what gets built around the agency you already have — without a production promise attached.",
  },
  installs: [
    {
      kicker: "Install",
      title: "Calendar Fill",
      desc: "Ads, funnels, routing, and booking turn attention in your market into appointments on your agents' calendars.",
      stats: [
        { value: "60 days", label: "Install window" },
        { value: "Booked", label: "Appointments, not a list" },
        { value: "Named", label: "Ownership on every lead" },
      ],
    },
    {
      kicker: "Install",
      title: "Active Agents",
      desc: "Recruiting campaigns and a 30-day ramp move people from interested to joined to active. Not a production promise.",
      stats: [
        { value: "30 days", label: "Working ramp" },
        { value: "3 stages", label: "Interested, joined, active" },
        { value: "No quota", label: "We don't promise what they write" },
      ],
    },
    {
      kicker: "Install",
      title: "One Connected Loop",
      desc: "Appointments up? Add agents. Agents ready? Run more ads. You turn the system up instead of hiring the next vendor.",
      stats: [
        { value: "2 engines", label: "Consumer + salesforce" },
        { value: "1 owner", label: "Medigard runs the loop" },
        { value: "0 department", label: "You stop assembling one" },
      ],
    },
  ],
  mechanism: {
    kicker: "How the system finds the work",
    heading:
      "We install both growth engines around the agency you already run.",
    lead: "Consumer growth fills calendars. Salesforce growth adds active capacity. The loop is what lets you turn it up instead of becoming the connector.",
    layers: [
      {
        n: "01",
        tag: "Consumer growth",
        title: "Fill the calendars your producers already have.",
        desc: "Ads and funnels turn attention in your market into booked appointments, routed to the agents who can take them — with named ownership so follow-up does not land back on you.",
      },
      {
        n: "02",
        tag: "Salesforce growth",
        title: "Recruit agents who can take the next appointments.",
        desc: "Full calendars need more agents. Candidate funnels move people along a defined path: interested, joined, active. The 30-day ramp is the working start — not a sales forecast.",
      },
      {
        n: "03",
        tag: "The connected loop",
        title: "Turn it up instead of hiring the next department.",
        desc: "The editor can see the media buyer. Recruiting can see calendar load. You stop being the handoff. Growth becomes a system you scale.",
      },
    ],
  },
  reframe: SPOKEN.reframe,
  guarantee: {
    kicker: "The guarantee",
    heading: "We guarantee the system gets built.",
    body: "If the system we agreed on isn't fully set up, we keep working at no extra service fee. What we do not promise: sales, commissions, enrollments, or outcomes controlled by carriers, agency managers, or individual recruits.",
  },
  notFor: {
    kicker: "Who this isn't for",
    heading: "This isn't for everyone.",
    items: [
      "Agencies with no agents to take the appointments",
      "Owners shopping for another lead list",
      "Anyone who won't give calendar access or agent time",
      "Buyers expecting enrollments, commissions, revenue, or what agents write",
    ],
  },
  faqsSection: {
    kicker: "Before you book",
    heading: "Common questions.",
  },
  faqs: [
    {
      q: "Is this just leads?",
      a: "No. Leads are a list someone hands you. This is the full system — appointments booked and routed to your agents, plus recruiting that turns new agents into producers.",
    },
    {
      q: "Do you guarantee sales?",
      a: "No. Sales depend on your agents, carriers, and market. We guarantee the system gets built and runs.",
    },
    {
      q: "Who is this for?",
      a: "Medicare agency owners who already have agents and a market, and want to grow without building a marketing department.",
    },
    {
      q: "How long does it take?",
      a: "The system is built in up to 60 days. New agents follow a 30-day ramp from hired to producing.",
    },
  ],
  footer: {
    line: "Growth infrastructure for Medicare agencies.",
  },
};
