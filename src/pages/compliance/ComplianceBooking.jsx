import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { C } from '../../compliance/constants'
import { SMS_MARKETING_CONSENT_LABEL, SMS_NON_MARKETING_CONSENT_LABEL } from '../../smsConsentCopy'

export default function ComplianceBooking() {
  const navigate = useNavigate()
  const [smsMarketingConsent, setSmsMarketingConsent] = useState(false)
  const [smsNonMarketingConsent, setSmsNonMarketingConsent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(C.thanks, { state: { smsMarketingConsent, smsNonMarketingConsent } })
  }

  return (
    <>
      <section className="pt-12 pb-20 px-6 text-center max-w-5xl mx-auto relative">
        <div className="relative z-10">
          <p className="text-emerald-400 font-bold mb-6 tracking-[0.2em] uppercase text-xs">Final Step to Audit Readiness</p>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
            Get <span className="text-emerald-400">100% Visibility</span> And Feel{' '}
            <span className="text-emerald-400">Audit-Ready</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
            Watch the brief overview below to see how we automate your compliance infrastructure, then complete the
            form to schedule your strategy call.
          </p>
          <div className="max-w-4xl mx-auto aspect-video bg-zinc-900/50 rounded-[2.5rem] border-4 border-white/5 shadow-2xl flex items-center justify-center group cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-50" />
            <div className="w-20 h-20 bg-emerald-400 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(52,211,153,0.3)] group-hover:scale-110 transition-transform relative z-10">
              <svg className="w-8 h-8 text-[#0a1a14] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full -z-0" />
      </section>

      <section className="py-24 bg-white text-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-emerald-600 font-black uppercase tracking-[0.2em] text-xs mb-4">What to expect</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">On Our Strategy Call, We Will:</h2>
          </div>
          <div className="space-y-6">
            {[
              'Audit your current call monitoring & QA process',
              'Identify hidden compliance gaps in your agent scripts',
              'Map out a 30-day roadmap to 100% call coverage',
              'Verify your SOA & PTC documentation workflow',
              'Show you the real-time violation alert dashboard',
              'Determine if Medigard is the right fit for your agency',
            ].map((benefit, i) => (
              <div
                key={i}
                className="flex items-center gap-6 p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100 hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-200">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-[#1e293b]">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-emerald-400 font-black uppercase tracking-[0.2em] text-xs mb-4">Secure Your Spot</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Book Your <span className="text-emerald-400">Strategy Call</span>
            </h2>
            <p className="text-zinc-400 font-medium">Complete the form below to schedule your consultation.</p>
          </div>
          <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-emerald-100 text-zinc-900">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-medium"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-medium"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-medium"
                    placeholder="john@agency.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="compliance-book-phone"
                    className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3"
                  >
                    Mobile Phone
                  </label>
                  <input
                    id="compliance-book-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-medium"
                    placeholder="(555) 000-0000"
                  />
                  <p className="mt-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    If you provide a number and opt in below, we may text appointment reminders
                  </p>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                    Agency Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-medium"
                    placeholder="Your agency"
                  />
                </div>
              </div>
              <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    id="compliance-sms-marketing"
                    checked={smsMarketingConsent}
                    onChange={(ev) => setSmsMarketingConsent(ev.target.checked)}
                    className="mt-1.5 w-5 h-5 text-emerald-600 rounded-lg border-slate-200 focus:ring-emerald-500"
                  />
                  <label htmlFor="compliance-sms-marketing" className="text-xs leading-relaxed text-slate-500 font-medium">
                    {SMS_MARKETING_CONSENT_LABEL}
                  </label>
                </div>
                <div className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    id="compliance-sms-nonmarketing"
                    checked={smsNonMarketingConsent}
                    onChange={(ev) => setSmsNonMarketingConsent(ev.target.checked)}
                    className="mt-1.5 w-5 h-5 text-emerald-600 rounded-lg border-slate-200 focus:ring-emerald-500"
                  />
                  <label htmlFor="compliance-sms-nonmarketing" className="text-xs leading-relaxed text-slate-500 font-medium">
                    {SMS_NON_MARKETING_CONSENT_LABEL}
                  </label>
                </div>
              </div>
              <p className="text-center text-xs text-slate-500 font-medium">
                <Link to={C.privacy} className="text-emerald-700 underline hover:text-emerald-600">
                  Privacy Policy
                </Link>
                <span className="mx-2 text-slate-300">·</span>
                <Link to={C.terms} className="text-emerald-700 underline hover:text-emerald-600">
                  Terms & Conditions
                </Link>
              </p>
              <button
                type="submit"
                className="w-full py-6 bg-emerald-400 text-[#0a1a14] font-black rounded-[1.5rem] hover:bg-emerald-300 transition-all uppercase tracking-[0.2em] text-sm shadow-xl shadow-emerald-500/20"
              >
                Schedule My Strategy Call
              </button>
            </form>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[120px] -z-0 pointer-events-none" />
      </section>

      <section className="py-24 bg-white text-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-emerald-600 font-black uppercase tracking-[0.2em] text-xs mb-4">Success Stories</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">See What Our Partners Are Saying</h2>
          </div>
          <div className="space-y-10">
            {[
              {
                title: 'Passed CMS Audit with Zero Findings',
                desc: "Medigard's automated monitoring allowed us to identify and correct agent behavior in real-time. When the audit came, we were ready with perfect documentation.",
                img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'Saved 40+ Hours of Manual QA Weekly',
                desc: 'Our compliance team was drowning in manual call listening. Medigard automated the entire process, allowing us to focus on high-level risk management.',
                img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'Protected $2M in Override Revenue',
                desc: 'One carrier violation could have cost us everything. Medigard gave us the visibility we needed to scale our agency with total peace of mind.',
                img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-zinc-50 rounded-[3rem] border border-zinc-100 overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="grid md:grid-cols-2 items-center">
                  <div className="p-10 md:p-14">
                    <h3 className="text-2xl md:text-3xl font-black mb-4 text-[#1e293b] leading-tight">{item.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed font-medium mb-6">{item.desc}</p>
                    <div className="flex text-yellow-400 text-sm">★★★★★</div>
                  </div>
                  <div className="h-full min-h-[280px] relative overflow-hidden">
                    <img
                      src={item.img}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
