"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
  },
  { href: "/our-approach", label: "Our Approach" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const serviceItems = [
  { href: "/services/it-service-desk", label: "IT Service Desk" },
  { href: "/services/modern-workplace", label: "Modern Workplace" },
  { href: "/services/euc-engineer", label: "EUC Engineer" },
  { href: "/services/api-development", label: "API Development" },
  { href: "/services/vendor-management", label: "Vendor Management (Upguard)" },
  { href: "/services/cyber-security-training", label: "Cyber Security" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 flex-col">
          <span className="relative inline-block text-2xl font-bold tracking-tight text-[#2d7a3e]">
            NTC
            <span className="absolute left-0 top-full mt-0.5 h-0.5 w-3 bg-[#2d7a3e]" aria-hidden />
          </span>
          <span className="mt-1 text-xs font-medium text-neutral-500">
            Tech Solutions
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
                >
                  {item.label}
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="rounded-lg border border-neutral-200 bg-white py-2 shadow-lg min-w-[240px]">
                      <Link
                        href="/services"
                        className="block border-b border-neutral-100 px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                      >
                        All Services
                      </Link>
                      {serviceItems.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* CTA buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-[#1e5f9e] transition-colors hover:bg-neutral-50"
          >
            Get In Touch
          </Link>
          <Link
            href="/contact#consultation"
            className="rounded-lg bg-[#1e5f9e] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#164a7a]"
          >
            Request A Consultation
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) =>
              item.hasDropdown ? (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <div className="ml-3 mt-1 flex flex-col gap-1 border-l-2 border-neutral-200 pl-3">
                    <Link
                      href="/services"
                      className="py-1.5 text-sm font-medium text-neutral-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      All Services
                    </Link>
                    {serviceItems.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="py-1.5 text-sm text-neutral-600 hover:text-neutral-900"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="mt-4 flex flex-col gap-2 border-t border-neutral-200 pt-4">
              <Link
                href="/contact"
                className="rounded-lg border border-neutral-300 py-2.5 text-center text-sm font-medium text-[#1e5f9e]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get In Touch
              </Link>
              <Link
                href="/contact#consultation"
                className="rounded-lg bg-[#1e5f9e] py-2.5 text-center text-sm font-medium text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request A Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
