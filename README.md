# SankaMarketplace Landing Page

This is a marketing landing page built with [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). It features custom animations using GSAP and collects form submissions directly into a Google Sheet using the Google Sheets API.

---

## ✨ Features

- ✅ Next.js 13+ (App Router)
- ✅ TypeScript & Tailwind CSS
- ✅ GSAP animations
- ✅ Custom multi-question modal form
- ✅ Google Sheets API integration for data capture
- ✅ Fully responsive design

---

## 🚀 Getting Started

Install dependencies:

```bash
npm install


## 🔐 Environment Variables

To run this project locally, create a `.env.local` file in the root directory and include:

```env
GOOGLE_SHEET_ID=your-google-sheet-id-here
ENCRYPTION_KEY=32characterlongkeyforAESGCM
GOOGLE_SERVICE_ACCOUNT_KEY='{
  "type": "service_account",
  "project_id": "...",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\\nMIIEv...\\n-----END PRIVATE KEY-----\\n",
  "client_email": "...",
  ...
}'
