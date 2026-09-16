import { useReveal } from "../hooks/useReveal.js";
import SectionLabel from "./SectionLabel.jsx";
import { REPOS, ACADEMIC } from "../data.js";

export default function Projects() {
  useReveal();
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
      <div className="grid grid-cols-12 gap-6">
        <SectionLabel index="/ 01" label="Projets" />

        <div className="col-span-12 md:col-span-10">
          <div className="h-px rule-draw bg-rule" />
          {REPOS.map((r, i) => (
            <article
              key={r.title}
              className="proj reveal grid grid-cols-12 gap-4 py-8 md:py-10 border-b border-rule"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="col-span-2 md:col-span-1 font-mono text-xs text-dim proj-num pt-1">
                {r.n}
              </div>
              <div className="col-span-10 md:col-span-7">
                <h3 className="font-serif text-2xl md:text-[1.7rem] leading-tight tracking-[-0.01em]">
                  {r.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-dim max-w-lg">{r.desc}</p>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-dim">
                  {r.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 md:text-right flex md:flex-col items-start md:items-end justify-between md:justify-start gap-3 pt-4 md:pt-1">
                <span className="font-mono text-[11px] text-dim">{r.year}</span>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lnk font-mono text-[11px] uppercase tracking-[0.18em]"
                >
                  Code ↗
                </a>
              </div>
            </article>
          ))}

          <div className="reveal mt-14">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim mb-5">
              Projets académiques
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
              {ACADEMIC.map((p, i) => (
                <li
                  key={p.name}
                  className="reveal flex items-baseline justify-between gap-4 py-2 border-b border-rule"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="text-[15px]">{p.name}</span>
                  <span className="font-mono text-[11px] text-dim">{p.lang}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
