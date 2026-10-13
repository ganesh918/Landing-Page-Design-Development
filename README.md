# Nourish+ Landing Page

React + Tailwind CSS v4 landing page for a meal-delivery brand.

## Assignment checklist (8 sections)

| # | Section | File |
|---|---------|------|
| 1 | Navbar (logo, links, CTA) | `src/components/Navbar.tsx` |
| 2 | Hero (heading, copy, visuals, CTAs) | `src/components/Hero.tsx` |
| 3 | About | `src/components/About.tsx` |
| 4 | Features (grid/cards) | `src/components/Features.tsx` |
| 5 | How it works (steps + visuals) | `src/components/HowItWorks.tsx` |
| 6 | Testimonials (review cards) | `src/components/Testimonials.tsx` |
| 7 | Pricing (plans + CTAs) | `src/components/Pricing.tsx` |
| 8 | Footer (contact, links, social) | `src/components/Footer.tsx` |

## Run

```bash
npm install
npm run images   # optional: re-download Pexels assets
npm run dev
```

## Authentication (demo)

- `/login` — sign in with email + password (eye toggle on password)
- `/signup` — create account (password + confirm, eye toggles)
- Session stored in `localStorage` (client-side demo, no backend)
- Navbar shows user name + **Log out** when signed in

## Images

Food-themed photos live in `public/images/`. Run `npm run images` if any photo fails to load.
