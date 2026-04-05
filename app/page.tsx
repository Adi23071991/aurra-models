"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

const models = [
  {
    id: 1,
    name: "Aaliya",
    origin: "Philippines",
    type: "Female",
    img: "/models/Filipino_female_model_202604041646.jpeg",
    specialty: "Natural & Lifestyle",
    height: "155 cm",
  },
  {
    id: 2,
    name: "Ploy",
    origin: "Thailand",
    type: "Female",
    img: "/models/Thai_woman_studio_202604041646.jpeg",
    specialty: "Portrait & Editorial",
  },
  {
    id: 3,
    name: "Linh",
    origin: "Vietnam",
    type: "Female",
    img: "/models/Model_posing_Bauhaus_202604041646_3.jpeg",
    specialty: "Studio & Commercial",
  },
  {
    id: 4,
    name: "Arisa",
    origin: "Thailand",
    type: "Female",
    img: "/models/Make_realistic_model_202604041646.jpeg",
    specialty: "Editorial & Fashion",
  },
  {
    id: 5,
    name: "Bianca",
    origin: "Philippines",
    type: "Female",
    img: "/models/make_me_mor_202604041646.jpeg",
    specialty: "Luxury & Editorial",
  },
  {
    id: 6,
    name: "Mai",
    origin: "Vietnam",
    type: "Female",
    img: "/models/Model_at_ancient_202604041646.jpeg",
    specialty: "Lifestyle & Nature",
  },
  {
    id: 7,
    name: "Hoa",
    origin: "Vietnam",
    type: "Female",
    img: "/models/Model_on_misty_202604041646.jpeg",
    specialty: "Outdoor & Lifestyle",
  },
  {
    id: 8,
    name: "Natcha",
    origin: "Thailand",
    type: "Female",
    img: "/models/Model_posing_concrete_202604041646.jpeg",
    specialty: "Urban & Editorial",
  },
  {
    id: 9,
    name: "Thu",
    origin: "Vietnam",
    type: "Female",
    img: "/models/Model_in_streetwear_202604041646.jpeg",
    specialty: "Street & Lifestyle",
  },
  {
    id: 10,
    name: "Sofia",
    origin: "Philippines",
    type: "Female",
    img: "/models/Model_sitting_on_202604041646.jpeg",
    specialty: "Minimalist & Studio",
  },
  {
    id: 11,
    name: "Niran",
    origin: "Thailand",
    type: "Female",
    img: "/models/Model_walks_haute_202604041646.jpeg",
    specialty: "Runway & Haute Couture",
  },
  {
    id: 12,
    name: "Jasmine",
    origin: "Philippines",
    type: "Female",
    img: "/models/Model_mid-stride_on_202604041646.jpeg",
    specialty: "Runway & Fashion",
  },
  {
    id: 13,
    name: "Maria",
    origin: "Philippines",
    type: "Female",
    img: "/models/Model_in_front_202604041646.jpeg",
    specialty: "Street & Commercial",
  },
  {
    id: 15,
    name: "Phuong",
    origin: "Vietnam",
    type: "Female",
    img: "/models/Model_on_fashion_202604041646.jpeg",
    specialty: "Fashion & Editorial",
  },
];

const locationData = [
  { city: "Bangkok", flag: "🇹🇭", roleKey: "locations_active_scouting", type: "home" },
  { city: "Manila", flag: "🇵🇭", roleKey: "locations_active_scouting", type: "home" },
  { city: "Ho Chi Minh City", flag: "🇻🇳", roleKey: "locations_active_scouting", type: "home" },
  { city: "London", flag: "🇬🇧", roleKey: "locations_target_market", type: "global" },
  { city: "New York", flag: "🇺🇸", roleKey: "locations_target_market", type: "global" },
  { city: "Paris", flag: "🇫🇷", roleKey: "locations_target_market", type: "global" },
];

