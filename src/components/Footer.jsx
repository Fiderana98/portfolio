import LocalClock from "./LocalClock.jsx";

export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 md:px-10 pb-12 pt-6">
      <div className="h-px bg-rule mb-6" />
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="font-mono text-[11px] text-dim">Fianarantsoa, Madagascar</span>
        <LocalClock />
      </div>
    </footer>
  );
}
