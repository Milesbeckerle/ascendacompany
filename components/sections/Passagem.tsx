"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";

type Step = {
  title: string;
  kicker: string;
  description: string;
  icon: string;
};

const steps: Step[] = [
  {
    title: "MONEY",
    kicker: "PASSAGEM",
    description: "Conseguir renda, profissão e qualificação estratégica.",
    icon: "◈",
  },
  {
    title: "ADM",
    kicker: "PASSAGEM",
    description: "Organizar dinheiro: impostos, controle e investimento.",
    icon: "◎",
  },
  {
    title: "CORPO & MENTE",
    kicker: "PASSAGEM",
    description: "Disciplina real: treino, mente forte e consistência.",
    icon: "◉",
  },
  {
    title: "ATRIBUTOS",
    kicker: "PASSAGEM",
    description: "Habilidades, idiomas e expansão pessoal.",
    icon: "✦",
  },
];

const flamePalette = ["#f8fafc", "#facc15", "#f97316", "#a855f7"];
const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

function mixColor(progress: number) {
  const p = clamp(progress) * (flamePalette.length - 1);
  const i = Math.floor(p);
  const t = p - i;
  const from = flamePalette[i].match(/\w\w/g)?.map((hex) => Number.parseInt(hex, 16)) ?? [255, 255, 255];
  const to = flamePalette[Math.min(i + 1, flamePalette.length - 1)]
    .match(/\w\w/g)
    ?.map((hex) => Number.parseInt(hex, 16)) ?? [255, 255, 255];

  const lerp = (a: number, b: number) => Math.round(a + (b - a) * t);
  return `rgb(${lerp(from[0], to[0])}, ${lerp(from[1], to[1])}, ${lerp(from[2], to[2])})`;
}

export function Passagem() {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    const update = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const traveled = -rect.top;
      const nextProgress = clamp(total > 0 ? traveled / total : 0);
      const nextIndex = Math.min(steps.length - 1, Math.floor(nextProgress * steps.length));

      setProgress(nextProgress);
      setActiveIndex((prev) => {
        if (nextIndex !== prev) {
          setDirection(nextIndex > prev ? 1 : -1);
          return nextIndex;
        }
        return prev;
      });

      frameRef.current = null;
    };

    const onScroll = () => {
      if (frameRef.current) return;
      frameRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const flameColor = useMemo(() => mixColor(progress), [progress]);
  const activeStep = steps[activeIndex];
  const progressPercent = ((activeIndex + 1) / steps.length) * 100;

  const goToStep = (index: number) => {
    if (!wrapperRef.current) return;
    const sectionTop = window.scrollY + wrapperRef.current.getBoundingClientRect().top;
    const total = wrapperRef.current.offsetHeight - window.innerHeight;
    const targetY = sectionTop + total * ((index + 0.01) / steps.length);
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <section id="passagem" ref={wrapperRef} className="relative py-16 md:h-[400vh] md:py-0">
      <div className="md:sticky md:top-20 md:flex md:h-[calc(100vh-5rem)] md:items-center">
        <Container className="w-full">
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(520px,1.2fr)_0.8fr] lg:gap-9">
            <div className="min-h-[340px] rounded-3xl border border-white/12 bg-white/[0.04] p-6 sm:p-10 lg:min-h-[390px]">
              <div
                key={activeStep.title}
                className="space-y-6 animate-stage-enter"
                style={{ ["--stage-from" as string]: direction > 0 ? "72px" : "-72px" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-200/90">{activeStep.kicker}</p>
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm text-orange-200/90">
                  {activeStep.icon}
                </div>
                <h3 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">{activeStep.title}</h3>
                <p className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-xl">{activeStep.description}</p>
              </div>
            </div>

            <aside className="rounded-3xl border border-white/12 bg-slate-950/70 p-6 sm:p-8">
              <div
                className="pointer-events-none mx-auto mb-5 h-36 w-36 rounded-full blur-2xl transition-all duration-300"
                style={{
                  backgroundColor: flameColor,
                  transform: `scale(${0.86 + progress * 0.35}) translateY(${(0.5 - progress) * 16}px)`,
                  opacity: 0.35 + progress * 0.5,
                }}
              />

              <div className="flex items-center justify-between gap-2">
                <p className="text-xs uppercase tracking-[0.22em] text-white/60">Intensidade da chama</p>
                <p className="text-xs font-medium uppercase tracking-[0.14em]" style={{ color: flameColor }}>
                  {activeStep.title}
                </p>
              </div>

              <div className="mt-3 h-1.5 w-full rounded-full bg-white/10">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${progressPercent}%`,
                    background: "linear-gradient(90deg, #f8fafc, #facc15, #f97316, #a855f7)",
                  }}
                />
              </div>

              <p className="mt-3 text-sm leading-relaxed text-white/70">
                A chama ganha forma e presença conforme cada etapa da passagem é consolidada.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {steps.map((step, index) => {
                  const active = index === activeIndex;
                  return (
                    <button
                      key={step.title}
                      type="button"
                      aria-label={`Ir para etapa ${step.title}`}
                      onClick={() => goToStep(index)}
                      className="cursor-pointer rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_14px_rgba(251,146,60,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 active:translate-y-0"
                      style={{
                        borderColor: active ? flameColor : "rgba(255,255,255,0.2)",
                        color: active ? flameColor : "rgba(255,255,255,0.72)",
                        backgroundColor: active ? "rgba(255,255,255,0.06)" : "transparent",
                      }}
                    >
                      {step.title}
                    </button>
                  );
                })}
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </section>
  );
}
