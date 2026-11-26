import Nav from "@/components/Nav";
import { Hero, About, Stats, Experience, Projects, Skills, Certifications, Contact, Footer } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-brand focus:px-3 focus:py-2 focus:text-white">Skip to content</a>
      <Nav />
      <main>
        <Hero /><About /><Stats /><Experience /><Projects /><Skills /><Certifications /><Contact />
      </main>
      <Footer />
    </>
  );
}
