"use client";

import { useTranslations } from "@/i18n/provider";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export default function FoncierContent() {
  const { locale, t } = useTranslations();

  const criteria = [
    t("land.criterion1"),
    t("land.criterion2"),
    t("land.criterion3"),
    t("land.criterion4"),
  ];

  return (
    <>
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-6">
          {t("land.title")}
        </h1>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="text-xl md:text-2xl font-light text-brand-gray-800 mb-12 max-w-2xl">
          {t("land.subtitle")}
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="text-base leading-relaxed text-brand-gray-600 max-w-2xl mb-16">
          {t("land.intro")}
        </p>
      </FadeIn>

      {/* Criteria */}
      <FadeIn delay={0.3}>
        <div className="bg-brand-cream p-8 md:p-12 mb-16 max-w-2xl">
          <h2 className="text-lg font-medium mb-6">{t("land.criteria")}</h2>
          <ul className="space-y-3">
            {criteria.map((criterion) => (
              <li
                key={criterion}
                className="text-sm text-brand-gray-600 flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-black mt-1.5 shrink-0" />
                {criterion}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.4}>
        <div className="max-w-2xl">
          <p className="text-base leading-relaxed text-brand-gray-600 mb-8">
            {t("land.ctaText")}
          </p>
          <Button href={`/${locale}/contact`} variant="secondary">
            {t("land.cta")}
          </Button>
        </div>
      </FadeIn>
    </>
  );
}
