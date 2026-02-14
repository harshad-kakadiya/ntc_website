// import React from "react";
// import HowItWorksImage from "@/assets/Your-Dedicated-IT/img 3.png";
// import Image from "next/image"; // keep as you said
//
// export default function HowItWorks() {
//     const steps = [
//         {
//             title: "Connect",
//             desc: "Reach out via our multi-channel support options.",
//             icon: (
//                 <svg
//                     viewBox="0 0 24 24"
//                     className="h-5 w-5"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                 >
//                     <path d="M16 8a4 4 0 10-8 0" />
//                     <path d="M20 21a8 8 0 10-16 0" />
//                     <path d="M18 8h3" />
//                     <path d="M19.5 6.5v3" />
//                 </svg>
//             ),
//         },
//         {
//             title: "Diagnose",
//             desc: "Our experts assess and resolve your issue promptly.",
//             icon: (
//                 <svg
//                     viewBox="0 0 24 24"
//                     className="h-5 w-5"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                 >
//                     <path d="M12 2v3" />
//                     <path d="M12 19v3" />
//                     <path d="M4.22 4.22l2.12 2.12" />
//                     <path d="M17.66 17.66l2.12 2.12" />
//                     <path d="M2 12h3" />
//                     <path d="M19 12h3" />
//                     <path d="M4.22 19.78l2.12-2.12" />
//                     <path d="M17.66 6.34l2.12-2.12" />
//                     <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
//                 </svg>
//             ),
//         },
//         {
//             title: "Resolve",
//             desc: "We implement long-term solutions to prevent future disruptions.",
//             icon: (
//                 <svg
//                     viewBox="0 0 24 24"
//                     className="h-5 w-5"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                 >
//                     <path d="M20 6L9 17l-5-5" />
//                 </svg>
//             ),
//         },
//     ];
//
//     return (
//         <section className="w-full bg-gradient-to-br bg-[#008fe5] via-cyan-600 to-teal-600">
//             <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
//                 {/* Header */}
//                 <div className="mb-8 sm:mb-10">
//                     <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
//                         How It Works
//                     </h2>
//                     <p className="mt-2 text-sm text-white/85 sm:text-base">
//                         Our process is simple and effective
//                     </p>
//                 </div>
//
//                 {/* Content */}
//                 <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
//                     {/* Left Image Card */}
//                     <div className="w-full">
//                         <div className="rounded-3xl bg-white/12 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.28)] ring-1 ring-white/20 backdrop-blur-md">
//                             <div className="overflow-hidden rounded-2xl">
//                                 <Image
//                                     src={HowItWorksImage}
//                                     alt="How it works"
//                                     className="h-[220px] w-full object-cover sm:h-[280px] md:h-[320px] lg:h-[360px]"
//                                     loading="lazy"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//
//                     {/* Right Steps */}
//                     <div className="w-full">
//                         <div className="space-y-6 sm:space-y-7">
//                             {steps.map((s) => (
//                                 <div key={s.title} className="flex items-start gap-4">
//                                     <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400/25 text-white ring-1 ring-white/20">
//                                         {s.icon}
//                                     </div>
//
//                                     <div className="min-w-0 flex-1">
//                                         <div className="flex items-center gap-3">
//                                             <h3 className="text-base font-semibold text-white sm:text-lg">
//                                                 {s.title}
//                                             </h3>
//                                             <span className="hidden h-px flex-1 bg-white/25 sm:block" />
//                                         </div>
//
//                                         <p className="mt-1 text-sm leading-relaxed text-white/85 sm:text-base">
//                                             {s.desc}
//                                         </p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//
//                         {/* little base line like screenshot feel */}
//                         <div className="mt-8 h-px w-full bg-white/20" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
import React from "react";
import HowItWorksImage from "@/assets/Your-Dedicated-IT/img 3.png";
import Image from "next/image"; // keep as you said


const benefits = [
    {
        title: "Expertise",
        description: "A seasoned team with deep industry knowledge.",
        icon: (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M12 2v4M12 2l1.5 3M12 2l-1.5 3M9 5l1 2M15 5l-1 2" />
            </svg>
        ),
    },
    {
        title: "Innovation",
        description: "Leveraging the latest technology trends to drive growth.",
        icon: (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18h6M10 22h4M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                <path d="M12 2v2M4.22 4.22l1.42 1.42M2 12h2M19.78 4.22l-1.42 1.42M22 12h-2" />
            </svg>
        ),
    },
    {
        title: "Reliability",
        description: "Consistent, high-quality service that you can trust.",
        icon: (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4" />
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            </svg>
        ),
    },
    {
        title: "Customer Focus",
        description: "Solutions designed with your business in mind.",
        icon: (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
                <circle cx="12" cy="12" r="2" />
            </svg>
        ),
    },
];

export default function WhyChooseSection() {
    return (
        <section className="bg-[#008fe5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto grid max-w-7xl gap-12  lg:gap-16 lg:items-start">
                {/* Left: heading + image */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight  text-neutral-900 sm:text-4xl">
                        How It Works
                    </h2>
                    <div className="text-white">
                        Our process is simple and effective
                    </div>

                </div>

                {/* Right: intro + benefits list */}
                <div className="inline-flex">
                    <div className="relative aspect-[4/3]  rounded-2xl bg-neutral-200 shadow-md">
                        <Image
                            src={HowItWorksImage}
                            alt="Professional team collaborating around a conference table in a modern office"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                    <ul className="mt-10 space-y-0">
                        {benefits.map((benefit, index) => (
                            <li key={benefit.title}>
                                {index > 0 && (
                                    <hr className="border-t border-[#7cb87c]/50 my-6" />
                                )}
                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#008fe5] bg-[#008fe5] text-white">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-neutral-900">
                                            {benefit.title}
                                        </h3>
                                        <p className="mt-1 text-sm leading-relaxed text-neutral-700 sm:text-base">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
