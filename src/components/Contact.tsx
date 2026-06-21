import { Flourish } from "./Ornaments";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="section"
      style={{ background: "var(--oxblood-deep)", color: "var(--cream-soft)" }}
    >
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow mb-7" style={{ color: "var(--gold-soft)" }}>
            Contacto
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)", lineHeight: 0.98 }}>
            Pedidos y consultas
          </h2>
          <Flourish className="text-gold w-44 my-8" />
          <p
            className="max-w-xl"
            style={{ fontSize: "1.15rem", color: "color-mix(in srgb, var(--cream-soft) 82%, transparent)" }}
          >
            Para consultar por una pieza, encargar una combinación pensada o
            elegir un regalo. Respondemos con tiempo y atención al detalle.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={site.whatsapp.href} target="_blank" rel="noreferrer" className="btn btn-solid">
              WhatsApp · {site.whatsapp.display}
            </a>
            <a href={site.instagram.href} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ color: "var(--cream-soft)" }}>
              Instagram · {site.instagram.handle}
            </a>
          </div>
        </div>

        <div
          className="mx-auto mt-16 grid max-w-3xl gap-px sm:grid-cols-2"
          style={{ background: "color-mix(in srgb, var(--cream-soft) 16%, transparent)" }}
        >
          <div className="p-8 text-center" style={{ background: "var(--oxblood-deep)" }}>
            <span className="eyebrow block" style={{ color: "var(--gold-soft)" }}>
              Puntos de retiro
            </span>
            <ul className="mt-4 space-y-1">
              {site.pickup.map((p) => (
                <li key={p.place} className="font-display" style={{ fontSize: "1.4rem" }}>
                  {p.place}
                  <span className="font-sans-ui text-blush" style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {"  "}· {p.region}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 text-center" style={{ background: "var(--oxblood-deep)" }}>
            <span className="eyebrow block" style={{ color: "var(--gold-soft)" }}>
              Envíos
            </span>
            <p className="mt-4 font-display" style={{ fontSize: "1.4rem" }}>
              A todo el país
            </p>
            <p className="font-sans-ui text-blush mt-1" style={{ fontSize: "0.78rem", letterSpacing: "0.06em" }}>
              Coordinamos por WhatsApp
            </p>
          </div>
        </div>

        <p
          className="mt-12 text-center font-sans-ui"
          style={{ fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold-soft)" }}
        >
          Piezas únicas con piedras naturales · Hecho a mano
        </p>
      </div>
    </section>
  );
}
