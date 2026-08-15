const FAQS = [
  {
    question: "What does a digital marketing consultancy do?",
    answer: "Strathmark connects commercial strategy with the practical work needed to generate and convert demand. That can include positioning, branding, websites, SEO, Google Ads, Meta Ads, measurement, agency oversight and practical AI. The constraint decides the mix, not a pre-set channel package.",
  },
  {
    question: "Are you a consultant or a marketing agency?",
    answer: "The relationship is consultancy-led and implementation-capable. Senior diagnosis and commercial accountability stay close to the work. Strathmark can deliver directly, coordinate specialist partners or improve and oversee an existing agency or internal team.",
  },
  {
    question: "Do we need every service at once?",
    answer: "No. The aim is to find the highest-value constraint and fix it in the right order. A business may need only an SEO recovery, a better website, a paid-media reset or an independent agency review. Services are connected when that genuinely improves the outcome.",
  },
  {
    question: "Where does AI fit?",
    answer: "AI is a major service line, not the whole proposition. It can improve research, content operations, customer follow-up, knowledge access, reporting and repeated workflows when the data, controls and business case support it. Conventional marketing and process fixes still come first when they are the better answer.",
  },
  {
    question: "Can you work with our current agency or team?",
    answer: "Yes. Strathmark can audit the current setup, strengthen the brief, repair measurement, challenge strategy and provide senior oversight without automatically replacing the people already doing useful work.",
  },
  {
    question: "Can you guarantee leads, revenue or rankings?",
    answer: "No responsible consultancy can guarantee outcomes controlled by customers, competitors, markets or search platforms. Strathmark defines the baseline, controllable work, responsibilities and measurement so you can see what changed and whether the next investment is justified.",
  },
] as const;

export function FAQ() {
  return (
    <section className="bg-[#e9dfcf] py-20 text-ink md:py-28" id="faq">
      <div className="section-shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="section-kicker !text-[#74521f]">Before you enquire</p>
          <h2 className="mt-6 text-[clamp(2.6rem,4.8vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]">Straight answers to sensible questions.</h2>
          <p className="mt-6 text-base leading-8 text-slate-600">Clear boundaries reduce buyer risk and make the first conversation more useful.</p>
        </div>
        <div className="divide-y divide-ink/15 border-y border-ink/15 lg:col-span-8">
          {FAQS.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold marker:hidden md:text-2xl">
                {item.question}
                <span aria-hidden="true" className="text-3xl font-light text-[#74521f] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-3xl pb-2 pt-4 text-base leading-8 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
