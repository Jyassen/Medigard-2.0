import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { C } from "../../compliance/constants";
import ComplianceHomeOptIn from "../../components/compliance/ComplianceHomeOptIn";

export default function ComplianceHome() {
  const [openFaq, setOpenFaq] = useState(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== "/compliance" || hash !== "#benefits") return;
    document
      .getElementById("benefits")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [pathname, hash]);

  const faqs = [
    {
      q: "Is this system HIPAA compliant?",
      a: "Medigard is designed for security-conscious Medicare operations. The exact HIPAA scope, vendor agreements, data flows, and deployment controls are reviewed with each organization before launch.",
    },
    {
      q: "How long does deployment take?",
      a: "Our white-glove deployment typically takes 30 days from start to finish.",
    },
    {
      q: "Does this replace our current QA team?",
      a: "No, it empowers them. It automates the manual listening so they can focus on high-level strategy.",
    },
  ];

  return (
    <>
      <section className="pt-16 pb-24 px-6 text-center max-w-5xl mx-auto relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-emerald-400 font-bold mb-6 tracking-[0.2em] uppercase text-xs">
            Compliance Infrastructure for Medicare Agencies
          </p>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
            Helping Medicare Agencies Build{" "}
            <span className="text-emerald-400">Broader Visibility</span> and
            Feel <span className="text-emerald-400">Audit-Ready</span>
          </h1>
          <div className="mx-auto mt-12 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 text-left sm:grid-cols-3">
            {[
              ["Capture", "Record the activity and supporting evidence."],
              ["Review", "Surface exceptions that need human attention."],
              ["Respond", "Document follow-up and prepare the audit trail."],
            ].map(([title, description]) => (
              <div key={title} className="bg-[#0a1a14] p-6">
                <p className="mb-2 font-black text-emerald-400">{title}</p>
                <p className="text-sm font-medium leading-6 text-zinc-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -z-0" />
      </section>

      <ComplianceHomeOptIn />

      <section
        id="benefits"
        className="py-24 bg-white text-zinc-900 scroll-mt-28"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-emerald-600 font-black uppercase tracking-[0.2em] text-xs mb-4">
              Benefits — Enterprise Standard
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Build a Stronger{" "}
              <span className="text-emerald-600">Oversight and Evidence</span>{" "}
              System
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                t: "Expanded Call Coverage",
                d: "Expand review beyond small manual samples and create a clearer record of the interactions your deployment captures.",
              },
              {
                t: "Configured Review Alerts",
                d: "Flag configured disclaimer and marketing-rule patterns so qualified reviewers can prioritize follow-up.",
              },
              {
                t: "Automated Documentation",
                d: "Connect available SOA, PTC, and interaction records with timestamps so review teams can investigate exceptions faster.",
              },
              {
                t: "Agent Risk Signals",
                d: "Organize configured indicators by agent and team so leadership can investigate patterns and document action.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-emerald-50/30 p-10 rounded-3xl border border-emerald-100 flex gap-6 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-emerald-200">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-2xl mb-3 text-[#1e293b]">
                    {item.t}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    {item.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="features"
        className="py-32 bg-[#0a1a14] relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <p className="text-emerald-400 font-black uppercase tracking-[0.2em] text-xs mb-4">
              Features
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Achieve <span className="text-emerald-400">Audit Readiness</span>{" "}
              with Our{" "}
              <span className="text-emerald-400">Command Infrastructure</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600"
                  className="rounded-[2.5rem] w-full aspect-[4/5] object-cover mt-16 shadow-2xl border-4 border-white/5"
                  alt="Compliance Director"
                />
                <div className="space-y-6">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600"
                    className="rounded-[2.5rem] w-full aspect-square object-cover shadow-2xl border-4 border-white/5"
                    alt="Team Meeting"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
                    className="rounded-[2.5rem] w-full aspect-square object-cover shadow-2xl border-4 border-white/5"
                    alt="Data Analysis"
                  />
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[100px]" />
            </div>
            <div className="space-y-12">
              {[
                {
                  t: "Automated Call Transcription",
                  d: "Captured calls can be transcribed and analyzed for configured compliance triggers, reducing routine manual listening.",
                },
                {
                  t: "Marketing Material Review",
                  d: "Structure review of flyers, scripts, and ad copy against the rule sets configured for your deployment.",
                },
                {
                  t: "Leadership Dashboards",
                  d: "Give leadership a configured view of captured activity, open exceptions, review status, and agent-level signals.",
                },
              ].map((f, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-[1.5rem] flex items-center justify-center flex-shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all">
                    <svg
                      className="w-8 h-8 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3 tracking-tight">
                      {f.t}
                    </h3>
                    <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                      {f.d}
                    </p>
                  </div>
                </div>
              ))}
              <div className="pt-6">
                <Link
                  to={C.book}
                  className="inline-block w-full py-5 bg-emerald-400 text-[#0a1a14] font-black rounded-2xl hover:bg-emerald-300 transition-all uppercase tracking-[0.2em] text-sm text-center shadow-xl shadow-emerald-500/20"
                >
                  Schedule Strategy Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="evidence" className="py-32 bg-white text-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-emerald-600 font-black uppercase tracking-[0.2em] text-xs mb-4">
              Mechanism proof
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              What a Deployment Should Make Visible
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                n: "Evidence Chain",
                r: "Source to response",
                t: "Connect each captured interaction to its transcript, configured checks, supporting forms, review notes, and follow-up status.",
              },
              {
                n: "Exception Queue",
                r: "Human review",
                t: "Prioritize the records that need attention instead of asking reviewers to search through undifferentiated call samples.",
              },
              {
                n: "Operating Record",
                r: "Audit preparation",
                t: "Maintain a searchable history of findings, decisions, remediation, and ownership for leadership and audit preparation.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-zinc-50 p-10 rounded-[2.5rem] border border-zinc-100 relative hover:shadow-xl transition-all"
              >
                <p className="text-slate-600 mb-10 relative z-10 italic text-lg font-medium leading-relaxed">
                  {t.t}
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center font-black text-emerald-700 text-xl shadow-inner">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-[#1e293b]">{t.n}</h4>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">
                      {t.r}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <Link
              to={C.book}
              className="inline-block px-16 py-5 bg-emerald-100 text-emerald-900 font-black rounded-2xl hover:bg-emerald-200 transition-all uppercase tracking-[0.2em] text-sm shadow-lg shadow-emerald-100"
            >
              Schedule Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0a1a14]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-emerald-400 font-black uppercase tracking-[0.2em] text-xs mb-4">
              Still Got Questions?
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden transition-all hover:border-emerald-500/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-10 py-8 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="text-xl font-black tracking-tight">
                    {faq.q}
                  </span>
                  <span
                    className={`text-emerald-400 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-10 pb-8 text-zinc-400 text-lg leading-relaxed border-t border-white/5 pt-6 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
