    import React from "react";
    import Image from "next/image";
    import type { StaticImageData } from "next/image";

    // Step icons
    import consultationIcon from "@/assets/icon/9f467a736e43655c7e901b548691f8cfed2af3ce.png";
    import diagnoseIcon from "@/assets/icon/e41f2be29afe29d4b0f58d636457dc66b0634905.png";
    import resolveIcon from "@/assets/icon/ce732699007f74b6bda084b97f8cd61eac1aa13a.png";
    import designIcon from "@/assets/icon/05de89446d0ae4a3fa1ae9b3794cd8abb7a99388.png";
    import developmentIcon from "@/assets/icon/26dd8c8620a6b5e14fc4149bd7eba54396916ca7.png";
    import deploymentIcon from "@/assets/icon/35fbe15f1a5c0442a2642695c48ac72278b50f99.png";

    const connectIcon = consultationIcon;

    export {
        consultationIcon,
        designIcon,
        developmentIcon,
        deploymentIcon,
        connectIcon,
        diagnoseIcon,
        resolveIcon,
    };

    type Step = {
        title: string;
        desc: string;
        icon: StaticImageData | React.ReactNode;
    };

    type HowItWorksSectionProps = {
        title: string;
        subtitle: string;
        imageSrc: StaticImageData;
        imageAlt?: string;
        steps: Step[];
    };

    export default function HowItWorksSection({
                                                  title,
                                                  subtitle,
                                                  imageSrc,
                                                  imageAlt = "How it works",
                                                  steps,
                                              }: HowItWorksSectionProps) {
        return (
            <section
                className="w-full py-12 sm:py-14 md:py-16 lg:py-20"
                style={{ backgroundColor: "#009DDA" }}
            >
                <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10">
                    {/* Header */}
                    <div className="mb-8 sm:mb-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black">
                            {title}
                        </h2>
                        <p className="mt-2 text-base sm:text-lg font-normal text-white">
                            {subtitle}
                        </p>
                    </div>

                    {/* Content: image left, steps right */}
                    <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
                        {/* Left column – image with rounded corners */}
                        <div className="relative">
                            <div className="overflow-hidden rounded-[24px] border-[10px] border-blue-300">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    width={523}
                                    height={475}
                                    className="w-[523px] h-[475px] object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right column – steps */}
                        <div className="w-full">
                            <div className="space-y-0">
                                {steps.map((s, idx) => (
                                    <div key={idx}>
                                        <div className="flex items-start gap-5">
                                            <div
                                                className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full"
                                                style={{ backgroundColor: "#1DC690" }}
                                            >
                                                {typeof s.icon === "object" &&
                                                s.icon !== null &&
                                                "src" in s.icon ? (
                                                    <Image
                                                        src={s.icon as StaticImageData}
                                                        alt={s.title}
                                                        width={30}
                                                        height={30}
                                                        className="h-[30px] w-[30px] object-contain brightness-0 invert"
                                                    />
                                                ) : (
                                                    <span className="text-white">
                              {s.icon as React.ReactNode}
                            </span>
                                                )}
                                            </div>

                                            <div className="flex-1 min-w-0 pb-6">
                                                <h3 className="text-base sm:text-lg font-bold text-[#1C4670]">
                                                    {s.title}
                                                </h3>
                                                <p className="mt-1 text-sm sm:text-base leading-relaxed text-white">
                                                    {s.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {idx !== steps.length - 1 && (
                                            <div className="ml-[88px] mb-6 h-px w-[calc(100%-88px)] bg-white/10" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
