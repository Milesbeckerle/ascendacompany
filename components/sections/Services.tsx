import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const serviceItems = [
  {
    title: "Teste vocacional (3 perspectivas)",
    content:
      "Mapeamento comportamental, técnico/interesses e maturidade emocional para tomada de decisão com clareza.",
  },
  { title: "Currículo e LinkedIn", content: "Reposicionamento de narrativa, competências e prova social para recrutadores." },
  { title: "Qualificação estratégica", content: "Plano de estudo com foco em alta empregabilidade e retorno real no curto prazo." },
  { title: "Busca otimizada de vagas", content: "Rotina operacional com filtros, fontes e cadência para elevar taxa de resposta." },
  { title: "Treino de entrevista", content: "Simulações com feedback direto para performance, comunicação e presença." },
  { title: "Encaminhamento e análise de empresas", content: "Curadoria de oportunidades com leitura de cultura, risco e potencial de crescimento." },
  { title: "Acompanhamento pós-emprego", content: "Suporte inicial para adaptação, disciplina financeira e posicionamento interno." },
  { title: "Comunidade", content: "Continuidade da evolução com acesso a rede, oportunidades e apoio de longo prazo." },
];

export function Services() {
  return (
    <section id="servicos" className="py-24">
      <Container>
        <SectionHeader eyebrow="Serviços" title="Consultoria sob medida para transformação rápida e sustentável" />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-7">
            <div className="mb-6 inline-flex rounded-full border border-orange-300/40 bg-orange-400/10 p-3">🎯</div>
            <h3 className="text-2xl font-semibold text-white">Consultoria Direta (Reto ao ponto)</h3>
            <p className="mt-3 text-white/70">Foco total em conquistar emprego: currículo, vagas certas, entrevista e conversão.</p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-7">
            <div className="mb-6 inline-flex rounded-full border border-violet-300/40 bg-violet-400/10 p-3">⚡</div>
            <h3 className="text-2xl font-semibold text-white">Consultoria Completa</h3>
            <p className="mt-3 text-white/70">Acompanhamento contínuo para evolução profissional, emocional e financeira com direção constante.</p>
          </article>
        </div>

        <div className="mt-8">
          <Accordion items={serviceItems} />
        </div>
      </Container>
    </section>
  );
}
