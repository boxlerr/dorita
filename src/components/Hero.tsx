import Image from "next/image";
import { Flourish } from "./Ornaments";
import { heroPhoto } from "@/data/media";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Editorial background photo */}
      <Image
        src={heroPhoto.img}
        alt={heroPhoto.alt}
        fill
        preload
        sizes="100vw"
        placeholder="blur"
        className="object-cover object-center"
      />
      {/* Warm veil for legibility — keeps the cream identity */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--cream) 70%, transparent) 0%, color-mix(in srgb, var(--cream) 48%, transparent) 38%, color-mix(in srgb, var(--cream) 72%, transparent) 100%)",
        }}
      />

      <div className="container relative">
        <div className="flex min-h-[90vh] flex-col items-center justify-center py-28 text-center">
          <p className="eyebrow text-brick mb-7">Accesorios con piedras naturales</p>

          <h1 className="text-oxblood" style={{ lineHeight: 0.9 }}>
            <span
              className="font-script block"
              style={{ fontSize: "clamp(4rem, 15vw, 12rem)", fontWeight: 400 }}
            >
              Dorita
            </span>
            <span
              className="font-sans-ui mt-3 block text-ink-soft"
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.55em",
                fontSize: "clamp(0.8rem, 2vw, 1.1rem)",
                fontWeight: 500,
              }}
            >
              Atelier
            </span>
          </h1>

          <Flourish className="text-gold w-44 my-9" />

          <p
            className="font-display italic max-w-2xl text-ink"
            style={{ fontSize: "clamp(1.25rem, 2.8vw, 1.9rem)", lineHeight: 1.4 }}
          >
            “La coquetería no como vanidad, sino como un pequeño acto diario de
            identidad.”
          </p>

          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <a href="#piezas" className="btn btn-solid">
              Ver las piezas
            </a>
            <a href="#historia" className="btn btn-ghost">
              La historia
            </a>
          </div>
        </div>
      </div>

      <div className="harlequin relative" />
    </section>
  );
}
