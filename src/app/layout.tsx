import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PromptoTeca - Biblioteca de Prompts de IA Profissionais',
  description: 'Mais de 500 prompts prontos para usar no ChatGPT. Aumente sua produtividade com prompts testados em português brasileiro.',
  keywords: 'prompts chatgpt, prompts ia, biblioteca prompts, prompts português, chatgpt brasil',
  openGraph: {
    title: 'PromptoTeca - Biblioteca de Prompts de IA Profissionais',
    description: 'Mais de 500 prompts prontos para usar no ChatGPT. Aumente sua produtividade com prompts testados em português brasileiro.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
