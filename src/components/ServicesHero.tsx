import Link from "next/link";

export default function ServicesHero() {
    return (
        <section className="bg-amber-50 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Outer container (like screenshot white strip) */}
                <div className="grid items-center gap-10 rounded-2xl bg-amber-50 py-10 sm:py-12 lg:grid-cols-2 lg:gap-16 lg:py-14">

                    {/* LEFT */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
                            Our Services
                        </h1>

                        <div className="mt-6">
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-between gap-6 rounded-full bg-[#0f3a63] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#0c2f52]"
                            >
                                <span>Learn More</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <svg
                      className="h-4 w-4"
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
                </span>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="max-w-2xl text-sm leading-6 text-neutral-500 sm:text-base">
                        <p>
                            At NTC, we offer a comprehensive suite of IT solutions designed to
                            meet the evolving needs of modern businesses. Whether you're
                            looking for robust IT support, innovative workplace solutions, or
                            enhanced cybersecurity, we have the expertise to help you succeed.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
