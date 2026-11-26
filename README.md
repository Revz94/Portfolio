# Revathy Remesh – Data Analyst Portfolio

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Customise
All content is in `lib/data.ts`. Search for `TODO` and replace:
- `github`, `siteUrl`
- project insights, impact metrics, GitHub/demo links (only add numbers you can defend)
- Coursera certificate year
- headshot: add `public/headshot.jpg` and use the `<Image>` snippet commented in the Hero (`components/Sections.tsx`)
- skill levels (1–5)

Replace `public/Revathy_Remesh_CV.pdf` to update the resume download. Brand colours: `tailwind.config.ts`.

## Deploy to Vercel
1. Push the project to a GitHub repo.
2. vercel.com → Add New → Project → import the repo (Next.js is auto-detected).
3. Deploy, then set `siteUrl` in `lib/data.ts` to your live domain and redeploy.
4. Optional: add a custom domain under Project → Settings → Domains.

## Notes
- The contact form opens the visitor's email app (no backend). Use Formspree or Resend for a real backend.
- Dark mode follows the system preference and is remembered after toggling.
