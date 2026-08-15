import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SectionLink } from "@/app/components/ui/SectionLink";

export function ContactSuccessClient() {
  return (
    <main className="min-h-screen bg-strath-navy text-slate-200 flex items-center justify-center px-6">
      <section className="w-full max-w-3xl border border-gold/30 bg-white/5 p-10 md:p-14 text-center backdrop-blur-sm">
        <div className="flex flex-col items-center gap-6">
          <CheckCircle2 className="w-16 h-16 text-gold" />
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">
              Your brief is in hand.
            </h1>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gold">Application Received</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Your enquiry has been received. I review each brief personally and respond within two business days with the most useful next step.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-gold px-6 py-3 text-strath-navy font-semibold hover:bg-white transition-colors"
            >
              Return Home
            </Link>
            <SectionLink
              href="/?service=digital-growth-review#contact"
              className="inline-flex items-center justify-center border border-white/15 px-6 py-3 text-white hover:border-gold hover:text-gold transition-colors"
            >
              Submit Another Brief
            </SectionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
