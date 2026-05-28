import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import QualitySection from "./components/QualitySection";
import Testimonials from "./components/Testimonials";
import TrustStrip from "./components/TrustStrip";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#19202a]">
      <Header />
      <main>
        <Hero />
        <About />
        <ProductShowcase />
        <QualitySection />
        <Features />
        <TrustStrip />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
