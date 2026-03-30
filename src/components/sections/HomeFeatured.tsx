"use client";

import Link from "next/link";
import { useTranslations } from "@/i18n/provider";
import { projects } from "@/data/projects";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import ProjectCard from "@/components/ui/ProjectCard";

export default function HomeFeatured() {
  const { locale, t } = useTranslations();
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-24 md:py-32">
      <Container>
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-16">
            {t("home.featuredTitle")}
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {featured.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <div className="mt-16 text-center">
            <Link
              href={`/${locale}/projets`}
              className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-brand-gray-600 hover:text-brand-black transition-colors duration-300"
            >
              {t("home.featuredLink")}
              <span>&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
