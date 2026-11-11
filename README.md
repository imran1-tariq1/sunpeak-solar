# ☀️ SunPeak Solar Website

A modern, fully responsive website for a solar energy company, with 14 pages, a solar savings calculator, a quote form and a blog. It's built with **React 18**, **Vite 5** and **React Router 6**.

All text, prices and contact details are kept in a single data file, so you can update the site without touching any page code.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)

---

## ✨ Features

- **Responsive design**: works on phones, tablets and desktops.
- **Solar savings calculator**: estimates system size (kW), number of panels, cost, monthly savings, payback period, CO₂ avoided and trees saved. It supports on-grid and hybrid systems.
- **Quote and contact form** with input validation and a success message.
- **WhatsApp chat button** on every page, with a pre-filled message.
- **Product catalogue** with category filters (Panels, Inverters, Batteries, Accessories).
- **Packages and pricing** shown in Pakistani Rupees (Rs).
- **Project portfolio, testimonials, team and milestones.**
- **Blog** with a list page and individual article pages.
- **Animations**: sections fade in as you scroll and statistics count up. Both respect the "reduce motion" setting.
- **SEO basics**: each page sets its own title and meta description.
- **Custom 404 page** and a redirects file for Netlify hosting.
- **Optimized WebP images**, all free to use (Public Domain / CC0).

## 📄 Pages

| Page | Route |
|---|---|
| Home | `/` |
| About | `/about` |
| Services | `/services` |
| Products | `/products` |
| Packages | `/packages` |
| Projects | `/projects` |
| Savings Calculator | `/calculator` |
| Blog / Article | `/blog`, `/blog/:slug` |
| FAQ | `/faq` |
| Contact / Free Quote | `/contact` |
| Privacy Policy | `/privacy` |
| Terms of Service | `/terms` |
| Not Found | any other URL |

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI components |
| [Vite 5](https://vitejs.dev/) | Dev server and production build |
| [React Router 6](https://reactrouter.com/) | Page routing |
| [Lucide React](https://lucide.dev/) | Icons |
| Plain CSS | Styling (no CSS framework) |

## 🚀 Getting Started

**Requirements:** [Node.js](https://nodejs.org/) 18 or newer.

```bash
# 1. Clone the repository
git clone https://github.com/imran1-tariq1/sunpeak-solar.git
cd sunpeak-solar

# 2. Install dependencies
npm install

# 3. Start the dev server (http://localhost:5173)
npm run dev
```

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server with live reload |
| `npm run build` | Builds the production files into `dist/` |
| `npm run preview` | Serves the production build locally for testing |

## 📁 Project Structure

```
sunpeak-solar/
├── public/
│   ├── images/          # WebP photos (see CREDITS.md)
│   ├── favicon.svg
│   └── _redirects       # Netlify rule so page links work on refresh
├── src/
│   ├── components/      # Navbar, Footer, Layout, Counter, Reveal, FaqList, etc.
│   ├── data/site.js     # ⭐ All website content lives here
│   ├── hooks/           # usePageTitle (page title + meta description)
│   ├── pages/           # One file per page
│   ├── App.jsx          # Routes
│   ├── main.jsx         # App entry point
│   └── index.css        # All styles
├── index.html
├── package.json
└── vite.config.js
```

## ✏️ Editing Content

Open **`src/data/site.js`** to change:

- **Company info**: name, tagline, phone, WhatsApp number, email, address, hours and social links
- **Services, packages, products and prices**
- **Projects, testimonials, team, values and milestones**
- **FAQs and blog posts**
- **Navigation links and homepage statistics**

**Images:** to use your own photos, replace a file in `public/images/` with one that has the same name, or change the `image` name in `site.js`.

**Calculator rates:** the cost per kW, panel wattage and performance factor are at the top of `src/pages/Calculator.jsx`.

## 🌐 Deployment

Run `npm run build`, then upload the `dist/` folder to any static host.

- **Netlify**: works as-is (the `_redirects` file is already set up). Build command `npm run build`, publish directory `dist`.
- **Vercel**: import the repo; it detects Vite automatically. Add a rewrite to `/index.html` so page links work on refresh.
- **GitHub Pages**: set `base` in `vite.config.js` to `'/sunpeak-solar/'`, and use `HashRouter` or a 404 fallback for routing.

## 📬 Forms

The contact and newsletter forms check what the visitor typed, but they **don't send data anywhere yet**. To receive leads, connect a service such as [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/) in `src/pages/Contact.jsx`.

## 🖼️ Credits

All photos come from Wikimedia Commons and are Public Domain or CC0. See [CREDITS.md](CREDITS.md) for the source of each one.

## 👤 Author

**Imran Tariq**: [@imran1-tariq1](https://github.com/imran1-tariq1)
