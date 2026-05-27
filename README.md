## Rehaan Bara — Premium AI Engineer Portfolio

Premium futuristic AI engineer portfolio built with **Next.js App Router**, **Tailwind CSS**, **Framer Motion**, **GSAP**, and **Three.js (R3F)**.

### Edit your content

Update your name, hero text, skills, projects, experience, services, socials, and email in:

- `src/content/site.ts`

### Run locally

```bash
npm run dev
```

Then open `http://localhost:3001`.

### Resume download

Replace the file `public/Rehaan_Bara_Resume.pdf` with your updated resume (keep the same filename), or update `resumePath` in `src/content/site.ts`.

### Contact form

The form posts to `POST /api/contact` in `src/app/api/contact/route.ts`.

Right now it logs submissions on the server. Wire it to any of these when you’re ready:

- Email provider (Resend / Postmark)
- DB (Supabase)
- Webhook (Slack / Discord)

### Deploy (Vercel)

1. Push this repo to GitHub
2. Import it in Vercel
3. Deploy

### Production build

```bash
npm run build
npm start
```