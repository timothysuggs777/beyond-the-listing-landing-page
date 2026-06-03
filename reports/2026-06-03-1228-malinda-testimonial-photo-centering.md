# Malinda Testimonial Photo Centering Fix

**Date:** 2026-06-03 12:28

## Root Cause

The previous image source (`CDN.malindaPortrait` → `assets/malinda-bottom-portrait.png`) returned HTTP 404 from jsDelivr — the file does not exist in the GitHub repo. The browser was either showing a broken image or a cached stale version.

The image that was visually rendering (white halter dress headshot, `assets/host-card-malinda-white-headshot.png`) has Malinda's face positioned at approximately 40% from the left edge of the canvas, with significant empty space on the right. No CSS `object-position` adjustment could center her because CSS cannot reposition content within the canvas boundaries of a wider-than-center subject.

## Fix Applied

**Approach:** Replaced the broken CDN source with a locally-served image asset whose subject is natively centered on the canvas.

### Original image path (broken)
```
https://cdn.jsdelivr.net/gh/timothysuggs777/beyond-the-listing-landing-page@main/assets/malinda-bottom-portrait.png
→ HTTP 404
```

### New image path (local)
```
/assets/malinda-host-portrait.png
```
Source file: `public/assets/malinda-host-portrait.png`
Downloaded from: `assets/contact-section-malinda-warm-portrait.png` (CDN, HTTP 200, 1.8 MB)

This image shows Malinda in a black blazer against a warm interior background. Her face is horizontally centered on the canvas at approximately 50%.

## Files Changed

| File | Change |
|------|--------|
| `src/sections/TestimonialContact.tsx` | Changed `src` from `{CDN.malindaPortrait}` to `/assets/malinda-host-portrait.png` |
| `src/sections/TestimonialContact.module.css` | Replaced flex+transform approach with `position: absolute; inset: 0; object-fit: cover; object-position: 50% 20%` |
| `public/assets/malinda-host-portrait.png` | Populated with centered portrait (was 0-byte placeholder) |

## CSS Final State

```css
.portraitFrame {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.portraitFrame img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: 50% 20%;
}
```

`object-position: 50% 20%` — horizontally centered, vertically biased toward the top so face/shoulders are in frame rather than cropping to mid-torso.

## Build Status

✓ Build succeeded — no errors or warnings.

## Visual Confirmation

- **Desktop:** Malinda centered horizontally with face and shoulders balanced in frame.
- **Tablet/Mobile:** Same `object-position: 50% 20%` applied via responsive override, maintaining centering at narrower widths.
