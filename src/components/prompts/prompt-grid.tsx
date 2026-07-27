'use client';

import { Prompt } from '@/types';
import { PromptCard } from './prompt-card';
import { PromptModal } from './prompt-modal';
import { useState } from 'react';
import { FileQuestion } from 'lucide-react';

interface PromptGridProps {
  prompts: Prompt[];
  isLoading?: boolean;
  emptyMessage?: string;
}

export function PromptGrid({ prompts, isLoading, emptyMessage = 'Nenhum prompt encontrado' }: PromptGridProps) {
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-[1.25rem] border border-[rgba(255,255,255,0.03)] bg-[var(--neutral-900)] p-6 shadow-soft-sm animate-pulse">
            <div className="flex gap-3 mb-5">
              <div className="h-4 w-24 rounded-full bg-[rgba(255,255,255,0.05)]" />
              <div className="h-4 w-16 rounded-full bg-[rgba(255,255,255,0.05)]" />
            </div>
            <div className="space-y-3 mb-5">
              <div className="h-5 w-3/4 rounded-full bg-[rgba(255,255,255,0.05)]" />
              <div className="h-4 w-full rounded-full bg-[rgba(255,255,255,0.05)]" />
              <div className="h-4 w-5/6 rounded-full bg-[rgba(255,255,255,0.05)]" />
            </div>
            <div className="flex flex-wrap gap-2 mb-5">
              <div className="h-8 w-20 rounded-full bg-[rgba(255,255,255,0.05)]" />
              <div className="h-8 w-16 rounded-full bg-[rgba(255,255,255,0.05)]" />
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.05)]">
              <div className="h-4 w-24 rounded-full bg-[rgba(255,255,255,0.05)]" />
              <div className="h-9 w-28 rounded-xl bg-[rgba(255,255,255,0.05)]" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (prompts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[var(--surface-100)] border border-[rgba(255,255,255,0.06)] mb-4">
          <FileQuestion className="w-8 h-8 text-[var(--neutral-400)]" />
        </div>
        <h3 className="text-xl font-semibold text-[var(--neutral-50)] mb-3">Nenhum resultado</h3>
        <p className="max-w-md text-sm text-[var(--neutral-400)]">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {prompts.map((prompt) => (
          <PromptCard
            key={prompt.id}
            prompt={prompt}
            onClick={() => setSelectedPrompt(prompt)}
          />
        ))}
      </div>

      <PromptModal
        prompt={selectedPrompt}
        isOpen={!!selectedPrompt}
        onClose={() => setSelectedPrompt(null)}
      />
    </>
  );
}
