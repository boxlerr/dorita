"use client";

import { useState, type FormEvent } from "react";
import { Flourish } from "./Ornaments";
import PickupMap from "./PickupMap";
import { site } from "@/data/site";

/* ============================================================
   Iconografía — line-icons inline, currentColor, ~1.2 stroke.
   Sin librerías. Hereda el color del contexto (botón / enlace).
   ============================================================ */
type IconProps = { className?: string };

function IconWhatsApp({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 20.5l1.3-4.5a8 8 0 1 1 3.2 3.2L3.5 20.5z" />
      <path d="M8.5 8.6c-.2 0-.5 0-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.4-.3-.2-1.5-.8-1.8-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.1-.3.2-.5.1-.3-.1-1.1-.4-2-1.3-.8-.7-1.3-1.5-1.4-1.8-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.3 0-.5 0-.1-.6-1.4-.8-2-.2-.4-.4-.4-.6-.4z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconInstagram({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconMail({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M4 7.5l7.3 5.1a1.2 1.2 0 0 0 1.4 0L20 7.5" />
    </svg>
  );
}

function IconSend({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 3L10.5 13.5" />
      <path d="M21 3l-6.8 18-3.7-7.5L3 9.8 21 3z" />
    </svg>
  );
}

/* Número de WhatsApp derivado del href de marca (única fuente de verdad). */
const WA_NUMBER = site.whatsapp.href.match(/wa\.me\/(\d+)/)?.[1] ?? "";

export default function Contact() {
  const [nombre, setNombre] = useState("");
  const [contacto, setContacto] = useState("");
  const [pieza, setPieza] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nombreOk = nombre.trim();
    const mensajeOk = mensaje.trim();

    if (!nombreOk || !mensajeOk) {
      setError("Contanos al menos tu nombre y tu mensaje.");
      return;
    }
    setError(null);

    const lineas = [
      `Hola Dorita, soy ${nombreOk}.`,
      pieza.trim() ? `Me interesa: ${pieza.trim()}.` : "",
      "",
      mensajeOk,
      contacto.trim() ? `\nMe podés escribir a: ${contacto.trim()}` : "",
    ]
      .filter((l) => l !== "")
      .join("\n");

    const text = encodeURIComponent(lineas);
    const url = WA_NUMBER
      ? `https://wa.me/${WA_NUMBER}?text=${text}`
      : `${site.whatsapp.href}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

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

          {/* WHATSAPP DESTACADO — número grande, clickeable, abre WhatsApp */}
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            className="wa-feature mt-10"
            aria-label={`Escribinos por WhatsApp al ${site.whatsapp.display}`}
          >
            <span className="eyebrow wa-feature-eyebrow">
              <IconWhatsApp className="wa-feature-eyebrow-ico" />
              Escribinos por WhatsApp
            </span>
            <span className="wa-feature-number font-display">
              {site.whatsapp.display}
            </span>
          </a>

          {/* SOCIAL — botones con line-icons */}
          <div className="social-row mt-10">
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className="btn btn-solid social-btn"
            >
              <IconWhatsApp className="social-ico" />
              <span>WhatsApp</span>
            </a>
            <a
              href={site.instagram.href}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost social-btn"
              style={{ color: "var(--cream-soft)" }}
            >
              <IconInstagram className="social-ico" />
              <span>Instagram · {site.instagram.handle}</span>
            </a>
          </div>
        </div>

        {/* MAPAS — dos puntos de retiro, lejos uno del otro */}
        <div className="contact-maps mt-16">
          <span className="eyebrow contact-maps-title" style={{ color: "var(--gold-soft)" }}>
            Puntos de retiro
          </span>
          <div className="mt-7">
            <PickupMap />
          </div>
          <p className="cmap-ship font-sans-ui">
            <IconSend className="cmap-ship-ico" />
            Envíos a todo el país · coordinamos por WhatsApp.
          </p>
        </div>

        {/* FORMULARIO — compone un mensaje y abre WhatsApp */}
        <form className="contact-form mt-16" onSubmit={handleSubmit} noValidate>
          <span className="eyebrow contact-form-title" style={{ color: "var(--gold-soft)" }}>
            Escribinos
          </span>

          <div className="contact-grid mt-8">
            <div className="contact-field">
              <label htmlFor="cf-nombre" className="contact-label font-sans-ui">
                Nombre <span className="contact-req" aria-hidden="true">*</span>
              </label>
              <input
                id="cf-nombre"
                type="text"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="contact-input"
                autoComplete="name"
                required
                aria-required="true"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="cf-contacto" className="contact-label font-sans-ui">
                <IconMail className="contact-label-ico" />
                Email o teléfono <span className="contact-opt">(opcional)</span>
              </label>
              <input
                id="cf-contacto"
                type="text"
                name="contacto"
                value={contacto}
                onChange={(e) => setContacto(e.target.value)}
                className="contact-input"
                autoComplete="email"
                inputMode="email"
              />
            </div>

            <div className="contact-field contact-field-full">
              <label htmlFor="cf-pieza" className="contact-label font-sans-ui">
                ¿Qué pieza te interesa? <span className="contact-opt">(opcional)</span>
              </label>
              <input
                id="cf-pieza"
                type="text"
                name="pieza"
                value={pieza}
                onChange={(e) => setPieza(e.target.value)}
                className="contact-input"
                placeholder="Un collar, una combinación con cuarzo rosa, un regalo…"
              />
            </div>

            <div className="contact-field contact-field-full">
              <label htmlFor="cf-mensaje" className="contact-label font-sans-ui">
                Mensaje <span className="contact-req" aria-hidden="true">*</span>
              </label>
              <textarea
                id="cf-mensaje"
                name="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="contact-input contact-textarea"
                rows={4}
                required
                aria-required="true"
              />
            </div>
          </div>

          {error && (
            <p className="contact-error font-sans-ui" role="alert">
              {error}
            </p>
          )}

          <div className="contact-actions">
            <button type="submit" className="btn btn-solid contact-submit">
              <IconSend className="social-ico" />
              <span>Enviar por WhatsApp</span>
            </button>
            <p className="contact-note font-sans-ui">
              Se abre WhatsApp con tu mensaje listo para enviar.
            </p>
          </div>
        </form>

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
