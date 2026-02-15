import { Community } from "@/components/sections/Community";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Method } from "@/components/sections/Method";
import { Navbar } from "@/components/sections/Navbar";
import { Passagem } from "@/components/sections/Passagem";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
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
