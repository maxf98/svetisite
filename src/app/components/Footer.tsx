"use client";

import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import { useTranslation } from "../providers";

const email = "svetlana_prandetskaya@yahoo.de";
const address = "Balanstrasse 73, 81541 Munich, Germany";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="w-full border-t border-[color:var(--foreground-tertiary)] bg-[color:var(--background)] mt-20 pt-20 pb-20">
      <div className="mx-auto flex items-center w-full max-w-7xl flex-col gap-12 px-6 py-10 ">
        <div className="flex items-center gap-3">
          <Image
            src="/logoo.png"
            alt="Voice Academy Munich logo"
            width={40}
            height={40}
            className="h-16 w-16"
          />
          <span className="text-lg font-semibold text-[color:var(--foreground)]">
            Voice Academy Munich
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="font-semibold text-[color:var(--foreground)]">
            {t("hero.title")}
          </p>
          <p className="font-medium text-[color:var(--foreground)]">
            {t("hero.subtitle")}
          </p>
        </div>
        <Socials />
        <Link
          href="/impressum"
          className="inline-flex items-center gap-1 text-[color:var(--foreground-secondary)] transition-colors hover:text-[color:var(--accent-color)]"
        >
          {t("footer.impressum")}
        </Link>
      </div>
    </footer>
  );
}
