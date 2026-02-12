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

export default function ServicesGrid() {
  return (
    <section className="bg-section-bg px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Cards on white background */}
        <div className="rounded-2xl bg-white px-4 py-10 shadow-sm sm:px-6 lg:px-10 lg:py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-xl border border-neutral-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1e5f9e] text-white">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-neutral-900">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#1e5f9e] group-hover:underline">
                  Learn More
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          {/* Central CTA */}
          <div className="mt-10 flex justify-center lg:mt-12">
            <Link
              href="/contact#expert"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1e5f9e] px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#164a7a]"
            >
              Learn More
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
