"use client";

import { useTranslations } from "@/i18n/provider";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutContent() {
  const { t } = useTranslations();

  return (
    <div className="mb-24">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-16">
          {t("about.title")}
        </h1>
      </FadeIn>
      <div className="max-w-3xl">
        <FadeIn delay={0.1}>
          <h2 className="text-2xl font-light tracking-wide mb-8">
            {t("about.storyTitle")}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-base leading-relaxed text-brand-gray-600 mb-6">
            {t("about.story")}
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-base leading-relaxed text-brand-gray-600 mb-6">
            {t("about.story2")}
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="text-base leading-relaxed text-brand-gray-600">
            {t("about.story3")}
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
