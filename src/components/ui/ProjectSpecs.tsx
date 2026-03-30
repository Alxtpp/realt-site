"use client";

import { useTranslations } from "@/i18n/provider";
import type { Project } from "@/types/project";

export default function ProjectSpecs({ project }: { project: Project }) {
  const { t } = useTranslations();

  const specs = [
    { label: t("projects.location"), value: project.address || project.location },
    { label: t("projects.type"), value: project.type },
    ...(project.surfaceSBP
      ? [{ label: t("projects.surface"), value: `${project.surfaceSBP} m²` }]
      : []),
    { label: t("projects.units"), value: String(project.nombreLogements) },
    { label: t("projects.client"), value: project.maitreOuvrage },
    { label: t("projects.architect"), value: project.architecte },
    { label: t("projects.developer"), value: project.developpement },
    ...(project.livraison
      ? [{ label: t("projects.delivery"), value: project.livraison }]
      : []),
  ];

  return (
    <div className="space-y-4">
      {specs.map((spec) => (
        <div key={spec.label} className="flex flex-col sm:flex-row sm:gap-8">
          <dt className="text-sm text-brand-gray-400 sm:w-56 shrink-0">
            {spec.label}
          </dt>
          <dd className="text-sm text-brand-black">{spec.value}</dd>
        </div>
      ))}
      {project.hyperlink && (
        <div className="flex justify-center pt-4">
          <a
            href={project.hyperlink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-brand-black text-brand-black text-sm tracking-wide px-8 py-3 hover:bg-brand-black hover:text-white transition-colors"
          >
            {t("projects.dedicatedSite")}
          </a>
        </div>
      )}
    </div>
  );
}
