# KhanTech Labs — public website

Static site for **https://khantech.co.za**, built for GitHub Pages. Plain HTML + CSS, no JavaScript, no build step, no cookies, no analytics, no third-party requests.

**Status: built and validated locally. NOT deployed, pushed, or DNS-configured. Awaiting owner approval.**

## Structure

```
index.html                 Home page (/)
privacy/index.html         Privacy Policy (/privacy/)
404.html                   Not-found page (root-absolute paths, by design)
assets/css/style.css       Single stylesheet
assets/img/                logo-256, icon-192, apple-touch-icon, favicon-32, og-image
favicon.ico
robots.txt  sitemap.xml
CNAME                      khantech.co.za   (exactly, no newline)
.nojekyll                  Tells GitHub Pages to serve files as-is
```

Internal links are relative (`privacy/`, `../assets/...`), so the site works at the domain root, at a project-path URL, and from any static server. Absolute URLs appear only in `canonical`, Open Graph tags and `sitemap.xml`, and always point at `https://khantech.co.za`.

## Preview locally

```
cd C:\Projects\KhanTech-Labs-Website
python -m http.server 8765 --bind 127.0.0.1
```

Then open http://127.0.0.1:8765/ (use a server, not `file://`, because links use directory-style URLs such as `privacy/`).

## Branding asset

A company-first radar/shield mark **without the pistol**, redrawn from scratch in the same visual style as the approved FA Tracker icon (owner-approved 25 Sept 2026 for public business branding). The FA Tracker app icon (`radar-shield-icon-source.png`) is unchanged and is not used or copied here.

## Deployment procedure (do not start without owner approval)

1. **Create the repo.** github.com → New repository → owner `Lone-Wold`, name `KhanTech-Labs-Website`. Do not add a README, .gitignore or licence (this folder already has content).
2. **Visibility: Public (recommended).** GitHub Pages on a free personal account only serves public repos, and the repo contains nothing secret (only public HTML/CSS/images). A private repo would need a paid plan.
3. **Push.** From this folder: `git init -b main`, `git add .`, `git commit -m "Initial KhanTech Labs website"`, `git remote add origin https://github.com/Lone-Wold/KhanTech-Labs-Website.git`, `git push -u origin main`. (There is no `git` binary on the dev machine per the FA Tracker handover; use GitHub Desktop or install Git for Windows.)
4. **Enable Pages.** Repo → Settings → Pages → Build and deployment → Source: **Deploy from a branch** → Branch **main**, folder **/ (root)** → Save.
5. **Verify the domain at account level first (recommended).** Account Settings → Pages → Add a domain → `khantech.co.za`, and add the TXT record GitHub shows at xneelo. This stops anyone else claiming the domain on GitHub Pages.
6. **Custom domain.** Repo → Settings → Pages → Custom domain → `khantech.co.za` → Save. (The `CNAME` file in the repo already holds this value.) Wait for the DNS check to go green.
7. **HTTPS.** After DNS propagates, GitHub issues a certificate automatically (can take from minutes to about an hour). Tick **Enforce HTTPS** once it becomes available.
8. **Confirm live.** Check https://khantech.co.za/, https://khantech.co.za/privacy/, https://www.khantech.co.za/ (should land on the apex), http:// redirecting to https://, a made-up URL showing the 404 page, and that the padlock is valid.

## Proposed xneelo DNS plan (DNS stays at xneelo; do not change nameservers)

**Before touching anything:** export or screenshot the entire current zone. Only add or replace records for the two names below.

**Leave untouched:** all MX, SPF/DKIM/DMARC/other TXT records, and every record for other hostnames (`mail`, `webmail`, `autodiscover`, etc.).

| Name | Type | Value | Notes |
|---|---|---|---|
| `khantech.co.za` (apex / `@`) | A (x4) and AAAA (x4) | Current GitHub Pages IPs, **copied from GitHub's official docs at deployment time** | Do not use IPs from memory. If xneelo supports ALIAS/ANAME at the apex, `Lone-Wold.github.io` is an alternative. |
| `www.khantech.co.za` | CNAME | `lone-wold.github.io` | A CNAME cannot coexist with other records on `www`; remove any existing `www` A/AAAA/CNAME (e.g. a parking page) first. |
| `_github-pages-challenge-Lone-Wold.khantech.co.za` | TXT | Value shown by GitHub in step 5 | Domain verification. Confirm the exact name in GitHub's UI. |

With the apex set as the custom domain, GitHub Pages redirects `www` to the apex automatically, so `khantech.co.za` is canonical and `www` works. Only the apex is entered in GitHub's custom-domain box.

Watch for: any existing `A`/`AAAA` on the apex pointing at xneelo web hosting (replace, and note the old values first so it can be rolled back); any `CAA` records (must allow `letsencrypt.org`, which GitHub uses); and email records must be verified as unchanged after the edit. TTL: lower the apex/www TTL to about 300 seconds beforehand if xneelo allows.

## Public-facing notes

- The public email `khantech.apps@gmail.com` is a plain `mailto:` link; there is no contact form or backend.
- No Paystack, Play, Apple, analytics, cookies or payment code is present.
- The Privacy Policy exposes stable section anchors for future store listings, for example `/privacy/#account-deletion`.
