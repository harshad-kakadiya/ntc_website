import Image from "next/image";
import AboutTwoimage from "../assets/ServicasePage/servicesImage.png";

const benefits = [
  {
    title: "Expertise",
    description: "A seasoned team with deep industry knowledge.",
    icon: (
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2l2.6 5.8L21 9l-4.7 4.2L17.5 21 12 17.8 6.5 21l1.2-7.8L3 9l6.4-1.2L12 2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.5 12.5l1.8 1.8 3.8-3.8"
        />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "Leveraging the latest technology trends to drive growth.",
    icon: (
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 22h4" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2a7 7 0 0 0-4 12c.7.6 1 1.2 1 2h6c0-.8.3-1.4 1-2A7 7 0 0 0 12 2z"
        />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description: "Consistent, high-quality service that you can trust.",
    icon: (
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.5 12.5l1.8 1.8 3.8-3.8"
        />
      </svg>
    ),
  },
  {
    title: "Customer Focus",
    description: "Solutions designed with your business in mind.",
    icon: (
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
        />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function WhyChooseNTC() {
  return (
    <section className="relative overflow-hidden">
      {/* Top blue background */}
      <div className="relative bg-[linear-gradient(135deg,#00A7E6_0%,#0A88C6_55%,#0879B7_100%)]">
        {/* Noise/grain like screenshot */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay">
          <div className="h-full w-full bg-[radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:8px_8px] sm:[background-size:10px_10px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:pt-20 lg:pb-24">
          {/* Top row: heading left, paragraph right */}
          <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-2 lg:items-start">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] xl:text-[54px] font-semibold leading-tight tracking-tight text-black text-center lg:text-left">
              Why Choose NTC?
            </h2>

            <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-[14px] md:text-[15px] leading-6 sm:leading-7 text-white/90 text-center lg:text-left lg:pt-2">
              We believe in a proactive, customer-centric approach to IT service
              management. Our team of experts works closely with you to
              understand your business challenges and deliver tailored solutions
              that drive success. With industry-leading technologies, proven
              methodologies, and an unwavering commitment to excellence, NTC is
              your partner in digital transformation.
            </p>
          </div>

          {/* Bottom row: image left, benefits right */}
          <div className="mt-10 sm:mt-12 lg:mt-16 grid gap-10 lg:gap-12 lg:grid-cols-2 lg:items-start">
            {/* LEFT image card with thick rounded border like screenshot */}
            <div className="lg:pr-8 order-2 lg:order-1">
              <div className="rounded-2xl sm:rounded-3xl md:rounded-[34px] bg-[#BFE7F6]/70 p-2 sm:p-3 shadow-[0_20px_40px_rgba(0,0,0,0.15)] lg:shadow-[0_26px_70px_rgba(0,0,0,0.18)]">
                <div className="rounded-xl sm:rounded-2xl md:rounded-[30px] bg-white p-2 sm:p-3">
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[26px]">
                    <Image
                      src={AboutTwoimage}
                      alt="Team collaborating in a modern office"
                      className="h-[250px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[460px] w-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT benefits (scroll like screenshot) */}
            <div className="lg:pl-6 order-1 lg:order-2">
              <div className="max-w-xl mx-auto lg:mx-0">
                <div className="pr-2 sm:pr-4">
                  <ul className="space-y-6 sm:space-y-8 lg:space-y-9">
                    {benefits.map((b, idx) => (
                      <li key={b.title}>
                        <div className="flex gap-4 sm:gap-5">
                          <div className="mt-1 flex h-12 w-12 sm:h-[50px] sm:w-[50px] lg:h-[54px] lg:w-[54px] flex-shrink-0 items-center justify-center rounded-full bg-[#1FDE86] text-white ring-4 ring-white/15">
                            {b.icon}
                          </div>

                          <div className="w-full">
                            <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-[#053B55]">
                              {b.title}
                            </h3>
                            <p className="mt-1 text-xs sm:text-[13px] md:text-[14px] lg:text-[14.5px] leading-5 sm:leading-6 text-white/90">
                              {b.description}
                            </p>

                            {idx !== benefits.length - 1 && (
                              <div className="mt-4 sm:mt-5 lg:mt-6 h-px w-full bg-white/25" />
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}