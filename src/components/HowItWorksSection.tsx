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
      className="w-full py-10 sm:py-12 md:py-14 lg:py-16"
      style={{
        background:
          "radial-gradient(1200px 600px at 20% 20%, #22C6F0 0%, #0AA8DC 38%, #038ABF 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Header - Responsive text sizes */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight text-black">
            {title}
          </h2>
          <p className="mt-1 text-xs sm:text-sm md:text-base font-normal text-white/85">
            {subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="grid items-start gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
          
          {/* LEFT IMAGE - Fully responsive */}
          <div className="relative w-full max-w-[420px] mx-auto lg:mx-0">
            <div
              className="p-[4px] sm:p-[5px] md:p-[6px]"
              style={{
                backgroundColor: "rgba(170, 235, 255, 0.75)",
                borderRadius: "16px sm:18px md:20px",
              }}
            >
              <div
                className="overflow-hidden"
                style={{ borderRadius: "12px sm:14px md:16px" }}
              >
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
          </div>

          {/* RIGHT STEPS - Responsive spacing and text */}
          <div className="w-full">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {steps.map((s, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-start gap-3 sm:gap-4">
                    
                    {/* Icon - Responsive sizing */}
                    <div
                      className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: "#12C98A",
                        boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
                      }}
                    >
                      {typeof s.icon === "object" &&
                      s.icon !== null &&
                      "src" in s.icon ? (
                        <Image
                          src={s.icon as StaticImageData}
                          alt={s.title}
                          width={16}
                          height={16}
                          className="object-contain w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]"
                        />
                      ) : (
                        <span className="text-white [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-[18px] sm:[&_svg]:w-[18px] md:[&_svg]:h-5 md:[&_svg]:w-5 [&_svg]:stroke-white [&_svg]:fill-none">
                          {s.icon as React.ReactNode}
                        </span>
                      )}
                    </div>

                    {/* Text - Fully responsive font sizes */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-sm sm:text-base md:text-lg font-semibold leading-tight sm:leading-normal"
                        style={{ color: "#0B4B74" }}
                      >
                        {s.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm md:text-base leading-relaxed text-white/80">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  {/* Divider - Responsive spacing */}
                  {idx !== steps.length - 1 && (
                    <div className="mt-4 sm:mt-5 md:mt-6">
                      <div className="ml-8 sm:ml-10 md:ml-14 h-px w-[85%] sm:w-[80%] md:w-[78%] bg-white/25" />
                    </div>
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