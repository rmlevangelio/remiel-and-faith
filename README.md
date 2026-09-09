# Forever Begins · Remiel & Faith

A wedding website for Remiel & Faith — March 15, 2027 · Cavite, Philippines.

Built with [Next.js](https://nextjs.org), TypeScript, and Tailwind CSS v4.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## RSVP Storage (Supabase)

1. Create a Supabase project and open its SQL Editor.
2. Run the contents of [supabase/schema.sql](supabase/schema.sql).
3. Create `.env.local` in the project root:

```bash
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SECRET_KEY=your-secret-key
```

Find these values under Supabase **Project Settings > API**. The secret key is used only by `pages/api/rsvp.ts`; do not prefix it with `NEXT_PUBLIC_` or share it with guests.

Each submitted RSVP is saved in the `rsvps` table. Re-submitting with the same guest name updates that guest's dietary response.

## Guests And RSVP Results

Run [supabase/guests.sql](supabase/guests.sql) in the Supabase SQL Editor to create and seed the `guests` table. The query is idempotent, so it can safely be run again.

To access the password-protected results page at `/rsvp-results`, also add this server-only variable to `.env.local`:

```bash
RESULTS_PASSWORD=choose-a-long-unique-password
```

The page sends the password only to the server-side `/api/rsvp-results` endpoint, which retrieves the RSVP data with the Supabase secret key. Use HTTPS in production and do not share the password with guests.

---

## Available Scripts

| Script           | Description                  |
| ---------------- | ---------------------------- |
| `npm run dev`    | Start the development server |
| `npm run build`  | Build for production         |
| `npm run start`  | Start the production server  |
| `npm run lint`   | Run ESLint                   |
| `npm run format` | Format code with Prettier    |

---

## Project Structure

```
pages/
  index.tsx       # Main wedding page
styles/
  globals.css     # Global styles and layout
public/
  images/         # Static images (photos, logo)
images/           # Source images
```

---

## Adding Photos

Place image files in `public/images/`. They are referenced in `pages/index.tsx` inside the gallery section.

## Updating Bank Details

Search for `Placeholder` in `pages/index.tsx` to find and replace account names and numbers.

## Updating QR Codes

Replace the `bank-qr-box` placeholder divs in `pages/index.tsx` with `<img>` tags pointing to your QR code images in `public/images/`.
