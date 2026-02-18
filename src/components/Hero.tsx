import Image from "next/image";
import Link from "next/link";
import HomeHeroImage from "../assets/HomePage/homeone.jpg";

export default function Hero() {
    return (
        <section className="bg-[#EDEBE6] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">

                {/* Left column - copy */}
                <div className="flex flex-col justify-center">

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 leading-tight">
                        Transforming IT <br />
                        Service Management <br />
                        for the Digital Age
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#878C91]">
                        Empowering your business with cutting-edge IT solutions — from
                        Service Desk excellence to Corporate Cyber Security Training.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-16">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 rounded-full bg-[#1e3a5f] px-6 py-4 text-base font-medium text-white transition-colors hover:bg-[#152d47]"
                        >
                            Discover Our Services
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

                        <Link
                            href="/contact#expert"
                            className="text-base font-medium text-neutral-900  underline decoration-neutral-400 underline-offset-4 transition-colors hover:text-neutral-900 hover:decoration-neutral-600"
                        >
                            Speak to an Expert
                        </Link>
                    </div>
                </div>

                {/* Right column - image */}
                <div className="relative order-first lg:order-last">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200 shadow-lg sm:aspect-[5/4] lg:aspect-[4/3]">
                        <Image
                            src={HomeHeroImage}
                            alt="Team members collaborating on IT solutions"
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
