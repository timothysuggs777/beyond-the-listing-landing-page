# Beyond the Listing Show Google Calendar Book a Call Update

## Date and Timestamp

2026-06-03 14:00

---

## Booking URL Used

`https://calendar.app.google/vitHwXi78gHDxFTC7`

---

## Files Changed

| File | Change |
|------|--------|
| `src/App.tsx` | Updated desktop header "Book a Call" to Google Calendar URL; updated testimonial-section "Book a Call" to Google Calendar URL with GA4 click event; removed TODO comment |
| `src/components/Header.tsx` | Updated mobile/nav "Book a Call" to Google Calendar URL |
| `src/sections/TestimonialContact.tsx` | Updated testimonial-col "Book a Call" to Google Calendar URL |

---

## Book a Call Links Updated

| Button | Location | Final Destination |
|--------|----------|-------------------|
| "Book a Call" | Desktop nav (App.tsx:104) | `https://calendar.app.google/vitHwXi78gHDxFTC7` — `target="_blank"` |
| "Book a Call" | Mobile/responsive nav (Header.tsx:27) | `https://calendar.app.google/vitHwXi78gHDxFTC7` — `target="_blank"` |
| "Book a Call" | Testimonial section (TestimonialContact.tsx:67) | `https://calendar.app.google/vitHwXi78gHDxFTC7` — `target="_blank"` |
| "Book a Call" | Testimonial/CTA section (App.tsx:374) | `https://calendar.app.google/vitHwXi78gHDxFTC7` — `target="_blank"`, GA4 click event |

All four links use `target="_blank" rel="noopener noreferrer"` and `aria-label="Book a call with Beyond the Listing Show using Google Calendar"`.

---

## Request Info Links Left Unchanged

| Button | Location | Destination |
|--------|----------|-------------|
| "Request Info" | Hero section | `#contact` — unchanged |
| "Request More Info" | Testimonial section (TestimonialContact.tsx:66) | `#contact` — unchanged |
| "Request More Info" | Contact form submit button | Form submit — unchanged |
| "Contact" nav link | Header nav | `#contact` — unchanged |

---

## Removed TODOs

Removed from `src/App.tsx`:
```
{/* TODO: Replace #top with the production booking URL when available. */}
```

---

## Analytics

The testimonial/CTA section "Book a Call" (App.tsx) fires a GA4 event on click using the globally loaded `gtag`:

```
event: 'book_a_call_click'
event_category: 'CTA'
event_label: 'testimonial_section'
```

No new dependencies installed. Uses the existing `window.gtag` loaded via the GA4 script tag in `index.html` (`G-FXFZL1QKNM`).

---

## Build Status

```
✓ 71 modules transformed
dist/index.html                   9.15 kB │ gzip:  2.26 kB
dist/assets/index-CtpsvPz8.css   17.40 kB │ gzip:  4.33 kB
dist/assets/index-BerYKKjj.js   424.49 kB │ gzip: 120.47 kB
✓ built in 4.47s
```

No errors. No warnings.

---

## QA Notes

| Check | Expected behavior | Status |
|-------|-------------------|--------|
| Desktop header "Book a Call" | Opens Google Calendar booking page in new tab | ✓ Updated |
| Mobile menu "Book a Call" | Opens Google Calendar booking page in new tab, closes menu | ✓ Updated |
| Testimonial section "Book a Call" (outline button) | Opens Google Calendar booking page in new tab | ✓ Updated |
| CTA section "Book a Call" (dark button) | Opens Google Calendar booking page in new tab, fires GA4 event | ✓ Updated |
| Hero "Request Info" | Scrolls to #contact section | ✓ Unchanged |
| Testimonial "Request More Info" | Scrolls to #contact section | ✓ Unchanged |
| Contact form submit | Submits to Supabase, shows success state | ✓ Unchanged |
