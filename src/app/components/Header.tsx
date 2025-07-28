"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./10mslogo-svg.svg"; // or use a public path

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

interface HeaderProps {
  nav: NavItem[];
  lang: string;
  onLangChange: (lang: string) => void;
  searchPlaceholder: string;
  phone: string;
  loginLabel: string;
  logoSrc: string;
  logoAlt: string;
}

const Header: React.FC<HeaderProps> = ({
  nav,
  lang,
  onLangChange,
  searchPlaceholder,
  phone,
  loginLabel,
  logoSrc,
  logoAlt,
}) => {
  return (
    <header className="w-full bg-white border-b border-gray-100 px-4 py-2 flex items-center gap-4">
      <Link href="/" className="flex items-center">
        <Image src={logoSrc} alt={logoAlt} width={120} height={40} priority />
      </Link>
      <form className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="w-full rounded-full border border-gray-200 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
      <nav className="hidden lg:flex gap-4 items-center">
        {nav.map((item) => (
          <div key={item.label} className="relative group">
            <Link
              href={item.href}
              className="text-gray-700 hover:text-green-600 font-medium px-2"
            >
              {item.label}
            </Link>
            {item.children && (
              <div className="absolute left-0 top-full bg-white border rounded shadow-md mt-2 hidden group-hover:block z-20 min-w-[160px]">
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="flex items-center gap-2 ml-2">
        <button
          onClick={() => onLangChange(lang === "en" ? "bn" : "en")}
          className="border rounded px-2 py-1 text-xs font-semibold"
        >
          {lang === "en" ? "বাংলা" : "EN"}
        </button>
        <span className="text-green-600 font-bold ml-2">{phone}</span>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded px-4 py-2 ml-2">
          {loginLabel}
        </button>
      </div>
    </header>
  );
};

const nav = [
  { label: "ক্লাস ৬-১২", href: "#" },
  { label: "স্কিলস", href: "#" },
  { label: "ভর্তি পরীক্ষা", href: "#" },
  { label: "অনলাইন ব্যাচ", href: "#" },
  { label: "ইংলিশ সেন্টার", href: "#" },
  { label: "আরও", href: "#" },
];

export default function App() {
  return (
    <Header
      nav={nav}
      lang="bn"
      onLangChange={(l) => {
        /* handle language change */
      }}
      searchPlaceholder="ক্লাস কোর্স, স্কিলস খুঁজুন সার্চ করুন..."
      phone="16910"
      loginLabel="লগ-ইন"
      logoSrc={logo}
      logoAlt="10 Minute School"
    />
  );
}
