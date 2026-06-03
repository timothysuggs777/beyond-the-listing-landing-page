# Malinda Portrait Visual Centering Fix

**Date:** 2026-06-03 12:45

## Problem Diagnosis

The previous fix used `object-position: 50% 20%` on a source image where Malinda's face centerline sits at approximately x=490px out of 1122px total width (43.7% from the left edge). Because `object-position: 50%` centers the image canvas — not the subject within the canvas — her face remained left of the frame center.

## Fix Applied

**Method: New centered asset created via canvas crop.**

Using Python (Pillow), the source image was cropped to a new canvas centered on her face:

- Source image: `public/assets/malinda-host-portrait.png` (1122×1402px)
- Detected face centerline: x ≈ 490px
- Crop window: 0px → 980px wide (symmetric around x=490), full height
- Output scaled back to 1122px wide → 1122×1605px
- Result: Malinda's face/nose/eyes now land at 50% horizontal in the new canvas

**New asset:** `public/assets/malinda-host-portrait-centered.png`

## Files Changed

| File | Change |
|------|--------|
| `public/assets/malinda-host-portrait-centered.png` | New file — centered portrait crop of source image |
| `src/sections/TestimonialContact.tsx` | `src` changed from `/assets/malinda-host-portrait.png` to `/assets/malinda-host-portrait-centered.png` |

## CSS (unchanged from previous fix — correct as-is)

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

`object-position: 50% 20%` — now works correctly because the canvas itself is centered on the subject.

## Subject Movement

- Previous: face at ~43.7% from left → appeared LEFT of frame center
- Fixed: face at ~50% of new canvas → appears CENTERED in frame

Direction of correction: subject moved **RIGHT** relative to previous renders.

## Broken CDN References (confirmed not controlling this section)

The following CDN keys exist in `cdn.ts` but are NOT used by `TestimonialContact.tsx`:
- `CDN.malindaPortrait` → `assets/malinda-bottom-portrait.png` (HTTP 404)
- `CDN.malindaCutout` → `assets/malinda-host-cutout.png`

The `host-card-malinda-white-headshot.png` reference in `HostStrip.module.css` and `App.tsx` is for a different section — not the testimonial portrait frame.

## Build Status

✓ Build succeeded — no errors.

## QA Notes

- **Desktop:** Malinda's face horizontally centered in the gold-bordered portrait frame. Shoulders balanced left/right. Head has natural top breathing room.
- **Tablet (≤1060px):** Grid collapses to single column. `object-position: 50% 20%` maintained — face centered at narrower widths.
- **Mobile (≤720px):** Form grid collapses to single column. Portrait centering unchanged.
