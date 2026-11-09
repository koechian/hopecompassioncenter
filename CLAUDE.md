@AGENTS.md

# Hope Compassion Center website

Website for an NGO, live at <https://hopecompassioncenter.com/>. The README covers structure, editing
content, Sanity and deployment; this file holds the constraints and history that the code does not show.
The "Status" section at the end is a snapshot for picking the work back up.

## Hard constraints

- **Static export only.** The domain is hosted on Safaricom's cPanel (Apache, no Node). The developer
  will not host it elsewhere. `next.config.mjs` must keep `output: "export"`, `images.unoptimized`, and
  `trailingSlash: true`. The live server serves routes as directories, so deep links break without
  trailing slashes.
- **`public/.htaccess`** redirects HTTP to HTTPS (scoped to the real domain), sends the old site's
  `/pages/...` addresses to their new pages with 301s, and sets the 404 page. Keep the cPanel PHP handler
  block (ea-php80) at the end unchanged.
- **Workflow.** Commit straight to `main`; there are no merge requests. Push only when asked. No
  `Co-Authored-By` lines. A push runs `.github/workflows/deploy_site.yml` (lint and build; the FTPS upload
  stays off until the repository variable `DEPLOY_ENABLED` is `true`).
- **Never read `.env.local` or `.env.production`.** Both are tracked from the original project; leave them alone.
- **Safeguarding.** Only publish identifiable photographs of children with consent. Do not publish bank
  or payment details until the client has an approved, secure giving process (the old Donate page with
  bank details was removed for this reason). Social links only for accounts the organisation manages.

## How the site is put together

- Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS 4, Yarn 1, Node 22 (`.nvmrc`).
  TypeScript is pinned to 6.0.3 because typescript-eslint does not support 7.
- **Content has two sources.** `lib/content_repository.js` reads Sanity at build time; the project ID
  (`bhosprud`, dataset `production`) is the default in `lib/sanity_client.js` and `studio/sanity_project.js`,
  and environment variables only override it. Removing that default makes the site build from `content/`. The Sanity-backed parts are
  contact details, programmes and impact, gallery albums, news, and the optional sections. Page copy
  (home, about, partnership, contact, values) stays in `content/` and changes by commit.
- **Optional sections** (announcement, events, opportunities, reports, FAQs, team, partners, testimonials)
  are switched on in the Studio's *Site Sections* document. A switched-off page calls `notFound()` and is
  left out of menus (`lib/navigation.js`) and the sitemap.
- **Category lists are duplicated** between `studio/schemas/categories.js` and `content/gallery.js`,
  `content/news.js` and `content/site.js` (team groups). Change both sides together.
- `studio/` is a separate package (Sanity 6) with its own `yarn install`. Hosted Studio:
  `hopecompassioncenter.sanity.studio` (app ID recorded in `studio/sanity.cli.js`). The Sanity project
  sits in the organisation "Hope Compassion Center" (`or6lhblzn`); the CLI will not create a project
  without an organisation. `studio/scripts/import_site_content.mjs` seeds Sanity from `content/` and
  uploads the photographs; it only creates missing documents. It has been run against `production`.

## Pitfalls already hit

- Next.js keeps fetched Sanity responses in `.next/cache/fetch-cache` across builds; `prebuild` runs
  `scripts/clear_fetch_cache.mjs`. `cache: "no-store"` is not an option: the static export fails.
- `generateStaticParams` returning an empty array fails the export, so `/news/[slug]` emits a
  placeholder slug (`no-posts-yet`) until posts exist.
- `useSearchParams` must sit inside `<Suspense>` in a static export (see `EnquiryForm.jsx`).
- Tailwind 4: unlayered CSS beats utilities, so resets belong in `@layer base`. The brief's gold
  (`#D3A64F`) fails contrast as text on cream; use it on forest green or decoratively.
- Sanity schema: subtypes of `image` cannot override `fields` (hence `bodyImage` in news posts).
- The Studio's dependencies need Node 22.20 or later (the Sanity CLI pulls in `skills`); the local nvm
  Node 22 is 22.13, so run the Studio with Node 24. The site itself builds on Node 22.
