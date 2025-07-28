"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const isProductPage = pathname.startsWith("/product/");
  const currentLang = isProductPage
    ? pathname.split("/")[2] === "bn"
      ? "bn"
      : "en"
    : "en";

  const lang = searchParams.get("lang") === "bn" ? "bn" : "en";

  const handleLangChange = () => {
    const newLang = lang === "en" ? "bn" : "en";
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("lang", newLang);
    router.push(`/?${params.toString()}`);
    // This will reload the page and trigger SSR with the new lang
  };

  // Nav items for both languages
  const navItems =
    lang === "bn"
      ? [
          { label: "ক্লাস ৬-১২", href: "#" },
          { label: "স্কিলস", href: "#" },
          { label: "ভর্তি পরীক্ষা", href: "#" },
          { label: "অনলাইন ব্যাচ", href: "#" },
          { label: "ইংলিশ সেন্টার", href: "#" },
          { label: "আরও", href: "#" },
        ]
      : [
          { label: "Class 6-12", href: "#" },
          { label: "Skills", href: "#" },
          { label: "Admission", href: "#" },
          { label: "Online Batch", href: "#" },
          { label: "English Centre", href: "#" },
          { label: "More", href: "#" },
        ];

  return (
    <header className="w-full flex items-center gap-4 py-2 px-4 border-b bg-white">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/10mslogo-svg.svg"
          alt="10 Minute School"
          width={120}
          height={40}
          priority
        />
      </Link>

      {/* Search Bar */}
      <form className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder={
              lang === "bn"
                ? "ক্লাস কোর্স, স্কিলস খুঁজুন, স্কুল প্রোগ্রাম সার্চ করুন..."
                : "Find course, skill, school program..."
            }
            className="w-full rounded-full border border-gray-200 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M20 20L17 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </form>

      {/* Nav */}
      <nav className="hidden lg:flex gap-4 items-center">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-gray-700 hover:text-green-600 font-medium px-2"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Language Switcher, Phone, Login */}
      <div className="flex items-center gap-2 ml-2">
        {isProductPage ? (
          <>
            <Link
              href={`/product/en`}
              className={`border rounded px-2 py-1 text-xs font-semibold ${
                currentLang === "en" ? "bg-gray-200" : ""
              }`}
            >
              EN
            </Link>
            <Link
              href={`/product/bn`}
              className={`border rounded px-2 py-1 text-xs font-semibold ${
                currentLang === "bn" ? "bg-gray-200" : ""
              }`}
            >
              বাংলা
            </Link>
          </>
        ) : (
          // fallback for home page or others
          <Link
            href="/product/en"
            className="border rounded px-2 py-1 text-xs font-semibold"
          >
            EN
          </Link>
        )}
        <span className="flex items-center text-green-600 font-bold ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          16910
        </span>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded px-4 py-2 ml-2">
          {lang === "bn" ? "লগ-ইন" : "Login"}
        </button>
      </div>
    </header>
  );
}
