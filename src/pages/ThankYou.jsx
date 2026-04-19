import { Link } from 'react-router-dom'
import MedigardLogo from '../components/MedigardLogo'
import VslPlayer from '../components/VslPlayer'

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white font-['Inter'] text-slate-900">
      <header className="py-6 px-8 flex justify-between items-center border-b border-slate-100 bg-white">
        <MedigardLogo />
      </header>

      <div className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-emerald-100">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            You're Confirmed
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-[#1e293b] mb-6 tracking-tight">You're All Set</h1>
          <p className="text-xl text-slate-500 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            Your audit session has been booked. Watch the pre-call briefing below so we can hit the ground running.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-blue-100">
            Watch the Pre-Call Briefing
          </div>

          <div className="max-w-3xl mx-auto mb-20 text-left">
            <VslPlayer kicker="Important" title="Watch This Before Our Audit Session" wistiaId="shurnk5iir" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left mb-16">
            {[
              { title: "Check Inbox", desc: "We've sent a confirmation email with your unique meeting link." },
              { title: "Add Calendar", desc: "Add the session to your calendar to ensure you don't miss the slot." },
              { title: "Invite Team", desc: "Forward the invite to your Compliance or Operations leads." }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-sm mb-4">
                  {i + 1}
                </div>
                <h3 className="font-black text-[#1e293b] mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <Link 
            to="/" 
            className="text-slate-400 hover:text-[#3b82f6] transition-colors text-sm font-bold uppercase tracking-widest underline"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
