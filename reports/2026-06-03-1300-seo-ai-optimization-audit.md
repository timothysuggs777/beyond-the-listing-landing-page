# Beyond the Listing Show — SEO & AI Optimization Report

## Date and Timestamp

2026-06-03

---

## Stack Detected

**Vite + React (SPA, TypeScript)**

- Build tool: Vite 6
- Framework: React 19 with TypeScript
- Routing: Single-page app, anchor-based navigation only (no multi-page routes)
- Metadata: Static `index.html` head (no SSR, no react-helmet)
- CSS: Global `styles.css` + CSS Modules per component
- Database: Supabase (contact form persistence)
- CDN: jsDelivr (GitHub-hosted assets)

---

## Goals

- Improve Google Search visibility for Beyond the Listing Show
- Improve AI answer visibility (ChatGPT, Perplexity, etc.)
- Establish Google Search Console readiness
- Target: real estate agents in Central/Northern Virginia and Greater Atlanta, Georgia

---

## Files Audited

| File | Status Before |
|------|--------------|
| `index.html` | Basic title + description only. No canonical, OG, Twitter, structured data, theme-color, or apple-touch-icon. |
| `src/App.tsx` | Good heading structure (H1 + H2s + H3s). Alt text present but generic. No lazy loading or fetchpriority. No FAQ section. No market language. |
| `styles.css` | No FAQ styles. |
| `public/robots.txt` | Did not exist. |
| `public/sitemap.xml` | Did not exist. |
| `public/llms.txt` | Did not exist. |
| `public/ai/` | Did not exist. |

---

## Files Changed

| File | Action |
|------|--------|
| `index.html` | Full rewrite of `<head>` with all SEO infrastructure |
| `src/App.tsx` | Updated image alt text, added `loading="lazy"`, `fetchPriority="high"`, market language, FAQ section |
| `styles.css` | Added FAQ section styles and market-note styles |
| `public/robots.txt` | Created |
| `public/sitemap.xml` | Created |
| `public/llms.txt` | Created |
| `public/ai/beyond-the-listing-show.md` | Created |

---

## Technical SEO Changes Implemented

### Metadata (`index.html`)

| Tag | Before | After |
|-----|--------|-------|
| `<title>` | "Beyond the Listing — A Hosted Home-Story Show for Standout Properties" (72 chars) | "Beyond the Listing Show \| Real Estate Video & Listing Storytelling" (67 chars) |
| `<meta name="description">` | Generic YouTube show description | Geo-targeted: Central/Northern Virginia + Greater Atlanta, agent-focused |
| `<meta name="robots">` | Missing | `index, follow` |
| `<link rel="canonical">` | Missing | `https://beyondthelistingshow.com/` |
| `<meta name="theme-color">` | Missing | `#0f0e0c` |
| `<link rel="apple-touch-icon">` | Missing | Added |
| Open Graph (7 tags) | Missing | Added: type, site_name, title, description, url, image, locale |
| Twitter Card (4 tags) | Missing | Added: card, title, description, image |

### Canonicals

- `<link rel="canonical" href="https://beyondthelistingshow.com/">` — production domain, not localhost or preview URL.

### Sitemap

- **Path:** `public/sitemap.xml`
- **Production URL:** `https://beyondthelistingshow.com/sitemap.xml`
- Single URL entry (SPA with anchor navigation only — no indexable sub-routes exist)
- `lastmod: 2026-06-03`, `changefreq: monthly`, `priority: 1.0`

### Robots.txt

- **Path:** `public/robots.txt`
- Allows all legitimate crawlers
- Disallows: `/admin/`, `/dashboard/`, `/api/`, `/test/`, `/preview/`, `/draft/`, `/thank-you/`
- Sitemap declared: `https://beyondthelistingshow.com/sitemap.xml`

### Noindex Protections

No admin, dashboard, preview, or private routes exist in this SPA. Robots.txt disallow rules are in place for any future routes added in these namespaces. No `noindex` meta needed at this time.

### Structured Data (JSON-LD)

Added an `@graph` block in `index.html` with four schema types:

