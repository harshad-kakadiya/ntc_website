import Image from "next/image";
import type { StaticImageData } from "next/image";
import itServiceDeskKeyFeaturesBg from "@/assets/Your-Dedicated-IT/30776db976d1d70c7c2607876951c82bef2623b3.jpg";

const IT_SERVICE_DESK_FEATURES = [
  {
    lines: ["24/7 Help Desk", "Availability"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        <rect x="9.5" y="8" width="5" height="4" rx="0.8" strokeWidth="1.2" />
        <text x="12" y="11.2" textAnchor="middle" fill="white" fontSize="3" fontFamily="system-ui,sans-serif" fontWeight="600">24</text>
      </svg>
    ),
  },
  {
    lines: ["Rapid Incident", "Resolution"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <circle cx="13" cy="9" r="3" strokeWidth="1.2" />
        <path d="M15 7l2.5 2.5" strokeWidth="1.2" />
        <circle cx="13.5" cy="9" r="0.8" fill="white" stroke="none" />
        <path d="M6 15.5h3M10.5 15.5h3M15 15.5h3" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    lines: ["Multi-Channel Support", "(phone, email, chat)"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4v2M12 18v2M6.34 6.34l1.42 1.42M16.24 16.24l1.42 1.42M4 12h2M18 12h2M6.34 17.66l-1.42 1.42M16.24 7.76l-1.42-1.42" />
        <path d="M12 8l1.5 1.5L12 11l-1.5-1.5" />
        <path d="M9 12l2 2 4-4" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const EUC_ENGINEER_FEATURES = [
  {
    lines: ["Device & Workspace", "Management"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    lines: ["Secure Access", "& Identity"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l3 3 6-6" />
      </svg>
    ),
  },
  {
    lines: ["Virtual Desktop", "& Applications"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    ),
  },
  {
    lines: ["Endpoint Security", "& Compliance"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    lines: ["Ongoing Support", "& Optimization"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4v2M12 18v2M4.93 4.93l1.42 1.42M17.66 17.66l1.42 1.42M4 12h2M18 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.42-1.42" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 9v3l2 2" />
      </svg>
    ),
  },
];

const MODERN_WORKPLACE_FEATURES = [
  {
    lines: ["Cloud-Based Collaboration", "Tools"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    lines: ["Secure Remote", "Access"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    lines: ["Unified", "Communications"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    lines: ["Seamless Integration with", "Existing Systems"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    lines: ["Scalable Solutions", "for Growth"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v4M12 18v4M4 12h4M18 12h4" />
        <path d="M12 8l2 2 2-2" />
      </svg>
    ),
  },
];

const API_DEVELOPMENT_FEATURES = [
  {
    lines: ["Custom API Design", "& Development"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4v2M12 18v2M6.34 6.34l1.42 1.42M16.24 16.24l1.42 1.42M4 12h2M18 12h2M6.34 17.66l-1.42 1.42M16.24 7.76l-1.42-1.42" />
        <path d="M12 8l1.5 1.5L12 11l-1.5-1.5" />
        <path d="M13 4l-2 8 2 2 2-2-2-8" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    lines: ["Secure and Scalable", "Solutions"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <rect x="9" y="10" width="6" height="5" rx="1" />
      </svg>
    ),
  },
  {
    lines: ["Seamless Integration with", "Third-Party Services"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
        <path d="M8 12a4 4 0 0 1 8 0" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    lines: ["Comprehensive Documentation", "& Support"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        <path d="M12 19v-4" />
      </svg>
    ),
  },
  {
    lines: ["Rapid Deployment", "& Maintenance"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
        <path d="M9 12l6-3" />
      </svg>
    ),
  },
];

const VENDOR_MANAGEMENT_FEATURES = [
  {
    lines: ["Controlled Vendor Data", "Management"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4v2M12 18v2M6.34 6.34l1.42 1.42M16.24 16.24l1.42 1.42M4 12h2M18 12h2M6.34 17.66l-1.42 1.42M16.24 7.76l-1.42-1.42" />
        <path d="M12 8l1.5 1.5L12 11l-1.5-1.5" />
        <path d="M18 8 A6 6 0 0 1 18 20" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
  {
    lines: ["Real-Time Risk", "Assessment"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 2 5-6" />
        <path d="M18 10v4" />
      </svg>
    ),
  },
  {
    lines: ["Compliance & Security", "Monitoring"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M12 18v4" />
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    lines: ["Customizable Reporting", "& Alerts"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    lines: ["Seamless Integration with", "Existing Systems"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
];

const CYBER_SECURITY_FEATURES = [
  {
    lines: ["Interactive Training", "Modules"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        <path d="M8 8h.01M8 12h.01M12 8h.01M12 12h.01" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    lines: ["Real-World Scenarios", "& Simulations"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="3.5" />
        <path d="M8 4.5v1M8 11.5v1M4.5 8h1M11.5 8h1M6.2 6.2l.7.7M9.1 9.1l.7.7M6.2 9.8l.7-.7M9.1 6.9l.7-.7" />
        <circle cx="16" cy="16" r="3.5" />
        <path d="M16 12.5v1M16 19.5v1M12.5 16h1M19.5 16h1M14.2 14.2l.7.7M17.1 17.1l.7.7M14.2 17.8l.7-.7M17.1 14.9l.7-.7" />
        <path d="M10 10l4 4" />
      </svg>
    ),
  },
  {
    lines: ["Customizable Programs", "to Fit Your Needs"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3" />
        <circle cx="7" cy="16" r="2.5" />
        <circle cx="17" cy="16" r="2.5" />
        <path d="M12 11v2M10 14l2 2 2-2" />
      </svg>
    ),
  },
  {
    lines: ["Measurable Learning", "Outcomes"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 14v4M11 10v8M15 6v12M19 2v16" />
      </svg>
    ),
  },
  {
    lines: ["Ongoing Support", "& Updates"],
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M16 11h4l2 4-2 4h-4v-8z" />
        <path d="M8 23v-4M10 19h4" />
      </svg>
    ),
  },
];

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
    defaultBg: itServiceDeskKeyFeaturesBg,
  },
  "euc-engineer": {
    features: EUC_ENGINEER_FEATURES,
    defaultBg: itServiceDeskKeyFeaturesBg,
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
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px]">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          {title}
        </h2>

        <div
          className="relative mt-8 w-full overflow-hidden rounded-2xl shadow-xl"
          style={{ aspectRatio: "1200 / 539" }}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src={bgSrc}
              alt={backgroundImageAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1280px) 100vw, 1200px"
              priority={false}
            />
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 z-10 h-[48%] min-h-[200px] sm:min-h-[180px] bg-[#1e3a5f]/85"
            style={{
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
            aria-hidden
          />

          <div className="absolute inset-x-0 bottom-6 z-20 flex flex-wrap justify-center gap-4 px-4 sm:gap-6 sm:px-6 lg:gap-8 lg:px-8">
            {features.map((feature) => (
              <div
                key={feature.lines[0]}
                className="flex min-w-0 max-w-[200px] flex-col items-center text-center"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#7eb8e0] sm:h-[3.25rem] sm:w-[3.25rem]">
                  {feature.icon}
                </div>
                <div className="mt-2 space-y-0.5 sm:mt-2.5">
                  {feature.lines.map((line) => (
                    <p
                      key={line}
                      className="text-xs font-medium leading-tight text-white sm:text-sm"
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
    </section>
  );
}
