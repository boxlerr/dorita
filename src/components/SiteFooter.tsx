export default function SiteFooter() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--cream)" }}>
      <div className="harlequin" style={{ opacity: 0.25 }} />
      <div className="container py-14">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <a
            href="#top"
            className="font-script text-cream"
            style={{ fontSize: "2.6rem", lineHeight: 1 }}
          >
            Dorita
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {[
              { href: "#origen", label: "Origen" },
              { href: "#valores", label: "Valores" },
              { href: "#coleccion", label: "Colección" },
              { href: "#filosofia", label: "Filosofía" },
              { href: "#contacto", label: "Contacto" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans-ui transition-opacity hover:opacity-60"
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "color-mix(in srgb, var(--cream) 80%, transparent)",
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <hr className="my-10" style={{ border: 0, borderTop: "1px solid color-mix(in srgb, var(--cream) 18%, transparent)" }} />

        <div className="flex flex-col items-center gap-2 text-center md:flex-row md:justify-between">
          <p
            className="font-sans-ui"
            style={{ fontSize: "0.72rem", letterSpacing: "0.06em", color: "color-mix(in srgb, var(--cream) 65%, transparent)" }}
          >
            © {new Date().getFullYear()} Dorita · Accesorios atemporales con piedras naturales
          </p>
          <p
            className="font-sans-ui"
            style={{ fontSize: "0.72rem", letterSpacing: "0.06em", color: "color-mix(in srgb, var(--cream) 65%, transparent)" }}
          >
            Expresión femenina auténtica
          </p>
        </div>
      </div>
    </footer>
  );
}
