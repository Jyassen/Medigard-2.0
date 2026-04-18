import { useState } from 'react'
import { Link } from 'react-router-dom'
import { C } from '../../compliance/constants'
import { SMS_MARKETING_CONSENT_LABEL, SMS_NON_MARKETING_CONSENT_LABEL } from '../../smsConsentCopy'

export default function ComplianceHomeOptIn() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [emailMarketingConsent, setEmailMarketingConsent] = useState(false)
  const [smsMarketingConsent, setSmsMarketingConsent] = useState(false)
  const [smsNonMarketingConsent, setSmsNonMarketingConsent] = useState(false)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const endpoint =
      import.meta.env.VITE_COMPLIANCE_OPTIN_ENDPOINT || import.meta.env.VITE_OPTIN_ENDPOINT
    setStatus('loading')
    setMessage('')

    try {
      if (endpoint && typeof endpoint === 'string') {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            phone: phone.trim() || undefined,
            emailMarketingConsent,
            smsMarketingConsent,
            smsNonMarketingConsent,
            source: 'compliance_funnel_opt_in',
          }),
        })
        if (!res.ok) throw new Error('Request failed')
      }
      setStatus('success')
      setMessage('Thanks — your preferences were saved.')
      setEmail('')
      setPhone('')
      setEmailMarketingConsent(false)
      setSmsMarketingConsent(false)
      setSmsNonMarketingConsent(false)
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again or schedule a call.')
    }
  }

  return (
    <section
      className="py-20 px-6 bg-[#0a1a14] border-y border-white/5"
      aria-labelledby="compliance-opt-in-heading"
    >
      <div className="max-w-xl mx-auto text-center">
        <p className="text-emerald-400 font-black uppercase tracking-[0.2em] text-xs mb-4">Stay informed</p>
        <h2
          id="compliance-opt-in-heading"
          className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight"
        >
          Get compliance insights by email
        </h2>
        <p className="text-zinc-400 font-medium mb-8 leading-relaxed">
          One field, clear consent — updates on Medicare compliance automation and audit readiness.
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-5 text-left bg-white p-8 rounded-[2rem] border border-emerald-100 shadow-2xl shadow-emerald-900/20"
        >
          <div className="space-y-2">
            <label htmlFor="c-optin-email" className="text-xs font-black uppercase tracking-widest text-slate-400">
              Work email
            </label>
            <input
              id="c-optin-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="you@youragency.com"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-4 focus:outline-none focus:border-emerald-500 transition-colors font-medium text-zinc-900"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="c-optin-phone" className="text-xs font-black uppercase tracking-widest text-slate-400">
              Mobile phone <span className="font-medium normal-case text-slate-400">(optional)</span>
            </label>
            <input
              id="c-optin-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
              placeholder="(555) 000-0000"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-4 focus:outline-none focus:border-emerald-500 transition-colors font-medium text-zinc-900"
            />
          </div>
          <div className="flex items-start gap-3">
            <input
              id="c-optin-email-marketing"
              type="checkbox"
              checked={emailMarketingConsent}
              onChange={(ev) => setEmailMarketingConsent(ev.target.checked)}
              className="mt-1 w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
            />
            <label htmlFor="c-optin-email-marketing" className="text-sm text-slate-600 font-medium leading-relaxed">
              I agree to receive marketing emails from Medigard Compliance Systems LLC (d/b/a Medigard). I understand I
              can unsubscribe at any time.
            </label>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <input
                id="c-optin-sms-marketing"
                type="checkbox"
                checked={smsMarketingConsent}
                onChange={(ev) => setSmsMarketingConsent(ev.target.checked)}
                className="mt-1 w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <label htmlFor="c-optin-sms-marketing" className="text-[10px] text-slate-500 font-medium leading-relaxed">
                {SMS_MARKETING_CONSENT_LABEL}
              </label>
            </div>
            <div className="flex items-start gap-3">
              <input
                id="c-optin-sms-nonmarketing"
                type="checkbox"
                checked={smsNonMarketingConsent}
                onChange={(ev) => setSmsNonMarketingConsent(ev.target.checked)}
                className="mt-1 w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <label htmlFor="c-optin-sms-nonmarketing" className="text-[10px] text-slate-500 font-medium leading-relaxed">
                {SMS_NON_MARKETING_CONSENT_LABEL}
              </label>
            </div>
          </div>
          <p className="text-center text-xs text-slate-500 font-medium">
            <Link to={C.privacy} className="text-emerald-700 underline hover:text-emerald-900">
              Privacy Policy
            </Link>
            <span className="mx-2 text-slate-300">·</span>
            <Link to={C.terms} className="text-emerald-700 underline hover:text-emerald-900">
              Terms & Conditions
            </Link>
          </p>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-emerald-400 text-[#0a1a14] font-black py-4 rounded-2xl hover:bg-emerald-300 transition-all uppercase tracking-[0.15em] text-sm shadow-lg shadow-emerald-500/20 disabled:opacity-60"
          >
            {status === 'loading' ? 'Submitting…' : 'Subscribe'}
          </button>
          {message && (
            <p
              className={`text-sm font-medium text-center ${
                status === 'success' ? 'text-emerald-700' : 'text-red-600'
              }`}
              role="status"
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
