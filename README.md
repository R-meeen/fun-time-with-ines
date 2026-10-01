# A little time with Ines

Open `index.html` in a browser. No build step or server is required.

Choose a vibe and activity, then select one or more food and ending options. Rate matching activity, food, and ending cards separately. Choices remain in memory until refreshing; the final screen copies a summary for sending manually.

## Editing ideas

`catalog.js` contains the 24 cards, image paths, categories, matching tags, venue details, and research links. Indoor activities use the existing `creative` activity key; Laid-back uses the existing `romantic` vibe key. At-home activities are restricted to Cozy + Stay in. Wen Cheng matches both dinner types but appears only once.

Place information was checked on 1 October 2026. Each researched card links to its source and a map. Check the linked venue sites for current hours, tickets, bookings, and menus. The Pfalz and Eifel destinations are marked as farther day trips. Hiking screenshots are included without guessing their exact lengths or durations.

Your existing photos and route screenshots are preserved. The three at-home cards have their own illustrations. Board games & a cozy blanket keeps `images/cozy-evening.png`; Netflix & soup and tea & a puzzle use separate generated images. Files in `images/not available this time` are not used; Frankenstein Castle and Senckenberg are also left out of the current named list.

## Checks

With Node installed, run `node tests/catalog.test.cjs` to check matching, image paths, navigation, copying, and the playful button.

Tonka replaces 269 in the vegan dinner choices. Its restaurant photo comes from the official Tonka website; the source URL is recorded in `catalog.js`. The original 269 image remains in the folder but is unused.
