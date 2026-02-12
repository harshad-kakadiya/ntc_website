import Image from "next/image";

const STEPS = [
  {
    title: "Connect",
    description: "Reach out via our multi-channel support options.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="6" cy="8" r="2" />
        <circle cx="18" cy="8" r="2" />
        <circle cx="6" cy="16" r="2" />
        <circle cx="18" cy="16" r="2" />
        <path d="M12 9v2M9 12l-2 2M15 12l2 2M12 15v-2" />
        <path d="M8 10l-2-1M16 10l2-1M8 14l-2 1M16 14l2 1" />
      </svg>
    ),
  },
  {
    title: "Diagnose",
    description: "Our experts assess and resolve your issue promptly.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
        <path d="M12 2v2M4.22 4.22l1.42 1.42M19.78 4.22l-1.42 1.42M22 12h-2M2 12h2" />
        <path d="M8 6l1 1M15 6l-1 1" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Resolve",
    description: "We implement long-term solutions to prevent future disruptions.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4v2M12 18v2M6.34 6.34l1.42 1.42M16.24 16.24l1.42 1.42M4 12h2M18 12h2M6.34 17.66l-1.42 1.42M16.24 7.76l-1.42-1.42" />
        <path d="M12 8l1.5 1.5L12 11l-1.5-1.5" />
        <path d="M9 15l1.5 2 4.5-4" />
      </svg>
    ),
  },
];

type HowItWorksSectionProps = {
  slug: string;
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function HowItWorksSection({
  slug,
  title = "How It Works",
  subtitle = "Our process is simple and effective",
  imageSrc = "/how-it-works.png",
  imageAlt = "Two colleagues collaborating at a computer in an office",
}: HowItWorksSectionProps) {
  return (
    <section className="bg-[#1e5f9e] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-2xl border border-white/20 bg-white shadow-xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
                {title}
              </h2>
              <p className="mt-2 text-base text-neutral-600 sm:text-lg">
                {subtitle}
              </p>
              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center border-t border-neutral-200 p-6 sm:p-8 lg:border-t-0 lg:border-l lg:border-neutral-200 lg:pl-10 lg:pr-10">
              {STEPS.map((step, index) => (
                <div key={step.title}>
                  <div className={`flex gap-4 ${index < STEPS.length - 1 ? "pb-8" : ""}`}>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#7cb87c] text-white">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-neutral-800 sm:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < STEPS.length - 1 && (
                    <div className="border-b border-neutral-200 pb-8" aria-hidden />
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
