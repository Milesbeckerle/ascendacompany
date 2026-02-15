# SITE ASCENDA

Landing page imersiva em Next.js + TypeScript + Tailwind + Framer Motion.

## Rodar localmente

```bash
npm i
npm run dev
```

Abra `http://localhost:3000`.

## Trocar o WhatsApp

1. Abra `lib/constants.ts`.
2. Edite `WHATSAPP_URL` para seu número no formato `https://wa.me/5511999999999`.

## Editar textos e seções

- Estrutura principal: `app/page.tsx`
- Seções: `components/sections/*`
- UI reutilizável: `components/ui/*`
- Cores e base visual global: `app/globals.css`

## Deploy na Vercel (passo a passo)

1. Suba o projeto para um repositório GitHub.
2. Acesse [vercel.com](https://vercel.com) e faça login.
3. Clique em **Add New > Project**.
4. Importe o repositório `ascendacompany`.
5. Mantenha os defaults de build (Next.js detectado automaticamente).
6. Clique em **Deploy**.
7. Após deploy, atualize `WHATSAPP_URL` se necessário e faça novo push.
