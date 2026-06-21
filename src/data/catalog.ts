import { categoryPhotos, type Photo } from "./media";

export type Category = {
  /** Nombre propio de la línea. */
  name: string;
  /** La "sección" tal como la nombra la marca. */
  line: string;
  /** Microcopy breve, en la voz de Dorita. */
  blurb: string;
  photo: Photo;
};

/**
 * Cápsula flowers — las cuatro líneas de Dorita.
 * Cada una lleva nombre de mujer; el orden va de lo cotidiano a lo coqueto.
 */
export const categories: Category[] = [
  {
    name: "Antonia",
    line: "Cotidiano",
    blurb: "Para todos los días. Las que te ponés sin pensar y no te sacás más.",
    photo: categoryPhotos.antonia,
  },
  {
    name: "Josefa",
    line: "Clásicos",
    blurb: "Las de siempre. Formas nobles que no pasan de moda.",
    photo: categoryPhotos.josefa,
  },
  {
    name: "Nora",
    line: "Singular",
    blurb: "Para destacar. Piezas que se llevan la mirada.",
    photo: categoryPhotos.nora,
  },
  {
    name: "Elsa",
    line: "Coqueta",
    blurb: "Un gesto de coquetería. Para los días que piden un poco más.",
    photo: categoryPhotos.elsa,
  },
];
