export const APP_NAME = 'PromptoTeca';
export const APP_DESCRIPTION = 'A Biblioteca Definitiva de Prompts de IA para Profissionais Brasileiros';
export const APP_TAGLINE = 'Prompts profissionais. Resultados extraordinários.';

export const AI_MODELS = [
  { id: 'chatgpt', name: 'ChatGPT', icon: '🤖' },
  { id: 'claude', name: 'Claude', icon: '🧠' },
  { id: 'gemini', name: 'Gemini', icon: '✨' },
  { id: 'copilot', name: 'Copilot', icon: '🐙' },
  { id: 'cursor', name: 'Cursor', icon: '🧭' },
  { id: 'veo', name: 'Veo', icon: '🚀' },
  { id: 'flux', name: 'Flux', icon: '⚡' },
  { id: 'ideogram', name: 'Ideogram', icon: '🖼️' },
  { id: 'llama', name: 'Llama', icon: '🦙' },
  { id: 'midjourney', name: 'Midjourney', icon: '🎨' },
] as const;

export const PROMPT_TYPES = [
  { id: 'all', name: 'Todos' },
  { id: 'simple', name: 'Simples' },
  { id: 'mega', name: 'Mega-Prompt' },
] as const;

export const SORT_OPTIONS = [
  { id: 'recent', name: 'Mais recentes' },
  { id: 'popular', name: 'Mais populares' },
  { id: 'az', name: 'A-Z' },
  { id: 'za', name: 'Z-A' },
] as const;

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'promptoteca_auth_token',
  FAVORITES: 'promptoteca_favorites',
  RECENT: 'promptoteca_recent',
} as const;
