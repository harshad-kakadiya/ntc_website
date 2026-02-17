import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ServiceHero from "@/components/ServiceHero";
import KeyFeaturesSection from "@/components/KeyFeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

import HowItWorksSection, {
    consultationIcon,
    designIcon,
    developmentIcon,
    deploymentIcon,
    connectIcon,
    diagnoseIcon,
    resolveIcon,
} from "@/components/HowItWorksSection";
import ModernWorkplaceSection from "@/components/ModernWorkplaceSection";
import EucEngineerSection from "@/components/EucEngineerSection";
import VendorManagementSection from "@/components/VendorManagementSection";
import CyberSecurityTrainingSection from "@/components/CyberSecurityTrainingSection";

import itImg from "@/assets/Your-Dedicated-IT/img 3.png";
import apiImg from "@/assets/Your-Dedicated-IT/img 3.png"; // ✅ change if your filename is different

import {
    getServiceHeroContent,
    getServiceTitle,
    isValidServiceSlug,
} from "@/lib/services";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    if (!isValidServiceSlug(slug)) return { title: "Service | NTC" };

    const title = getServiceTitle(slug);
    return {
        title: `${title ?? "Service"} | NTC — National Technology Consortium`,
        description: `Learn about ${title} from NTC. IT solutions and support for modern businesses.`,
    };
}

export function generateStaticParams() {
    return [
        { slug: "it-service-desk" },
        { slug: "api-development" },
        { slug: "modern-workplace" },
        { slug: "euc-engineer" },
        { slug: "vendor-management" },
        { slug: "cyber-security-training" },
    ];
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;

    if (!isValidServiceSlug(slug)) notFound();

    const content = getServiceHeroContent(slug);
    if (!content) notFound();

    return (
        <div className="min-h-screen bg-section-bg">
            <main>
                <ServiceHero
                    title={content.title}
                    tagline={content.tagline}
                    description={content.description}
                    imageSrc={content.imageSrc}
                    imageAlt={content.imageAlt}
                />

                <KeyFeaturesSection slug={slug} />

                {/* Our Approach section – Modern Workplace, EUC Engineer, Vendor Management, Cyber Security */}
                {slug === "modern-workplace" && <ModernWorkplaceSection />}
                {slug === "euc-engineer" && <EucEngineerSection />}
                {slug === "vendor-management" && <VendorManagementSection />}
                {slug === "cyber-security-training" && <CyberSecurityTrainingSection />}

                {/* ✅ IT SERVICE DESK – uses icon images from @/assets/icon (Connect, Diagnose, Resolve) */}
                {slug === "it-service-desk" && (
                    <HowItWorksSection
                        title="How It Works"
                        subtitle="Our process is simple and effective"
                        imageSrc={itImg}
                        imageAlt="IT Service Desk"
                        steps={[
                            {
                                title: "Connect",
                                desc: "Reach out via our multi-channel support options.",
                                icon: connectIcon,
                            },
                            {
                                title: "Diagnose",
                                desc: "Our experts assess and resolve your issue promptly.",
                                icon: diagnoseIcon,
                            },
                            {
                                title: "Resolve",
                                desc: "We implement long-term solutions to prevent future disruptions.",
                                icon: resolveIcon,
                            },
                        ]}
                    />
                )}

                {/* ✅ API DEVELOPMENT – uses icon images from @/assets/icon */}
                {slug === "api-development" && (
                    <HowItWorksSection
                        title="Development Process"
                        subtitle="Our API development process is agile and collaborative"
                        imageSrc={apiImg}
                        imageAlt="API Development"
                        steps={[
                            {
                                title: "Consultation",
                                desc: "Understanding your business needs.",
                                icon: consultationIcon,
                            },
                            {
                                title: "Design",
                                desc: "Crafting a bespoke API architecture.",
                                icon: designIcon,
                            },
                            {
                                title: "Development",
                                desc: "Building, testing, and refining the API.",
                                icon: developmentIcon,
                            },
                            {
                                title: "Deployment",
                                desc: "Seamless integration and ongoing support.",
                                icon: deploymentIcon,
                            },
                        ]}
                    />
                )}

                <TestimonialsSection />
                <CtaBanner />
            </main>

            <Footer />
        </div>
    );
}
