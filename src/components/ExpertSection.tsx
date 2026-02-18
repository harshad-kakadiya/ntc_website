import Image from "next/image";
import Link from "next/link";
import HometwoImage from "../assets/HomePage/homethree.jpg"

export default function ExpertSection() {
  return (
    <section className="bg-section-bg px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
        {/* Left column - image */}
        <div className="relative order-first">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-transparent shadow-md sm:aspect-[5/4] lg:aspect-[4/3]">
            <Image
              src={HometwoImage}
              alt="Two colleagues collaborating at a laptop in an office environment"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right column - copy */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Speak to an Expert
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-600">
            National Technology Consortium is a trusted IT Service Management
            partner dedicated to helping businesses harness the power of modern
            technology. With a focus on tailored solutions and proactive
            support, we ensure your IT operations run smoothly, securely, and
            efficiently.
          </p>
          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-10 rounded-full bg-[#1e3a5f] px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#152d47]"
            >
              View All Services
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
