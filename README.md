# bobtabrizi — personal site

Single-page portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS v4. Every page is statically prerendered.

## Develop

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run lint`, `npm run typecheck`.

## Editing content

All copy lives in `src/content/`, separate from layout:

- `site.ts` — name, links, email, résumé path, toolbox
- `projects.ts` — project write-ups, stacks, links, screenshots (images in `src/assets/images/`)
- `experience.ts` — roles and highlights

The résumé served from the site is `public/Bob_Tabrizi_Resume.pdf`.
