# Duyen Dinh — Portfolio

Static portfolio site (HTML/CSS/JS, no build step) for deployment on GitHub Pages.

Live URL (once deployed): **https://duyendinh.github.io**

## Structure
```
portfolio/
├── index.html          # all sections
├── css/styles.css      # soft & subtle blush theme
├── js/main.js          # accordions, mobile nav, scroll reveal, app links
├── assets/img/         # optional screenshots (see below)
└── .nojekyll           # tells GitHub Pages to serve files as-is
```

## Deploy to GitHub Pages

Because this is a **user site**, the repo must be named exactly `DuyenDinh.github.io`.

1. Create a new repo at https://github.com/new
   - Repository name: `DuyenDinh.github.io`
   - Public. Do **not** add a README/license (this folder already has commits).
2. In this folder, connect and push:
   ```bash
   cd ~/Claude/portfolio
   git branch -M main
   git remote add origin https://github.com/DuyenDinh/DuyenDinh.github.io.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages**. Source should auto-detect `main` branch, `/ (root)`.
4. Wait ~1 minute, then visit **https://duyendinh.github.io**.

## Layout
Two-column resume layout inspired by thanhphongtrang.github.io: a sticky left
profile sidebar (avatar, name, role, bio, contact list) beside a right content
column. The top nav switches between four client-side pages via URL hash:
`#home`, `#portfolio`, `#cv`, `#testimonials` (all in one `index.html`).

## Adding a profile photo
Drop a square photo at `assets/img/profile.jpg`. It replaces the "DD" monogram
avatar automatically. If missing, the monogram shows (no broken image).

## Adding app screenshots
Drop images into `assets/img/`:
- `seen-screenshot.png`
- `lexiscan-screenshot.png`

They appear automatically. If missing, the card shows a soft blush tile with the app name instead of a broken image.

## Adding App Store links
Edit the `APP_LINKS` object at the top of `js/main.js`. Until a URL is filled in,
the button reads "Coming to the App Store".

## Notes
- No em dashes anywhere in the copy (house style).
- `[VERIFY: ...]` stats from the content brief were left out rather than guessed
  (the Day 1 push notification A/B test sample size / duration).
