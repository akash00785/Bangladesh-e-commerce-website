import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fashionbazar.com.bd"),
  title: {
    default: "Fashion Bazar — বাংলাদেশের সেরা ফ্যাশন ই-কমার্স প্ল্যাটফর্ম",
    template: "%s — Fashion Bazar",
  },
  description:
    "সহজ কেনাকাটা, দ্রুত ডেলিভারি, সেরা মানের পণ্য। শার্ট, পান্টো, জুতা, টি-শার্ট এবং আরও অনেক কিছু। বাংলাদেশে ফ্রি হোম ডেলিভারি।",
  keywords: [
    "ফ্যাশন বাজার",
    "fashion bazar",
    "বাংলাদেশ ই-কমার্স",
    "bangladesh ecommerce",
    "অনলাইন শপিং",
    "online shopping bangladesh",
    "শার্ট",
    "পান্টো",
    "জুতা",
    "টি-শার্ট",
    "পোশাক",
    "ফ্যাশন",
    "পুরুষ পোশাক",
    "মহিলা পোশাক",
    "ঢাকা ডেলিভারি",
  ],
  authors: [{ name: "Fashion Bazar" }],
  creator: "Fashion Bazar",
  publisher: "Fashion Bazar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "https://fashionbazar.com.bd",
    siteName: "Fashion Bazar",
    title: "Fashion Bazar — বাংলাদেশের সেরা ফ্যাশন ই-কমার্স প্ল্যাটফর্ম",
    description:
      "সহজ কেনাকাটা, দ্রুত ডেলিভারি, সেরা মানের পণ্য। শার্ট, পান্টো, জুতা, টি-শার্ট এবং আরও অনেক কিছু।",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fashion Bazar — বাংলাদেশের সেরা ফ্যাশন শপ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashion Bazar — বাংলাদেশের সেরা ফ্যাশন ই-কমার্স প্ল্যাটফর্ম",
    description:
      "সহজ কেনাকাটা, দ্রুত ডেলিভারি, সেরা মানের পণ্য। শার্ট, পান্টো, জুতা, টি-শার্ট এবং আরও অনেক কিছু।",
    images: ["/og-image.png"],
    creator: "@fashionbazarbd",
    site: "@fashionbazarbd",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "https://fashionbazar.com.bd",
    languages: {
      "bn-BD": "https://fashionbazar.com.bd",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background">
        <CartProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
