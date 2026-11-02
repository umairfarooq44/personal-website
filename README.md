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

Pushing to `master` deploys automatically (see below). To build or deploy by hand:

```bash
npm run typecheck  # TypeScript check
npm run build      # static site in ./out
npm run deploy     # builds and pushes ./out to the master branch of umairfarooq44.github.io
```

Stop `npm run dev` before building: both use the `.next` folder.

## Automatic deploys

`.github/workflows/deploy.yml` builds every pull request, and on every push to
`master` publishes `out/` to the `umairfarooq44.github.io` repo. It needs a deploy key,
set up once:

1. Create a key pair (no passphrase):
   `ssh-keygen -t ed25519 -C "pages-deploy" -f pages_deploy_key -N ""`
2. In the **umairfarooq44.github.io** repo: Settings → Deploy keys → Add deploy key.
   Paste the contents of `pages_deploy_key.pub` and tick **Allow write access**.
3. In the **personal-website** repo: Settings → Secrets and variables → Actions →
   New repository secret. Name it `PAGES_DEPLOY_KEY` and paste the contents of
   `pages_deploy_key` (the private key).
4. Delete both key files from your computer.

Watch runs under the Actions tab. Run one manually with "Run workflow".
