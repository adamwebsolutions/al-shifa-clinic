const testimonials = [
  {
    name: "Sara M.",
    location: "DHA Phase 5",
    text: "Dr. Ahmed takes time to actually listen. He identified my daughter's recurring fever cause in one visit after months of struggle elsewhere. Highly recommend.",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    name: "Usman K.",
    location: "DHA Phase 6",
    text: "Very professional and thorough. The clinic is clean and modern, and the WhatsApp follow-up after my appointment was a great touch. Will definitely return.",
    rating: 5,
    date: "1 month ago",
  },
  {
    name: "Nadia A.",
    location: "Gulberg III",
    text: "We have been bringing our whole family here for 3 years now. Dr. Raza is knowledgeable, patient, and always available. Best family doctor in DHA.",
    rating: 5,
    date: "3 weeks ago",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 bg-yellow-50 text-yellow-700">
            ⭐ Patient Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#1B3A6B" }}>
            What Our Patients Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Hundreds of families trust Al-Shifa Clinic for their healthcare needs.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-slate-50 border border-gray-100 rounded-2xl p-6 flex flex-col">
              <StarRating count={t.rating} />
              <blockquote className="mt-4 text-gray-600 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: "#1B3A6B" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-800">{t.name}</div>
                  <div className="text-xs text-gray-600">{t.location} · {t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge Placeholder */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
            <div className="text-4xl">🔍</div>
            <div>
              <div className="font-bold text-sm text-gray-800">Google Reviews</div>
              <div className="flex items-center gap-1.5 mt-1">
                <StarRating count={5} />
                <span className="text-sm text-gray-600 font-semibold">5.0</span>
                <span className="text-xs text-gray-600">· Google Reviews badge placeholder</span>
              </div>
            </div>
            <a
              href="https://g.page/r/al-shifa-clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors ml-2"
            >
              View all →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
