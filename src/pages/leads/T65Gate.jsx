import { Link } from "react-router-dom";
import { CRM_SOURCES, T65_APP_URL, withSource } from "../../constants/funnels";
import { ROUTES } from "../../constants/routes";

export default function T65Gate({ destination = T65_APP_URL }) {
  const handoffUrl = withSource(destination, CRM_SOURCES.t65);

  return (
    <main className="flex flex-1 items-center bg-[#f7f3e9] px-6 py-20 text-[#26372f]">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <section>
          <p className="mb-6 font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#a86512]">
            Turning 65 Medicare guidance
          </p>
          <h1 className="font-['Lexend'] text-5xl font-black leading-[0.98] tracking-[-0.05em] md:text-7xl">
            Clear next steps for your Medicare transition.
          </h1>
          <p className="mt-8 max-w-3xl text-lg font-medium leading-8 text-[#5f6f67]">
            The T-65 experience is a separate, education-led system designed to
            help consumers understand timing, prepare questions, and connect
            with appropriate local licensed support.
          </p>
        </section>

        <aside className="border-t-2 border-[#e8a23a] pt-7">
          {handoffUrl ? (
            <>
              <p className="mb-6 text-sm font-medium leading-6 text-[#5f6f67]">
                Continue to the dedicated T-65 guidance experience. You will
                leave this Medigard overview site.
              </p>
              <a
                href={handoffUrl}
                className="inline-flex min-h-14 w-full items-center justify-center bg-[#a86512] px-6 text-sm font-black text-white transition-colors hover:bg-[#87500c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a86512]"
              >
                Continue to T-65 guidance
              </a>
            </>
          ) : (
            <>
              <p className="mb-6 text-sm font-medium leading-6 text-[#5f6f67]">
                The dedicated T-65 destination has not been connected to this
                deployment yet.
              </p>
              <Link
                to={ROUTES.contact}
                className="inline-flex min-h-14 w-full items-center justify-center border-2 border-[#26372f] px-6 text-sm font-black transition-colors hover:bg-[#26372f] hover:text-white"
              >
                Contact Medigard
              </Link>
            </>
          )}
        </aside>
      </div>
    </main>
  );
}
