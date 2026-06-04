import { Link } from 'react-router-dom'

export default function TermsAndConditionsContent({ privacyTo = '/privacy' }) {
  return (
    <div className="space-y-10 text-slate-600 font-medium leading-relaxed">
      <p className="text-[#1e293b] font-bold">
        Medigard Compliance Systems LLC DBA Medigard
      </p>

      <p>
        These Terms and Conditions govern your use of Medigard Compliance Systems services, including our
        website and our SMS and email communications programs. By using our services or opting into our
        communications, you <strong className="text-[#1e293b]">MUST</strong> be 18 years or older and agree
        to these Terms and our{' '}
        <Link to={privacyTo} className="text-[#3b82f6] hover:underline">
          Privacy Policy
        </Link>
        .
      </p>

      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">1. Program Description</h2>
        <p>
          Medigard Compliance Systems may send SMS and email messages to users who opt in. Messages may include
          promotional offers, service updates, appointment confirmations, and appointment reminders. Message
          frequency may vary.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">2. Consent to Receive Messages</h2>
        <p>
          By providing your phone number and opting in, you authorize Medigard Compliance Systems to send text
          messages to your mobile number. Consent is not a condition of purchase.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">3. Opt Out</h2>
        <p>
          You can cancel the SMS service at any time. Just text &quot;STOP&quot; to{' '}
          <a href="tel:+19177038352" className="text-[#3b82f6] hover:underline">
            (917) 703-8352
          </a>
          . After you send the SMS message &quot;STOP&quot; to us, we will send you an SMS message to confirm that you
          have been unsubscribed. After this, you will no longer receive SMS messages from us.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">4. Opt In Again</h2>
        <p>
          If you want to rejoin after opting out, you can opt in again using the same method you used to enroll
          originally.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">5. Help and Support</h2>
        <p>
          If you are experiencing issues with the messaging program you can reply with the keyword{' '}
          <strong className="text-[#1e293b]">HELP</strong> for more assistance, or you can get help directly at{' '}
          <a href="mailto:support@medigard.io" className="text-[#3b82f6] hover:underline">
            support@medigard.io
          </a>{' '}
          or{' '}
          <a href="tel:+19177038352" className="text-[#3b82f6] hover:underline">
            (917) 703-8352
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">6. Message Frequency and Rates</h2>
        <p>
          As always, message and data rates may apply for any messages sent to you from us and to us from you.
          You will receive up to 4 messages. If you have any questions about your text plan or data plan, it is
          best to contact your wireless provider.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">7. Carrier Disclaimer</h2>
        <p>Carriers are not liable for delayed or undelivered messages.</p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">8. Privacy</h2>
        <p>
          Your use of the messaging program is also governed by our Privacy Policy. You can view it here:{' '}
          <Link to={privacyTo} className="text-[#3b82f6] hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">9. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Updates will be posted with a new Last Updated date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#1e293b] mb-4">10. Contact</h2>
        <p className="mb-3">Questions about these Terms can be sent to:</p>
        <p className="mb-4">
          Medigard Compliance Systems LLC
          <br />
          Address: 215-01 102nd Ave
          <br />
          Phone:{' '}
          <a href="tel:+19177038352" className="text-[#3b82f6] hover:underline">
            (917) 703-8352
          </a>
          <br />
          Email:{' '}
          <a href="mailto:support@medigard.io" className="text-[#3b82f6] hover:underline">
            support@medigard.io
          </a>
        </p>
        <p>
          If you have any questions regarding privacy, please read our{' '}
          <Link to={privacyTo} className="text-[#3b82f6] hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </div>
  )
}
