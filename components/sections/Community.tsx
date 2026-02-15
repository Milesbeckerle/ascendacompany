import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const benefits = [
  { title: "Compartilha vagas", icon: "📣" },
  { title: "Networking estratégico", icon: "🤝" },
  { title: "Apoio emocional", icon: "🫶" },
  { title: "Parcerias, convênios e oportunidades internas", icon: "🌐" },
];

export function Community() {
  return (
    <section id="comunidade" className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Comunidade Ascenda"
          title="Você não cresce sozinho. Cresce em rede."
          description="Depois da contratação, a jornada continua: trocas reais, suporte emocional e acesso recorrente a oportunidades."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {benefits.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/[0.04] p-6 backdrop-blur">
              <p className="text-2xl" aria-hidden="true">{item.icon}</p>
              <h3 className="mt-4 text-lg font-medium text-white">{item.title}</h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
