"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { assetPath } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className="space-y-6 md:space-y-10">
      {images.map((src, index) => (
        <FadeIn key={src} delay={index * 0.1}>
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src={assetPath(src)}
              alt={`${alt} - ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              loading="lazy"
            />
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
