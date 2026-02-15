import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ascenda | A mão que te ajuda a subir",
  description:
    "Consultoria Ascenda para evolução profissional, emocional e financeira com foco em trabalho e renda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
