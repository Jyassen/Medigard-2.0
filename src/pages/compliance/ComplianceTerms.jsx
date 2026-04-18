import { Link } from 'react-router-dom'
import { C } from '../../compliance/constants'

export default function ComplianceTerms() {
  return (
    <main className="flex-1 bg-white text-zinc-900">
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-5xl font-black text-[#1e293b] mb-8 tracking-tight">Terms of Service</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 font-medium leading-relaxed">
            <p>
              By using this website or services operated by Medigard Compliance Systems LLC, doing business as
              Medigard, you agree to the following terms and conditions.
            </p>
            <h2 className="text-2xl font-black text-[#1e293b]">Use of Services</h2>
            <p>
              Medigard Compliance Systems LLC provides compliance automation tools for Medicare organizations. Our
              services are intended to assist with compliance monitoring and do not constitute legal advice.
            </p>
            <h2 className="text-2xl font-black text-[#1e293b]">Limitation of Liability</h2>
            <p>
              Medigard Compliance Systems LLC is not liable for any regulatory actions taken against your
              organization. Our system is designed to assist with compliance but does not guarantee legal immunity.
            </p>
            <h2 className="text-2xl font-black text-[#1e293b]">Modifications</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.</p>
          </div>
          <div className="mt-12">
            <Link
              to={C.home}
              className="text-slate-400 hover:text-emerald-600 transition-colors text-sm font-bold uppercase tracking-widest underline"
            >
              Back to compliance home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
