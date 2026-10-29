const STEPS = [
  {
    step: "Step 1",
    title: "Free growth review",
    copy: "A 30 minute call about your numbers: what a customer is worth and what you can afford to pay for one. Then written notes on what's holding you back. You keep them either way.",
    time: "This week",
  },
  {
    step: "Step 2",
    title: "Build or fix",
    copy: "A new website, or the fixes your current one needs, for a fixed price agreed up front. Tracking goes in so every enquiry is counted.",
    time: "3 to 6 weeks",
  },
  {
    step: "Step 3",
    title: "Grow every month",
    copy: "SEO and Google Ads working together. Each month you see what came in, what it cost and what you made, plus a call with me.",
    time: "Ongoing",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="bg-paper py-20 md:py-28" id="how-it-works">
      <div className="section-shell">
        <p className="eyebrow">How it works</p>
        <h2 className="section-title mt-5 max-w-3xl">From first call to steady enquiries.</h2>

        <ol className="relative mt-12 grid gap-5 lg:grid-cols-3">
          <span aria-hidden="true" className="absolute left-0 right-0 top-[2.15rem] hidden h-[3px] bg-[repeating-linear-gradient(90deg,var(--color-ink)_0_18px,transparent_18px_30px)] opacity-20 lg:block" />
          {STEPS.map((item) => (
            <li key={item.title} className="relative flex flex-col rounded-[1.25rem] border border-line bg-white p-7 md:p-8">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-ink px-3.5 py-1.5 font-mono text-[13px] font-semibold text-white">{item.step}</span>
                <span className="font-mono text-[13px] text-ink-3">{item.time}</span>
              </div>
              <h3 className="mt-7 font-display text-2xl font-bold text-ink [font-stretch:108%]">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-ink-2">{item.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
