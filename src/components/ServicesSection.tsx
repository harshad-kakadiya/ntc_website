import Link from "next/link";

const services = [
  {
    slug: "it-service-desk",
    title: "IT Service Desk",
    description: "Reliable support when you need it most.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <circle cx="12" cy="10" r="2" />
        <path d="M8 10h1M15 10h1" />
      </svg>
    ),
  },
  {
    slug: "modern-workplace",
    title: "Modern Workplace",
    description: "Transforming the way you work with innovative technology solutions.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4" />
        <circle cx="15" cy="7" r="4" />
        <path d="M12 11v6M9 14h6" />
        <circle cx="12" cy="14" r="2" />
      </svg>
    ),
  },
  {
    slug: "euc-engineer",
    title: "EUC Engineer",
    description: "Empowering end-user computing with precision engineering.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
        <circle cx="12" cy="14" r="1.5" />
      </svg>
    ),
  },
  {
    slug: "api-development",
    title: "API Development",
    description: "Custom API solutions to streamline your operations.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6M9 13h4M9 17h2" />
      </svg>
    ),
  },
  {
    slug: "vendor-management",
    title: "Vendor Management (Upguard)",
    description: "Optimise vendor relationships with cutting-edge management tools.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="18" cy="8" r="2.5" />
        <circle cx="6" cy="8" r="2.5" />
        <circle cx="6" cy="16" r="2.5" />
        <circle cx="18" cy="16" r="2.5" />
      </svg>
    ),
  },
  {
    slug: "cyber-security-training",
    title: "Corporate Cyber Security Awareness Training",
    description: "Protect your business with expert training and awareness programs.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section>
      {/* Header - dark background */}
      <div className=" mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
              Our Services
            </h2>
            <div className="mt-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-[#008fe5] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#152d47]"
              >
                Learn More
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          <p className="max-w-xl text-base leading-relaxed  lg:pt-2">
            At NTC, we offer a comprehensive suite of IT solutions designed to
            meet the evolving needs of modern businesses. Whether you&apos;re
            looking for robust IT support, innovative workplace solutions, or
            enhanced cybersecurity, we have the expertise to help you succeed.
          </p>
        </div>
      </div>

      {/* Cards grid - light blue background with rounded bottom */}
        <div className="px-8">
      <div className="rounded-b-5xl bg-[#008fe5] rounded-2xl px-4 py-10 sm:px-6 lg:px-8 ">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2  lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#008fe5] bg-[#008fe5] text-white">
                {service.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-neutral-900 group-hover:underline">
                Learn More
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
            </div>
        </div>
      </div>
    </section>
  );
}
