import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 sm:gap-5 md:gap-6 rounded-xl sm:rounded-2xl bg-[#009DDA] px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-14 text-center sm:text-left sm:flex-row">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight text-white leading-tight">
              Ready to Transform Your IT Operations?
            </h2>
            <p className="mt-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-medium">
              Let&apos;s Talk!
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-white px-5 sm:px-6 md:px-7 lg:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base font-semibold text-[#171717] transition-all duration-300 hover:bg-neutral-100 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg w-fit sm:w-auto"
          >
            Contact Us Today
            <svg 
              className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" 
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
    </section>
  );
}