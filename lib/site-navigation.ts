export const HOME_PATHNAME = "/";
export const SITE_SECTION_NAVIGATION_EVENT = "strathmark:navigate-section";

const HOME_SECTION_IDS = [
  "about",
  "services",
  "why-now",
  "approach",
  "outcomes",
  "insights",
  "faq",
  "contact",
] as const;

const HOME_SECTION_ID_SET = new Set<string>(HOME_SECTION_IDS);
const LEGACY_HOME_SECTION_MAP: Record<string, (typeof HOME_SECTION_IDS)[number]> = {
  "use-cases": "services",
  governance: "approach",
  briefing: "services",
  "digital-performance": "services",
};

export function getHomeSectionHash(href: string) {
  const normalizedHref = href.trim();

  if (!normalizedHref) return null;

  let hash: string | null = null;

  if (normalizedHref.startsWith("#")) {
    hash = normalizedHref;
  } else if (normalizedHref.startsWith("/")) {
    try {
      const target = new URL(normalizedHref, "https://strathmark.local");
      if (target.pathname === HOME_PATHNAME) hash = target.hash || null;
    } catch {
      return null;
    }
  }

  if (!hash) return null;

  const id = decodeURIComponent(hash.slice(1));
  if (HOME_SECTION_ID_SET.has(id)) return hash;
  const replacement = LEGACY_HOME_SECTION_MAP[id];
  return replacement ? `#${replacement}` : null;
}

export function isHomeSectionHref(href: string) {
  return getHomeSectionHash(href) !== null;
}

export function getHomeSectionHref(href: string) {
  const hash = getHomeSectionHash(href);
  if (!hash) return href;

  try {
    const target = new URL(href, "https://strathmark.local");
    if (target.pathname === HOME_PATHNAME) {
      return `${HOME_PATHNAME}${target.search}${hash}`;
    }
  } catch {
    // Fall back to a plain home hash below.
  }

  return `/${hash}`;
}
