import Top from './components/Top';
import About from './components/About';
import TemplateProjects from './components/TemplateProjects';
import BlogIntro from './components/BlogIntro';

export default function Home() {
  return (
    <>
      <section id="home">
        <Top />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <TemplateProjects />
      </section>
      <BlogIntro />
    </>
  );
}
