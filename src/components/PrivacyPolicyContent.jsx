import { Link } from 'react-router-dom'

export default function PrivacyPolicyContent({ termsTo = '/terms' }) {
  return (
    <div className="space-y-10 text-slate-600 font-medium leading-relaxed">
      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">1. Introduction</h2>
        <p className="mb-3">
          Medigard Compliance Systems LLC, doing business as Medigard (&quot;Medigard Compliance Systems,&quot;
          &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, and protect your information when you use our website and
          services, including SMS marketing, email marketing, appointment reminders, and website tracking
          tools.
        </p>
        <p>
          By using our services or opting into our communications, you agree to this Privacy Policy and our{' '}
          <Link to={termsTo} className="text-[#3b82f6] hover:underline">
            Terms and Conditions
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">2. Information We Collect</h2>
        <h3 className="text-lg font-black text-[#1e293b] mb-2">Contact information</h3>
        <p className="mb-4">
          We may collect your name, email address, phone number, and mailing address when you submit forms,
          book appointments, request information, or otherwise provide it to us.
        </p>
        <h3 className="text-lg font-black text-[#1e293b] mb-2">Communications data</h3>
        <p className="mb-4">
          If you opt in, we collect your messaging preferences and maintain records of consent and opt-out
          activity related to SMS and email communications.
        </p>
        <h3 className="text-lg font-black text-[#1e293b] mb-2">Usage and device information</h3>
        <p className="mb-4">
          We may use cookies, pixels, and analytics tools to collect information about how you use our
          website. This may include your IP address, browser type, pages visited, and interaction data.
        </p>
        <h3 className="text-lg font-black text-[#1e293b] mb-2">Appointment and service data</h3>
        <p>
          If you schedule appointments or use our services, we may collect details associated with those
          interactions, including business and operational information you provide during onboarding and, if
          applicable, call recordings, transcriptions, and compliance analysis processed on your behalf as
          part of the Compliance Command System&trade;.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">3. How We Use Your Information</h2>
        <p className="mb-3">We use your information to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Provide requested services and customer support</li>
          <li>Send appointment confirmations and reminders</li>
          <li>Send SMS and email communications that you have explicitly consented to receive</li>
          <li>Improve our website and marketing performance using analytics</li>
          <li>Maintain compliance records related to consent and opt-outs</li>
          <li>Protect our business and users, including fraud and security monitoring</li>
          <li>Operate, improve, and deliver the Compliance Command System&trade; and related compliance services</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">4. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar technologies to personalize your experience and understand how our
          website is used. You can control cookies through your browser settings. Some features may not work
          correctly if cookies are disabled.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">5. How We Share Your Information</h2>
        <p className="mb-3">
          We do not sell your personal information. We do not share mobile phone numbers, SMS opt-in data, or
          consent information with third parties or affiliates for marketing or promotional purposes. We may
          share information only in the following limited circumstances:
        </p>
        <h3 className="text-lg font-black text-[#1e293b] mb-2">Service providers</h3>
        <p className="mb-4">
          We may share information with trusted vendors who help us deliver services, such as SMS and email
          delivery, customer support tools, scheduling tools, and analytics providers. These providers may only
          use information to perform services on our behalf.
        </p>
        <h3 className="text-lg font-black text-[#1e293b] mb-2">Legal and safety</h3>
        <p className="mb-4">
          We may disclose information if required by law or to protect the rights, safety, and security of
          Medigard Compliance Systems, our users, or others.
        </p>
        <h3 className="text-lg font-black text-[#1e293b] mb-2">Business transfers</h3>
        <p className="mb-4">
          If Medigard Compliance Systems is involved in a merger, acquisition, or asset sale, information may
          be transferred as part of that transaction. Any successor will be required to honor this Privacy
          Policy.
        </p>
        <h3 className="text-lg font-black text-[#1e293b] mb-2">Third-party sharing</h3>
        <p>
          No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.
          Information sharing to subcontractors in support services, such as customer service, is permitted. All
          other use case categories exclude text messaging originator opt-in data and consent; this information
          will not be shared with any third parties.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">6. Your Choices</h2>
        <h3 className="text-lg font-black text-[#1e293b] mb-2">SMS opt-out</h3>
        <p className="mb-4">
          You can opt out of SMS messages at any time by replying <strong className="text-[#1e293b]">STOP</strong>{' '}
          to any message. After you send STOP, we will send a confirmation message and you will no longer receive
          SMS messages unless you opt back in. Message and data rates may apply. Reply{' '}
          <strong className="text-[#1e293b]">HELP</strong> for assistance.
        </p>
        <h3 className="text-lg font-black text-[#1e293b] mb-2">Email opt-out</h3>
        <p className="mb-4">
          You can unsubscribe from marketing emails by clicking the unsubscribe link in the email.
        </p>
        <h3 className="text-lg font-black text-[#1e293b] mb-2">Access and correction</h3>
        <p>
          You may contact us to request access to, correction of, or deletion of your personal information,
          subject to applicable law.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">7. Data Security</h2>
        <p>
          We use reasonable administrative, technical, and physical safeguards to protect your information. No
          method of transmission or storage is fully secure, so we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">8. Children&apos;s Privacy</h2>
        <p>
          Our services are not intended for children under 13 and we do not knowingly collect personal
          information from children.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">9. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The updated version will be posted with a new
          Last Updated date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">10. Contact Us</h2>
        <p className="mb-3">If you have questions about this Privacy Policy, contact:</p>
        <p>
          Medigard Compliance Systems LLC
          <br />
          Address: 21501 102nd Ave, Queens Village, NY 11429
          <br />
          Phone:{' '}
          <a href="tel:+19177038352" className="text-[#3b82f6] hover:underline">
            917-703-8352
          </a>
          <br />
          Email:{' '}
          <a href="mailto:support@medigard.io" className="text-[#3b82f6] hover:underline">
            support@medigard.io
          </a>
        </p>
      </section>
    </div>
  )
}
