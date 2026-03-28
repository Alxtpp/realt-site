import Container from "@/components/ui/Container";
import TeamSection from "@/components/sections/TeamSection";
import AboutContent from "@/components/sections/AboutContent";

export default function AboutPage() {
  return (
    <section className="pt-32 pb-24 md:pb-32">
      <Container>
        <AboutContent />
        <TeamSection />
      </Container>
    </section>
  );
}
