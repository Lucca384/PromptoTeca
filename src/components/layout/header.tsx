'use client';

import { Search, Menu, X, Heart, Sparkles, LogOut, Library } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onSearch?: (query: string) => void;
  searchValue?: string;
  onLogout?: () => void;
}

export function Header({ onSearch, searchValue = '', onLogout }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState(searchValue);
  const pathname = usePathname();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearch?.(value);
  };

  const clearSearch = () => {
    setSearch('');
    onSearch?.('');
  };

  const navItems = [
    { href: '/biblioteca', label: 'Biblioteca', icon: Library },
    { href: '/biblioteca/construtor', label: 'Construtor', icon: Sparkles },
    { href: '/biblioteca/favoritos', label: 'Favoritos', icon: Heart },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[rgba(11,13,16,0.72)] backdrop-blur-sm border-b border-[rgba(255,255,255,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/biblioteca" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--accent-600)] to-[#4f46e5] flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-lg font-semibold text-[var(--neutral-50)] hidden sm:block">
              Prompto<span className="text-[var(--accent-400)]">Teca</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(item => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-[var(--motion)]',
                    isActive 
                      ? 'text-[var(--neutral-50)] bg-[rgba(255,255,255,0.02)]' 
                      : 'text-[var(--neutral-400)] hover:text-[var(--neutral-50)] hover:bg-[rgba(255,255,255,0.02)]'
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative hidden sm:block">
              <Input
                icon={<Search />}
                value={search}
                onChange={handleSearchChange}
                aria-label="Buscar prompts"
                placeholder="Buscar prompts..."
                className="w-72"
              />

              {search && (
                <button
                  onClick={clearSearch}
                  aria-label="Limpar busca"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md text-[var(--neutral-400)] hover:text-[var(--neutral-50)] hover:bg-[rgba(255,255,255,0.02)] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Logout */}
            <div className="hidden md:block">
              <Button variant="ghost" size="sm" onClick={onLogout} aria-label="Sair">
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-[var(--neutral-400)] hover:text-[var(--neutral-50)] hover:bg-[rgba(255,255,255,0.02)] transition-colors"
              aria-label="Abrir menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="sm:hidden pb-3">
          <div className="relative">
            <Input
              icon={<Search />}
              value={search}
              onChange={handleSearchChange}
              aria-label="Buscar prompts"
              placeholder="Buscar prompts..."
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[rgba(255,255,255,0.03)] bg-[rgba(11,13,16,0.9)] animate-slide-up">
          <nav className="p-4 space-y-2">
            {navItems.map(item => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-3 py-3 rounded-md text-sm font-medium transition-all duration-[var(--motion)]',
                    isActive 
                      ? 'text-[var(--neutral-50)] bg-[rgba(255,255,255,0.02)]' 
                      : 'text-[var(--neutral-400)] hover:text-[var(--neutral-50)] hover:bg-[rgba(255,255,255,0.02)]'
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              );
            })}
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => {
                setIsMenuOpen(false);
                onLogout?.();
              }}
            >
              <LogOut className="w-5 h-5 mr-2" />
              Sair
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
