const STEPS = [
  {
    number: "01",
    verb: "Review",
    title: "Find the move that matters",
    copy: "Clarify the commercial goal, map the current workflow or customer journey, inspect the evidence and rank the opportunities.",
    decision: "What should change first, and why?",
  },
  {
    number: "02",
    verb: "Implement",
    title: "Ship one useful improvement",
    copy: "Build the smallest version that can improve the baseline, with scope, owners, access, measurement and human review agreed first.",
    decision: "Did the change improve the result?",
  },
  {
    number: "03",
    verb: "Optimise",
    title: "Scale what earns trust",
    copy: "Embed ownership, document the operating system and improve the workflow, website or acquisition engine from complete evidence.",
    decision: "What has earned the next investment?",
  },
] as const;

export function Approach() {
  return (
    <section className="relative w-full overflow-hidden bg-ivory py-20 text-ink md:py-28" id="approach">
      <div className="editorial-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="section-kicker !text-[#74521f]">How the work runs</p>
            <h2 className="mt-6 max-w-4xl text-[clamp(2.7rem,5vw,4.8rem)] font-semibold leading-[1.01] tracking-[-0.035em]">
              Review. Implement. Optimise.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-600 lg:col-span-4">
            Every phase produces a useful decision. No long programme is required before the first evidence exists.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 lg:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.number} className="flex flex-col border border-ink/15 bg-white p-7 md:p-9">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[15px] font-bold text-[#74521f]">{step.number}</span>
                <span className="font-mono text-[15px] font-bold uppercase tracking-[0.12em] text-[#74521f]">{step.verb}</span>
              </div>
              <div className="mt-8 h-1 w-14 bg-gold" />
              <h3 className="mt-7 text-3xl font-semibold leading-tight">{step.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">{step.copy}</p>
              <p className="mt-8 border-t border-ink/12 pt-5 text-base font-semibold text-ink">{step.decision}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
