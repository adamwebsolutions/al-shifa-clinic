import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DoctorProfile from "@/components/DoctorProfile";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <DoctorProfile />
      <Testimonials />
      <BookingCTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
