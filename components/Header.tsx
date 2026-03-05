"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
              style={{ backgroundColor: "#1B3A6B" }}
            >
              ✚
            </div>
            <div className="leading-tight">
              <div className="font-bold text-base" style={{ color: "#1B3A6B" }}>
                Al-Shifa Family Clinic
              </div>
              <div className="text-xs text-gray-400">DHA Phase 5, Lahore</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {["#home", "#services", "#doctor", "#contact"].map((href, i) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors"
              >
                {["Home", "Services", "Doctor", "Contact"][i]}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            {/* WhatsApp — always visible (mobile priority above fold) */}
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.52 5.847L.057 23.5l5.775-1.517A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.852 0-3.585-.5-5.082-1.371l-.364-.215-3.428.9.914-3.348-.236-.384A9.962 9.962 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Book Appointment — desktop */}
            <a
              href="https://cal.com/dr-ahmed-raza"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              style={{ backgroundColor: "#1B3A6B" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0f2340")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1B3A6B")}
            >
              Book Appointment
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden p-2 text-gray-500 rounded-md"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-3">
            {["#home", "#services", "#doctor", "#contact"].map((href, i) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-gray-600 py-1"
                onClick={() => setMobileOpen(false)}
              >
                {["Home", "Services", "Doctor", "Contact"][i]}
              </Link>
            ))}
            <a
              href="https://cal.com/dr-ahmed-raza"
              className="mt-2 text-white text-sm font-semibold py-2.5 rounded-lg text-center"
              style={{ backgroundColor: "#1B3A6B" }}
            >
              Book Appointment
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
