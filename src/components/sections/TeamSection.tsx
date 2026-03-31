"use client";

import Image from "next/image";
import { useTranslations } from "@/i18n/provider";
import { team } from "@/data/team";
import FadeIn from "@/components/ui/FadeIn";

export default function TeamSection() {
  const { locale, t } = useTranslations();

  return (
    <div className="mb-12">
      <FadeIn>
        <h2 className="text-2xl font-light tracking-wide mb-12">
          {t("about.teamTitle")}
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        {team.map((member, i) => (
          <FadeIn key={member.name} delay={i * 0.1}>
            <div className="group">
              <div className="relative w-48 sm:w-56 mb-6 overflow-hidden rounded-sm grayscale" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 640px) 192px, 224px"
                />
              </div>
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-sm text-brand-gray-400 mt-1">
                {member.role[locale as "fr" | "en"]}
              </p>
              <div className="mt-4 space-y-1">
                <a
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="block text-sm text-brand-gray-600 hover:text-brand-black transition-colors"
                >
                  {member.phone}
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="block text-sm text-brand-gray-600 hover:text-brand-black transition-colors"
                >
                  {member.email}
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
