import Image from "next/image";
import AboutTwoimage from "../assets/ServicasePage/servicesImage.png";

/* First image: lighter blue circle fill, white icon and outline */
const ICON_BG = "#5BA3E8";
const ICON_STROKE = "#FFFFFF";

const benefits = [
  {
    title: "Expertise",
    description: "A seasoned team with deep industry knowledge.",
    icon: (
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke={ICON_STROKE}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "Leveraging the latest technology trends to drive growth.",
    icon: (
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke={ICON_STROKE}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12c.7.6 1 1.2 1 2h6c0-.8.3-1.4 1-2a7 7 0 0 0-4-12z" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description: "Consistent, high-quality service that you can trust.",
    icon: (
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke={ICON_STROKE}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 12l2 2 4-4" />
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      </svg>
    ),
  },
  {
    title: "Customer Focus",
    description: "Solutions designed with your business in mind.",
    icon: (
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke={ICON_STROKE}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function WhyChooseSectionBlue() {
  return (
    <section className="relative">
      {/* Blue background section; image extends into white below */}
      <div
        className="px-4 pt-12 pb-24 sm:px-6 sm:pt-16 sm:pb-28 lg:px-8 lg:pt-20 lg:pb-32"
        style={{ backgroundColor: "#009BD7" }}
      >
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start">
            {/* Left column: black heading + image (all four corners rounded, subtle border/shadow) */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-[48px]">
                Why Choose NTC?
              </h2>

              <div className="relative mt-8 w-full sm:mt-10">
                {/* Image: rounded on all four sides, subtle white border / shadow; extends into white below via negative margin */}
                <div className="relative aspect-[4/3] w-full min-h-[260px] overflow-hidden rounded-2xl shadow-lg ring-2 ring-white/40 sm:min-h-[320px] lg:min-h-[380px] lg:rounded-3xl lg:-mb-20">
                  <Image
                    src={AboutTwoimage}
                    alt="Team collaborating around a wooden table in an office"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Right column: paragraph + feature list (white text); icon = lighter blue fill, white outline + symbol */}
            <div className="flex flex-col lg:pt-2">
              <p className="max-w-xl text-base leading-relaxed text-white sm:text-[16px]">
                We believe in a proactive, customer-centric approach to IT service
                management. Our team of experts works closely with you to
                understand your business challenges and deliver tailored solutions
                that drive success. With industry-leading technologies, proven
                methodologies, and an unwavering commitment to excellence, NTC is
                your partner in digital transformation.
              </p>

              <ul className="mt-8 space-y-0 sm:mt-10">
                {benefits.map((benefit, index) => (
                  <li key={benefit.title}>
                    <div className="flex gap-4">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white"
                        style={{ backgroundColor: ICON_BG }}
                      >
                        {benefit.icon}
                      </div>
                      <div className="min-w-0 flex-1 pb-6">
                        <h3 className="text-lg font-bold text-white sm:text-[18px]">
                          {benefit.title}
                        </h3>
                        <p className="mt-1 text-base leading-relaxed text-white/95 sm:text-[16px]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                    {index !== benefits.length - 1 && (
                      <div className="ml-14 mt-6 mb-6 h-px w-full bg-white/60" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* White transition area below blue; image overlaps into here */}
      <div className="h-20 bg-white lg:h-24" aria-hidden />
    </section>
  );
}
