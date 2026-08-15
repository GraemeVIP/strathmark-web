import { Bot, ChartNoAxesCombined, Layers3, Workflow } from "lucide-react";

const SIGNALS = [
  {
    icon: Layers3,
    title: "Each channel is optimised in isolation.",
    copy: "SEO, paid media, creative and the website sit in separate plans, so useful learning is lost between suppliers and reports.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "More activity is not producing better enquiries.",
    copy: "Traffic, reach and platform conversions rise while lead quality, commercial attribution and the real cost of growth remain unclear.",
  },
  {
    icon: Workflow,
    title: "The offer and website weaken the acquisition work.",
    copy: "Advertising can find attention, but unclear positioning, weak proof or a difficult journey prevents that attention becoming demand.",
  },
  {
    icon: Bot,
    title: "AI has become another disconnected initiative.",
    copy: "Tools are introduced without connecting them to marketing, customer follow-up, measurement or the workflows where they could create value.",
  },
] as const;

export function Proof() {
  return (
    <section className="relative w-full overflow-hidden bg-ivory py-20 text-ink md:py-28" id="why-now">
      <div className="editorial-grid-dark absolute inset-0 opacity-45" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="section-kicker !text-[#74521f]">Why connected expertise matters</p>
            <h2 className="mt-6 max-w-4xl text-[clamp(2.7rem,5.2vw,4.95rem)] font-semibold leading-[0.99] tracking-[-0.035em]">
              Marketing usually underperforms at the joins.
            </h2>
          </div>
          <aside className="border-l-4 border-gold bg-white p-7 shadow-[0_20px_60px_rgba(11,22,36,0.08)] md:p-8 lg:col-span-5">
            <p className="text-xl font-medium leading-9 text-slate-700">
              Customers experience your brand, advertising, search visibility and website as one journey. The strategy should work the same way.
            </p>
          </aside>
        </div>

        <div className="mt-12 grid gap-px border border-ink/15 bg-ink/15 md:grid-cols-2">
          {SIGNALS.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <article key={signal.title} className="group bg-white p-7 transition-colors hover:bg-[#fbf8f1] md:p-9">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center bg-strath-navy text-gold">
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <span className="font-mono text-[15px] font-semibold text-[#74521f]">0{index + 1}</span>
                </div>
                <h3 className="mt-7 max-w-xl text-[clamp(1.65rem,2.2vw,2.15rem)] font-semibold leading-[1.15]">{signal.title}</h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">{signal.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
