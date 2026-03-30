"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "@/i18n/provider";
import type { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  const { locale, t } = useTranslations();

  const href = project.hyperlink
    ? project.hyperlink.startsWith("http")
      ? project.hyperlink
      : `/${locale}${project.hyperlink}`
    : `/${locale}/projets/${project.slug}`;

  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden aspect-[3/2]">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        {project.status === "upcoming" && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-wider">
            {t("projects.upcoming")}
          </div>
        )}
        {project.status === "completed" && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-wider">
            {t("projects.completed")}
          </div>
        )}
        {project.status === "in-progress" && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-wider">
            {t("projects.inProgress")}
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium tracking-wide group-hover:text-brand-gray-600 transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-sm text-brand-gray-400 mt-1">{project.location}</p>
      </div>
    </Link>
  );
}
