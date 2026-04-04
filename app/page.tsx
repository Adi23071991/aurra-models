"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, MapPin, Star } from "lucide-react";

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

const steps = [
  {
    number: "01",
    title: "Casting Talk",
    desc: "We invite you to a relaxed personal conversation — just 15 to 30 minutes. No pressure, no expectations. We simply want to get to know you.",
    label: "15–30 min",
  },
  {
    number: "02",
    title: "Your Profile Card",
    desc: "We create your personal profile card (Kartei) — a private folder that includes an amateur photo series taken by us, plus any of your own favourite private photos you'd like to add. All costs are covered by us. No expenses for you.",
    label: "No cost for you",
  },
  {
    number: "03",
    title: "Into the Booking System",
    desc: "Your profile card enters our booking database. Potential clients can browse it — and they are always informed upfront that these are amateur and personal photos, not a professional editorial series.",
    label: "Your card goes live",
  },
  {
    number: "04",
    title: "Professional Photo Series",
    desc: "When a client expresses genuine interest in you, we invite you back for a high-quality professional photo shoot — fully organised and paid for by us. No costs come to you at any stage.",
    label: "Fully covered",
  },
];

const locations = [
  { city: "Bangkok", flag: "🇹🇭", role: "Active Scouting", type: "home" },
  { city: "Manila", flag: "🇵🇭", role: "Active Scouting", type: "home" },
  { city: "Ho Chi Minh City", flag: "🇻🇳", role: "Active Scouting", type: "home" },
  { city: "London", flag: "🇬🇧", role: "Target Market", type: "global" },
  { city: "New York", flag: "🇺🇸", role: "Target Market", type: "global" },
  { city: "Paris", flag: "🇫🇷", role: "Target Market", type: "global" },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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
              Asia&apos;s Premier Modelling Agency
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
            Your Story
            <br />
            <em className="italic text-[#E8D5A3]">Begins Here.</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="text-[#FAF7F2]/70 text-base lg:text-lg max-w-md leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            We discover authentic talent from Thailand, the Philippines, and
            Vietnam — and connect them with London, New York, and Paris.
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
              Apply for Casting
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#FAF7F2]/30 text-[#FAF7F2] text-sm tracking-[0.08em] uppercase hover:border-[#FAF7F2]/70 transition-all duration-300"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              View Portfolio
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
            Our Talent
          </span>
          <h2
            className="text-4xl lg:text-6xl font-light leading-tight text-[#2C2C2C]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            A New Generation
            <br />
            <em className="italic text-[#8A7F75]">of Faces</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
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
            Example portraits — your real portfolio starts after your casting.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#2C2C2C] text-[#FAF7F2] text-sm tracking-[0.08em] uppercase hover:bg-[#C9A96E] hover:text-[#2C2C2C] transition-all duration-300 group"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Become Part of Aurra
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
            What Makes Us Different
          </span>
          <h2
            className="text-4xl lg:text-6xl font-light leading-tight text-[#2C2C2C]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Beauty Has{" "}
            <em className="italic text-[#C9A96E]">No Standard Size.</em>
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
              We Want <em className="italic">Real.</em>
            </h3>
            <p
              className="text-[#8A7F75] text-base leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              We are not looking for a manufactured look. We scout for natural beauty —
              authentic faces, genuine personality, and the kind of presence that a camera
              cannot fake. No heavy editing, no unrealistic expectations.
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
              Height Is{" "}
              <em className="italic text-[#C9A96E]">Not a Limit.</em>
            </h3>
            <p
              className="text-[#8A7F75] text-base leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Traditional agencies often set rigid height requirements. We don&apos;t.
              Petite and smaller models bring a unique, sought-after aesthetic to
              editorial, commercial, and intimate content — and we actively seek
              out that talent. If you have the look, we want to meet you.
            </p>
            <p
              className="text-[#8A7F75] text-base leading-relaxed mt-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Our initial casting talk takes only <span className="text-[#C9A96E]">15–30 minutes</span> — a relaxed, no-pressure conversation to get to know you.
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
            Apply — No Matter Your Size
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
              The Process
            </span>
            <h2 className="text-4xl lg:text-6xl font-light leading-tight text-[#2C2C2C]" style={{ fontFamily: "var(--font-cormorant)" }}>
              From First Talk
              <br />
              <em className="italic text-[#8A7F75]">to Professional Shoot</em>
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
                    {step.label}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-light text-[#2C2C2C] mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
                    {step.title}
                  </h3>
                  <p className="text-[#8A7F75] text-sm leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {step.desc}
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
              Start Your Application
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
            Where We Scout
          </span>
          <h2 className="text-4xl lg:text-6xl font-light leading-tight text-[#2C2C2C]" style={{ fontFamily: "var(--font-cormorant)" }}>
            Our Search Area —
            <br />
            <em className="italic text-[#8A7F75]">Asia to the World</em>
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
                Scouting Area
              </span>
              <h3 className="text-3xl lg:text-4xl font-light text-[#FAF7F2] mt-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                Southeast Asia
              </h3>
            </div>
            <div className="space-y-5">
              {locations.filter((l) => l.type === "home").map((loc, i) => (
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
                      <p className="text-[#8A7F75] text-xs tracking-[0.1em]" style={{ fontFamily: "var(--font-dm-sans)" }}>{loc.role}</p>
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
                Target Markets
              </span>
              <h3 className="text-3xl lg:text-4xl font-light text-[#2C2C2C] mt-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                Global Reach
              </h3>
            </div>
            <div className="space-y-5">
              {locations.filter((l) => l.type === "global").map((loc, i) => (
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
                      <p className="text-[#8A7F75] text-xs tracking-[0.1em]" style={{ fontFamily: "var(--font-dm-sans)" }}>{loc.role}</p>
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
            For Agencies & Brands
          </span>
          <h2 className="text-4xl lg:text-6xl font-light leading-tight text-[#2C2C2C]" style={{ fontFamily: "var(--font-cormorant)" }}>
            Editorial &amp; Commercial
            <br />
            <em className="italic text-[#8A7F75]">Photography</em>
          </h2>
          <p className="mt-6 text-[#8A7F75] text-base leading-relaxed max-w-xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Our models are available for runway shows, advertising campaigns, fashion editorials,
            lookbooks, and brand collaborations — professionally managed and agency-ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "◆",
              title: "Runway & Fashion",
              desc: "Catwalk presentations for local and international fashion weeks. Our models are trained for stage presence and movement.",
              tags: ["Fashion Week", "Designer Shows", "Haute Couture"],
            },
            {
              icon: "◆",
              title: "Editorial & Print",
              desc: "Magazine covers, editorial spreads, and print campaigns. We work with established and emerging photographers across Asia.",
              tags: ["Magazines", "Lookbooks", "Print Ads"],
            },
            {
              icon: "◆",
              title: "Brand & Commercial",
              desc: "Product campaigns, social media content, and brand ambassador roles — delivered on time and on-brief.",
              tags: ["Social Media", "Advertising", "Brand Deals"],
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.1}
              className="bg-[#F0E6D3]/60 rounded-3xl p-8 lg:p-10 border border-[#E8C4B0]/40 hover:border-[#C9A96E]/50 hover:shadow-md transition-all duration-400 group"
            >
              <span className="text-[#C9A96E] text-lg mb-6 block">{item.icon}</span>
              <h3 className="text-2xl font-light text-[#2C2C2C] mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
                {item.title}
              </h3>
              <p className="text-[#8A7F75] text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-dm-sans)" }}>
                {item.desc}
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
            Apply as Model
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="/apply"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#2C2C2C]/20 text-[#2C2C2C] text-sm tracking-[0.08em] uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Book a Model
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
                Adults Only · 18+
              </span>
            </div>
            <h2
              className="text-4xl lg:text-6xl font-light leading-tight text-[#FAF7F2]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Exclusive &amp; Intimate
              <br />
              <em className="italic text-[#C9A96E]">Content</em>
            </h2>
            <p
              className="mt-6 text-[#8A7F75] text-base leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              A curated selection of our talent is available for tasteful artistic and intimate photography —
              handled with full professionalism, discretion, and consent. All models are 18+ verified.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[
              {
                title: "Boudoir",
                desc: "Elegant, intimate portraiture in a private setting. Artistic and sensual — never explicit. Perfect for premium publications and private collectors.",
                note: "Tasteful · Artistic",
              },
              {
                title: "Lingerie & Swimwear",
                desc: "High-quality campaigns for lingerie brands, swimwear labels, and lifestyle publications requiring confident, natural presentation.",
                note: "Commercial · Editorial",
              },
              {
                title: "Artistic Nude",
                desc: "Fine-art photography for serious photographers and collectors. Always conducted in a safe, respectful, and fully consensual professional environment.",
                note: "Fine Art · Exclusive",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
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
                  {item.note}
                </span>
                <h3
                  className="text-2xl lg:text-3xl font-light text-[#FAF7F2] mb-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#8A7F75] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.desc}
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
            {[
              { label: "Verified 18+", sub: "All models age-verified" },
              { label: "Fully Consensual", sub: "Written agreement always" },
              { label: "Private & Discreet", sub: "NDA available on request" },
              { label: "Professional", sub: "Vetted photographers only" },
            ].map((item) => (
              <div key={item.label}>
                <p
                  className="text-[#C9A96E] text-sm font-medium mb-1"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-[#8A7F75] text-xs"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.sub}
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
              Enquire Privately
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/apply"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#FAF7F2]/15 text-[#FAF7F2]/70 text-sm tracking-[0.08em] uppercase hover:border-[#C9A96E]/40 hover:text-[#C9A96E] transition-all duration-300"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Apply as Model
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
            All content produced through Aurra Models Exclusive is strictly legal, produced with fully
            informed adult consent, and complies with applicable laws in all operating jurisdictions.
            Models must be 18 years or older. Age verification is mandatory.
          </motion.p>
        </div>
      </section>

      {/* FOUNDER / SCOUT */}
      <section id="about" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Photos */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main photo */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#F0E6D3]">
              <Image
                src="/models/founder-bali.jpg"
                alt="Adrian — Co-Founder Aurra Models"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Small accent photo — editorial B&W treatment */}
            <div className="absolute -bottom-8 -right-8 w-52 h-52 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-4 border-[#FAF7F2] shadow-xl bg-[#2C2C2C]">
              <Image
                src="/models/founder-editorial.jpg"
                alt="Adrian"
                fill
                sizes="(max-width: 1024px) 208px, 288px"
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
            className="lg:pl-8"
          >
            <span
              className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4 block"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Co-Founder · Asia
            </span>
            <h2
              className="text-4xl lg:text-5xl font-light leading-tight text-[#2C2C2C] mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Meet <em className="italic text-[#C9A96E]">Adrian.</em>
            </h2>

            <div className="space-y-4 mb-8">
              <p
                className="text-[#8A7F75] text-base leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Adrian is co-founder of Aurra Models and heads the Asia division —
                scouting and developing talent across Thailand, the Philippines, and Vietnam.
              </p>
              <p
                className="text-[#8A7F75] text-base leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Together with his partner Joshua, who represents Aurra in London, New York,
                and Paris, Adrian builds the bridge between Southeast Asia&apos;s most promising
                faces and the world&apos;s top fashion markets.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 pt-8 border-t border-[#E8C4B0]/40">
              {[
                { num: "3", label: "Asian Markets" },
                { num: "6", label: "Global Cities" },
                { num: "18+", label: "Only" },
              ].map((stat) => (
                <div key={stat.label}>
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
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/apply"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#2C2C2C] text-[#FAF7F2] text-sm tracking-[0.08em] uppercase hover:bg-[#C9A96E] hover:text-[#2C2C2C] transition-all duration-300 group"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Contact Adrian directly
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
              Ready?
            </span>
            <h2 className="text-5xl lg:text-7xl font-light leading-tight text-[#2C2C2C] mb-8" style={{ fontFamily: "var(--font-cormorant)" }}>
              Your Casting Awaits.
              <br />
              <em className="italic text-[#C9A96E]">No Experience Needed.</em>
            </h2>
            <p className="text-[#8A7F75] text-base lg:text-lg leading-relaxed mb-12 max-w-xl mx-auto" style={{ fontFamily: "var(--font-dm-sans)" }}>
              We believe in raw talent and authentic beauty. If you&apos;re between
              18 and 25 and dreaming of a career in fashion — this is your moment.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-[#2C2C2C] text-[#FAF7F2] text-sm tracking-[0.1em] uppercase hover:bg-[#C9A96E] hover:text-[#2C2C2C] transition-all duration-400 group"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Apply for Your Casting
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
            <p className="mt-6 text-xs text-[#8A7F75] tracking-wide" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Free · No commitment · Response within 48 hours
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
