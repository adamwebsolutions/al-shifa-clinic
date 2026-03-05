import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
