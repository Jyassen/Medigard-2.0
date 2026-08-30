import { Link } from "react-router-dom";
import MedigardLogo from "./MedigardLogo";
import { ROUTES } from "../constants/routes";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white border-t border-slate-100 mt-auto">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <MedigardLogo size="sm" />
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-bold text-slate-400">
            <Link to={ROUTES.launch} className="hover:text-[#1e293b]">
              Growth
            </Link>
            <Link to={ROUTES.complianceV2} className="hover:text-[#1e293b]">
              Compliance
            </Link>
            <Link to={ROUTES.privacy} className="hover:text-[#1e293b]">
              Privacy Policy
            </Link>
            <Link to={ROUTES.terms} className="hover:text-[#1e293b]">
              Terms of Service
            </Link>
            <Link to={ROUTES.contact} className="hover:text-[#1e293b]">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="text-center text-xs text-slate-400 max-w-3xl mx-auto leading-relaxed space-y-4">
          <p>© {year} Medigard Compliance Systems LLC. All rights reserved.</p>
          <p className="font-medium text-slate-500">
            Medigard Compliance Systems LLC, doing business as Medigard,
            operates this website and the growth and compliance services
            described herein. References to &quot;Medigard&quot; on this site
            refer to Medigard Compliance Systems LLC.
          </p>
          <p>
            Medigard is an independent Medicare agency infrastructure provider.
            We are not affiliated with CMS or any government agency. Our
            services do not guarantee agent production, revenue, legal immunity,
            or regulatory outcomes.
          </p>
          <p>
            This site is not part of the Facebook Inc. website or Google Inc. In
            addition, this site is not endorsed by Facebook in any way or by
            Google.
          </p>
        </div>
      </div>
    </footer>
  );
}
