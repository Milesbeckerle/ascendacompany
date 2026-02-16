import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const benefits = [
  { title: "Compartilha vagas", icon: "◉" },
  { title: "Networking estratégico", icon: "◎" },
  { title: "Apoio emocional", icon: "◌" },
  { title: "Parcerias e convênios", icon: "◍" },
];

export function Comunidade() {
  return (
    <section id="comunidade" className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Comunidade"
          title="Você não cresce sozinho. Cresce em rede."
          description="Conexões reais, suporte contínuo e oportunidades recorrentes para sustentar sua evolução."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {benefits.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-white/12 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/35 hover:shadow-[0_0_30px_rgba(251,146,60,0.12)]"
            >
              <span className="text-lg text-orange-200/90" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="mt-4 text-lg font-medium text-white">{item.title}</h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
