import Image from "next/image";

type OurApproachSectionProps = {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function OurApproachSection({
  title = "Our Approach",
  description = "We assess your current environment, identify areas for digital transformation, and implement solutions that empower your employees to work smarter, not harder.",
  imageSrc = "/how-it-works.png",
  imageAlt = "Three people collaborating at a whiteboard in an office",
}: OurApproachSectionProps) {
  return (
    <section className="bg-[#1e5f9e] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/95">
              {description}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/10 shadow-xl">
            <Image
              src={imageSrc}
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
