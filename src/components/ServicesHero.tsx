import Image from "next/image";
import Link from "next/link";
import mainImage from "../assets/ServicasePage/mainImage.png";

const defaultTheme = {
    sectionBg: "#EDEBE6",
    primaryBlue: "#1C4670",
    secondaryBlue: "#008fe5",
    textMuted: "#6b7280",
};

export default function ServicesHero({
                                         theme = defaultTheme,
                                         title = "Our Services",
                                         description = "At NTC, we offer a comprehensive suite of IT solutions designed to meet the evolving needs of modern businesses. Whether you're looking for robust IT support, innovative workplace solutions, or enhanced cybersecurity, we have the expertise to help you succeed.",
                                         ctaHref = "/services",
                                         ctaText = "Speak to an Expert",
                                     }) {
    return (
        <section
            className="py-12 md:py-16 lg:py-20 xl:py-24"
            style={{ backgroundColor: theme.sectionBg }}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-8 md:gap-10 lg:gap-14 lg:grid-cols-2">

                    {/* LEFT */}
                    <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">

                        <h1 className="text-[58px] sm:text-4xl md:text-[42px] lg:text-[48px] xl:text-[52px] leading-tight md:leading-[1.1] lg:leading-[1.05] font-semibold text-black">
                            {title}
                        </h1>

                        <p
                            className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-[16px] leading-relaxed sm:leading-7 md:leading-8"
                            style={{ color: theme.textMuted }}
                        >
                            {description}
                        </p>

                        <div className="mt-6 sm:mt-8 md:mt-10">
                            <Link
                                href={ctaHref}
                                className="inline-flex items-center justify-center gap-4 rounded-full px-8 py-3 text-[16px] font-medium text-white shadow-sm transition-all duration-300 hover:opacity-95 hover:scale-105 active:scale-95"
                                style={{ backgroundColor: theme.primaryBlue }}
                            >
                                {ctaText}
                                <span className="grid h-8 w-8 place-items-center rounded-full">
                  <svg
                      className="h-5 w-5"
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
                </span>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[560px] overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[22px] lg:rounded-[26px] shadow-lg">
                            <div className="absolute inset-0 ring-1 ring-black/5 sm:ring-black/10 rounded-xl sm:rounded-2xl md:rounded-[22px] lg:rounded-[26px]" />
                            <Image
                                src={mainImage}
                                alt="Office workspace"
                                width={1120}
                                height={760}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
