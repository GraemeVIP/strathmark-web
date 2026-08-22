import type { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/sections/Footer";
import { CookieResetButton } from "@/app/components/ui/CookieResetButton";
import { SectionLink } from "@/app/components/ui/SectionLink";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy and Cookie Notice | Strathmark",
  description: "How Strathmark Consulting handles enquiry data, essential storage and optional website analytics.",
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-strath-navy text-slate-200">
      <Navigation />

      <article className="mx-auto w-full max-w-3xl flex-1 px-6 py-32 md:py-40">
        <header className="mb-10 border-b border-white/10 pb-10">
          <p className="font-mono text-[15px] font-semibold uppercase tracking-[0.1em] text-gold">Legal</p>
          <h1 className="mt-5 text-4xl font-bold text-white md:text-6xl">Privacy and Cookie Notice</h1>
          <p className="mt-5 text-base leading-8 text-slate-300">
            This notice explains what information Strathmark Consulting receives through this website, why it is used and the choices available to you.
          </p>
          <p className="mt-4 text-[15px] text-slate-300">Last updated: 14 August 2026.</p>
        </header>

        <div className="space-y-10 text-base leading-8 text-slate-300">
          <section>
            <h2 className="text-3xl font-bold text-white">Enquiry information</h2>
            <p className="mt-4">
              When you submit the contact form, Strathmark receives the details you choose to provide, such as your name, email, company, website, business situation and optional qualification information. This is used to assess and respond to your enquiry, keep a record of the conversation and take reasonable steps requested before entering a contract.
            </p>
            <p className="mt-4">
              The form is processed by <a href="https://docs.web3forms.com/getting-started/faq" target="_blank" rel="noopener noreferrer" className="font-semibold text-gold underline underline-offset-4 hover:text-white">Web3Forms</a>, which forwards submissions to Strathmark by email. Web3Forms states that it does not store form submissions, that its servers are in the United States, and that server logs containing personal information may be retained temporarily and deleted periodically.
            </p>
            <p className="mt-4">
              Strathmark keeps enquiry correspondence only for as long as reasonably needed to respond, manage the business relationship, meet legal or accounting obligations, or resolve a dispute. Please do not submit special-category or highly sensitive personal information through the form.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white">Essential storage</h2>
            <p className="mt-4">
              The site uses local or session storage for essential functions, including remembering your cookie choice, maintaining a short anti-repeat window after a form submission and supporting basic navigation behaviour. These functions do not require analytics consent.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white">Optional analytics</h2>
            <p className="mt-4">
              Google Analytics loads with analytics storage denied unless you choose “Allow analytics”; advertising storage remains denied. Before consent it does not read or write analytics cookies, although Google may receive limited cookieless measurements. Microsoft Clarity and Strathmark&apos;s first-party visitor analytics collect data only after you allow analytics. These services may process page paths, referral and campaign information, device and browser details, IP address, approximate location derived from network information, interaction events and performance data. Contact-form names, email addresses and message content are not sent in the lead event recorded by Google Analytics.
            </p>
            <p className="mt-4">
              This information is used to understand which pages and journeys are useful, diagnose performance and improve the website. If you choose “Essential only”, Google Analytics remains in consent-denied mode and the other analytics tools do not collect data.
            </p>
            <div className="mt-5">
              <CookieResetButton />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white">Sharing and international processing</h2>
            <p className="mt-4">
              Information is shared only with service providers needed to operate the website, process enquiries, deliver analytics where consented, host systems or meet a legal obligation. Some providers process data outside the United Kingdom. Their own privacy and transfer safeguards apply to that processing.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white">Your choices and rights</h2>
            <p className="mt-4">
              You can choose essential-only storage, reset the cookie notice at any time, and ask Strathmark to provide, correct or delete personal information where applicable. You may also object to or restrict certain processing and raise a concern with the UK Information Commissioner&apos;s Office.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white">Contact</h2>
            <p className="mt-4">
              To ask about privacy or exercise a data right, use the <SectionLink href="/?service=unsure#contact" className="font-semibold text-gold underline underline-offset-4 hover:text-white">contact form</SectionLink> and state that the message concerns privacy. Please do not include more personal information than needed.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}
