import { notFound } from "next/navigation";
import Image from "next/image";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import ProjectSpecs from "@/components/ui/ProjectSpecs";
import ProjectNav from "@/components/ui/ProjectNav";
import ImageGallery from "@/components/ui/ImageGallery";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description.fr,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(slug);

  return (
    <article className="pt-32 pb-24 md:pb-32">
      <Container>
        {/* Header */}
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-light tracking-wide">
            {project.name}
          </h1>
          {project.address && (
            <p className="mt-3 text-brand-gray-400 text-sm tracking-wide">
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(project.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-black transition-colors"
              >
                {project.address}
              </a>
            </p>
          )}
        </FadeIn>

        {/* Navigation */}
        <FadeIn delay={0.1}>
          <div className="mt-8">
            <ProjectNav previous={previous} next={next} />
          </div>
        </FadeIn>

        {/* Specs */}
        <FadeIn delay={0.2}>
          <div className="mt-12 md:mt-16">
            <ProjectSpecs project={project} />
          </div>
        </FadeIn>

        {/* Hero Image */}
        <FadeIn delay={0.3}>
          <div className="mt-16 md:mt-20 relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src={project.heroImage}
              alt={project.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </div>
        </FadeIn>

        {/* Gallery */}
        {project.galleryImages.length > 0 && (
          <div className="mt-10 md:mt-16">
            <ImageGallery images={project.galleryImages} alt={project.name} />
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="mt-16 md:mt-24">
          <ProjectNav previous={previous} next={next} />
        </div>
      </Container>
    </article>
  );
}
