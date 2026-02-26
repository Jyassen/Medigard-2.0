import { Link } from 'react-router-dom'

export default function Privacy() {
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
          <h1 className="text-5xl font-black text-[#1e293b] mb-8 tracking-tight">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 font-medium leading-relaxed">
            <p>Your privacy is important to us. This Privacy Policy explains how Medigard Compliance collects, uses, and protects your information.</p>
            <h2 className="text-2xl font-black text-[#1e293b]">Information We Collect</h2>
            <p>We collect information you provide directly, such as your name, email address, phone number, and company details when you book a walkthrough or contact us.</p>
            <h2 className="text-2xl font-black text-[#1e293b]">How We Use Your Information</h2>
            <p>We use the information to provide our compliance automation services, communicate with you, and improve our platform.</p>
            <h2 className="text-2xl font-black text-[#1e293b]">Data Security</h2>
            <p>We implement industry-standard security measures to protect your data. Our systems are HIPAA-ready and follow enterprise-grade security protocols.</p>
            <h2 className="text-2xl font-black text-[#1e293b]">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us through our website.</p>
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
