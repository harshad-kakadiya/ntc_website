import Image from "next/image";
import type { StaticImageData } from "next/image";

import itServiceDeskKeyFeaturesBg from "@/assets/Your-Dedicated-IT/img 1.jpg";
import modernWorkplaceKeyFeaturesBg from "@/assets/Modern-Workplace/71a4477c7a7856b97ee99fcb54cf92c42276cae4.jpg";
import eucEngineerKeyFeaturesBg from "@/assets/EUC-Engineer/71a4477c7a7856b97ee99fcb54cf92c42276cae4.jpg";

/* ✅ ICON IMPORTS (30 total) */
/* Page 1 (IT Service Desk) */
import ITSDIcon1 from "@/assets/icon/05f8e651e7283d3a3aceeb7e45a5a0d6e9e86351.png";
import ITSDIcon2 from "@/assets/icon/980f1947eae47638e658998a93a01c250c80eac7.png";
import ITSDIcon3 from "@/assets/icon/ad1993e79518204df4302f3081ab64573b9a2872.png";
import ITSDIcon4 from "@/assets/icon/fc01a9c742a5e42d5d95d74b5017ac8e8bf8feec.png";
import ITSDIcon5 from "@/assets/icon/30d62898f18bf2a881b56208458c5170a19e6bda.png";

/* Page 2 (Modern Workplace) */
import MWIcon1 from "@/assets/icon/358469cd92806ef045e36e34244051f945301db2.png";
import MWIcon2 from "@/assets/icon/914677415b7bc310b0a4ae069493ad191e60f25d.png";
import MWIcon3 from "@/assets/icon/ec5a35f4a8cf0aff020c624ece9979e3058de6b4.png";
import MWIcon4 from "@/assets/icon/293d76bdff621933a6e7145212afbebd3e034b32.png";
import MWIcon5 from "@/assets/icon/e3630c06c6dfe8da6dda7a6e0816ff44791bcbb2.png";

/* Page 3 (EUC Engineer) */
import EUCIcon1 from "@/assets/icon/ec282f52604d724c3b8d931ae9086931a19db3da.png";
import EUCIcon2 from "@/assets/icon/88e7103daa793af7e32679b84ae04e79c70f2df1.png";
import EUCIcon3 from "@/assets/icon/cbd67288f72799eebdee9ae79410686dc07d4c97.png";
import EUCIcon4 from "@/assets/icon/d8bfa298ff2802ed9e90854307718094675095cc.png";
import EUCIcon5 from "@/assets/icon/421829d5cee566eea21ca24409d258d6724493f8.png";

/* Page 4 (API Development) */
import APIIcon1 from "@/assets/icon/73f0bc1349aeea7e9aacaf7cff69ecc928dab484.png";
import APIIcon2 from "@/assets/icon/4d3287a222962c0fd05a56bebeea2cb38773b373.png";
import APIIcon3 from "@/assets/icon/cbd67288f72799eebdee9ae79410686dc07d4c97.png";
import APIIcon4 from "@/assets/icon/b8e9d632f6cac26d542addc8dbc7171895aa4f38.png";
import APIIcon5 from "@/assets/icon/4c886cf4940b3d0bf56dae7a2cb483f3e1621be4.png";

/* Page 5 (Vendor Management) */
import VMIcon1 from "@/assets/icon/e07bf1c8fb4e40b719a76cb76b1c5a499fbfb6fa.png";
import VMIcon2 from "@/assets/icon/b00cc3426112af331139e4ffa55728ab013e3f48.png";
import VMIcon3 from "@/assets/icon/67886721dcd24ee04c5a8f1a33c0acb991b31baf.png";
import VMIcon4 from "@/assets/icon/e6c6519154e83f3faff2437314553307fe592e8b.png";
import VMIcon5 from "@/assets/icon/293d76bdff621933a6e7145212afbebd3e034b32.png";

/* Page 6 (Cyber Security Training) */
import CSIcon1 from "@/assets/icon/528d7aeb9e34440c00a536b5e9037d48a256c3ed.png";
import CSIcon2 from "@/assets/icon/af4fad56ebea669767bf5c8c79c157a5ee219b6b.png";
import CSIcon3 from "@/assets/icon/cbd67288f72799eebdee9ae79410686dc07d4c97.png";
import CSIcon4 from "@/assets/icon/d8bfa298ff2802ed9e90854307718094675095cc.png";
import CSIcon5 from "@/assets/icon/421829d5cee566eea21ca24409d258d6724493f8.png";

type FeatureItem = {
    lines: string[];
    iconSrc: StaticImageData;
};

const IT_SERVICE_DESK_FEATURES: FeatureItem[] = [
    { lines: ["24/7 Help Desk", "Availability"], iconSrc: ITSDIcon1 },
    { lines: ["Rapid Incident", "Resolution"], iconSrc: ITSDIcon2 },
    { lines: ["Proactive Monitoring", "& Maintenance"], iconSrc: ITSDIcon3 },
    { lines: ["Multi-Channel Support", "(phone, email, chat)"], iconSrc: ITSDIcon4 },
    { lines: ["Customizable", "Service Levels"], iconSrc: ITSDIcon5 },
];

