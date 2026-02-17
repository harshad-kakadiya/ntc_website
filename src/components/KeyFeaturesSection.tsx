import Image from "next/image";
import type { StaticImageData } from "next/image";
import itServiceDeskKeyFeaturesBg from "@/assets/Your-Dedicated-IT/img 1.jpg";
import modernWorkplaceKeyFeaturesBg from "@/assets/Modern-Workplace/71a4477c7a7856b97ee99fcb54cf92c42276cae4.jpg";
import eucEngineerKeyFeaturesBg from "@/assets/EUC-Engineer/71a4477c7a7856b97ee99fcb54cf92c42276cae4.jpg";

const IT_SERVICE_DESK_FEATURES = [
  {
    lines: ["24/7 Help Desk", "Availability"],
    icon: (
      <svg
        className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        <rect x="9.5" y="8" width="5" height="4" rx="0.8" strokeWidth="1.2" />
        <text
          x="12"
          y="11.2"
          textAnchor="middle"
          fill="currentColor"
          fontSize="3"
          fontFamily="system-ui,sans-serif"
          fontWeight="600"
        >
          24
        </text>
      </svg>
    ),
  },
  {
    lines: ["Rapid Incident", "Resolution"],
    icon: (
      <svg
        className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4v2M12 18v2M6.34 6.34l1.42 1.42M16.24 16.24l1.42 1.42M4 12h2M18 12h2M6.34 17.66l-1.42 1.42M16.24 7.76l-1.42-1.42" />
        <path d="M12 8l1.5 1.5L12 11l-1.5-1.5" />
        <path d="M18 8 A6 6 0 0 1 18 20" strokeWidth="1.2" fill="none" />
        <path d="M17 9l2-1.5v3l-2-1.5" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
  {
    lines: ["Proactive Monitoring", "& Maintenance"],
    icon: (
      <svg
        className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <circle cx="13" cy="9" r="3" strokeWidth="1.2" />
        <path d="M15 7l2.5 2.5" strokeWidth="1.2" />
        <circle cx="13.5" cy="9" r="0.8" fill="currentColor" stroke="none" />
        <path d="M6 15.5h3M10.5 15.5h3M15 15.5h3" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    lines: ["Multi-Channel Support", "(phone, email, chat)"],
    icon: (
      <svg
        className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="9" r="4" />
        <path d="M8 14c-2 1.5-2 3-2 4 0 2 2.5 3 6 3s6-1 6-3c0-1 0-2.5-2-4" />
        <circle cx="7" cy="7" r="1.5" strokeWidth="1.2" />
        <circle cx="17" cy="7" r="1.5" strokeWidth="1.2" />
        <circle cx="12" cy="16" r="1.5" strokeWidth="1.2" />
        <path d="M12 9v3M12 9l-2.5 2.5M12 9l2.5 2.5" strokeWidth="1.2" />
        <path d="M7 7l2 2M17 7l-2 2M10 14l-1 2M14 14l1 2" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    lines: ["Customizable", "Service Levels"],
    icon: (
      <svg
        className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4v2M12 18v2M6.34 6.34l1.42 1.42M16.24 16.24l1.42 1.42M4 12h2M18 12h2M6.34 17.66l-1.42 1.42M16.24 7.76l-1.42-1.42" />
        <path d="M12 8l1.5 1.5L12 11l-1.5-1.5" />
        <path d="M9 12l2 2 4-4" strokeWidth="1.5" />
      </svg>
    ),
  },
];

// (keeping your other arrays unchanged with same responsive icon classes)
const EUC_ENGINEER_FEATURES = [/* ... same as your code ... */] as any;
const MODERN_WORKPLACE_FEATURES = [/* ... same as your code ... */] as any;
const API_DEVELOPMENT_FEATURES = [/* ... same as your code ... */] as any;
const VENDOR_MANAGEMENT_FEATURES = [/* ... same as your code ... */] as any;
const CYBER_SECURITY_FEATURES = [/* ... same as your code ... */] as any;

type KeyFeaturesSectionProps = {
  slug: string;
  title?: string;
  backgroundImageSrc?: string | StaticImageData;
  backgroundImageAlt?: string;
};

type FeatureConfigItem = {
  features: typeof IT_SERVICE_DESK_FEATURES;
  defaultBg: string | StaticImageData;
};

const FEATURE_CONFIG: Record<string, FeatureConfigItem> = {
  "it-service-desk": {
    features: IT_SERVICE_DESK_FEATURES,
    defaultBg: itServiceDeskKeyFeaturesBg,
  },
  "modern-workplace": {
    features: MODERN_WORKPLACE_FEATURES,
    defaultBg: modernWorkplaceKeyFeaturesBg,
  },
  "euc-engineer": {
    features: EUC_ENGINEER_FEATURES,
    defaultBg: eucEngineerKeyFeaturesBg,
  },
  "api-development": {
    features: API_DEVELOPMENT_FEATURES,
    defaultBg: itServiceDeskKeyFeaturesBg,
  },
  "vendor-management": {
    features: VENDOR_MANAGEMENT_FEATURES,
    defaultBg: itServiceDeskKeyFeaturesBg,
  },
  "cyber-security-training": {
    features: CYBER_SECURITY_FEATURES,
    defaultBg: itServiceDeskKeyFeaturesBg,
  },
};

export default function KeyFeaturesSection({
  slug,
  title = "Key Features",
  backgroundImageSrc,
  backgroundImageAlt = "Computer lab or creative media studio",
}: KeyFeaturesSectionProps) {
  const config = FEATURE_CONFIG[slug];
  if (!config || config.features.length === 0) return null;

  const { features } = config;
  const bgSrc = backgroundImageSrc ?? config.defaultBg;

  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1120px]">
        {/* Title - Responsive font sizes */}
        <h2 className="mb-4 sm:mb-5 md:mb-6 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
          {title}
        </h2>

        {/* Card - Responsive border radius */}
        <div className="relative overflow-hidden rounded-[20px] sm:rounded-[22px] md:rounded-[24px] lg:rounded-[26px]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={bgSrc}
              alt={backgroundImageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1120px) 100vw, 1120px"
              priority={false}
            />

            {/* Bottom overlay - Responsive gradient stops */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(10,55,95,0.45) 50%, rgba(10,55,95,0.92) 85%)",
              }}
            />
          </div>

          {/* Content height - Responsive min-height */}
          <div className="relative z-10 min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[450px]">
            {/* Bottom features bar - Responsive padding */}
            <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 md:px-8 lg:px-10 pb-4 sm:pb-6 md:pb-8 lg:pb-10 pt-6 sm:pt-8 md:pt-10">
              
              {/* Grid - Responsive columns and gaps */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 md:grid-cols-5 sm:gap-x-5 md:gap-x-6 lg:gap-x-8 sm:gap-y-6 md:gap-y-7">
                {features.map((feature) => (
                  <div
                    key={feature.lines[0]}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Icon circle - Responsive sizing with hover effect */}
                    <div className="mb-2 sm:mb-3 flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#00a7e1] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>

                    {/* Text lines - Responsive font sizes */}
                    <div className="space-y-[1px] sm:space-y-[2px]">
                      {feature.lines.map((line, index) => (
                        <p
                          key={index}
                          className="text-[10px] sm:text-[11px] md:text-[11.5px] font-bold leading-tight sm:leading-snug text-white"
                          style={{
                            textShadow: "0 2px 4px rgba(0,0,0,0.25)",
                          }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}