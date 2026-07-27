'use client';

import { useEffect, useState } from 'react';
import { PromptGrid } from '@/components/prompts/prompt-grid';
import { Prompt } from '@/types';
import { Sparkles, Calendar } from 'lucide-react';

const changelog = [
  {
    date: 'Janeiro 2024',
    entries: [
      {
        type: 'feature',
        title: 'Novos Prompts de SEO',
        description: 'Adicionamos 8 novos prompts para pesquisa de palavras-chave, meta tags otimizadas e análise de concorrentes.',
      },
      {
        type: 'mega',
        title: 'Mega-Prompt: Agente de Vendas Consultivo',
        description: 'Um agente completo que ajuda a melhorar suas habilidades de vendas com roleplay, análise e coaching.',
      },
      {
        type: 'update',
        title: 'Melhorias nos prompts de Marketing',
        description: 'Atualizamos 15 prompts de copywriting com técnicas mais modernas e eficazes.',
      },
    ],
  },
  {
    date: 'Dezembro 2023',
    entries: [
      {
        type: 'feature',
        title: 'Categoria de Programação expandida',
        description: 'Novos prompts para DevOps, arquitetura de sistemas e code review.',
      },
      {
        type: 'mega',
        title: 'Mega-Prompt: Assistente CMO Virtual',
        description: 'Transforma o ChatGPT em um CMO para planejar estratégias de marketing completas.',
      },
    ],
  },
];

export default function NovidadesPage() {
  const [newPrompts, setNewPrompts] = useState<Prompt[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNewPrompts = async () => {
      try {
        const res = await fetch('/api/prompts?new=true');
        const data = await res.json();
        setNewPrompts(data.prompts || []);
      } catch (error) {
        console.error('Error fetching new prompts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewPrompts();
  }, []);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'feature':
        return 'bg-[rgba(16,185,129,0.16)] text-[var(--success)]';
      case 'mega':
        return 'bg-[rgba(139,92,246,0.16)] text-[var(--accent-300)]';
      case 'update':
        return 'bg-[rgba(56,189,248,0.16)] text-[var(--neutral-50)]';
      default:
        return 'bg-[rgba(148,163,184,0.16)] text-[var(--neutral-400)]';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'feature':
        return 'Novo';
      case 'mega':
        return 'Mega-Prompt';
      case 'update':
        return 'Atualização';
      default:
        return type;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[rgba(245,158,11,0.16)]">
            <Sparkles className="w-6 h-6 text-[var(--neutral-950)]" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-[var(--neutral-50)]">Novidades</h1>
            <p className="text-sm text-[var(--neutral-400)]">
              Veja o que há de novo na PromptoTeca
            </p>
          </div>
        </div>
        <span className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-sm text-[var(--neutral-400)]">
          Atualizações contínuas
        </span>
      </div>

      {newPrompts.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-[rgba(139,92,246,0.16)]">
              <Sparkles className="w-5 h-5 text-[var(--accent-300)]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--neutral-500)]">Destaques</p>
              <h2 className="text-2xl font-semibold text-[var(--neutral-50)]">Prompts Adicionados Recentemente</h2>
            </div>
          </div>
          <PromptGrid prompts={newPrompts} isLoading={isLoading} />
        </section>
      )}

      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-[rgba(255,255,255,0.06)]">
            <Calendar className="w-5 h-5 text-[var(--neutral-400)]" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--neutral-500)]">Histórico</p>
            <h2 className="text-2xl font-semibold text-[var(--neutral-50)]">Histórico de Atualizações</h2>
          </div>
        </div>

        <div className="space-y-8">
          {changelog.map((month, i) => (
            <div key={i}>
              <div className="flex items-center gap-2 mb-4 text-sm text-[var(--neutral-400)]">
                <Calendar className="w-5 h-5" />
                <h3 className="text-lg font-medium text-[var(--neutral-50)]">{month.date}</h3>
              </div>

              <div className="space-y-4 ml-7 border-l border-[rgba(255,255,255,0.08)] pl-6">
                {month.entries.map((entry, j) => (
                  <div
                    key={j}
                    className="rounded-[1.25rem] border border-[rgba(255,255,255,0.05)] bg-[var(--neutral-900)] p-5 shadow-soft-sm"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getTypeColor(entry.type)}`}>
                        {getTypeLabel(entry.type)}
                      </span>
                      <h4 className="font-medium text-[var(--neutral-50)]">{entry.title}</h4>
                    </div>
                    <p className="text-sm text-[var(--neutral-400)]">{entry.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
