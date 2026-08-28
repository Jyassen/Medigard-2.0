import BookingWidget from "../../components/BookingWidget";
import { BOOKING_URLS } from "../../constants/funnels";
import { C } from "../../compliance/constants";

const reviewItems = [
  "Map your current call monitoring and QA process",
  "Identify where evidence becomes difficult to retrieve",
  "Review SOA, PTC, transcript, and remediation handoffs",
  "Prioritize the highest-value visibility improvements",
  "Determine whether a Medigard deployment fits your environment",
];

export default function ComplianceBooking() {
  return (
    <main className="flex-1">
      <section className="px-6 pb-16 pt-14 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
            Compliance infrastructure review
          </p>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
            Find the gaps between agent activity and reviewable evidence.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-8 text-zinc-400">
            This working session maps your current oversight process, the
            records available to reviewers, and the places where manual work or
            missing context slows response.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-zinc-900">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
              What we will review
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
              Bring the process you use today.
            </h2>
            <div className="mt-9 border-t border-zinc-200">
              {reviewItems.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 border-b border-zinc-200 py-5"
                >
                  <span className="font-mono text-xs font-bold text-emerald-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-bold leading-6 text-zinc-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs font-medium leading-6 text-zinc-500">
              Medigard assists with monitoring and operational evidence. It does
              not provide legal advice or guarantee audit, carrier, enforcement,
              or regulatory outcomes.
            </p>
          </div>

          <BookingWidget
            src={BOOKING_URLS.compliance}
            title="Schedule a Medigard compliance infrastructure review"
            className="border border-zinc-200"
            thankYouTo={C.thanks}
          />
        </div>
      </section>
    </main>
  );
}
