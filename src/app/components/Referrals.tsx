"use client";

import ImageCarousel, {
  type ImageCarouselItem,
} from "@/app/components/ImageCarousel";

const referralImages: ImageCarouselItem[] = [
  {
    src: "/referrals/1.jpg",
    alt: "Teilnehmerin Julia bei der Voice Academy Munich",
  },
  {
    src: "/referrals/2.jpg",
    alt: "Michael singt während eines Musical-Coachings",
  },
  {
    src: "/referrals/3.jpg",
    alt: "Sofia präsentiert ihre Performance",
  },
  {
    src: "/referrals/4.jpg",
    alt: "Leon übt als Tenor im Jugendchor",
  },
  {
    src: "/referrals/5.jpg",
    alt: "Isabella beim Vorsingen für die Aufnahmeprüfung",
  },
  {
    src: "/referrals/6.jpg",
    alt: "Bandcoaching mit Damian an der Gitarre",
  },
  {
    src: "/referrals/7.jpeg",
    alt: "Alina singt beim Kinderunterricht",
  },
  {
    src: "/referrals/8.jpg",
    alt: "Tobias hält einen Business-Vortrag",
  },
];

export default function Referrals() {
  return <ImageCarousel items={referralImages} />;
}
