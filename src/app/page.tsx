import Hero from "@/components/Hero";
import ExpertSection from "@/components/ExpertSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <ExpertSection />
        <ServicesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <CtaBanner />
        <Footer />
      </main>
    </div>
  );
}
