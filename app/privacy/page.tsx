import type { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/sections/Footer";
import { CookieResetButton } from "@/app/components/ui/CookieResetButton";
import { SectionLink } from "@/app/components/ui/SectionLink";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy and Cookie Notice | Strathmark",
  description: "How Strathmark handles enquiry details, essential storage and website analytics, and the choices and rights you have over your information.",
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: true, follow: true },
};

const link = "font-semibold text-ink underline decoration-signal decoration-2 underline-offset-4 hover:text-signal-ink";
const heading = "font-display text-2xl font-bold text-ink [font-stretch:108%]";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />

      <article className="mx-auto w-full max-w-3xl px-5 pb-24 pt-32 md:px-8 md:pt-40">
        <header className="border-b border-line pb-10">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-5 font-display text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold leading-[1] [font-stretch:110%]">Privacy and cookie notice</h1>
          <p className="mt-5 text-lg leading-8 text-ink-2">
            What Strathmark Consulting receives through this website, why it&apos;s used, and the choices you have.
          </p>
          <p className="mt-3 text-sm text-ink-3">Last updated: 29 October 2026.</p>
        </header>

        <div className="mt-10 grid gap-12 text-base leading-8 text-ink-2">
          <section>
            <h2 className={heading}>Enquiry information</h2>
            <p className="mt-4">
              When you send the contact form, Strathmark receives the details you choose to give, such as your name, email, company, website, what you need help with and optional details like turnover. These are used to assess and reply to your enquiry, keep a record of the conversation and take steps you ask for before any contract.
            </p>
            <p className="mt-4">
              The form is processed by <a href="https://docs.web3forms.com/getting-started/faq" target="_blank" rel="noopener noreferrer" className={link}>Web3Forms</a>, which forwards submissions to Strathmark by email. Web3Forms says it does not store submissions, that its servers are in the United States, and that server logs with personal information may be kept for a short time and deleted periodically.
            </p>
            <p className="mt-4">
              Enquiry emails are kept only as long as needed to reply, manage the working relationship, meet legal or accounting duties, or resolve a dispute. Please don&apos;t send sensitive personal information through the form.
            </p>
          </section>

          <section>
            <h2 className={heading}>Essential storage</h2>
            <p className="mt-4">
              The site uses your browser&apos;s storage for essential jobs: remembering your cookie choice, stopping a form being sent twice by accident, and basic navigation. These don&apos;t need your consent.
            </p>
          </section>

          <section>
            <h2 className={heading}>Analytics</h2>
            <p className="mt-4">
              Google Analytics, Microsoft Clarity and Strathmark&apos;s own visitor analytics load only after you choose &ldquo;Allow analytics&rdquo;. Between them they may process page addresses, where you came from, device and browser details, IP address, approximate location, clicks and scrolling, and page speed. Names, email addresses and messages from the contact form are never sent to Google Analytics.
            </p>
            <p className="mt-4">
              This is used to understand which pages are useful and which marketing brings in enquiries, and to improve the site. If you choose &ldquo;Essential only&rdquo;, none of these analytics tools are loaded.
            </p>
            <div className="mt-6">
              <CookieResetButton />
            </div>
          </section>

          <section>
            <h2 className={heading}>Sharing and processing outside the UK</h2>
            <p className="mt-4">
              Information is shared only with the service providers needed to run the website, handle enquiries, provide analytics, host systems or meet a legal duty. Some of them process data outside the UK, under their own privacy and transfer safeguards.
            </p>
          </section>

          <section>
            <h2 className={heading}>Your choices and rights</h2>
            <p className="mt-4">
              You can choose essential storage only, show the cookie notice again at any time, and ask Strathmark to give you, correct or delete personal information about you. You can also object to or restrict some processing, and raise a concern with the UK Information Commissioner&apos;s Office.
            </p>
          </section>

          <section>
            <h2 className={heading}>Contact</h2>
            <p className="mt-4">
              To ask about privacy or use any of your rights, use the <SectionLink href="/?service=unsure#contact" className={link}>contact form</SectionLink> and say the message is about privacy.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}
