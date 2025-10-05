"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface IconButtonProps {
  onClick: () => void;
  children: ReactNode;
  ariaLabel?: string;
}

export default function IconButton({ onClick, children, ariaLabel }: IconButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      aria-label={ariaLabel}
      initial={{ color: "var(--text-color)" }}
      whileHover={{ color: "var(--accent-color)", transform: "rotate(15deg)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.button>
  );
}
