import Image from "next/image";
import type { StaticImageData } from "next/image";
import modernWorkplaceApproach from "@/assets/Modern-Workplace/e7160314714ff7d43a922958b9a391ec0f83124b.png";

type OurApproachSectionProps = {
  title?: string;
  description?: string;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
};

export default function OurApproachSection({
  title = "Our Approach",
  description = "We assess your current environment, identify areas for digital transformation, and implement solutions that empower your employees to work smarter, not harder.",
  imageSrc,
  imageAlt = "Team collaborating at a whiteboard in an office",
}: OurApproachSectionProps) {
  return (
    <section className="bg-[#2196F3] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-3xl lg:grid-cols-2">
          {/* Left - Blue section with black text */}
          <div className="flex flex-col justify-center bg-[#2196F3] p-8 sm:p-10 lg:p-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-900 sm:text-lg">
              {description}
            </p>
          </div>
          {/* Right - Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px]">
            <Image
              src={imageSrc ?? modernWorkplaceApproach}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
