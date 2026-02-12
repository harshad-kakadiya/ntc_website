import Image from "next/image";

const STEPS = [
  {
    title: "Consultation",
    description: "Understanding your business needs.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    title: "Design",
    description: "Crafting a bespoke API architecture.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        <path d="M12 6v2M8 6v2" />
      </svg>
    ),
  },
  {
    title: "Development",
    description: "Building, testing, and refining the API.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: "Deployment",
    description: "Seamless integration and ongoing support.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
];

type DevelopmentProcessSectionProps = {
  imageSrc?: string;
  imageAlt?: string;
};

export default function DevelopmentProcessSection({
  imageSrc = "/how-it-works.png",
  imageAlt = "Two people collaborating at a computer in an office",
}: DevelopmentProcessSectionProps) {
  return (
    <section className="bg-[#1e5f9e] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Development Process
        </h2>
        <p className="mt-3 text-lg text-white/90">
          Our API development process is agile and collaborative.
        </p>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/10 shadow-xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col gap-8">
            {STEPS.map((step) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#7cb87c] bg-white text-[#2d7a3e]">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/85 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
