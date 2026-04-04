import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24 px-6 lg:px-12 max-w-3xl mx-auto">
        <h1
          className="font-serif text-4xl font-light tracking-wide text-[#2C2C2C] mb-10"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Impressum
        </h1>

        <div
          className="space-y-8 text-[#2C2C2C] text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          <section>
            <h2 className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              Adrian<br />
              {/* TODO: Replace with real address */}
              [Straße und Hausnummer]<br />
              [PLZ Ort]<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-3">Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:hello@aurra-models.com" className="hover:text-[#C9A96E] transition-colors">hello@aurra-models.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-3">Verantwortlich für den Inhalt</h2>
            <p>Adrian</p>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-3">Haftungsausschluss</h2>
            <p className="text-[#8A7F75]">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
              Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-3">Urheberrecht</h2>
            <p className="text-[#8A7F75]">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen
              Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
