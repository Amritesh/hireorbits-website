# Hireorbits website

A responsive, static company website built with Astro. No React, UI component library, backend, or runtime hosting service is required. Pages are rendered to HTML during the build; only navigation runs JavaScript in the browser. Fonts are hosted locally.

## Run locally

Use Node.js 24 LTS (minimum 22.12).

```sh
npm ci
npm run dev
```

Open `http://localhost:4321/hireorbits-website/`.

```sh
npm run build
npm test
npm run preview
```

Tests inspect the production output, so build first.

## Where to edit

| File or folder | Responsibility |
| --- | --- |
| `src/data/company.ts` | Services, capabilities, industries, contact details, navigation |
| `src/pages/` | Individual page content and layouts |
| `src/components/` | Header, footer, icons, page headings, service cards/list, consultation CTA |
| `src/layouts/Layout.astro` | Shared HTML document, metadata, fonts, header and footer |
| `src/styles/global.css` | Design tokens, component styles, responsive breakpoints |
| `src/lib/url.ts` | Links that work under a subdirectory or root domain |
| `public/` | Favicon and static assets |
| `.github/workflows/deploy.yml` | Build, test, and publish on pushes to `main` |

Each page has its own title and description. Use the `url()` helper for internal links and local public assets. No router or catch-all rewrite is needed.

## GitHub Pages

The temporary deployment is configured for:

- Repository: `Amritesh/hireorbits-website`
- Website: `https://amritesh.github.io/hireorbits-website/`
- Publishing source: GitHub Actions

Pushes to `main` rebuild, check internal links, and publish the static `dist/` directory. Source Pages documents and extracted source notes are ignored and are not included in the public repository.

## Move to another host

Connect the repository to a static hosting provider, use `npm run build` as the build command, and `dist` as the publish directory. Set:

```text
SITE_URL=https://your-domain.example
BASE_PATH=/
```

Replace the example with your actual origin. Rebuild after changing these values: canonical URLs, internal links, and asset paths are generated at build time. For a subdirectory deployment, set `BASE_PATH` to that subdirectory instead.

To verify a root deployment locally:

```sh
BASE_PATH=/ SITE_URL=https://your-domain.example npm run build
BASE_PATH=/ npm test
```

You can also upload the contents of `dist/` directly to any static web server. Configure that host to serve `404.html` for missing pages. Domain registration, DNS, and TLS configuration belong to the chosen host. Disable the GitHub Pages workflow if it is no longer needed.

## Content and contact behavior

- Contact and career links open the visitor's email app. Mail delivery depends on the company's email service; no form, resume upload, or booking backend is included.
- The placeholder phone number is omitted. Add a verified number when available.
- Case studies and insights use honest empty states; careers does not invent open vacancies.
- Future certifications and partnerships are not presented as earned credentials.
- The wordmark and geometric mark are provisional; replace them with the official logo when available.
- Privacy and terms pages describe the implemented informational site. Update the privacy notice when changing hosting or adding analytics, forms, or other data-processing services.
- The site does not configure the source document's proposed reCAPTCHA, Cloudflare, backups, or firewall services.

## Checks

`npm test` validates every required route, internal link and asset under the deployment base, document language, title structure, and supplied contact addresses. Browser QA covers desktop/mobile presentation, menus, service disclosures, and keyboard interaction. Re-run checks after changing routes or hosting configuration.
