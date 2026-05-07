import type { Metadata } from "next";
import { Sora, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const libre = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "brilliantroots | Islamic Products, Tools, and Published Works for Muslim Families",
  description:
    "Discover Islamic family products, tarbiyah tools, Pathway guides, and curated Muslim published works designed to help parents and prospective spouses nurture righteous roots at home.",
  keywords: [
    "Islamic tarbiyah",
    "Muslim family",
    "Islamic education",
    "children Islamic learning",
    "adhkar cards",
    "salah system",
    "Muslim parenting",
    "tarbiyah tools",
    "Islamic products",
    "Muslim published works",
  ],
  openGraph: {
    title: "brilliantroots | Islamic Products, Tools, and Published Works",
    description:
      "Products, tools, Pathway guides, and curated published works for intentional Muslim homes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${libre.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans relative" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
