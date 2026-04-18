import { Link } from 'react-router-dom'
import { C } from '../../compliance/constants'

export default function ComplianceThankYou() {
  return (
    <main className="flex-1 flex items-center justify-center py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-2xl w-full text-center relative z-10">
        <div className="w-24 h-24 bg-emerald-500/10 border border-emerald-500/30 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-xl shadow-emerald-500/10">
          <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-emerald-400 font-black uppercase tracking-[0.2em] text-xs mb-4">Request Confirmed</p>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]">You&apos;re All Set</h1>
        <p className="text-zinc-400 text-xl font-medium leading-relaxed mb-14 max-w-lg mx-auto">
          A member of our compliance team will review your information and reach out shortly to schedule your
          consultation.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 text-left space-y-8 mb-14">
          <h2 className="font-black text-xl tracking-tight text-center mb-2">What Happens Next</h2>
          {[
            { n: '01', t: 'Check Your Email', d: 'A confirmation of your request has been sent to your inbox.' },
            { n: '02', t: "We'll Text You", d: "We'll reach out from a verified number to coordinate a time that works for you." },
            { n: '03', t: 'Prepare Your Docs', d: 'Gather any current compliance documentation for our team to review on the call.' },
          ].map((step, i) => (
            <div key={i} className="flex gap-6 items-start group">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-all">
                <span className="text-emerald-400 font-black text-sm">{step.n}</span>
              </div>
              <div>
                <h3 className="font-black text-lg mb-1 tracking-tight">{step.t}</h3>
                <p className="text-zinc-400 font-medium leading-relaxed">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          to={C.home}
          className="inline-block px-10 py-4 bg-emerald-400 text-[#0a1a14] font-black rounded-2xl hover:bg-emerald-300 transition-all uppercase tracking-[0.2em] text-sm shadow-xl shadow-emerald-500/20"
        >
          Return to Home
        </Link>
      </div>
    </main>
  )
}
