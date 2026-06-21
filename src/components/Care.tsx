import { Seal } from "./Ornaments";

const cards = [
  {
    title: "Las doradas",
    body: "Son las más coquetas: no les gusta el agua ni los químicos. Si se mojan, secálas enseguida. Cuando no las uses, guardalas en su packaging — está pensado para eso.",
  },
  {
    title: "Las plateadas",
    body: "Son más nobles: con el paño que viene con tu pieza, después de cada uso, quedan como nuevas.",
  },
  {
    title: "Las piedras",
    body: "Van aparte: nada de cepillos, nada de frotar. Se limpian con cariño o no se limpian.",
  },
];

export default function Care() {
  return (
    <section
      id="cuidados"
      className="section relative overflow-hidden"
      style={{ background: "var(--cream-deep)" }}
    >
      <div aria-hidden className="absolute inset-x-0 top-0 harlequin" style={{ opacity: 0.16 }} />

      <div className="container relative">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow text-brick mb-6">El cuidado</p>
          <h2
            className="font-display text-oxblood"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.4rem)", lineHeight: 1 }}
          >
            Cómo cuidar tu pieza
          </h2>
          <p
            className="mt-7 max-w-2xl font-display italic text-ink"
            style={{ fontSize: "clamp(1.2rem, 2.6vw, 1.7rem)", lineHeight: 1.45 }}
          >
            Perfume, crema, maquillaje — primero. La pieza, siempre después. Es el
            gesto más simple y el que más las protege.
          </p>
        </div>

        <div
          className="mx-auto mt-14 grid max-w-5xl gap-px sm:grid-cols-3"
          style={{ background: "color-mix(in srgb, var(--ink) 12%, transparent)" }}
        >
          {cards.map((c) => (
            <article key={c.title} className="p-8" style={{ background: "var(--cream-deep)" }}>
              <h3 className="font-display text-oxblood" style={{ fontSize: "1.6rem" }}>
                {c.title}
              </h3>
              <p className="mt-3 text-ink-soft" style={{ fontSize: "1.04rem", lineHeight: 1.58 }}>
                {c.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center text-center">
          <Seal className="w-20 h-20 text-brick" />
          <p className="mt-7 max-w-2xl text-ink-soft" style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
            Y si alguna pieza necesita un poco más, alcanza con detergente suave y
            agua corriente. El secador de pelo a distancia le devuelve el brillo.
          </p>
        </div>
      </div>
    </section>
  );
}
