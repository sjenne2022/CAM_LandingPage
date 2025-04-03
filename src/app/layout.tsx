// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sanka Marketplace - Bringing Africa to You",
    template: "%s | Sanka Marketplace",
  },
  description: "Discover authentic African craftsmanship and unique handmade products at Sanka Marketplace.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
  },
  metadataBase: new URL("https://www.sankamarketplace.com"), // ✅ Sets base for Open Graph & Twitter
  openGraph: {
    title: "Sanka Marketplace - Bringing Africa to You",
    description: "Discover authentic African craftsmanship and unique handmade products.",
    url: "https://www.sankamarketplace.com",
    siteName: "Sanka Marketplace",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // 🔁 Replace with your actual OG image in public folder
        width: 1200,
        height: 630,
        alt: "Sanka Marketplace - Authentic African Goods",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle", // Replace with real handle
    title: "Sanka Marketplace - Bringing Africa to You",
    description: "Explore African goods that spark conversation and cultural pride.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* SEO & UX */}
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" /> {/* optional PWA support */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
