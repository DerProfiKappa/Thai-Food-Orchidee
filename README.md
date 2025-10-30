# Thai-Food-Orchidee Website

Single-page marketing site for a Berlin-based Thai restaurant, featuring section-based navigation, fluid cursor visuals, and a fully responsive layout.

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS and shadcn/ui component primitives
- React Router for page sections
- Three.js (React Three Fiber + Drei) for ambient 3D effects

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run locally**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173` by default.
3. **Create a production build**
   ```bash
   npm run build
   npm run preview   # serve the build locally
   ```

## Available Scripts

- `npm run dev` – start the Vite development server with hot reloading.
- `npm run build` – generate an optimized production bundle in `dist/`.
- `npm run preview` – serve the production build locally for smoke testing.
- `npm run lint` – run ESLint against the project source.

## Project Structure Highlights

- `src/components` – UI sections and shared building blocks.
- `src/pages` – Route-level components (home, menu, gallery, contact, etc.).
- `src/assets` – Images and static media referenced in the app.
- `public` – Static assets served as-is (favicons, social preview image, robots.txt).

## Deployment Notes

Deploy the contents of the `dist/` directory to any static hosting provider (e.g. Netlify, Vercel, Cloudflare Pages, or a traditional web server). Ensure environment variables from `.env` are provided wherever Supabase integration or other back-end services are required.

## Licensing & Attribution

All content, imagery, and configuration files inside this repository are intended for the Thai-Food-Orchidee project. Replace any placeholder media or contact information with final client-approved assets before going live.
