import { Link } from 'react-router-dom'
import MedigardLogo from '../components/MedigardLogo'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white font-['Inter'] text-slate-900">
      <header className="py-6 px-8 flex justify-between items-center border-b border-slate-100 bg-white">
        <MedigardLogo />
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
