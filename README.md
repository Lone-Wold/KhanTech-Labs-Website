# KhanTech Labs — public website

Source for **https://khantech.co.za**, the public website of KhanTech Labs. The site is hosted with GitHub Pages, served from the `main` branch.

It is deliberately simple: static HTML and CSS, with no JavaScript, no build step, no cookies, no analytics and no third-party requests.

## Pages

| URL | File |
|---|---|
| `/` | `index.html` |
| `/privacy/` | `privacy/index.html` |
| any unknown URL | `404.html` |

Other files: `assets/css/style.css`, `assets/img/` (logo, favicon and social-preview images), `favicon.ico`, `robots.txt`, `sitemap.xml` and `CNAME` (the custom domain used by GitHub Pages).

Internal links are relative, so the site works at the domain root and from any static file server. Absolute URLs appear only in the canonical link, Open Graph tags and `sitemap.xml`, and always point at `https://khantech.co.za`.

## Preview locally

```
python -m http.server 8765 --bind 127.0.0.1
```

Then open http://127.0.0.1:8765/. Use a local server rather than opening the files directly, because links use directory-style URLs such as `privacy/`.

## Contact

khantech.apps@gmail.com
