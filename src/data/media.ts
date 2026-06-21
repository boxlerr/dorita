import type { StaticImageData } from "next/image";

import hero from "../photos/hero.jpg";
import story from "../photos/story.jpg";
import piedras from "../photos/piedras.jpg";
import catAntonia from "../photos/cat-antonia.jpg";
import catJosefa from "../photos/cat-josefa.jpg";
import catNora from "../photos/cat-nora.jpg";
import catElsa from "../photos/cat-elsa.jpg";
import collage01 from "../photos/collage-01.jpg";
import collage02 from "../photos/collage-02.jpg";
import collage03 from "../photos/collage-03.jpg";
import collage04 from "../photos/collage-04.jpg";
import collage05 from "../photos/collage-05.jpg";
import collage06 from "../photos/collage-06.jpg";
import collage07 from "../photos/collage-07.jpg";
import collage08 from "../photos/collage-08.jpg";
import collage09 from "../photos/collage-09.jpg";
import collage10 from "../photos/collage-10.jpg";

export type Photo = {
  img: StaticImageData;
  alt: string;
  /** Línea poética para el lightbox del álbum. */
  caption?: string;
};

/* Fotografía editorial de Dorita (piedras naturales sobre cristalería vintage,
   retratos de uso y detalles). Importadas estáticamente para obtener tamaño y
   blur automáticos y evitar saltos de layout. */

export const heroPhoto: Photo = {
  img: hero,
  alt: "Retrato cenital con cámara analógica y dije de piedra azul sobre prenda negra.",
};

export const storyPhoto: Photo = {
  img: story,
  alt: "Piezas y piedras sueltas sobre un diccionario antiguo abierto, junto a una cámara analógica.",
};

export const piedrasPhoto: Photo = {
  img: piedras,
  alt: "Dijes de distintas piedras naturales reposando sobre páginas de un libro antiguo.",
};

/** Álbum de piezas. Cada foto lleva un caption corto para el lightbox. */
export const collagePhotos: Photo[] = [
  {
    img: collage01,
    alt: "Tres dijes de ágata colgando sobre una copa de cristal.",
    caption: "Tres piedras, tres tardes.",
  },
  {
    img: collage02,
    alt: "Detalle de piedras naturales en una fuente de porcelana.",
    caption: "Lo que se conserva.",
  },
  {
    img: collage03,
    alt: "Retrato con un dije de piedra verde sobre prenda negra.",
    caption: "Un gesto cotidiano.",
  },
  {
    img: collage04,
    alt: "Dos mujeres con tapados, luciendo collares de Dorita.",
    caption: "Entre mujeres.",
  },
  {
    img: collage05,
    alt: "Manos con anillo y dije, hojeando una revista vintage.",
    caption: "El ritual de los días.",
  },
  {
    img: collage06,
    alt: "Licorera de cristal con un dije de piedra verde.",
    caption: "Sobre cristal.",
  },
  {
    img: collage07,
    alt: "Retrato sosteniendo una revista entre estanterías de libros.",
    caption: "Un día cualquiera.",
  },
  {
    img: collage08,
    alt: "Dije de piedra verde junto a una revista antigua.",
    caption: "El detalle.",
  },
  {
    img: collage09,
    alt: "Vista cenital: collar puesto junto a piezas sobre un libro abierto.",
    caption: "Lo que se elige.",
  },
  {
    img: collage10,
    alt: "Licoreras de cristal y varios dijes de piedra sobre lino.",
    caption: "El cofre.",
  },
];

export const categoryPhotos = {
  antonia: { img: catAntonia, alt: "Collar de uso diario sobre un sweater claro." },
  josefa: { img: catJosefa, alt: "Dije clásico de forma ovalada apoyado sobre la piel." },
  nora: { img: catNora, alt: "Detalle de una piedra singular en cadena de eslabones dorados." },
  elsa: { img: catElsa, alt: "Retrato editorial con campera de cuero y dije de piedra verde." },
} satisfies Record<string, Photo>;
