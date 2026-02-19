import Image from "next/image";
import HomethreeImage from "../assets/HomePage/hometwo.png";

// ✅ ICON IMAGES
import ExpertiseIcon from "../assets/icon/392c281f881ed78b500f4b5e1ed4db0361db758b.png";
import InnovationIcon from "../assets/icon/e41f2be29afe29d4b0f58d636457dc66b0634905.png";
import ReliabilityIcon from "../assets/icon/ce732699007f74b6bda084b97f8cd61eac1aa13a.png";
import CustomerFocusIcon from "../assets/icon/cc2db771b0d2027299052dd8cebd090f54bc5d86.png";

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

export default function WhyChooseSection() {
    return (
        <section className="relative overflow-hidden bg-[#EEEDE6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            {/* Grain background (same feel like screenshot) */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-multiply">
                <div className="h-full w-full bg-[radial-gradient(rgba(0,0,0,0.18)_1px,transparent_1px)] [background-size:12px_12px]" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                {/* TOP ROW: Title (left) + Paragraph (right) */}
                <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                    <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                        Why Choose NTC?
                    </h2>

                    <p className="max-w-[520px] text-[16px] leading-relaxed text-neutral-600">
                        We believe in a proactive, customer-centric approach to IT service
                        management. Our team of experts works closely with you to understand
                        your business challenges and deliver tailored solutions that drive
                        success. With industry-leading technologies, proven methodologies,
                        and an unwavering commitment to excellence, NTC is your partner in
                        digital transformation.
                    </p>
                </div>

                {/* BOTTOM ROW: Image (left) + Benefits (right) */}
                <div className="mt-12 grid items-start gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
                    {/* LEFT IMAGE (same-to-same: outer soft frame + inner image) */}
                    <div className="w-full">
                        <div className="relative w-full max-w-[560px]">
                            {/* outer frame like screenshot */}
                            <div className="rounded-[34px] bg-[#F3F2ED] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.10)]">
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px]">
                                    <Image
                                        src={HomethreeImage}
                                        alt="Team collaborating"
                                        fill
                                        priority
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT BENEFITS (icon + text + green dividers like screenshot) */}
                    <div className="w-full">
                        <ul className="space-y-7">
                            {benefits.map((benefit, index) => (
                                <li key={benefit.title}>
                                    <div className="flex gap-5">
                                        {/* icon circle */}
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#008FE5] shadow-sm">
                                            <Image
                                                src={benefit.icon}
                                                alt={benefit.title}
                                                width={30}
                                                height={30}
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* text */}
                                        <div className="min-w-0">
                                            <h3 className="text-[20px] font-semibold text-neutral-900">
                                                {benefit.title}
                                            </h3>
                                            <p className="mt-1 text-[16px] leading-relaxed text-neutral-600">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* divider line (starts after icon, same like image) */}
                                    {index !== benefits.length - 1 && (
                                        <div className="mt-6 ml-[68px] h-px w-full bg-[#7CB87C]/70" />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
