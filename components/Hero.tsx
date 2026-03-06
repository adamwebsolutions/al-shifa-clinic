
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-slate-50 to-blue-50 pt-16 pb-20" {...({ fetchPriority: "high", loading: "eager" } as Record<string,string>)}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              DHA Phase 5, Lahore — Now Accepting Patients
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5" style={{ color: "#1B3A6B" }}>
              Trusted Family<br />
              <span className="text-blue-600">Healthcare</span> in<br />
              DHA Phase 5
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Dr. Ahmed Raza <span className="font-semibold text-gray-800">(MBBS, FCPS)</span> provides
              compassionate, professional care for you and your entire family — from routine checkups
              to specialist consultations.
            </p>

            {/* CTA Buttons — WhatsApp above fold on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="https://cal.com/dr-ahmed-raza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white font-semibold px-6 py-3.5 rounded-xl text-base transition-all shadow-lg hover:shadow-xl"
                style={{ backgroundColor: "#1B3A6B" }}
              >
                📅 Book Appointment
              </a>
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3.5 rounded-xl text-base transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.52 5.847L.057 23.5l5.775-1.517A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.852 0-3.585-.5-5.082-1.371l-.364-.215-3.428.9.914-3.348-.236-.384A9.962 9.962 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Trust Stats */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "5,000+", label: "Patients Served" },
                { value: "FCPS", label: "Board Certified" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold" style={{ color: "#1B3A6B" }}>{value}</div>
                  <div className="text-xs text-gray-700 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Doctor Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              {/* Photo placeholder */}
              <div
                className="w-full h-72 flex flex-col items-center justify-center"
                style={{ backgroundColor: "#EEF2FF" }}
              >
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center text-white text-4xl mb-4"
                  style={{ backgroundColor: "#1B3A6B" }}
                >
                  👨‍⚕️
                </div>
                <div className="text-sm text-gray-600">Doctor photo</div>
              </div>

              {/* Card Footer */}
              <div className="p-5">
                <div className="font-bold text-lg" style={{ color: "#1B3A6B" }}>
                  Dr. Ahmed Raza
                </div>
                <div className="text-sm text-gray-700 mb-3">MBBS, FCPS — General Practice & Family Medicine</div>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-700 ml-1">5.0 Google Reviews</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-gray-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  DHA Phase 5, Lahore
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-3 -right-3 bg-green-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              ✓ Available Today
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
