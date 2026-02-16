import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NAV_ITEMS, WHATSAPP_URL } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#090d18]/80 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between gap-4 py-4">
        <a href="#hero" className="text-lg font-semibold tracking-wide text-white" aria-label="Ir para seção Hero">
          Ascenda
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button href={WHATSAPP_URL} ariaLabel="Abrir WhatsApp da Ascenda" className="px-4 py-2 text-xs sm:text-sm">
          Falar agora
        </Button>
      </Container>
    </header>
  );
}
