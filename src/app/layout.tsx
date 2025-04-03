// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanka Marketplace - Bringing Africa to You",
  description: "Discover authentic African craftsmanship and unique handmade products at Sanka Marketplace.",
  metadataBase: new URL("https://www.sankamarketplace.com"),
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Sanka Marketplace - Bringing Africa to You",
    description: "Discover authentic African craftsmanship and unique handmade products.",
    url: "https://www.sankamarketplace.com",
    siteName: "Sanka Marketplace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle", // Update this
    title: "Sanka Marketplace - Bringing Africa to You",
    description: "Discover authentic African craftsmanship and unique handmade products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.sankamarketplace.com" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="robots" href="/robots.txt" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sanka Marketplace",
              url: "https://www.sankamarketplace.com",
              logo: "https://www.sankamarketplace.com/favicon.png",
              sameAs: [
                "https://twitter.com/YourTwitterHandle", // Update to real handles
                "https://instagram.com/sankamarketplace"
              ]
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
