"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "@/i18n/provider";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const { locale, t } = useTranslations();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}/projets`, label: t("nav.projects") },
    { href: `/${locale}/a-propos`, label: t("nav.about") },
    { href: `/${locale}/foncier`, label: t("nav.land") },
    { href: `/${locale}/contact`, label: t("nav.contact") },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled || !isHome
            ? "bg-white/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className={cn(
                "text-2xl font-bold tracking-wider transition-colors duration-300",
                scrolled || !isHome ? "text-brand-black" : "text-white"
              )}
            >
              RealT
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm tracking-wider uppercase transition-colors duration-300 hover:opacity-60",
                    scrolled || !isHome ? "text-brand-black" : "text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <LanguageSwitcher light={!scrolled && isHome} />
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={cn(
                    "block w-6 h-0.5 transition-all duration-300",
                    mobileMenuOpen
                      ? "rotate-45 translate-y-2 bg-brand-black"
                      : scrolled || !isHome
                        ? "bg-brand-black"
                        : "bg-white"
                  )}
                />
                <span
                  className={cn(
                    "block w-6 h-0.5 transition-all duration-300",
                    mobileMenuOpen
                      ? "opacity-0"
                      : scrolled || !isHome
                        ? "bg-brand-black"
                        : "bg-white"
                  )}
                />
                <span
                  className={cn(
                    "block w-6 h-0.5 transition-all duration-300",
                    mobileMenuOpen
                      ? "-rotate-45 -translate-y-2 bg-brand-black"
                      : scrolled || !isHome
                        ? "bg-brand-black"
                        : "bg-white"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
