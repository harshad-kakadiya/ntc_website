import Link from "next/link";

export default function ServicesHero() {
    return (
        <section className="bg-[#f4f4f4] py-24">
            <div className="mx-auto max-w-7xl px-8">

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* LEFT SIDE */}
                    <div className="max-w-lg">
                        <h1 className="text-[48px] font-semibold leading-tight text-black">
                            Our Services
                        </h1>

                        <div className="mt-12">
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-8 rounded-full bg-[#1C4670] px-12 py-5 text-[15px] font-semibold text-white transition hover:bg-[#1b3e5c]"
                            >
                                Learn More
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
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="max-w-xl">
                        <p className="text-[16px] leading-8 text-[#6b7280]">
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
