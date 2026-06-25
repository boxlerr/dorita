"use client";

/* ============================================================
   PickupMap — un único mapa Leaflet (OpenStreetMap, sin API key)
   con los dos puntos de retiro marcados (Colegiales y Chajarí).

   Diseño defensivo:
   - "use client" + import DINÁMICO de leaflet dentro de useEffect.
     Leaflet toca `window`/navigator al evaluarse el módulo, así que NO
     se importa a nivel de módulo (rompería el prerender SSR de Next).
     Los TIPOS se traen con `import type` (se borran en compilación).
   - Doble guarda contra React StrictMode (doble montaje en dev):
     mapRef existente + chequeo de container._leaflet_id. La función
     async se cancela con un flag si el componente se desmonta antes.
   - L.divIcon (markers HTML) → evita el 404 clásico de los íconos
     por defecto de Leaflet (no se cargan assets de imagen).
   - scrollWheelZoom desactivado → no secuestra el scroll de la página.
     Se mantienen botones de zoom + arrastre + teclado.
   - invalidateSize() tras montar (la sección es oscura y puede reflowear).
   - Fallback accesible visualmente-oculto: lista los dos puntos con sus
     enlaces a Google Maps para lectores de pantalla / sin-JS.

   El CSS de Leaflet (import "leaflet/dist/leaflet.css") es solo estilos
   (no toca window) → es seguro importarlo a nivel de módulo. En App Router
   se puede importar el stylesheet de un paquete externo desde un componente.
   ============================================================ */

import { useEffect, useId, useRef } from "react";
import type { Map as LeafletMap, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";

type Pickup = {
  place: string;
  region: string;
  lat: number;
  lon: number;
};

/* Puntos de retiro — ~500 km de distancia para que el encuadre muestre
   la región del Litoral argentino. */
const PICKUPS: readonly Pickup[] = [
  { place: "Colegiales", region: "CABA, Buenos Aires", lat: -34.5744, lon: -58.4493 },
  { place: "Chajarí", region: "Entre Ríos", lat: -30.7553, lon: -58.0148 },
] as const;

/** Enlace "Cómo llegar" → búsqueda en Google Maps por texto (sin API key). */
function directionsHref(p: Pickup): string {
  const q = encodeURIComponent(`${p.place}, ${p.region}, Argentina`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

/** Escapa texto antes de inyectarlo como HTML en el popup / divIcon. */
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default function PickupMap() {
  // Ref al div contenedor (el mapa lo rellena).
  const containerRef = useRef<HTMLDivElement | null>(null);
  // Ref a la instancia del mapa: sobrevive a re-renders y nos deja
  // detectar / limpiar el doble montaje de StrictMode.
  const mapRef = useRef<LeafletMap | null>(null);
  // id estable para enlazar el contenedor con el fallback oculto (aria).
  const labelId = useId();

  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      // Import dinámico → leaflet solo se evalúa en el cliente (nunca en SSR).
      const L = (await import("leaflet")).default;

      const container = containerRef.current;
      if (cancelled || !container) return;

      // --- Guarda anti doble-init (StrictMode en dev monta→desmonta→monta) ---
      if (mapRef.current) return;
      if ((container as HTMLElement & { _leaflet_id?: number })._leaflet_id != null) {
        return;
      }

      const map = L.map(container, {
        scrollWheelZoom: false, // no secuestrar el scroll de la página
        dragging: true,
        zoomControl: true,
        attributionControl: true,
        // arranque provisorio; fitBounds lo reencuadra enseguida
        center: [-32.6, -58.2],
        zoom: 6,
      });
      mapRef.current = map;

      // Tiles OpenStreetMap — gratis, sin API key. Atribución obligatoria (con enlace).
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      // Markers HTML con divIcon → sin assets de imagen → sin 404.
      const pinHtml =
        '<span class="pmap-pin" aria-hidden="true">' +
        '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M12 21.5c4-4.2 6.5-7.6 6.5-11A6.5 6.5 0 0 0 5.5 10.5c0 3.4 2.5 6.8 6.5 11z"/>' +
        '<circle cx="12" cy="10.3" r="2.4"/>' +
        "</svg></span>";

      const icon = L.divIcon({
        html: pinHtml,
        className: "pmap-divicon", // sin clase por defecto → sin fondo blanco
        iconSize: [28, 28],
        iconAnchor: [14, 26], // punta del pin sobre la coordenada
        popupAnchor: [0, -24],
      });

      const latlngs: LatLngTuple[] = [];

      for (const p of PICKUPS) {
        const ll: LatLngTuple = [p.lat, p.lon];
        latlngs.push(ll);

        const popupHtml =
          '<div class="pmap-popup">' +
          `<strong class="pmap-popup-place">${esc(p.place)}</strong>` +
          `<span class="pmap-popup-region">${esc(p.region)}</span>` +
          `<a class="pmap-popup-link" href="${directionsHref(p)}" target="_blank" rel="noreferrer">Cómo llegar &rarr;</a>` +
          "</div>";

        L.marker(ll, { icon, title: `${p.place} — ${p.region}`, keyboard: true })
          .addTo(map)
          .bindPopup(popupHtml, { closeButton: true, autoPan: true })
          .bindTooltip(`${p.place} · ${p.region}`, {
            direction: "top",
            offset: [0, -22],
          });
      }

      // Encuadre que muestra AMBOS puntos con margen.
      map.fitBounds(L.latLngBounds(latlngs), {
        padding: [48, 48],
        maxZoom: 7,
      });

      // La sección es oscura y puede reflowear (fuentes, layout): recalculamos
      // el tamaño tras pintar para que las tiles no queden grises/cortadas.
      const raf = requestAnimationFrame(() => {
        mapRef.current?.invalidateSize();
      });
      const t = setTimeout(() => {
        mapRef.current?.invalidateSize();
      }, 350);

      cleanup = () => {
        cancelAnimationFrame(raf);
        clearTimeout(t);
        map.remove();
        mapRef.current = null;
      };
    })();

    // Cleanup: cancela la inicialización async pendiente y destruye el mapa.
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <figure className="pmap-card">
      {/* Marco vintage: reutiliza .img-frame existente */}
      <div className="img-frame pmap-frame">
        <div
          ref={containerRef}
          className="pmap-canvas"
          role="application"
          aria-label="Mapa de los puntos de retiro: Colegiales (CABA) y Chajarí (Entre Ríos)"
          aria-describedby={labelId}
        />
      </div>

      {/* Fallback accesible / sin-JS: lista textual con enlaces a Google Maps.
          Visualmente oculto pero accesible para lectores de pantalla. */}
      <div id={labelId} className="pmap-sr-only">
        <p>Puntos de retiro de Dorita Atelier:</p>
        <ul>
          {PICKUPS.map((p) => (
            <li key={p.place}>
              {p.place} ({p.region}, Argentina).{" "}
              <a href={directionsHref(p)} target="_blank" rel="noreferrer">
                Cómo llegar a {p.place} en Google Maps
              </a>
              .
            </li>
          ))}
        </ul>
      </div>

      {/* Leyenda visible debajo del mapa, en clave editorial vintage. */}
      <figcaption className="pmap-cap font-sans-ui">
        {PICKUPS.map((p) => (
          <a
            key={p.place}
            href={directionsHref(p)}
            target="_blank"
            rel="noreferrer"
            className="pmap-cap-item"
          >
            <span className="font-display pmap-cap-place">{p.place}</span>
            <span className="pmap-cap-region">{p.region}</span>
          </a>
        ))}
      </figcaption>
    </figure>
  );
}