- The imported gallery albums share one creation time and have no date, so Sanity returns them in ID
  order; `lib/content_repository.js` keeps albums tied on date and creation time in the category order
  of `content/gallery.js`, which keeps the gallery identical to the `content/` build.

## Testing

`yarn lint` and `yarn build`, then serve `out/` under Apache to test `.htaccess`: Docker `httpd:2.4` with
`AllowOverride All` and mod_rewrite, and Playwright (`mcr.microsoft.com/playwright:v1.64.1-noble`) for
screenshots and interaction checks, with EmailJS requests intercepted so no email is sent. Recreate the
httpd container after each build; the bind mount goes stale when `out/` is deleted. To test Sanity-backed
pages without a project, run a local HTTP server that answers the GROQ queries with fixtures and
temporarily pass `apiHost` and `useProjectHostname: false` to `createClient` (revert afterwards).

## Hosting and services

- DNS and email for the domain are at Safaricom (`ns*.safaricombusiness.co.ke`, MX `rat-0*`), so
  services that need Cloudflare DNS (Cloudflare Email Service) are ruled out. Sending as
  `@hopecompassioncenter.com` from another provider needs DNS records added at Safaricom.
- The FTP server is Pure-FTPd with explicit TLS on port 21. SFTP (22) and implicit FTPS (990) are closed.
  Its certificate names only `host26.safaricombusiness.co.ke` (the cPanel host, same IP as the domain), so
  that is `FTP_SERVER`; the workflow verifies the certificate (`security: strict`).
- Forms send through EmailJS from the browser (`lib/send_enquiry.js`, existing contact template, with a
  honeypot field). A confirmation email to the sender has to be set up in the EmailJS dashboard as a
  Linked Template (auto-reply), which costs one extra send per enquiry.
- Brand: the client's new logo arrived as JPEGs only (`brand_source/`); the site uses transparent WebP
  cut-outs in `public/brand/`. The logo's orange-red matches the brief's `#B93819`, so the brief palette
  in `app/globals.css` stands. Vector originals have been requested.

## Status (2026-11-09)

Done and pushed: upgrade and fixes, restructure to the client's brief, phone and WhatsApp, new logo,
Sanity Studio and data layer, deployment workflow, optional sections. The live site still runs the old
build; nothing has been deployed yet.

Done (committed 2026-11-09): Sanity project `bhosprud` created with a public `production` dataset,
content imported (8 albums, 66 photos, programmes and impact, contact details, Site Sections all off),
the import token revoked, the Studio deployed. A build against Sanity matches the `content/` build page
for page (photos, order and visible text).

Next steps:

1. Sanity: invite client staff as Editors (sanity.io/manage, project Members). The GitHub variables
   `SANITY_PROJECT_ID` and `SANITY_DATASET` are no longer needed; the IDs are the code defaults.
2. Deployment: the FTP account `webadmin@hopecompassioncenter.com` exists and logs in over verified TLS,
   but its home directory is not `public_html` (it is empty and not served; checked 2026-11-09). Point it
   at `public_html`, rotate its password, add the `FTP_*` secrets, run the workflow as a dry run, then set
   `DEPLOY_ENABLED` and add the Sanity webhook (README, *Build and deploy*). After the first upload,
   delete the old `pages/` folder from `public_html` and check whether PHP runs on the host.
3. Offered and not started: branded HTML templates for the EmailJS notification and auto-reply; a visual
   design pass in Brilliant (its MCP runs from the Windows desktop app at `http://127.0.0.1:3333/mcp`).
4. Not built until the client decides: online giving (needs an approved payment method) and newsletter
   sign-up (needs a mailing service).

Waiting on the client: map location and social accounts; Kids Hub operating status and whether "Hope
Compassion School" is current; news posts; photo consent for identifiable children; review of the gallery
categories (the "Support for Elderly Women" category was added); vector logo files; whether to use the
logo's tagline "Building Hope. Changing Lives" on the site; approval of drafted copy (Get Involved,
Working Together, the contact introduction, the programmes call to action, the news empty state, and the
"Why Partner" points reused as Our Approach).
