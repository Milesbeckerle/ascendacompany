"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { IconFlame } from "@/components/ui/Icons";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Step = {
  title: string;
  description: string;
  icon: string;
};

const steps: Step[] = [
  { title: "MONEY", description: "Conseguir renda, profissão e qualificação estratégica.", icon: "💼" },
  { title: "ADM", description: "Administrar dinheiro: impostos + investimento.", icon: "🏛️" },
  { title: "CORPO & MENTE", description: "Treinar o corpo, fortalecer a mente, criar disciplina.", icon: "🧠" },
  { title: "ATRIBUTOS", description: "Aprender habilidades, idiomas, artes e expandir sua presença.", icon: "✨" },
];

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function Passagem() {
  const targetRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!targetRef.current) return;
      const rect = targetRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const traveled = -rect.top;
      setProgress(clamp(traveled / total));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section id="passagem" ref={targetRef} className="relative h-[320vh] py-12 sm:h-[360vh]">
      <div className="sticky top-20">
        <Container>
          <SectionHeader
            eyebrow="Passagem"
            title="Da faísca ao fogo: a evolução que você sente no scroll"
            description="Cada movimento destrava uma camada da sua jornada. Volte o scroll e revisite etapas sempre que precisar recalibrar o foco."
          />

          <div className="mt-10 grid min-h-[70vh] items-stretch gap-7 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative h-[330px] overflow-hidden sm:h-[420px]">
              {steps.map((step, index) => {
                const segment = 1 / steps.length;
                const start = index * segment;
                const phase = clamp((progress - start) / segment);
                const x = `${(1 - phase) * 120}px`;

                return (
                  <article
                    key={step.title}
                    style={{
                      transform: `translateX(${x})`,
                      opacity: phase,
                      filter: `blur(${(1 - phase) * 3}px)`,
                    }}
                    className="absolute inset-0 flex flex-col justify-center rounded-3xl border border-white/15 bg-white/[0.03] p-7 shadow-[0_0_40px_rgba(15,23,42,0.45)] backdrop-blur transition-all duration-200"
                  >
                    <p className="mb-6 text-2xl" aria-hidden="true">{step.icon}</p>
                    <h3 className="text-3xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75">{step.description}</p>
                  </article>
                );
              })}
            </div>

            <div className="relative flex min-h-[330px] items-center justify-center rounded-3xl border border-white/10 bg-slate-950/60 p-6">
              <div
                className="absolute h-56 w-56 rounded-full blur-3xl transition-all duration-300"
                style={{
                  backgroundColor: `hsl(${25 - progress * 25} 95% ${97 - progress * 45}%)`,
                  transform: `scale(${0.7 + progress * 0.55})`,
                  opacity: 0.3 + progress * 0.6,
                }}
              />
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.25),transparent_45%)]" />
              <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                <IconFlame className="h-10 w-10 text-orange-300" />
                <p className="text-xs uppercase tracking-[0.25em] text-white/65">Intensidade da chama</p>
                <div className="h-2 w-44 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-white via-orange-300 to-orange-600 transition-all duration-200"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
                <p className="text-sm text-white/70">A chama começa branca e ganha cor, calor e presença conforme você avança.</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
