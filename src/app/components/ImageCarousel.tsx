"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImagePreviewOverlay from "@/app/components/ImagePreviewOverlay";
import clsx from "clsx";

export interface ImageCarouselItem {
  src: string;
  alt: string;
  caption?: string;
  downloadHref?: string;
}

interface ImageCarouselProps {
  items: ImageCarouselItem[];
  loop?: boolean;
  className?: string;
  itemClassName?: string;
}

export default function ImageCarousel({
  items,
  loop = true,
  className,
  itemClassName,
}: ImageCarouselProps) {
  const [activeItem, setActiveItem] = useState<ImageCarouselItem | null>(null);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div>
      <Carousel opts={{ loop }}>
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem
              key={item.src}
              className={clsx("basis-1/3 lg:basis-1/5", itemClassName)}
            >
              <button
                type="button"
                className="group relative block w-full overflow-hidden rounded-xl border border-[color:var(--foreground-tertiary)] bg-[color:var(--background)] focus:outline-none"
                onClick={() => setActiveItem(item)}
                aria-label={`Vorschau für ${item.alt}`}
              >
                <span className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_rgba(123,4,170,0)_0%,_rgba(123,4,170,0.2)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative aspect-square w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-[color:var(--foreground-tertiary)] text-[color:var(--foreground)] hover:border-[color:var(--accent-color)] hover:text-[color:var(--accent-color)]" />
        <CarouselNext className="border-[color:var(--foreground-tertiary)] text-[color:var(--foreground)] hover:border-[color:var(--accent-color)] hover:text-[color:var(--accent-color)]" />
      </Carousel>

      <ImagePreviewOverlay
        src={activeItem?.src ?? ""}
        alt={activeItem?.alt ?? ""}
        caption={activeItem?.caption}
        downloadHref={activeItem?.downloadHref}
        isOpen={Boolean(activeItem)}
        onClose={() => setActiveItem(null)}
      />
    </div>
  );
}
