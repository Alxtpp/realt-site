"use client";

import Link from "next/link";
import { useTranslations } from "@/i18n/provider";
import Container from "@/components/ui/Container";

export default function Footer() {
  const { locale, t } = useTranslations();

  return (
    <footer className="bg-brand-black text-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold tracking-wider mb-6">RealT</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Promotion immobilière & Construction
            </p>
            <p className="text-white/60 text-sm mt-2">
              Rue Centrale 5, 1110 Morges
            </p>
            <a
              href="mailto:info@realt.swiss"
              className="text-white/60 text-sm hover:text-white transition-colors mt-1 block"
            >
              info@realt.swiss
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-white/40">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href={`/${locale}/projets`}
                className="text-white/60 text-sm hover:text-white transition-colors"
              >
                {t("nav.projects")}
              </Link>
              <Link
                href={`/${locale}/a-propos`}
                className="text-white/60 text-sm hover:text-white transition-colors"
              >
                {t("nav.about")}
              </Link>
              <Link
                href={`/${locale}/foncier`}
                className="text-white/60 text-sm hover:text-white transition-colors"
              >
                {t("nav.land")}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="text-white/60 text-sm hover:text-white transition-colors"
              >
                {t("nav.contact")}
              </Link>
            </nav>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} RealT SA. {t("footer.rights")}
          </p>
        </div>
      </Container>
    </footer>
  );
}
