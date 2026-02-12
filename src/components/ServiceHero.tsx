import Image from "next/image";
import type { StaticImageData } from "next/image";

const ITALIC_TAGLINE_WORDS = ["prompt", "efficient", "effective"];

function TaglineWithItalics({ tagline }: { tagline: string }) {
  const parts = tagline.split(/\b(prompt|efficient|effective)\b/i);
  return (
    <p className="mt-4 text-lg text-neutral-800 sm:text-xl">
      {parts.map((part, i) =>
        ITALIC_TAGLINE_WORDS.some(
          (w) => w.toLowerCase() === part.toLowerCase()
        ) ? (
          <em key={i}>{part}</em>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}

type ServiceHeroProps = {
  title: string;
  tagline: string;
  description: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
};

export default function ServiceHero({
  title,
  tagline,
  description,
  imageSrc,
  imageAlt,
}: ServiceHeroProps) {
  return (
    <section className="bg-section-bg px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
        {/* Left column - copy */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <TaglineWithItalics tagline={tagline} />
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            {description}
          </p>
        </div>

        {/* Right column - image */}
        <div className="relative order-first lg:order-last">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200 shadow-lg">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
