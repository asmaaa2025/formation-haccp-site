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
  title: "BEKA Formation HACCP - Expert en Hygiène et Sécurité Alimentaire | 15 ans d'expérience",
  description: "Formations HACCP certifiées Qualiopi, audits de conformité, contrôles microbiologiques. Expert en hygiène alimentaire depuis 15 ans. Devis gratuit et accompagnement personnalisé.",
  keywords: "formation HACCP, hygiène alimentaire, sécurité alimentaire, audit conformité, PMS, agrément sanitaire, DUERP, contrôle microbiologique, lutte anti-nuisibles, conseil architectural, formation continue, certification Qualiopi",
  authors: [{ name: "BEKA Formation" }],
  creator: "BEKA Formation",
  publisher: "BEKA Formation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bekaformation.fr'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://bekaformation.fr',
    siteName: 'BEKA Formation HACCP',
    title: 'BEKA Formation HACCP - Expert en Hygiène et Sécurité Alimentaire',
    description: 'Formations HACCP certifiées Qualiopi, audits de conformité, contrôles microbiologiques. Expert en hygiène alimentaire depuis 15 ans. Devis gratuit.',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'BEKA Formation HACCP - Expert en Hygiène Alimentaire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BEKA Formation HACCP - Expert en Hygiène et Sécurité Alimentaire',
    description: 'Formations HACCP certifiées Qualiopi, audits de conformité, contrôles microbiologiques. Expert en hygiène alimentaire depuis 15 ans.',
    images: ['/logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-verification-google',
  },
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
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BEKA Formation HACCP",
              "url": "https://bekaformation.fr",
              "logo": "https://bekaformation.fr/logo.svg",
              "description": "Expert en hygiène et sécurité alimentaire depuis 15 ans. Formations HACCP, audits de conformité, contrôles microbiologiques.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "FR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33-695-178-110",
                "contactType": "customer service",
                "availableLanguage": "French"
              },
              "sameAs": [
                "https://www.linkedin.com/company/beka-formation"
              ]
            })
          }}
        />
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
