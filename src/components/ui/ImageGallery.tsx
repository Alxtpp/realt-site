"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

export interface GalleryImage {
  src: string;
  width?: number;
  height?: number;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  alt: string;
}

// Below this ratio an image is too tall for the full-width 16/10 band and gets
// shown at its own ratio in a narrower column instead of being cropped.
const LANDSCAPE_RATIO = 1.4;

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className="space-y-6 md:space-y-10">
      {images.map(({ src, width, height }, index) => {
        const isLandscape =
          !width || !height || width / height >= LANDSCAPE_RATIO;

        return (
          <FadeIn key={src} delay={index * 0.1}>
            <div
              className={
                isLandscape
                  ? "relative aspect-[16/10] w-full overflow-hidden"
                  : "relative w-full max-w-3xl mx-auto overflow-hidden"
              }
              style={
                isLandscape
                  ? undefined
                  : { aspectRatio: `${width} / ${height}` }
              }
            >
              <Image
                src={src}
                alt={`${alt} - ${index + 1}`}
                fill
                className="object-cover"
                sizes={
                  isLandscape
                    ? "(max-width: 768px) 100vw, 1200px"
                    : "(max-width: 768px) 100vw, 768px"
                }
                loading="lazy"
              />
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
