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
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-[#1e293b] mb-6 leading-tight tracking-tight">
              Book Your Compliance <br />
              <span className="text-[#3b82f6]">Infrastructure Audit</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Select a time for your 30-minute technical strategy session. We'll map your blind spots and calculate your penalty exposure.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16 rounded-[2.5rem] overflow-hidden bg-white min-h-[600px]">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/HbCiwJFvO9kmjAKSWa9v"
              style={{ width: '100%', height: '1069px', border: 'none', borderRadius: '3px' }}
              id="inline-HbCiwJFvO9kmjAKSWa9v"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Booking Form"
              data-height="1069"
              data-layout-iframe-id="inline-HbCiwJFvO9kmjAKSWa9v"
              data-form-id="HbCiwJFvO9kmjAKSWa9v"
              title="Booking Form"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
      </div>
    </main>
  )
}
