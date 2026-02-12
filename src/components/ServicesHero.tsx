import Image from "next/image";
import Link from "next/link";
import AboutHeroImage from "../assets/ServicasePage/servicesheroimageone.png"

export default function ServicesHero() {
  return (
    <section className="bg-section-bg px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
        {/* Left column - copy */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Our Services
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-600">
            At NTC, we offer a comprehensive suite of IT solutions designed to
            meet the evolving needs of modern businesses. Whether you&apos;re
            looking for robust IT support, innovative workplace solutions, or
            enhanced cybersecurity, we have the expertise to help you succeed.
          </p>
          <div className="mt-8">
            <Link
              href="/contact#expert"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1e3a5f] px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#152d47]"
            >
              Speak to an Expert
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

        {/* Right column - image */}
        <div className="relative order-first lg:order-last">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200 shadow-lg">
            <Image
              src={AboutHeroImage}
              alt="Modern office or training room with desks and equipment"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
