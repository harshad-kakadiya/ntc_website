import Image from "next/image";
import AboutTwoimage from "../assets/ServicasePage/servicesImage.png";

const benefits = [
    {
        title: "Expertise",
        description: "A seasoned team with deep industry knowledge.",
        icon: (
            <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 2l2.6 5.8L21 9l-4.7 4.2L17.5 21 12 17.8 6.5 21l1.2-7.8L3 9l6.4-1.2L12 2z" />
                <path d="M9.5 12.5l1.8 1.8 3.8-3.8" />
            </svg>
        ),
    },
    {
        title: "Innovation",
        description: "Leveraging the latest technology trends to drive growth.",
        icon: (
            <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <path d="M12 2a7 7 0 0 0-4 12c.7.6 1 1.2 1 2h6c0-.8.3-1.4 1-2A7 7 0 0 0 12 2z" />
            </svg>
        ),
    },
    {
        title: "Reliability",
        description: "Consistent, high-quality service that you can trust.",
        icon: (
            <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" />
                <path d="M9.5 12.5l1.8 1.8 3.8-3.8" />
            </svg>
        ),
    },
    {
        title: "Customer Focus",
        description: "Solutions designed with your business in mind.",
        icon: (
            <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
                <path d="M12 11l1.2 1.2L12 14l-1.2-1.8L12 11z" />
            </svg>
        ),
    },
];

export default function WhyChooseNTC() {
    return (
        <section className="relative overflow-hidden bg-[#e6e6dc] px-4 py-16 sm:px-6 lg:px-8">
            {/* grain / noise like screenshot */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-multiply">
                <div className="h-full w-full bg-[radial-gradient(rgba(0,0,0,0.14)_1px,transparent_1px)] [background-size:10px_10px]" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-16">
                    {/* LEFT */}
                    <div>
                        <h2 className="text-[44px] font-semibold leading-tight tracking-tight text-neutral-900 sm:text-[52px]">
                            Why Choose NTC?
                        </h2>

                        {/* image card: white frame + big radius like screenshot */}
                        <div className="mt-10">
                            <div className="rounded-[34px] bg-white p-3 shadow-[0_22px_60px_rgba(0,0,0,0.16)] ring-1 ring-black/5">
                                <div className="relative overflow-hidden rounded-[28px]">
                                    <Image
                                        src={AboutTwoimage}
                                        alt="Team collaborating in a modern office"
                                        className="h-[360px] w-full object-cover sm:h-[430px]"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:pt-2">
                        <p className="max-w-xl text-[13.5px] leading-7 text-neutral-600 sm:text-[14.5px]">
                            We believe in a proactive, customer-centric approach to IT service
                            management. Our team of experts works closely with you to
                            understand your business challenges and deliver tailored solutions
                            that drive success. With industry-leading technologies, proven
                            methodologies, and an unwavering commitment to excellence, NTC is
                            your partner in digital transformation.
                        </p>

                        {/* Benefits list */}
                        <div className="mt-14 max-w-xl">
                            <ul className="space-y-9">
                                {benefits.map((b, idx) => (
                                    <li key={b.title} className="relative">
                                        <div className="flex gap-5">
                                            {/* Icon circle */}
                                            <div className="mt-1 flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full bg-[#009DDA] text-white shadow-sm ring-2 ring-white">
                                                {b.icon}
                                            </div>

                                            {/* Text */}
                                            <div className="w-full">
                                                <h3 className="text-[18px] font-semibold text-neutral-900">
                                                    {b.title}
                                                </h3>
                                                <p className="mt-1 text-[13.5px] leading-6 text-neutral-600">
                                                    {b.description}
                                                </p>

                                                {/* green divider like screenshot */}
                                                {idx !== benefits.length - 1 && (
                                                    <div className="mt-6 h-px w-full bg-[#39d98a]" />
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
        </section>
    );
}
