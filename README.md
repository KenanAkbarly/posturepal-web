# PosturePal Web

Marketing site for [PosturePal](https://github.com/KenanAkbarly/posturepal-desktop) — the privacy-first, real-time desktop posture monitor. The site introduces the product, explains the privacy model, and links to the GitHub release for download.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind 3**, **shadcn/ui**, **next-intl** (EN + TR), and **Lucide** icons. Pure static — no backend, no analytics, no tracking.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000 — / serves EN, /tr serves Türkçe
npm run build        # production build
npm run start        # serve the production build locally
npm run lint
```

## Routes

| Path           | Description                                            |
|----------------|--------------------------------------------------------|
| `/`            | Home (English) — Header → Hero → Features → How It Works → Privacy → System Requirements → Download → Footer |
| `/tr`          | Home (Türkçe) — same layout                            |
| `/privacy`     | Long-form privacy statement (EN)                       |
| `/tr/privacy`  | Long-form privacy statement (TR)                       |

## Project structure

```
src/
├── app/
│   ├── globals.css           # Tailwind directives + shadcn CSS vars (Slate)
│   └── [locale]/
│       ├── layout.tsx        # Localized root: html/body, NextIntlClientProvider
│       ├── page.tsx          # Home — composes the marketing components
│       └── privacy/page.tsx  # Long-form privacy statement
├── components/
│   ├── ui/                   # shadcn primitives (button, card, badge, separator)
│   ├── icons/GithubIcon.tsx  # inline SVG (lucide v1 dropped brand icons)
│   ├── Header.tsx, LanguageSwitcher.tsx
│   ├── Hero.tsx
│   ├── Features.tsx, HowItWorks.tsx, Privacy.tsx
│   ├── SystemRequirements.tsx, DownloadSection.tsx
│   └── Footer.tsx
├── i18n/
│   ├── routing.ts            # locales=['en','tr'], defaultLocale='en', localePrefix='as-needed'
│   └── request.ts            # getRequestConfig — loads messages/{locale}.json per request
├── lib/utils.ts              # cn() helper
└── middleware.ts             # next-intl createMiddleware
messages/
├── en.json
└── tr.json
```

## Updating download metadata

The macOS download card (and the Hero CTA) link to:
`https://github.com/KenanAkbarly/posturepal-desktop/releases/latest`

When you ship a new release of the desktop app, update **two keys in each locale file** (`messages/en.json` and `messages/tr.json`):

- `download.mac.version` — e.g. `"v0.1.0"`
- `download.mac.size` — e.g. `"~170 MB · Apple Silicon (arm64)"`

That's it. The release URL never changes (`/releases/latest` always redirects to the newest tag).

## Deploying to Vercel

```bash
npx vercel
```

Vercel auto-detects Next.js and deploys with zero config. The `i18n` middleware runs on Vercel's edge runtime by default.

If you'd rather export static HTML for any host (GitHub Pages, S3, Netlify static), uncomment `output: 'export'` in `next.config.ts` and run `npm run build`. Note: with next-intl + App Router, the `[locale]` route group needs `generateStaticParams` (already in `app/[locale]/layout.tsx`), and the middleware-based locale negotiation won't run — `/` won't auto-redirect to `/en` on a static host. The current SSR setup avoids that complication.

## Privacy

By design, this site uses **no analytics, no telemetry, no third-party tracking**. There are no Vercel Analytics, no Plausible, no Google Analytics, no marketing pixels. The privacy promise the desktop app makes applies to its marketing site too — auditable in this repo.

## License

Academic project — see the [desktop repo](https://github.com/KenanAkbarly/posturepal-desktop) for details.
