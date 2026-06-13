import Top from './components/Top';
import About from './components/About';
import OpensourceProjects from './components/OpensourceProjects';
import ClosedSourceProjects from './components/ClosedSourceProjects';
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
        <OpensourceProjects />
        <ClosedSourceProjects />
        <TemplateProjects />
      </section>
      <BlogIntro />
    </>
  );
}
