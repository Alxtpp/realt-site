import { projects } from "@/data/projects";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import FadeIn from "@/components/ui/FadeIn";

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section className="pt-32 pb-24 md:pb-32">
      <Container>
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-16">
            Projets
          </h1>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {sorted.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
