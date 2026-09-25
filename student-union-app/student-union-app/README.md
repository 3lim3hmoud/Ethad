# Student Union — Faculty of Nursing (Frontend)

Pure front-end prototype, no backend yet — all content comes from `js/data.js`.

## Files
- `index.html` — app shell, all screens as `.view` blocks, bottom nav + side drawer
- `js/app.js` — routing (`go('route')`) + renders every screen from `DATA`
- `js/data.js` — all mock content (events, ranking, magazines, etc.)

## Screens included
Home, Events (filterable), Ranking, Profile, Competitions, Campaigns, Magazines,
Media Center, News, Leadership, Union & Committees, Badges, Activity Passport,
Student of the Week (+ archive), Notifications.

## Not built yet (roadmap)
Calendar, Interactive Campus Map, Union AI Assistant, Live Events, Student Voice/polls,
Admin Dashboard, auth, and the whole Firebase/Cloudinary backend + push notifications.

## Next step
Wire `js/data.js` reads to Firestore (matches your usual Firebase + Cloudinary + GitHub Pages stack),
add `manifest.json` + a service worker for installable PWA, add Firebase Auth for student login.
