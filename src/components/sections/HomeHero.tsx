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
        src="/images/hero-home.jpg"
        alt="RealT SA"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-[0.15em]"
        >
          RealT
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 text-sm md:text-base tracking-[0.3em] uppercase text-white/80"
        >
          {t("hero.tagline")}
        </motion.p>
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
