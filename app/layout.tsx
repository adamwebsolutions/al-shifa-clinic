import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// font-display: swap prevents render-blocking — text shows in fallback font
// immediately while Inter loads in the background.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// Inline critical CSS for above-fold content.
// Prevents FOUC and improves FCP/LCP on first paint.
// Tailwind classes are generated at build time; this covers
// the structural styles needed before the full CSS bundle arrives.
const criticalCSS = `
  *,*::before,*::after{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{margin:0;font-family:Inter,system-ui,sans-serif;color:#1a202c;background:#fff;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
  /* Header: reserve exact height to prevent CLS */
  header{height:4rem;background:#fff;border-bottom:1px solid #f3f4f6;box-shadow:0 1px 3px rgba(0,0,0,.06);position:sticky;top:0;z-index:50}
  /* Hero: gradient matches Tailwind from-slate-50 to-blue-50 */
  #home{background:linear-gradient(to bottom right,#f8fafc,#eff6ff);padding-top:4rem;padding-bottom:5rem}
  /* Prevent invisible text during font swap */
  h1,h2,h3,p,a,span,li{font-display:swap}
`.replace(/\n\s*/g, "");

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
        {/* Inline critical CSS — eliminates render-blocking for above-fold content */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />

        {/*
          next/font/google self-hosts Inter — no external Google Fonts request needed.
          These preconnect hints cover any remaining third-party resources (WhatsApp, Cal.com).
        */}
        <link rel="preconnect" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://cal.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
