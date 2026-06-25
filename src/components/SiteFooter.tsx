import Image from "next/image";
import { nav, site } from "@/data/site";
import vaxlerLogo from "../photos/vaxler-logo.png";

export default function SiteFooter() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--cream)" }}>
      <div className="harlequin" style={{ opacity: 0.25 }} />
      <div className="container py-14">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <a href="#top" className="font-script text-cream" style={{ fontSize: "2.6rem", lineHeight: 1 }}>
              Dorita
            </a>
            <p
              className="font-sans-ui mt-1"
              style={{ fontSize: "0.66rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "color-mix(in srgb, var(--cream) 60%, transparent)" }}
            >
              Atelier
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {nav.map((l) => (
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

        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between">
          <p
            className="font-sans-ui"
            style={{ fontSize: "0.72rem", letterSpacing: "0.06em", color: "color-mix(in srgb, var(--cream) 65%, transparent)" }}
          >
            © {new Date().getFullYear()} Dorita Atelier · Accesorios con piedras naturales
          </p>
          <div className="flex items-center gap-6">
            <a
              href={site.instagram.href}
              target="_blank"
              rel="noreferrer"
              className="font-sans-ui transition-opacity hover:opacity-60"
              style={{ fontSize: "0.72rem", letterSpacing: "0.1em", color: "color-mix(in srgb, var(--cream) 75%, transparent)" }}
            >
              {site.instagram.handle}
            </a>
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className="font-sans-ui transition-opacity hover:opacity-60"
              style={{ fontSize: "0.72rem", letterSpacing: "0.1em", color: "color-mix(in srgb, var(--cream) 75%, transparent)" }}
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Crédito Vaxler — isotipo que se prende en blanco al pasar el mouse */}
        <div className="vaxler-credit">
          <a
            href="https://www.vaxler.com.ar"
            target="_blank"
            rel="noreferrer"
            className="vaxler-link"
            aria-label="Sitio creado por Vaxler — vaxler.com.ar"
          >
            <span className="vaxler-by font-sans-ui">Sitio por</span>
            <Image
              src={vaxlerLogo}
              alt="Vaxler"
              width={26}
              height={28}
              className="vaxler-logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
