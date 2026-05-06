import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <main className="flex-1">
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <p className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4">Legal</p>
          <h1 className="text-5xl font-black text-[#1e293b] mb-3 tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-slate-400 mb-12">Last updated: May 6, 2026</p>

          <div className="space-y-10 text-slate-600 font-medium leading-relaxed">

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">1. Introduction</h2>
              <p className="mb-3">
                Medigard Compliance Systems LLC, doing business as Medigard (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;),
                provides the Compliance Command System&trade; &mdash; an AI-powered compliance monitoring and
                automation platform built for Medicare Field Marketing Organizations (FMOs), agencies, and
                Third-Party Marketing Organizations (TPMOs). This Privacy Policy explains how we collect,
                use, disclose, and protect your personal information.
              </p>
              <p>
                By using our website, booking an Infrastructure Walkthrough, or using our Services, you agree
                to the practices described in this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">2. Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <strong className="text-[#1e293b]">Contact information:</strong> Name, email address, phone
                  number, and company name provided when you book a walkthrough or contact us.
                </li>
                <li>
                  <strong className="text-[#1e293b]">Business information:</strong> Organization size, agent
                  count, call volume, current QA processes, carrier relationships, and operational details
                  you share during onboarding.
                </li>
                <li>
                  <strong className="text-[#1e293b]">Usage data:</strong> Pages visited, time on page, referral
                  source, browser type, device information, and IP address.
                </li>
                <li>
                  <strong className="text-[#1e293b]">Communication data:</strong> Records of correspondence
                  including emails, call recordings, SMS messages, and consultation notes.
                </li>
                <li>
                  <strong className="text-[#1e293b]">Compliance monitoring data:</strong> If you use the
                  Compliance Command System&trade;, we process call recordings, transcriptions, AI analysis
                  results, marketing material reviews, SOA/PTC documentation, and audit reports on your
                  behalf as a data processor.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-3">
                <li>Provide, operate, and improve the Compliance Command System&trade; and related services</li>
                <li>Process walkthrough bookings and client onboarding</li>
                <li>Communicate with you about your account, appointments, and services</li>
                <li>Send marketing communications with your consent (which you can withdraw at any time)</li>
                <li>Analyze usage patterns to improve system performance and compliance monitoring accuracy</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">4. Automated Communications and AI Processing</h2>
              <p className="mb-3">
                The Compliance Command System&trade; uses AI-powered call transcription, automated violation
                detection, marketing material analysis, and documentation verification to monitor compliance
                on behalf of your organization. You act as the data controller for your own data; we act as
                the data processor.
              </p>
              <p>
                Call recordings and transcripts are used solely to provide compliance monitoring services
                configured for your account and to improve the accuracy of our AI analysis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">5. How We Share Your Information</h2>
              <p className="mb-3">We do not sell your personal information. We may share information with:</p>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <strong className="text-[#1e293b]">Service providers:</strong> Hosting, analytics, CRM
                  integrations, telephony, transcription engines, and communication vendors used to operate
                  the service.
                </li>
                <li>
                  <strong className="text-[#1e293b]">Business transfers:</strong> In connection with a merger,
                  acquisition, or sale of assets.
                </li>
                <li>
                  <strong className="text-[#1e293b]">Legal requirements:</strong> When required by law, court
                  order, or to protect our rights and safety.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">6. Mobile/SMS Messaging Disclosure</h2>
              <p className="mb-3">
                By opting in to SMS communications from Medigard, you consent to receive text messages related
                to our services and your walkthrough appointment. Message and data rates may apply. Message
                frequency varies. You may opt out at any time by replying <strong className="text-[#1e293b]">STOP</strong>.
                Reply <strong className="text-[#1e293b]">HELP</strong> for assistance.
              </p>
              <p className="font-bold text-[#1e293b]">
                No mobile information will be shared with third parties or affiliates for marketing or
                promotional purposes. SMS opt-in data and consent will not be shared with any third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">7. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal
                information, including encryption in transit and at rest, access controls, audit logs, and
                secure hosting infrastructure. Our systems are built with HIPAA-ready, enterprise-grade
                security protocols.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">8. Your Rights</h2>
              <p>
                Depending on your jurisdiction, you may have the right to access, correct, delete, or export
                your personal information, opt out of marketing communications, and withdraw consent for data
                processing. To exercise any of these rights, contact us at the details below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">9. Data Retention</h2>
              <p>
                We retain your information for as long as your account is active or as needed to provide
                services, comply with legal obligations, resolve disputes, and enforce agreements. Call
                recordings, transcripts, and compliance analysis data are retained in accordance with your
                service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">10. Third-Party Links</h2>
              <p>
                Our website and service may contain links to third-party websites. We are not responsible for
                the privacy practices or content of those sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Material changes will be posted here with
                an updated &ldquo;last updated&rdquo; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">12. Contact Us</h2>
              <p>
                Medigard Compliance Systems LLC<br />
                Email:{' '}
                <a href="mailto:support@medigard.io" className="text-[#3b82f6] hover:underline">
                  support@medigard.io
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12">
            <Link to="/" className="text-slate-400 hover:text-[#3b82f6] transition-colors text-sm font-bold uppercase tracking-widest underline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
