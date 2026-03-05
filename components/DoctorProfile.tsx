"use client";

const credentials = [
  { icon: "🎓", label: "MBBS", detail: "Dow University of Health Sciences" },
  { icon: "🏆", label: "FCPS", detail: "College of Physicians & Surgeons Pakistan" },
  { icon: "🏥", label: "Fellowship", detail: "Family Medicine, Pakistan" },
  { icon: "📅", label: "Experience", detail: "10+ Years in Clinical Practice" },
];

export default function DoctorProfile() {
  return (
    <section id="doctor" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 bg-blue-50 text-blue-700">
            Meet Your Doctor
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#1B3A6B" }}>
            Dr. Ahmed Raza
          </h2>
          <p className="text-gray-500 mt-2">MBBS, FCPS — General Practice &amp; Family Medicine</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left: Photo + Quick Info */}
          <div>
            {/* Photo Placeholder */}
            <div
              className="w-full rounded-2xl flex flex-col items-center justify-center py-16 mb-6 border border-blue-100"
              style={{ backgroundColor: "#EEF2FF" }}
            >
              <div
                className="w-36 h-36 rounded-full flex items-center justify-center text-white text-6xl mb-4"
                style={{ backgroundColor: "#1B3A6B" }}
              >
                👨‍⚕️
              </div>
              <div className="font-bold text-xl" style={{ color: "#1B3A6B" }}>Dr. Ahmed Raza</div>
              <div className="text-gray-500 text-sm">MBBS, FCPS</div>
            </div>

            {/* Google Reviews Placeholder */}
            <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4">
              <div className="text-3xl">⭐</div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm font-semibold text-gray-800">5.0 — Google Reviews</div>
                <div className="text-xs text-gray-400">Google Reviews badge placeholder</div>
              </div>
            </div>
          </div>

          {/* Right: Bio + Credentials */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#1B3A6B" }}>
              A Doctor Who Listens
            </h3>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed mb-8">
              <p>
                Dr. Ahmed Raza is a board-certified Family Medicine specialist with over a decade of experience
                serving patients in Lahore. His patient-centred approach means every consultation is thorough,
                unhurried and genuinely personalised.
              </p>
              <p>
                Holding both MBBS and FCPS qualifications, Dr. Raza manages a wide spectrum of conditions —
                from acute illness and chronic disease management to preventive care and health education.
              </p>
              <p>
                His clinic in DHA Phase 5 serves hundreds of families who trust him as their primary healthcare
                provider for all stages of life.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 gap-3">
              {credentials.map(({ icon, label, detail }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-xl p-4">
                  <div className="text-2xl mb-2">{icon}</div>
                  <div className="font-bold text-sm" style={{ color: "#1B3A6B" }}>{label}</div>
                  <div className="text-xs text-gray-400 mt-0.5 leading-tight">{detail}</div>
                </div>
              ))}
            </div>

            {/* Book CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://cal.com/dr-ahmed-raza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-white font-semibold py-3 rounded-xl text-sm transition-colors"
                style={{ backgroundColor: "#1B3A6B" }}
              >
                Book a Consultation
              </a>
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
              >
                WhatsApp Dr. Raza
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
