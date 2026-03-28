"use client";

import { useTranslations } from "@/i18n/provider";
import { team } from "@/data/team";

export default function ContactInfo() {
  const { t } = useTranslations();

  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-sm uppercase tracking-wider text-brand-gray-400 mb-4">
          {t("contact.office")}
        </h3>
        <p className="text-sm text-brand-gray-600 leading-relaxed">
          RealT SA
          <br />
          {t("contact.address")}
        </p>
        <a
          href="mailto:info@realt.swiss"
          className="block mt-2 text-sm text-brand-gray-600 hover:text-brand-black transition-colors"
        >
          info@realt.swiss
        </a>
      </div>

      {team.map((member) => (
        <div key={member.name}>
          <h3 className="text-sm font-medium mb-2">{member.name}</h3>
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
      ))}
    </div>
  );
}
