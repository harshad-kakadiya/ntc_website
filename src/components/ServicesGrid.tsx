import Link from "next/link";
import service1 from "../assets/ServicasePage/service1.png";
import service2 from "../assets/ServicasePage/service2.png";
import service3 from "../assets/ServicasePage/service3.png";
import service4 from "../assets/ServicasePage/service4.png";
import service5 from "../assets/ServicasePage/service5.png";
import service6 from "../assets/ServicasePage/service6.png";
import Image from "next/image";

const services = [
  {
    slug: "it-service-desk",
    title: "IT Service Desk",
    description: "Reliable support when you need it most.",
    icon: <Image src={service1} alt="IT Service Desk" />,
  },
  {
    slug: "modern-workplace",
    title: "Modern Workplace",
    description:
      "Transforming the way you work with innovative technology solutions.",
    icon: <Image src={service2} alt="Modern Workplace" />,
  },
  {
    slug: "euc-engineer",
    title: "EUC Engineer",
    description: "Empowering end-user computing with precision engineering.",
    icon: <Image src={service3} alt="EUC Engineer" />,
  },
  {
    slug: "api-development",
    title: "API Development",
    description: "Custom API solutions to streamline your operations.",
    icon: <Image src={service4} alt="API Development" />,
  },
  {
    slug: "vendor-management",
    title: "Vendor Management (Upguard)",
    description:
      "Optimise vendor relationships with cutting-edge management tools.",
    icon: <Image src={service5} alt="Vendor Management" />,
  },
  {
    slug: "cyber-security-training",
    title: "Corporate Cyber Security Awareness Training",
    description:
      "Protect your business with expert training and awareness programs.",
    icon: <Image src={service6} alt="Cyber Security Training" />,
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-section-bg px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col rounded-xl border border-neutral-100 bg-white p-4 sm:p-5 md:p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center text-white">
                <div className="relative h-8 w-8 sm:h-10 sm:w-10">
                  {service.icon}
                </div>
              </div>
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-neutral-900 leading-tight">
                {service.title}
              </h3>
              <p className="mt-1.5 sm:mt-2 flex-1 text-xs sm:text-sm leading-relaxed text-neutral-600">
                {service.description}
              </p>
              <span className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-black leading-none">
                Learn More
                <svg
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Central CTA */}
        <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center">
          <Link
            href="/contact#expert"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-[#1C4670] px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-[#163a5f] hover:scale-105 active:scale-95"
          >
            Learn More
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}