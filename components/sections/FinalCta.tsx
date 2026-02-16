import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WHATSAPP_URL } from "@/lib/constants";

export function FinalCta() {
  return (
    <section id="contato" className="py-28">
      <Container>
        <div className="relative animate-fade-up overflow-hidden rounded-[2rem] border border-orange-300/30 bg-gradient-to-br from-orange-500/20 via-rose-500/10 to-indigo-600/20 px-8 py-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.3),transparent_40%),radial-gradient(circle_at_80%_75%,rgba(217,70,239,0.2),transparent_35%)]" />
          <div className="relative z-10 space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-orange-200/90">Contato</p>
            <h2 className="text-3xl font-semibold text-white sm:text-5xl">Pronto para acender sua jornada?</h2>
            <p className="mx-auto max-w-2xl text-white/75">Fale com a Ascenda agora e receba um plano claro para virar o jogo da sua vida profissional.</p>
            <Button href={WHATSAPP_URL} ariaLabel="Abrir WhatsApp da Ascenda" className="gap-2">
              <span>💬</span>
              Falar com a Ascenda agora
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