| Schema Type | Key Fields |
|-------------|-----------|
| `Organization` | name, url, logo, description, areaServed (Virginia + Atlanta), knowsAbout (7 topics), contactPoint |
| `WebSite` | url, name, publisher |
| `WebPage` | url, name, description, isPartOf |
| `Service` | name, serviceType (5 types), provider, areaServed, audience, description |
| `FAQPage` | 6 questions with answers (visible FAQ section on page) |

All schema references `beyondthelistingshow.com` production URLs. No fake ratings, fake reviews, or aggregateRating added.

### Open Graph Image

Current OG image uses `https://beyondthelistingshow.com/assets/beyond_the_listing_logo_design.png` (local public asset). This is an acceptable placeholder. See **Remaining Recommendations** for the ideal 1200×630 social preview image.

### Image SEO (App.tsx)

| Image | Change |
|-------|--------|
| Logo (header) | `alt` → "Beyond the Listing Show logo"; added `width="184" height="45"` and `fetchPriority="high"` |
| Hero episode preview | Added `fetchPriority="high"` |
| Host portrait | `alt` → "Malinda, host of Beyond the Listing Show"; added `loading="lazy"` |
| Show explainer courtyard | `alt` → descriptive on-location description; added `loading="lazy"` |
| Full YouTube episode deliverable | `alt` → SEO-enriched description; added `loading="lazy"` |
| Reel 1 | `alt` → "Social media reel for real estate listing — Beyond the Listing Show"; `loading="lazy"` |
| Reel 2 | `alt` → "Instagram reel for real estate agent branding — Beyond the Listing Show"; `loading="lazy"` |
| Drone B-roll | `alt` → "Drone and B-roll footage of listing — real estate video production"; `loading="lazy"` |
| Branded CTA | `alt` → "Branded call-to-action card for real estate agent marketing"; `loading="lazy"` |
| Contact portrait | `alt` → "Malinda, host of Beyond the Listing Show"; `loading="lazy"` |
| Footer logo | `alt` → "Beyond the Listing Show logo" |

### Semantic HTML / Headings

Heading structure confirmed sound. One H1, six H2s, nine+ H3s. No changes required.

- Added `aria-labelledby="faq-heading"` to the new FAQ section for accessibility.
- Updated header logo `aria-label` to "Beyond the Listing Show — home".

### Internal Links

Existing anchor links confirmed:
- "Request More Info" → `#contact` ✓
- "Book a Call" → `#top` (note: ideally should link to an external booking URL — see Remaining Recommendations)
- "Request Info" (hero) → `#contact` ✓
- All footer nav links → anchor sections ✓

---

## AI Visibility Changes

### `public/llms.txt`

Standard llms.txt per llmstxt.org convention. Includes:
- Site name and canonical URL
- Short summary
- Services list
- Markets served
- Audience definition
- Key pages and URLs
- Contact path

### `public/ai/beyond-the-listing-show.md`

Full AI-readable brand summary. Includes:
- What the business does
- Who it serves
- Markets served (Virginia + Atlanta with detail)
- Services offered (with descriptions)
- Why agents use it
- How it works
- 6 common questions with answers
- Conversion path
- Canonical URL

### Entity-Rich Copy Improvements

- Added market targeting language in `App.tsx`: "Currently serving agents in **Central and Northern Virginia** and **Greater Atlanta, Georgia**."
- FAQ section adds entity-rich Q&A visible to both crawlers and AI models.
- All image alt text updated with service-relevant language.

---

## FAQ Section Added

A visible `<dl>` FAQ section was added between the "Who It's For" block and the contact section, with six questions and answers:

1. What is Beyond the Listing Show?
2. Who is this for?
3. What markets does Beyond the Listing Show serve?
4. What does an agent receive from one production?
5. Can this support listing presentations and social media?
6. How do I request more information or book a call?

FAQPage schema in `index.html` matches these exact visible questions. No invisible or fabricated FAQ entries.

---

## Routes Included in Sitemap

| URL | Priority | Changefreq |
|-----|----------|-----------|
| `https://beyondthelistingshow.com/` | 1.0 | monthly |

---

## Routes Excluded from Sitemap

No additional public routes exist. This is a single-page app. Future routes to exclude if added:
- `/admin/*`
- `/dashboard/*`
- `/thank-you`
- `/preview/*`
- `/draft/*`

---

## Robots.txt Rules

