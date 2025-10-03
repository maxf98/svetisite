"use client";

import { useTranslation } from "@/app/providers";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { lang, setLang } = useTranslation();
  function toggleLang() {
    setLang(lang === "de" ? "ru" : "de");
  }

  return (
    <button onClick={toggleLang} className="font-bold cursor-pointer">
      <motion.span animate={{ color: lang == "de" ? "#888888" : "#352b2bff" }}>
        de
      </motion.span>
      <span> | </span>
      <motion.span animate={{ color: lang == "ru" ? "#888888" : "#352b2bff" }}>
        ru
      </motion.span>
    </button>
  );
}
