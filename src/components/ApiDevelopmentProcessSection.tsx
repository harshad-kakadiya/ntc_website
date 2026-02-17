import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

// ✅ LEFT SIDE BIG IMAGE
import apiMainImg from "@/assets/Your-Dedicated-IT/img 3.png";

// ✅ ICONS (NO SPACE NAMES)
import consultationIcon from "@/assets/icon/9f467a736e43655c7e901b548691f8cfed2af3ce.png";
import designIcon from "@/assets/icon/05de89446d0ae4a3fa1ae9b3794cd8abb7a99388.png";
import developmentIcon from "@/assets/icon/26dd8c8620a6b5e14fc4149bd7eba54396916ca7.png";
import deploymentIcon from "@/assets/icon/35fbe15f1a5c0442a2642695c48ac72278b50f99.png";

type Step = {
    title: string;
    desc: string;
    icon: StaticImageData;
};

const steps: Step[] = [
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
];

export default function ApiDevelopmentProcessSection() {
    return (
        <section
            className="w-full py-16 sm:py-20"
            style={{
                background:
                    "linear-gradient(135deg, #12A7DB 0%, #0A9ED6 35%, #067FBE 100%)",
            }}
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-10">
                    <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                        Development Process
                    </h2>
                    <p className="mt-2 text-sm text-black/70 sm:text-base">
                        Our API development process is agile and collaborative
                    </p>
                </div>

                {/* Content */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                    {/* LEFT IMAGE */}
                    <div className="w-full">
                        <div className="rounded-[28px] bg-white/15 p-4 shadow-[0_22px_60px_rgba(0,0,0,0.22)] ring-1 ring-white/25">
                            <div className="overflow-hidden rounded-[22px] bg-white">
                                <Image
                                    src={apiMainImg}
                                    alt="API Development Process"
                                    className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[360px]"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT STEPS */}
                    <div className="w-full">
                        <div className="space-y-7">
                            {steps.map((s, idx) => (
                                <div key={s.title}>
                                    <div className="flex items-start gap-4">
                                        {/* ✅ GREEN CIRCLE ICON */}
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-500 shadow-[0_10px_22px_rgba(0,0,0,0.18)]">
                                            <Image
                                                src={s.icon}
                                                alt={s.title}
                                                width={18}
                                                height={18}
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* TEXT */}
                                        <div className="flex-1">
                                            <h3 className="text-[18px] font-semibold text-[#0B1B3F]">
                                                {s.title}
                                            </h3>
                                            <p className="mt-1 text-[13px] leading-relaxed text-[#0B1B3F]/75">
                                                {s.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    {idx !== steps.length - 1 && (
                                        <div className="mt-5 ml-[60px] h-px w-[calc(100%-60px)] bg-white/40" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 h-px w-full bg-white/35" />
                    </div>
                </div>
            </div>
        </section>
    );
}
