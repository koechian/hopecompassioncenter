# Hope Compassion Center

Website for Hope Compassion Center, served at <https://hopecompassioncenter.com/>.

Built with Next.js (App Router), React and Tailwind CSS, and exported as plain static files. The
domain is hosted on Safaricom's cPanel (Apache), so there is no Node server in production.

## Development

Requires Node.js 20.9 or later (`.nvmrc` pins 22) and Yarn 1.

```bash
yarn install
yarn dev      # http://localhost:3000
yarn lint
```

## Where things live

| Path | Contents |
|---|---|
| `content/` | Page copy that changes rarely, plus fallback copies of the Sanity content (see below) |
| `lib/content_repository.js` | Loads the content staff edit in Sanity, at build time |
| `studio/` | Sanity Studio, where staff edit content. A separate package with its own `yarn install`. |
| `.github/workflows/deploy_site.yml` | Builds the site and uploads it to cPanel |
| `app/<route>/page.jsx` | One file per page: `/`, `/about/`, `/programmes/`, `/gallery/`, `/partner-with-us/`, `/news/`, `/contact/` |
| `app/components/` | Shared building blocks: header, footer, page header, buttons, enquiry form, gallery viewer |
| `app/globals.css` | Brand colours and fonts as Tailwind theme tokens |
| `public/photos/` | Photographs used across the site |
| `public/brand/` | Logo files for the site, including a reversed lockup for dark backgrounds |
| `brand_source/` | The client's original logo files, which the web versions were cut from. Not deployed. |

## Editing content

Staff edit the parts of the site that change often in Sanity Studio
(<https://hopecompassioncenter.sanity.studio>):

- **Contact Details**: email, telephone, WhatsApp, location and social media accounts.
- **Programmes & Impact**: impact figures, the five programmes and future priorities.
- **Gallery Albums**: photographs grouped by activity or event, each album in one gallery category.
  Several photographs can be dropped into an album at once. Only publish identifiable photographs of
  children with consent.
- **News & Stories**: posts with rich text and photographs. The home page's Stories of Change and Latest
  Updates sections, and each post's own page, appear once posts exist.
- **Gallery videos**: YouTube links added to an album play in a Videos section on the Gallery page.

### Optional sections

These are built but stay hidden until switched on in **Site Sections** in the Studio, so each can go
live once its content is ready:

| Section | Where it appears | Content in the Studio |
|---|---|---|
| Announcement banner | Above the header on every page | Message and link, in Site Sections |
| Events | `/events/`, in the main menu | Events (past ones move to "Recent events") |
| Opportunities | `/opportunities/`, footer, Partner With Us | Opportunities (hidden after their closing date) |
| Reports & Publications | `/reports/`, footer, About Us | Reports & Publications (PDF uploads) |
| FAQs | `/faqs/`, footer, Contact | FAQs |
| Our Team | About Us | Our Team |
| Partners & Supporters | Home page, Partner With Us | Partners & Supporters |
| Testimonials | Home page | Testimonials |

A switched-off page shows the "page not found" message and is left out of menus and the sitemap.

Publishing in the Studio starts a rebuild and upload (see *Build and deploy*); changes are live a few
minutes later. Sanity serves the photographs from its image CDN.

Everything else (page copy, values, the founder's story) lives in `content/` and changes through a
commit. The Sanity project ID (`bhosprud`) is public and set as the default in `lib/sanity_client.js` and
`studio/sanity_project.js`. Without it the site would build entirely from `content/`, including the
fallback copies of the Sanity content; `lib/content_repository.js` makes that switch.

### Studio

The Studio needs Node.js 22.20 or later (a dependency of the Sanity CLI requires it).

```bash
cd studio
yarn install
yarn dev      # http://localhost:3333
yarn deploy   # publishes the hosted Studio
```

`studio/scripts/import_site_content.mjs` copies the contact details, programmes and gallery from
`content/` into Sanity, uploading the photographs, and creates Site Sections with everything switched
off. It only creates documents that do not exist yet, so it never overwrites edits made in the Studio.
It has already been run against the `production` dataset. It needs an Editor token, read from a file so
the token stays out of the shell history:

```bash
npx sanity tokens add "Content import" --project bhosprud --role editor --expires-at <date> --json
SANITY_WRITE_TOKEN_FILE=<file holding the token> yarn import-content
npx sanity tokens delete <token ID>
```

Compress photographs added to `public/photos/` before committing them:

```bash
node scripts/compress_images.mjs public/photos/new_photo.jpg
```

## Forms

The Contact and Partner With Us forms send email through EmailJS from the browser, using the
existing contact template (`lib/send_enquiry.js`). Extra fields such as enquiry type, organisation
and phone number are included in the subject and message. A hidden honeypot field filters basic
spam. A confirmation email to the sender has to be configured as an auto-reply in the EmailJS
dashboard.

## Build and deploy

```bash
yarn build    # writes the static site to out/, reading published content from Sanity
```

Every route is exported as `<route>/index.html`, which Apache serves directly. `public/.htaccess` is
copied into `out/` and:

- redirects the public domain from HTTP to HTTPS,
- redirects the previous site's `/pages/...` addresses to their new pages,
- sets the 404 page and turns off directory listings.

Each build clears Next.js's fetch cache first (`scripts/clear_fetch_cache.mjs`), so it always uses the
latest published content.

GitHub Actions (`.github/workflows/deploy_site.yml`) builds the site on every push to `main`, whenever
content is published in Sanity, every morning (so past events and closed opportunities drop off), and on
demand from the Actions tab. When `DEPLOY_ENABLED` is `true` it
uploads `out/` over FTPS. It needs these repository settings:

| Setting | Kind | Value |
|---|---|---|
| `SANITY_PROJECT_ID` | variable | Optional. Overrides the project ID (`bhosprud`) |
| `SANITY_DATASET` | variable | Optional. Overrides the dataset (`production`) |
| `DEPLOY_ENABLED` | variable | `true` to upload after building |
| `FTP_SERVER` | secret | `ftp.hopecompassioncenter.com` |
| `FTP_USERNAME`, `FTP_PASSWORD` | secret | A cPanel FTP account whose home directory is `public_html` |

Sanity starts a build through a webhook (Sanity Manage → API → Webhooks) that sends a `POST` to
`https://api.github.com/repos/koechian/hopecompassioncenter/dispatches` on create, update and delete,
with the projection `{"event_type": "sanity-content-published"}` and an
`Authorization: Bearer <token>` header. The token is a fine-grained GitHub token for this repository
with *Contents: Read and write*.

To deploy by hand instead, upload the **contents** of `out/` to `public_html` in cPanel File Manager,
replacing the previous files. Make sure the hidden `.htaccess` file is included, and delete the old
`pages/` folder from `public_html` so the redirects take effect.
