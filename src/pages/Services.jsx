import { Link } from 'react-router-dom'

export default function Services() {
  const items = [
    {
      title: '100% call monitoring',
      body: 'Automatic transcription and analysis across your book of business — disclaimer, marketing, and benefit discussion coverage without manual sampling gaps.',
    },
    {
      title: 'Material & CMS alignment',
      body: 'Ongoing checks against current CMS guidance so approved materials stay aligned as rules change.',
    },
    {
      title: 'Documentation & audit trail',
      body: 'Timestamped SOA/PTC and call-log correlation designed for audit-ready evidence, not spreadsheet drift.',
    },
    {
      title: 'Leadership visibility',
      body: 'Dashboards for risk trends, agent-level signals, and readiness status so leadership can act before issues escalate.',
    },
  ]

  return (
    <main className="flex-1">
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <p className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4">What we deliver</p>
          <h1 className="text-5xl font-black text-[#1e293b] mb-6 tracking-tight">Services</h1>
          <p className="text-xl text-slate-600 font-medium mb-14 max-w-2xl leading-relaxed">
            Medigard Compliance Systems LLC provides compliance automation infrastructure for Medicare-focused
            agencies and FMOs — built to scale with your agent count, not your headcount.
          </p>
          <ul className="space-y-8">
            {items.map((item) => (
              <li
                key={item.title}
                className="p-8 rounded-3xl border border-slate-100 bg-blue-50/40 shadow-sm"
              >
                <h2 className="text-2xl font-black text-[#1e293b] mb-3">{item.title}</h2>
                <p className="text-slate-600 font-medium leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-14 text-center">
            <Link
              to="/book"
              className="inline-block px-10 py-5 rounded-xl text-lg font-bold bg-[#3b82f6] text-white hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-colors"
            >
              Book your walkthrough
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
