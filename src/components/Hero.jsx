import Split from "./Split.jsx";

export default function Hero() {
  return (
    <section
      id="top"
      className="max-w-5xl mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-20 md:pb-28"
    >
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2 font-mono text-[10px] uppercase tracking-[0.22em] text-dim pt-3">
          <div className="reveal">Portfolio</div>
          <div className="reveal" style={{ transitionDelay: "80ms" }}>
            2025 — 2026
          </div>

          <div className="reveal mt-6" style={{ transitionDelay: "160ms" }}>
            <img
              src="/portrait.jpg"
              alt="Portrait de Rasolonjatovo Tolotsoa Fiderana"
              width="1000"
              height="1000"
              className="w-full aspect-square object-cover contrast-[1.05]"
              style={{ border: "1px solid var(--rule)" }}
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-10">
          <h1 className="font-serif text-[2.2rem] sm:text-[2.9rem] md:text-[3.6rem] leading-[1.06] tracking-[-0.025em] max-w-3xl">
            <Split text="Étudiant en génie logiciel," />
            <br />
            <span className="italic text-accent">
              <Split text="à Fianarantsoa." delay={480} step={30} />
            </span>
          </h1>

          <div className="mt-10 md:mt-14 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <div className="h-px rule-draw bg-rule mb-6" />
              <p
                className="reveal text-[15px] leading-relaxed text-dim max-w-xl"
                style={{ transitionDelay: "120ms" }}
              >
                Troisième année de Licence Génie Logiciel et Bases de Données à l'École
                Nationale d'Informatique. Je veux intégrer une équipe pour améliorer mes
                compétences et créer des solutions à des problèmes concrets. Je cherche un
                stage pour continuer sur cette lancée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}