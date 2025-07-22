import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
      title: "BEKKA Formation HACCP - Expert en Hygiène et Sécurité Alimentaire",
  description: "Formations HACCP, audits de conformité, solution numérique complète avec tablette et application. 15 ans d'expérience en hygiène alimentaire.",
  keywords: "formation HACCP, hygiène alimentaire, sécurité alimentaire, audit conformité, PMS, agrément sanitaire, DUERP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="bg-white text-black">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        ></Script>
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
