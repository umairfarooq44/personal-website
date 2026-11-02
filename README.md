# umairfarooq44.github.io

Personal website of Umair Farooq, Senior Frontend Engineer.

Built with Next.js (App Router, static export), TypeScript, Tailwind CSS 4 and uPlot.

## What's on the page

A single page with a sticky header: hero, a live telemetry playback, About, Skills,
Experience, Projects, Recommendations and Contact.

The telemetry playback is a sample lap generated in the browser (`lib/drive.ts`),
drawn as a route map and a uPlot chart that share one playhead
(`components/telemetry/`). It loads on the client only, so uPlot stays out of the
initial bundle.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit content

- All copy is in `content/profile.ts`: intro, about, experience, projects,
  recommendations, skills and links.
- Project screenshots live in `public/projects/`, recommendation photos in
  `public/testimonials/`.
- Replace `public/Umair-Farooq-CV.pdf` when the CV changes.
- `public/og.png` is the image shown when the site is shared on LinkedIn or WhatsApp.
- `app/icon.svg` is the browser tab icon.

## Design

Colours and fonts are defined once in `app/globals.css`: asphalt grey page, ink text,
cobalt for links and data, lane-marking yellow for the moving marker, and Archivo
(its width axis gives the wide headings). Keep these when refactoring.

## Analytics

Optional. Create a free GoatCounter site and set its code in `analytics.goatcounter`
in `content/profile.ts`. Leave it empty to turn analytics off.

## Build and deploy

```bash
npm run typecheck  # TypeScript check
npm run build      # static site in ./out
npm run deploy     # builds and pushes ./out to the master branch of umairfarooq44.github.io
```
