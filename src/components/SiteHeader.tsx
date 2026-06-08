"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#origen", label: "Origen" },
  { href: "#valores", label: "Valores" },
  { href: "#coleccion", label: "Colección" },
  { href: "#filosofia", label: "Filosofía" },
  { href: "#contacto", label: "Contacto" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 transition-colors duration-500"
      style={{
        backgroundColor: scrolled
          ? "color-mix(in srgb, var(--cream-soft) 88%, transparent)"
          : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled
          ? "1px solid color-mix(in srgb, var(--ink) 12%, transparent)"
          : "1px solid transparent",
      }}
    >
      <div className="container flex items-center justify-between py-4">
        <a
          href="#top"
          className="font-script leading-none text-oxblood"
          style={{ fontSize: "2.1rem" }}
        >
          Dorita
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans-ui text-ink transition-colors hover:text-oxblood"
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                fontSize: "0.72rem",
                fontWeight: 500,
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="btn btn-ghost hidden md:inline-flex">
          Escribinos
        </a>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span
            className="block h-[1.5px] w-6 bg-ink transition-transform"
            style={open ? { transform: "translateY(6.5px) rotate(45deg)" } : undefined}
          />
          <span
            className="block h-[1.5px] w-6 bg-ink transition-opacity"
            style={open ? { opacity: 0 } : undefined}
          />
          <span
            className="block h-[1.5px] w-6 bg-ink transition-transform"
            style={open ? { transform: "translateY(-6.5px) rotate(-45deg)" } : undefined}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className="md:hidden fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          background: "var(--cream)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-oxblood"
              style={{ fontSize: "2.4rem", lineHeight: 1 }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="btn btn-solid mt-4"
          >
            Escribinos
          </a>
        </nav>
      </div>
    </header>
  );
}
