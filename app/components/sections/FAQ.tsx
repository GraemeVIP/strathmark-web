import { Plus } from "lucide-react";

export const HOME_FAQS = [
  {
    question: "How much does a website cost?",
    answer: "Most of the sites I build for small and medium businesses cost between £3,500 and £8,000. The price depends on the number of pages, whether you need things like bookings or a shop, and how much writing is involved. You get a fixed quote before anything starts.",
  },
  {
    question: "Do I have to sign up for a long contract?",
    answer: "No. Monthly SEO and Google Ads plans have a three month minimum, because that's how long it takes to see whether the work is paying off. After that it's 30 days notice.",
  },
  {
    question: "Who owns the website and the accounts?",
    answer: "You do. The website, the domain, Google Ads, Analytics and Search Console are all set up in your name. If we ever stop working together, you keep everything.",
  },
  {
    question: "How quickly will I see results?",
    answer: "Google Ads can bring enquiries in the first week or two. SEO is slower: expect three to six months before it's a steady source of leads, faster for local searches. I'll tell you honestly what's realistic for your market before you spend anything.",
  },
  {
    question: "Can you guarantee first place on Google?",
    answer: "No, and be careful with anyone who does. Nobody controls Google. What I can promise is honest work, clear tracking of every enquiry and a straight answer each month on whether it's paying off.",
  },
  {
    question: "Do you work outside Edinburgh?",
    answer: "Yes. I'm based in Edinburgh and work with businesses across Scotland and the UK. Car leasing and automotive clients are all over the country.",
  },
] as const;

export function FAQ({ faqs = HOME_FAQS }: { faqs?: readonly { question: string; answer: string }[] }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="bg-paper py-20 md:py-28" id="faq">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="section-shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="eyebrow">Questions</p>
          <h2 className="section-title mt-5">Straight answers.</h2>
          <p className="mt-5 text-base leading-7 text-ink-2">The things people ask before they get in touch.</p>
        </div>
        <div className="grid gap-3 lg:col-span-8">
          {faqs.map((item) => (
            <details key={item.question} className="group rounded-2xl border border-line bg-white px-6 open:shadow-[0_16px_40px_rgba(13,19,33,0.06)]">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-bold text-ink marker:hidden">
                {item.question}
                <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mist text-ink transition-transform group-open:rotate-45 group-open:bg-signal">
                  <Plus size={18} strokeWidth={2.5} />
                </span>
              </summary>
              <p className="max-w-3xl pb-6 text-base leading-7 text-ink-2">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
