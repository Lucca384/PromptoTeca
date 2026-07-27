'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { ToastContainer } from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';

export default function BibliotecaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toasts, removeToast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-[var(--surface-200)]">
      <Header
        onSearch={setSearchQuery}
        searchValue={searchQuery}
      />
      <main>
        {children}
      </main>
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </div>
  );
}