export default function HomePage() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const steps = [
    {
      number: "01",
      titleKey: "hiw_step1_title",
      descKey: "hiw_step1_desc",
      labelKey: "hiw_step1_label",
    },
    {
      number: "02",
      titleKey: "hiw_step2_title",
      descKey: "hiw_step2_desc",
      labelKey: "hiw_step2_label",
    },
    {
      number: "03",
      titleKey: "hiw_step3_title",
      descKey: "hiw_step3_desc",
      labelKey: "hiw_step3_label",
    },
    {
      number: "04",
      titleKey: "hiw_step4_title",
      descKey: "hiw_step4_desc",
      labelKey: "hiw_step4_label",
    },
  ];

  const editorialServices = [
    {
      icon: "◆",
      titleKey: "service1_title",
      descKey: "service1_desc",
      tags: ["Fashion Week", "Designer Shows", "Haute Couture"],
    },
    {
      icon: "◆",
      titleKey: "service2_title",
      descKey: "service2_desc",
      tags: ["Magazines", "Lookbooks", "Print Ads"],
    },
    {
      icon: "◆",
      titleKey: "service3_title",
      descKey: "service3_desc",
      tags: ["Social Media", "Advertising", "Brand Deals"],
    },
  ];

  const exclusiveCards = [
    {
      titleKey: "exclusive_card1_title",
      descKey: "exclusive_card1_desc",
      noteKey: "exclusive_card1_note",
    },
    {
      titleKey: "exclusive_card2_title",
      descKey: "exclusive_card2_desc",
      noteKey: "exclusive_card2_note",
    },
    {
      titleKey: "exclusive_card3_title",
      descKey: "exclusive_card3_desc",
      noteKey: "exclusive_card3_note",
    },
  ];

  const exclusiveStandards = [
    { labelKey: "exclusive_std1_label", subKey: "exclusive_std1_sub" },
    { labelKey: "exclusive_std2_label", subKey: "exclusive_std2_sub" },
    { labelKey: "exclusive_std3_label", subKey: "exclusive_std3_sub" },
    { labelKey: "exclusive_std4_label", subKey: "exclusive_std4_sub" },
  ];

  return (
    <>
      <Navigation />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[600px] overflow-hidden flex items-end"
      >
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src="/models/Model_walks_haute_202604041646_2.jpeg"
            alt="Aurra Models hero"
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714]/80 via-[#1a1714]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1714]/40 to-transparent" />
        </motion.div>

        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24"
          style={{ opacity: heroOpacity }}
        >
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.2}>
            <span
              className="inline-block text-[#E8D5A3] text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("hero_tagline")}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="text-5xl sm:text-6xl lg:text-8xl font-light text-[#FAF7F2] leading-[1.05] tracking-[-0.01em] mb-6 max-w-3xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {t("hero_heading1")}
            <br />
            <em className="italic text-[#E8D5A3]">{t("hero_heading2")}</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="text-[#FAF7F2]/70 text-base lg:text-lg max-w-md leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {t("hero_subtitle")}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.65}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/apply"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C9A96E] text-[#2C2C2C] text-sm tracking-[0.08em] uppercase font-medium hover:bg-[#E8D5A3] transition-all duration-300 group"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("hero_cta_primary")}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#FAF7F2]/30 text-[#FAF7F2] text-sm tracking-[0.08em] uppercase hover:border-[#FAF7F2]/70 transition-all duration-300"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("hero_cta_secondary")}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 right-12 hidden lg:flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-[#FAF7F2]/30 animate-pulse" />
        </motion.div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="bg-[#2C2C2C] py-5 overflow-hidden">
        <div className="flex items-center gap-12 whitespace-nowrap" style={{ animation: "marquee 22s linear infinite" }}>
          {Array.from({ length: 2 }).flatMap((_, rep) =>
            ["Bangkok", "Manila", "Ho Chi Minh City", "London", "New York", "Paris"].map((city, i) => (
              <span
                key={`${rep}-${i}-${city}`}
                className="text-[#8A7F75] text-sm tracking-[0.25em] uppercase shrink-0 inline-flex items-center gap-12"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {city}
                <Star size={7} className="text-[#C9A96E] fill-[#C9A96E]" />
              </span>
            ))
          )}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <span
            className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4 block"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {t("portfolio_label")}
          </span>
          <h2
            className="text-4xl lg:text-6xl font-light leading-tight text-[#2C2C2C]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {t("portfolio_heading1")}
            <br />
            <em className="italic text-[#8A7F75]">{t("portfolio_heading2")}</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-7">
          {models.map((model, i) => (
            <motion.div
              key={model.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i * 0.08}
              className="group relative overflow-hidden rounded-3xl bg-[#F0E6D3] aspect-[3/4] cursor-pointer"
            >
              <Image
                src={model.img}
                alt={`${model.name} — ${model.origin} model`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[#FAF7F2] text-xl font-light" style={{ fontFamily: "var(--font-cormorant)" }}>
                  {model.name}
                </p>
                <p className="text-[#E8D5A3] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {model.origin} · {model.specialty}
                </p>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-sm">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A96E]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {model.origin}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-[#8A7F75] text-sm mb-6" style={{ fontFamily: "var(--font-dm-sans)" }}>
            {t("portfolio_note")}
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#2C2C2C] text-[#FAF7F2] text-sm tracking-[0.08em] uppercase hover:bg-[#C9A96E] hover:text-[#2C2C2C] transition-all duration-300 group"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {t("portfolio_cta")}
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* WE LOOK DIFFERENT */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span
            className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4 block"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {t("different_label")}
          </span>
          <h2
            className="text-4xl lg:text-6xl font-light leading-tight text-[#2C2C2C]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {t("different_heading")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1 — Natural */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="rounded-3xl bg-[#F0E6D3]/60 p-10 lg:p-12"
          >
            <div className="w-10 h-10 rounded-full bg-[#C9A96E]/20 flex items-center justify-center mb-6">
              <span className="text-[#C9A96E] text-lg" style={{ fontFamily: "var(--font-cormorant)" }}>✦</span>
            </div>
            <h3
              className="text-2xl lg:text-3xl font-light text-[#2C2C2C] mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {t("card_natural_title")}
            </h3>
            <p
              className="text-[#8A7F75] text-base leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("card_natural_desc")}
            </p>
          </motion.div>

          {/* Card 2 — Small Models */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.12}
            className="rounded-3xl bg-[#2C2C2C] p-10 lg:p-12"
          >
            <div className="w-10 h-10 rounded-full bg-[#C9A96E]/20 flex items-center justify-center mb-6">
              <span className="text-[#C9A96E] text-lg" style={{ fontFamily: "var(--font-cormorant)" }}>✦</span>
            </div>
            <h3
              className="text-2xl lg:text-3xl font-light text-[#FAF7F2] mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {t("card_petite_title")}
            </h3>
            <p
              className="text-[#8A7F75] text-base leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("card_petite_desc")}
            </p>
            <p
              className="text-[#8A7F75] text-base leading-relaxed mt-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("card_petite_desc2")}
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          className="mt-10 text-center"
        >
          <Link
            href="/apply"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C9A96E] text-[#2C2C2C] text-sm tracking-[0.08em] uppercase hover:bg-[#2C2C2C] hover:text-[#FAF7F2] transition-all duration-300 group"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {t("card_cta")}
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 lg:py-32 bg-[#F0E6D3]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-16 lg:mb-20"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4 block" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {t("hiw_label")}
            </span>
            <h2 className="text-4xl lg:text-6xl font-light leading-tight text-[#2C2C2C]" style={{ fontFamily: "var(--font-cormorant)" }}>
              {t("hiw_heading1")}
              <br />
              <em className="italic text-[#8A7F75]">{t("hiw_heading2")}</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.12}
              >
                <div className="bg-[#FAF7F2] rounded-3xl p-8 lg:p-10 h-full border border-[#E8C4B0]/40 hover:border-[#C9A96E]/60 hover:shadow-lg transition-all duration-400 group">
                  <span
                    className="text-6xl font-light text-[#E8C4B0] group-hover:text-[#C9A96E] transition-colors duration-300 block mb-6"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {step.number}
                  </span>
                  <span
                    className="inline-block px-3 py-1 rounded-full bg-[#F0E6D3] text-[#8A7F75] text-xs tracking-[0.15em] uppercase mb-4"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {t(step.labelKey)}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-light text-[#2C2C2C] mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-[#8A7F75] text-sm leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {t(step.descKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            className="mt-14 text-center"
          >
            <Link
              href="/apply"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#C9A96E] text-[#2C2C2C] text-sm tracking-[0.08em] uppercase font-medium hover:bg-[#2C2C2C] hover:text-[#FAF7F2] transition-all duration-300 group"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("hiw_cta")}
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4 block" style={{ fontFamily: "var(--font-dm-sans)" }}>
            {t("locations_label")}
          </span>
          <h2 className="text-4xl lg:text-6xl font-light leading-tight text-[#2C2C2C]" style={{ fontFamily: "var(--font-cormorant)" }}>
            {t("locations_heading1")}
            <br />
            <em className="italic text-[#8A7F75]">{t("locations_heading2")}</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#2C2C2C] rounded-[2rem] p-10 lg:p-12"
          >
            <div className="mb-8">
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#C9A96E]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                {t("locations_scouting_area")}
              </span>
              <h3 className="text-3xl lg:text-4xl font-light text-[#FAF7F2] mt-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                {t("locations_southeast_asia")}
              </h3>
            </div>
            <div className="space-y-5">
              {locationData.filter((l) => l.type === "home").map((loc, i) => (
                <motion.div
                  key={loc.city}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between border-b border-[#8A7F75]/20 pb-5 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{loc.flag}</span>
                    <div>
                      <p className="text-[#FAF7F2] font-light" style={{ fontFamily: "var(--font-dm-sans)" }}>{loc.city}</p>
                      <p className="text-[#8A7F75] text-xs tracking-[0.1em]" style={{ fontFamily: "var(--font-dm-sans)" }}>{t(loc.roleKey)}</p>
                    </div>
                  </div>
                  <MapPin size={14} className="text-[#C9A96E]" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            className="bg-[#F0E6D3] rounded-[2rem] p-10 lg:p-12"
          >
            <div className="mb-8">
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#C9A96E]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                {t("locations_target_markets")}
              </span>
              <h3 className="text-3xl lg:text-4xl font-light text-[#2C2C2C] mt-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                {t("locations_global_reach")}
              </h3>
            </div>
            <div className="space-y-5">
              {locationData.filter((l) => l.type === "global").map((loc, i) => (
                <motion.div
                  key={loc.city}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between border-b border-[#C9A96E]/20 pb-5 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{loc.flag}</span>
                    <div>
                      <p className="text-[#2C2C2C] font-light" style={{ fontFamily: "var(--font-dm-sans)" }}>{loc.city}</p>
                      <p className="text-[#8A7F75] text-xs tracking-[0.1em]" style={{ fontFamily: "var(--font-dm-sans)" }}>{t(loc.roleKey)}</p>
                    </div>
                  </div>
                  <MapPin size={14} className="text-[#8A7F75]" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES — EDITORIAL */}
      <section id="editorial" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4 block" style={{ fontFamily: "var(--font-dm-sans)" }}>
            {t("editorial_label")}
          </span>
          <h2 className="text-4xl lg:text-6xl font-light leading-tight text-[#2C2C2C]" style={{ fontFamily: "var(--font-cormorant)" }}>
            {t("editorial_heading1")}
            <br />
            <em className="italic text-[#8A7F75]">{t("editorial_heading2")}</em>
          </h2>
          <p className="mt-6 text-[#8A7F75] text-base leading-relaxed max-w-xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
            {t("editorial_subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {editorialServices.map((item, i) => (
            <motion.div
              key={item.titleKey}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.1}
              className="bg-[#F0E6D3]/60 rounded-3xl p-8 lg:p-10 border border-[#E8C4B0]/40 hover:border-[#C9A96E]/50 hover:shadow-md transition-all duration-400 group"
            >
              <span className="text-[#C9A96E] text-lg mb-6 block">{item.icon}</span>
              <h3 className="text-2xl font-light text-[#2C2C2C] mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
                {t(item.titleKey)}
              </h3>
              <p className="text-[#8A7F75] text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-dm-sans)" }}>
                {t(item.descKey)}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E8C4B0] text-[#8A7F75] text-xs tracking-[0.1em] uppercase"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-start"
        >
          <Link
            href="/apply"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#2C2C2C] text-[#FAF7F2] text-sm tracking-[0.08em] uppercase hover:bg-[#C9A96E] hover:text-[#2C2C2C] transition-all duration-300 group"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {t("editorial_apply")}
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="/apply"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#2C2C2C]/20 text-[#2C2C2C] text-sm tracking-[0.08em] uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {t("editorial_book")}
          </a>
        </motion.div>
      </section>

      {/* SERVICES — 18+ EXCLUSIVE */}
      <section id="exclusive" className="py-24 lg:py-32 bg-[#1a1714] relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #C9A96E 0, #C9A96E 1px, transparent 0, transparent 50%)",
            backgroundSize: "8px 8px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <span
                className="px-3 py-1 rounded-full border border-[#C9A96E]/40 text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {t("exclusive_label")}
              </span>
            </div>
            <h2
              className="text-4xl lg:text-6xl font-light leading-tight text-[#FAF7F2]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {t("exclusive_heading1")}
              <br />
              <em className="italic text-[#C9A96E]">{t("exclusive_heading2")}</em>
            </h2>
            <p
              className="mt-6 text-[#8A7F75] text-base leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("exclusive_desc")}
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {exclusiveCards.map((item, i) => (
              <motion.div
                key={item.titleKey}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                className="relative rounded-3xl p-8 lg:p-10 border border-[#C9A96E]/15 hover:border-[#C9A96E]/40 transition-all duration-500 group bg-[#FAF7F2]/[0.03]"
              >
                <div className="w-10 h-px bg-[#C9A96E]/40 mb-8 group-hover:w-16 transition-all duration-500" />
                <span
                  className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E]/70 mb-3 block"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {t(item.noteKey)}
                </span>
                <h3
                  className="text-2xl lg:text-3xl font-light text-[#FAF7F2] mb-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {t(item.titleKey)}
                </h3>
                <p
                  className="text-[#8A7F75] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {t(item.descKey)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Standards strip */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border-t border-[#C9A96E]/15 pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {exclusiveStandards.map((item) => (
              <div key={item.labelKey}>
                <p
                  className="text-[#C9A96E] text-sm font-medium mb-1"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {t(item.labelKey)}
                </p>
                <p
                  className="text-[#8A7F75] text-xs"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {t(item.subKey)}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <a
              href="/apply"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C9A96E] text-[#1a1714] text-sm tracking-[0.08em] uppercase font-medium hover:bg-[#E8D5A3] transition-all duration-300 group"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("exclusive_cta_enquire")}
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/apply"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#FAF7F2]/15 text-[#FAF7F2]/70 text-sm tracking-[0.08em] uppercase hover:border-[#C9A96E]/40 hover:text-[#C9A96E] transition-all duration-300"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("exclusive_cta_apply")}
            </Link>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 text-[#8A7F75]/50 text-xs leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {t("exclusive_disclaimer")}
          </motion.p>
        </div>
      </section>

      {/* FOUNDER / SCOUT */}
      <section id="about" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">

          {/* Small portrait — subtle, editorial */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="relative w-52 h-64 lg:w-60 lg:h-72 rounded-2xl overflow-hidden bg-[#2C2C2C] shadow-lg">
              <Image
                src="/models/adrian-bw.jpg"
                alt="Adrian — Co-Founder Aurra Models"
                fill
                sizes="(max-width: 1024px) 208px, 240px"
                className="object-cover object-center grayscale"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.15}
            className=""
          >
            <span
              className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4 block"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("founder_label")}
            </span>
            <h2
              className="text-4xl lg:text-5xl font-light leading-tight text-[#2C2C2C] mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {t("founder_heading")}
            </h2>

            <div className="space-y-4 mb-8">
              <p
                className="text-[#8A7F75] text-base leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {t("founder_para1")}
              </p>
              <p
                className="text-[#8A7F75] text-base leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {t("founder_para2")}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 pt-8 border-t border-[#E8C4B0]/40">
              {[
                { num: "3", labelKey: "founder_stat1" },
                { num: "6", labelKey: "founder_stat2" },
                { num: "18+", labelKey: "founder_stat3" },
              ].map((stat) => (
                <div key={stat.labelKey}>
                  <p
                    className="text-3xl font-light text-[#C9A96E]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {stat.num}
                  </p>
                  <p
                    className="text-xs tracking-[0.15em] uppercase text-[#8A7F75] mt-1"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {t(stat.labelKey)}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/apply"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#2C2C2C] text-[#FAF7F2] text-sm tracking-[0.08em] uppercase hover:bg-[#C9A96E] hover:text-[#2C2C2C] transition-all duration-300 group"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("founder_cta")}
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 lg:py-36 bg-[#F0E6D3]/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-6 block" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {t("cta_label")}
            </span>
            <h2 className="text-5xl lg:text-7xl font-light leading-tight text-[#2C2C2C] mb-8" style={{ fontFamily: "var(--font-cormorant)" }}>
              {t("cta_heading1")}
              <br />
              <em className="italic text-[#C9A96E]">{t("cta_heading2")}</em>
            </h2>
            <p className="text-[#8A7F75] text-base lg:text-lg leading-relaxed mb-12 max-w-xl mx-auto" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {t("cta_desc")}
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-[#2C2C2C] text-[#FAF7F2] text-sm tracking-[0.1em] uppercase hover:bg-[#C9A96E] hover:text-[#2C2C2C] transition-all duration-400 group"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("cta_button")}
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
            <p className="mt-6 text-xs text-[#8A7F75] tracking-wide" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {t("cta_note")}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
