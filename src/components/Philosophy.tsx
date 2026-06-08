import { Seal } from "./Ornaments";

export default function Philosophy() {
  return (
    <section
      id="filosofia"
      className="section relative overflow-hidden"
      style={{ background: "var(--cream-deep)" }}
    >
      {/* harlequin corner accents */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 harlequin"
        style={{ opacity: 0.18 }}
      />
      <div className="container relative">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow text-brick mb-8">Filosofía</p>

          <blockquote
            className="font-display text-oxblood max-w-4xl"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)", lineHeight: 1.08, fontWeight: 400 }}
          >
            “La coquetería no como vanidad, sino como un{" "}
            <em>pequeño acto diario de identidad</em> que se transmite entre
            mujeres.”
          </blockquote>

          <Seal className="w-24 h-24 text-brick mt-12" />

          <p className="mt-10 max-w-2xl text-ink-soft" style={{ fontSize: "1.18rem", lineHeight: 1.6 }}>
            Dorita no vende accesorios: ofrece una{" "}
            <strong className="font-medium text-ink">herramienta de expresión personal</strong>.
            Cada pieza busca acompañar historias, celebrar la individualidad y
            transformar gestos cotidianos en experiencias con intención.
          </p>
        </div>
      </div>
    </section>
  );
}
