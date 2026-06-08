import { Flourish } from "./Ornaments";

export default function Story() {
  return (
    <section id="origen" className="section" style={{ background: "var(--cream)" }}>
      <div className="container">
        <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-start">
          <div className="md:col-span-5">
            <p className="eyebrow text-brick mb-6">Origen / Historia</p>
            <h2
              className="font-display text-oxblood"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)", lineHeight: 1 }}
            >
              Un legado femenino que se hereda
            </h2>
            <Flourish className="text-gold w-40 mt-8" />
          </div>

          <div className="md:col-span-7">
            <div
              className="space-y-6 text-ink-soft"
              style={{ fontSize: "1.2rem", lineHeight: 1.62 }}
            >
              <p>
                Dorita encuentra su origen en la abuela de su fundadora: una mujer
                que entendía el arreglo personal como una forma de{" "}
                <em className="text-oxblood">expresión cotidiana</em>.
              </p>
              <p>
                Esa referencia se vincula con los objetos y adornos como elementos
                de <strong className="font-medium text-ink">identidad, memoria y expresión personal</strong>.
                Accesorios, detalles y rituales son símbolos de un legado que se
                transmite entre generaciones, construyendo vínculos, relatos y
                formas de reconocerse a una misma.
              </p>
              <p>
                No son piezas armadas de fábrica. La combinación de cada una está
                pensada y elegida — una alternativa a las lógicas del consumo
                efímero, una invitación a conservar aquello que tiene significado.
              </p>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t pt-8" style={{ borderColor: "color-mix(in srgb, var(--ink) 14%, transparent)" }}>
              {[
                { k: "Memoria", v: "Herencia y permanencia" },
                { k: "Expresión", v: "Identidad y sensibilidad" },
                { k: "Afecto", v: "Lo que se transmite" },
              ].map((it) => (
                <div key={it.k}>
                  <dt className="font-display text-oxblood" style={{ fontSize: "1.5rem" }}>
                    {it.k}
                  </dt>
                  <dd className="font-sans-ui text-ink-soft mt-1" style={{ fontSize: "0.8rem", letterSpacing: "0.04em" }}>
                    {it.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
