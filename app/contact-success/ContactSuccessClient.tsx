import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Navigation } from "@/app/components/Navigation";

export function ContactSuccessClient() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />
      <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden px-5 pb-20 pt-32">
        <div className="road-lines absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto w-full max-w-2xl rounded-[1.5rem] border border-line bg-white p-8 text-center shadow-[0_30px_70px_rgba(13,19,33,0.10)] md:p-12">
          <CheckCircle2 aria-hidden="true" className="mx-auto h-14 w-14 text-signal-ink" />
          <h1 className="mt-6 font-display text-[clamp(2rem,4vw,2.8rem)] font-extrabold leading-tight [font-stretch:108%]">Thanks, your enquiry is in.</h1>
          <p className="mt-4 text-lg leading-8 text-ink-2">
            I read every enquiry myself and will reply within two working days. If it helps, have your rough numbers to hand: what a customer is worth to you and what you spend on marketing now.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 font-bold text-white transition-colors hover:bg-signal hover:text-ink">
              Back to the homepage
            </Link>
            <Link href="/insights" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-ink px-6 font-bold text-ink transition-colors hover:bg-ink hover:text-white">
              Read the insights
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
