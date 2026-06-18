# Sabash Restaurant — React Version

Converted from your original HTML/CSS pages (Home, About Us, Menu, Shop, Contact Us)
into a React (Vite) project with React Router for navigation.

## 1. Add your images

Your original HTML referenced images by filename only (no folder), so this project
expects them inside `public/images/`. Copy your actual image files from your old
HTML project into `public/images/` and rename them to match this table
(I simplified a few names that had spaces, since spaces in filenames cause problems
on the web):

| Old filename (your HTML project)                                  | New filename (use this in `public/images/`) |
|----------------------------------------------------------------------|-----------------------------------------------|
| Black White Minimalist Professional Initial Logo.png                | clock-icon.png                                 |
| Food and Beverage Trade Show Banner in Orange Vibrant Cutouts Style.png | banner-home.png                            |
| about us2.jpeg                                                       | about-us-banner.jpeg                           |
| Red and Orange Modern Special Promo Korean Food Banner.png           | menu-banner.png                                |
| Black White Simple Opening Banner - Copy.png                         | shop-banner.png                                |
| contactus2.jpeg                                                      | contact-us-banner.jpeg                         |
| ssss.png                                                              | pizza-banner.png                               |
| real-logo.png                                                        | real-logo.png (same)                           |
| 1.png                                                                 | 1.png (same)                                   |
| titleIcon.svg                                                        | titleIcon.svg (same)                           |
| canv.y.png, canv.f.png, canva.t.png, canv.waths.png                  | same names                                     |
| item1_1.png, item1_2.png, item1_3.png, item1_4.png                   | same names                                     |
| offerThumb1_1.png, offerThumb1_2.png, offerThumb1_3.png, offerShape1_4.png | same names                                |
| Capture-2-removebg-preview.png                                       | same name                                      |
| menuIcon1_2.png, menuIcon1_3.png, menuIcon1_4.png                     | same names                                     |
| menuThumb1_1.png through menuThumb1_10.png                           | same names                                     |
| chefeThumb1_1.png, chefeThumb1_2.png, chefeThumb1_3.png               | same names                                     |

Note: `menuIcon1_1.png` was loaded from an external URL in your original site
(`gramentheme.com`) — I kept that as-is in `src/data/restaurantData.js`, so you
don't need that one locally unless you want to swap it for your own icon.

If you don't have some of these images anymore, just remove that `<img>` line
or swap in a placeholder — nothing else will break.

## 2. Install dependencies

```
npm install
```

## 3. Run locally

```
npm run dev
```

Open the printed localhost URL in your browser.

## 4. Project structure

```
src/
  components/   Header, Footer, BackToTop, ChefeSection, Layout
  pages/        Home, AboutUs, Menu, Shop, ContactUs
  data/         restaurantData.js — edit this to change menu items/prices/images
  index.css     all styles (merged from your 5 original HTML files)
```

## 5. Push to GitHub, then deploy on Vercel

```
git init
git add .
git commit -m "Convert Sabash restaurant site to React"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

Then import the repo on vercel.com — it auto-detects Vite, build command
`npm run build`, output directory `dist`. The included `vercel.json` makes sure
the About Us / Menu / Shop / Contact Us page links keep working after deploy
(Vite + React Router needs that rewrite rule).

## Notes / things you may want to follow up on

- The contact form currently just logs the submission and shows an alert
  (see `handleSubmit` in `src/pages/ContactUs.jsx`). Hook it up to an n8n
  webhook, EmailJS, or your own backend to actually receive messages.
- `saba.js` from your original project wasn't shared, so if it contained
  custom behavior beyond the CSS animations/back-to-top link, share it and
  I'll convert that logic into React too.
