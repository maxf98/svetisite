"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { MdClose } from "react-icons/md";

interface ImagePreviewOverlayProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  caption?: string;
  downloadHref?: string;
}

export default function ImagePreviewOverlay({
  src,
  alt,
  isOpen,
  onClose,
  caption,
  downloadHref,
}: ImagePreviewOverlayProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(0,0,0,0.8)] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            className="relative m-4 w-full h-full max-w-4xl max-h-[90vh] p-4"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={(event) => {
                console.log("closing");
                onClose();
              }}
              className="z-[1000] absolute right-10 top-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(0,0,0,0.6)] text-white transition hover:bg-[rgba(0,0,0,0.85)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close image preview"
            >
              <MdClose size={24} />
            </button>
            <div className="overflow-hidden rounded-2xl border border-[color:var(--foreground-tertiary)] bg-[color:var(--background)] h-full">
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 800px, 90vw"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
