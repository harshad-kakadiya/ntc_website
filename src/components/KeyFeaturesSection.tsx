import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

import itServiceDeskKeyFeaturesBg from "@/assets/Your-Dedicated-IT/img 1.jpg";
import modernWorkplaceKeyFeaturesBg from "@/assets/Modern-Workplace/71a4477c7a7856b97ee99fcb54cf92c42276cae4.jpg";
import eucEngineerKeyFeaturesBg from "@/assets/EUC-Engineer/71a4477c7a7856b97ee99fcb54cf92c42276cae4.jpg";

// IT Service Desk icons
import itHelpDeskIcon from "@/assets/icon/05f8e651e7283d3a3aceeb7e45a5a0d6e9e86351.png";
import itRapidIncidentResolutionIcon from "@/assets/icon/980f1947eae47638e658998a93a01c250c80eac7.png";
import itProactiveMonitoringIcon from "@/assets/icon/ad1993e79518204df4302f3081ab64573b9a2872.png";
import itMultiChannelSupportIcon from "@/assets/icon/fc01a9c742a5e42d5d95d74b5017ac8e8bf8feec.png";
import itCustomizableServiceLevelsIcon from "@/assets/icon/30d62898f18bf2a881b56208458c5170a19e6bda.png";

// Modern Workplace icons
import cloudBasedCollaborationToolsIcon from "@/assets/icon/358469cd92806ef045e36e34244051f945301db2.png";
import secureRemoteAccessIcon from "@/assets/icon/914677415b7bc310b0a4ae069493ad191e60f25d.png";
import unifiedCommunicationsIcon from "@/assets/icon/ec5a35f4a8cf0aff020c624ece9979e3058de6b4.png";
import seamlessIntegrationIcon from "@/assets/icon/293d76bdff621933a6e7145212afbebd3e034b32.png";
import scalableSolutionsIcon from "@/assets/icon/e3630c06c6dfe8da6dda7a6e0816ff44791bcbb2.png";

// EUC Engineer icons
import customDesktopDeviceConfigurations from "@/assets/icon/ec282f52604d724c3b8d931ae9086931a19db3da.png";
import PerformanceOptimization from "@/assets/icon/88e7103daa793af7e32679b84ae04e79c70f2df1.png";
import TroubleshootingSupport from "@/assets/icon/cbd67288f72799eebdee9ae79410686dc07d4c97.png";
import userTrainingDocumentation from "@/assets/icon/d8bfa298ff2802ed9e90854307718094675095cc.png";
import scalableFutureProofSolutions from "@/assets/icon/421829d5cee566eea21ca24409d258d6724493f8.png";

// API Development icons
import customAPIDesignDevelopment from "@/assets/icon/73f0bc1349aeea7e9aacaf7cff69ecc928dab484.png";
import secureandScalableSolutions from "@/assets/icon/4d3287a222962c0fd05a56bebeea2cb38773b373.png";
import seamlessIntegrationwithThirdPartyServices from "@/assets/icon/cbd67288f72799eebdee9ae79410686dc07d4c97.png";
import comprehensiveDocumentationSupport from "@/assets/icon/b8e9d632f6cac26d542addc8dbc7171895aa4f38.png";
import rapidDeploymentMaintenance from "@/assets/icon/4c886cf4940b3d0bf56dae7a2cb483f3e1621be4.png";

// Vendor Management icons
import centralizedVendorDataManagement from "@/assets/icon/e07bf1c8fb4e40b719a76cb76b1c5a499fbfb6fa.png";
import realTimeRiskAssessment from "@/assets/icon/b00cc3426112af331139e4ffa55728ab013e3f48.png";
import complianceSecurityMonitoring from "@/assets/icon/67886721dcd24ee04c5a8f1a33c0acb991b31baf.png";
import customizableReportingAlerts from "@/assets/icon/e6c6519154e83f3faff2437314553307fe592e8b.png";
import seamlessIntegrationwithExistingSystems from "@/assets/icon/293d76bdff621933a6e7145212afbebd3e034b32.png";

