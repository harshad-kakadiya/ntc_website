import type { StaticImageData } from "next/image";
import itServiceDeskHero from "@/assets/Your-Dedicated-IT/30776db976d1d70c7c2607876951c82bef2623b3.jpg";
import modernWorkplaceHero from "@/assets/ServicasePage/servicesheroimageone.png";

export type ServiceHeroContent = {
  title: string;
  tagline: string;
  description: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
};

const serviceHeroContent: Record<string, ServiceHeroContent> = {
  "it-service-desk": {
    title: "Your Dedicated IT Service Desk Partner",
    tagline:
      "Delivering prompt, efficient, and effective support for your business.",
    description:
      "At NTC, our IT Service Desk is designed to ensure minimal downtime and maximum productivity. Our team is on call 24/7, offering support that's proactive, personalized, and reliable.",
    imageSrc: itServiceDeskHero,
    imageAlt:
      "Modern computer lab or office with desks, monitors, and natural light",
  },
  "modern-workplace": {
    title: "Revolutionize the Way You Work",
    tagline: "Transform your office into a dynamic, digital workplace.",
    description:
      "NTC's Modern Workplace solutions are tailored to boost productivity, enhance collaboration, and streamline operations to benefit your organization.",
    imageSrc: modernWorkplaceHero,
    imageAlt: "Modern office space with desks, green chairs, computer monitors, and blue carpet",
  },
  "euc-engineer": {
    title: "EUC Engineer",
    tagline: "Empowering end-user computing with precision engineering.",
    description:
      "Our EUC specialists deliver robust end-user computing solutions so your people can work securely and efficiently on any device.",
    imageSrc: "/services-hero.png",
    imageAlt: "End-user computing and workplace technology",
  },
  "api-development": {
    title: "Unlock the Power of Integration",
    tagline: "Custom API solutions to streamline and enhance your operations.",
    description:
      "In today's digital landscape, APIs are the backbone of connectivity. NTC specializes in designing and building APIs that integrate your systems, automate workflows, and unlock the full value of your data.",
    imageSrc: modernWorkplaceHero,
    imageAlt: "Modern open-plan office with desks, multiple monitors, and green ergonomic chairs",
  },
  "vendor-management": {
    title: "Simplify & Secure Your Vendor Ecosystem",
    tagline:
      "Leverage Upguard's powerful vendor management tools for enhanced control and compliance.",
    description:
      "Managing vendors across complex, multi-tier ecosystems is challenging. NTC Vendor Management services provide an elegant, precise, and comprehensive approach to control your vendor ecosystem, ensuring compliance and minimizing risk.",
    imageSrc: modernWorkplaceHero,
    imageAlt:
      "Modern open-plan office with desks, monitors, and office chairs",
  },
  "cyber-security-training": {
    title: "Building a Culture of Cyber Security",
    tagline: "Comprehensive training programs designed to safeguard your business.",
    description:
      "Our cybersecurity awareness training equips your team with the knowledge and skills to identify threats, follow best practices, and protect your organisation. We deliver engaging, up-to-date content that fits your industry and culture.",
    imageSrc: modernWorkplaceHero,
    imageAlt: "Modern office space with desks, computer monitors displaying data visualisations",
  },
};

const serviceTitles: Record<string, string> = {
  "it-service-desk": "IT Service Desk",
  "modern-workplace": "Modern Workplace",
  "euc-engineer": "EUC Engineer",
  "api-development": "API Development",
  "vendor-management": "Vendor Management (Upguard)",
  "cyber-security-training": "Cyber Security",
};

export function getServiceHeroContent(slug: string): ServiceHeroContent | null {
  return serviceHeroContent[slug] ?? null;
}

export function getServiceTitle(slug: string): string | null {
  return serviceTitles[slug] ?? null;
}

export function isValidServiceSlug(slug: string): boolean {
  return slug in serviceHeroContent;
}
