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
          <p className="mt-2 text-base sm:text-lg font-normal text-neutral-800">
            {subtitle}
          </p>
        </div>

        {/* Content: image left, steps right */}
        <div className="grid items-start gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left column – image with rounded corners */}
          <div className="relative w-full max-w-[420px] mx-auto lg:mx-0">
            <div className="overflow-hidden rounded-[24px] md:rounded-[28px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={420}
                height={315}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Right column – steps */}
          <div className="w-full">
            <div className="space-y-0">
              {steps.map((s, idx) => (
                <div key={idx}>
                  <div className="flex items-start gap-4">
                    {/* Icon – light green circle, white border, white graphic */}
                    <div
                      className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border-2 border-white"
                      style={{ backgroundColor: "#A2E0A2" }}
                    >
                      {typeof s.icon === "object" &&
                      s.icon !== null &&
                      "src" in s.icon ? (
                        <Image
                          src={s.icon as StaticImageData}
                          alt={s.title}
                          width={24}
                          height={24}
                          className="object-contain w-6 h-6 brightness-0 invert"
                        />
                      ) : (
                        <span className="text-white [&_svg]:h-6 [&_svg]:w-6 [&_svg]:stroke-white [&_svg]:fill-none">
                          {s.icon as React.ReactNode}
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0 pb-6">
                      <h3 className="text-base sm:text-lg font-bold text-black">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm sm:text-base leading-relaxed text-neutral-700">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  {/* Separator – light grey line between steps */}
                  {idx !== steps.length - 1 && (
                    <div className="h-px w-full bg-neutral-300 mb-6 ml-14" />
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