// Cyber Security Training icons
import InteractiveTrainingModules from "@/assets/icon/528d7aeb9e34440c00a536b5e9037d48a256c3ed.png";
import RealWorldScenariosSimulations from "@/assets/icon/af4fad56ebea669767bf5c8c79c157a5ee219b6b.png";
import CustomisableProgramstoFitYourNeeds from "@/assets/icon/cbd67288f72799eebdee9ae79410686dc07d4c97.png";
import MeasurableLearningOutcomes from "@/assets/icon/d8bfa298ff2802ed9e90854307718094675095cc.png";
import OngoingSupportUpdates from "@/assets/icon/421829d5cee566eea21ca24409d258d6724493f8.png";

type FeatureItem = {
    lines: string[];
    icon?: ReactNode;
    iconImage?: StaticImageData;
    iconAlt?: string;
};

const IT_SERVICE_DESK_FEATURES: FeatureItem[] = [
    { lines: ["24/7 Help Desk", "Availability"], iconImage: itHelpDeskIcon, iconAlt: "24/7 Help Desk Availability" },
    { lines: ["Rapid Incident", "Resolution"], iconImage: itRapidIncidentResolutionIcon, iconAlt: "Rapid Incident Resolution" },
    { lines: ["Proactive Monitoring", "& Maintenance"], iconImage: itProactiveMonitoringIcon, iconAlt: "Proactive Monitoring & Maintenance" },
    { lines: ["Multi-Channel Support", "(phone, email, chat)"], iconImage: itMultiChannelSupportIcon, iconAlt: "Multi-Channel Support" },
    { lines: ["Customizable", "Service Levels"], iconImage: itCustomizableServiceLevelsIcon, iconAlt: "Customizable Service Levels" },
];

const MODERN_WORKPLACE_FEATURES: FeatureItem[] = [
    { lines: ["Cloud-Based Collaboration", "Tools"], iconImage: cloudBasedCollaborationToolsIcon, iconAlt: "Cloud-Based Collaboration Tools" },
    { lines: ["Secure Remote", "Access"], iconImage: secureRemoteAccessIcon, iconAlt: "Secure Remote Access" },
    { lines: ["Unified", "Communications"], iconImage: unifiedCommunicationsIcon, iconAlt: "Unified Communications" },
    { lines: ["Seamless Integration with", "Existing Systems"], iconImage: seamlessIntegrationIcon, iconAlt: "Seamless Integration with Existing Systems" },
    { lines: ["Scalable Solutions", "for Growth"], iconImage: scalableSolutionsIcon, iconAlt: "Scalable Solutions for Growth" },
];

const EUC_ENGINEER_FEATURES: FeatureItem[] = [
    { lines: ["Custom Desktop & Device", "Configurations"], iconImage: customDesktopDeviceConfigurations, iconAlt: "Custom Desktop & Device Configurations" },
    { lines: ["Performance", "Optimization"], iconImage: PerformanceOptimization, iconAlt: "Performance Optimization" },
    { lines: ["Troubleshooting", "Support"], iconImage: TroubleshootingSupport, iconAlt: "Troubleshooting Support" },
    { lines: ["User Training &", "Documentation"], iconImage: userTrainingDocumentation, iconAlt: "User Training & Documentation" },
    { lines: ["Scalable Future-Proof", "Solutions"], iconImage: scalableFutureProofSolutions, iconAlt: "Scalable Future-Proof Solutions" },
];

const API_DEVELOPMENT_FEATURES: FeatureItem[] = [
    { lines: ["Custom API Design", "& Development"], iconImage: customAPIDesignDevelopment, iconAlt: "Custom API Design & Development" },
    { lines: ["Secure and Scalable", "Solutions"], iconImage: secureandScalableSolutions, iconAlt: "Secure and Scalable Solutions" },
    { lines: ["Seamless Integration with", "Third-Party Services"], iconImage: seamlessIntegrationwithThirdPartyServices, iconAlt: "Integration with Third-Party Services" },
    { lines: ["Comprehensive Documentation", "& Support"], iconImage: comprehensiveDocumentationSupport, iconAlt: "Documentation & Support" },
    { lines: ["Rapid Deployment", "& Maintenance"], iconImage: rapidDeploymentMaintenance, iconAlt: "Rapid Deployment & Maintenance" },
];

