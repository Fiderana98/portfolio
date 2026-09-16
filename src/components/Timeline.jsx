import { useReveal } from "../hooks/useReveal.js";
import SectionLabel from "./SectionLabel.jsx";
import { TIMELINE } from "../data.js";

export default function Timeline() {
  useReveal();
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
      <div className="grid grid-cols-12 gap-6">
        <SectionLabel index="/ 02" label="Parcours" />

        <div className="col-span-12 md:col-span-10">
          <div className="h-px rule-draw bg-rule" />
          <ol>
            {TIMELINE.map((t, i) => (
              <li
                key={i}
                className="reveal grid grid-cols-12 gap-4 py-6 border-b border-rule"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="col-span-12 sm:col-span-3 font-mono text-[11px] text-accent pt-1">
                  {t.period}
                </div>
                <div className="col-span-12 sm:col-span-9 text-[15px] leading-relaxed text-dim">
                  {t.text}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
