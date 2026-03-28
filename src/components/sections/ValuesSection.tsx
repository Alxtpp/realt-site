"use client";

import { useTranslations } from "@/i18n/provider";
import FadeIn from "@/components/ui/FadeIn";

export default function ValuesSection() {
  const { t } = useTranslations();

  const values = [
    { title: t("about.value1Title"), text: t("about.value1") },
    { title: t("about.value2Title"), text: t("about.value2") },
    { title: t("about.value3Title"), text: t("about.value3") },
  ];

  return (
    <div>
      <FadeIn>
        <h2 className="text-2xl font-light tracking-wide mb-12">
          {t("about.valuesTitle")}
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {values.map((value, i) => (
          <FadeIn key={value.title} delay={i * 0.1}>
            <div>
              <h3 className="text-lg font-medium mb-3">{value.title}</h3>
              <p className="text-sm leading-relaxed text-brand-gray-600">
                {value.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
