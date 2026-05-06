import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <main className="flex-1">
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <p className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4">Legal</p>
          <h1 className="text-5xl font-black text-[#1e293b] mb-3 tracking-tight">Terms &amp; Conditions</h1>
          <p className="text-sm text-slate-400 mb-12">Last updated: May 6, 2026</p>

          <div className="space-y-10 text-slate-600 font-medium leading-relaxed">

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">1. Agreement to Terms</h2>
              <p className="mb-3">
                These Terms govern your access to and use of the Medigard website, the Compliance Command
                System&trade;, and all related services (&quot;Services&quot;). By accessing our website, booking an
                Infrastructure Walkthrough, or using our Services, you agree to be bound by these Terms.
              </p>
              <p>
                These Terms constitute a legally binding agreement between you (&quot;Client&quot;) and Medigard
                Compliance Systems LLC, doing business as Medigard (&quot;Company,&quot; &quot;we,&quot; &quot;us&quot;).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">2. Description of Services</h2>
              <p className="mb-3">
                Medigard provides the Compliance Command System&trade; &mdash; an AI-powered compliance
                monitoring and automation platform designed for Medicare Field Marketing Organizations (FMOs),
                agencies, and Third-Party Marketing Organizations (TPMOs), including:
              </p>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <strong className="text-[#1e293b]">100% Call Monitoring:</strong> Automated call recording,
                  transcription, and AI-powered analysis to detect disclaimer breaches, marketing rule
                  violations, and improper benefit discussions in real time.
                </li>
                <li>
                  <strong className="text-[#1e293b]">Instant Material Review:</strong> Automated daily review
                  of marketing materials against current CMS guidelines to prevent compliance drift and
                  outdated messaging.
                </li>
                <li>
                  <strong className="text-[#1e293b]">Automated Documentation:</strong> SOA/PTC documentation
                  verification and timestamping to ensure accuracy, completeness, and audit-readiness.
                </li>
                <li>
                  <strong className="text-[#1e293b]">Real-Time Leadership Dashboards:</strong> Live analytics
                  showing high-risk agents, trending violations, and overall audit-readiness status.
                </li>
                <li>
                  <strong className="text-[#1e293b]">Implementation &amp; Deployment:</strong> White-glove
                  30-day deployment including system configuration, integration with existing call
                  infrastructure, and ongoing optimization.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">3. SMS and Automated Communications &mdash; A2P Compliance</h2>
              <p className="mb-3 font-bold text-[#1e293b]">SMS programme details:</p>
              <ul className="list-disc pl-5 space-y-3">
                <li>Message and data rates may apply. Message frequency varies based on your configured workflows.</li>
                <li>
                  Opt out at any time by replying <strong className="text-[#1e293b]">STOP</strong> to any message.
                </li>
                <li>
                  For help, reply <strong className="text-[#1e293b]">HELP</strong> or contact us at{' '}
                  <a href="mailto:support@medigard.io" className="text-[#3b82f6] hover:underline">support@medigard.io</a>.
                </li>
                <li>Carriers are not liable for delayed or undelivered messages.</li>
                <li>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</li>
                <li>SMS opt-in data and consent will not be shared with any third parties.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">4. Client Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-3">
                <li>Provide accurate business information, agent details, and required platform access (call systems, CRM, telephony)</li>
                <li>Maintain call recording and data flow as needed for the system to function effectively</li>
                <li>Keep all automations and monitoring configurations active during your service term</li>
                <li>Respond to Medigard within a reasonable timeframe for configuration check-ins and optimization requests</li>
                <li>Ensure compliance teams are available to review flagged violations and act on system alerts</li>
                <li>Comply with all applicable laws and regulations, including CMS guidelines, HIPAA, TCPA, and state-level consumer protection statutes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">5. Data Ownership</h2>
              <p>
                You retain full ownership of your business data and all compliance data generated through the
                Compliance Command System&trade;. Medigard acts as a data processor on your behalf. See our{' '}
                <Link to="/privacy" className="text-[#3b82f6] hover:underline">Privacy Policy</Link> for full
                details on data handling.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">6. Intellectual Property</h2>
              <p>
                All intellectual property in the Compliance Command System&trade; &mdash; including workflow
                designs, AI configurations, analysis models, automation sequences, dashboard interfaces, and
                underlying methodologies &mdash; is and remains the exclusive property of Medigard Compliance
                Systems LLC. Client receives a non-exclusive, non-transferable license to use these assets
                during the service term.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">7. Fees and Payment</h2>
              <p>
                Fees, billing frequency, setup costs, and any applicable minimum service terms are outlined in
                your individual service agreement. All fees are non-refundable except as expressly stated in
                your service agreement or required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">8. Performance and Guarantees</h2>
              <p>
                Any performance guarantees, deployment timelines, or refund provisions are outlined in your
                individual service agreement. Medigard makes no representations or warranties regarding
                specific compliance outcomes or regulatory results beyond those explicitly written in that
                agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Medigard Compliance Systems LLC shall not be liable for
                any indirect, incidental, special, consequential, or punitive damages, including but not limited
                to lost profits, lost revenue, lost business opportunities, regulatory penalties, or loss of
                data. Our system is designed to assist with compliance monitoring but does not constitute legal
                advice and does not guarantee legal immunity or regulatory approval.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">10. Termination</h2>
              <p>
                Either party may terminate for material breach not cured within thirty (30) days of written
                notice. Termination obligations and transition assistance are outlined in your individual
                service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">11. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Florida. Disputes shall be resolved
                through the courts of Florida, and both parties consent to the exclusive jurisdiction of
                those courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">12. Changes to These Terms</h2>
              <p>
                Medigard reserves the right to update these Terms from time to time. Material changes will be
                posted here with an updated &ldquo;last updated&rdquo; date. Continued use of the Services
                after updates constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#1e293b] mb-4">13. Contact</h2>
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
