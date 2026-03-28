"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "@/i18n/provider";
import { locales } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const { locale } = useTranslations();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 text-sm">
      {locales.map((loc) => {
        const newPath = pathname.replace(`/${locale}`, `/${loc}`);
        return (
          <Link
            key={loc}
            href={newPath}
            className={cn(
              "uppercase tracking-wider transition-colors duration-300",
              loc === locale
                ? light
                  ? "text-white font-medium"
                  : "text-brand-black font-medium"
                : light
                  ? "text-white/50 hover:text-white/80"
                  : "text-brand-gray-400 hover:text-brand-black"
            )}
          >
            {loc}
          </Link>
        );
      })}
    </div>
  );
}
