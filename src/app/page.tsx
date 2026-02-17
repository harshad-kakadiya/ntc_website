import Hero from "@/components/Hero";
import ExpertSection from "@/components/ExpertSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

import { servicesTheme } from "@/config/serviceTheme";
import { services } from "@/app/data/services";

export default function Home() {
  const description =
    "At NTC, we offer a comprehensive suite of IT solutions designed to meet the evolving needs of modern businesses.";

  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <ExpertSection />

        <ServicesSection
          theme={servicesTheme}
          description={description}
          services={services}
        />

        <WhyChooseSection />
        <TestimonialsSection />
        <CtaBanner />
        <Footer />
      </main>
    </div>
  );
}
