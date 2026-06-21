import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Pinyon_Script } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dorita.vercel.app"),
  title: {
    default: "Dorita Atelier — Accesorios con piedras naturales",
    template: "%s — Dorita Atelier",
  },
  description:
    "Dorita Atelier crea accesorios con piedras naturales, hechos a mano: ninguna pieza es igual a otra. La coquetería como un pequeño acto diario de identidad.",
  keywords: [
    "accesorios",
    "piedras naturales",
    "joyería artesanal",
    "dijes",
    "collares",
    "Dorita Atelier",
    "Argentina",
  ],
  openGraph: {
    title: "Dorita Atelier — Accesorios con piedras naturales",
    description:
      "Piezas únicas con piedras naturales, hechas a mano. Cápsula flowers: Antonia, Josefa, Nora y Elsa.",
    type: "website",
    locale: "es_AR",
    siteName: "Dorita Atelier",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${jost.variable} ${pinyon.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
