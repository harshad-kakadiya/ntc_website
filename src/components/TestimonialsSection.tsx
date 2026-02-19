"use client";

import Link from "next/link";
import { useState } from "react";

const testimonials = [
    {
        quote:
            "NTC’s IT Service Desk transformed our support operations. Their proactive approach has been a game changer.",
        name: "Michael Kaizer",
        role: "CEO of Basecamp Corp",
    },
    // add 6–9 testimonials here...
];

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);
    const testimonial = testimonials[current];

    const prev = () =>
        setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1));
    const next = () =>
        setCurrent((i) => (i === testimonials.length - 1 ? 0 : i + 1));

    return (
        <section className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
            {/* subtle grain */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-multiply">
                <div className="h-full w-full bg-[radial-gradient(rgba(0,0,0,0.14)_1px,transparent_1px)] [background-size:10px_10px]" />
            </div>

            <div className="relative mx-auto max-w-6xl">
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-[48px] sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 text-center sm:text-left">
                        What Our Clients Say
                    </h2>

                    <Link
                        href="/case-studies"
                        className="inline-flex shrink-0 items-center justify-center gap-5 rounded-full bg-[#1C4670] px-6 md:px-7 py-2.5 md:py-3 text-[16px] font-semibold text-white transition-all duration-300 hover:bg-[#163658] active:scale-95 mx-auto sm:mx-0 w-fit"
                    >
                        View Case Studies
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
                    </Link>
                </div>

                {/* Divider */}
                <div className="mt-5 md:mt-6 h-px w-full bg-black/20" />

                {/* Body (relative so we can place buttons bottom-right like screenshot) */}
                <div className="relative mt-6 pb-16 sm:pb-20 lg:pb-0">
                    {/* Quote */}
                    <blockquote className="max-w-5xl text-left">
                        <p className="text-[36px] sm:text-5xl md:text-[30px] font-medium leading-relaxed text-neutral-900">
                            &ldquo;{testimonial.quote}&rdquo;
                        </p>

                        <footer className="mt-8 md:mt-10">
                            <cite className="not-italic">
                <span className="block text-[20px] font-semibold text-neutral-900">
                  {testimonial.name}
                </span>
                                <span className="block text-[16px] text-neutral-600 mt-0.5">
                  {testimonial.role}
                </span>
                            </cite>
                        </footer>
                    </blockquote>

                    {/* NAV BUTTONS
              - Mobile: show under content (normal flow)
              - Desktop (lg+): position bottom-right like your image
          */}
                    <div className="mt-6 flex justify-center lg:mt-0 lg:absolute lg:right-0 lg:bottom-2">
                        <div className="flex items-center gap-4">
                            {/* Prev - outlined pill */}
                            <button
                                type="button"
                                onClick={prev}
                                className="group inline-flex items-center justify-center rounded-full border border-[#1C4670] bg-white px-6 h-11 sm:h-12 font-semibold text-[#1C4670] transition-all duration-300 hover:bg-[#EDF3F8] active:scale-95"
                                aria-label="Previous testimonial"
                            >
                                <svg
                                    className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>

                            {/* Next - filled pill */}
                            <button
                                type="button"
                                onClick={next}
                                className="group inline-flex items-center justify-center rounded-full bg-[#199ED8] px-6 h-11 sm:h-12 font-semibold text-white transition-all duration-300 hover:bg-[#1584B4] active:scale-95"
                                aria-label="Next testimonial"
                            >
                                <svg
                                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
