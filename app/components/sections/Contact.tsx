"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { AlertCircle, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { clsx } from "clsx";
import { SITE_SECTION_NAVIGATION_EVENT } from "@/lib/site-navigation";

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.uk",
  "hotmail.com",
  "hotmail.co.uk",
  "outlook.com",
  "icloud.com",
  "aol.com",
  "live.com",
  "msn.com",
  "proton.me",
  "protonmail.com",
]);

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "7673741a-3e33-4912-96b3-bd1a31729185";
const WEB3FORMS_FROM_NAME = "Strathmark Consulting";

const SERVICE_OPTIONS = [
  { label: "Digital Growth Review", value: "digital-growth-review" },
  { label: "Digital Performance Review", value: "digital-performance" },
  { label: "Website Design and Development", value: "website-design" },
  { label: "Brand Strategy and Identity", value: "branding" },
  { label: "SEO and Content", value: "seo-content" },
  { label: "Google Ads Management", value: "google-ads" },
  { label: "Meta Ads Management", value: "meta-ads" },
  { label: "Paid Media Strategy", value: "paid-media" },
  { label: "Marketing Agency Audit", value: "agency-audit" },
  { label: "AI Consulting and Implementation", value: "ai-consulting" },
  { label: "AI Strategy Consulting", value: "ai-strategy" },
  { label: "Workflow Automation", value: "workflow-automation" },
  { label: "I am not sure yet", value: "unsure" },
] as const;

const SERVICE_VALUES = new Set<string>(SERVICE_OPTIONS.map((option) => option.value));

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function getEmailDomain(email: string) {
  return email.split("@").pop()?.toLowerCase().trim() ?? "";
}

function isFreeEmailDomain(email: string) {
  const domain = getEmailDomain(email);
  return domain.length > 0 && FREE_EMAIL_DOMAINS.has(domain);
}

function normalizeWebsiteInput(website: string) {
  const trimmed = website.trim();
  if (!trimmed) return "";
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function isValidWebsite(website: string) {
  if (!website.trim()) return true;
  try {
    const url = new URL(normalizeWebsiteInput(website));
    return ["http:", "https:"].includes(url.protocol) && url.hostname.includes(".");
  } catch {
    return false;
  }
}

const optionalString = z.string().trim().optional().or(z.literal(""));
const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Please enter a valid email address"),
  company: z.string().trim().min(2, "Please enter your company name"),
  message: z.string().trim().min(15, "Please share a little more detail"),
  serviceType: z.string().min(1, "Please choose the closest service"),
  website: z
    .string()
    .trim()
    .refine(isValidWebsite, "Please enter a valid website address")
    .transform(normalizeWebsiteInput),
  country: optionalString,
  companySize: optionalString,
  industry: optionalString,
  challenge: optionalString,
  timeline: optionalString,
  heardFrom: optionalString,
  honeypot: optionalString,
});

const identitySchema = contactSchema.pick({ name: true, email: true, company: true, message: true });

type ContactFormData = z.infer<typeof contactSchema>;
type ContactFormErrors = Partial<Record<keyof ContactFormData, string[]>>;
type SelectOption = { label: string; value: string };

