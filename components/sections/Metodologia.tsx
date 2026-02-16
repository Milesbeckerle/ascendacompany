"use client";

import { useEffect, useRef, useState } from "react";
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

export function Metodologia() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.8 - rect.top) / (rect.height + window.innerHeight * 0.6)));
      setActive(Math.floor(p * phases.length));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="metodologia" className="py-24">
      <Container>
        <SectionHeader eyebrow="Metodologia" title="Ritual de execução para resultado real" />

        <div ref={ref} className="relative mt-12 pl-8">
          <div className="absolute top-0 left-3 h-full w-px bg-gradient-to-b from-orange-300 via-orange-500/70 to-transparent" />
          <div className="space-y-5">
            {phases.map((phase, index) => {
              const isActive = index <= active;
              return (
                <article
                  key={phase}
                  className="rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-4 transition-all duration-500"
                  style={{
                    opacity: isActive ? 1 : 0.45,
                    transform: `translateY(${isActive ? 0 : 10}px)`,
                    boxShadow: isActive ? "0 0 28px rgba(251,146,60,0.14)" : "none",
                  }}
                >
                  <p className="text-sm text-white/85 sm:text-base">{index + 1}. {phase}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
