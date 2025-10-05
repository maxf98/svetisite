"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

interface ContactButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "children"> {
  href?: string;
  label?: string;
}

export default function ContactButton({
  href = "/contact",
  label = "Kontakt",
  className,
  ...rest
}: ContactButtonProps) {
  return (
    <Link href={href} className="inline-block">
      <motion.div
        initial={{
          boxShadow: "0 0 0 0 rgba(123, 4, 170, 0)",
        }}
        whileHover={{
          scale: 1.05,
          translateY: -2,
          boxShadow:
            "0 0 0 3px rgba(123, 4, 170, 0.4), 0 16px 30px -18px rgba(123, 4, 170, 0.6)",
        }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className={clsx(
          "inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold text-[color:var(--background)] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--accent-color)] focus-visible:ring-offset-[color:var(--background)]",
          className
        )}
        style={{
          backgroundColor: "var(--accent-color)",
        }}
      >
        {label}
      </motion.div>
    </Link>
  );
}
