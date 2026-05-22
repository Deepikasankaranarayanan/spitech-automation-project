import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Clients from "@/components/Clients";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import Loader from "@/components/Loader";
import ThemeToggle from "@/components/ThemeToggle";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f7ff] dark:bg-[#07111f]">

      <Loader />

      <Navbar />

      <Hero />

      <Services />

      <About />

      <WhyChooseUs />

      <Clients />

      <Gallery />

      <Testimonials />

      <Contact />

      <Footer />

      <WhatsAppButton />

      <ScrollToTop />

      <ThemeToggle />

    </main>
  )
}