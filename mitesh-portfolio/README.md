# Mitesh Uniyal — Portfolio

A multi-page Next.js portfolio with dark/light mode, an animated interactive hero, a blog, and a working contact form.

## What's inside

- **Home** (`/`) — hero with an animated, pointer-reactive canvas background, about, skills, project teasers, education.
- **Projects** (`/projects`) — full project list, each linking to a case study page (`/projects/[slug]`) with challenge / approach / learnings.
- **Blog** (`/blog`) — post list and detail pages (`/blog/[slug]`). Comes with two starter posts about your own two projects — edit or replace freely.
- **Contact** (`/contact`) — validated form that posts to a real API route (`/api/contact`).
- **Dark / light mode** — toggle in the nav, persisted in `localStorage`, no flash on load.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Making the contact form actually send email

Out of the box, submissions are just logged to your server console — visitors still see a success message, but you won't get an email. To wire up real delivery:

1. Create a free account at [resend.com](https://resend.com) and grab an API key.
2. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
3. Paste your key into `RESEND_API_KEY` in `.env.local`.
4. Restart `npm run dev`. Messages will now arrive at the address in `CONTACT_TO_EMAIL`.

When you deploy, add the same environment variables in your hosting provider's dashboard (see below).

## Editing content

All real content lives in plain JS files, no CMS needed:

- `lib/projects.js` — project summaries and case-study text.
- `lib/posts.js` — blog posts. Add a new object to the array and a page is created automatically at `/blog/your-slug`.
- `app/contact/page.js` — contact details (email, phone, location).
- `app/layout.js` — site title/description (shows up in browser tabs and search results).

## Deploying

The easiest path is [Vercel](https://vercel.com) (made by the Next.js team, free tier is plenty for a portfolio):

1. Push this project to a GitHub repo.
2. Go to vercel.com → "Add New Project" → import the repo.
3. Add the `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` environment variables under Project Settings → Environment Variables.
4. Deploy. You'll get a live URL (and can attach a custom domain later).

Netlify also works for Next.js apps, since you're already comfortable with it from your other projects.

## Tech used

Next.js (App Router), React, Framer Motion for scroll/hover animation, a hand-rolled canvas effect for the hero (no 3D library dependency), and plain CSS with custom properties for theming.
