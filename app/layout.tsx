import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const criticalCSS = `
  *,*::before,*::after{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{margin:0;font-family:Inter,system-ui,sans-serif;color:#1a202c;background:#fff;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
  header{height:4rem;background:#fff;border-bottom:1px solid #f3f4f6;box-shadow:0 1px 3px rgba(0,0,0,.06);position:sticky;top:0;z-index:50}
  #home{background:linear-gradient(to bottom right,#f8fafc,#eff6ff);padding-top:4rem;padding-bottom:5rem}
  h1,h2,h3,p,a,span,li{font-display:swap}
`.replace(/\n\s*/g, "");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Al-Shifa Family Clinic",
  "description": "Trusted family healthcare in DHA Phase 5, Lahore. Dr. Ahmed Raza MBBS FCPS provides expert care for the whole family.",
  "url": "https://al-shifa-clinic-gamma.vercel.app",
  "telephone": "+923000000000",
  "medicalSpecialty": ["GeneralPractice", "Pediatric", "FamilyMedicine"],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "DHA Phase 5",
    "addressLocality": "Lahore",
    "addressRegion": "Punjab",
    "addressCountry": "PK"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "250",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasMap": "https://g.page/r/al-shifa-clinic",
  "image": "https://al-shifa-clinic-gamma.vercel.app/og-image.jpg",
  "physician": [
    {
      "@type": "Physician",
      "name": "Dr. Ahmed Raza",
      "medicalSpecialty": "GeneralPractice",
      "hasCredential": [
        {"@type": "EducationalOccupationalCredential", "credentialCategory": "MBBS"},
        {"@type": "EducationalOccupationalCredential", "credentialCategory": "FCPS"}
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Al-Shifa Family Clinic | Dr. Ahmed Raza MBBS FCPS | DHA Phase 5 Lahore",
  description:
    "Al-Shifa Family Clinic in DHA Phase 5, Lahore. Dr. Ahmed Raza (MBBS, FCPS) provides expert general consultation, family medicine, child healthcare, preventive care and health checkups. Book your appointment today.",
  keywords:
    "family clinic Lahore, doctor DHA Phase 5, general practitioner Lahore, Dr Ahmed Raza, Al-Shifa clinic, family medicine Lahore, child healthcare Lahore",
  openGraph: {
    title: "Al-Shifa Family Clinic | Dr. Ahmed Raza MBBS FCPS",
    description:
      "Trusted family healthcare in DHA Phase 5, Lahore. Expert care for the whole family.",
    type: "website",
    locale: "en_PK",
    siteName: "Al-Shifa Family Clinic",
    url: "https://al-shifa-clinic-gamma.vercel.app",
    images: [
      {
        url: "https://al-shifa-clinic-gamma.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Al-Shifa Family Clinic — Trusted Healthcare in DHA Phase 5 Lahore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Shifa Family Clinic | Dr. Ahmed Raza MBBS FCPS",
    description:
      "Trusted family healthcare in DHA Phase 5, Lahore. Expert care for the whole family.",
    images: ["https://al-shifa-clinic-gamma.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <link rel="preconnect" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://cal.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
