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
  title: "brilliantroots™️ — Structured Tarbiyah for Muslim Families",
  description:
    "Practical tools, guided resources, and community support to help your family learn, practice, and live Islam daily. Rooted in Qurʾān and Sunnah, upon the understanding of the Salaf.",
  keywords: [
    "Islamic tarbiyah",
    "Muslim family",
    "Islamic education",
    "children Islamic learning",
    "adhkar cards",
    "salah system",
    "Muslim parenting",
    "tarbiyah tools",
  ],
  openGraph: {
    title: "brilliantroots™️ — Structured Tarbiyah for Muslim Families",
    description:
      "Practical tools, guided resources, and community support to help your family learn, practice, and live Islam daily.",
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
        <div className="bg-grain fixed inset-0 z-[-1] pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
