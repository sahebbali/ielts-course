"use client";
import React from "react";
import Header from "./Header";

const navItems = {
  en: [
    { label: "Class 6-12", href: "#" },
    { label: "Skills", href: "#" },
    { label: "Admission", href: "#" },
    { label: "Online Batch", href: "#" },
    { label: "English Centre", href: "#" },
    { label: "More", href: "#" },
  ],
  bn: [
    { label: "ক্লাস ৬-১২", href: "#" },
    { label: "স্কিলস", href: "#" },
    { label: "ভর্তি পরীক্ষা", href: "#" },
    { label: "অনলাইন ব্যাচ", href: "#" },
    { label: "ইংলিশ সেন্টার", href: "#" },
    { label: "আরও", href: "#" },
  ],
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = React.useState<"en" | "bn">("bn");

  return (
    <>
      <Header
        nav={navItems[lang]}
        lang={lang}
        onLangChange={setLang}
        searchPlaceholder={
          lang === "en"
            ? "Find course, skill, school program..."
            : "ক্লাস কোর্স, স্কিলস খুঁজুন সার্চ করুন..."
        }
        phone="16910"
        loginLabel={lang === "en" ? "Login" : "লগ-ইন"}
        logoSrc="/10mslogo-svg.svg"
        logoAlt="10 Minute School"
      />
      <div className="max-w-5xl mx-auto w-full">{children}</div>
    </>
  );
}
