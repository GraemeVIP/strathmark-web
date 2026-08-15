import Link from "next/link";
import { ArrowRight, Bot, Check, ShieldCheck, Workflow } from "lucide-react";

const AI_ROUTES = [
  {
    href: "/ai-consulting-services",
    title: "AI consulting and implementation",
    copy: "Find the valuable use cases, prove one controlled workflow and build adoption around a measurable business result.",
    icon: Bot,
  },
  {
    href: "/workflow-automation",
    title: "Workflow automation",
    copy: "Remove repeated admin, hand-off delays and fragmented information with a better process and the right level of automation.",
    icon: Workflow,
  },
  {
    href: "/ai-strategy-consulting",
    title: "AI strategy and oversight",
    copy: "Prioritise investment, set human authority and data boundaries, and challenge vendors before a larger commitment is made.",
    icon: ShieldCheck,
  },
] as const;

export function AIAdvantage() {
  return (
    <section className="relative overflow-hidden bg-[#dce8e5] py-20 text-ink md:py-28" id="ai-and-automation">
      <div className="editorial-grid-dark absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="grid gap-9 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="section-kicker !text-[#315f63]">AI and automation</p>
            <h2 className="mt-6 max-w-5xl text-[clamp(2.7rem,5vw,4.9rem)] font-semibold leading-[1.01] tracking-[-0.035em]">
              Bring AI into the business where it can improve real work.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-lg leading-8 text-slate-700">
              AI features heavily at Strathmark because it can improve both marketing and operations. It remains one capability inside a wider commercial plan, not a reason to force technology into every problem.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {AI_ROUTES.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="group flex">
                <article className="flex w-full flex-col border border-ink/15 bg-white p-7 shadow-[0_20px_65px_rgba(11,22,36,0.07)] transition-transform group-hover:-translate-y-1 md:p-9">
                  <span className="grid h-12 w-12 place-items-center bg-strath-navy text-gold">
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <h3 className="mt-7 text-3xl font-semibold leading-tight">{item.title}</h3>
                  <p className="mt-5 text-base leading-8 text-slate-600">{item.copy}</p>
                  <span className="mt-auto inline-flex min-h-11 items-center gap-2 pt-7 text-[15px] font-bold uppercase tracking-[0.1em] text-[#315f63]">
                    Explore the service
                    <ArrowRight aria-hidden="true" size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </article>
              </Link>
            );
          })}
        </div>

        <div className="mt-5 flex flex-col gap-5 border border-ink/15 bg-strath-navy p-7 text-white md:flex-row md:items-center md:justify-between md:p-9">
          <p className="max-w-4xl text-lg leading-8 text-slate-200">
            <Check aria-hidden="true" size={18} className="mr-3 inline text-gold" />
            Human review, ownership, data boundaries and a deploy, revise or stop decision are designed into the work before scale.
          </p>
          <Link href="/ai-consulting-services" className="inline-flex min-h-12 shrink-0 items-center gap-3 text-[15px] font-bold uppercase tracking-[0.1em] text-gold transition-colors hover:text-white">
            See the AI approach <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
