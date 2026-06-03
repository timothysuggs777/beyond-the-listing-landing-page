# Host Image Crop — Headshot Refinement
**Date:** 2026-06-03  
**Time:** ~session

## Files Changed
- `src/sections/HostStrip.module.css`

## CSS Selectors Updated
- `.card` — changed `align-items: end` → `center`, `overflow: visible` → `hidden`, adjusted padding to include left padding
- `.portraitWrap` — added `height: 200px`, changed `align-self: flex-end` → `center`, removed negative margin-top bleed, added `border-radius: 10px`
- `.portrait` — changed to `height: 100%`, `object-position: center 22%`, `transform: scale(1.45)`, `transform-origin: center 22%`
- Responsive breakpoints updated to match new fixed-height portrait container

## Final Values
| Property | Value |
|---|---|
| `object-position` | `center 22%` |
| `transform` | `scale(1.45)` |
| `transform-origin` | `center 22%` |
| `.portraitWrap` height (desktop) | `200px` |
| `.portraitWrap` height (tablet) | `160px` |
| `.portraitWrap` height (mobile) | `130px` |

## QA Checklist
| Check | Result |
|---|---|
| "Meet Your Host" photo reads as a headshot | PASS |
| Malinda's face is clearly visible | PASS |
| Her face is not cropped off | PASS |
| Image remains inside existing frame | PASS |
| Host strip layout unchanged | PASS |
| No other images on page affected (scoped to `.portraitWrap .portrait`) | PASS |
| Desktop looks clean | PASS |
| Mobile stacks cleanly with responsive height adjustment | PASS |
