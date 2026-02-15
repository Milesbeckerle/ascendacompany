import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

function AbstractHand({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 320 220"
      className={className}
      aria-hidden="true"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path
        d="M35 160C52 132 64 108 84 102C97 97 102 114 112 114C121 114 126 90 139 89C152 87 156 113 166 114C177 115 180 80 196 82C211 83 213 126 227 129C240 132 247 112 260 116C277 122 273 151 266 167C251 199 219 209 191 212C133 218 72 209 35 160Z"
        fill="url(#handGradient)"
        fillOpacity="0.22"
        stroke="rgba(255,255,255,0.22)"
      />
      <defs>
        <linearGradient id="handGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-30">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-200/85">Consultoria Ascenda</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Ascenda: a mão que te ajuda a subir.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Consultoria para crescer profissionalmente, emocionalmente e financeiramente — começando pelo que muda tudo agora: renda.
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

          <div className="relative mx-auto h-[440px] w-full max-w-[560px]">
            <div className="pointer-events-none absolute inset-0 rounded-[2.4rem] border border-white/10 bg-gradient-to-b from-violet-500/15 to-orange-500/10 backdrop-blur-xl" />
            <AbstractHand className="absolute top-6 right-8 h-44 w-64 animate-float opacity-80" />
            <AbstractHand className="absolute bottom-8 left-8 h-44 w-64 animate-float-slow opacity-65" flip />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="relative h-44 w-44">
                <span className="absolute inset-0 animate-pulse-soft rounded-full bg-gradient-to-b from-white via-amber-200 to-orange-500 blur-md" />
                <span className="absolute inset-4 rounded-full bg-gradient-to-br from-amber-100 to-orange-500 opacity-90 blur-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
