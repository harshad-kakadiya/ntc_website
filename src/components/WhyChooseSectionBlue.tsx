import Image from "next/image";
import AboutTwoimage from "../assets/ServicasePage/servicesImage.png";

/* ✅ ICON IMAGES */
import ExpertiseIcon from "../assets/icon/392c281f881ed78b500f4b5e1ed4db0361db758b.png";
import InnovationIcon from "../assets/icon/e41f2be29afe29d4b0f58d636457dc66b0634905.png";
import ReliabilityIcon from "../assets/icon/ce732699007f74b6bda084b97f8cd61eac1aa13a.png";
import CustomerFocusIcon from "../assets/icon/cc2db771b0d2027299052dd8cebd090f54bc5d86.png";

/* Colors */
const SECTION_BG = "#009BD7";
const IMAGE_RING_COLOR = "#BFE9FF";
const ICON_BG = "#1DC690";

const benefits = [
    {
        title: "Expertise",
        description: "A seasoned team with deep industry knowledge.",
        icon: ExpertiseIcon,
    },
    {
        title: "Innovation",
        description: "Leveraging the latest technology trends to drive growth.",
        icon: InnovationIcon,
    },
    {
        title: "Reliability",
        description: "Consistent, high-quality service that you can trust.",
        icon: ReliabilityIcon,
    },
    {
        title: "Customer Focus",
        description: "Solutions designed with your business in mind.",
        icon: CustomerFocusIcon,
    },
];

export default function WhyChooseSectionBlue() {
    return (
        <section className="relative">
            {/* Blue area */}
            <div className="relative" style={{ backgroundColor: SECTION_BG }}>
                {/* subtle gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />

                {/* ✅ PX FIXED HERE */}
                <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-24 lg:px-8 lg:pt-20 lg:pb-32">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-10">

                        {/* TOP LEFT: Title */}
                        <div className="lg:col-start-1 lg:row-start-1">
                            <h2 className="text-[48px] font-semibold tracking-tight text-black lg:leading-[1.05]">
                                Why Choose NTC?
                            </h2>
                        </div>

                        {/* TOP RIGHT: Paragraph */}
                        <div className="lg:col-start-2 lg:row-start-1 lg:pt-2">
                            <p className="max-w-xl text-[16px] leading-relaxed text-white">
                                We believe in a proactive, customer-centric approach to IT service
                                management. Our team of experts works closely with you to understand
                                your business challenges and deliver tailored solutions that drive
                                success. With industry-leading technologies, proven methodologies,
                                and an unwavering commitment to excellence, NTC is your partner in
                                digital transformation.
                            </p>
                        </div>

                        {/* BOTTOM LEFT: Image */}
                        <div className="lg:col-start-1 lg:row-start-2 ">
                            <div className="relative">
                                <div
                                    className="rounded-[28px] p-[8px] shadow-xl"
                                    style={{ backgroundColor: IMAGE_RING_COLOR }}
                                >
                                    <div className="overflow-hidden rounded-[22px] bg-white">
                                        <div className="relative w-[523px] max-w-[581px] aspect-[523/581]">
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
                            </div>
                        </div>

                        {/* BOTTOM RIGHT: Benefit list */}
                        <div className="lg:col-start-2 lg:row-start-2">
                            <ul className="mt-5 space-y-6">
                                {benefits.map((benefit, index) => (
                                    <li key={benefit.title}>
                                        <div className="flex items-start gap-5">
                                            <div
                                                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                                                style={{ backgroundColor: ICON_BG }}
                                            >
                                                <Image
                                                    src={benefit.icon}
                                                    alt={benefit.title}
                                                    width={30}
                                                    height={30}
                                                    className="object-contain"
                                                />
                                            </div>

                                            <div className="min-w-0">
                                                <h3 className="text-[24px] font-semibold text-[#1C4670]">
                                                    {benefit.title}
                                                </h3>
                                                <p className="mt-1 text-[15px] leading-relaxed text-white">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </div>

                                        {index !== benefits.length - 1 && (
                                            <div className="ml-[68px] mt-6 h-px w-full bg-white/40" />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* White area under blue */}
            <div className="h-28 bg-white sm:h-32 lg:h-40" aria-hidden="true" />
        </section>
    );
}
