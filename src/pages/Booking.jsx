export default function Booking() {
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

          <div className="max-w-4xl mx-auto rounded-[2.5rem] overflow-hidden bg-white min-h-[600px]">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/R708RvYTDmq9qJnkD72t"
              style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '700px' }}
              scrolling="no"
              id="R708RvYTDmq9qJnkD72t_1776484078506"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
