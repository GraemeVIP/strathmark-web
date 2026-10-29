import { Check, X } from "lucide-react";

const VANITY = ["Website visitors", "Impressions", "Clicks", "Rankings", "Engagement"] as const;
const MONEY = ["Revenue from your marketing", "What each new customer costs you", "Return on every pound spent", "Profit after marketing costs"] as const;
const QUESTIONS = [
  ["What's a customer worth?", "Average sale value and how often they come back."],
  ["What's your margin?", "So we know what you can afford to pay for a sale."],
  ["How many enquiries become sales?", "So a lead is valued at what it actually brings in."],
] as const;

export function RevenueFocus({ compact = false }: { compact?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28" id="revenue">
      <div className="road-lines-dark absolute inset-0" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow eyebrow-dark">How I judge success</p>
            <h2 className="section-title mt-5 text-white">Nobody ever paid a bill with traffic.</h2>
            <p className="mt-6 text-lg leading-8 text-white/75">
              Most agencies send a monthly report full of visitors, clicks and rankings. It looks busy, and none of it pays your bills. I look at your money instead: what came in, what it cost to win, and whether the marketing is earning its keep. If it isn’t, you’ll hear it from me first.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-6 md:p-7">
              <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-white/50">What most agencies report</p>
              <ul className="mt-5 space-y-3">
                {VANITY.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg text-white/45">
                    <X aria-hidden="true" size={18} className="shrink-0" />
                    <span className="line-through decoration-white/30">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.25rem] bg-signal p-6 text-ink md:p-7">
              <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink/70">What I report</p>
              <ul className="mt-5 space-y-3">
                {MONEY.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg font-semibold leading-6">
                    <Check aria-hidden="true" size={19} strokeWidth={3} className="mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {compact ? null : (
          <div className="mt-14 border-t border-white/10 pt-10">
            <p className="max-w-2xl text-lg leading-8 text-white/80">
              That means I’ll ask to see your numbers before I spend a pound of your budget. Three questions decide everything:
            </p>
            <dl className="mt-7 grid gap-4 md:grid-cols-3">
              {QUESTIONS.map(([question, answer]) => (
                <div key={question} className="rounded-2xl border border-white/10 p-6">
                  <dt className="font-display text-xl font-bold text-white [font-stretch:106%]">{question}</dt>
                  <dd className="mt-2 text-base leading-7 text-white/65">{answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </section>
  );
}
