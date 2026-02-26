import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white font-['Inter'] text-slate-900">
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

      <div className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-5xl font-black text-[#1e293b] mb-8 tracking-tight">Terms of Service</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 font-medium leading-relaxed">
            <p>By using Medigard Compliance services, you agree to the following terms and conditions.</p>
            <h2 className="text-2xl font-black text-[#1e293b]">Use of Services</h2>
            <p>Medigard provides compliance automation tools for Medicare organizations. Our services are intended to assist with compliance monitoring and do not constitute legal advice.</p>
            <h2 className="text-2xl font-black text-[#1e293b]">Limitation of Liability</h2>
            <p>Medigard is not liable for any regulatory actions taken against your organization. Our system is designed to assist with compliance but does not guarantee legal immunity.</p>
            <h2 className="text-2xl font-black text-[#1e293b]">Modifications</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.</p>
          </div>
          <div className="mt-12">
            <Link to="/" className="text-slate-400 hover:text-[#3b82f6] transition-colors text-sm font-bold uppercase tracking-widest underline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
