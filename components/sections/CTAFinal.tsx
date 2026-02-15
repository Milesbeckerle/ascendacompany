import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/siteConfig";

export function CTAFinal() {
  return (
    <section id="contato" className="py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-orange-300/30 bg-gradient-to-br from-orange-500/20 via-rose-500/10 to-indigo-600/20 px-8 py-16 text-center shadow-[0_0_50px_rgba(251,146,60,0.16)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.26),transparent_40%),radial-gradient(circle_at_80%_75%,rgba(217,70,239,0.2),transparent_35%)]" />
          <div className="relative z-10 space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-orange-200/90">Contato</p>
            <h2 className="text-3xl font-semibold text-white sm:text-5xl">Pronto para acender sua jornada?</h2>
            <Button href={siteConfig.whatsappUrl} ariaLabel="Falar com a Ascenda no WhatsApp" className="gap-2">
              Falar com a Ascenda agora
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
