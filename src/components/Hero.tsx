import { Seal, Flourish } from "./Ornaments";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft backdrop glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 0%, color-mix(in srgb, var(--blush) 55%, transparent) 0%, transparent 60%)",
        }}
      />

      <div className="container relative pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="flex flex-col items-center text-center rise">
          <p className="eyebrow text-brick mb-7">
            Accesorios con piedras naturales
          </p>

          <h1
            className="font-display text-oxblood"
            style={{
              fontSize: "clamp(3.4rem, 13vw, 11rem)",
              lineHeight: 0.92,
              fontWeight: 500,
            }}
          >
            <span className="font-script block" style={{ fontWeight: 400 }}>
              Dorita
            </span>
          </h1>

          <Flourish className="text-gold w-44 my-7" />

          <p
            className="max-w-2xl text-ink-soft"
            style={{ fontSize: "clamp(1.15rem, 2.4vw, 1.5rem)", lineHeight: 1.5 }}
          >
            Piezas atemporales donde{" "}
            <em className="text-oxblood not-italic" style={{ fontStyle: "italic" }}>
              ninguna es igual a otra
            </em>
            . Pensadas para el ritual cotidiano de arreglarse — cada combinación,
            elegida con intención.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#coleccion" className="btn btn-solid">
              Ver la colección
            </a>
            <a href="#origen" className="btn btn-ghost">
              Conocer la historia
            </a>
          </div>
        </div>

        {/* Seal + figures row */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 items-center gap-10">
          <figure className="hidden md:block">
            <div
              className="rounded-[40%_42%_46%_44%] aspect-[4/5]"
              style={{
                background:
                  "radial-gradient(120% 120% at 35% 25%, #e89b6f 0%, #b8492f 50%, #7a2417 100%)",
                border: "1px solid color-mix(in srgb, var(--gold) 55%, transparent)",
                boxShadow:
                  "inset 0 0 0 7px color-mix(in srgb, var(--cream-soft) 70%, transparent)",
              }}
            />
          </figure>

          <div className="flex flex-col items-center text-center gap-5">
            <Seal className="w-28 h-28 text-oxblood" />
            <p
              className="font-display italic text-ink-soft max-w-xs"
              style={{ fontSize: "1.15rem" }}
            >
              “Un pequeño acto diario de identidad que se transmite entre
              mujeres.”
            </p>
          </div>

          <figure className="hidden md:block">
            <div
              className="rounded-[44%_46%_42%_40%] aspect-[4/5]"
              style={{
                background:
                  "radial-gradient(120% 120% at 35% 25%, #dcebcf 0%, #88a36b 50%, #4c5d36 100%)",
                border: "1px solid color-mix(in srgb, var(--gold) 55%, transparent)",
                boxShadow:
                  "inset 0 0 0 7px color-mix(in srgb, var(--cream-soft) 70%, transparent)",
              }}
            />
          </figure>
        </div>
      </div>

      <div className="harlequin" />
    </section>
  );
}
