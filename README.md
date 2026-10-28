# Clearpath Accounts Solutions — React (JSX) + Vite + Tailwind CSS

A plain JavaScript version of the Clearpath Accounts Solutions website.
No TypeScript — every file is `.jsx` / `.js`.

## Run it

```bash
npm install
npm run dev
```

Open the printed URL (usually http://localhost:5173).

## Production build

```bash
npm run build     # outputs static files to dist/
npm run preview   # serves the build locally
```

## Stack

- Vite + React 19, plain JSX (no TypeScript)
- React Router (react-router-dom) for the Home / Services / Contact pages
- Tailwind CSS v4 via @tailwindcss/vite (theme tokens in `src/index.css`)
- Fraunces + Manrope fonts from Google Fonts (see `index.html`)

## Structure

```
index.html
src/
  main.jsx          entry point
  App.jsx           layout + routes
  index.css         Tailwind theme (navy & gold tokens, fonts, button styles)
  data/site.js      company info, office map links, services list
  components/       Header.jsx, Footer.jsx
  pages/            Home.jsx, Services.jsx, Contact.jsx
  assets/           hero + six service photos
```

## Notes

- All content lives in `src/data/site.js` — edit the address, services or
  map coordinates there.
- The office map pin uses the Google Maps coordinates for Oliapuram Shopping
  Complex, PO Junction, Kothamangalam 686691.
