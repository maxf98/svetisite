"use client";

import ImageCarousel, {
  type ImageCarouselItem,
} from "@/app/components/ImageCarousel";

const resonanzImages: ImageCarouselItem[] = [
  { src: "/resonanz/1.jpeg", alt: "Resonanz Impression 1" },
  { src: "/resonanz/2.jpeg", alt: "Resonanz Impression 2" },
  { src: "/resonanz/3.jpg", alt: "Resonanz Impression 3" },
  { src: "/resonanz/4.png", alt: "Resonanz Impression 4" },
  { src: "/resonanz/5.png", alt: "Resonanz Impression 5" },
  { src: "/resonanz/6.png", alt: "Resonanz Impression 6" },
  { src: "/resonanz/7.png", alt: "Resonanz Impression 7" },
  { src: "/resonanz/8.png", alt: "Resonanz Impression 8" },
];

export default function Resonanz() {
  return <ImageCarousel items={resonanzImages} />;
}
