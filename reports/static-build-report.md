# Beyond the Listing Static Build Package

Date: 2026-06-02 16:47:56

## Summary

Created a deterministic static HTML/CSS build for the Beyond the Listing landing page. This package is designed to avoid Bolt's prior drift from screenshot interpretation.

## Files

- `index.html`
- `styles.css`
- `assets/`
- `prompt/bolt-import-prompt.txt`
- `reports/static-build-report.md`

## Strategy

- Real HTML sections.
- CSS grid/flex layouts.
- No full-page mockup screenshot used as live page content.
- No section screenshots used as live content.
- CDN URLs for core image assets.
- Local generated `assets/hero-atmosphere.png` used as a dark abstract atmosphere background.

## Intended Bolt Use

Upload or commit this static package, then paste `prompt/bolt-import-prompt.txt` into Bolt.
