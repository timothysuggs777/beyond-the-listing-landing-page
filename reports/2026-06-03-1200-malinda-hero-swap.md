# Malinda Hero Image Swap
**Date:** 2026-06-03

## Files Changed
- `src/index.css` — line 35 (`.hero-bg::after` background-image)

## Old Image Path
`/assets/hero-atmosphere.png` (local public asset)

## New Image Path
`https://cdn.jsdelivr.net/gh/timothysuggs777/beyond-the-listing-landing-page@main/assets/malinda-hero.png?v=1`

## Asset Source
CDN path confirmed present in GitHub repo before use. Local file not added to project — CDN URL used directly per user confirmation.

## Build Status
PASS — clean build, no errors.

## Hero Image Confirmation
`.hero-bg::after` in `src/index.css` now references the new CDN URL. Layout, overlay, blend-mode, opacity, and background-size/position rules are unchanged.

## Intentionally Unchanged Image References
| Image | File | Reason |
|---|---|---|
| `hero-episode-preview-virginia copy.png` | `App.tsx:3` / `App.tsx:149` | Episode preview card on the right side of the hero — not the hero background |
| `contact-section-malinda-warm-portrait.png` | `App.tsx:8` | Contact section portrait |
| `host-card-malinda-white-headshot.png?v=2` | `App.tsx:9` | Meet Your Host image |
| `beyond_the_listing_logo_design.png` | `App.tsx:6` | Logo |
