# BitLab Website — Shop Access & Security Context

This supplements the earlier BitLab website context document with how
shop access actually works, now that a real password gate has been built.

## How each shop is protected

Every shop (Railway service) can have its own password, set as an environment
variable on that specific service. When set, visiting that shop's URL shows
a lock screen first - a single password field - before any real data loads.
Enter the correct password once, and the browser remembers it for 90 days
(no need to re-enter it every visit). This protection lives inside the app
itself, not on the website - so it applies no matter how someone arrives at
the URL (a shared link, a bookmark, browser history, anything).

## What this means for the website specifically

**The public demo shop (Shop 2) has no password set** - it's meant to be
freely explorable by any website visitor, filled with realistic but
entirely fake data. The website's "Try it now" button can link to it
directly with zero extra steps for the visitor.

**Real client shops all have a password set.** These should never be
publicly listed, linked, or browsable anywhere on the website - not even
in a "some businesses using our software" showcase page with the shop name
visible. Each client's link is shared privately and directly (WhatsApp,
email, in person) by BitLab, not discovered through the site.

## What NOT to build on the website

- No login page, client portal, or "enter your shop code" lookup system.
  Access is handled entirely by the app's own lock screen once someone has
  the direct link - the website doesn't need to know anything about
  authentication at all.
- No directory or listing of real client shops, even a partial or
  anonymized one, since that itself reveals which businesses are clients.

## Summary for whoever builds the website

Treat every shop link (other than the Shop 2 demo) as a private credential,
not a public resource - handle it the same way you'd handle a password
itself, because functionally that link plus the shop's password is exactly
what it is.
