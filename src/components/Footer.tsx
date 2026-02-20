"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ntcLogo from "@/assets/logo/logo.png";

const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

const socialLinks = [
    {
        href: "https://share.google/LBztw0DOwPgvmVue8",
        label: "Google",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 24 24">
                <path
                    fill="#080808"
                    d="M12.183 2.75c-3.683 0-6.902 2.031-8.419 5.088a9.05 9.05 0 0 0 0 8.325c1.517 3.056 4.736 5.087 8.419 5.087c2.54 0 4.72-.827 6.244-2.224c2.484-2.173 3.185-5.599 2.658-8.688a.25.25 0 0 0-.246-.208h-8.656a.25.25 0 0 0-.25.25v3.33c0 .138.112.25.25.25h4.768c-.166.74-.687 1.747-1.685 2.423l-.008.005c-.685.502-1.735.852-3.075.852c-2.936 0-5.275-2.455-5.275-5.33c0-2.783 2.472-5.24 5.275-5.24c1.67 0 2.72.683 3.429 1.29a.25.25 0 0 0 .337-.011l2.578-2.52a.25.25 0 0 0-.011-.368c-1.609-1.388-3.784-2.311-6.333-2.311"
                />
            </svg>
        ),
    },
    {
        href: "https://x.com/ProCvCreator",
        label: "Twitter",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 24 24">
                <path
                    fill="#080808"
                    d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                />
            </svg>
        ),
    },
    {
        href: "https://www.linkedin.com/company/procv-creator/",
        label: "LinkedIn",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 24 24">
                <path
                    fill="#080808"
                    d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                />
            </svg>
        ),
    },
    {
        href: "https://www.tiktok.com/@procvcreator",
        label: "Tiktok",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 24 24">
                <path
                    fill="#080808"
                    d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                />
            </svg>
        ),
    },
];

export default function Footer() {
    const [email, setEmail] = useState("");

    function handleNewsletterSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (email) setEmail("");
    }

    return (
        <footer className="bg-[#f5f5f5] text-neutral-700">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-flex flex-col gap-2">
                            <Image
                                src={ntcLogo}
                                alt="NTC Logo"
                                width={91}
                                height={72}
                                className="h-[72px] w-[91px] object-contain"
                            />
                        </Link>

                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md hover:-translate-y-[1px]"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[18px] font-bold text-neutral-900">
                            Quick Links
                        </h3>
                        <ul className="mt-4 space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-500 text-[14px]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h3 className="text-[18px] font-bold text-neutral-900">
                            Help
                        </h3>
                        <ul className="mt-4 space-y-3 text-[14px] text-neutral-500">
                            <li>07900779156</li>
                            <li>15 Neptune Court, Cardiff, CF24 5PJ</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-[18px] font-bold text-neutral-900">
                            Newsletter
                        </h3>
                        <p className="mt-3 text-[14px] text-neutral-500">
                            Stay updated with our latest insights
                        </p>

                        <form onSubmit={handleNewsletterSubmit} className="mt-4">
                            <div className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter Your Email Here"
                                    className="flex-1 bg-transparent text-sm py-1 focus:outline-none"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="ml-3 font-semibold text-[#1FB874] hover:text-[#16965e]"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 border-t pt-6 text-sm text-neutral-500 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p>NTC Ⓒ 2025, all rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-neutral-900">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-neutral-900">
                            Terms &amp; Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}