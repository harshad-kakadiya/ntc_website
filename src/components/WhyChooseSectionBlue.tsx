import Image from "next/image";
import AboutTwoimage from "../assets/HomePage/hometwo.png";

/* ✅ copy-to-copy colors */
const ICON_BG = "#22C58B";
const ICON_STROKE = "#FFFFFF";

const benefits = [
    {
        title: "Expertise",
        description: "A seasoned team with deep industry knowledge.",
        icon: (
            <svg
                className="h-[30px] w-[30px]"
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
                className="h-[30px] w-[30px]"
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
                className="h-[30px] w-[30px]"
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
                className="h-[30px] w-[30px]"
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
        <section className="relative overflow-hidden">
            {/* ✅ background */}
            <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_18%_10%,rgba(0,0,0,0.22),transparent_60%),linear-gradient(135deg,#028FC7_0%,#00A6D8_100%)]" />

            {/* ✅ bottom strip + top divider line (like image) */}
            <div className="absolute bottom-0 left-0 right-0 h-[185px] bg-[#EFEFEF]" />
            <div className="absolute bottom-[185px] left-0 right-0 h-[6px] bg-[#DFF3FF]" />

            {/* ✅ content */}
            <div className="relative px-6 pt-[78px] pb-[205px] lg:px-[80px]">
                <div className="mx-auto max-w-[1500px]">
                    {/* ✅ top row */}
                    <div className="grid gap-16 lg:grid-cols-[650px_1fr] lg:items-start">
                        <h2 className="!text-[66px] !leading-[1.02] font-semibold tracking-tight text-black">
                            Why Choose NTC?
                        </h2>

                        <p className="max-w-[820px] text-[15px] leading-8 text-white/95">
                            We believe in a proactive, customer-centric approach to IT service
                            management. Our team of experts works closely with you to understand
                            your business challenges and deliver tailored solutions that drive
                            success. With industry-leading technologies, proven methodologies,
                            and an unwavering commitment to excellence, NTC is your partner in
                            digital transformation.
                        </p>
                    </div>

                    {/* ✅ bottom row */}
                    <div className="mt-[68px] grid gap-16 lg:grid-cols-[650px_1fr] lg:items-start">
                        {/* ✅ LEFT image (same frame look + softer border) */}
                        <div className="relative">
                            <div className="relative w-[640px] max-w-full">
                                <div className="relative h-[610px] rounded-[44px] border-[14px] border-[#CDEEFF] shadow-[0_22px_60px_rgba(0,0,0,0.22)]">
                                    <div className="absolute inset-[14px] overflow-hidden rounded-[34px] bg-white">
                                        <Image
                                            src={AboutTwoimage}
                                            alt="Team collaborating"
                                            fill
                                            className="object-cover"
                                            priority
                                            sizes="640px"
                                        />
                                    </div>
                                </div>

                                {/* ✅ overlap into strip */}
                                <div className="hidden lg:block h-[140px]" />
                            </div>
                        </div>

                        {/* ✅ RIGHT list (titles bigger, divider starts after icon) */}
                        <div className="pt-2">
                            <ul className="space-y-0 max-w-[900px]">
                                {benefits.map((benefit, index) => (
                                    <li key={benefit.title} className="py-7 first:pt-0">
                                        <div className="flex gap-8">
                                            <div
                                                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full shadow-[0_12px_26px_rgba(0,0,0,0.18)]"
                                                style={{ backgroundColor: ICON_BG }}
                                            >
                                                {benefit.icon}
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <h3 className="text-[26px] font-semibold leading-7 text-[#0B3E5C]">
                                                    {benefit.title}
                                                </h3>

                                                <p className="mt-2 text-[15px] leading-7 text-white/95">
                                                    {benefit.description}
                                                </p>

                                                {index !== benefits.length - 1 && (
                                                    <div className="mt-8 h-px w-full bg-white/25" />
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* end bottom row */}
                </div>
            </div>
        </section>
    );
}
