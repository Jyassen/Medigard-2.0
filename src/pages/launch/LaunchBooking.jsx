import BookingWidget from "../../components/BookingWidget";
import {
  BOOKING_URLS,
  canEmbedBooking,
  CRM_SOURCES,
  withSource,
} from "../../constants/funnels";
import { Link } from "react-router-dom";
import { G } from "../../growth/constants";

const reviewItems = [
  "Where current producers lack usable conversations—and what the capture-to-booking rail should look like",
  "Whether recruiting is a pipeline or a spreadsheet—and how it should run in parallel",
  "Where ownership, follow-up, and booking still sit on you",
  "Where signed agents stall before Day 30 working capacity",
  "Whether Medigard should install the Growth Order for your agency",
];

export default function LaunchBooking() {
  const bookingSrc = withSource(BOOKING_URLS.growth, CRM_SOURCES.growthBook);
  const embedsCalendar = canEmbedBooking(BOOKING_URLS.growth);

  return (
    <main className="flex-1 px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
        <section>
          <p className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-[#137f73]">
            Agency Scale Infrastructure
          </p>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-[#1e293b] md:text-5xl">
            We will show you where recruiting stops becoming capacity.
          </h1>
          <p className="mt-7 text-lg font-medium leading-8 text-slate-600">
            Bring one idle producer calendar and one recruit who signed but
            never launched. We will map the Forced Choice Trap in your
            operation—and whether the Growth Order should be installed.
          </p>
          <div className="mt-10 border-t border-slate-200">
            {reviewItems.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 border-b border-slate-200 py-5"
              >
                <span className="font-mono text-xs font-bold text-[#137f73]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-bold leading-6 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs font-medium leading-6 text-slate-500">
            This is an agency fit review. We do not promise revenue,
            enrollments, commissions, or what agents write.
          </p>
          <p className="mt-4 text-sm font-medium text-slate-500">
            Prefer email first?{" "}
            <Link to={G.contact} className="font-bold text-[#137f73] underline">
              Contact our Growth team
            </Link>
            .
          </p>
        </section>

        <section
          aria-label="Schedule your agency growth review"
          className="flex min-h-[560px] items-center justify-center rounded-[2.5rem] border border-slate-100 bg-slate-50 p-8"
        >
          {embedsCalendar ? (
            <BookingWidget
              src={bookingSrc}
              title="Schedule a Medigard Growth agency review"
              className="w-full"
              thankYouTo={G.thanks}
            />
          ) : (
            <div className="max-w-lg text-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#137f73]">
                Secure calendar
              </p>
              <h2 className="text-3xl font-black tracking-tight text-[#1e293b]">
                Choose a time for us to review your agency.
              </h2>
              <p className="mt-5 text-sm font-medium leading-7 text-slate-600">
                The calendar opens in a new tab when the booking provider does
                not allow secure in-page embedding.
              </p>
              <a
                href={bookingSrc}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex min-h-14 items-center justify-center rounded-xl bg-[#137f73] px-7 text-sm font-black text-white transition-colors hover:bg-[#0f665d]"
              >
                Open agency review calendar
              </a>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
