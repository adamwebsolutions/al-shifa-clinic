const services = [
  {
    icon: "👶",
    title: "Child Healthcare",
    description:
      "Dedicated paediatric consultations covering growth monitoring, immunisations and childhood illness management.",
    features: ["Vaccination schedule", "Growth tracking", "Nutritional guidance"],
  },
  {
    icon: "🩺",
    title: "General Consultation",
    description:
      "Comprehensive health assessments for all ages. Diagnosis, treatment and follow-up for acute and chronic conditions.",
    features: ["Same-day appointments", "Lab referrals", "Prescription management"],
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Medicine",
    description:
      "Holistic care for every member of your family under one roof. Building long-term health relationships.",
    features: ["All age groups", "Chronic disease management", "Health counselling"],
  },
  {
    icon: "🛡️",
    title: "Preventive Care",
    description:
      "Stay ahead of illness with personalised preventive health plans, screenings and lifestyle guidance.",
    features: ["Risk assessments", "Lifestyle counselling", "Screening referrals"],
  },
  {
    icon: "📋",
    title: "Executive Health Checkups",
    description:
      "Comprehensive executive health checkup packages to monitor your overall wellbeing and detect issues early.",
    features: ["Full blood panel", "BP & diabetes screening", "Fitness for work certificates"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 bg-blue-50 text-blue-700">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#1B3A6B" }}>
            Comprehensive Care for<br className="hidden sm:block" /> Your Whole Family
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto text-base">
            From routine consultations to preventive health — all under one trusted roof in DHA Phase 5, Lahore.
          </p>
        </div>

        {/* Services Grid — 5 services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white border border-gray-100 rounded-2xl p-6 text-left hover:shadow-lg hover:border-blue-100 transition-all duration-200"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-800 transition-colors" style={{ color: "#1B3A6B" }}>
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 text-left">{service.description}</p>
              <ul className="space-y-1.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-700">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* "Not Sure?" CTA — visually separated */}
        <div className="mt-10 pt-8 border-t border-gray-100">
          <div
            className="rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-white"
            style={{ backgroundColor: "#1B3A6B" }}
          >
            <div className="text-left">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-lg font-bold mb-1">Not Sure Which Service?</h3>
              <p className="text-blue-200 text-sm leading-relaxed max-w-md">
                WhatsApp us and we will guide you to the right consultation for your needs.
              </p>
            </div>
            <div className="flex-shrink-0">
              <p className="text-blue-200 text-xs mb-3">Trusted by 5,000+ patients · Reply within minutes</p>
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-xl text-sm transition-colors min-h-[48px]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
