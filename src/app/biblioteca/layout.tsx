'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Header } from '@/components/layout/header';
import { ToastContainer } from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';

export default function BibliotecaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { logout } = useAuth();
  const { toasts, removeToast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-[var(--surface-200)]">
      <Header
        onSearch={setSearchQuery}
        searchValue={searchQuery}
        onLogout={handleLogout}
      />
      <main>
        {children}
      </main>
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </div>
  );
}
