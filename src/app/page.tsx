import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Values from "@/components/Values";
import Collection from "@/components/Collection";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Story />
        <Values />
        <Collection />
        <Philosophy />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
