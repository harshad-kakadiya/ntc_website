import Image from "next/image";
import AboutTwoimage from "../assets/ServicasePage/servicesImage.png"

const benefits = [
  {
    title: "Expertise",
    description: "A seasoned team with deep industry knowledge.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "Leveraging the latest technology trends to drive growth.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 22h4M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description: "Consistent, high-quality service that you can trust.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 14h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2z" />
        <path d="M7 14v2a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-2" />
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

export default function WhyChooseSectionBlue() {
  return (
    <section className="bg-[#1e5f9e] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
        {/* Left: heading + image in white container */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Why Choose NTC?
          </h2>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-md">
            
               <Image
              src={AboutTwoimage}
              alt="Professional team collaborating around a conference table in a modern office"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right: intro (white) + benefits list (white circles, teal icons, white text) */}
        <div className="flex flex-col lg:pt-2">
          <p className="text-base leading-relaxed text-white sm:text-lg">
            We believe in a proactive, customer-centric approach to IT service
            management. Our team of experts works closely with you to understand
            your business challenges and deliver tailored solutions that drive
            success. With industry-leading technologies, proven methodologies,
            and an unwavering commitment to excellence, NTC is your partner in
            digital transformation.
          </p>
          <ul className="mt-10 space-y-6">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#5cb87c]">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/90 sm:text-base">
                    {benefit.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
