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
| `content/` | All page copy and organisation details. Edit these files to change what the site says. |
| `app/<route>/page.jsx` | One file per page: `/`, `/about/`, `/programmes/`, `/gallery/`, `/partner-with-us/`, `/news/`, `/contact/` |
| `app/components/` | Shared building blocks: header, footer, page header, buttons, enquiry form, gallery viewer |
| `app/globals.css` | Brand colours and fonts as Tailwind theme tokens |
| `public/photos/` | Photographs used across the site |
| `public/brand/` | Logo files for the site, including a reversed lockup for dark backgrounds |
| `brand_source/` | The client's original logo files, which the web versions were cut from. Not deployed. |

## Editing content

- **Organisation details** (email, phone, WhatsApp, social accounts): `content/site.js`. A value left
  as `null` or an empty list is simply not shown.
- **Impact figures, programmes and future priorities**: `content/programmes.js`.
- **Gallery**: add the photograph to `public/photos/` and an entry to `content/gallery.js` with its
  category and caption. Only publish identifiable photographs of children with consent.
- **News & Stories**: add a post object to `content/news.js` (the expected shape is documented at the
  top of the file). The home page's Stories of Change and Latest Updates sections, and each post's own
  page, appear automatically once posts exist.

Compress new photographs before adding them:

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
yarn build    # writes the static site to out/
```

Every route is exported as `<route>/index.html`, which Apache serves directly. `public/.htaccess` is
copied into `out/` and:

- redirects the public domain from HTTP to HTTPS,
- redirects the previous site's `/pages/...` addresses to their new pages,
- sets the 404 page and turns off directory listings.

To deploy, upload the **contents** of `out/` to `public_html` in cPanel File Manager, replacing the
previous files. Zipping `out/`, uploading the archive, and extracting it in place is the quickest
way. Make sure the hidden `.htaccess` file is included, and delete the old `pages/` folder from
`public_html` so the redirects take effect.
