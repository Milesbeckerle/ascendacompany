# Ascenda — Landing Page Cinematográfica

## Rodar localmente

```bash
npm i
npm run dev
```

Acesse: `http://localhost:3000`

## Onde editar WhatsApp

Edite `lib/constants.ts` em:

- `WHATSAPP_URL`

## Onde editar textos

- Página e ordem das seções: `app/page.tsx`
- Navbar fixa: `components/sections/Navbar.tsx`
- Hero: `components/sections/Hero.tsx`
- Passagem (pinned/horizontal desktop): `components/sections/Passagem.tsx`
- Serviços: `components/sections/Services.tsx`
- Comunidade: `components/sections/Community.tsx`
- Metodologia: `components/sections/Method.tsx`
- CTA final: `components/sections/FinalCta.tsx`

## Deploy na Vercel

1. Suba o projeto para GitHub.
2. Em `vercel.com`, clique em **Add New > Project**.
3. Importe o repositório.
4. Deploy padrão de Next.js.
5. Atualize `WHATSAPP_URL` e faça novo deploy se necessário.
