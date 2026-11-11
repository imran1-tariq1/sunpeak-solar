# SunPeak Solar Website

A responsive static website for a solar company, built with React, Vite and React Router.

## Run it

```bash
npm install      # first time only
npm run dev      # start dev server at http://localhost:5173
npm run build    # create production files in /dist
npm run preview  # preview the production build
```

## Edit content

Almost all text, prices, phone numbers, projects, FAQs and blog posts are in one file:
`src/data/site.js`

## Pages

Home, About, Services, Products, Packages, Projects, Savings Calculator, Blog (list + articles),
FAQ, Contact / Free Quote, Privacy Policy, Terms of Service and a 404 page.

## Notes

- Photos are in `public/images/` (WebP, free Public Domain / CC0 photos, see `CREDITS.md`).
  To use your own photos, replace a file with one of the same name, or change the `image` names in `src/data/site.js`.
- The contact and newsletter forms validate input and show a success message, but do not send data
  anywhere yet. Connect a service such as Formspree or EmailJS in `src/pages/Contact.jsx` to receive leads.
- `public/_redirects` makes page links work when hosted on Netlify.
