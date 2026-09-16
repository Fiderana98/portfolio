export default function Split({ text, delay = 0, step = 22, className = "" }) {
  return (
    <span className={"split " + className} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span key={i} style={{ animationDelay: `${delay + i * step}ms` }}>
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}
