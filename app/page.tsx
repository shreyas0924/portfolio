import { About } from "@/components/about";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Work from "@/components/work";
export default function Home() {
  return (
    <main>
      <About />
      <Work />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
