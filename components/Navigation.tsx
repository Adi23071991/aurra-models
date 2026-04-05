"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/translations";

const LANGS: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "th", label: "TH" },
  { code: "vi", label: "VI" },
  { code: "fil", label: "FIL" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/#portfolio", labelKey: "nav_portfolio" },
    { href: "/#editorial", labelKey: "nav_editorial" },
    { href: "/#exclusive", labelKey: "nav_exclusive" },
    { href: "/#locations", labelKey: "nav_scouting" },
    { href: "/apply", labelKey: "nav_apply" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="font-serif text-2xl lg:text-3xl font-light tracking-[0.15em] text-[#2C2C2C] group-hover:text-[#C9A96E] transition-colors duration-300"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              AURRA
            </span>
            <span
              className="text-[9px] tracking-[0.35em] text-[#8A7F75] uppercase"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Models
            </span>
          </Link>

          {/* Desktop Links + Language Switcher */}
          <div className="hidden md:flex items-center gap-8">
            {links.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.08em] text-[#8A7F75] hover:text-[#2C2C2C] transition-colors duration-300 uppercase"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <Link
              href="/apply"
              className="ml-4 px-6 py-2.5 rounded-full bg-[#2C2C2C] text-[#FAF7F2] text-sm tracking-[0.08em] uppercase hover:bg-[#C9A96E] transition-all duration-300"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("nav_apply")}
            </Link>
            {/* Language Switcher Desktop */}
            <div className="flex items-center gap-1.5 ml-2 border-l border-[#8A7F75]/20 pl-4">
              {LANGS.map((l, i) => (
                <span key={l.code} className="flex items-center gap-1.5">
                  <button
                    onClick={() => setLang(l.code)}
                    className={`text-[10px] tracking-[0.1em] uppercase transition-colors duration-200 ${
                      lang === l.code
                        ? "text-[#C9A96E] font-medium"
                        : "text-[#8A7F75] hover:text-[#2C2C2C]"
                    }`}
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                    aria-label={`Switch to ${l.label}`}
                  >
                    {l.label}
                  </button>
                  {i < LANGS.length - 1 && (
                    <span className="text-[#8A7F75]/40 text-[10px]">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#2C2C2C]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FAF7F2] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-2xl tracking-[0.12em] uppercase transition-colors duration-300 ${
                    link.href === "/apply"
                      ? "text-[#C9A96E]"
                      : "text-[#2C2C2C] hover:text-[#C9A96E]"
                  }`}
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {t(link.labelKey)}
                </Link>
              </motion.div>
            ))}

            {/* Language Switcher Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.08 + 0.05 }}
              className="flex items-center gap-3 mt-4 border-t border-[#8A7F75]/20 pt-6"
            >
              {LANGS.map((l, i) => (
                <span key={l.code} className="flex items-center gap-3">
                  <button
                    onClick={() => { setLang(l.code); setMenuOpen(false); }}
                    className={`text-sm tracking-[0.12em] uppercase transition-colors duration-200 ${
                      lang === l.code
                        ? "text-[#C9A96E]"
                        : "text-[#8A7F75] hover:text-[#2C2C2C]"
                    }`}
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {l.label}
                  </button>
                  {i < LANGS.length - 1 && (
                    <span className="text-[#8A7F75]/30">·</span>
                  )}
                </span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
