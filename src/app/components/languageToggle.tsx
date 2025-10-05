"use client";

import { useTranslation } from "@/app/providers";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { lang, setLang } = useTranslation();
  function toggleLang() {
    setLang(lang === "de" ? "ru" : "de");
  }

  return (
    <button
      onClick={toggleLang}
      className="text-3xl sm:text-lg font-bold cursor-pointer"
    >
      <motion.span
        animate={{
          color:
            lang == "de" ? "var(--foreground)" : "var(--foreground-tertiary)",
        }}
      >
        de
      </motion.span>
      <span> | </span>
      <motion.span
        animate={{
          color:
            lang == "ru" ? "var(--foreground)" : "var(--foreground-tertiary)",
        }}
      >
        ru
      </motion.span>
    </button>
  );
}
