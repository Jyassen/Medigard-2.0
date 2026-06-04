import { Link } from 'react-router-dom'
import { C } from '../../compliance/constants'
import PrivacyPolicyContent from '../../components/PrivacyPolicyContent'

export default function CompliancePrivacy() {
  return (
    <main className="flex-1 bg-white text-zinc-900">
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <p className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4">Legal</p>
          <h1 className="text-5xl font-black text-[#1e293b] mb-3 tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-slate-400 mb-12">Effective as of June 4, 2026</p>

          <PrivacyPolicyContent termsTo={C.terms} />

          <div className="mt-12">
            <Link
              to={C.home}
              className="text-slate-400 hover:text-[#3b82f6] transition-colors text-sm font-bold uppercase tracking-widest underline"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
