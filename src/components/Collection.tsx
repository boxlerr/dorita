import Image from "next/image";
import PiecesGallery from "./PiecesGallery";
import { categories } from "@/data/catalog";

export default function Collection() {
  return (
    <section id="piezas" className="section" style={{ background: "var(--cream-soft)", overflowX: "clip" }}>
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow text-brick mb-6">Las piezas</p>
          <h2
            className="font-display text-oxblood"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)", lineHeight: 0.98 }}
          >
            Cápsula flowers
          </h2>
          <p className="mt-5 max-w-xl text-ink-soft" style={{ fontSize: "1.15rem" }}>
            Piezas únicas con piedras naturales. Cada combinación está pensada y
            elegida a mano — ninguna es igual a otra.
          </p>
        </div>

        {/* Álbum: mosaico full-bleed de dos filas (formato "Be inspired"). Click → lightbox. */}
        <p
          className="font-sans-ui mt-9 text-center text-ink-soft"
          style={{ fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase" }}
        >
          · El álbum · arrastrá para recorrer · tocá una foto para verla en grande ·
        </p>
        <PiecesGallery />

        {/* Las cuatro categorías */}
        <div className="mt-24 flex flex-col items-center text-center">
          <p className="eyebrow text-brick mb-4">Las cuatro categorías</p>
          <p className="max-w-lg text-ink-soft" style={{ fontSize: "1.08rem" }}>
            Cada línea lleva nombre de mujer. De lo que se usa todos los días a lo
            que se guarda para los días que piden un poco más.
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <article key={c.name} className="group flex flex-col">
              <div className="img-frame" style={{ aspectRatio: "4 / 5" }}>
                <Image
                  src={c.photo.img}
                  alt={c.photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  placeholder="blur"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span
                  className="absolute left-3 top-3 font-sans-ui rounded-full px-3 py-1"
                  style={{
                    fontSize: "0.58rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    background: "color-mix(in srgb, var(--cream-soft) 88%, transparent)",
                    color: "var(--brick)",
                    border: "1px solid color-mix(in srgb, var(--gold) 55%, transparent)",
                  }}
                >
                  {c.line}
                </span>
              </div>

              <h3
                className="font-display text-ink mt-5"
                style={{ fontSize: "1.9rem", lineHeight: 1 }}
              >
                {c.name}
              </h3>
              <p className="mt-2 text-ink-soft" style={{ fontSize: "1.02rem", lineHeight: 1.5 }}>
                {c.blurb}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#contacto" className="btn btn-ghost">
            Consultar por una pieza
          </a>
        </div>
      </div>
    </section>
  );
}