export function Contact() {
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const firstStepHeadingRef = useRef<HTMLHeadingElement>(null);
  const secondStepHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const syncRequestedService = () => {
      const requestedService = new URLSearchParams(window.location.search).get("service");
      if (!requestedService || !SERVICE_VALUES.has(requestedService)) return;
      const select = formRef.current?.elements.namedItem("serviceType");
      if (select instanceof HTMLSelectElement) select.value = requestedService;
    };

    syncRequestedService();
    window.addEventListener(SITE_SECTION_NAVIGATION_EVENT, syncRequestedService);
    window.addEventListener("popstate", syncRequestedService);
    return () => {
      window.removeEventListener(SITE_SECTION_NAVIGATION_EVENT, syncRequestedService);
      window.removeEventListener("popstate", syncRequestedService);
    };
  }, []);

  const advanceToDetails = (form: HTMLFormElement) => {
    const data = Object.fromEntries(new FormData(form).entries());
    const result = identitySchema.safeParse(data);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors((current) => ({
        ...current,
        name: fieldErrors.name,
        email: fieldErrors.email,
        company: fieldErrors.company,
        message: fieldErrors.message,
      }));
      const firstInvalidName = result.error.issues[0]?.path[0];
      if (typeof firstInvalidName === "string") {
        form.querySelector<HTMLElement>(`[name="${firstInvalidName}"]`)?.focus();
      }
      return;
    }

    setErrors((current) => ({
      ...current,
      name: undefined,
      email: undefined,
      company: undefined,
      message: undefined,
    }));
    setStep(2);
    window.requestAnimationFrame(() => secondStepHeadingRef.current?.focus());
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (step === 1) {
      advanceToDetails(form);
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setSubmitError(null);

    const now = Date.now();
    let lastSubmittedAt = 0;
    try {
      lastSubmittedAt = Number(window.localStorage.getItem("strathmark_last_submit_ts") ?? "0");
    } catch {
      // Storage is best-effort; the form remains available when it is blocked.
    }
    if (lastSubmittedAt && now - lastSubmittedAt < 60_000) {
      setIsSubmitting(false);
      setSubmitError("Please wait 60 seconds before submitting another enquiry.");
      return;
    }

    const rawData = Object.fromEntries(new FormData(form).entries());
    if (rawData.honeypot) {
      setIsSuccess(true);
      setIsSubmitting(false);
      return;
    }

    const result = contactSchema.safeParse(rawData);
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      setIsSubmitting(false);
      const firstInvalidName = result.error.issues[0]?.path[0];
      if (typeof firstInvalidName === "string") {
        window.requestAnimationFrame(() => form.querySelector<HTMLElement>(`[name="${firstInvalidName}"]`)?.focus());
      }
      return;
    }

    const payload = {
      ...result.data,
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: WEB3FORMS_FROM_NAME,
      subject: `New enquiry from ${result.data.company}`,
      replyto: result.data.email,
      emailDomain: getEmailDomain(result.data.email),
      emailIsFreeDomain: isFreeEmailDomain(result.data.email),
      summary: [
        `Name: ${result.data.name}`,
        `Email: ${result.data.email}`,
        `Company: ${result.data.company}`,
        result.data.website ? `Website: ${result.data.website}` : null,
        result.data.country ? `Country: ${result.data.country}` : null,
        `Looking for: ${result.data.serviceType}`,
        result.data.companySize ? `Company size: ${result.data.companySize}` : null,
        result.data.industry ? `Industry: ${result.data.industry}` : null,
        result.data.challenge ? `Primary challenge: ${result.data.challenge}` : null,
        result.data.timeline ? `Timeline: ${result.data.timeline}` : null,
        result.data.heardFrom ? `Heard from: ${result.data.heardFrom}` : null,
        `Situation: ${result.data.message}`,
      ]
        .filter(Boolean)
        .join("\n"),
      source: "strathmarkconsulting.com",
      submittedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await response.json().catch(() => null);
      if (!response.ok || !body?.success) {
        throw new Error(body?.message || `Submission failed (${response.status})`);
      }

      try {
        window.localStorage.setItem("strathmark_last_submit_ts", String(Date.now()));
      } catch {
        // A successful enquiry remains successful when storage is unavailable.
      }

      try {
        window.gtag?.("event", "generate_lead", {
          form_id: "contact",
          serviceType: result.data.serviceType,
          companySize: result.data.companySize || "not-provided",
          industry: result.data.industry || "not-provided",
          challenge: result.data.challenge || "not-provided",
          timeline: result.data.timeline || "not-provided",
        });
      } catch {
        // Analytics must never block a successful enquiry.
      }

      setIsSuccess(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "The enquiry could not be submitted. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="w-full bg-ivory py-20 text-ink md:py-28" id="contact">
        <div className="section-shell">
          <div role="status" aria-live="polite" className="mx-auto flex max-w-3xl flex-col items-center border border-ink/15 bg-white p-8 text-center shadow-[0_30px_80px_rgba(11,22,36,0.1)] md:p-14">
            <span className="grid h-16 w-16 place-items-center bg-[#74521f]/10 text-[#74521f]">
              <CheckCircle2 aria-hidden="true" size={32} />
            </span>
            <h2 className="mt-7 text-4xl font-semibold">Your enquiry is in.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              I will review the situation personally and reply within two business days. If there is a useful fit, the next step will be a focused conversation. There is no obligation to proceed.
            </p>
            <button
              type="button"
              onClick={() => {
                formRef.current?.reset();
                setStep(1);
                setIsSuccess(false);
              }}
              className="mt-7 min-h-11 text-[15px] font-bold uppercase tracking-[0.1em] text-[#74521f] transition-colors hover:text-ink"
            >
              Submit another enquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full overflow-hidden bg-ivory py-20 text-ink md:py-28" id="contact">
      <div className="editorial-grid-dark absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="section-kicker !text-[#74521f]">Start with the real problem</p>
          <h2 className="mt-6 text-[clamp(2.7rem,5vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            Tell me what needs to work better.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-700">
            Share the last concrete example of weak enquiries, wasted spend, a difficult customer journey or repeated work. Every enquiry is reviewed personally.
          </p>

          <dl className="mt-9 border-t border-ink/15">
            {[
              ["01", "You share the situation"],
              ["02", "I assess the likely next move"],
              ["03", "You receive a direct reply within two business days"],
            ].map(([number, label]) => (
              <div key={number} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink/15 py-4">
                <dt className="font-mono text-[15px] font-semibold text-[#74521f]">{number}</dt>
                <dd className="text-base font-semibold leading-6">{label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-[15px] leading-7 text-slate-600">
            No sales trap. No obligation to buy a larger project. If another route is more sensible, I will say so.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          onKeyDown={(event) => {
            if (step !== 1 || event.key !== "Enter" || event.nativeEvent.isComposing || event.target instanceof HTMLTextAreaElement) return;
            event.preventDefault();
            advanceToDetails(event.currentTarget);
          }}
          noValidate
          className="border border-white/10 bg-strath-navy p-6 text-white shadow-[0_35px_90px_rgba(11,22,36,0.18)] md:p-10 lg:col-span-8"
        >
          <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="mb-8 flex items-center gap-3" aria-label={`Step ${step} of 2`}>
            {[1, 2].map((item) => (
              <span key={item} className={clsx("h-1 flex-1 transition-colors", item <= step ? "bg-gold" : "bg-white/10")} />
            ))}
          </div>

          <div hidden={step !== 1}>
            <h3 ref={firstStepHeadingRef} tabIndex={-1} className="text-3xl font-semibold text-white">The useful minimum</h3>
            <p className="mt-3 text-[15px] leading-7 text-slate-300">Four fields. Enough context for a relevant first response.</p>

            <div className="mt-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <InputField label="Your name" name="name" placeholder="Your name" autoComplete="name" error={errors.name} required />
                <InputField label="Email" name="email" type="email" placeholder="you@company.com" autoComplete="email" error={errors.email} required />
              </div>
              <InputField label="Company" name="company" placeholder="Company name" autoComplete="organization" error={errors.company} required />
              <TextAreaField
                label="What happened the last time this issue cost you enquiries, time or budget?"
                name="message"
                placeholder="A concrete example is more useful than a polished brief."
                error={errors.message}
                required
              />
            </div>

            <button type="button" onClick={() => formRef.current && advanceToDetails(formRef.current)} className="mt-8 inline-flex min-h-14 w-full items-center justify-center bg-gold px-7 text-[15px] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-white sm:w-auto">
              Add a little context
            </button>
          </div>

          <div hidden={step !== 2}>
            <h3 ref={secondStepHeadingRef} tabIndex={-1} className="text-3xl font-semibold text-white">Help me route it well</h3>
            <p className="mt-3 text-[15px] leading-7 text-slate-300">Only the service choice is required here. The remaining fields help make the response more useful.</p>

            <div className="mt-8 space-y-6">
              <SelectField label="Closest service" name="serviceType" options={[...SERVICE_OPTIONS]} defaultValue="digital-growth-review" error={errors.serviceType} required />
              <div className="grid gap-6 md:grid-cols-2">
                <SelectField
                  label="Company size (optional)"
                  name="companySize"
                  options={[
                    { label: "1–9 people", value: "1-9" },
                    { label: "10–49 people", value: "10-49" },
                    { label: "50–250 people", value: "50-250" },
                    { label: "251–500 people", value: "251-500" },
                    { label: "500+ people", value: "500-plus" },
                  ]}
                />
                <SelectField
                  label="Industry (optional)"
                  name="industry"
                  options={[
                    { label: "Professional services", value: "professional-services" },
                    { label: "Technology", value: "technology" },
                    { label: "Manufacturing or engineering", value: "manufacturing-engineering" },
                    { label: "E-commerce or retail", value: "ecommerce-retail" },
                    { label: "Hospitality or leisure", value: "hospitality-leisure" },
                    { label: "Health or aesthetics", value: "health-aesthetics" },
                    { label: "Property or construction", value: "property-construction" },
                    { label: "Finance or insurance", value: "finance-insurance" },
                    { label: "Public or third sector", value: "public-third-sector" },
                    { label: "Other", value: "other" },
                  ]}
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <SelectField
                  label="Primary constraint (optional)"
                  name="challenge"
                  options={[
                    { label: "Repeated work or slow workflow", value: "repeated-work" },
                    { label: "Knowledge trapped in people or files", value: "knowledge-reuse" },
                    { label: "Unclear AI opportunity or risk", value: "ai-opportunity" },
                    { label: "Website or conversion problem", value: "website-conversion" },
                    { label: "Positioning or brand problem", value: "positioning-brand" },
                    { label: "SEO or demand problem", value: "seo-demand" },
                    { label: "Google Ads, Meta Ads or agency accountability", value: "paid-agency" },
                    { label: "Not sure yet", value: "unsure" },
                  ]}
                />
                <SelectField
                  label="Timing (optional)"
                  name="timeline"
                  options={[
                    { label: "As soon as there is a sound route", value: "immediate" },
                    { label: "Within 1–3 months", value: "1-3-months" },
                    { label: "Within 3–6 months", value: "3-6-months" },
                    { label: "Exploring for later", value: "later" },
                  ]}
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <InputField label="Website (optional)" name="website" placeholder="company.co.uk" autoComplete="url" error={errors.website} />
                <InputField label="Country (optional)" name="country" placeholder="United Kingdom" autoComplete="country-name" error={errors.country} />
              </div>
              <InputField label="How did you hear about Strathmark? (optional)" name="heardFrom" placeholder="Search, referral, LinkedIn…" autoComplete="off" error={errors.heardFrom} />
            </div>

            {submitError ? (
              <p role="alert" className="mt-6 flex items-start gap-2 border border-red-300/30 bg-red-300/10 p-4 text-[15px] leading-6 text-red-200">
                <AlertCircle aria-hidden="true" className="mt-0.5 shrink-0" size={17} /> {submitError}
              </p>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button type="submit" disabled={isSubmitting} className="inline-flex min-h-14 items-center justify-center gap-3 bg-gold px-7 text-[15px] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-white disabled:cursor-wait disabled:opacity-70">
                {isSubmitting ? <><Loader2 aria-hidden="true" size={17} className="animate-spin" /> Sending enquiry</> : "Send the enquiry"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  window.requestAnimationFrame(() => firstStepHeadingRef.current?.focus());
                }}
                className="inline-flex min-h-14 items-center justify-center gap-2 px-5 text-[15px] font-semibold text-slate-300 transition-colors hover:text-white"
              >
                <ArrowLeft aria-hidden="true" size={16} /> Back
              </button>
            </div>
            <p className="mt-5 text-[15px] leading-7 text-slate-300">
              By submitting, you ask Strathmark to use these details to respond to your enquiry. See the <Link href="/privacy" className="font-semibold text-gold underline underline-offset-4 hover:text-white">privacy notice</Link>.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  error,
  required = false,
}: {
  label: string;
  name: keyof ContactFormData;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
  error?: string[];
  required?: boolean;
}) {
  const id = `contact-${name}`;
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-[15px] font-semibold text-gold">{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={clsx(
          "min-h-14 w-full border bg-white/[0.045] px-4 text-base text-white outline-none transition-colors placeholder:text-slate-400 focus:border-gold",
          error ? "border-red-400" : "border-white/20"
        )}
      />
      {error ? <FieldError id={`${id}-error`} message={error[0]} /> : null}
    </div>
  );
}

function TextAreaField({ label, name, placeholder, error, required = false }: { label: string; name: keyof ContactFormData; placeholder?: string; error?: string[]; required?: boolean }) {
  const id = `contact-${name}`;
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-[15px] font-semibold leading-6 text-gold">{label}</label>
      <textarea
        id={id}
        name={name}
        rows={5}
        placeholder={placeholder}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={clsx(
          "w-full resize-y border bg-white/[0.045] px-4 py-4 text-base leading-7 text-white outline-none transition-colors placeholder:text-slate-400 focus:border-gold",
          error ? "border-red-400" : "border-white/20"
        )}
      />
      {error ? <FieldError id={`${id}-error`} message={error[0]} /> : null}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  defaultValue = "",
  error,
  required = false,
}: {
  label: string;
  name: keyof ContactFormData;
  options: SelectOption[];
  defaultValue?: string;
  error?: string[];
  required?: boolean;
}) {
  const id = `contact-${name}`;
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-[15px] font-semibold text-gold">{label}</label>
      <select
        id={id}
        name={name}
        defaultValue={defaultValue}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={clsx(
          "min-h-14 w-full border bg-[#102237] px-4 text-base text-white outline-none transition-colors focus:border-gold",
          error ? "border-red-400" : "border-white/20"
        )}
      >
        {!defaultValue ? <option value="">Select if useful</option> : null}
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
      {error ? <FieldError id={`${id}-error`} message={error[0]} /> : null}
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <p id={id} className="flex items-center gap-2 text-[15px] leading-6 text-red-200">
      <AlertCircle aria-hidden="true" size={15} /> {message}
    </p>
  );
}
