import { Flourish } from "./Ornaments";

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
          <h2
            className="font-display"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5.2rem)", lineHeight: 0.98 }}
          >
            Escribinos
          </h2>
          <Flourish className="text-gold w-44 my-8" />
          <p
            className="max-w-xl"
            style={{ fontSize: "1.15rem", color: "color-mix(in srgb, var(--cream-soft) 82%, transparent)" }}
          >
            Para consultar por una pieza, encargar una combinación pensada o
            elegir un regalo significativo. Respondemos con tiempo y atención al
            detalle.
          </p>
        </div>

        <div
          className="mt-16 grid gap-px sm:grid-cols-3 max-w-4xl mx-auto"
          style={{ background: "color-mix(in srgb, var(--cream-soft) 16%, transparent)" }}
        >
          {[
            {
              label: "Consultas",
              value: "hola@dorita.com",
              href: "mailto:hola@dorita.com?subject=Consulta%20Dorita",
            },
            {
              label: "Instagram",
              value: "@dorita.accesorios",
              href: "https://instagram.com",
            },
            {
              label: "WhatsApp",
              value: "+54 9 11 0000 0000",
              href: "https://wa.me/5491100000000",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="group block p-8 text-center transition-colors"
              style={{ background: "var(--oxblood-deep)" }}
            >
              <span
                className="eyebrow block"
                style={{ color: "var(--gold-soft)" }}
              >
                {c.label}
              </span>
              <span
                className="font-display mt-3 block transition-colors group-hover:text-blush"
                style={{ fontSize: "1.5rem" }}
              >
                {c.value}
              </span>
            </a>
          ))}
        </div>

        <p
          className="mt-12 text-center font-sans-ui"
          style={{ fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold-soft)" }}
        >
          Hecho con intención · Piezas únicas con piedras naturales
        </p>
      </div>
    </section>
  );
}
