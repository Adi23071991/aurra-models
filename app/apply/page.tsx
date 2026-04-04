"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle, Upload, ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

const schema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  age: z.string().refine((v) => {
    const n = parseInt(v);
    return n >= 18 && n <= 25;
  }, "You must be between 18 and 25 years old"),
  gender: z.enum(["female", "non-binary", "prefer-not-to-say"]).refine(
    (v) => !!v,
    "Please select your gender"
  ),
  nationality: z.enum(["thai", "philippine", "vietnamese", "other"]).refine(
    (v) => !!v,
    "Please select your nationality"
  ),
  height: z.string().min(1, "Please enter your height"),
  experience: z.enum(["none", "beginner", "some", "experienced"]).refine(
    (v) => !!v,
    "Please select your experience level"
  ),
  message: z.string().optional(),
  consent: z.boolean().refine((v) => v === true, "You must agree to be contacted"),
});

type FormData = z.infer<typeof schema>;

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  const inputClass = `w-full px-5 py-4 rounded-2xl bg-[#FAF7F2] border border-[#E8C4B0]/60 text-[#2C2C2C] placeholder-[#8A7F75]/60 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors duration-300`;
  const selectClass = `w-full px-5 py-4 rounded-2xl bg-[#FAF7F2] border border-[#E8C4B0]/60 text-[#2C2C2C] text-sm focus:outline-none focus:border-[#C9A96E] transition-colors duration-300 appearance-none cursor-pointer`;
  const labelClass = `block text-xs tracking-[0.15em] uppercase text-[#8A7F75] mb-2`;
  const errorClass = `text-[#C9906E] text-xs mt-1.5 ml-1`;

  if (submitted) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen flex items-center justify-center px-6 py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#F0E6D3] flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={28} className="text-[#C9A96E]" />
            </div>
            <h1
              className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Application
              <br />
              <em className="italic text-[#C9A96E]">Received.</em>
            </h1>
            <p
              className="text-[#8A7F75] text-base leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Thank you for applying to Aurra Models. We&apos;ll review your
              application and get back to you within 48 hours to schedule your
              personal casting talk.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#2C2C2C] text-[#FAF7F2] text-sm tracking-[0.08em] uppercase hover:bg-[#C9A96E] hover:text-[#2C2C2C] transition-all duration-300"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Back to Home
            </Link>
          </motion.div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />

      <main className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Back link */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#8A7F75] text-sm hover:text-[#2C2C2C] transition-colors duration-300 mb-12"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left — Text */}
            <div className="lg:sticky lg:top-28">
              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>
                <span
                  className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4 block"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Casting Application
                </span>
                <h1
                  className="text-4xl lg:text-6xl font-light leading-tight text-[#2C2C2C] mb-8"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Begin Your
                  <br />
                  <em className="italic text-[#C9A96E]">Journey.</em>
                </h1>
                <p
                  className="text-[#8A7F75] text-base leading-relaxed mb-10 max-w-sm"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Fill out this form and we&apos;ll invite you to a personal
                  pre-interview — a relaxed conversation to get to know you,
                  your personality, and your potential.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.25}
                className="space-y-5"
              >
                {[
                  { icon: "✦", text: "No professional experience required" },
                  { icon: "✦", text: "Open to women aged 18–25" },
                  { icon: "✦", text: "Thai, Filipino & Vietnamese talent welcome" },
                  { icon: "✦", text: "Completely free — no fees, no obligations" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="text-[#C9A96E] text-xs mt-0.5">{item.icon}</span>
                    <span
                      className="text-[#8A7F75] text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Form */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.2}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {/* Name Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} style={{ fontFamily: "var(--font-dm-sans)" }}>First Name</label>
                    <input {...register("firstName")} placeholder="Niran" className={inputClass} style={{ fontFamily: "var(--font-dm-sans)" }} />
                    {errors.firstName && <p className={errorClass} style={{ fontFamily: "var(--font-dm-sans)" }}>{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass} style={{ fontFamily: "var(--font-dm-sans)" }}>Last Name</label>
                    <input {...register("lastName")} placeholder="Saengthong" className={inputClass} style={{ fontFamily: "var(--font-dm-sans)" }} />
                    {errors.lastName && <p className={errorClass} style={{ fontFamily: "var(--font-dm-sans)" }}>{errors.lastName.message}</p>}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className={labelClass} style={{ fontFamily: "var(--font-dm-sans)" }}>Email Address</label>
                  <input {...register("email")} type="email" placeholder="your@email.com" className={inputClass} style={{ fontFamily: "var(--font-dm-sans)" }} />
                  {errors.email && <p className={errorClass} style={{ fontFamily: "var(--font-dm-sans)" }}>{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className={labelClass} style={{ fontFamily: "var(--font-dm-sans)" }}>Phone / WhatsApp</label>
                  <input {...register("phone")} type="tel" placeholder="+66 81 234 5678" className={inputClass} style={{ fontFamily: "var(--font-dm-sans)" }} />
                  {errors.phone && <p className={errorClass} style={{ fontFamily: "var(--font-dm-sans)" }}>{errors.phone.message}</p>}
                </div>

                {/* Age + Gender */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} style={{ fontFamily: "var(--font-dm-sans)" }}>Age</label>
                    <input {...register("age")} type="number" min="18" max="25" placeholder="21" className={inputClass} style={{ fontFamily: "var(--font-dm-sans)" }} />
                    {errors.age && <p className={errorClass} style={{ fontFamily: "var(--font-dm-sans)" }}>{errors.age.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass} style={{ fontFamily: "var(--font-dm-sans)" }}>Gender</label>
                    <div className="relative">
                      <select {...register("gender")} className={selectClass} style={{ fontFamily: "var(--font-dm-sans)" }}>
                        <option value="">Select...</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-binary</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A7F75] pointer-events-none" />
                    </div>
                    {errors.gender && <p className={errorClass} style={{ fontFamily: "var(--font-dm-sans)" }}>{errors.gender.message}</p>}
                  </div>
                </div>

                {/* Nationality + Height */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} style={{ fontFamily: "var(--font-dm-sans)" }}>Nationality</label>
                    <div className="relative">
                      <select {...register("nationality")} className={selectClass} style={{ fontFamily: "var(--font-dm-sans)" }}>
                        <option value="">Select...</option>
                        <option value="thai">🇹🇭 Thai</option>
                        <option value="philippine">🇵🇭 Filipino/a</option>
                        <option value="vietnamese">🇻🇳 Vietnamese</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A7F75] pointer-events-none" />
                    </div>
                    {errors.nationality && <p className={errorClass} style={{ fontFamily: "var(--font-dm-sans)" }}>{errors.nationality.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass} style={{ fontFamily: "var(--font-dm-sans)" }}>Height (cm)</label>
                    <input {...register("height")} type="number" placeholder="170" className={inputClass} style={{ fontFamily: "var(--font-dm-sans)" }} />
                    {errors.height && <p className={errorClass} style={{ fontFamily: "var(--font-dm-sans)" }}>{errors.height.message}</p>}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label className={labelClass} style={{ fontFamily: "var(--font-dm-sans)" }}>Modelling Experience</label>
                  <div className="relative">
                    <select {...register("experience")} className={selectClass} style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <option value="">Select...</option>
                      <option value="none">No experience — complete beginner</option>
                      <option value="beginner">Some amateur experience</option>
                      <option value="some">A few paid bookings</option>
                      <option value="experienced">Professional experience</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A7F75] pointer-events-none" />
                  </div>
                  {errors.experience && <p className={errorClass} style={{ fontFamily: "var(--font-dm-sans)" }}>{errors.experience.message}</p>}
                </div>

                {/* Photo Upload */}
                <div>
                  <label className={labelClass} style={{ fontFamily: "var(--font-dm-sans)" }}>Photos (optional)</label>
                  <label className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#FAF7F2] border border-dashed border-[#E8C4B0] hover:border-[#C9A96E] transition-colors duration-300 cursor-pointer group">
                    <Upload size={16} className="text-[#C9A96E]" />
                    <span className="text-sm text-[#8A7F75] group-hover:text-[#2C2C2C] transition-colors" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {fileName ? fileName : "Upload 1–3 recent photos (JPG, PNG · max 5 MB each)"}
                    </span>
                    <input
                      type="file"
                      accept="image/jpeg,image/png"
                      multiple
                      className="hidden"
                      onChange={(e) => {
                        const files = e.target.files;
                        if (files && files.length > 0) {
                          setFileName(
                            files.length === 1
                              ? files[0].name
                              : `${files.length} files selected`
                          );
                        }
                      }}
                    />
                  </label>
                  <p className="text-xs text-[#8A7F75] mt-1.5 ml-1" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    No professional shots needed — selfies are fine.
                  </p>
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass} style={{ fontFamily: "var(--font-dm-sans)" }}>
                    Tell Us About Yourself{" "}
                    <span className="normal-case tracking-normal text-[#8A7F75]/60 lowercase">(optional)</span>
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Why do you want to become a model? What are your dreams and goals? Feel free to write in English, Thai, Tagalog, or Vietnamese."
                    className={`${inputClass} resize-none`}
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                </div>

                {/* Consent */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      {...register("consent")}
                      type="checkbox"
                      className="mt-1 w-4 h-4 rounded accent-[#C9A96E] cursor-pointer shrink-0"
                    />
                    <span
                      className="text-sm text-[#8A7F75] leading-relaxed group-hover:text-[#2C2C2C] transition-colors"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      I agree to be contacted by Aurra Models regarding my
                      application and understand that my data will be handled
                      confidentially.
                    </span>
                  </label>
                  {errors.consent && <p className={errorClass} style={{ fontFamily: "var(--font-dm-sans)" }}>{errors.consent.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 rounded-2xl bg-[#2C2C2C] text-[#FAF7F2] text-sm tracking-[0.1em] uppercase font-medium hover:bg-[#C9A96E] hover:text-[#2C2C2C] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-400"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {isSubmitting ? "Sending..." : "Submit Application"}
                </button>

                <p className="text-xs text-center text-[#8A7F75]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  We respond within 48 hours · Free · No commitment
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
