import { Link } from 'react-router-dom'
import { C } from '../../compliance/constants'
import { getSiteOrigin } from '../../site'

export default function ComplianceContact() {
  const origin = getSiteOrigin()
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL

  return (
    <main className="flex-1 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-emerald-400 font-black uppercase tracking-[0.2em] text-xs mb-4 text-center">
          Contact Us
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-center mb-4 tracking-tight">Talk to our team</h1>
        <p className="text-zinc-400 text-center font-medium mb-12">
          Medigard Compliance Systems LLC (d/b/a Medigard) — questions, partnerships, or implementation.
        </p>

        {(origin || contactEmail) && (
          <div className="mb-10 p-6 rounded-2xl border border-white/10 bg-white/5 text-center space-y-3 text-sm">
            {origin && (
              <p>
                <span className="text-zinc-500 font-bold uppercase tracking-widest text-xs block mb-1">Website</span>
                <a href={origin} className="text-emerald-400 font-bold hover:underline break-all">
                  {origin}
                </a>
              </p>
            )}
            {contactEmail && typeof contactEmail === 'string' && (
              <p>
                <span className="text-zinc-500 font-bold uppercase tracking-widest text-xs block mb-1">Email</span>
                <a href={`mailto:${contactEmail}`} className="text-emerald-400 font-bold hover:underline break-all">
                  {contactEmail}
                </a>
              </p>
            )}
          </div>
        )}

        <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-emerald-100 text-zinc-900">
          <p className="text-slate-500 text-center font-medium mb-8">
            For a full strategy session, prefer{' '}
            <Link to={C.book} className="text-emerald-700 font-black underline hover:text-emerald-900">
              Schedule Call
            </Link>
            .
          </p>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-medium"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                  Agency Name
                </label>
                <input
                  type="text"
                  className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-medium"
                  placeholder="Your FMO"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-medium"
                  placeholder="john@agency.com"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                  Mobile Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-medium"
                  placeholder="(555) 000-0000"
                />
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <input
                type="checkbox"
                id="compliance-contact-sms"
                className="mt-1.5 w-5 h-5 text-emerald-600 rounded-lg border-slate-200 focus:ring-emerald-500"
                required
              />
              <label htmlFor="compliance-contact-sms" className="text-xs leading-relaxed text-slate-500 font-medium">
                I agree to receive text messages at the phone number provided. Message frequency varies. Msg & data
                rates may apply. Reply STOP to unsubscribe, HELP for help. View our{' '}
                <Link to={C.privacy} className="underline hover:text-emerald-600">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link to={C.terms} className="underline hover:text-emerald-600">
                  Terms of Service
                </Link>
                .
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-6 bg-emerald-400 text-[#0a1a14] font-black rounded-[1.5rem] hover:bg-emerald-300 transition-all uppercase tracking-[0.2em] text-sm shadow-xl shadow-emerald-500/20"
            >
              Submit inquiry
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
