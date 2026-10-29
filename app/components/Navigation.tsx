"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { SectionLink } from "@/app/components/ui/SectionLink";
import { GROWTH_REVIEW_HREF } from "@/lib/offers";

const PAGE_LINKS = [
  { name: "Websites", href: "/website-design" },
  { name: "SEO", href: "/seo-services" },
  { name: "Google Ads", href: "/google-ads-management" },
  { name: "Automotive", href: "/automotive-seo" },
  { name: "Pricing", href: "/pricing" },
  { name: "Results", href: "/case-studies" },
  { name: "About", href: "/about" },
] as const;

const MOBILE_NAV_ID = "mobile-navigation";
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-[6px] bg-signal">
        <span className="h-3.5 w-3.5 rotate-45 rounded-[2px] border-[2.5px] border-ink" />
      </span>
      <span
        className={clsx(
          "font-display text-[1.35rem] font-extrabold uppercase leading-none tracking-[0.02em] [font-stretch:125%]",
          inverted ? "text-white" : "text-ink"
        )}
      >
        Strathmark
      </span>
    </span>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const updateNavigation = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > 16);
      });
    };

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateNavigation);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1280px)");
    const closeAtDesktop = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) setIsOpen(false);
    };

    closeAtDesktop(desktopQuery);
    desktopQuery.addEventListener("change", closeAtDesktop);
    return () => desktopQuery.removeEventListener("change", closeAtDesktop);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";

    const panel = menuPanelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      if (menuButton?.offsetParent !== null) menuButton?.focus();
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[90] -translate-y-24 rounded-md bg-ink px-4 py-3 text-[15px] font-bold text-white shadow-xl transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>

      <nav
        aria-label="Primary navigation"
        className={clsx(
          "fixed inset-x-0 top-0 z-[70] border-b transition-[background-color,border-color,padding,box-shadow] duration-300 supports-[backdrop-filter]:backdrop-blur-xl",
          scrolled || isOpen
            ? "border-line bg-paper/92 py-2.5 shadow-[0_10px_30px_rgba(13,19,33,0.06)]"
            : "border-transparent bg-paper/70 py-4"
        )}
      >
        <div className="section-shell flex min-h-12 items-center justify-between gap-6">
          <Link href="/" aria-label="Strathmark home" className="inline-flex min-h-11 items-center" onClick={closeMenu}>
            <Wordmark />
          </Link>

          <div className="hidden items-center gap-0.5 xl:flex">
            {PAGE_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="inline-flex min-h-11 items-center rounded-full px-3.5 text-[15px] font-semibold text-ink-2 transition-colors hover:bg-mist hover:text-ink"
              >
                {link.name}
              </Link>
            ))}
            <SectionLink
              href={GROWTH_REVIEW_HREF}
              className="ml-3 inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-[15px] font-bold text-white transition-colors hover:bg-signal hover:text-ink"
            >
              Free growth review
              <ArrowRight aria-hidden="true" size={16} />
            </SectionLink>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition-colors hover:border-ink xl:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls={MOBILE_NAV_ID}
          >
            {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div
          ref={menuPanelRef}
          id={MOBILE_NAV_ID}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-x-0 bottom-0 top-[4.25rem] z-[75] overflow-y-auto border-t border-line bg-paper px-5 py-6 xl:hidden"
        >
          <div className="mx-auto flex min-h-full max-w-2xl flex-col">
            <div className="flex flex-col">
              {PAGE_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex min-h-16 items-center justify-between border-b border-line py-4 font-display text-2xl font-bold text-ink [font-stretch:110%]"
                >
                  <span>{link.name}</span>
                  <ArrowRight aria-hidden="true" className="text-signal-ink" size={20} strokeWidth={2} />
                </Link>
              ))}
            </div>
            <div className="mt-auto pt-8">
              <SectionLink
                href={GROWTH_REVIEW_HREF}
                onNavigate={closeMenu}
                className="flex min-h-14 w-full items-center justify-center rounded-full bg-signal px-6 text-base font-bold text-ink"
              >
                Book a free growth review
              </SectionLink>
            </div>
          </div>
        </div>
      ) : null}

      <span id="main-content" tabIndex={-1} className="sr-only">
        Main content
      </span>
    </>
  );
}
