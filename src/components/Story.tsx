import Image from "next/image";
import { Flourish } from "./Ornaments";
import { storyPhoto } from "@/data/media";

export default function Story() {
  return (
    <section id="historia" className="section" style={{ background: "var(--cream)" }}>
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          {/* Texto protagonista */}
          <div className="md:col-span-7">
            <p className="eyebrow text-brick mb-6">La historia</p>
            <h2
              className="font-display text-oxblood"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.4rem)", lineHeight: 1 }}
            >
              Un legado que se hereda
            </h2>
            <Flourish className="text-gold w-40 mt-7 mb-9" />

            <div
              className="space-y-6 text-ink-soft"
              style={{ fontSize: "1.2rem", lineHeight: 1.62 }}
            >
              <p>
                Antes de las ciudades, antes de la escritura, alguien eligió
                ponerse algo encima que no servía para abrigarse ni para comer.
                Ese fue el primer acto de identidad.
              </p>
              <p>
                Durante siglos, las joyas fueron algo que otros ponían sobre la
                mujer — dote, símbolo, posesión. Hasta que algo se dio vuelta: la
                mujer empezó a elegirlas para sí misma, por el placer de
                arreglarse, sin esperar una ocasión.
              </p>
              <p>
                Dorita nace de eso. Y de la belleza que no busca ser perfecta: la{" "}
                <em className="text-oxblood">piedra natural</em>, con sus vetas,
                sus marcas, su forma irrepetible, que se vuelve parte de vos.
              </p>
              <p className="font-display italic text-ink" style={{ fontSize: "1.45rem" }}>
                Cada pieza tiene su propia historia.
              </p>
            </div>
          </div>

          {/* Imagen al costado */}
          <figure className="md:col-span-5">
            <div className="img-frame" style={{ aspectRatio: "4 / 5" }}>
              <Image
                src={storyPhoto.img}
                alt={storyPhoto.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
