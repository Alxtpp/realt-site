"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center"
        >
          <nav className="flex flex-col items-center gap-8">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-2xl tracking-wider uppercase text-brand-black hover:text-brand-gray-600 transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <LanguageSwitcher />
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
