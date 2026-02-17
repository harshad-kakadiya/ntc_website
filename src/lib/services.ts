import type { StaticImageData } from "next/image";

import itServiceDeskHero from "@/assets/Your-Dedicated-IT/it-service-desk-hero.jpg";
import modernWorkplaceHero from "@/assets/ServicasePage/servicesheroimageone.png";
import vendorManagementHero from "@/assets/vendor-management/b09a44886fa491642930f606962bef865e1967f3.png";
import cyberSecurityHero from "@/assets/Corporat-Cyber/9fd82f4e9d8e0a163f260f12a86c556f89d3913d.jpg";

export type ServiceSlug =
    | "it-service-desk"
    | "modern-workplace"
    | "euc-engineer"
    | "api-development"  
    | "vendor-management"
    | "cyber-security-training";

export type ServiceHeroContent = {
    title: string;
    tagline: string;
    description: string;
    imageSrc: StaticImageData;
    imageAlt: string;
};

export const serviceHeroContent: Record<ServiceSlug, ServiceHeroContent> = {
    "it-service-desk": {
        title: "Your Dedicated IT Service Desk Partner",
        tagline: "Delivering prompt, efficient, and effective support for your business.",
        description:
            "At NTC, our IT Service Desk is designed to ensure minimal downtime and maximum productivity. Our team is on call 24/7, offering support that's proactive, personalized, and reliable.",
        imageSrc: itServiceDeskHero,
        imageAlt: "Modern computer lab or office with desks, monitors, and natural light",
    },

    "modern-workplace": {
        title: "Revolutionize the Way You Work",
        tagline: "Transform your office into a dynamic, digital workplace.",
        description:
            "NTC's Modern Workplace solutions are tailored to boost productivity, enhance collaboration, and streamline operations to benefit your organization.",
        imageSrc: modernWorkplaceHero,
        imageAlt:
            "Modern office space with desks, green chairs, computer monitors, and blue carpet",
    },

    // ✅ FIX: EUC same existing image use karu chu (no missing import)
    "euc-engineer": {
        title: "EUC Engineer",
        tagline: "Empowering end-user computing with precision engineering.",
        description:
            "Our EUC specialists deliver robust end-user computing solutions so your people can work securely and efficiently on any device.",
        imageSrc: modernWorkplaceHero,
        imageAlt: "End-user computing and workplace technology",
    },

    "api-development": {
        title: "Unlock the Power of Integration",
        tagline: "Custom API solutions to streamline and enhance your operations.",
        description:
            "In today's digital landscape, APIs are the backbone of connectivity. NTC specializes in designing and building APIs that integrate your systems, automate workflows, and unlock the full value of your data.",
        imageSrc: modernWorkplaceHero,
        imageAlt:
            "Modern open-plan office with desks, multiple monitors, and green ergonomic chairs",
    },

    "vendor-management": {
        title: "Simplify & Secure Your Vendor Ecosystem",
        tagline: "Leverage Upguard's powerful vendor management tools for enhanced control and compliance.",
        description:
            "Managing vendors across complex, multi-tier ecosystems is challenging. NTC Vendor Management services provide an elegant, precise, and comprehensive approach to control your vendor ecosystem, ensuring compliance and minimizing risk.",
        imageSrc: vendorManagementHero,
        imageAlt:
            "Modern office with long rows of desks, green chairs, and equipment boxes ready for deployment",
    },

    "cyber-security-training": {
        title: "Building a Culture of Cyber Security",
        tagline: "Comprehensive training programs designed to safeguard your business.",
        description:
            "Our cybersecurity awareness training equips your team with the knowledge and skills to identify threats, follow best practices, and protect your organisation. We deliver engaging, up-to-date content that fits your industry and culture.",
        imageSrc: cyberSecurityHero,
        imageAlt: "Cyber security training room with rows of monitors and workstations",
    },
};

export const serviceTitles: Record<ServiceSlug, string> = {
    "it-service-desk": "IT Service Desk",
    "modern-workplace": "Modern Workplace",
    "euc-engineer": "EUC Engineer",
    "api-development": "API Development",
    "vendor-management": "Vendor Management (Upguard)",
    "cyber-security-training": "Cyber Security",
};

export function getServiceHeroContent(slug: string): ServiceHeroContent | null {
    if (!(slug in serviceHeroContent)) return null;
    return serviceHeroContent[slug as ServiceSlug];
}

export function getServiceTitle(slug: string): string | null {
    if (!(slug in serviceTitles)) return null;
    return serviceTitles[slug as ServiceSlug];
}

export function isValidServiceSlug(slug: string): slug is ServiceSlug {
    return slug in serviceHeroContent;
}
