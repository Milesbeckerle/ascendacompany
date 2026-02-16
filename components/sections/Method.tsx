import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const phases = [
  "Entender situação",
  "3 testes vocacionais (comportamental, técnico/interesses, maturidade emocional)",
  "Reunião estratégica",
  "Currículo/LinkedIn",
  "Qualificação estratégica",
  "Análise de vagas",
  "Treino de entrevista",
  "Conquista da vaga",
  "Permanência na comunidade",
];

export function Method() {
  return (
    <section id="metodologia" className="py-24">
      <Container>
        <SectionHeader eyebrow="Como funciona" title="Metodologia em etapas para gerar resultado real" />

        <div className="relative mt-12 pl-8">
          <div className="absolute top-0 left-3 h-full w-px bg-gradient-to-b from-orange-300 via-orange-500/70 to-transparent" />
          <div className="space-y-6">
            {phases.map((phase, index) => (
              <article key={phase} className="animate-fade-up rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4" style={{ animationDelay: `${index * 80}ms` }}>
                <p className="text-sm text-white/85 sm:text-base">{index + 1}. {phase}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
