import { ScallopEdge } from "./Ornaments";

const values = [
  {
    n: "01",
    title: "Autenticidad",
    body: "La expresión personal por encima de las tendencias. Piezas con una impronta genuina, que diferencian de las opciones masivas e impersonales.",
  },
  {
    n: "02",
    title: "Permanencia",
    body: "Valor por lo duradero, lo heredable y aquello que trasciende el consumo inmediato. Objetos pensados para acompañar a lo largo del tiempo.",
  },
  {
    n: "03",
    title: "Sensibilidad",
    body: "El valor emocional de los objetos, los vínculos y los detalles. Cercanía, calidez y delicadeza en cada gesto cotidiano.",
  },
];

export default function Values() {
  return (
    <section
      id="valores"
      className="relative"
      style={{ background: "var(--oxblood)", color: "var(--cream-soft)" }}
    >
      <div className="container section">
        <div className="max-w-2xl">
          <p className="eyebrow mb-6" style={{ color: "var(--gold-soft)" }}>
            Universo de marca
          </p>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.6rem)", lineHeight: 1 }}
          >
            Tres valores que sostienen cada pieza
          </h2>
        </div>

        <div className="mt-16 grid gap-px md:grid-cols-3" style={{ background: "color-mix(in srgb, var(--cream-soft) 18%, transparent)" }}>
          {values.map((v) => (
            <article
              key={v.n}
              className="p-8 md:p-10"
              style={{ background: "var(--oxblood)" }}
            >
              <span
                className="font-display block"
                style={{ fontSize: "2.4rem", color: "var(--gold-soft)", lineHeight: 1 }}
              >
                {v.n}
              </span>
              <h3
                className="font-display mt-4"
                style={{ fontSize: "2rem" }}
              >
                {v.title}
              </h3>
              <p
                className="mt-4"
                style={{
                  fontSize: "1.08rem",
                  lineHeight: 1.6,
                  color: "color-mix(in srgb, var(--cream-soft) 82%, transparent)",
                }}
              >
                {v.body}
              </p>
            </article>
          ))}
        </div>

        <p
          className="mt-14 font-display italic max-w-3xl"
          style={{ fontSize: "clamp(1.3rem, 3vw, 1.9rem)", lineHeight: 1.45, color: "var(--blush)" }}
        >
          Coqueta, independiente, creativa, sensible, genuina — con gusto por lo
          singular.
        </p>
      </div>

      <ScallopEdge className="block w-full h-8" fill="var(--cream)" />
    </section>
  );
}
