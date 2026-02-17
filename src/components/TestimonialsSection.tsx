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
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  return (
    <section className="bg-[#F3F3F3] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <Link
            href="/case-studies"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1C4670] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#163658]"
          >
            View Case Studies
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Divider line under header */}
        <div className="mt-6 h-px w-full bg-neutral-300" />

        {/* Quote + navigation row */}
        <div className="mt-10 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <blockquote className="max-w-3xl text-left">
            <p className="text-2xl font-medium leading-relaxed text-neutral-900 sm:text-[28px]">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-8">
              <cite className="not-italic">
                <span className="block text-base font-semibold text-neutral-900 sm:text-lg">
                  {testimonial.name}
                </span>
                <span className="block text-sm text-neutral-500 sm:text-base">
                  {testimonial.role}
                </span>
              </cite>
            </footer>
          </blockquote>

          {/* Navigation arrows aligned to the right */}
          <div className="flex justify-start sm:justify-end">
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1C4670] bg-white text-[#1C4670] transition-colors hover:bg-[#E4ECF4]"
                aria-label="Previous testimonial"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setCurrent((i) => (i === testimonials.length - 1 ? 0 : i + 1))}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1C9BF0] text-white transition-colors hover:bg-[#157DC0]"
                aria-label="Next testimonial"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