const MODERN_WORKPLACE_FEATURES: FeatureItem[] = [
    { lines: ["Cloud-Based Collaboration", "Tools"], iconSrc: MWIcon1 },
    { lines: ["Secure Remote", "Access"], iconSrc: MWIcon2 },
    { lines: ["Unified", "Communications"], iconSrc: MWIcon3 },
    { lines: ["Seamless Integration with", "Existing Systems"], iconSrc: MWIcon4 },
    { lines: ["Scalable Solutions", "for Growth"], iconSrc: MWIcon5 },
];

const EUC_ENGINEER_FEATURES: FeatureItem[] = [
    { lines: ["Device & Workspace", "Management"], iconSrc: EUCIcon1 },
    { lines: ["Secure Access", "& Identity"], iconSrc: EUCIcon2 },
    { lines: ["Virtual Desktop", "& Applications"], iconSrc: EUCIcon3 },
    { lines: ["Endpoint Security", "& Compliance"], iconSrc: EUCIcon4 },
    { lines: ["Ongoing Support", "& Optimization"], iconSrc: EUCIcon5 },
];

const API_DEVELOPMENT_FEATURES: FeatureItem[] = [
    { lines: ["Custom API Design", "& Development"], iconSrc: APIIcon1 },
    { lines: ["Secure and Scalable", "Solutions"], iconSrc: APIIcon2 },
    { lines: ["Seamless Integration with", "Third-Party Services"], iconSrc: APIIcon3 },
    { lines: ["Comprehensive Documentation", "& Support"], iconSrc: APIIcon4 },
    { lines: ["Rapid Deployment", "& Maintenance"], iconSrc: APIIcon5 },
];

const VENDOR_MANAGEMENT_FEATURES: FeatureItem[] = [
    { lines: ["Controlled Vendor Data", "Management"], iconSrc: VMIcon1 },
    { lines: ["Real-Time Risk", "Assessment"], iconSrc: VMIcon2 },
    { lines: ["Compliance & Security", "Monitoring"], iconSrc: VMIcon3 },
    { lines: ["Customizable Reporting", "& Alerts"], iconSrc: VMIcon4 },
    { lines: ["Seamless Integration with", "Existing Systems"], iconSrc: VMIcon5 },
];

const CYBER_SECURITY_FEATURES: FeatureItem[] = [
    { lines: ["Interactive Training", "Modules"], iconSrc: CSIcon1 },
    { lines: ["Real-World Scenarios", "& Simulations"], iconSrc: CSIcon2 },
    { lines: ["Customizable Programs", "to Fit Your Needs"], iconSrc: CSIcon3 },
    { lines: ["Measurable Learning", "Outcomes"], iconSrc: CSIcon4 },
    { lines: ["Ongoing Support", "& Updates"], iconSrc: CSIcon5 },
];

type KeyFeaturesSectionProps = {
    slug: string;
    title?: string;
    backgroundImageSrc?: string | StaticImageData;
    backgroundImageAlt?: string;
};

type FeatureConfigItem = {
    features: FeatureItem[];
    defaultBg: string | StaticImageData;
};

const FEATURE_CONFIG: Record<string, FeatureConfigItem> = {
    "it-service-desk": { features: IT_SERVICE_DESK_FEATURES, defaultBg: itServiceDeskKeyFeaturesBg },
    "modern-workplace": { features: MODERN_WORKPLACE_FEATURES, defaultBg: modernWorkplaceKeyFeaturesBg },
    "euc-engineer": { features: EUC_ENGINEER_FEATURES, defaultBg: eucEngineerKeyFeaturesBg },
    "api-development": { features: API_DEVELOPMENT_FEATURES, defaultBg: itServiceDeskKeyFeaturesBg },
    "vendor-management": { features: VENDOR_MANAGEMENT_FEATURES, defaultBg: itServiceDeskKeyFeaturesBg },
    "cyber-security-training": { features: CYBER_SECURITY_FEATURES, defaultBg: itServiceDeskKeyFeaturesBg },
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
        <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto w-full max-w-[1440px]">
                <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl mb-8">
                    {title}
                </h2>

                <div className="relative rounded-3xl overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={bgSrc}
                            alt={backgroundImageAlt}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1440px) 100vw, 1440px"
                            priority={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-blue-900/50 to-[#1e3a5f]/95" />
                    </div>

                    {/* Features */}
                    <div className="relative z-10 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-end">
                        <div className="w-full px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
                            <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 sm:gap-x-12 lg:gap-x-16 xl:gap-x-20">
                                {features.map((feature) => (
                                    <div
                                        key={feature.lines.join("-")}
                                        className="flex flex-col items-center text-center max-w-[180px]"
                                    >
                                        {/* Icon Circle */}
                                        <div className="flex h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 shrink-0 items-center justify-center rounded-full bg-[#00a7e1] text-white shadow-xl mb-4 sm:mb-5">
                                            <Image
                                                src={feature.iconSrc}
                                                alt={feature.lines[0]}
                                                width={44}
                                                height={44}
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* Text */}
                                        <div className="space-y-1">
                                            {feature.lines.map((line) => (
                                                <p
                                                    key={line}
                                                    className="text-sm font-bold leading-snug text-white sm:text-base lg:text-lg"
                                                    style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
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
