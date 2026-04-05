"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const locations = [
    { city: "Bangkok", country: "Thailand" },
    { city: "Manila", country: "Philippines" },
    { city: "Ho Chi Minh City", country: "Vietnam" },
    { city: "London", country: "United Kingdom" },
    { city: "New York", country: "United States" },
    { city: "Paris", country: "France" },
  ];

  return (
    <footer className="bg-[#2C2C2C] text-[#FAF7F2] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span
                className="font-serif text-3xl font-light tracking-[0.2em] text-[#FAF7F2]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                AURRA
              </span>
              <br />
              <span
                className="text-[9px] tracking-[0.35em] text-[#8A7F75] uppercase"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Models
              </span>
            </div>
            <p
              className="text-[#8A7F75] text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("footer_tagline")}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="/apply"
                className="w-9 h-9 rounded-full border border-[#8A7F75]/40 flex items-center justify-center hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
                aria-label="Contact"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs tracking-[0.25em] uppercase text-[#C9A96E] mb-6"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("footer_nav_label")}
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/#portfolio", labelKey: "footer_nav_portfolio" },
                { href: "/#how-it-works", labelKey: "footer_nav_howitworks" },
                { href: "/#locations", labelKey: "footer_nav_locations" },
                { href: "/apply", labelKey: "footer_nav_apply" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8A7F75] hover:text-[#FAF7F2] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4
              className="text-xs tracking-[0.25em] uppercase text-[#C9A96E] mb-6"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("footer_locations_label")}
            </h4>
            <ul className="space-y-2">
              {locations.map((loc) => (
                <li key={loc.city} className="flex items-baseline gap-2">
                  <span
                    className="text-sm text-[#FAF7F2]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {loc.city}
                  </span>
                  <span
                    className="text-xs text-[#8A7F75]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {loc.country}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#8A7F75]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-xs text-[#8A7F75]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            © {new Date().getFullYear()} Aurra Models. {t("footer_copyright")}
          </p>
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="text-xs text-[#8A7F75] hover:text-[#FAF7F2] transition-colors duration-300"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("footer_impressum")}
            </Link>
            <Link
              href="/datenschutz"
              className="text-xs text-[#8A7F75] hover:text-[#FAF7F2] transition-colors duration-300"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("footer_datenschutz")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
