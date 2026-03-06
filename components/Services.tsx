const services = [
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
    icon: "👶",
    title: "Child Healthcare",
    description:
      "Dedicated paediatric consultations covering growth monitoring, immunisations and childhood illness management.",
    features: ["Vaccination schedule", "Growth tracking", "Nutritional guidance"],
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
    title: "Health Checkups",
    description:
      "Routine and executive health checkup packages to monitor your overall wellbeing and detect issues early.",
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

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-blue-100 transition-all duration-200"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-800 transition-colors" style={{ color: "#1B3A6B" }}>
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{service.description}</p>
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

          {/* CTA Card */}
          <div
            className="rounded-2xl p-6 flex flex-col justify-between text-white sm:col-span-2 lg:col-span-1"
            style={{ backgroundColor: "#1B3A6B" }}
          >
            <div>
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-lg font-bold mb-2">Not Sure Which Service?</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                WhatsApp us and we will guide you to the right consultation for your needs.
              </p>
            </div>
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-2.5 px-5 rounded-xl text-sm transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
