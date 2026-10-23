# Prapura — GitHub Pages website

A responsive, static marketing website for Prapura's software consulting, product engineering, AI automation, integrations, and operational intelligence services. It uses plain HTML, CSS, and JavaScript—no build step, framework, package installation, or server required.

## Publish on GitHub Pages

1. Download and extract `prapura-website.zip`.
2. Upload the **contents** of this folder to the root of the GitHub repository that serves your Pages site. Ensure `index.html`, `styles.css`, `script.js`, `CNAME`, and `assets/` are at the repository root—not inside an extra nested folder.
3. In GitHub, open **Settings → Pages** and select the branch and `/ (root)` as the publishing source (unless your repository already uses a different publishing setup).
4. In **Settings → Pages → Custom domain**, enter `www.prapura.com`. This package includes a `CNAME` file with that hostname.
5. In Cloudflare DNS, create or confirm a `CNAME` record:
   - **Name:** `www`
   - **Target:** `<your-github-username>.github.io` (replace with your actual GitHub Pages hostname)
   - **Proxy status:** DNS only during initial GitHub Pages domain verification and certificate provisioning.
6. Once GitHub Pages has verified the domain and issued a certificate, enable **Enforce HTTPS** in GitHub Pages. Wait for DNS/TLS propagation if the setting is not immediately available.

This package is configured for `www.prapura.com`. If you also want `prapura.com` (without `www`) to work, configure the apex/root domain separately in Cloudflare and GitHub Pages, or add a redirect from the apex to `www`.

## Contact details configured

The website is configured with these contact details:

- **Email:** `ask@prapura.com`
- **Phone:** `+91 97434 19125`

The inquiry form opens the visitor's default email application with a prefilled draft addressed to `ask@prapura.com`. It does not send automatically and does not store submitted form data. The email mailbox and phone service should be active with your provider for visitors to reach you.

## Files

- `index.html` — page content, page metadata, SEO tags, and structured data
- `styles.css` — responsive visual theme and layouts
- `script.js` — mobile navigation, contact email draft to `ask@prapura.com`, image viewer, and small motion enhancements
- `assets/prapura-mark.webp` — cropped mark from the supplied logo, used in the brand header
- `assets/prapura-mark.png` — favicon source
- `assets/prapura-logo-original.webp` — optimized version of the supplied logo artwork, also used for social preview metadata
- `assets/diagnostics-platform-overview.webp` — optimized version of the supplied project architecture overview
- `CNAME` — custom domain for GitHub Pages

## Editing the site

Search in `index.html` to change service copy, project details, navigation, or contact-form options. Search for `CONTACT_EMAIL` in `script.js` to change the inquiry destination. All content is static and deploys directly to GitHub Pages.

## Notes

- No private API keys or third-party scripts are used.
- The dashboard illustration is a visual mock-up, not a live product or live data feed.
- The diagnostics architecture image is presented as a product/workflow blueprint; only describe specific integrations as live after those integrations are implemented and verified.
- The contact form does not send data to a server. It creates an email draft locally in the visitor's email application.
