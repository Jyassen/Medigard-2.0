import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const systems = [
  {
    number: "01",
    label: "Install the order",
    name: "Medigard Growth",
    description:
      "The Growth Order fills current producer calendars, builds recruiting infrastructure in parallel, and activates signed agents through a 30-day working ramp.",
    action: "Explore Growth",
    to: ROUTES.launch,
    accent: "border-[#24b8a5] text-[#137f73]",
  },
  {
    number: "02",
    label: "Protect the scale",
    name: "Medigard Compliance",
    description:
      "Give established agencies and FMOs clearer oversight, documented workflows, and a more audit-ready operating posture—when scale cannot create a compliance problem.",
    action: "Explore Compliance",
    to: ROUTES.complianceV2,
    accent: "border-[#4f7d68] text-[#315d49]",
  },
];

export default function Hub() {
  return (
    <main className="flex-1 bg-[#f4f7f6] text-[#14251f]">
      <section className="border-b border-[#14251f]/10 px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="mb-6 font-mono text-xs font-bold uppercase tracking-[0.28em] text-[#137f73]">
              Agency Scale Infrastructure
            </p>
            <h1 className="max-w-5xl font-['Lexend'] text-5xl font-black leading-[0.98] tracking-[-0.05em] md:text-7xl">
              Turn growth inputs into usable capacity.
            </h1>
          </div>
          <div className="border-l-2 border-[#24b8a5] pl-6">
            <p className="text-lg font-medium leading-8 text-[#40564d]">
              Medicare agencies do not primarily have a lead problem, a
              recruiting problem, or a CRM problem. They have an
              order-of-operations problem. Medigard installs the systems that
              close that gap—without forcing every buyer into one generic pitch.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24" aria-labelledby="choose-system">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#5b7067]">
                Two focused systems
              </p>
              <h2
                id="choose-system"
                className="font-['Lexend'] text-3xl font-black tracking-tight md:text-5xl"
              >
                Start with the constraint you need to solve.
              </h2>
            </div>
            <p className="max-w-md text-sm font-medium leading-6 text-[#5b7067]">
              Each path has its own audience, operating model, and next step.
              The systems connect behind the scenes as your agency matures.
            </p>
          </div>

          <div className="divide-y divide-[#14251f]/12 border-y border-[#14251f]/12">
            {systems.map((system) => (
              <article
                key={system.name}
                className="grid gap-6 py-10 transition-colors hover:bg-white/60 md:grid-cols-[80px_0.75fr_1.25fr_auto] md:items-center md:px-6"
              >
                <span className="font-mono text-sm font-bold text-[#84948d]">
                  {system.number}
                </span>
                <div>
                  <p
                    className={`mb-2 border-l-2 pl-3 text-xs font-black uppercase tracking-[0.2em] ${system.accent}`}
                  >
                    {system.label}
                  </p>
                  <h3 className="font-['Lexend'] text-2xl font-black tracking-tight">
                    {system.name}
                  </h3>
                </div>
                <p className="max-w-2xl font-medium leading-7 text-[#4c6259]">
                  {system.description}
                </p>
                <Link
                  to={system.to}
                  className="inline-flex min-h-12 items-center justify-center border border-[#14251f] px-5 text-sm font-black transition-colors hover:bg-[#14251f] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#137f73]"
                >
                  {system.action}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
