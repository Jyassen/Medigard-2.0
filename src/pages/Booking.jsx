import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Booking() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      navigate('/thank-you')
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-slate-900">
      {/* HEADER */}
      <header className="py-6 px-8 flex justify-between items-center border-b border-slate-100 bg-white">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#3b82f6] rounded flex items-center justify-center text-white font-bold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <span className="text-xl font-black tracking-tighter text-[#1e293b]">Medigard</span>
        </Link>
      </header>

      <div className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* LEFT SIDE: VALUE RECAP */}
            <div>
              <h1 className="text-5xl font-black text-[#1e293b] mb-6 leading-tight tracking-tight">
                Book Your Compliance <br />
                <span className="text-[#3b82f6]">Infrastructure Audit</span>
              </h1>
              <p className="text-xl text-slate-500 mb-10 font-medium leading-relaxed">
                Select a time for your 30-minute technical strategy session. We'll map your blind spots and calculate your penalty exposure.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Gap Audit", desc: "Analyze your current call volume vs. QA capacity." },
                  { title: "Risk Mapping", desc: "Calculate potential penalty exposure based on CMS trends." },
                  { title: "30-Day Roadmap", desc: "A step-by-step plan to get you fully audit-ready." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-black text-[#1e293b]">{item.title}</h3>
                      <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: FORM */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 p-10 shadow-2xl shadow-blue-500/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#3b82f6] transition-colors font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Work Email</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="john@agency.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#3b82f6] transition-colors font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Agency Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Medicare Solutions FMO"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#3b82f6] transition-colors font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Mobile Phone</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="(555) 000-0000"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#3b82f6] transition-colors font-medium"
                  />
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">We'll text you appointment reminders and updates</p>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Agent Count</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#3b82f6] transition-colors font-medium appearance-none">
                    <option>1-10 agents</option>
                    <option>11-50 agents</option>
                    <option>51-200 agents</option>
                    <option>200+ agents</option>
                  </select>
                </div>

                {/* A2P Compliance Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input 
                    type="checkbox" 
                    id="sms-consent" 
                    required
                    className="mt-1 w-4 h-4 rounded border-slate-300 text-[#3b82f6] focus:ring-[#3b82f6]"
                  />
                  <label htmlFor="sms-consent" className="text-[10px] text-slate-400 font-medium leading-relaxed">
                    I agree to receive text messages at the phone number provided. 
                    Message frequency varies. Msg & data rates may apply. 
                    Reply STOP to unsubscribe, HELP for help. 
                    View our <Link to="/privacy" className="underline hover:text-[#3b82f6]">Privacy Policy</Link> and 
                    <Link to="/terms" className="underline hover:text-[#3b82f6]">Terms of Service</Link>.
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-[#3b82f6] hover:bg-blue-700 text-white font-black py-5 rounded-xl transition-all shadow-xl shadow-blue-500/20 disabled:opacity-50 text-lg uppercase tracking-widest"
                >
                  {loading ? 'Scheduling...' : 'Confirm Audit Session'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
