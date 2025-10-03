"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageToggle from "@/app/components/languageToggle";

import { useTranslation } from "./providers";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left side: logo + brand name */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="font-semibold text-lg">Voice Academy Munich</span>
        </div>

        {/* Right side: navigation + language toggle */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            {/* You can add real routes later */}
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              {t("nav.home")}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              {t("nav.about")}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              {t("nav.contact")}
            </Link>
          </nav>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