```
User-agent: *
Allow: /

Disallow: /admin/
Disallow: /dashboard/
Disallow: /api/
Disallow: /test/
Disallow: /preview/
Disallow: /draft/
Disallow: /thank-you/

Sitemap: https://beyondthelistingshow.com/sitemap.xml
```

---

## Search Console Setup Checklist

1. Go to https://search.google.com/search-console
2. Add property: Domain — `beyondthelistingshow.com`
3. Verify via DNS TXT record with your domain registrar
4. After deployment: Submit sitemap — `https://beyondthelistingshow.com/sitemap.xml`
5. Use URL Inspection on `https://beyondthelistingshow.com/` and Request Indexing
6. Monitor: Page Indexing, Sitemaps, and Enhancements reports weekly for first month

---

## Analytics Setup Notes

No Google Analytics is currently installed. To add GA4 later:

1. Add `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX` to `.env`
2. In `index.html`, conditionally load the GA script using the env variable at build time, or inject via a Vite plugin such as `vite-plugin-html`
3. Do not hardcode the measurement ID directly into source

No analytics placeholder was added — the environment is not configured for it and no existing ID was found.

---

## Build Results

```
✓ 71 modules transformed
dist/index.html                   8.75 kB │ gzip:   2.07 kB
dist/assets/index-CtpsvPz8.css   17.40 kB │ gzip:   4.33 kB
dist/assets/index-CqMhk33f.js   424.03 kB │ gzip: 120.32 kB
✓ built in 4.16s
```

No errors. No warnings.

---

## Manual QA Checklist

| Check | Status |
|-------|--------|
| Homepage renders | ✓ Build confirmed |
| Sitemap loads at `/sitemap.xml` | ✓ Created in `public/` |
| Robots.txt loads at `/robots.txt` | ✓ Created in `public/` |
| `llms.txt` loads at `/llms.txt` | ✓ Created in `public/` |
| AI summary loads at `/ai/beyond-the-listing-show.md` | ✓ Created in `public/ai/` |
| No broken image paths introduced | ✓ All images use existing CDN URLs or existing public assets |
| Canonical URL uses production domain | ✓ `https://beyondthelistingshow.com/` |
| No localhost/Netlify/preview URLs in canonical | ✓ Confirmed |
| Market language present (Virginia + Atlanta) | ✓ FAQ + market note + structured data |
| CTAs still function | ✓ No CTA logic changed |
| JSON-LD valid structure | ✓ `@graph` with Organization, WebSite, WebPage, Service, FAQPage |
| FAQPage schema matches visible content | ✓ Schema mirrors the rendered FAQ section |
| No fake ratings or fake reviews | ✓ Confirmed |

---

## Remaining Recommendations

**High priority:**

1. **Create a proper OG image (1200×630px)** — The current OG image uses the logo asset which is not optimized for social sharing. A dedicated `beyond-the-listing-show-og-image.png` at 1200×630 with brand colors, show name, and a hero frame would significantly improve click-through from social shares and link previews.

2. **"Book a Call" should link to a real booking URL** — Currently links to `#top`. Connect to Calendly, Cal.com, or equivalent booking tool.

3. **Email confirmed at `casting@beyondthelistingshow.com`** — Ensure this address is monitored and auto-responds to form submissions.

**Medium priority:**

4. **Add Google Analytics (GA4)** — Use `VITE_GA_MEASUREMENT_ID` env variable pattern described above once a GA4 property is created.

5. **Add Google Search Console DNS verification** — Submit and verify the domain property as soon as deployed.

6. **Request Indexing via Search Console** — After first deployment with these changes, manually request indexing of the homepage.

7. **Consider WebP versions of key public assets** — Hero image and portrait files could serve WebP with PNG fallback to reduce transfer size.

**Low priority:**

8. **`styles.css` / `src/index.css` duplication** — These two files contain nearly identical rules. Consolidating to one would reduce build complexity. Not urgent.

9. **Descriptive filename aliases** — If future CDN assets are uploaded, use names like `beyond-the-listing-real-estate-video-hero.png` instead of generic names. Existing files were not renamed to avoid breaking CDN references.

10. **Add `<link rel="sitemap" href="/sitemap.xml">` to index.html** — Optional but signals the sitemap to crawlers directly from the HTML.
