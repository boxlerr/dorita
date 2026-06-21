/** Datos de marca y contacto. Fuente única para header, contacto y footer. */

export const site = {
  name: "Dorita",
  fullName: "Dorita Atelier",
  tagline: "Accesorios con piedras naturales",

  whatsapp: {
    display: "+54 9 3456 62-1548",
    // wa.me: 54 (país) + 9 (móvil) + 3456 (área) + 621548
    href: "https://wa.me/5493456621548?text=" +
      encodeURIComponent("Hola Dorita, quería consultar por una pieza ✨"),
  },

  instagram: {
    handle: "@dorita.atelier",
    href: "https://instagram.com/dorita.atelier",
  },

  pickup: [
    { place: "Colegiales", region: "CABA" },
    { place: "Chajarí", region: "Entre Ríos" },
  ],

  shipping: "Envíos a todo el país.",
} as const;

/** Anclas de navegación, en el orden de la página. */
export const nav = [
  { href: "#historia", label: "Historia" },
  { href: "#piezas", label: "Piezas" },
  { href: "#piedras", label: "Piedras" },
  { href: "#cuidados", label: "Cuidados" },
  { href: "#contacto", label: "Contacto" },
] as const;
