import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SMS_MARKETING_CONSENT_LABEL, SMS_NON_MARKETING_CONSENT_LABEL } from '../smsConsentCopy'

export default function HomeOptIn() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [emailMarketingConsent, setEmailMarketingConsent] = useState(false)
  const [smsMarketingConsent, setSmsMarketingConsent] = useState(false)
  const [smsNonMarketingConsent, setSmsNonMarketingConsent] = useState(false)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const endpoint = import.meta.env.VITE_OPTIN_ENDPOINT
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
            source: 'home_opt_in',
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
      setMessage('Something went wrong. Please try again or use Book Walkthrough to reach us.')
    }
  }

  return (
    <section className="py-20 px-6 border-t border-slate-100 bg-gradient-to-b from-blue-50/40 to-white" aria-labelledby="opt-in-heading">
      <div className="container mx-auto max-w-xl text-center">
        <p className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4">Stay informed</p>
        <h2 id="opt-in-heading" className="text-3xl md:text-4xl font-black text-[#1e293b] mb-4 tracking-tight">
          Get compliance insights by email
        </h2>
        <p className="text-slate-600 font-medium mb-8 leading-relaxed">
          One field, clear consent — updates on Medicare compliance automation and audit readiness. Unsubscribe
          anytime.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5 text-left bg-white rounded-3xl border border-slate-100 p-8 shadow-xl shadow-blue-500/5">
          <div className="space-y-2">
            <label htmlFor="optin-email" className="text-xs font-black uppercase tracking-widest text-slate-400">
              Work email
            </label>
            <input
              id="optin-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="you@youragency.com"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#3b82f6] transition-colors font-medium"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="optin-phone" className="text-xs font-black uppercase tracking-widest text-slate-400">
              Mobile phone <span className="font-medium normal-case text-slate-400">(optional)</span>
            </label>
            <input
              id="optin-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
              placeholder="(555) 000-0000"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#3b82f6] transition-colors font-medium"
            />
          </div>
          <div className="flex items-start gap-3">
            <input
              id="optin-email-marketing"
              type="checkbox"
              checked={emailMarketingConsent}
              onChange={(ev) => setEmailMarketingConsent(ev.target.checked)}
              className="mt-1 w-4 h-4 rounded border-slate-300 text-[#3b82f6] focus:ring-[#3b82f6]"
            />
            <label htmlFor="optin-email-marketing" className="text-sm text-slate-600 font-medium leading-relaxed">
              I agree to receive marketing emails from Medigard Compliance Systems LLC (d/b/a Medigard). I understand I
              can unsubscribe at any time.
            </label>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <input
                id="optin-sms-marketing"
                type="checkbox"
                checked={smsMarketingConsent}
                onChange={(ev) => setSmsMarketingConsent(ev.target.checked)}
                className="mt-1 w-4 h-4 rounded border-slate-300 text-[#3b82f6] focus:ring-[#3b82f6]"
              />
              <label htmlFor="optin-sms-marketing" className="text-[10px] text-slate-500 font-medium leading-relaxed">
                {SMS_MARKETING_CONSENT_LABEL}
              </label>
            </div>
            <div className="flex items-start gap-3">
              <input
                id="optin-sms-nonmarketing"
                type="checkbox"
                checked={smsNonMarketingConsent}
                onChange={(ev) => setSmsNonMarketingConsent(ev.target.checked)}
                className="mt-1 w-4 h-4 rounded border-slate-300 text-[#3b82f6] focus:ring-[#3b82f6]"
              />
              <label htmlFor="optin-sms-nonmarketing" className="text-[10px] text-slate-500 font-medium leading-relaxed">
                {SMS_NON_MARKETING_CONSENT_LABEL}
              </label>
            </div>
          </div>
          <p className="text-center text-xs text-slate-500 font-medium">
            <Link to="/privacy" className="text-[#3b82f6] underline hover:text-blue-700">
              Privacy Policy
            </Link>
            <span className="mx-2 text-slate-300">·</span>
            <Link to="/terms" className="text-[#3b82f6] underline hover:text-blue-700">
              Terms & Conditions
            </Link>
          </p>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-[#3b82f6] hover:bg-blue-700 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 disabled:opacity-60 text-sm uppercase tracking-widest"
          >
            {status === 'loading' ? 'Submitting…' : 'Subscribe'}
          </button>
          {message && (
            <p
              className={`text-sm font-medium text-center ${
                status === 'success' ? 'text-emerald-600' : 'text-red-600'
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
