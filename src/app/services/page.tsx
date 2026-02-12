import type { Metadata } from "next";
import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseSectionBlue from "@/components/WhyChooseSectionBlue";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Services | NTC — National Technology Consortium",
  description:
    "Comprehensive IT solutions: Service Desk, Modern Workplace, EUC, API Development, Vendor Management, Cyber Security Training.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <ServicesHero />
        <ServicesGrid />
        <WhyChooseSectionBlue />
        <TestimonialsSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
