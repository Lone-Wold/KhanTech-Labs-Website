# KhanTech Labs — public website

Source for **https://khantech.co.za**, the public website of KhanTech Labs. The site is hosted with GitHub Pages, served from the `main` branch.

It is deliberately simple: static HTML and CSS with one tiny script (for optional app-store buttons), no build step, no cookies, no analytics and no third-party requests.

## Pages

| URL | File |
|---|---|
| `/` | `index.html` |
| `/privacy/` | `privacy/index.html` |
| any unknown URL | `404.html` |

Other files: `assets/css/style.css`, `assets/js/` (store-link configuration, see below), `assets/img/` (logo, favicon and social-preview images), `favicon.ico`, `robots.txt`, `sitemap.xml` and `CNAME` (the custom domain used by GitHub Pages).

Internal links are relative, so the site works at the domain root and from any static file server. Absolute URLs appear only in the canonical link, Open Graph tags and `sitemap.xml`, and always point at `https://khantech.co.za`.

## App store links

`assets/js/site-config.js` holds two settings, `GOOGLE_PLAY_URL` and `APPLE_APP_STORE_URL`. Both are empty, so no download buttons are shown. When a real store listing exists, set its URL there and the matching button appears on the home page automatically. Only `https` links on the official store domains are accepted. The "Mobile app" wording on the home page should be updated at the same time.

## Preview locally

```
python -m http.server 8765 --bind 127.0.0.1
```

Then open http://127.0.0.1:8765/. Use a local server rather than opening the files directly, because links use directory-style URLs such as `privacy/`.

## Contact

khantech.apps@gmail.com
