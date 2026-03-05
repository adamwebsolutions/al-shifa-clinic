export default function BookingCTA() {
  return (
    <section className="py-20" style={{ backgroundColor: "#1B3A6B" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Icon */}
        <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
          📅
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to See Dr. Raza?
        </h2>
        <p className="text-blue-200 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Book your appointment online in under a minute, or send us a WhatsApp message.
          Same-day slots often available.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="https://cal.com/dr-ahmed-raza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 font-bold py-4 px-8 rounded-xl text-base transition-all shadow-lg"
            style={{ color: "#1B3A6B" }}
          >
            📅 Book via Cal.com
          </a>
          <a
            href="https://wa.me/923000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-xl text-base transition-all shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.52 5.847L.057 23.5l5.775-1.517A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.852 0-3.585-.5-5.082-1.371l-.364-.215-3.428.9.914-3.348-.236-.384A9.962 9.962 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            WhatsApp 0300-0000000
          </a>
        </div>

        {/* Clinic Hours */}
        <div className="inline-flex flex-col sm:flex-row gap-6 sm:gap-10 bg-white bg-opacity-10 rounded-2xl px-8 py-5 text-sm text-blue-100">
          <div>
            <div className="font-semibold text-white mb-1">Mon – Fri</div>
            <div>9:00 AM – 8:00 PM</div>
          </div>
          <div className="hidden sm:block w-px bg-white opacity-20"></div>
          <div>
            <div className="font-semibold text-white mb-1">Saturday</div>
            <div>9:00 AM – 5:00 PM</div>
          </div>
          <div className="hidden sm:block w-px bg-white opacity-20"></div>
          <div>
            <div className="font-semibold text-white mb-1">Sunday</div>
            <div>Emergency only</div>
          </div>
        </div>
      </div>
    </section>
  );
}
