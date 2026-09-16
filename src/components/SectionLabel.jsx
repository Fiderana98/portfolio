export default function SectionLabel({ index, label }) {
  return (
    <div className="col-span-12 md:col-span-2 font-mono text-[10px] uppercase tracking-[0.22em] text-dim pt-3">
      <div className="reveal">{index}</div>
      <div className="reveal" style={{ transitionDelay: "80ms" }}>
        {label}
      </div>
    </div>
  );
}
