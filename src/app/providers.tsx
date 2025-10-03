"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "de" | "ru";

type TranslationContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<TranslationContextType | undefined>(
  undefined
);

import de from "@/locales/german.json";
import ru from "@/locales/russian.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translations: Record<Lang, any> = { de, ru };

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("de");

  const t = (key: string): string => {
    const parts = key.split(".");
    return parts.reduce((acc, part) => acc?.[part], translations[lang]) ?? key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
