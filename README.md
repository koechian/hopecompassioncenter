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

## Build and deploy

```bash
yarn build    # writes the static site to out/
```

Every route is exported as `<route>/index.html` (for example `out/pages/about/index.html`), which
Apache serves directly. `public/.htaccess` is copied into `out/` and sets the 404 page and turns
off directory listings.

To deploy, upload the **contents** of `out/` to `public_html` in cPanel File Manager, replacing the
previous files. Zipping `out/`, uploading the archive, and extracting it in place is the quickest
way. Make sure the hidden `.htaccess` file is included.

## Forms

The contact and donation forms send email through EmailJS from the browser. The service ID,
template IDs and public key are in `app/pages/contact/page.jsx` and `app/pages/donate/page.jsx`.
