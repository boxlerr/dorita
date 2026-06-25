"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { collagePhotos } from "@/data/media";
import { CATALOG_URL } from "@/data/site";

/**
 * Álbum "Cápsula flowers" — mosaico editorial DRAGGABLE (formato "Be inspired"),
 * fiel a la referencia.
 *
 * Dos FILAS de rectángulos limpios con tamaños irregulares:
 *   · La fila SUPERIOR se alinea ABAJO (sobre la línea media) → las piezas más
 *     bajas dejan aire arriba.
 *   · La fila INFERIOR se alinea ARRIBA (cuelga de la línea media).
 *   · En cada fila hay una pieza "hero" más grande (alta y ancha), igual que en
 *     la referencia: arriba la 2ª pieza, abajo la 3ª.
 * Como los anchos difieren entre filas, las columnas quedan "corridas" → el
 * collage masónico de la referencia. Ocupa TODO el ancho (full-bleed) y se
 * ARRASTRA en horizontal; un umbral de movimiento distingue "click" de "drag".
 *
 * El lightbox (Esc / ← / →) se conserva tal cual.
 */

/* Cada tile: índice de collagePhotos + ancho/alto base (px), escalados por --u.
   Los anchos de TOP y BOTTOM suman ~lo mismo para que ambas filas corran juntas. */
type Tile = { i: number; w: number; h: number };

const TOP: Tile[] = [
  { i: 0, w: 290, h: 225 },
  { i: 1, w: 415, h: 300 }, // hero
  { i: 2, w: 340, h: 245 },
  { i: 3, w: 265, h: 205 },
  { i: 4, w: 330, h: 255 },
];
const BOTTOM: Tile[] = [
  { i: 5, w: 260, h: 215 },
  { i: 6, w: 345, h: 255 },
  { i: 7, w: 415, h: 300 }, // hero
  { i: 8, w: 320, h: 225 },
  { i: 9, w: 305, h: 235 },
];

const catalogComingSoon = CATALOG_URL === "#";

export default function PiecesGallery() {
  const [open, setOpen] = useState<number | null>(null);

  // ---- Lightbox (idéntico al original) ----
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

  // ---- Drag-to-pan ----
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [hintVisible, setHintVisible] = useState(true);

  // Estado del gesto guardado en un ref para no re-renderizar mientras se arrastra.
  const drag = useRef({
    active: false, // hay un puntero presionado dentro del carril
    moved: false, // superó el umbral → es un arrastre, no un click
    startX: 0,
    startScroll: 0,
    pointerId: -1,
  });

  const DRAG_THRESHOLD = 6; // px

  const dismissHint = useCallback(() => setHintVisible(false), []);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    // Solo arrastre con puntero "directo" (mouse/touch/pen). Ignorar si abrió el menú contextual.
    if (e.button !== 0 && e.pointerType === "mouse") return;
    const track = trackRef.current;
    if (!track) return;
    drag.current = {
      active: true,
      moved: false,
      startX: e.clientX,
      startScroll: track.scrollLeft,
      pointerId: e.pointerId,
    };
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const d = drag.current;
      if (!d.active) return;
      const track = trackRef.current;
      if (!track) return;
      const dx = e.clientX - d.startX;
      if (!d.moved && Math.abs(dx) > DRAG_THRESHOLD) {
        d.moved = true;
        dismissHint();
        // Capturar el puntero recién cuando confirmamos arrastre, para que un
        // simple tap siga llegando al botón (y abra el lightbox).
        try {
          track.setPointerCapture(d.pointerId);
        } catch {
          /* algunos navegadores pueden rechazarlo; no es crítico */
        }
      }
      if (d.moved) {
        track.scrollLeft = d.startScroll - dx;
      }
    },
    [dismissHint],
  );

  const endDrag = useCallback(() => {
    const d = drag.current;
    const track = trackRef.current;
    if (track && d.pointerId !== -1) {
      try {
        track.releasePointerCapture(d.pointerId);
      } catch {
        /* noop */
      }
    }
    d.active = false;
    d.pointerId = -1;
    // "moved" se reinicia en el próximo pointerdown; el onClick lo lee antes.
  }, []);

  // Click en una foto: abre el lightbox solo si NO fue un arrastre.
  const onPhotoClick = useCallback((i: number) => {
    if (drag.current.moved) return; // fue un drag → no abrir
    setOpen(i);
  }, []);

  // Teclado: flechas mueven el carril; el hint se va al primer uso.
  const onTrackKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const track = trackRef.current;
      if (!track) return;
      if (e.key === "ArrowRight") {
        track.scrollBy({ left: 300, behavior: "smooth" });
        dismissHint();
      } else if (e.key === "ArrowLeft") {
        track.scrollBy({ left: -300, behavior: "smooth" });
        dismissHint();
      }
    },
    [dismissHint],
  );

  // Renderiza una foto como tile del mosaico (ancho/alto base escalados por --u).
  const renderTile = (t: Tile) => {
    const p = collagePhotos[t.i];
    return (
      <button
        key={t.i}
        type="button"
        onClick={() => onPhotoClick(t.i)}
        className="mosaic-tile"
        style={{ ["--w" as string]: t.w, ["--h" as string]: t.h }}
        aria-label={`Abrir foto ${t.i + 1}: ${p.caption ?? p.alt}`}
      >
        <Image
          src={p.img}
          alt={p.alt}
          fill
          sizes="(max-width: 640px) 45vw, 360px"
          placeholder="blur"
          className="object-cover"
        />
      </button>
    );
  };

  return (
    <>
      {/* Mosaico arrastrable full-bleed (formato "Be inspired"). */}
      <div className="mosaic-wrap mt-10">
        <div
          ref={trackRef}
          className={`mosaic-track${hintVisible ? "" : " is-touched"}`}
          role="group"
          aria-roledescription="carrusel"
          aria-label="Álbum de piezas — arrastrá para recorrer las fotos"
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
          onScroll={hintVisible ? dismissHint : undefined}
          onKeyDown={onTrackKeyDown}
        >
          {/* Dos filas apiladas que corren juntas al arrastrar. */}
          <div className="mosaic-rows">
            <div className="mosaic-row mosaic-row-top">{TOP.map(renderTile)}</div>
            <div className="mosaic-row mosaic-row-bottom">{BOTTOM.map(renderTile)}</div>
          </div>
        </div>

        {/* Pista circular "Arrastrá" — fija sobre el wrap, se desvanece al usar. */}
        <span className="mosaic-hint" aria-hidden={!hintVisible} data-shown={hintVisible}>
          Arrastrá
        </span>
      </div>

      {/* CTA: catálogo completo (próximamente). */}
      <div className="collage-cta">
        {catalogComingSoon ? (
          <button
            type="button"
            className="btn btn-solid collage-catalog"
            aria-disabled="true"
            title="El catálogo completo estará disponible muy pronto"
            onClick={(e) => e.preventDefault()}
          >
            Ver catálogo completo
            <span className="collage-catalog-soon">· próximamente</span>
          </button>
        ) : (
          <a href={CATALOG_URL} target="_blank" rel="noreferrer" className="btn btn-solid collage-catalog">
            Ver catálogo completo
          </a>
        )}
      </div>

      {/* Lightbox — sin cambios. */}
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
