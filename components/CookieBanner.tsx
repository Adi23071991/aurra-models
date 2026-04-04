"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-ok")) setVisible(true);
  }, []);

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem("cookie-ok", "1");
    setVisible(false);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-lg mx-auto bg-[#2C2C2C] text-[#FAF7F2] rounded-2xl px-5 py-4 flex items-center justify-between gap-4 shadow-xl">
      <p className="text-xs leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
        Diese Website verwendet Cookies. Mit der Nutzung stimmst du zu.{" "}
        <a href="/datenschutz" className="underline hover:text-[#C9A96E] transition-colors">
          Mehr
        </a>
      </p>
      <button
        onClick={accept}
        className="shrink-0 px-4 py-1.5 rounded-full bg-[#C9A96E] text-[#2C2C2C] text-xs font-medium tracking-wide hover:bg-[#d4b77a] transition-colors"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        OK
      </button>
    </div>
  );
}
