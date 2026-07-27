import { Prompt } from '@/types';

export const techPrompts: Prompt[] = [
  // JAVASCRIPT
  {
    id: 'js_001',
    slug: 'debug-javascript-inteligente',
    title: 'Debug Inteligente de JavaScript',
    description: 'Encontra e corrige bugs no seu código JavaScript com explicações.',
    content: `Você é um engenheiro JavaScript sênior especializado em debugging.

Analise e corrija o código:

**Linguagem/Framework:** JavaScript/[React/Node/Vue/etc]
**Código com problema:**
\`\`\`javascript
[COLE SEU CÓDIGO AQUI]
\`\`\`

**Comportamento esperado:**
[O QUE DEVERIA ACONTECER]

**Comportamento atual:**
[O QUE ESTÁ ACONTECENDO]

**Erro no console (se houver):**
\`\`\`
[COLE O ERRO]
\`\`\`

**ANÁLISE:**

### 1. DIAGNÓSTICO
- Identifique a causa raiz
- Explique por que o bug ocorre
- Aponte exatamente a linha/trecho problemático

### 2. SOLUÇÃO
\`\`\`javascript
// Código corrigido com comentários
\`\`\`

Explique cada mudança feita.

### 3. CÓDIGO ANTES vs DEPOIS
Comparação visual das mudanças.

### 4. PREVENÇÃO
- Como evitar esse tipo de bug
- Boas práticas relacionadas
- Ferramentas/linters que ajudam

### 5. TESTES
\`\`\`javascript
// Testes sugeridos para garantir que funciona
\`\`\`

### 6. CONCEITO
Explique o conceito JavaScript por trás do problema (closure, hoisting, async, etc.)`,
    categoryId: 'javascript',
    type: 'simple',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['debug', 'javascript', 'bug fix', 'código'],
    copyCount: 3421,
    isNew: false,
    isFeatured: true,
    order: 1
  },
  {
    id: 'js_002',
    slug: 'converter-callback-async-await',
    title: 'Converter Callbacks para Async/Await',
    description: 'Moderniza código JavaScript convertendo callbacks para async/await.',
    content: `Você é especialista em JavaScript moderno e patterns assíncronos.

Converta o código de callbacks/promises para async/await:

**Código atual (com callbacks ou .then):**
\`\`\`javascript
[COLE SEU CÓDIGO]
\`\`\`

**ENTREGUE:**

### 1. ANÁLISE DO CÓDIGO ATUAL
- Identifique os padrões assíncronos usados
- Pontos de melhoria
- Potenciais problemas (callback hell, etc)

### 2. CÓDIGO CONVERTIDO
\`\`\`javascript
// Versão com async/await
// Com comentários explicando as mudanças
\`\`\`

### 3. TRATAMENTO DE ERROS
\`\`\`javascript
// Versão com try/catch apropriado
\`\`\`

### 4. VERSÃO OTIMIZADA
\`\`\`javascript
// Se houver operações paralelas, use Promise.all
// Otimizações de performance
\`\`\`

### 5. COMPARAÇÃO
| Aspecto | Antes | Depois |
|---------|-------|--------|
| Legibilidade | | |
| Tratamento de erro | | |
| Performance | | |
| Linhas de código | | |

### 6. EDGE CASES
- Como lidar com erros específicos
- Timeouts
- Cancelamento (se aplicável)

### 7. TESTES
\`\`\`javascript
// Testes para validar a conversão
\`\`\``,
    categoryId: 'javascript',
    type: 'simple',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['async', 'await', 'javascript', 'modernização'],
    copyCount: 1876,
    isNew: false,
    isFeatured: false,
    order: 2
  },

  // PYTHON
  {
    id: 'py_001',
    slug: 'script-automacao-python',
    title: 'Script de Automação em Python',
    description: 'Cria scripts Python para automatizar tarefas repetitivas.',
    content: `Você é um desenvolvedor Python especializado em automação.

Crie um script de automação para:

**Tarefa a automatizar:** [DESCREVA A TAREFA]
**Frequência:** [ÚNICA/DIÁRIA/SEMANAL/EVENTO]
**Input esperado:** [ARQUIVOS/DADOS/APIs]
**Output esperado:** [RESULTADO FINAL]
**Ambiente:** [LOCAL/SERVIDOR/CLOUD]

**Requisitos especiais:**
- [REQUISITO 1]
- [REQUISITO 2]

**ENTREGUE:**

### 1. ANÁLISE DA TAREFA
- Passos manuais atuais
- O que pode ser automatizado
- Dependências necessárias

### 2. ARQUITETURA
\`\`\`
Diagrama simples do fluxo
\`\`\`

### 3. CÓDIGO PRINCIPAL
\`\`\`python
#!/usr/bin/env python3
"""
Descrição do script
Autor: [Nome]
Data: [Data]
"""

import módulos

# Configurações
CONFIG = {
    # Parâmetros configuráveis
}

def main():
    """Função principal"""
    pass

if __name__ == "__main__":
    main()
\`\`\`

### 4. REQUIREMENTS
\`\`\`txt
# requirements.txt
biblioteca==versao
\`\`\`

### 5. COMO USAR
\`\`\`bash
# Instruções de instalação e uso
\`\`\`

### 6. LOGS E MONITORAMENTO
- Como acompanhar execução
- Tratamento de erros
- Notificações (email, slack)

### 7. AGENDAMENTO
\`\`\`bash
# Cron job ou alternativa
\`\`\`

### 8. MELHORIAS FUTURAS
- O que pode ser adicionado
- Otimizações possíveis`,
    categoryId: 'python',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['python', 'automação', 'script', 'produtividade'],
    copyCount: 2654,
    isNew: false,
    isFeatured: true,
    order: 1
  },
  {
    id: 'py_002',
    slug: 'analise-dados-pandas',
    title: 'Análise de Dados com Pandas',
    description: 'Cria análises de dados profissionais usando Pandas.',
    content: `Você é um data analyst especializado em Python e Pandas.

Crie uma análise de dados para:

**Descrição dos dados:** [O QUE OS DADOS CONTÊM]
**Objetivo da análise:** [O QUE QUER DESCOBRIR]
**Formato do arquivo:** [CSV/EXCEL/JSON/SQL]

**Colunas disponíveis:**
- [COLUNA 1]: [tipo e descrição]
- [COLUNA 2]: [tipo e descrição]
- [COLUNA 3]: [tipo e descrição]

**Perguntas a responder:**
1. [PERGUNTA 1]
2. [PERGUNTA 2]
3. [PERGUNTA 3]

**ANÁLISE COMPLETA:**

### 1. IMPORTAÇÃO E SETUP
\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Configurações
pd.set_option('display.max_columns', None)
sns.set_style('whitegrid')

# Leitura dos dados
df = pd.read_csv('arquivo.csv')
\`\`\`

### 2. EXPLORAÇÃO INICIAL
\`\`\`python
# Visão geral dos dados
print(df.shape)
print(df.info())
print(df.describe())
print(df.head())

# Valores nulos
print(df.isnull().sum())

# Duplicatas
print(df.duplicated().sum())
\`\`\`

### 3. LIMPEZA DE DADOS
\`\`\`python
# Tratamento de valores nulos
# Remoção de duplicatas
# Correção de tipos
# Tratamento de outliers
\`\`\`

### 4. ANÁLISES ESPECÍFICAS
Para cada pergunta:
\`\`\`python
# Pergunta 1: [pergunta]
# Código da análise
# Visualização se necessário
\`\`\`

### 5. VISUALIZAÇÕES
\`\`\`python
# Gráficos relevantes
fig, axes = plt.subplots(2, 2, figsize=(12, 10))
# ...
\`\`\`

### 6. INSIGHTS
- Insight 1
- Insight 2
- Insight 3

### 7. RECOMENDAÇÕES
Baseado nos dados, recomendo:
1. [Recomendação 1]
2. [Recomendação 2]

### 8. CÓDIGO COMPLETO
Jupyter notebook exportável com todas as análises.`,
    categoryId: 'python',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['pandas', 'data analysis', 'python', 'dados'],
    copyCount: 1987,
    isNew: false,
    isFeatured: false,
    order: 2
  },

  // REACT & NEXT.JS
  {
    id: 'react_001',
    slug: 'componente-react-typescript',
    title: 'Componente React com TypeScript',
    description: 'Cria componentes React profissionais com TypeScript.',
    content: `Você é um desenvolvedor React/TypeScript sênior.

Crie um componente React para:

**Tipo de componente:** [BOTÃO/FORMULÁRIO/CARD/MODAL/TABELA/etc]
**Funcionalidade:** [O QUE O COMPONENTE FAZ]
**Variantes:** [VARIAÇÕES NECESSÁRIAS]
**Estado necessário:** [ESTADOS DO COMPONENTE]
**Props esperadas:** [DADOS QUE RECEBE]
**Estilização:** [TAILWIND/CSS MODULES/STYLED]

**ENTREGUE:**

### 1. COMPONENTE PRINCIPAL
\`\`\`tsx
// Component.tsx
import { useState, useCallback } from 'react';

interface ComponentProps {
  // Props tipadas
}

export function Component({ prop1, prop2 }: ComponentProps) {
  // Estado
  const [state, setState] = useState();
  
  // Handlers
  const handleClick = useCallback(() => {
    // lógica
  }, []);
  
  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
\`\`\`

### 2. TIPOS
\`\`\`tsx
// types.ts
export interface ComponentProps {
  // Interface completa
}

export type ComponentVariant = 'primary' | 'secondary';
\`\`\`

### 3. TESTES
\`\`\`tsx
// Component.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Component } from './Component';

describe('Component', () => {
  it('renders correctly', () => {
    // teste
  });
  
  it('handles click', () => {
    // teste
  });
});
\`\`\`

### 4. STORYBOOK (opcional)
\`\`\`tsx
// Component.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Component } from './Component';

const meta: Meta<typeof Component> = {
  title: 'Components/Component',
  component: Component,
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    // props
  },
};
\`\`\`

### 5. ESTILOS
\`\`\`tsx
// Se usar Tailwind: classes documentadas
// Se usar CSS Modules: arquivo .module.css
// Se usar Styled: styled-components
\`\`\`

### 6. HOOKS CUSTOMIZADOS (se necessário)
\`\`\`tsx
// useComponent.ts
export function useComponent() {
  // lógica reutilizável
}
\`\`\`

### 7. USO
\`\`\`tsx
// Exemplo de como usar o componente
import { Component } from './Component';

function Page() {
  return <Component prop1="value" />;
}
\`\`\``,
    categoryId: 'react-next',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['react', 'typescript', 'componente', 'frontend'],
    copyCount: 2876,
    isNew: false,
    isFeatured: true,
    order: 1
  },
  {
    id: 'react_002',
    slug: 'api-route-nextjs',
    title: 'API Route Next.js com Validação',
    description: 'Cria API routes robustas para Next.js.',
    content: `Você é desenvolvedor Next.js especializado em API routes.

Crie uma API route para:

**Método:** [GET/POST/PUT/DELETE]
**Recurso:** [O QUE A API GERENCIA]
**Funcionalidade:** [O QUE FAZ]
**Autenticação:** [SIM/NÃO - TIPO]
**Banco de dados:** [TIPO - Prisma/Drizzle/etc]

**Dados esperados:**
\`\`\`json
{
  // Schema do input
}
\`\`\`

**ENTREGUE:**

### 1. API ROUTE
\`\`\`typescript
// app/api/resource/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Validar autenticação
    // Validar input
    // Executar lógica
    // Retornar resposta
    
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Mensagem de erro' },
      { status: 500 }
    );
  }
}
\`\`\`

### 2. VALIDAÇÃO COM ZOD
\`\`\`typescript
// lib/validations/resource.ts
import { z } from 'zod';

export const createResourceSchema = z.object({
  // Schema de validação
});

export type CreateResourceInput = z.infer<typeof createResourceSchema>;
\`\`\`

### 3. MIDDLEWARE (se necessário)
\`\`\`typescript
// middleware.ts ou lib/auth.ts
export async function validateAuth(request: NextRequest) {
  // Lógica de autenticação
}
\`\`\`

### 4. TYPES
\`\`\`typescript
// types/api.ts
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
\`\`\`

### 5. TRATAMENTO DE ERROS
\`\`\`typescript
// lib/errors.ts
export class ApiError extends Error {
  constructor(
    public message: string,
    public status: number
  ) {
    super(message);
  }
}
\`\`\`

### 6. TESTE DA API
\`\`\`typescript
// __tests__/api/resource.test.ts
describe('POST /api/resource', () => {
  it('creates resource successfully', async () => {
    // teste
  });
  
  it('returns 400 for invalid input', async () => {
    // teste
  });
});
\`\`\`

### 7. DOCUMENTAÇÃO
Endpoint: POST /api/resource
Headers: Authorization: Bearer {token}
Body: { ... }
Response: { ... }`,
    categoryId: 'react-next',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['nextjs', 'api', 'backend', 'typescript'],
    copyCount: 1654,
    isNew: false,
    isFeatured: false,
    order: 2
  },

  // HTML & CSS
  {
    id: 'css_001',
    slug: 'layout-responsivo-flexbox-grid',
    title: 'Layout Responsivo com Flexbox/Grid',
    description: 'Cria layouts responsivos modernos com CSS.',
    content: `Você é especialista em CSS moderno e layouts responsivos.

Crie um layout responsivo para:

**Tipo de layout:** [HERO/GRID/SIDEBAR/FOOTER/NAVBAR/CARD]
**Descrição:** [COMO DEVE SER]
**Breakpoints:** [MOBILE/TABLET/DESKTOP]
**Elementos:** [O QUE CONTÉM]

**Referência visual:** [DESCRIÇÃO OU LINK]

**ENTREGUE:**

### 1. HTML SEMÂNTICO
\`\`\`html
<!-- Estrutura semântica e acessível -->
<section class="layout-name">
  <div class="container">
    <!-- elementos -->
  </div>
</section>
\`\`\`

### 2. CSS COM VARIÁVEIS
\`\`\`css
/* Variáveis */
:root {
  --color-primary: #...;
  --spacing-base: 1rem;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
}

/* Base */
.layout-name {
  /* estilos base */
}

/* Mobile First */
.container {
  display: grid;
  /* ou flexbox */
}

/* Tablet */
@media (min-width: 768px) {
  /* adaptações */
}

/* Desktop */
@media (min-width: 1024px) {
  /* adaptações */
}
\`\`\`

### 3. VERSÃO TAILWIND
\`\`\`html
<!-- Se preferir Tailwind -->
<section class="py-16 px-4 md:px-8 lg:px-16">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- elementos -->
  </div>
</section>
\`\`\`

### 4. ACESSIBILIDADE
- ARIA labels necessários
- Ordem de foco
- Contraste de cores
- Skip links se necessário

### 5. PERFORMANCE
- Como otimizar carregamento
- Lazy loading se aplicável
- Imagens responsivas

### 6. PREVIEW
Descrição de como fica em cada breakpoint:
- Mobile (320px - 767px): ...
- Tablet (768px - 1023px): ...
- Desktop (1024px+): ...`,
    categoryId: 'html-css',
    type: 'simple',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['css', 'responsivo', 'flexbox', 'grid'],
    copyCount: 2341,
    isNew: false,
    isFeatured: false,
    order: 1
  },

  // SQL
  {
    id: 'sql_001',
    slug: 'query-sql-otimizada',
    title: 'Query SQL Otimizada',
    description: 'Cria queries SQL eficientes e otimizadas.',
    content: `Você é um DBA com 15 anos de experiência em otimização de queries.

Crie uma query SQL para:

**Banco de dados:** [MySQL/PostgreSQL/SQL Server/SQLite]
**Objetivo:** [O QUE A QUERY DEVE RETORNAR]
**Tabelas envolvidas:** [LISTE AS TABELAS]
**Estrutura das tabelas:**
\`\`\`sql
-- Cole o CREATE TABLE ou descreva
\`\`\`

**Filtros necessários:** [CONDIÇÕES]
**Ordenação:** [COMO ORDENAR]
**Paginação:** [SIM/NÃO]

**ENTREGUE:**

### 1. QUERY PRINCIPAL
\`\`\`sql
-- Query comentada
SELECT 
    campo1,
    campo2
FROM tabela1 t1
JOIN tabela2 t2 ON t1.id = t2.fk_id
WHERE condição
ORDER BY campo
LIMIT offset, quantidade;
\`\`\`

### 2. EXPLICAÇÃO
- Por que essa estrutura
- JOINs utilizados
- Índices recomendados

### 3. EXPLAIN ANALYZE
\`\`\`sql
EXPLAIN ANALYZE [query];
-- Interpretação do resultado
\`\`\`

### 4. ÍNDICES RECOMENDADOS
\`\`\`sql
-- Índices para otimizar
CREATE INDEX idx_nome ON tabela(campo);
\`\`\`

### 5. ALTERNATIVAS
\`\`\`sql
-- Versão com subquery
-- Versão com CTE
-- Versão com window functions (se aplicável)
\`\`\`

### 6. PERFORMANCE
- Estimativa de tempo
- Otimizações aplicadas
- O que evitar

### 7. SEGURANÇA
- Como usar com prepared statements
- Evitar SQL injection`,
    categoryId: 'sql',
    type: 'simple',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['sql', 'query', 'banco de dados', 'otimização'],
    copyCount: 1876,
    isNew: false,
    isFeatured: true,
    order: 1
  },

  // DEBUG
  {
    id: 'debug_001',
    slug: 'analise-erro-stack-trace',
    title: 'Análise de Stack Trace e Erros',
    description: 'Analisa erros e stack traces para encontrar soluções.',
    content: `Você é um especialista em debugging com 20 anos de experiência.

Analise este erro:

**Linguagem/Framework:** [TECNOLOGIA]
**Stack trace completo:**
\`\`\`
[COLE O STACK TRACE]
\`\`\`

**Contexto:**
- O que você estava fazendo quando ocorreu
- Funcionava antes? O que mudou?
- Ambiente (dev/prod)
- Versões relevantes

**Código relacionado (se possível):**
\`\`\`
[CÓDIGO]
\`\`\`

**ANÁLISE:**

### 1. DIAGNÓSTICO RÁPIDO
- Tipo de erro
- Linha exata do problema
- Causa mais provável (90%)

### 2. ANÁLISE DO STACK TRACE
Leitura linha por linha:
\`\`\`
linha 1: o que significa
linha 2: o que significa
...
\`\`\`

### 3. CAUSAS POSSÍVEIS
Por ordem de probabilidade:
1. [Causa 1] - 60%
2. [Causa 2] - 25%
3. [Causa 3] - 15%

### 4. SOLUÇÕES

**Para causa 1:**
\`\`\`
// código de solução
\`\`\`

**Para causa 2:**
\`\`\`
// código de solução
\`\`\`

### 5. COMO DEBUGAR
Passos para confirmar a causa:
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

### 6. PREVENÇÃO
- Como evitar no futuro
- Testes a adicionar
- Monitoramento sugerido

### 7. RECURSOS
- Documentação relevante
- Issues similares (GitHub, Stack Overflow)`,
    categoryId: 'debug',
    type: 'simple',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['debug', 'erro', 'stack trace', 'solução'],
    copyCount: 2543,
    isNew: false,
    isFeatured: false,
    order: 1
  },
];
