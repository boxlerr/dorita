"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { collagePhotos } from "@/data/media";

/**
 * Álbum "Cápsula flowers": polaroids sobre lino, con tilts leves, cinta de
 * masking tape en algunas, y un lightbox para abrir cada una.
 *
 * El layout es masonry denso (CSS columns) — sin huecos. Lo "raro" lo dan
 * los tilts individuales, la cinta, los desplazamientos verticales y un par
 * de polaroides destacadas que rompen el ritmo.
 */
type Meta = {
  tilt: number;                       // degrees
  tape?: "tl" | "tr" | "center";      // posición de la cinta (si la lleva)
  feature?: boolean;                  // polaroide destacada (más grande)
  nudgeY?: number;                    // desplazamiento vertical en px
};

const META: Meta[] = [
  { tilt: -3.2, tape: "tl",     nudgeY: 0 },
  { tilt:  2.6,                 nudgeY: 14 },
  { tilt: -1.4, tape: "center", feature: true,  nudgeY: 8 },
  { tilt:  4.1,                 nudgeY: -6 },
  { tilt: -2.8, tape: "tr",     nudgeY: 18 },
  { tilt:  3.3,                 nudgeY: 4 },
  { tilt: -4.0,                 nudgeY: 10 },
  { tilt:  1.6, tape: "tl",     nudgeY: -4 },
  { tilt: -2.2,                 nudgeY: 12, feature: true },
  { tilt:  3.0, tape: "tr",     nudgeY: 0 },
];

export default function PiecesGallery() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(
    () => setOpen((i) => (i === null ? null : (i + 1) % collagePhotos.length)),
    [],
  );
  const prev = useCallback(
    () =>
      setOpen((i) =>
        i === null ? null : (i - 1 + collagePhotos.length) % collagePhotos.length,
      ),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, next, prev]);

  return (
    <>
      {/* Desktop/tablet: masonry denso de polaroides. Mobile: carrusel con snap. */}
      <div className="album-stage mt-14">
        {collagePhotos.map((p, i) => {
          const m = META[i] ?? META[0];
          return (
            <button
              key={i}
              type="button"
              onClick={() => setOpen(i)}
              className={`polaroid${m.feature ? " polaroid-feature" : ""}`}
              style={{
                ["--tilt" as string]: `${m.tilt}deg`,
                ["--nudge-y" as string]: `${m.nudgeY ?? 0}px`,
              }}
              aria-label={`Abrir foto ${i + 1}: ${p.caption ?? p.alt}`}
            >
              {m.tape && <span className={`tape tape-${m.tape}`} aria-hidden />}
              <span className="polaroid-photo">
                <Image
                  src={p.img}
                  alt={p.alt}
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 28vw"
                  placeholder="blur"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="polaroid-meta">
                <span className="polaroid-num">· {String(i + 1).padStart(2, "0")} ·</span>
                <span className="polaroid-cap">{p.caption ?? ""}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
          onClick={close}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={close}
            aria-label="Cerrar"
          >
            ×
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Siguiente"
          >
            ›
          </button>

          <figure
            className="lightbox-figure"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-img">
              <Image
                src={collagePhotos[open].img}
                alt={collagePhotos[open].alt}
                sizes="(max-width: 1024px) 90vw, 70vw"
                placeholder="blur"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="lightbox-cap">
              <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>
                · {String(open + 1).padStart(2, "0")} / {String(collagePhotos.length).padStart(2, "0")} ·
              </span>
              <span className="font-display italic">{collagePhotos[open].caption}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
