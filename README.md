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
