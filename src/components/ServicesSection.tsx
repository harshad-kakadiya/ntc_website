import Link from "next/link";

type Theme = {
    sectionBg?: string;
    primaryBlue?: string;
    textMuted?: string;
};

type ServiceItem = {
    title?: string;
    description?: string;
    href?: string;
    slug?: string;
};

type ServicesSectionProps = {
    theme?: Theme;
    title?: string;
    description: string;
    ctaHref?: string;
    ctaText?: string;
    services?: ServiceItem[];
};

const defaultTheme: Theme = {
    sectionBg: "#f4f4f4",
    primaryBlue: "#1C4670",
    textMuted: "#6b7280",
};

export default function ServicesSection({
                                            theme = defaultTheme,
                                            title = "Our Services",
                                            description,
                                            ctaHref = "/services",
                                            ctaText = "Learn More",
                                        }: ServicesSectionProps) {
    return (
        <section
            className="w-full py-14 sm:py-16 lg:py-20"
            style={{ backgroundColor: theme.sectionBg }}
        >
            <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-12">

                {/* HEADER WITH PROPER GAP */}
                <div className="grid items-start gap-16 lg:grid-cols-[480px_1fr] lg:gap-32">

                    {/* LEFT SIDE */}
                    <div>
                        <h2 className="text-[42px] font-semibold leading-[2.05] tracking-tight text-black sm:text-[48px] lg:text-[56px]">
                            {title}
                        </h2>

                        <Link
                            href={ctaHref}
                            className="mt-6 inline-flex w-[240px] items-center justify-between rounded-full px-6 py-3 text-[20px] font-semibold text-white transition-all duration-200 "
                            style={{ backgroundColor: theme.primaryBlue }}
                        >
                            <span>{ctaText}</span>

                            <span className="grid h-8 w-8 place-items-center rounded-full ">
                <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h12" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l6 6-6 6" />
                </svg>
              </span>
                        </Link>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="max-w-[640px]">
                        <p
                            className="text-[15px] leading-8 lg:text-[16px]"
                            style={{ color: theme.textMuted }}
                        >
                            {description}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
