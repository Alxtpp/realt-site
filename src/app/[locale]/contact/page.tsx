import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/ui/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 md:pb-32">
      <Container>
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-16">
            Contact
          </h1>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          <FadeIn delay={0.1}>
            <ContactForm />
          </FadeIn>
          <FadeIn delay={0.2}>
            <ContactInfo />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
