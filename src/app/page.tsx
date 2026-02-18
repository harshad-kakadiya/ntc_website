import Hero from "@/components/Hero";
import ExpertSection from "@/components/ExpertSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
 
import { servicesTheme } from "@/config/serviceTheme";
import { services } from "@/app/data/services";
import ServicesGrid from "@/components/ServicesGrid";

export default function Home() {
    const description =
        "At NTC, we offer a comprehensive suite of IT solutions designed to meet the evolving needs of modern businesses. Whether you’re looking for robust IT support, innovative workplace solutions, or enhanced cybersecurity, we have the expertise to help you succeed.";

    return (
        <div className="min-h-screen bg-white">
            <main>
                <Hero />
                <ExpertSection />
                <ServicesSection
                    theme={servicesTheme}
                    title="Our Services"
                    description={description}
                    ctaText="Learn More"
                    ctaHref="/services"
                    services={services}
                />
                <ServicesGrid bgColor={"#009DDA"} paddingX={'px-6'} isButton={false}/>
                <div className="mt-24">
                    <WhyChooseSection />
                </div>
                <TestimonialsSection />
                <CtaBanner />
                <Footer />
            </main>
        </div>
    );
}
