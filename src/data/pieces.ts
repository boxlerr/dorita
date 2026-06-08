export type Category = "Collares" | "Anillos" | "Aros" | "Pulseras";

export type Piece = {
  id: string;
  name: string;
  category: Category;
  stone: string;
  note: string;
  /** CSS background used to evoke the natural stone (no two alike). */
  gradient: string;
};

/**
 * Catálogo de referencia. Es un sitio informativo, sin base de datos:
 * cada pieza es única y se representa por su piedra natural.
 */
export const pieces: Piece[] = [
  {
    id: "herencia",
    name: "Herencia",
    category: "Collares",
    stone: "Ágata gris y perla de río",
    note: "El collar que se hereda. Cada vuelta guarda una conversación entre generaciones.",
    gradient:
      "radial-gradient(120% 120% at 30% 25%, #efe4d8 0%, #b9a48f 45%, #6f5c4c 100%)",
  },
  {
    id: "dorita",
    name: "Dorita",
    category: "Anillos",
    stone: "Cuarzo rosa",
    note: "La pieza fundadora. Coquetería sin vanidad, identidad de todos los días.",
    gradient:
      "radial-gradient(120% 120% at 35% 25%, #ffe9e6 0%, #e2a8a3 50%, #b56b66 100%)",
  },
  {
    id: "amalia",
    name: "Amalia",
    category: "Aros",
    stone: "Ónix negro",
    note: "Sobrios y firmes. Para quien sabe que lo simple también es singular.",
    gradient:
      "radial-gradient(120% 120% at 32% 22%, #6a6a6a 0%, #2b2b2b 55%, #0e0e0e 100%)",
  },
  {
    id: "renata",
    name: "Renata",
    category: "Pulseras",
    stone: "Jade verde",
    note: "Un verde que recuerda a las plantas del patio y a las tardes sin apuro.",
    gradient:
      "radial-gradient(120% 120% at 35% 25%, #dcebcf 0%, #88a36b 50%, #4c5d36 100%)",
  },
  {
    id: "lucia",
    name: "Lucía",
    category: "Collares",
    stone: "Ámbar",
    note: "Tibio como la luz de una vela. Guarda el tiempo dentro suyo.",
    gradient:
      "radial-gradient(120% 120% at 33% 24%, #ffdfa0 0%, #d39a3f 50%, #8a5a18 100%)",
  },
  {
    id: "olivia",
    name: "Olivia",
    category: "Anillos",
    stone: "Lapislázuli",
    note: "Azul profundo con vetas doradas. Una pequeña noche para llevar en la mano.",
    gradient:
      "radial-gradient(120% 120% at 34% 24%, #5b7db8 0%, #2a4a7e 50%, #14264a 100%)",
  },
  {
    id: "coral",
    name: "Coral",
    category: "Aros",
    stone: "Cornalina",
    note: "Rojo cálido, casi un rubor. La pieza que enciende un gesto cotidiano.",
    gradient:
      "radial-gradient(120% 120% at 33% 23%, #e89b6f 0%, #b8492f 50%, #7a2417 100%)",
  },
  {
    id: "memoria",
    name: "Memoria",
    category: "Pulseras",
    stone: "Cuarzo cristal",
    note: "Transparente y luminosa. Lo que se conserva, no lo que se gasta.",
    gradient:
      "radial-gradient(120% 120% at 32% 22%, #ffffff 0%, #e6e2dc 45%, #b9b2a6 100%)",
  },
  {
    id: "rosario",
    name: "Rosario",
    category: "Collares",
    stone: "Granate",
    note: "Un rojo que se vuelve casi vino. Devoción por los detalles.",
    gradient:
      "radial-gradient(120% 120% at 33% 24%, #b85b5b 0%, #7a2030 50%, #45101c 100%)",
  },
];

export const categories: ("Todas" | Category)[] = [
  "Todas",
  "Collares",
  "Anillos",
  "Aros",
  "Pulseras",
];
