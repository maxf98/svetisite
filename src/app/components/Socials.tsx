"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";

function SocialsButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      className="flex flex-row gap-2"
      whileHover={{ color: "var(--accent-color)", rotate: "10deg" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </motion.a>
  );
}

export default function Socials({ size = 20 }: { size?: number }) {
  return (
    <div className="flex flex-row gap-2">
      <SocialsButton href="https://www.instagram.com/sveti.voicecoach/">
        <FaInstagram size={size} />
      </SocialsButton>
      <SocialsButton href="https://www.facebook.com/sveti.voicecoach">
        <FaFacebookF size={size} />
      </SocialsButton>
      <SocialsButton href="https://www.youtube.com/@svetivoicecoach">
        <FaYoutube size={size} />
      </SocialsButton>
      <SocialsButton href="https://www.tiktok.com/@svetivoicecoach">
        <FaTiktok size={size} />
      </SocialsButton>
      <SocialsButton href="mailto:svetlana_prandetskaya@yahoo.de">
        <FaEnvelope size={size} />
      </SocialsButton>
    </div>
  );
}
