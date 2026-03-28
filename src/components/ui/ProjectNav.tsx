"use client";

import Link from "next/link";
import { useTranslations } from "@/i18n/provider";
import type { Project } from "@/types/project";

interface ProjectNavProps {
  previous: Project | null;
  next: Project | null;
}

export default function ProjectNav({ previous, next }: ProjectNavProps) {
  const { locale, t } = useTranslations();

  return (
    <div className="flex justify-between items-center py-8 border-t border-brand-gray-200">
      {previous ? (
        <Link
          href={`/${locale}/projets/${previous.slug}`}
          className="group flex items-center gap-3 text-sm text-brand-gray-400 hover:text-brand-black transition-colors"
        >
          <span className="text-lg group-hover:-translate-x-1 transition-transform duration-300">
            &larr;
          </span>
          <span>
            <span className="block text-xs uppercase tracking-wider">
              {t("projects.previous")}
            </span>
            <span className="text-brand-black">{previous.name}</span>
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/${locale}/projets/${next.slug}`}
          className="group flex items-center gap-3 text-sm text-brand-gray-400 hover:text-brand-black transition-colors text-right"
        >
          <span>
            <span className="block text-xs uppercase tracking-wider">
              {t("projects.next")}
            </span>
            <span className="text-brand-black">{next.name}</span>
          </span>
          <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">
            &rarr;
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
