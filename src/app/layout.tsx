import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Shenova Shein Store | Latest Fashion Trends & Affordable Styles',
  description: 'Discover trendy and affordable fashion at Shenova Shein Store. Shop new arrivals, dresses, tops, and more for every occasion. Express your unique style today!',
  keywords: ["fashion, online store, clothing, trendy, affordable fashion, dresses, tops, skirts, accessories, new arrivals, women's fashion"],
  openGraph: {
    "title": "Shenova Shein Store | Latest Fashion Trends & Affordable Styles",
    "description": "Discover trendy and affordable fashion at Shenova Shein Store. Shop new arrivals, dresses, tops, and more for every occasion.",
    "url": "https://shenovashein.store",
    "siteName": "Shenova Shein Store",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/beautiful-young-woman-with-wavy-blonde-hair-new-stylish-dress-shoes-poses-luxurious-apartment_132075-8149.jpg",
        "alt": "Stylish woman in trendy fashion clothes"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Shenova Shein Store | Latest Fashion Trends & Affordable Styles",
    "description": "Discover trendy and affordable fashion at Shenova Shein Store. Shop new arrivals, dresses, tops, and more.",
    "images": [
      "http://img.b2bpic.net/free-photo/beautiful-young-woman-with-wavy-blonde-hair-new-stylish-dress-shoes-poses-luxurious-apartment_132075-8149.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"]
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
