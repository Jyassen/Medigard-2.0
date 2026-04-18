import { useEffect } from 'react'

export default function Booking() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.type = 'text/javascript'
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  return (
    <main className="flex-1">
      <div className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
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

            <div className="bg-white rounded-[2.5rem] border border-slate-100 p-6 shadow-2xl shadow-blue-500/5 overflow-hidden">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/Wwb6Zz1dHUZZ5V5ugbc9"
                style={{ width: '100%', height: '669px', border: 'none', borderRadius: '4px' }}
                id="inline-Wwb6Zz1dHUZZ5V5ugbc9"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Opt-in Form | A2P Approved"
                data-height="669"
                data-layout-iframe-id="inline-Wwb6Zz1dHUZZ5V5ugbc9"
                data-form-id="Wwb6Zz1dHUZZ5V5ugbc9"
                title="Opt-in Form | A2P Approved"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
