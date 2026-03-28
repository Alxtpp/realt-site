"use client";

import { useTranslations } from "@/i18n/provider";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export default function HomeContact() {
  const { locale, t } = useTranslations();

  return (
    <section className="py-24 md:py-32">
      <Container>
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-8">
              {t("home.ctaTitle")}
            </h2>
            <Button href={`/${locale}/contact`} variant="secondary">
              {t("home.ctaButton")}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
