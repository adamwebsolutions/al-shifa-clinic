"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: Replace with real form handler / n8n webhook
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left: Info + Map */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 bg-blue-50 text-blue-700">
              Get in Touch
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#1B3A6B" }}>
              Visit Al-Shifa Clinic
            </h2>
            <p className="text-gray-700 mb-8">
              Located in DHA Phase 5, Lahore. Walk-ins welcome. WhatsApp for same-day availability.
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: "📍",
                  label: "Address",
                  value: "DHA Phase 5, Lahore, Punjab, Pakistan",
                },
                { icon: "💬", label: "WhatsApp", value: "0300-0000000" },
                { icon: "🕒", label: "Hours", value: "Mon–Fri: 9am–8pm | Sat: 9am–5pm" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="text-xl flex-shrink-0 mt-0.5">{icon}</div>
                  <div>
                    <div className="text-xs text-gray-600 font-medium">{label}</div>
                    <div className="text-gray-700 text-sm font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Embed Placeholder */}
            <div
              className="w-full h-52 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-gray-200 bg-gray-50"
            >
              <div className="text-3xl mb-2">🗺️</div>
              <div className="text-sm text-gray-600 font-medium">Google Maps Embed</div>
              <div className="text-xs text-gray-600 mt-1">DHA Phase 5, Lahore</div>
              <a
                href="https://maps.google.com/?q=DHA+Phase+5+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-xs text-blue-700 hover:text-blue-700 underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#1B3A6B" }}>
                  Message Received!
                </h3>
                <p className="text-gray-700 text-sm">
                  We will get back to you on WhatsApp shortly. Thank you!
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-1" style={{ color: "#1B3A6B" }}>
                  Send a Message
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  We typically respond within 2 hours during clinic hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="phone">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="03XX-XXXXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Describe your symptoms or what you need help with..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white font-semibold py-3 rounded-xl text-sm transition-colors"
                    style={{ backgroundColor: "#1B3A6B" }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0f2340")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1B3A6B")}
                  >
                    Send Message
                  </button>
                </form>

                <p className="text-xs text-gray-600 mt-4 text-center">
                  Or WhatsApp directly:{" "}
                  <a href="https://wa.me/923000000000" className="text-green-700 font-semibold">
                    0300-0000000
                  </a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
