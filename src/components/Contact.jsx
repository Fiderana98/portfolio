import { useReveal } from "../hooks/useReveal.js";
import SectionLabel from "./SectionLabel.jsx";
import Split from "./Split.jsx";

export default function Contact() {
  useReveal();
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-28">
      <div className="grid grid-cols-12 gap-6">
        <SectionLabel index="/ 03" label="Contact" />

        <div className="col-span-12 md:col-span-10">
          <div className="h-px rule-draw bg-rule" />
          <h2 className="reveal font-serif text-[2.4rem] md:text-[3.6rem] leading-[1.02] tracking-[-0.025em] mt-10">
            <Split text="Discutons." />
          </h2>
          <p
            className="reveal mt-6 text-[15px] leading-relaxed text-dim max-w-md"
            style={{ transitionDelay: "180ms" }}
          >
            Ouvert aux opportunités de stage en développement logiciel.
          </p>

          <div
            className="reveal mt-12 grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-8"
            style={{ transitionDelay: "260ms" }}
          >
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim mb-2">
                Email
              </div>
              <a href="mailto:rasolonjatovofiderana@gmail.com" className="lnk text-[15px] break-all">
                rasolonjatovofiderana@gmail.com
              </a>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim mb-2">
                Téléphone
              </div>
              <a href="tel:0345728534" className="lnk text-[15px]">
                034 57 285 34
              </a>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim mb-2">
                GitHub
              </div>
              <a
                href="https://github.com/Fiderana98"
                target="_blank"
                rel="noopener noreferrer"
                className="lnk text-[15px]"
              >
                Fiderana98 ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
