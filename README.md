# PRAPURA website — Version 3

This is the final Version 3 static, GitHub Pages-ready update of the existing PRAPURA website.

## What changed
- Replaced the previous header/footer logo with the new transparent PRAPURA elephant wordmark and tagline.
- Removed the Kannada elephant-skin texture from all visible backgrounds.
- Kept the original PRAPURA wordmark and rendered its tagline in matching brown-gold text for consistent contrast.
- Added a small circular light/dark switch before “Let’s talk” on desktop and in the mobile header; the two controls stay in sync.
- Uses the visitor’s device theme on first visit, then remembers their theme choice for later visits.
- Completed a site-wide readability pass: increased meaningful body copy, mobile card descriptions, section labels, form labels, and footer text; improved line spacing and preserved a clear visual hierarchy.
- Retained the original illustrative product concept (not client data).
- Updated the social preview and organization structured-data logo URLs to use the PRAPURA wordmark.

## Version 3 readability pass

Meaningful explanatory text is generally 16–19px on desktop and 14.5–17px on mobile, with comfortable line spacing. Small labels in the decorative dashboard mockup remain compact so the illustration still reads as a product UI rather than competing with the website content.

## Version 3 theme behavior

The site is a static HTML/CSS/JavaScript website. The theme toggle uses `data-theme` on the document root and stores a preference in local storage; visitors without a saved preference start in the device’s preferred color scheme. No framework or build step is required.

## Preview locally
Open `index.html` in a browser, or serve this directory with a local static server.

## Publish to GitHub Pages
The ZIP is flattened: `index.html`, `styles.css`, `script.js`, `CNAME`, and the `assets/` folder are at the top level. Extract it and replace the site files in the folder your repository currently publishes from. If **Settings → Pages** is configured for `main /docs`, put these files in `/docs`; if it publishes `main /(root)`, put them at the repository root. Keep `CNAME` (`www.prapura.com`) beside `index.html` and keep the `assets/` folder intact. You do not need to change the publishing source if the current source is already working.
