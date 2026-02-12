import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceHero from "@/components/ServiceHero";
import KeyFeaturesSection from "@/components/KeyFeaturesSection";
import OurApproachSection from "@/components/OurApproachSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
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
    { slug: "modern-workplace" },
    { slug: "euc-engineer" },
    { slug: "api-development" },
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
    <div className="min-h-screen bg-white">
      <main>
        <ServiceHero
          title={content.title}
          tagline={content.tagline}
          description={content.description}
          imageSrc={content.imageSrc}
          imageAlt={content.imageAlt}
        />
        <KeyFeaturesSection slug={slug} />
        <OurApproachSection />
        <HowItWorksSection slug={slug} />
        <TestimonialsSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
