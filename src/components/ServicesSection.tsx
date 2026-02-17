import Link from "next/link";

const defaultTheme = {
  sectionBg: "#f4f4f4",
  primaryBlue: "#1C4670",
  secondaryBlue: "#008fe5",
  textMuted: "#6b7280",
};

function renderIcon(type) {
  const baseClass = "h-6 w-6";

  switch (type) {
    case "desk":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );

    case "workplace":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="9" cy="7" r="4" />
          <circle cx="15" cy="7" r="4" />
        </svg>
      );

    case "engineer":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
        </svg>
      );

    case "api":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="2" />
        </svg>
      );

    case "vendor":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <circle cx="6" cy="8" r="2" />
          <circle cx="18" cy="8" r="2" />
        </svg>
      );

    case "security":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );

    default:
      return null;
  }
}

export default function ServicesSection({
  theme = defaultTheme,
  title = "Our Services",
  description = "",
  services = [],
  headerCtaHref = "/services",
  headerCtaText = "Learn More",
}) {
  return (
    <section>
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>

            <div className="mt-6">
              <Link
                href={headerCtaHref}
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-white transition hover:opacity-95"
                style={{ backgroundColor: theme.secondaryBlue }}
              >
                {headerCtaText}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <p className="max-w-xl text-base leading-relaxed lg:pt-2" style={{ color: theme.textMuted }}>
            {description}
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="px-8">
        <div className="rounded-2xl px-4 py-20 sm:px-6 lg:px-8" style={{ backgroundColor: theme.secondaryBlue }}>
          <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={services.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full border-2 text-white"
                  style={{
                    borderColor: theme.secondaryBlue,
                    backgroundColor: theme.secondaryBlue,
                  }}
                >
                  {renderIcon(service.icon)}
                </div>

                <h3 className="mt-4 text-lg font-bold text-neutral-900">
                  {service.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                  {service.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 group-hover:underline">
                  Learn More
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
