"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import LanguageToggle from "@/app/components/languageToggle";
import Socials from "@/app/components/Socials";

import { useTranslation } from "./providers";

const NAV_LINKS = [{ href: "/contact", labelKey: "nav.contact" }];

export default function Header() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="absolute sm:fixed z-100 w-full bg-gradient-to-b from-[color:var(--background)] to-[color:transparent]">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex items-center justify-between py-3">
            {/* Left side: logo + brand name */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logoo.png"
                alt="Logo"
                width={70}
                height={70}
                className="h-16 w-16 sm:h-20 sm:w-20"
              />
              <span className="text-lg sm:text-xl font-bold text-[color:var(--accent-color)]">
                Voice Academy Munich
              </span>
            </Link>

            <div className="flex items-center gap-3 md:gap-6">
              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="rounded-full border border-[color:var(--foreground)] p-2 text-[color:var(--foreground)] transition-colors hover:text-[color:var(--accent-color)] md:hidden"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-header-menu"
                aria-label={
                  isMenuOpen ? t("nav.close_menu") : t("nav.open_menu")
                }
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>

              <div className="hidden items-center gap-6 md:flex">
                <Socials />
                <nav className="flex items-center gap-6">
                  {NAV_LINKS.map(({ href, labelKey }) => {
                    const isRoot = href === "/";
                    const isActive = isRoot
                      ? pathname === "/"
                      : pathname.startsWith(href);

                    const linkColor = isActive ? "font-bold" : "";

                    return (
                      <Link
                        key={href}
                        href={href}
                        aria-current={isActive ? "page" : undefined}
                        className={`transition-colors text-[color:var(--foreground)] ${linkColor} hover:text-[color:var(--accent-color)]`}
                      >
                        {t(labelKey)}
                      </Link>
                    );
                  })}
                </nav>
                <LanguageToggle />
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.aside
            key="mobile-header-menu"
            id="mobile-header-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] flex flex-col bg-[color:var(--background)] md:hidden"
          >
            <div className="flex items-center justify-end px-6 py-4">
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full border border-[color:var(--foreground)] p-2 text-[color:var(--foreground)] transition-colors hover:text-[color:var(--accent-color)]"
                aria-label={t("nav.close_menu")}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col items-end gap-6 px-12 py-8">
              {NAV_LINKS.map(({ href, labelKey }) => {
                const isRoot = href === "/";
                const isActive = isRoot
                  ? pathname === "/"
                  : pathname.startsWith(href);

                const linkColor = isActive ? "font-bold" : "";

                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-3xl transition-colors text-[color:var(--foreground)] ${linkColor} hover:text-[color:var(--accent-color)]`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(labelKey)}
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-1 flex-col justify-center items-center gap-10 px-6 py-8">
              <Socials size={32} />
              <LanguageToggle />
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}
