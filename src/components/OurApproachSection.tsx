import Image from "next/image";
import type { StaticImageData } from "next/image";
import modernWorkplaceApproach from "@/assets/Modern-Workplace/e7160314714ff7d43a922958b9a391ec0f83124b.png";

type OurApproachSectionProps = {
    title?: string;
    description?: string;
    imageSrc?: string | StaticImageData;
    imageAlt?: string;
    hidden?: boolean;
};

export default function OurApproachSection({
    title = "Our Approach",
    description = "We assess your current environment, identify areas for digital transformation, and implement solutions that empower your employees to work smarter, not harder.",
    imageSrc,
    imageAlt = "Team collaborating at a whiteboard in an office",
    hidden = false,
}: OurApproachSectionProps) {
    if (hidden) return null;

    const img = imageSrc ?? modernWorkplaceApproach;

    return (
        <section className="bg-[#f3f3f3] px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                {/* Blue block: rounded more on left, doesn't span full width (margin from container) */}
                <div
                    className="relative overflow-visible bg-[#00A7E1] px-8 py-12 sm:px-12 sm:py-16 lg:px-16"
                    style={{ borderRadius: "40px 24px 24px 40px" }}
                >
                    <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:pr-[38%]">
                        {/* Left: heading + paragraph */}
                        <div className="max-w-xl flex-1 text-left">
                            <h2 className="text-4xl font-bold text-black sm:text-5xl">
                                {title}
                            </h2>
                            <p className="mt-6 text-base leading-relaxed text-white sm:text-lg">
                                {description}
                            </p>
                        </div>

                        {/* Right: image extends past the right edge of the blue block */}
                        <div className="relative flex-shrink-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-[15%]">
                            <div
                                className="overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
                                style={{ borderRadius: "16px" }}
                            >
                                <Image
                                    src={img}
                                    alt={imageAlt}
                                    width={520}
                                    height={380}
                                    className="h-[260px] w-[340px] object-cover sm:h-[300px] sm:w-[400px] lg:h-[360px] lg:w-[480px]"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
