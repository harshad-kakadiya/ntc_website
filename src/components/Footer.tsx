"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ntcLogo from "@/assets/logo.png";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: wire to your API or mailing list
    if (email) setEmail("");
  }

  return (
    <footer className="bg-[#f5f5f5] text-neutral-700">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand & social */}
          <div className="space-y-4 text-center sm:text-left">
            <Link href="/" className="inline-flex flex-col items-center sm:items-start gap-2">
              <Image
                src={ntcLogo}
                alt="NTC - National Technology Consortium"
                width={91}
                height={72}
                className="h-[60px] w-[76px] sm:h-[66px] sm:w-[84px] lg:h-[72px] lg:w-[91px] object-contain"
                priority={false}
              />
            </Link>
            <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 sm:h-10 sm:w-10 lg:h-11 lg:w-11 items-center justify-center rounded-full bg-[#EDEBE6] text-neutral-700 transition-all duration-300 hover:bg-neutral-200 hover:text-neutral-900 hover:scale-110 active:scale-95"
                >
                  <svg
                    className="h-4 w-4 sm:h-4.5 sm:w-4.5 lg:h-5 lg:w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-xs sm:text-sm font-bold tracking-wider text-neutral-900 uppercase">
              Quick Links
            </h3>
            <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-500 transition-colors hover:text-neutral-900 text-xs sm:text-[13px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help / Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-xs sm:text-sm font-bold tracking-wider text-neutral-900 uppercase">
              Help
            </h3>
            <ul className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3">
              <li>
                <a
                  href="tel:+442920490000"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 text-neutral-600 transition-colors hover:text-neutral-900"
                >
                  <svg
                    className="h-4 w-4 sm:h-4.5 sm:w-4.5 lg:h-5 lg:w-5 shrink-0 text-neutral-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.9.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.7.6 3.9.1.4 0 .8-.3 1.1l-2 1.8z" />
                  </svg>
                  <span className="text-neutral-500 text-xs sm:text-[13px]">
                    +44 29 2049 0000
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ntctech.com"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 text-neutral-600 transition-colors hover:text-neutral-900"
                >
                  <svg
                    className="h-4 w-4 sm:h-4.5 sm:w-4.5 lg:h-5 lg:w-5 shrink-0 text-neutral-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span className="text-neutral-500 text-xs sm:text-[13px]">
                    info@ntctech.com
                  </span>
                </a>
              </li>
              <li>
                <span className="inline-flex items-start justify-center sm:justify-start gap-2 text-neutral-600">
                  <svg
                    className="mt-[3px] sm:mt-[2px] h-4 w-4 sm:h-4.5 sm:w-4.5 lg:h-5 lg:w-5 shrink-0 text-neutral-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
                  </svg>
                  <span className="text-neutral-500 text-xs sm:text-[13px] max-w-[200px] sm:max-w-none">
                    15 Neptune Court, Vanguard Way, Cardiff, CF24 5PJ
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h3 className="text-xs sm:text-sm font-bold tracking-wider text-neutral-900 uppercase">
              Newsletter
            </h3>
            <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-neutral-600">
              Stay updated with our latest insights
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="mt-3 sm:mt-4 w-full"
            >
              <div className="flex items-center rounded-lg sm:rounded-xl bg-white px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3 lg:py-4 shadow-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Here"
                  className="flex-1 bg-transparent text-xs sm:text-sm lg:text-base text-neutral-800 placeholder-neutral-400 focus:outline-none"
                  aria-label="Email for newsletter"
                  required
                />

                <button
                  type="submit"
                  className="ml-2 sm:ml-3 lg:ml-4 text-xs sm:text-sm lg:text-base font-semibold text-[#1FB874] transition-all duration-300 hover:text-[#16965e] hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col items-center justify-between gap-3 sm:gap-4 border-t border-neutral-200 pt-6 sm:pt-8 text-center sm:flex-row">
          <p className="text-xs sm:text-sm text-neutral-500 order-2 sm:order-1">
            ntc © 2025, all rights reserved.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm order-1 sm:order-2">
            <Link
              href="/privacy"
              className="text-neutral-500 transition-colors hover:text-neutral-900"
            >
              Privacy Policy
            </Link>
            <span className="text-neutral-300">|</span>
            <Link
              href="/terms"
              className="text-neutral-500 transition-colors hover:text-neutral-900"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}