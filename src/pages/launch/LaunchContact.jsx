import { Link } from "react-router-dom";
import { G } from "../../growth/constants";
import { getSiteOrigin } from "../../site";

export default function LaunchContact() {
  const origin = getSiteOrigin();
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

  return (
    <main className="flex-1 px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 text-center text-xs font-black uppercase tracking-[0.2em] text-[#137f73]">
          Contact Us
        </p>
        <h1 className="mb-4 text-center text-4xl font-black tracking-tight text-[#1e293b] md:text-5xl">
          Talk to the Growth team
        </h1>
        <p className="mb-12 text-center font-medium text-slate-500">
          Tell us about your agency. We will follow up on installing the Growth
          Order: calendar fill, recruiting infrastructure, and the 30-day path
          from signed agent to working producer.
        </p>

        {(origin || contactEmail) && (
          <div className="mb-10 space-y-3 rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center text-sm">
            {origin && (
              <p>
                <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-slate-400">
                  Website
                </span>
                <a
                  href={origin}
                  className="break-all font-bold text-[#137f73] hover:underline"
                >
                  {origin}
                </a>
              </p>
            )}
            {contactEmail && typeof contactEmail === "string" && (
              <p>
                <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-slate-400">
                  Email
                </span>
                <a
                  href={`mailto:${contactEmail}`}
                  className="break-all font-bold text-[#137f73] hover:underline"
                >
                  {contactEmail}
                </a>
              </p>
            )}
          </div>
        )}

        <div className="rounded-[2.5rem] border border-teal-100 bg-white p-10 text-zinc-900 shadow-2xl md:p-12">
          <p className="mb-8 text-center font-medium text-slate-500">
            Ready for us to walk your growth gap live?{" "}
            <Link
              to={G.book}
              className="font-black text-[#137f73] underline hover:text-[#0f665d]"
            >
              Book your agency review
            </Link>
            .
          </p>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-xs font-black uppercase tracking-widest text-slate-400">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 font-medium outline-none transition-all focus:border-[#137f73] focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="mb-3 block text-xs font-black uppercase tracking-widest text-slate-400">
                  Agency Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 font-medium outline-none transition-all focus:border-[#137f73] focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                  placeholder="Your agency"
                />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-xs font-black uppercase tracking-widest text-slate-400">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 font-medium outline-none transition-all focus:border-[#137f73] focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                  placeholder="john@agency.com"
                />
              </div>
              <div>
                <label className="mb-3 block text-xs font-black uppercase tracking-widest text-slate-400">
                  Mobile Phone
                </label>
                <input
                  type="tel"
                  className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 font-medium outline-none transition-all focus:border-[#137f73] focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                  placeholder="(555) 000-0000"
                />
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <input
                type="checkbox"
                id="growth-contact-sms"
                className="mt-1.5 h-5 w-5 rounded-lg border-slate-200 text-[#137f73] focus:ring-[#137f73]"
                required
              />
              <label
                htmlFor="growth-contact-sms"
                className="text-xs font-medium leading-relaxed text-slate-500"
              >
                I agree to receive text messages at the phone number provided.
                Message frequency varies. Msg &amp; data rates may apply. Reply
                STOP to unsubscribe, HELP for help. View our{" "}
                <Link to={G.privacy} className="underline hover:text-[#137f73]">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to={G.terms} className="underline hover:text-[#137f73]">
                  Terms of Service
                </Link>
                .
              </label>
            </div>
            <button
              type="submit"
              className="w-full rounded-[1.5rem] bg-[#137f73] py-6 text-sm font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-teal-500/20 transition-all hover:bg-[#0f665d]"
            >
              Submit inquiry
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
