"use client";

import Link from "next/link";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "NTC's IT Service Desk transformed our support operations. Their proactive approach has been a game changer.",
    name: "Michael Kaizer",
    role: "CEO of Basecamp Corp",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  const prev = () =>
    setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setCurrent((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="relative overflow-hidden bg-[#EDEBE6] px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
      {/* subtle grain like screenshot */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-multiply">
        <div className="h-full w-full bg-[radial-gradient(rgba(0,0,0,0.14)_1px,transparent_1px)] [background-size:8px_8px] sm:[background-size:10px_10px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 text-center sm:text-left">
            What Our Clients Say
          </h2>

          <Link
            href="/case-studies"
            className="inline-flex shrink-0 items-center justify-center gap-2 sm:gap-3 rounded-full bg-[#1C4670] px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-[#163658] hover:scale-105 active:scale-95 mx-auto sm:mx-0 w-fit"
          >
            View Case Studies
            <svg
              className="h-3.5 w-3.5 sm:h-4 sm:w-4"
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

        {/* Divider line */}
        <div className="mt-4 sm:mt-5 md:mt-6 h-px w-full bg-black/20" />

        {/* Quote + navigation row */}
        <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:flex-row lg:items-center lg:justify-between">
          <blockquote className="max-w-3xl text-left">
            <p className="text-xl sm:text-2xl md:text-[24px] lg:text-[26px] xl:text-[27px] font-medium leading-relaxed sm:leading-[1.5] md:leading-[1.55] lg:leading-[1.6] text-neutral-900">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            <footer className="mt-6 sm:mt-8 md:mt-10">
              <cite className="not-italic">
                <span className="block text-sm sm:text-base font-semibold text-neutral-900">
                  {testimonial.name}
                </span>
                <span className="block text-xs sm:text-sm text-neutral-600 mt-0.5">
                  {testimonial.role}
                </span>
              </cite>
            </footer>
          </blockquote>

          <div className="flex justify-center lg:justify-end">
            <div className="flex shrink-0 items-center gap-3 sm:gap-4 mt-0 lg:mt-40">
              <button
                type="button"
                onClick={prev}
                className="flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-[#1C4670] bg-transparent text-[#1C4670] transition-all duration-300 hover:bg-[#EDF3F8] hover:scale-105 active:scale-95"
                aria-label="Previous testimonial"
              >
                <svg
                  className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5"
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

              <button
                type="button"
                onClick={next}
                className="flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#199ED8] text-white transition-all duration-300 hover:bg-[#1584B4] hover:scale-105 active:scale-95"
                aria-label="Next testimonial"
              >
                <svg
                  className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5"
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