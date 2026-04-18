import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getSiteOrigin } from '../site'

export default function Contact() {
  const origin = useMemo(() => getSiteOrigin(), [])
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL

  return (
    <main className="flex-1">
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <p className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4">We are here to help</p>
          <h1 className="text-5xl font-black text-[#1e293b] mb-6 tracking-tight">Contact Us</h1>
          <p className="text-lg text-slate-600 font-medium mb-10 leading-relaxed">
            Reach Medigard Compliance Systems LLC (d/b/a Medigard) for questions about compliance automation,
            implementation, or partnership.
          </p>
          <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-10 space-y-6">
            {origin && (
              <div>
                <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Website</h2>
                <a href={origin} className="text-[#3b82f6] font-bold hover:underline break-all">
                  {origin}
                </a>
              </div>
            )}
            {contactEmail && typeof contactEmail === 'string' && (
              <div>
                <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Email</h2>
                <a href={`mailto:${contactEmail}`} className="text-[#3b82f6] font-bold hover:underline break-all">
                  {contactEmail}
                </a>
              </div>
            )}
            <p className="text-sm text-slate-500 font-medium leading-relaxed pt-4 border-t border-slate-200">
              For a structured technical review of your environment, use{' '}
              <Link to="/book" className="text-[#3b82f6] font-bold underline hover:text-blue-700">
                Book Walkthrough
              </Link>{' '}
              so we can capture the details we need to prepare.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
