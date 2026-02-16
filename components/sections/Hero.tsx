import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-24 sm:pt-36">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="space-y-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-200/90">
              Consultoria Ascenda
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Ascenda: a mão que te ajuda a subir.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Consultoria para crescer profissionalmente, emocionalmente e
              financeiramente — começando pelo que muda tudo agora: renda e
              trabalho.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="#passagem" ariaLabel="Ir para seção Passagem">
                Comece sua jornada
              </Button>
              <Button href="#servicos" variant="secondary" ariaLabel="Ir para seção Serviços">
                Ver serviços
              </Button>
            </div>
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-[520px] animate-fade-up">
            <div className="absolute inset-0 rounded-[2.2rem] border border-white/10 bg-gradient-to-b from-indigo-500/10 to-orange-500/10 backdrop-blur-xl" />
            <div className="animate-float absolute top-[13%] right-[12%] h-44 w-32 rounded-full bg-gradient-to-b from-white/80 via-orange-200/70 to-orange-500/20 blur-2xl" />
            <div className="animate-float-slow absolute bottom-[13%] left-[14%] h-44 w-32 rounded-full bg-gradient-to-t from-white/25 via-indigo-200/35 to-white/40 blur-2xl" />
            <div className="animate-pulse-soft absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-slate-50 to-orange-500" />
            <div className="absolute inset-x-6 bottom-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
              <span className="text-xs uppercase tracking-[0.2em] text-white/70">Fogo + direção</span>
              <span className="text-orange-300">↘</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
