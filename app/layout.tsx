import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/contexts/LanguageContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Aurra Models — Asia's Premier Modelling Agency",
  description:
    "Aurra Models connects aspiring talent from Thailand, the Philippines, and Vietnam with the world's top fashion markets in London, New York, and Paris. Apply for your casting today.",
  keywords: "model agency, Thailand, Philippines, Vietnam, fashion, casting, London, New York, Paris",
  openGraph: {
    title: "Aurra Models",
    description: "Asia's premier modelling agency — connecting talent with global fashion markets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-[#2C2C2C] antialiased">
        <LanguageProvider>
          {children}
          <CookieBanner />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
