import { Link } from "react-router-dom";
import { G } from "../../growth/constants";

export default function LaunchThankYou() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-24">
      <div className="relative z-10 w-full max-w-2xl text-center">
        <div className="mx-auto mb-10 flex h-24 w-24 items-center justify-center rounded-[2rem] border border-teal-200 bg-teal-50 shadow-xl shadow-teal-500/10">
          <svg
            className="h-12 w-12 text-[#137f73]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#137f73]">
          We received your request
        </p>
        <h1 className="mb-6 text-5xl font-black leading-[1.1] tracking-tight text-[#1e293b] md:text-6xl">
          You&apos;re All Set
        </h1>
        <p className="mx-auto mb-14 max-w-lg text-xl font-medium leading-relaxed text-slate-500">
          Before we meet, pick one producer who should already be working—but is
          not. That example is how we will show where the Forced Choice Trap is
          leaking capacity inside your agency.
        </p>
        <div className="mb-14 space-y-8 rounded-[2.5rem] border border-slate-100 bg-slate-50 p-10 text-left">
          <h2 className="mb-2 text-center text-xl font-black tracking-tight text-[#1e293b]">
            What We Need From You Next
          </h2>
          {[
            {
              n: "01",
              t: "Check Your Email",
              d: "We will send confirmation and a short prep note for the review.",
            },
            {
              n: "02",
              t: "Bring One Stalled Relationship",
              d: "Note where that recruit entered, where they stopped, and who owned the next step.",
            },
            {
              n: "03",
              t: "Invite Your Decision-Makers",
              d: "Include whoever owns interviews or onboarding so we can design around how your agency actually works.",
            },
          ].map((step) => (
            <div key={step.n} className="flex items-start gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-teal-200 bg-teal-50">
                <span className="text-sm font-black text-[#137f73]">
                  {step.n}
                </span>
              </div>
              <div>
                <h3 className="mb-1 text-lg font-black tracking-tight text-[#1e293b]">
                  {step.t}
                </h3>
                <p className="font-medium leading-relaxed text-slate-500">
                  {step.d}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link
          to={G.home}
          className="inline-block rounded-2xl bg-[#137f73] px-10 py-4 text-sm font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-teal-500/20 transition-colors hover:bg-[#0f665d]"
        >
          Return to Growth Home
        </Link>
      </div>
    </main>
  );
}
