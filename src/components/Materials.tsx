import Image from "next/image";
import { ScallopEdge } from "./Ornaments";
import { piedrasPhoto } from "@/data/media";

export default function Materials() {
  return (
    <section
      id="piedras"
      className="relative"
      style={{ background: "var(--oxblood)", color: "var(--cream-soft)" }}
    >
      <div className="container section">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          {/* Imagen — primero en el DOM: encabeza el apilado en mobile y revela antes */}
          <figure className="rise md:col-span-6">
            <div className="img-frame" style={{ aspectRatio: "4 / 5.2" }}>
              <Image
                src={piedrasPhoto.img}
                alt={piedrasPhoto.alt}
                fill
                sizes="(max-width: 768px) 100vw, 46vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </figure>

          {/* Texto */}
          <div className="rise md:col-span-6" style={{ animationDelay: "0.12s" }}>
            <p className="eyebrow mb-6" style={{ color: "var(--gold-soft)" }}>
              Los materiales
            </p>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(2.6rem, 6.4vw, 5rem)", lineHeight: 0.98 }}
            >
              Las piedras
            </h2>

            <div
              className="mt-9 space-y-6"
              style={{
                maxWidth: "58ch",
                fontSize: "1.16rem",
                lineHeight: 1.62,
                color: "color-mix(in srgb, var(--cream-soft) 88%, transparent)",
              }}
            >
              <p>
                La piedra es lo primero, cada una con sus vetas, sus marcas, sus
                tonos. Su imperfección es exactamente lo que la hace irrepetible.
              </p>
              <p>
                Los dijes llevan un enchapado de varias capas en oro o plata, sin
                níquel — pensado para ir contra tu piel todos los días.
              </p>
              <p>
                Las cadenas son de acero: las plateadas no pierden color ni se
                oxidan; las doradas, con un baño que se cuida un poco más pero
                envejece con gracia. Algunas piezas no llevan cadena: van en
                cordón y mostacillas, porque cada combinación pide su propio
                soporte.
              </p>
              <p
                className="font-display italic"
                style={{ fontSize: "1.5rem", color: "var(--blush)" }}
              >
                Nada es descartable. Todo está elegido para que la pieza te
                acompañe.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ScallopEdge className="block w-full h-8" fill="var(--cream-deep)" />
    </section>
  );
}
