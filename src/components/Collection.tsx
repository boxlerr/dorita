"use client";

import { useState } from "react";
import { categories, pieces, type Category } from "@/data/pieces";

export default function Collection() {
  const [active, setActive] = useState<(typeof categories)[number]>("Todas");

  const shown =
    active === "Todas"
      ? pieces
      : pieces.filter((p) => p.category === (active as Category));

  return (
    <section id="coleccion" className="section" style={{ background: "var(--cream)" }}>
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow text-brick mb-6">Colección</p>
          <h2
            className="font-display text-oxblood"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)", lineHeight: 0.98 }}
          >
            Cada piedra, una historia
          </h2>
          <p className="mt-5 max-w-xl text-ink-soft" style={{ fontSize: "1.15rem" }}>
            Piezas únicas con piedras naturales. Una muestra de nuestro catálogo
            — escribinos para conocer disponibilidad y combinaciones.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => {
            const on = c === active;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className="font-sans-ui rounded-full px-5 py-2 transition-colors"
                style={{
                  fontSize: "0.74rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  border: "1px solid color-mix(in srgb, var(--oxblood) 45%, transparent)",
                  background: on ? "var(--oxblood)" : "transparent",
                  color: on ? "var(--cream-soft)" : "var(--oxblood)",
                }}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <article key={p.id} className="group flex flex-col">
              <div className="relative">
                <div className="stone-frame" style={{ background: p.gradient }} />
                <span
                  className="absolute -top-2 -right-1 font-sans-ui rounded-full px-3 py-1"
                  style={{
                    fontSize: "0.58rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    background: "var(--cream-soft)",
                    color: "var(--brick)",
                    border: "1px solid color-mix(in srgb, var(--gold) 55%, transparent)",
                  }}
                >
                  Pieza única
                </span>
              </div>

              <div className="mt-5 flex items-baseline justify-between gap-3">
                <h3 className="font-display text-ink" style={{ fontSize: "1.7rem", lineHeight: 1 }}>
                  {p.name}
                </h3>
                <span
                  className="font-sans-ui text-ink-soft"
                  style={{ fontSize: "0.66rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
                >
                  {p.category}
                </span>
              </div>
              <p className="font-sans-ui text-brick mt-1" style={{ fontSize: "0.78rem", letterSpacing: "0.04em" }}>
                {p.stone}
              </p>
              <p className="mt-3 text-ink-soft" style={{ fontSize: "1.02rem", lineHeight: 1.55 }}>
                {p.note}
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
