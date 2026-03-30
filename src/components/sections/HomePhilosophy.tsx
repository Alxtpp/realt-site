"use client";

import { useTranslations } from "@/i18n/provider";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function HomePhilosophy() {
  const { t } = useTranslations();

  return (
    <section className="py-24 md:py-32 bg-brand-cream">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
          <FadeIn>
            <p className="text-xl sm:text-2xl md:text-3xl font-light leading-snug tracking-wide text-brand-gray-800">
              {t("home.philosophyHighlight")}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base leading-relaxed text-brand-gray-600 whitespace-pre-line">
              {t("home.philosophy")}
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
