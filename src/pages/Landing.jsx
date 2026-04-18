import { useState } from 'react'
import { Link } from 'react-router-dom'
import MedigardLogo from '../components/MedigardLogo'
import VslPlayer from '../components/VslPlayer'

function CTAButton({ children, className = '', primary = true }) {
  return (
    <Link
      to="/book"
      className={`inline-block px-10 py-5 rounded-xl text-lg font-bold transition-all text-center transform hover:scale-105 active:scale-95 ${
        primary 
          ? 'bg-[#3b82f6] text-white hover:bg-blue-700 shadow-xl shadow-blue-500/20' 
          : 'border-2 border-[#3b82f6] text-[#3b82f6] hover:bg-blue-50'
      } ${className}`}
    >
      {children}
    </Link>
  )
}

export default function Landing() {
  const [openFaq, setOpenFaq] = useState(null)

  const pillars = [
    {
      title: "Monitor",
      tagline: "100% CALL TRANSCRIPTION",
      desc: "Every call is automatically recorded, transcribed, and analyzed. No manual listening. No blind spots. The system flags disclaimer breaches, marketing rule violations, and improper benefit discussions in real time.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      bgIcon: (
        <svg className="absolute right-4 bottom-4 w-32 h-32 text-blue-500/10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      title: "Audit",
      tagline: "INSTANT MATERIAL REVIEW",
      desc: "Your marketing materials are automatically reviewed against current CMS guidelines every single day. No compliance drift. No outdated messaging. The system flags materials that don't meet standards immediately.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      bgIcon: (
        <svg className="absolute right-4 bottom-4 w-32 h-32 text-purple-500/10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Verify",
      tagline: "AUTOMATED DOCUMENTATION",
      desc: "Your SOA/PTC documentation is automatically verified and timestamped. No manual spreadsheets. No documentation errors. The system ensures every document is accurate, complete, and audit-ready.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgIcon: (
        <svg className="absolute right-4 bottom-4 w-32 h-32 text-emerald-500/10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Protect",
      tagline: "REAL-TIME LEADERSHIP DASHBOARDS",
      desc: "See exactly which agents are high-risk, which violations are trending, and your overall audit-readiness status. Make informed decisions and act before problems become penalties.",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      bgIcon: (
        <svg className="absolute right-4 bottom-4 w-32 h-32 text-orange-500/10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-slate-900">
      
      {/* HEADER */}
      <header className="py-6 px-8 flex justify-between items-center border-b border-slate-100 bg-white">
        <MedigardLogo />
      </header>

      {/* HERO SECTION */}
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1e293b] mb-8 leading-[1.05] tracking-tight max-w-5xl mx-auto">
            Stop Being Blind to 95% of Your Calls <br />
            <span className="text-[#3b82f6]">Know What CMS Will Find</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Monitor 100% of calls automatically, pass audits with zero findings, and protect millions in override revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <CTAButton>Book Your Free Walkthrough</CTAButton>
          </div>

          <div id="vsl" className="max-w-5xl mx-auto mb-32">
            <VslPlayer title="How to Automate 100% of Medicare Compliance in 30 Days" wistiaId="u42b0eiuew" />
          </div>

          {/* 1. THIS IS FOR YOU IF SECTION (Qualification) */}
          <div className="py-24 border-t border-slate-100">
            <div className="text-center mb-16">
              <p className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4">Qualification</p>
              <h2 className="text-5xl md:text-6xl font-black text-[#1e293b] mb-6 tracking-tight">This Is For You If...</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                { title: "Compliance Directors", desc: "You're losing sleep over the 95% of calls you never hear and the looming CMS audit cycle." },
                { title: "QA Managers", desc: "Your team is drowning in manual reviews and you know hiring more staff isn't the scalable answer." },
                { title: "Agency Owners", desc: "You need to protect millions in override revenue and carrier contracts from a single violation." },
                { title: "TPMO Leaders", desc: "You want to scale your agent count without exponentially increasing your regulatory risk profile." }
              ].map((item, i) => (
                <div key={i} className="bg-blue-100/60 p-8 rounded-3xl border border-blue-200 shadow-sm">
                  <h3 className="text-xl font-black text-[#1e293b] mb-3">{item.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. THE PROBLEM SECTION (Agitation) */}
          <div className="py-24 border-t border-slate-100">
            <div className="text-center mb-16">
              <p className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4">The Problem</p>
              <h2 className="text-5xl md:text-6xl font-black text-[#1e293b] mb-6 tracking-tight">What's Broken in the Market</h2>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium">
                Here's what most Medicare organizations are still doing and why it quietly sabotages their success:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  q: "We manually review a sample of calls.",
                  a: "On paper, this sounds reasonable. But when your team is handling thousands of calls, 'spot checking' is just another way of saying, 'We have no real visibility.' Compliance becomes guesswork."
                },
                {
                  q: "Our agents know the script.",
                  a: "Yes they know it. But that doesn't mean they follow it, especially under pressure. CMS doesn't differentiate between a mistake and a violation. One slip becomes a compliance risk."
                },
                {
                  q: "Our compliance team reviews marketing materials manually.",
                  a: "Until you find out CMS changed a rule, and suddenly a flyer that took two weeks to approve is now non-compliant. Manual review creates bottlenecks and pushes agents to create their own materials."
                },
                {
                  q: "Our SOA and PTC documentation is handled in the CRM.",
                  a: "If your documentation isn't perfectly matched to call logs and timestamps, CMS sees it as non-compliant period. Relying on agents to correctly log every step is the root of the problem."
                }
              ].map((item, i) => (
                <div key={i} className="bg-blue-100/40 p-10 rounded-3xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow text-left">
                  <h4 className="text-2xl font-black text-[#1e293b] mb-4 tracking-tight">"{item.q}"</h4>
                  <p className="text-slate-600 leading-relaxed text-lg font-medium">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. OLD WAY VS NEW WAY (Contrast) */}
          <div className="py-24 border-t border-slate-100 bg-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h2 className="text-5xl font-black text-[#1e293b] mb-8 tracking-tight">The Manual Trap vs. <br /><span className="text-blue-600">The Command System</span></h2>
                <p className="text-xl text-slate-600 mb-8 font-medium">Most agencies are using 2015 processes for 2025 enforcement levels. It's a recipe for disaster.</p>
                <div className="space-y-6">
                  <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                    <h4 className="text-red-600 font-black uppercase tracking-widest text-xs mb-3">The Old Way (Manual QA)</h4>
                    <ul className="space-y-2 text-slate-600 font-medium">
                      <li>❌ Reviewing only 5% of calls</li>
                      <li>❌ Hiring more staff to solve a machine problem</li>
                      <li>❌ Reactive fixes after violations occur</li>
                      <li>❌ Constant audit anxiety</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <h4 className="text-emerald-600 font-black uppercase tracking-widest text-xs mb-3">The New Way (Medigard)</h4>
                    <ul className="space-y-2 text-slate-700 font-medium">
                      <li>✅ 100% Automated Call Monitoring</li>
                      <li>✅ Scalable infrastructure, zero new headcount</li>
                      <li>✅ Proactive violation detection in real time</li>
                      <li>✅ Permanent audit-readiness</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" className="rounded-[2.5rem] shadow-2xl" alt="Data Analysis" />
                <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-3xl shadow-xl max-w-xs text-left overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-end gap-2 mb-2">
                      <p className="text-4xl font-black">40%</p>
                      <svg className="w-8 h-8 text-emerald-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold opacity-90 uppercase tracking-widest leading-tight">Increase in CMS Enforcement Actions YoY</p>
                  </div>
                  {/* Decorative Chart Background */}
                  <svg className="absolute bottom-0 right-0 w-32 h-16 text-white/10 -mb-2" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path d="M0 40 L20 30 L40 35 L60 15 L80 20 L100 0 L100 40 Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* 4. PILLARS SECTION (The Solution) */}
          <div id="solution" className="py-24 border-t border-slate-100">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1e293b] mb-6 leading-tight">The Medigard Compliance <br /><span className="text-blue-600">Command System™</span></h2>
            <p className="text-xl md:text-2xl text-slate-500 mb-16 max-w-2xl mx-auto font-medium">Stop thinking about compliance as a department. Think about it as infrastructure.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {pillars.map((pillar, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 text-left relative overflow-hidden group">
                  {pillar.bgIcon}
                  <div className="relative z-10">
                    <div className={`w-14 h-14 ${pillar.bgColor} rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-slate-100 group-hover:scale-110 transition-transform`}>
                      <div className={pillar.color}>{pillar.icon}</div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-[#1e293b] mb-2">{pillar.title}</h3>
                    <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-6">{pillar.tagline}</p>
                    <p className="text-slate-500 leading-relaxed text-base md:text-lg font-medium">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. WHAT WE'LL COVER ON THE CALL (The Roadmap) */}
          <div className="py-24 border-y border-slate-100">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-[#1e293b] mb-6 tracking-tight">Your Infrastructure Walkthrough</h2>
              <p className="text-xl text-slate-500 font-medium">A focused 30-minute session to map your path to 100% compliance.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-left">
              {[
                { step: "1", title: "Gap Audit", desc: "We analyze your current call volume vs. QA capacity to find your 'Blind Spot' percentage." },
                { step: "2", title: "Risk Mapping", desc: "We calculate your potential penalty exposure based on current CMS enforcement trends." },
                { step: "3", title: "System Demo", desc: "A live look at how the 4 Pillars would integrate with your existing call infrastructure." },
                { step: "4", title: "30-Day Roadmap", desc: "A step-by-step plan to get you fully deployed and audit-ready in exactly one month." }
              ].map((item, i) => (
                <div key={i} className="relative bg-blue-100/40 p-8 rounded-3xl border border-blue-200 shadow-sm">
                  <span className="text-6xl font-black text-blue-600/10 absolute -top-8 -left-2 z-0">{item.step}</span>
                  <div className="relative z-10">
                    <h3 className="text-xl font-black text-[#1e293b] mb-3">{item.title}</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <CTAButton className="px-12 py-5">Schedule Your Walkthrough</CTAButton>
              <p className="mt-4 text-slate-400 text-sm font-bold uppercase tracking-widest">⚡ Only 5 slots available for March deployment</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION (Objections) */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-5xl font-black text-[#1e293b] mb-12 text-center tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What if we already have a compliance system?", a: "Most systems are just tools that require your team to do the work. Medigard is infrastructure. We build it, configure it, and deploy it so it works for you automatically." },
              { q: "Is this HIPAA compliant?", a: "Yes. Our system is built with enterprise-grade security and is fully HIPAA ready, ensuring all beneficiary data is protected and stored according to federal standards." },
              { q: "How long does deployment actually take?", a: "We guarantee a 30-day white-glove deployment. From the moment we start, you will be monitoring 100% of your calls in exactly one month." },
              { q: "Is this a sales call?", a: "No. The walkthrough is a technical strategy session where we map your current blind spots and show you exactly what the fix looks like for your specific agency." }
            ].map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center bg-blue-100/40 hover:bg-blue-100/60 transition-colors"
                >
                  <span className="font-black text-[#1e293b]">{faq.q}</span>
                  <span className="text-blue-600 text-2xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-8 py-6 text-slate-600 font-medium leading-relaxed bg-white border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
