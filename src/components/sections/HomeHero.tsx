"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "@/i18n/provider";

export default function HomeHero() {
  const { t } = useTranslations();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-home-arboris.jpg"
        alt="RealT SA"
        fill
        className="object-cover object-[70%_60%]"
        priority
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light italic text-white leading-snug"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {t("hero.tagline")}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6 w-12 h-px bg-white/50"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-white/60 text-xs tracking-[0.2em] uppercase">
          {t("hero.scroll")}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-white/40"
        />
      </motion.div>
    </section>
  );
}
