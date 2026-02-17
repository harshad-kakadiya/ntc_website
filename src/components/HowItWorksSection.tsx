import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

// Step icons from @/assets/icon
import consultationIcon from "@/assets/icon/9f467a736e43655c7e901b548691f8cfed2af3ce.png";
import diagnoseIcon from "@/assets/icon/e41f2be29afe29d4b0f58d636457dc66b0634905.png";
import resolveIcon from "@/assets/icon/ce732699007f74b6bda084b97f8cd61eac1aa13a.png";
import designIcon from "@/assets/icon/05de89446d0ae4a3fa1ae9b3794cd8abb7a99388.png";
import developmentIcon from "@/assets/icon/26dd8c8620a6b5e14fc4149bd7eba54396916ca7.png";
import deploymentIcon from "@/assets/icon/35fbe15f1a5c0442a2642695c48ac72278b50f99.png";

// How It Works: Connect uses consultation icon (network); Diagnose and Resolve use their direct imports above
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
            className="w-full py-16 sm:py-20"
            style={{ background: "#00A7E1" }}
        >
            <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
                {/* Header */}
                <div className="mb-10">
                    <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                        {title}
                    </h2>
                    <p className="mt-2 text-lg text-white sm:text-xl">
                        {subtitle}
                    </p>
                </div>

                {/* Content */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

                    {/* LEFT IMAGE */}
                    <div className="relative w-full">
                        <div
                            className="overflow-hidden bg-white"
                            style={{ borderRadius: "28px 18px 18px 28px" }}
                        >
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[400px]"
                                priority
                            />
                        </div>
                    </div>

                    {/* RIGHT STEPS */}
                    <div className="w-full">
                        <div className="space-y-0">
                            {steps.map((s, idx) => (
                                <div key={idx}>
                                    <div className="flex items-start gap-4">

                                        {/* Green circle: image icon from assets/icon or custom ReactNode (e.g. SVG) */}
                                        <div
                                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full ring-2 ring-white"
                                            style={{ backgroundColor: "#1DC690" }}
                                        >
                                            {typeof s.icon === "object" && s.icon !== null && "src" in s.icon ? (
                                                <Image
                                                    src={s.icon as StaticImageData}
                                                    alt={s.title}
                                                    width={22}
                                                    height={22}
                                                    className="object-contain"
                                                />
                                            ) : (
                                                <span className="text-white [&_svg]:h-6 [&_svg]:w-6 [&_svg]:stroke-white [&_svg]:fill-none">
                                                    {s.icon as React.ReactNode}
                                                </span>
                                            )}
                                        </div>

                                        {/* TEXT – heading dark blue, description light gray/white like reference */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-xl font-bold sm:text-2xl" style={{ color: "#0d3b66" }}>
                                                {s.title}
                                            </h3>
                                            <p className="mt-1 text-base leading-relaxed text-white/90 sm:text-lg">
                                                {s.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {idx !== steps.length - 1 && (
                                        <div className="mt-6 mb-6 h-px w-full bg-white/30" />
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
