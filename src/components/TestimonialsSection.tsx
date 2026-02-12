"use client";

import Link from "next/link";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "NTC's IT Service Desk transformed our support operations. Their proactive approach has been a game changer.",
    name: "Michael Kaizer",
    role: "CEO of Basecorp Corp",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <Link
            href="/case-studies"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#1e5f9e] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#164a7a]"
          >
            View Case Studies
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <blockquote className="max-w-3xl">
            <p className="text-xl font-medium italic leading-relaxed text-neutral-900 sm:text-2xl">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-6">
              <cite className="not-italic">
                <span className="block font-bold text-neutral-900">{testimonial.name}</span>
                <span className="block text-sm text-neutral-600">{testimonial.role}</span>
              </cite>
            </footer>
          </blockquote>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-800 transition-colors hover:bg-neutral-50"
              aria-label="Previous testimonial"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setCurrent((i) => (i === testimonials.length - 1 ? 0 : i + 1))}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1e5f9e] text-white transition-colors hover:bg-[#164a7a]"
              aria-label="Next testimonial"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
