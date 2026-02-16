import { Community } from "@/components/sections/Community";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Method } from "@/components/sections/Method";
import { Passagem } from "@/components/sections/Passagem";
import { Services } from "@/components/sections/Services";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NAV_ITEMS, WHATSAPP_URL } from "@/lib/constants";

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between gap-3 py-4">
        <a href="#hero" className="text-lg font-semibold text-white" aria-label="Ir para o topo">
          Ascenda
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-white/75 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <Button href={WHATSAPP_URL} ariaLabel="Abrir WhatsApp" className="px-4 py-2 text-xs sm:text-sm">
          Falar agora
        </Button>
      </Container>
    </header>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Passagem />
        <Services />
        <Community />
        <Method />
        <FinalCta />
      </main>
    </div>
  );
}
