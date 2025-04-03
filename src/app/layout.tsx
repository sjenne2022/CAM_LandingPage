import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanka Marketplace - Bringing Africa to You",
  description: "Discover authentic African craftsmanship and unique handmade products at Sanka Marketplace.",
  metadataBase: new URL("https://www.sankamarketplace.com"), // Update to your actual URL
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png", // fallback if you want Apple Touch Icon
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
    site: "@YourTwitterHandle", // Replace if applicable
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
        {/* Essential meta */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.sankamarketplace.com" />

        {/* These are served from public/ and accessible at root */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="robots" href="/robots.txt" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
