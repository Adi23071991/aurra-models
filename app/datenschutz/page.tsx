import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DatenschutzPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24 px-6 lg:px-12 max-w-3xl mx-auto">
        <h1
          className="font-serif text-4xl font-light tracking-wide text-[#2C2C2C] mb-10"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Datenschutzerklärung
        </h1>

        <div
          className="space-y-8 text-[#2C2C2C] text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          <section>
            <h2 className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-3">1. Verantwortlicher</h2>
            <p>
              Adrian M. S. (Aurra Models)<br />
              E-Mail: <a href="mailto:hello@aurra-models.com" className="hover:text-[#C9A96E] transition-colors">hello@aurra-models.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-3">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p className="text-[#8A7F75]">
              Beim Besuch dieser Website werden automatisch Informationen allgemeiner Natur erfasst (Server-Logfiles).
              Diese Daten (z. B. Browser, Betriebssystem, Uhrzeit des Zugriffs) werden nur zur technischen
              Bereitstellung der Website verwendet und nicht mit personenbezogenen Daten verknüpft.
            </p>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-3">3. Bewerbungsformular</h2>
            <p className="text-[#8A7F75]">
              Daten, die du über unser Casting-Formular übermittelst (Name, E-Mail, Telefon, Alter, Erfahrung),
              werden ausschließlich zur Bearbeitung deiner Bewerbung verwendet. Eine Weitergabe an Dritte erfolgt
              nicht ohne deine ausdrückliche Zustimmung. Grundlage der Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-3">4. Cookies</h2>
            <p className="text-[#8A7F75]">
              Diese Website verwendet technisch notwendige Cookies, um grundlegende Funktionen bereitzustellen.
              Es werden keine Tracking- oder Werbe-Cookies eingesetzt. Mit der weiteren Nutzung der Website
              stimmst du der Verwendung technisch notwendiger Cookies zu.
            </p>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-3">5. Deine Rechte</h2>
            <p className="text-[#8A7F75]">
              Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner
              Daten sowie das Recht auf Datenübertragbarkeit. Wende dich dazu jederzeit an:{" "}
              <a href="mailto:hello@aurra-models.com" className="text-[#C9A96E] hover:underline">
                hello@aurra-models.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-3">6. Hosting</h2>
            <p className="text-[#8A7F75]">
              Diese Website wird über Vercel gehostet (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA).
              Details zur Datenverarbeitung durch Vercel findest du unter{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#C9A96E] hover:underline">
                vercel.com/legal/privacy-policy
              </a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
