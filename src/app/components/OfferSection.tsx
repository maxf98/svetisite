import React from "react";
import Image from "next/image";
import TranslatedHTML from "./TranslatedHTML";
import { motion } from "framer-motion";
import { useTranslation } from "../providers";

export function OfferInstance({
  title,
  textKey,
  image,
  children,
}: {
  title: string;
  textKey: string;
  image: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 bg-gray-100 p-5 rounded-lg shadow-md mt-8 m-2 sm:m-10 p-2 sm:p-8">
      <h2>{title}</h2>
      <div className="flex flex-col sm:flex-row items-center gap-15">
        <TranslatedHTML translationKey={textKey} className="flex-1" />
        <div className="flex-1">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      {children}
    </div>
  );
}

export function OfferSection({
  title,
  subtitle,
  text,
  bulletpoints,
}: {
  title: string;
  subtitle: string;
  text: string;
  bulletpoints: string[];
}) {
  return (
    <div className="flex flex-col w-full gap-6 sm:gap-10">
      <div className="flex flex-col items-baseline gap-0 sm:gap-5">
        <h1 className="text-[var(--accent-color)]">{title}</h1>
        <h2 className="text-[var(--foreground-secondary)] !mt-0">{subtitle}</h2>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-20 w-full m-2 sm:m-10">
        <div className="flex-1 text-lg">{text}</div>
        <ul className="flex-1 list-disc list-inside">
          {bulletpoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
