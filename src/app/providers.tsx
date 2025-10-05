"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "de" | "ru";

type TranslationContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: {
    (key: string): string;
    (key: string, options: { returnObjects: true }): string[];
  };
};

const I18nContext = createContext<TranslationContextType | undefined>(
  undefined
);

import de from "@/locales/german.json";
import ru from "@/locales/russian.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translations: Record<Lang, any> = { de, ru };

function resolveKey(lang: Lang, key: string): unknown {
  return key.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object") {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, translations[lang]);
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("de");

  function t(key: string): string;
  function t(key: string, options: { returnObjects: true }): string[];
  function t(key: string, options?: { returnObjects: true }): string | string[] {
    const resolved = resolveKey(lang, key);

    if (options?.returnObjects) {
      if (Array.isArray(resolved)) {
        return resolved.filter((item): item is string => typeof item === "string");
      }
      if (typeof resolved === "string") {
        return [resolved];
      }
      return [key];
    }

    if (typeof resolved === "string") {
      return resolved;
    }

    if (Array.isArray(resolved)) {
      return resolved
        .filter((item): item is string => typeof item === "string")
        .join("\n");
    }

    return key;
  }

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
