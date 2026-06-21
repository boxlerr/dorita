import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Collection from "@/components/Collection";
import Materials from "@/components/Materials";
import Care from "@/components/Care";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Story />
        <Collection />
        <Materials />
        <Care />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
