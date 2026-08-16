import { Link } from "react-router-dom";
import PrivacyPolicyContent from "../../components/PrivacyPolicyContent";
import { G } from "../../growth/constants";

export default function LaunchPrivacy() {
  return (
    <main className="flex-1 px-6 py-16">
      <div className="container mx-auto max-w-3xl">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#137f73]">
          Legal
        </p>
        <h1 className="mb-3 text-5xl font-black tracking-tight text-[#1e293b]">
          Privacy Policy
        </h1>
        <p className="mb-12 text-sm text-slate-400">
          Effective as of June 4, 2026
        </p>
        <PrivacyPolicyContent termsTo={G.terms} />
        <div className="mt-12">
          <Link
            to={G.home}
            className="text-sm font-bold uppercase tracking-widest text-slate-400 underline hover:text-[#137f73]"
          >
            Back to Growth Home
          </Link>
        </div>
      </div>
    </main>
  );
}