const VENDOR_MANAGEMENT_FEATURES: FeatureItem[] = [
    { lines: ["Centralized Vendor Data", "Management"], iconImage: centralizedVendorDataManagement, iconAlt: "Centralized Vendor Data Management" },
    { lines: ["Real-Time Risk", "Assessment"], iconImage: realTimeRiskAssessment, iconAlt: "Real-Time Risk Assessment" },
    { lines: ["Compliance & Security", "Monitoring"], iconImage: complianceSecurityMonitoring, iconAlt: "Compliance & Security Monitoring" },
    { lines: ["Customizable Reporting", "& Alerts"], iconImage: customizableReportingAlerts, iconAlt: "Customizable Reporting & Alerts" },
    { lines: ["Seamless Integration with", "Existing Systems"], iconImage: seamlessIntegrationwithExistingSystems, iconAlt: "Integration with Existing Systems" },
];

const CYBER_SECURITY_FEATURES: FeatureItem[] = [
    { lines: ["Interactive Training", "Modules"], iconImage: InteractiveTrainingModules, iconAlt: "Interactive Training Modules" },
    { lines: ["Real-World Scenarios", "& Simulations"], iconImage: RealWorldScenariosSimulations, iconAlt: "Real-World Scenarios & Simulations" },
    { lines: ["Customizable Programs", "to Fit Your Needs"], iconImage: CustomisableProgramstoFitYourNeeds, iconAlt: "Customizable Programs" },
    { lines: ["Measurable Learning", "Outcomes"], iconImage: MeasurableLearningOutcomes, iconAlt: "Measurable Learning Outcomes" },
    { lines: ["Ongoing Support", "& Updates"], iconImage: OngoingSupportUpdates, iconAlt: "Ongoing Support & Updates" },
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

function iconClass() {
    // If your png icons are already white -> remove `invert brightness-0`
    return "h-7 w-7 object-contain invert brightness-0 sm:h-8 sm:w-8 lg:h-10 lg:w-10";
}

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
                <h2 className="mb-8 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                    {title}
                </h2>

                <div className="relative overflow-hidden rounded-3xl">
                    {/* Background */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={bgSrc}
                            alt={backgroundImageAlt}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1440px) 100vw, 1440px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-blue-900/50 to-[#1e3a5f]/95" />
                    </div>

                    {/* Features */}
                    <div className="relative z-10 flex min-h-[380px] items-end sm:min-h-[500px] lg:min-h-[600px]">
                        <div className="w-full px-4 py-10 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
                            {/* Mobile: 3 icons on first row, 2 on second (using flex-basis), all centered and spaced. Larger screens: normal layout. */}
                            <div className="flex flex-wrap justify-center gap-x-5 gap-y-10 sm:gap-x-10 sm:gap-y-10 lg:gap-x-16 xl:gap-x-20">
                                {features.map((feature, idx) => (
                                    <div
                                        key={`${feature.lines.join("-")}-${idx}`}
                                        className={`flex flex-col items-center text-center mx-1 max-w-[120px] ${
                                            idx < 3 ? "basis-1/3" : "basis-1/2"
                                        } sm:mx-0 sm:max-w-[190px] sm:basis-auto`}
                                    >
                                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#00a7e1] text-white shadow-xl sm:mb-4 sm:h-14 sm:w-14 lg:mb-5 lg:h-20 lg:w-20">
                                            {feature.iconImage ? (
                                                <Image
                                                    src={feature.iconImage}
                                                    alt={feature.iconAlt ?? feature.lines[0]}
                                                    width={40}
                                                    height={40}
                                                    className={iconClass()}
                                                />
                                            ) : (
                                                <span className="h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12">
                          {feature.icon}
                        </span>
                                            )}
                                        </div>

                                        <div className="space-y-1">
                                            {feature.lines.map((line) => (
                                                <p
                                                    key={line}
                                                    className="text-[11px] font-bold leading-snug text-white sm:text-sm lg:text-lg"
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
