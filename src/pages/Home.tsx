
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Collections from "@/components/Collections";
import Brands from "@/components/Brands";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Offers from "@/components/Offers";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* <Navbar /> */}
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustSection />
        <Collections />
        <Brands />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Offers />
        <ContactSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      {/* <FloatingButtons /> */}
    </div>
  );
}
