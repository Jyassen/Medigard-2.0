import { useMemo } from "react";
import { Link } from "react-router-dom";
import { getSiteOrigin } from "../site";
import { ROUTES } from "../constants/routes";

export default function Contact() {
  const origin = useMemo(() => getSiteOrigin(), []);
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

  return (
    <main className="flex-1">
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <p className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4">
            We are here to help
          </p>
          <h1 className="text-5xl font-black text-[#1e293b] mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg text-slate-600 font-medium mb-10 leading-relaxed">
            Reach Medigard Compliance Systems LLC (d/b/a Medigard) for questions
            about Agency Scale Infrastructure, T-65 guidance, compliance
            systems, implementation, or partnerships.
          </p>
          <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-10 space-y-6">
            {origin && (
              <div>
                <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                  Website
                </h2>
                <a
                  href={origin}
                  className="text-[#3b82f6] font-bold hover:underline break-all"
                >
                  {origin}
                </a>
              </div>
            )}
            {contactEmail && typeof contactEmail === "string" && (
              <div>
                <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                  Email
                </h2>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-[#3b82f6] font-bold hover:underline break-all"
                >
                  {contactEmail}
                </a>
              </div>
            )}
            <div className="border-t border-slate-200 pt-4 text-sm font-medium leading-relaxed text-slate-500">
              <p className="mb-3">
                Choose the review that matches the system you are evaluating:
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={ROUTES.launchBook}
                  className="font-bold text-[#137f73] underline hover:text-[#0f665d]"
                >
                  Growth review
                </Link>
                <Link
                  to={ROUTES.complianceBook}
                  className="font-bold text-[#3b82f6] underline hover:text-blue-700"
                >
                  Compliance review
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
