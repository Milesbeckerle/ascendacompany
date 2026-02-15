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
  { title: "Qualificação estratégica", content: "Plano de estudo focado em empregabilidade e ganho de renda." },
  { title: "Busca otimizada de vagas", content: "Processo orientado por dados para candidaturas com maior taxa de retorno." },
  { title: "Treino de entrevista", content: "Simulações práticas com ajustes de comunicação, postura e narrativa." },
  { title: "Encaminhamento e análise de empresas", content: "Curadoria de empresas com leitura de contexto e aderência." },
  { title: "Acompanhamento pós-emprego", content: "Apoio na adaptação inicial e evolução dentro da vaga." },
  { title: "Comunidade", content: "Rede ativa com oportunidades, suporte e troca contínua." },
];

export function Servicos() {
  return (
    <section id="servicos" className="py-24">
      <Container>
        <SectionHeader eyebrow="Serviços" title="Duas rotas de acompanhamento, uma evolução real" />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/12 bg-white/[0.04] p-7 shadow-[0_0_24px_rgba(251,146,60,0.12)] backdrop-blur">
            <p className="text-xs uppercase tracking-[0.25em] text-orange-200/85">Consultoria Direta</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Reto ao ponto</h3>
            <p className="mt-3 text-white/72">Conquistar emprego com velocidade: currículo, vaga certa e entrevista de conversão.</p>
          </article>

          <article className="rounded-3xl border border-white/12 bg-white/[0.04] p-7 shadow-[0_0_24px_rgba(168,85,247,0.15)] backdrop-blur">
            <p className="text-xs uppercase tracking-[0.25em] text-violet-200/85">Consultoria Completa</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Acompanhamento contínuo</h3>
            <p className="mt-3 text-white/72">Trabalho, disciplina emocional e estrutura financeira em uma jornada integrada.</p>
          </article>
        </div>

        <div className="mt-8">
          <Accordion items={serviceItems} />
        </div>
      </Container>
    </section>
  );
}
