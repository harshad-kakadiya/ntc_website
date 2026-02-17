import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#009DDA] px-6 py-12 sm:flex-row sm:px-10 sm:py-14">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Ready to Transform Your IT Operations?
            </h2>
            <p className="mt-1 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Let&apos;s Talk!
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-[#171717] transition-colors hover:bg-neutral-100"
          >
            Contact Us Today
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
