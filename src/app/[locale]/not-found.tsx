import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="pt-32 pb-24 md:pb-32 min-h-[60vh] flex items-center">
      <Container>
        <h1 className="text-6xl md:text-8xl font-light tracking-wide mb-6">
          404
        </h1>
        <p className="text-lg text-brand-gray-400 mb-12">
          Page introuvable / Page not found
        </p>
        <Button href="/" variant="secondary">
          Retour / Back
        </Button>
      </Container>
    </section>
  );
}
