import Image from "next/image";
import HomethreeImage from "../assets/HomePage/hometwo.png"

const benefits = [
  {
    title: "Expertise",
    description: "A seasoned team with deep industry knowledge.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M12 2v4M12 2l1.5 3M12 2l-1.5 3M9 5l1 2M15 5l-1 2" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "Leveraging the latest technology trends to drive growth.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 22h4M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
        <path d="M12 2v2M4.22 4.22l1.42 1.42M2 12h2M19.78 4.22l-1.42 1.42M22 12h-2" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description: "Consistent, high-quality service that you can trust.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      </svg>
    ),
  },
  {
    title: "Customer Focus",
    description: "Solutions designed with your business in mind.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-section-bg px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
        {/* Left: heading + image */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Why Choose NTC?
          </h2>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200 shadow-md">
            <Image
              src={HomethreeImage}
              alt="Professional team collaborating around a conference table in a modern office"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right: intro + benefits list */}
        <div className="flex flex-col lg:pt-2">
          <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">
            We believe in a proactive, customer-centric approach to IT service
            management. Our team of experts works closely with you to understand
            your business challenges and deliver tailored solutions that drive
            success. With industry-leading technologies, proven methodologies,
            and an unwavering commitment to excellence, NTC is your partner in
            digital transformation.
          </p>
          <ul className="mt-10 space-y-0">
            {benefits.map((benefit, index) => (
              <li key={benefit.title}>
                {index > 0 && (
                  <hr className="border-t border-[#7cb87c]/50 my-6" />
                )}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#1e5f9e] bg-[#1e5f9e] text-white">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-700 sm:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
