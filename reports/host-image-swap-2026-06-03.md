# Host Image Swap — Pre-Cropped Headshot
**Date:** 2026-06-03

## File Changed
- `src/sections/HostStrip.module.css`

## Old Image Replaced
`https://cdn.jsdelivr.net/gh/timothysuggs777/beyond-the-listing-landing-page@main/assets/malinda-host-cutout.png`

## New CDN URL
`https://cdn.jsdelivr.net/gh/timothysuggs777/beyond-the-listing-landing-page@main/assets/host-card-malinda-white-headshot.png?v=1`

## CSS Changes
- `background-image` updated to new URL
- `background-size` changed from `310%` → `cover`
- `background-position` changed from `49% 6%` → `center center`
- Responsive breakpoints updated to match (`cover` / `center center`)
- All experimental crop values removed (`310%`, `280%`, `49% 6%`, `42% 8%`)

## QA Checklist
| Check | Result |
|---|---|
| Meet Your Host image uses new CDN URL | PASS |
| Malinda's face visibly larger and clearer (pre-cropped source) | PASS |
| Image fits inside existing 210×150px frame | PASS |
| No old image remains in this slot | PASS |
| No other images changed | PASS |
| Build passes | PASS |
