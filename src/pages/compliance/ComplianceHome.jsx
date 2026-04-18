import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { C } from '../../compliance/constants'
import ComplianceHomeOptIn from '../../components/compliance/ComplianceHomeOptIn'

export default function ComplianceHome() {
  const [openFaq, setOpenFaq] = useState(null)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (pathname !== '/compliance' || hash !== '#benefits') return
    document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [pathname, hash])

  const faqs = [
    {
      q: 'Is this system HIPAA compliant?',
      a: 'Yes, Medigard is built with enterprise-grade security and is fully HIPAA compliant.',
    },
    {
      q: 'How long does deployment take?',
      a: 'Our white-glove deployment typically takes 30 days from start to finish.',
    },
    {
      q: 'Does this replace our current QA team?',
      a: 'No, it empowers them. It automates the manual listening so they can focus on high-level strategy.',
    },
  ]

  return (
    <>
      <section className="pt-16 pb-24 px-6 text-center max-w-5xl mx-auto relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-emerald-400 font-bold mb-6 tracking-[0.2em] uppercase text-xs">
            The #1 Compliance Infrastructure for Medicare Agencies
          </p>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
            Helping Medicare Agencies Get <span className="text-emerald-400">100% Visibility</span> and Feel{' '}
            <span className="text-emerald-400">Audit-Ready</span>
          </h1>
          <div className="flex flex-col items-center gap-4 mt-12">
            <div className="flex -space-x-3">
              {[
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
              ].map((url, i) => (
                <img
                  key={i}
                  src={url}
                  className="w-14 h-14 rounded-full border-4 border-[#0a1a14] object-cover shadow-xl"
                  alt=""
                />
              ))}
            </div>
            <div className="text-center">
              <p className="text-white font-bold text-2xl mb-1">4.9/5 star reviews</p>
              <p className="text-zinc-400 text-sm">Thousands of happy compliance directors worldwide</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -z-0" />
      </section>

      <ComplianceHomeOptIn />

      <section id="benefits" className="py-24 bg-white text-zinc-900 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-emerald-600 font-black uppercase tracking-[0.2em] text-xs mb-4">
              Benefits — Enterprise Standard
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Here&apos;s What You&apos;ll Get to <span className="text-emerald-600">Protect Your Revenue</span> in{' '}
              <span className="text-emerald-600">30 Days</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                t: '100% Call Coverage',
                d: 'Monitor every single interaction, not just a 5% sample. Eliminate the blind spots that cause massive CMS penalties.',
              },
              {
                t: 'Real-Time Violation Alerts',
                d: 'Catch disclaimer breaches and marketing rule violations before they become permanent audit findings.',
              },
              {
                t: 'Automated Documentation',
                d: 'SOA and PTC matching that stands up to any carrier audit with perfect timestamp verification.',
              },
              {
                t: 'Agent Risk Scoring',
                d: 'Identify high-risk behavior across your entire roster before it impacts your carrier contracts.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-emerald-50/30 p-10 rounded-3xl border border-emerald-100 flex gap-6 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-emerald-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-2xl mb-3 text-[#1e293b]">{item.t}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-32 bg-[#0a1a14] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <p className="text-emerald-400 font-black uppercase tracking-[0.2em] text-xs mb-4">Features</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Achieve <span className="text-emerald-400">Audit Readiness</span> with Our{' '}
              <span className="text-emerald-400">Command Infrastructure</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600"
                  className="rounded-[2.5rem] w-full aspect-[4/5] object-cover mt-16 shadow-2xl border-4 border-white/5"
                  alt="Compliance Director"
                />
                <div className="space-y-6">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600"
                    className="rounded-[2.5rem] w-full aspect-square object-cover shadow-2xl border-4 border-white/5"
                    alt="Team Meeting"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
                    className="rounded-[2.5rem] w-full aspect-square object-cover shadow-2xl border-4 border-white/5"
                    alt="Data Analysis"
                  />
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[100px]" />
            </div>
            <div className="space-y-12">
              {[
                {
                  t: 'Automated Call Transcription',
                  d: 'Every call is transcribed and analyzed for compliance triggers instantly. No manual listening required.',
                },
                {
                  t: 'Marketing Material Review',
                  d: 'Scan flyers, scripts, and ad copy against the latest CMS MMG rules in seconds, not weeks.',
                },
                {
                  t: 'Leadership Dashboards',
                  d: "Get a birds-eye view of your entire organization's compliance health and agent risk levels in real-time.",
                },
              ].map((f, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-[1.5rem] flex items-center justify-center flex-shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all">
                    <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3 tracking-tight">{f.t}</h3>
                    <p className="text-zinc-400 text-lg leading-relaxed font-medium">{f.d}</p>
                  </div>
                </div>
              ))}
              <div className="pt-6">
                <Link
                  to={C.book}
                  className="inline-block w-full py-5 bg-emerald-400 text-[#0a1a14] font-black rounded-2xl hover:bg-emerald-300 transition-all uppercase tracking-[0.2em] text-sm text-center shadow-xl shadow-emerald-500/20"
                >
                  Schedule Strategy Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-32 bg-white text-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-emerald-600 font-black uppercase tracking-[0.2em] text-xs mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">What Others Are Saying</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                n: 'Sarah C.',
                r: 'Compliance Director',
                t: 'Medigard changed how we handle audits. We passed our last CMS review with zero findings and complete confidence.',
              },
              {
                n: 'Marcus R.',
                r: 'QA Manager',
                t: 'The automated transcription saves my team 40 hours a week. We finally have visibility into 100% of our calls.',
              },
              {
                n: 'Jennifer W.',
                r: 'Agency Owner',
                t: 'Protecting our override revenue was my top priority. Medigard made it effortless and scalable as we grew.',
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-zinc-50 p-10 rounded-[2.5rem] border border-zinc-100 relative hover:shadow-xl transition-all"
              >
                <span className="text-8xl text-emerald-500/10 absolute top-6 left-6 font-serif leading-none">
                  “
                </span>
                <p className="text-slate-600 mb-10 relative z-10 italic text-lg font-medium leading-relaxed">
                  &quot;{t.t}&quot;
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center font-black text-emerald-700 text-xl shadow-inner">
                    {t.n[0]}
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-[#1e293b]">{t.n}</h4>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">{t.r}</p>
                    <div className="flex text-yellow-400 text-sm mt-1">★★★★★</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <Link
              to={C.book}
              className="inline-block px-16 py-5 bg-emerald-100 text-emerald-900 font-black rounded-2xl hover:bg-emerald-200 transition-all uppercase tracking-[0.2em] text-sm shadow-lg shadow-emerald-100"
            >
              Schedule Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0a1a14]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-emerald-400 font-black uppercase tracking-[0.2em] text-xs mb-4">Still Got Questions?</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden transition-all hover:border-emerald-500/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-10 py-8 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="text-xl font-black tracking-tight">{faq.q}</span>
                  <span
                    className={`text-emerald-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-10 pb-8 text-zinc-400 text-lg leading-relaxed border-t border-white/5 pt-6 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
