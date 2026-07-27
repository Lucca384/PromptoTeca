import { Prompt } from '@/types';

export const bulkPrompts: Prompt[] = [
  {
    id: "bulk_001",
    slug: "bulk-prompt-001",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 1",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto PitchMaster, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 1): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 36,
    isNew: true,
    isFeatured: false,
    order: 1,
  },
  {
    id: "bulk_002",
    slug: "bulk-prompt-002",
    title: "Gerador de Migração SQL Otimizada para Índices — 2",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 2): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 25,
    isNew: true,
    isFeatured: false,
    order: 2,
  },
  {
    id: "bulk_003",
    slug: "bulk-prompt-003",
    title: "Refatorador de Componente React com Hooks e Performance — 3",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 3): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 6,
    isNew: true,
    isFeatured: false,
    order: 3,
  },
  {
    id: "bulk_004",
    slug: "bulk-prompt-004",
    title: "Gerador de Migração SQL Otimizada para Índices — 4",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 4): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 31,
    isNew: true,
    isFeatured: false,
    order: 4,
  },
  {
    id: "bulk_005",
    slug: "bulk-prompt-005",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 5",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto AdPilot. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 5): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 21,
    isNew: true,
    isFeatured: false,
    order: 5,
  },
  {
    id: "bulk_006",
    slug: "bulk-prompt-006",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 6",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado EduTrack. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 6): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 32,
    isNew: true,
    isFeatured: false,
    order: 6,
  },
  {
    id: "bulk_007",
    slug: "bulk-prompt-007",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 7",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado SceneForge. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 7): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 30,
    isNew: true,
    isFeatured: false,
    order: 7,
  },
  {
    id: "bulk_008",
    slug: "bulk-prompt-008",
    title: "Refatorador de Componente React com Hooks e Performance — 8",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 8): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 46,
    isNew: true,
    isFeatured: false,
    order: 8,
  },
  {
    id: "bulk_009",
    slug: "bulk-prompt-009",
    title: "Gerador de Migração SQL Otimizada para Índices — 9",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 9): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 3,
    isNew: true,
    isFeatured: false,
    order: 9,
  },
  {
    id: "bulk_010",
    slug: "bulk-prompt-010",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 10",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado NutriPlan. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 10): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 28,
    isNew: true,
    isFeatured: false,
    order: 10,
  },
  {
    id: "bulk_011",
    slug: "bulk-prompt-011",
    title: "Gerador de Migração SQL Otimizada para Índices — 11",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 11): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 23,
    isNew: true,
    isFeatured: false,
    order: 11,
  },
  {
    id: "bulk_012",
    slug: "bulk-prompt-012",
    title: "Refatorador de Componente React com Hooks e Performance — 12",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 12): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 7,
    isNew: true,
    isFeatured: false,
    order: 12,
  },
  {
    id: "bulk_013",
    slug: "bulk-prompt-013",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 13",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado PitchMaster. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 13): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 46,
    isNew: true,
    isFeatured: false,
    order: 13,
  },
  {
    id: "bulk_014",
    slug: "bulk-prompt-014",
    title: "Refatorador de Componente React com Hooks e Performance — 14",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 14): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 19,
    isNew: true,
    isFeatured: false,
    order: 14,
  },
  {
    id: "bulk_015",
    slug: "bulk-prompt-015",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 15",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado NutriPlan. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 15): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 36,
    isNew: true,
    isFeatured: false,
    order: 15,
  },
  {
    id: "bulk_016",
    slug: "bulk-prompt-016",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 16",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto DesignCore, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 16): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 23,
    isNew: true,
    isFeatured: false,
    order: 16,
  },
  {
    id: "bulk_017",
    slug: "bulk-prompt-017",
    title: "Refatorador de Componente React com Hooks e Performance — 17",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 17): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 50,
    isNew: true,
    isFeatured: false,
    order: 17,
  },
  {
    id: "bulk_018",
    slug: "bulk-prompt-018",
    title: "Refatorador de Componente React com Hooks e Performance — 18",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 18): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 28,
    isNew: true,
    isFeatured: false,
    order: 18,
  },
  {
    id: "bulk_019",
    slug: "bulk-prompt-019",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 19",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado Brandly. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 19): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 24,
    isNew: true,
    isFeatured: false,
    order: 19,
  },
  {
    id: "bulk_020",
    slug: "bulk-prompt-020",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 20",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto Brandly. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 20): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 15,
    isNew: true,
    isFeatured: false,
    order: 20,
  },
  {
    id: "bulk_021",
    slug: "bulk-prompt-021",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 21",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado AudioLine. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 21): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 47,
    isNew: true,
    isFeatured: false,
    order: 21,
  },
  {
    id: "bulk_022",
    slug: "bulk-prompt-022",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 22",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado AudioLine. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 22): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 38,
    isNew: true,
    isFeatured: false,
    order: 22,
  },
  {
    id: "bulk_023",
    slug: "bulk-prompt-023",
    title: "Gerador de Migração SQL Otimizada para Índices — 23",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 23): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 44,
    isNew: true,
    isFeatured: false,
    order: 23,
  },
  {
    id: "bulk_024",
    slug: "bulk-prompt-024",
    title: "Gerador de Migração SQL Otimizada para Índices — 24",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 24): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 22,
    isNew: true,
    isFeatured: false,
    order: 24,
  },
  {
    id: "bulk_025",
    slug: "bulk-prompt-025",
    title: "Gerador de Migração SQL Otimizada para Índices — 25",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 25): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 49,
    isNew: true,
    isFeatured: true,
    order: 25,
  },
  {
    id: "bulk_026",
    slug: "bulk-prompt-026",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 26",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado ShopEase. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 26): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 21,
    isNew: true,
    isFeatured: false,
    order: 26,
  },
  {
    id: "bulk_027",
    slug: "bulk-prompt-027",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 27",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto PitchMaster, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 27): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 13,
    isNew: true,
    isFeatured: false,
    order: 27,
  },
  {
    id: "bulk_028",
    slug: "bulk-prompt-028",
    title: "Gerador de Migração SQL Otimizada para Índices — 28",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 28): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 22,
    isNew: true,
    isFeatured: false,
    order: 28,
  },
  {
    id: "bulk_029",
    slug: "bulk-prompt-029",
    title: "Refatorador de Componente React com Hooks e Performance — 29",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 29): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 41,
    isNew: true,
    isFeatured: false,
    order: 29,
  },
  {
    id: "bulk_030",
    slug: "bulk-prompt-030",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 30",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto BuildStream, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 30): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 3,
    isNew: true,
    isFeatured: false,
    order: 30,
  },
  {
    id: "bulk_031",
    slug: "bulk-prompt-031",
    title: "Refatorador de Componente React com Hooks e Performance — 31",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 31): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 5,
    isNew: true,
    isFeatured: false,
    order: 31,
  },
  {
    id: "bulk_032",
    slug: "bulk-prompt-032",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 32",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto SocialSpark, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 32): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 13,
    isNew: true,
    isFeatured: false,
    order: 32,
  },
  {
    id: "bulk_033",
    slug: "bulk-prompt-033",
    title: "Refatorador de Componente React com Hooks e Performance — 33",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 33): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 26,
    isNew: true,
    isFeatured: false,
    order: 33,
  },
  {
    id: "bulk_034",
    slug: "bulk-prompt-034",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 34",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado FinanceFlow. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 34): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 14,
    isNew: true,
    isFeatured: false,
    order: 34,
  },
  {
    id: "bulk_035",
    slug: "bulk-prompt-035",
    title: "Refatorador de Componente React com Hooks e Performance — 35",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 35): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 34,
    isNew: true,
    isFeatured: false,
    order: 35,
  },
  {
    id: "bulk_036",
    slug: "bulk-prompt-036",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 36",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado BuildStream. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 36): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 40,
    isNew: true,
    isFeatured: false,
    order: 36,
  },
  {
    id: "bulk_037",
    slug: "bulk-prompt-037",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 37",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado Prodify. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 37): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 24,
    isNew: true,
    isFeatured: false,
    order: 37,
  },
  {
    id: "bulk_038",
    slug: "bulk-prompt-038",
    title: "Refatorador de Componente React com Hooks e Performance — 38",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 38): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 43,
    isNew: true,
    isFeatured: false,
    order: 38,
  },
  {
    id: "bulk_039",
    slug: "bulk-prompt-039",
    title: "Refatorador de Componente React com Hooks e Performance — 39",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 39): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 27,
    isNew: true,
    isFeatured: false,
    order: 39,
  },
  {
    id: "bulk_040",
    slug: "bulk-prompt-040",
    title: "Refatorador de Componente React com Hooks e Performance — 40",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 40): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 32,
    isNew: true,
    isFeatured: false,
    order: 40,
  },
  {
    id: "bulk_041",
    slug: "bulk-prompt-041",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 41",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto Gridly. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 41): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 49,
    isNew: true,
    isFeatured: false,
    order: 41,
  },
  {
    id: "bulk_042",
    slug: "bulk-prompt-042",
    title: "Gerador de Migração SQL Otimizada para Índices — 42",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 42): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 5,
    isNew: true,
    isFeatured: false,
    order: 42,
  },
  {
    id: "bulk_043",
    slug: "bulk-prompt-043",
    title: "Gerador de Migração SQL Otimizada para Índices — 43",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 43): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 8,
    isNew: true,
    isFeatured: false,
    order: 43,
  },
  {
    id: "bulk_044",
    slug: "bulk-prompt-044",
    title: "Refatorador de Componente React com Hooks e Performance — 44",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 44): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 44,
    isNew: true,
    isFeatured: false,
    order: 44,
  },
  {
    id: "bulk_045",
    slug: "bulk-prompt-045",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 45",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado VendoPro. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 45): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 15,
    isNew: true,
    isFeatured: false,
    order: 45,
  },
  {
    id: "bulk_046",
    slug: "bulk-prompt-046",
    title: "Gerador de Migração SQL Otimizada para Índices — 46",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 46): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 8,
    isNew: true,
    isFeatured: false,
    order: 46,
  },
  {
    id: "bulk_047",
    slug: "bulk-prompt-047",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 47",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado FinanceFlow. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 47): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 17,
    isNew: true,
    isFeatured: false,
    order: 47,
  },
  {
    id: "bulk_048",
    slug: "bulk-prompt-048",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 48",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto EchoAI. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 48): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 2,
    isNew: true,
    isFeatured: false,
    order: 48,
  },
  {
    id: "bulk_049",
    slug: "bulk-prompt-049",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 49",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto Prodify, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 49): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 39,
    isNew: true,
    isFeatured: false,
    order: 49,
  },
  {
    id: "bulk_050",
    slug: "bulk-prompt-050",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 50",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto Insightly, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 50): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 12,
    isNew: true,
    isFeatured: true,
    order: 50,
  },
  {
    id: "bulk_051",
    slug: "bulk-prompt-051",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 51",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto FinanceFlow, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 51): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 11,
    isNew: true,
    isFeatured: false,
    order: 51,
  },
  {
    id: "bulk_052",
    slug: "bulk-prompt-052",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 52",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto EduTrack, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 52): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 34,
    isNew: true,
    isFeatured: false,
    order: 52,
  },
  {
    id: "bulk_053",
    slug: "bulk-prompt-053",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 53",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto SceneForge. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 53): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 42,
    isNew: true,
    isFeatured: false,
    order: 53,
  },
  {
    id: "bulk_054",
    slug: "bulk-prompt-054",
    title: "Refatorador de Componente React com Hooks e Performance — 54",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 54): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 35,
    isNew: true,
    isFeatured: false,
    order: 54,
  },
  {
    id: "bulk_055",
    slug: "bulk-prompt-055",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 55",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto EchoAI. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 55): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 5,
    isNew: true,
    isFeatured: false,
    order: 55,
  },
  {
    id: "bulk_056",
    slug: "bulk-prompt-056",
    title: "Gerador de Migração SQL Otimizada para Índices — 56",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 56): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 38,
    isNew: true,
    isFeatured: false,
    order: 56,
  },
  {
    id: "bulk_057",
    slug: "bulk-prompt-057",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 57",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado TravelMate. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 57): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 11,
    isNew: true,
    isFeatured: false,
    order: 57,
  },
  {
    id: "bulk_058",
    slug: "bulk-prompt-058",
    title: "Refatorador de Componente React com Hooks e Performance — 58",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 58): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 38,
    isNew: true,
    isFeatured: false,
    order: 58,
  },
  {
    id: "bulk_059",
    slug: "bulk-prompt-059",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 59",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto LawAssist. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 59): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 23,
    isNew: true,
    isFeatured: false,
    order: 59,
  },
  {
    id: "bulk_060",
    slug: "bulk-prompt-060",
    title: "Refatorador de Componente React com Hooks e Performance — 60",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 60): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 9,
    isNew: true,
    isFeatured: false,
    order: 60,
  },
  {
    id: "bulk_061",
    slug: "bulk-prompt-061",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 61",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado FinanceFlow. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 61): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 26,
    isNew: true,
    isFeatured: false,
    order: 61,
  },
  {
    id: "bulk_062",
    slug: "bulk-prompt-062",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 62",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto TravelMate. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 62): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 3,
    isNew: true,
    isFeatured: false,
    order: 62,
  },
  {
    id: "bulk_063",
    slug: "bulk-prompt-063",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 63",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto TravelMate. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 63): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 36,
    isNew: true,
    isFeatured: false,
    order: 63,
  },
  {
    id: "bulk_064",
    slug: "bulk-prompt-064",
    title: "Gerador de Migração SQL Otimizada para Índices — 64",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 64): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 39,
    isNew: true,
    isFeatured: false,
    order: 64,
  },
  {
    id: "bulk_065",
    slug: "bulk-prompt-065",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 65",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto BuildStream, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 65): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 5,
    isNew: true,
    isFeatured: false,
    order: 65,
  },
  {
    id: "bulk_066",
    slug: "bulk-prompt-066",
    title: "Gerador de Migração SQL Otimizada para Índices — 66",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 66): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 10,
    isNew: true,
    isFeatured: false,
    order: 66,
  },
  {
    id: "bulk_067",
    slug: "bulk-prompt-067",
    title: "Gerador de Migração SQL Otimizada para Índices — 67",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 67): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 49,
    isNew: true,
    isFeatured: false,
    order: 67,
  },
  {
    id: "bulk_068",
    slug: "bulk-prompt-068",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 68",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto FlowMax. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 68): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 19,
    isNew: true,
    isFeatured: false,
    order: 68,
  },
  {
    id: "bulk_069",
    slug: "bulk-prompt-069",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 69",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto Promptly. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 69): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 48,
    isNew: true,
    isFeatured: false,
    order: 69,
  },
  {
    id: "bulk_070",
    slug: "bulk-prompt-070",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 70",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto LawAssist, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 70): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 4,
    isNew: true,
    isFeatured: false,
    order: 70,
  },
  {
    id: "bulk_071",
    slug: "bulk-prompt-071",
    title: "Refatorador de Componente React com Hooks e Performance — 71",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 71): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 43,
    isNew: true,
    isFeatured: false,
    order: 71,
  },
  {
    id: "bulk_072",
    slug: "bulk-prompt-072",
    title: "Refatorador de Componente React com Hooks e Performance — 72",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 72): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 46,
    isNew: true,
    isFeatured: false,
    order: 72,
  },
  {
    id: "bulk_073",
    slug: "bulk-prompt-073",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 73",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto EchoAI, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 73): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 44,
    isNew: true,
    isFeatured: false,
    order: 73,
  },
  {
    id: "bulk_074",
    slug: "bulk-prompt-074",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 74",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado NutriPlan. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 74): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 5,
    isNew: true,
    isFeatured: false,
    order: 74,
  },
  {
    id: "bulk_075",
    slug: "bulk-prompt-075",
    title: "Refatorador de Componente React com Hooks e Performance — 75",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 75): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 1,
    isNew: true,
    isFeatured: true,
    order: 75,
  },
  {
    id: "bulk_076",
    slug: "bulk-prompt-076",
    title: "Refatorador de Componente React com Hooks e Performance — 76",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 76): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 12,
    isNew: true,
    isFeatured: false,
    order: 76,
  },
  {
    id: "bulk_077",
    slug: "bulk-prompt-077",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 77",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto DesignCore, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 77): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 8,
    isNew: true,
    isFeatured: false,
    order: 77,
  },
  {
    id: "bulk_078",
    slug: "bulk-prompt-078",
    title: "Gerador de Migração SQL Otimizada para Índices — 78",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 78): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 46,
    isNew: true,
    isFeatured: false,
    order: 78,
  },
  {
    id: "bulk_079",
    slug: "bulk-prompt-079",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 79",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto ShopEase. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 79): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 26,
    isNew: true,
    isFeatured: false,
    order: 79,
  },
  {
    id: "bulk_080",
    slug: "bulk-prompt-080",
    title: "Gerador de Migração SQL Otimizada para Índices — 80",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 80): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 13,
    isNew: true,
    isFeatured: false,
    order: 80,
  },
  {
    id: "bulk_081",
    slug: "bulk-prompt-081",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 81",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto Brandly. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 81): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 4,
    isNew: true,
    isFeatured: false,
    order: 81,
  },
  {
    id: "bulk_082",
    slug: "bulk-prompt-082",
    title: "Refatorador de Componente React com Hooks e Performance — 82",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 82): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 5,
    isNew: true,
    isFeatured: false,
    order: 82,
  },
  {
    id: "bulk_083",
    slug: "bulk-prompt-083",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 83",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto BuildStream, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 83): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 14,
    isNew: true,
    isFeatured: false,
    order: 83,
  },
  {
    id: "bulk_084",
    slug: "bulk-prompt-084",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 84",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto TravelMate, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 84): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 0,
    isNew: true,
    isFeatured: false,
    order: 84,
  },
  {
    id: "bulk_085",
    slug: "bulk-prompt-085",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 85",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto CopyRocket. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 85): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 28,
    isNew: true,
    isFeatured: false,
    order: 85,
  },
  {
    id: "bulk_086",
    slug: "bulk-prompt-086",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 86",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado CodeCraft. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 86): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 1,
    isNew: true,
    isFeatured: false,
    order: 86,
  },
  {
    id: "bulk_087",
    slug: "bulk-prompt-087",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 87",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado SocialSpark. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 87): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 46,
    isNew: true,
    isFeatured: false,
    order: 87,
  },
  {
    id: "bulk_088",
    slug: "bulk-prompt-088",
    title: "Gerador de Migração SQL Otimizada para Índices — 88",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 88): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 20,
    isNew: true,
    isFeatured: false,
    order: 88,
  },
  {
    id: "bulk_089",
    slug: "bulk-prompt-089",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 89",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto GrowthLab. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 89): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 10,
    isNew: true,
    isFeatured: false,
    order: 89,
  },
  {
    id: "bulk_090",
    slug: "bulk-prompt-090",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 90",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado DataSense. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 90): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 21,
    isNew: true,
    isFeatured: false,
    order: 90,
  },
  {
    id: "bulk_091",
    slug: "bulk-prompt-091",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 91",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado EchoAI. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 91): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 34,
    isNew: true,
    isFeatured: false,
    order: 91,
  },
  {
    id: "bulk_092",
    slug: "bulk-prompt-092",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 92",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto MetricHub. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 92): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 39,
    isNew: true,
    isFeatured: false,
    order: 92,
  },
  {
    id: "bulk_093",
    slug: "bulk-prompt-093",
    title: "Gerador de Migração SQL Otimizada para Índices — 93",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 93): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 29,
    isNew: true,
    isFeatured: false,
    order: 93,
  },
  {
    id: "bulk_094",
    slug: "bulk-prompt-094",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 94",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado GrowthLab. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 94): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 33,
    isNew: true,
    isFeatured: false,
    order: 94,
  },
  {
    id: "bulk_095",
    slug: "bulk-prompt-095",
    title: "Refatorador de Componente React com Hooks e Performance — 95",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 95): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 26,
    isNew: true,
    isFeatured: false,
    order: 95,
  },
  {
    id: "bulk_096",
    slug: "bulk-prompt-096",
    title: "Gerador de Migração SQL Otimizada para Índices — 96",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 96): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 15,
    isNew: true,
    isFeatured: false,
    order: 96,
  },
  {
    id: "bulk_097",
    slug: "bulk-prompt-097",
    title: "Refatorador de Componente React com Hooks e Performance — 97",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 97): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 10,
    isNew: true,
    isFeatured: false,
    order: 97,
  },
  {
    id: "bulk_098",
    slug: "bulk-prompt-098",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 98",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado HealthGuide. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 98): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 42,
    isNew: true,
    isFeatured: false,
    order: 98,
  },
  {
    id: "bulk_099",
    slug: "bulk-prompt-099",
    title: "Gerador de Migração SQL Otimizada para Índices — 99",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 99): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 42,
    isNew: true,
    isFeatured: false,
    order: 99,
  },
  {
    id: "bulk_100",
    slug: "bulk-prompt-100",
    title: "Gerador de Migração SQL Otimizada para Índices — 100",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 100): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 19,
    isNew: true,
    isFeatured: true,
    order: 100,
  },
  {
    id: "bulk_101",
    slug: "bulk-prompt-101",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 101",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto PitchMaster. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 101): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 30,
    isNew: true,
    isFeatured: false,
    order: 101,
  },
  {
    id: "bulk_102",
    slug: "bulk-prompt-102",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 102",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado ShopEase. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 102): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 17,
    isNew: true,
    isFeatured: false,
    order: 102,
  },
  {
    id: "bulk_103",
    slug: "bulk-prompt-103",
    title: "Refatorador de Componente React com Hooks e Performance — 103",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 103): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 43,
    isNew: true,
    isFeatured: false,
    order: 103,
  },
  {
    id: "bulk_104",
    slug: "bulk-prompt-104",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 104",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado GrowthLab. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 104): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 41,
    isNew: true,
    isFeatured: false,
    order: 104,
  },
  {
    id: "bulk_105",
    slug: "bulk-prompt-105",
    title: "Gerador de Migração SQL Otimizada para Índices — 105",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 105): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 2,
    isNew: true,
    isFeatured: false,
    order: 105,
  },
  {
    id: "bulk_106",
    slug: "bulk-prompt-106",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 106",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto Insightly, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 106): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 7,
    isNew: true,
    isFeatured: false,
    order: 106,
  },
  {
    id: "bulk_107",
    slug: "bulk-prompt-107",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 107",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto DataSense, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 107): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 7,
    isNew: true,
    isFeatured: false,
    order: 107,
  },
  {
    id: "bulk_108",
    slug: "bulk-prompt-108",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 108",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado SocialSpark. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 108): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 48,
    isNew: true,
    isFeatured: false,
    order: 108,
  },
  {
    id: "bulk_109",
    slug: "bulk-prompt-109",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 109",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto MindMap. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 109): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 34,
    isNew: true,
    isFeatured: false,
    order: 109,
  },
  {
    id: "bulk_110",
    slug: "bulk-prompt-110",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 110",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado HealthGuide. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 110): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 2,
    isNew: true,
    isFeatured: false,
    order: 110,
  },
  {
    id: "bulk_111",
    slug: "bulk-prompt-111",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 111",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto MindMap. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 111): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 0,
    isNew: true,
    isFeatured: false,
    order: 111,
  },
  {
    id: "bulk_112",
    slug: "bulk-prompt-112",
    title: "Gerador de Migração SQL Otimizada para Índices — 112",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 112): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 50,
    isNew: true,
    isFeatured: false,
    order: 112,
  },
  {
    id: "bulk_113",
    slug: "bulk-prompt-113",
    title: "Refatorador de Componente React com Hooks e Performance — 113",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 113): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 0,
    isNew: true,
    isFeatured: false,
    order: 113,
  },
  {
    id: "bulk_114",
    slug: "bulk-prompt-114",
    title: "Gerador de Migração SQL Otimizada para Índices — 114",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 114): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 44,
    isNew: true,
    isFeatured: false,
    order: 114,
  },
  {
    id: "bulk_115",
    slug: "bulk-prompt-115",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 115",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto Gridly, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 115): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 12,
    isNew: true,
    isFeatured: false,
    order: 115,
  },
  {
    id: "bulk_116",
    slug: "bulk-prompt-116",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 116",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto DataSense, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 116): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 26,
    isNew: true,
    isFeatured: false,
    order: 116,
  },
  {
    id: "bulk_117",
    slug: "bulk-prompt-117",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 117",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado FlowMax. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 117): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 16,
    isNew: true,
    isFeatured: false,
    order: 117,
  },
  {
    id: "bulk_118",
    slug: "bulk-prompt-118",
    title: "Gerador de Migração SQL Otimizada para Índices — 118",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 118): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 17,
    isNew: true,
    isFeatured: false,
    order: 118,
  },
  {
    id: "bulk_119",
    slug: "bulk-prompt-119",
    title: "Gerador de Migração SQL Otimizada para Índices — 119",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 119): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 7,
    isNew: true,
    isFeatured: false,
    order: 119,
  },
  {
    id: "bulk_120",
    slug: "bulk-prompt-120",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 120",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto TravelMate. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 120): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 44,
    isNew: true,
    isFeatured: false,
    order: 120,
  },
  {
    id: "bulk_121",
    slug: "bulk-prompt-121",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 121",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto DataSense, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 121): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 23,
    isNew: true,
    isFeatured: false,
    order: 121,
  },
  {
    id: "bulk_122",
    slug: "bulk-prompt-122",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 122",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto TravelMate, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 122): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 8,
    isNew: true,
    isFeatured: false,
    order: 122,
  },
  {
    id: "bulk_123",
    slug: "bulk-prompt-123",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 123",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto PitchMaster, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 123): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 33,
    isNew: true,
    isFeatured: false,
    order: 123,
  },
  {
    id: "bulk_124",
    slug: "bulk-prompt-124",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 124",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado FinanceFlow. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 124): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 29,
    isNew: true,
    isFeatured: false,
    order: 124,
  },
  {
    id: "bulk_125",
    slug: "bulk-prompt-125",
    title: "Gerador de Migração SQL Otimizada para Índices — 125",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 125): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 32,
    isNew: true,
    isFeatured: true,
    order: 125,
  },
  {
    id: "bulk_126",
    slug: "bulk-prompt-126",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 126",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto AdPilot. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 126): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 50,
    isNew: true,
    isFeatured: false,
    order: 126,
  },
  {
    id: "bulk_127",
    slug: "bulk-prompt-127",
    title: "Refatorador de Componente React com Hooks e Performance — 127",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 127): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 28,
    isNew: true,
    isFeatured: false,
    order: 127,
  },
  {
    id: "bulk_128",
    slug: "bulk-prompt-128",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 128",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto MetricHub, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 128): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 8,
    isNew: true,
    isFeatured: false,
    order: 128,
  },
  {
    id: "bulk_129",
    slug: "bulk-prompt-129",
    title: "Gerador de Migração SQL Otimizada para Índices — 129",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 129): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 45,
    isNew: true,
    isFeatured: false,
    order: 129,
  },
  {
    id: "bulk_130",
    slug: "bulk-prompt-130",
    title: "Refatorador de Componente React com Hooks e Performance — 130",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 130): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 12,
    isNew: true,
    isFeatured: false,
    order: 130,
  },
  {
    id: "bulk_131",
    slug: "bulk-prompt-131",
    title: "Gerador de Migração SQL Otimizada para Índices — 131",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 131): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 17,
    isNew: true,
    isFeatured: false,
    order: 131,
  },
  {
    id: "bulk_132",
    slug: "bulk-prompt-132",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 132",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado MetricHub. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 132): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 50,
    isNew: true,
    isFeatured: false,
    order: 132,
  },
  {
    id: "bulk_133",
    slug: "bulk-prompt-133",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 133",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado MarketPulse. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 133): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 43,
    isNew: true,
    isFeatured: false,
    order: 133,
  },
  {
    id: "bulk_134",
    slug: "bulk-prompt-134",
    title: "Gerador de Migração SQL Otimizada para Índices — 134",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 134): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 48,
    isNew: true,
    isFeatured: false,
    order: 134,
  },
  {
    id: "bulk_135",
    slug: "bulk-prompt-135",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 135",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto Promptly, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 135): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 4,
    isNew: true,
    isFeatured: false,
    order: 135,
  },
  {
    id: "bulk_136",
    slug: "bulk-prompt-136",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 136",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto GrowthLab. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 136): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 3,
    isNew: true,
    isFeatured: false,
    order: 136,
  },
  {
    id: "bulk_137",
    slug: "bulk-prompt-137",
    title: "Gerador de Migração SQL Otimizada para Índices — 137",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 137): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 46,
    isNew: true,
    isFeatured: false,
    order: 137,
  },
  {
    id: "bulk_138",
    slug: "bulk-prompt-138",
    title: "Refatorador de Componente React com Hooks e Performance — 138",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 138): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 27,
    isNew: true,
    isFeatured: false,
    order: 138,
  },
  {
    id: "bulk_139",
    slug: "bulk-prompt-139",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 139",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto BuildStream. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 139): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 18,
    isNew: true,
    isFeatured: false,
    order: 139,
  },
  {
    id: "bulk_140",
    slug: "bulk-prompt-140",
    title: "Gerador de Migração SQL Otimizada para Índices — 140",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 140): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 17,
    isNew: true,
    isFeatured: false,
    order: 140,
  },
  {
    id: "bulk_141",
    slug: "bulk-prompt-141",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 141",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto MindMap. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 141): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 46,
    isNew: true,
    isFeatured: false,
    order: 141,
  },
  {
    id: "bulk_142",
    slug: "bulk-prompt-142",
    title: "Refatorador de Componente React com Hooks e Performance — 142",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 142): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 29,
    isNew: true,
    isFeatured: false,
    order: 142,
  },
  {
    id: "bulk_143",
    slug: "bulk-prompt-143",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 143",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado TravelMate. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 143): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 9,
    isNew: true,
    isFeatured: false,
    order: 143,
  },
  {
    id: "bulk_144",
    slug: "bulk-prompt-144",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 144",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto HealthGuide, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 144): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 4,
    isNew: true,
    isFeatured: false,
    order: 144,
  },
  {
    id: "bulk_145",
    slug: "bulk-prompt-145",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 145",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado ShopEase. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 145): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 14,
    isNew: true,
    isFeatured: false,
    order: 145,
  },
  {
    id: "bulk_146",
    slug: "bulk-prompt-146",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 146",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado MindMap. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 146): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 9,
    isNew: true,
    isFeatured: false,
    order: 146,
  },
  {
    id: "bulk_147",
    slug: "bulk-prompt-147",
    title: "Gerador de Migração SQL Otimizada para Índices — 147",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 147): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 3,
    isNew: true,
    isFeatured: false,
    order: 147,
  },
  {
    id: "bulk_148",
    slug: "bulk-prompt-148",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 148",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado HealthGuide. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 148): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 4,
    isNew: true,
    isFeatured: false,
    order: 148,
  },
  {
    id: "bulk_149",
    slug: "bulk-prompt-149",
    title: "Gerador de Migração SQL Otimizada para Índices — 149",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 149): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 13,
    isNew: true,
    isFeatured: false,
    order: 149,
  },
  {
    id: "bulk_150",
    slug: "bulk-prompt-150",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 150",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto DataSense. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 150): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 41,
    isNew: true,
    isFeatured: true,
    order: 150,
  },
  {
    id: "bulk_151",
    slug: "bulk-prompt-151",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 151",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto Insightly, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 151): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 46,
    isNew: true,
    isFeatured: false,
    order: 151,
  },
  {
    id: "bulk_152",
    slug: "bulk-prompt-152",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 152",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado Gridly. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 152): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 12,
    isNew: true,
    isFeatured: false,
    order: 152,
  },
  {
    id: "bulk_153",
    slug: "bulk-prompt-153",
    title: "Gerador de Migração SQL Otimizada para Índices — 153",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 153): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 36,
    isNew: true,
    isFeatured: false,
    order: 153,
  },
  {
    id: "bulk_154",
    slug: "bulk-prompt-154",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 154",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto BuildStream. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 154): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 27,
    isNew: true,
    isFeatured: false,
    order: 154,
  },
  {
    id: "bulk_155",
    slug: "bulk-prompt-155",
    title: "Gerador de Migração SQL Otimizada para Índices — 155",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 155): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 24,
    isNew: true,
    isFeatured: false,
    order: 155,
  },
  {
    id: "bulk_156",
    slug: "bulk-prompt-156",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 156",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto SceneForge. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 156): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 11,
    isNew: true,
    isFeatured: false,
    order: 156,
  },
  {
    id: "bulk_157",
    slug: "bulk-prompt-157",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 157",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto AdPilot, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 157): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 30,
    isNew: true,
    isFeatured: false,
    order: 157,
  },
  {
    id: "bulk_158",
    slug: "bulk-prompt-158",
    title: "Gerador de Migração SQL Otimizada para Índices — 158",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 158): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 44,
    isNew: true,
    isFeatured: false,
    order: 158,
  },
  {
    id: "bulk_159",
    slug: "bulk-prompt-159",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 159",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado SceneForge. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 159): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 9,
    isNew: true,
    isFeatured: false,
    order: 159,
  },
  {
    id: "bulk_160",
    slug: "bulk-prompt-160",
    title: "Gerador de Migração SQL Otimizada para Índices — 160",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 160): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 1,
    isNew: true,
    isFeatured: false,
    order: 160,
  },
  {
    id: "bulk_161",
    slug: "bulk-prompt-161",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 161",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto FinanceFlow, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 161): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 34,
    isNew: true,
    isFeatured: false,
    order: 161,
  },
  {
    id: "bulk_162",
    slug: "bulk-prompt-162",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 162",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado LawAssist. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 162): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 48,
    isNew: true,
    isFeatured: false,
    order: 162,
  },
  {
    id: "bulk_163",
    slug: "bulk-prompt-163",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 163",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto MindMap. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 163): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 42,
    isNew: true,
    isFeatured: false,
    order: 163,
  },
  {
    id: "bulk_164",
    slug: "bulk-prompt-164",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 164",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto DesignCore, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 164): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 7,
    isNew: true,
    isFeatured: false,
    order: 164,
  },
  {
    id: "bulk_165",
    slug: "bulk-prompt-165",
    title: "Gerador de Migração SQL Otimizada para Índices — 165",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 165): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 44,
    isNew: true,
    isFeatured: false,
    order: 165,
  },
  {
    id: "bulk_166",
    slug: "bulk-prompt-166",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 166",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto HealthGuide. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 166): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 23,
    isNew: true,
    isFeatured: false,
    order: 166,
  },
  {
    id: "bulk_167",
    slug: "bulk-prompt-167",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 167",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado LawAssist. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 167): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 50,
    isNew: true,
    isFeatured: false,
    order: 167,
  },
  {
    id: "bulk_168",
    slug: "bulk-prompt-168",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 168",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto TravelMate. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 168): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 36,
    isNew: true,
    isFeatured: false,
    order: 168,
  },
  {
    id: "bulk_169",
    slug: "bulk-prompt-169",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 169",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto AdPilot. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 169): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 2,
    isNew: true,
    isFeatured: false,
    order: 169,
  },
  {
    id: "bulk_170",
    slug: "bulk-prompt-170",
    title: "Refatorador de Componente React com Hooks e Performance — 170",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 170): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 50,
    isNew: true,
    isFeatured: false,
    order: 170,
  },
  {
    id: "bulk_171",
    slug: "bulk-prompt-171",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 171",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto Gridly. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 171): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 46,
    isNew: true,
    isFeatured: false,
    order: 171,
  },
  {
    id: "bulk_172",
    slug: "bulk-prompt-172",
    title: "Gerador de Migração SQL Otimizada para Índices — 172",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 172): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 1,
    isNew: true,
    isFeatured: false,
    order: 172,
  },
  {
    id: "bulk_173",
    slug: "bulk-prompt-173",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 173",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto PitchMaster. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 173): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 11,
    isNew: true,
    isFeatured: false,
    order: 173,
  },
  {
    id: "bulk_174",
    slug: "bulk-prompt-174",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 174",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto CodeCraft. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 174): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 41,
    isNew: true,
    isFeatured: false,
    order: 174,
  },
  {
    id: "bulk_175",
    slug: "bulk-prompt-175",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 175",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto CreativeOne. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 175): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 18,
    isNew: true,
    isFeatured: true,
    order: 175,
  },
  {
    id: "bulk_176",
    slug: "bulk-prompt-176",
    title: "Gerador de Migração SQL Otimizada para Índices — 176",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 176): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 48,
    isNew: true,
    isFeatured: false,
    order: 176,
  },
  {
    id: "bulk_177",
    slug: "bulk-prompt-177",
    title: "Refatorador de Componente React com Hooks e Performance — 177",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 177): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 6,
    isNew: true,
    isFeatured: false,
    order: 177,
  },
  {
    id: "bulk_178",
    slug: "bulk-prompt-178",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 178",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado PitchMaster. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 178): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 35,
    isNew: true,
    isFeatured: false,
    order: 178,
  },
  {
    id: "bulk_179",
    slug: "bulk-prompt-179",
    title: "Gerador de Migração SQL Otimizada para Índices — 179",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 179): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 3,
    isNew: true,
    isFeatured: false,
    order: 179,
  },
  {
    id: "bulk_180",
    slug: "bulk-prompt-180",
    title: "Gerador de Migração SQL Otimizada para Índices — 180",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 180): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 29,
    isNew: true,
    isFeatured: false,
    order: 180,
  },
  {
    id: "bulk_181",
    slug: "bulk-prompt-181",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 181",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto Brandly. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 181): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 20,
    isNew: true,
    isFeatured: false,
    order: 181,
  },
  {
    id: "bulk_182",
    slug: "bulk-prompt-182",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 182",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto SceneForge, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 182): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 22,
    isNew: true,
    isFeatured: false,
    order: 182,
  },
  {
    id: "bulk_183",
    slug: "bulk-prompt-183",
    title: "Gerador de Migração SQL Otimizada para Índices — 183",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 183): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 0,
    isNew: true,
    isFeatured: false,
    order: 183,
  },
  {
    id: "bulk_184",
    slug: "bulk-prompt-184",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 184",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto Prodify, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 184): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 19,
    isNew: true,
    isFeatured: false,
    order: 184,
  },
  {
    id: "bulk_185",
    slug: "bulk-prompt-185",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 185",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto HealthGuide. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 185): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 14,
    isNew: true,
    isFeatured: false,
    order: 185,
  },
  {
    id: "bulk_186",
    slug: "bulk-prompt-186",
    title: "Refatorador de Componente React com Hooks e Performance — 186",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 186): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 38,
    isNew: true,
    isFeatured: false,
    order: 186,
  },
  {
    id: "bulk_187",
    slug: "bulk-prompt-187",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 187",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto LawAssist. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 187): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 0,
    isNew: true,
    isFeatured: false,
    order: 187,
  },
  {
    id: "bulk_188",
    slug: "bulk-prompt-188",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 188",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado EduTrack. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 188): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 0,
    isNew: true,
    isFeatured: false,
    order: 188,
  },
  {
    id: "bulk_189",
    slug: "bulk-prompt-189",
    title: "Gerador de Migração SQL Otimizada para Índices — 189",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 189): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 33,
    isNew: true,
    isFeatured: false,
    order: 189,
  },
  {
    id: "bulk_190",
    slug: "bulk-prompt-190",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 190",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado FlowMax. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 190): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 40,
    isNew: true,
    isFeatured: false,
    order: 190,
  },
  {
    id: "bulk_191",
    slug: "bulk-prompt-191",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 191",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto MindMap. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 191): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 39,
    isNew: true,
    isFeatured: false,
    order: 191,
  },
  {
    id: "bulk_192",
    slug: "bulk-prompt-192",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 192",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto TravelMate. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 192): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 36,
    isNew: true,
    isFeatured: false,
    order: 192,
  },
  {
    id: "bulk_193",
    slug: "bulk-prompt-193",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 193",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto NutriPlan. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 193): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 49,
    isNew: true,
    isFeatured: false,
    order: 193,
  },
  {
    id: "bulk_194",
    slug: "bulk-prompt-194",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 194",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado GrowthLab. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 194): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 6,
    isNew: true,
    isFeatured: false,
    order: 194,
  },
  {
    id: "bulk_195",
    slug: "bulk-prompt-195",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 195",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado MarketPulse. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 195): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 38,
    isNew: true,
    isFeatured: false,
    order: 195,
  },
  {
    id: "bulk_196",
    slug: "bulk-prompt-196",
    title: "Refatorador de Componente React com Hooks e Performance — 196",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 196): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 18,
    isNew: true,
    isFeatured: false,
    order: 196,
  },
  {
    id: "bulk_197",
    slug: "bulk-prompt-197",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 197",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado NutriPlan. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 197): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 0,
    isNew: true,
    isFeatured: false,
    order: 197,
  },
  {
    id: "bulk_198",
    slug: "bulk-prompt-198",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 198",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto TravelMate. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 198): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 32,
    isNew: true,
    isFeatured: false,
    order: 198,
  },
  {
    id: "bulk_199",
    slug: "bulk-prompt-199",
    title: "Refatorador de Componente React com Hooks e Performance — 199",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 199): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 0,
    isNew: true,
    isFeatured: false,
    order: 199,
  },
  {
    id: "bulk_200",
    slug: "bulk-prompt-200",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 200",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado Gridly. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 200): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 37,
    isNew: true,
    isFeatured: true,
    order: 200,
  },
  {
    id: "bulk_201",
    slug: "bulk-prompt-201",
    title: "Refatorador de Componente React com Hooks e Performance — 201",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 201): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 2,
    isNew: true,
    isFeatured: false,
    order: 201,
  },
  {
    id: "bulk_202",
    slug: "bulk-prompt-202",
    title: "Refatorador de Componente React com Hooks e Performance — 202",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 202): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 18,
    isNew: true,
    isFeatured: false,
    order: 202,
  },
  {
    id: "bulk_203",
    slug: "bulk-prompt-203",
    title: "Gerador de Migração SQL Otimizada para Índices — 203",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 203): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 10,
    isNew: true,
    isFeatured: false,
    order: 203,
  },
  {
    id: "bulk_204",
    slug: "bulk-prompt-204",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 204",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto CopyRocket, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 204): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 35,
    isNew: true,
    isFeatured: false,
    order: 204,
  },
  {
    id: "bulk_205",
    slug: "bulk-prompt-205",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 205",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado Insightly. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 205): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 46,
    isNew: true,
    isFeatured: false,
    order: 205,
  },
  {
    id: "bulk_206",
    slug: "bulk-prompt-206",
    title: "Gerador de Migração SQL Otimizada para Índices — 206",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 206): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 45,
    isNew: true,
    isFeatured: false,
    order: 206,
  },
  {
    id: "bulk_207",
    slug: "bulk-prompt-207",
    title: "Gerador de Migração SQL Otimizada para Índices — 207",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 207): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 3,
    isNew: true,
    isFeatured: false,
    order: 207,
  },
  {
    id: "bulk_208",
    slug: "bulk-prompt-208",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 208",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto Prodify, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 208): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 7,
    isNew: true,
    isFeatured: false,
    order: 208,
  },
  {
    id: "bulk_209",
    slug: "bulk-prompt-209",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 209",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado MarketPulse. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 209): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 18,
    isNew: true,
    isFeatured: false,
    order: 209,
  },
  {
    id: "bulk_210",
    slug: "bulk-prompt-210",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 210",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado Insightly. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 210): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 36,
    isNew: true,
    isFeatured: false,
    order: 210,
  },
  {
    id: "bulk_211",
    slug: "bulk-prompt-211",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 211",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto NutriPlan, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 211): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 39,
    isNew: true,
    isFeatured: false,
    order: 211,
  },
  {
    id: "bulk_212",
    slug: "bulk-prompt-212",
    title: "Refatorador de Componente React com Hooks e Performance — 212",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 212): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 0,
    isNew: true,
    isFeatured: false,
    order: 212,
  },
  {
    id: "bulk_213",
    slug: "bulk-prompt-213",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 213",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto SceneForge, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 213): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 44,
    isNew: true,
    isFeatured: false,
    order: 213,
  },
  {
    id: "bulk_214",
    slug: "bulk-prompt-214",
    title: "Gerador de Migração SQL Otimizada para Índices — 214",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 214): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 22,
    isNew: true,
    isFeatured: false,
    order: 214,
  },
  {
    id: "bulk_215",
    slug: "bulk-prompt-215",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 215",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto TravelMate, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 215): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 2,
    isNew: true,
    isFeatured: false,
    order: 215,
  },
  {
    id: "bulk_216",
    slug: "bulk-prompt-216",
    title: "Refatorador de Componente React com Hooks e Performance — 216",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 216): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 34,
    isNew: true,
    isFeatured: false,
    order: 216,
  },
  {
    id: "bulk_217",
    slug: "bulk-prompt-217",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 217",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto SocialSpark. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 217): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 36,
    isNew: true,
    isFeatured: false,
    order: 217,
  },
  {
    id: "bulk_218",
    slug: "bulk-prompt-218",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 218",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto AdPilot, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 218): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 2,
    isNew: true,
    isFeatured: false,
    order: 218,
  },
  {
    id: "bulk_219",
    slug: "bulk-prompt-219",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 219",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado AdPilot. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 219): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 11,
    isNew: true,
    isFeatured: false,
    order: 219,
  },
  {
    id: "bulk_220",
    slug: "bulk-prompt-220",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 220",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto CreativeOne, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 220): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 24,
    isNew: true,
    isFeatured: false,
    order: 220,
  },
  {
    id: "bulk_221",
    slug: "bulk-prompt-221",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 221",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado Brandly. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 221): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 37,
    isNew: true,
    isFeatured: false,
    order: 221,
  },
  {
    id: "bulk_222",
    slug: "bulk-prompt-222",
    title: "Gerador de Migração SQL Otimizada para Índices — 222",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 222): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 47,
    isNew: true,
    isFeatured: false,
    order: 222,
  },
  {
    id: "bulk_223",
    slug: "bulk-prompt-223",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 223",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado FlowMax. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 223): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 19,
    isNew: true,
    isFeatured: false,
    order: 223,
  },
  {
    id: "bulk_224",
    slug: "bulk-prompt-224",
    title: "Refatorador de Componente React com Hooks e Performance — 224",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 224): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 2,
    isNew: true,
    isFeatured: false,
    order: 224,
  },
  {
    id: "bulk_225",
    slug: "bulk-prompt-225",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 225",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado MetricHub. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 225): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 8,
    isNew: true,
    isFeatured: true,
    order: 225,
  },
  {
    id: "bulk_226",
    slug: "bulk-prompt-226",
    title: "Refatorador de Componente React com Hooks e Performance — 226",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 226): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 14,
    isNew: true,
    isFeatured: false,
    order: 226,
  },
  {
    id: "bulk_227",
    slug: "bulk-prompt-227",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 227",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto CopyRocket, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 227): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 3,
    isNew: true,
    isFeatured: false,
    order: 227,
  },
  {
    id: "bulk_228",
    slug: "bulk-prompt-228",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 228",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado Gridly. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 228): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 46,
    isNew: true,
    isFeatured: false,
    order: 228,
  },
  {
    id: "bulk_229",
    slug: "bulk-prompt-229",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 229",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto TravelMate, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 229): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 26,
    isNew: true,
    isFeatured: false,
    order: 229,
  },
  {
    id: "bulk_230",
    slug: "bulk-prompt-230",
    title: "Refatorador de Componente React com Hooks e Performance — 230",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 230): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 19,
    isNew: true,
    isFeatured: false,
    order: 230,
  },
  {
    id: "bulk_231",
    slug: "bulk-prompt-231",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 231",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto AdPilot. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 231): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 23,
    isNew: true,
    isFeatured: false,
    order: 231,
  },
  {
    id: "bulk_232",
    slug: "bulk-prompt-232",
    title: "Refatorador de Componente React com Hooks e Performance — 232",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 232): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 41,
    isNew: true,
    isFeatured: false,
    order: 232,
  },
  {
    id: "bulk_233",
    slug: "bulk-prompt-233",
    title: "Gerador de Migração SQL Otimizada para Índices — 233",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 233): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 50,
    isNew: true,
    isFeatured: false,
    order: 233,
  },
  {
    id: "bulk_234",
    slug: "bulk-prompt-234",
    title: "Gerador de Migração SQL Otimizada para Índices — 234",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 234): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 30,
    isNew: true,
    isFeatured: false,
    order: 234,
  },
  {
    id: "bulk_235",
    slug: "bulk-prompt-235",
    title: "Refatorador de Componente React com Hooks e Performance — 235",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 235): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 16,
    isNew: true,
    isFeatured: false,
    order: 235,
  },
  {
    id: "bulk_236",
    slug: "bulk-prompt-236",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 236",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado CodeCraft. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 236): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 50,
    isNew: true,
    isFeatured: false,
    order: 236,
  },
  {
    id: "bulk_237",
    slug: "bulk-prompt-237",
    title: "Refatorador de Componente React com Hooks e Performance — 237",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 237): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 1,
    isNew: true,
    isFeatured: false,
    order: 237,
  },
  {
    id: "bulk_238",
    slug: "bulk-prompt-238",
    title: "Refatorador de Componente React com Hooks e Performance — 238",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 238): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 45,
    isNew: true,
    isFeatured: false,
    order: 238,
  },
  {
    id: "bulk_239",
    slug: "bulk-prompt-239",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 239",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado BuildStream. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 239): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 33,
    isNew: true,
    isFeatured: false,
    order: 239,
  },
  {
    id: "bulk_240",
    slug: "bulk-prompt-240",
    title: "Gerador de Migração SQL Otimizada para Índices — 240",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 240): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 25,
    isNew: true,
    isFeatured: false,
    order: 240,
  },
  {
    id: "bulk_241",
    slug: "bulk-prompt-241",
    title: "Refatorador de Componente React com Hooks e Performance — 241",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 241): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 17,
    isNew: true,
    isFeatured: false,
    order: 241,
  },
  {
    id: "bulk_242",
    slug: "bulk-prompt-242",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 242",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado Insightly. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 242): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 27,
    isNew: true,
    isFeatured: false,
    order: 242,
  },
  {
    id: "bulk_243",
    slug: "bulk-prompt-243",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 243",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto Insightly, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 243): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 5,
    isNew: true,
    isFeatured: false,
    order: 243,
  },
  {
    id: "bulk_244",
    slug: "bulk-prompt-244",
    title: "Refatorador de Componente React com Hooks e Performance — 244",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 244): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 25,
    isNew: true,
    isFeatured: false,
    order: 244,
  },
  {
    id: "bulk_245",
    slug: "bulk-prompt-245",
    title: "Gerador de Migração SQL Otimizada para Índices — 245",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 245): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 47,
    isNew: true,
    isFeatured: false,
    order: 245,
  },
  {
    id: "bulk_246",
    slug: "bulk-prompt-246",
    title: "Refatorador de Componente React com Hooks e Performance — 246",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 246): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 18,
    isNew: true,
    isFeatured: false,
    order: 246,
  },
  {
    id: "bulk_247",
    slug: "bulk-prompt-247",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 247",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado Gridly. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 247): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 34,
    isNew: true,
    isFeatured: false,
    order: 247,
  },
  {
    id: "bulk_248",
    slug: "bulk-prompt-248",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 248",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto CodeCraft, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 248): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 25,
    isNew: true,
    isFeatured: false,
    order: 248,
  },
  {
    id: "bulk_249",
    slug: "bulk-prompt-249",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 249",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado CopyRocket. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 249): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 40,
    isNew: true,
    isFeatured: false,
    order: 249,
  },
  {
    id: "bulk_250",
    slug: "bulk-prompt-250",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 250",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado AudioLine. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 250): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 11,
    isNew: true,
    isFeatured: true,
    order: 250,
  },
  {
    id: "bulk_251",
    slug: "bulk-prompt-251",
    title: "Refatorador de Componente React com Hooks e Performance — 251",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 251): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 11,
    isNew: true,
    isFeatured: false,
    order: 251,
  },
  {
    id: "bulk_252",
    slug: "bulk-prompt-252",
    title: "Refatorador de Componente React com Hooks e Performance — 252",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 252): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 32,
    isNew: true,
    isFeatured: false,
    order: 252,
  },
  {
    id: "bulk_253",
    slug: "bulk-prompt-253",
    title: "Gerador de Migração SQL Otimizada para Índices — 253",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 253): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 17,
    isNew: true,
    isFeatured: false,
    order: 253,
  },
  {
    id: "bulk_254",
    slug: "bulk-prompt-254",
    title: "Refatorador de Componente React com Hooks e Performance — 254",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 254): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 27,
    isNew: true,
    isFeatured: false,
    order: 254,
  },
  {
    id: "bulk_255",
    slug: "bulk-prompt-255",
    title: "Refatorador de Componente React com Hooks e Performance — 255",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 255): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 47,
    isNew: true,
    isFeatured: false,
    order: 255,
  },
  {
    id: "bulk_256",
    slug: "bulk-prompt-256",
    title: "Gerador de Migração SQL Otimizada para Índices — 256",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 256): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 35,
    isNew: true,
    isFeatured: false,
    order: 256,
  },
  {
    id: "bulk_257",
    slug: "bulk-prompt-257",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 257",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto CopyRocket, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 257): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 40,
    isNew: true,
    isFeatured: false,
    order: 257,
  },
  {
    id: "bulk_258",
    slug: "bulk-prompt-258",
    title: "Gerador de Migração SQL Otimizada para Índices — 258",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 258): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 20,
    isNew: true,
    isFeatured: false,
    order: 258,
  },
  {
    id: "bulk_259",
    slug: "bulk-prompt-259",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 259",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto Insightly. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 259): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 50,
    isNew: true,
    isFeatured: false,
    order: 259,
  },
  {
    id: "bulk_260",
    slug: "bulk-prompt-260",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 260",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado Brandly. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 260): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 16,
    isNew: true,
    isFeatured: false,
    order: 260,
  },
  {
    id: "bulk_261",
    slug: "bulk-prompt-261",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 261",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto Insightly, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 261): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 26,
    isNew: true,
    isFeatured: false,
    order: 261,
  },
  {
    id: "bulk_262",
    slug: "bulk-prompt-262",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 262",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto SceneForge. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 262): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 3,
    isNew: true,
    isFeatured: false,
    order: 262,
  },
  {
    id: "bulk_263",
    slug: "bulk-prompt-263",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 263",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado LawAssist. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 263): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 25,
    isNew: true,
    isFeatured: false,
    order: 263,
  },
  {
    id: "bulk_264",
    slug: "bulk-prompt-264",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 264",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto LawAssist, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 264): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 10,
    isNew: true,
    isFeatured: false,
    order: 264,
  },
  {
    id: "bulk_265",
    slug: "bulk-prompt-265",
    title: "Refatorador de Componente React com Hooks e Performance — 265",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 265): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 39,
    isNew: true,
    isFeatured: false,
    order: 265,
  },
  {
    id: "bulk_266",
    slug: "bulk-prompt-266",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 266",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto Brandly. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 266): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 30,
    isNew: true,
    isFeatured: false,
    order: 266,
  },
  {
    id: "bulk_267",
    slug: "bulk-prompt-267",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 267",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto LawAssist. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 267): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 24,
    isNew: true,
    isFeatured: false,
    order: 267,
  },
  {
    id: "bulk_268",
    slug: "bulk-prompt-268",
    title: "Refatorador de Componente React com Hooks e Performance — 268",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 268): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 13,
    isNew: true,
    isFeatured: false,
    order: 268,
  },
  {
    id: "bulk_269",
    slug: "bulk-prompt-269",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 269",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto GrowthLab, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 269): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 44,
    isNew: true,
    isFeatured: false,
    order: 269,
  },
  {
    id: "bulk_270",
    slug: "bulk-prompt-270",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 270",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto Prodify, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 270): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 8,
    isNew: true,
    isFeatured: false,
    order: 270,
  },
  {
    id: "bulk_271",
    slug: "bulk-prompt-271",
    title: "Gerador de Migração SQL Otimizada para Índices — 271",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 271): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 49,
    isNew: true,
    isFeatured: false,
    order: 271,
  },
  {
    id: "bulk_272",
    slug: "bulk-prompt-272",
    title: "Gerador de Migração SQL Otimizada para Índices — 272",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 272): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 30,
    isNew: true,
    isFeatured: false,
    order: 272,
  },
  {
    id: "bulk_273",
    slug: "bulk-prompt-273",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 273",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto MarketPulse, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 273): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 17,
    isNew: true,
    isFeatured: false,
    order: 273,
  },
  {
    id: "bulk_274",
    slug: "bulk-prompt-274",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 274",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto Brandly. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 274): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 32,
    isNew: true,
    isFeatured: false,
    order: 274,
  },
  {
    id: "bulk_275",
    slug: "bulk-prompt-275",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 275",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado ShopEase. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 275): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 20,
    isNew: true,
    isFeatured: true,
    order: 275,
  },
  {
    id: "bulk_276",
    slug: "bulk-prompt-276",
    title: "Refatorador de Componente React com Hooks e Performance — 276",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 276): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 19,
    isNew: true,
    isFeatured: false,
    order: 276,
  },
  {
    id: "bulk_277",
    slug: "bulk-prompt-277",
    title: "Refatorador de Componente React com Hooks e Performance — 277",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 277): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 32,
    isNew: true,
    isFeatured: false,
    order: 277,
  },
  {
    id: "bulk_278",
    slug: "bulk-prompt-278",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 278",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado FlowMax. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 278): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 3,
    isNew: true,
    isFeatured: false,
    order: 278,
  },
  {
    id: "bulk_279",
    slug: "bulk-prompt-279",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 279",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto FlowMax, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 279): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 28,
    isNew: true,
    isFeatured: false,
    order: 279,
  },
  {
    id: "bulk_280",
    slug: "bulk-prompt-280",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 280",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto Gridly. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 280): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 39,
    isNew: true,
    isFeatured: false,
    order: 280,
  },
  {
    id: "bulk_281",
    slug: "bulk-prompt-281",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 281",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado TravelMate. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 281): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 12,
    isNew: true,
    isFeatured: false,
    order: 281,
  },
  {
    id: "bulk_282",
    slug: "bulk-prompt-282",
    title: "Refatorador de Componente React com Hooks e Performance — 282",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 282): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 41,
    isNew: true,
    isFeatured: false,
    order: 282,
  },
  {
    id: "bulk_283",
    slug: "bulk-prompt-283",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 283",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto MetricHub. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 283): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 38,
    isNew: true,
    isFeatured: false,
    order: 283,
  },
  {
    id: "bulk_284",
    slug: "bulk-prompt-284",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 284",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado MarketPulse. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 284): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 50,
    isNew: true,
    isFeatured: false,
    order: 284,
  },
  {
    id: "bulk_285",
    slug: "bulk-prompt-285",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 285",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado CreativeOne. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 285): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 0,
    isNew: true,
    isFeatured: false,
    order: 285,
  },
  {
    id: "bulk_286",
    slug: "bulk-prompt-286",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 286",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto HealthGuide, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 286): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 32,
    isNew: true,
    isFeatured: false,
    order: 286,
  },
  {
    id: "bulk_287",
    slug: "bulk-prompt-287",
    title: "Refatorador de Componente React com Hooks e Performance — 287",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 287): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 11,
    isNew: true,
    isFeatured: false,
    order: 287,
  },
  {
    id: "bulk_288",
    slug: "bulk-prompt-288",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 288",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto BuildStream, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 288): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 50,
    isNew: true,
    isFeatured: false,
    order: 288,
  },
  {
    id: "bulk_289",
    slug: "bulk-prompt-289",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 289",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto HealthGuide. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 289): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 11,
    isNew: true,
    isFeatured: false,
    order: 289,
  },
  {
    id: "bulk_290",
    slug: "bulk-prompt-290",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 290",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado Prodify. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 290): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 46,
    isNew: true,
    isFeatured: false,
    order: 290,
  },
  {
    id: "bulk_291",
    slug: "bulk-prompt-291",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 291",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto Prodify, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 291): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 40,
    isNew: true,
    isFeatured: false,
    order: 291,
  },
  {
    id: "bulk_292",
    slug: "bulk-prompt-292",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 292",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto Prodify. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 292): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 46,
    isNew: true,
    isFeatured: false,
    order: 292,
  },
  {
    id: "bulk_293",
    slug: "bulk-prompt-293",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 293",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto AdPilot, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 293): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 29,
    isNew: true,
    isFeatured: false,
    order: 293,
  },
  {
    id: "bulk_294",
    slug: "bulk-prompt-294",
    title: "Refatorador de Componente React com Hooks e Performance — 294",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 294): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 29,
    isNew: true,
    isFeatured: false,
    order: 294,
  },
  {
    id: "bulk_295",
    slug: "bulk-prompt-295",
    title: "Script de Vendas de 2 Minutos para Fechamento SDR — 295",
    description: "Script de pitch de 2 minutos para calls de prospecção que prioriza dores e prova social.",
    content: `Crie um script de 2 minutos estruturado para uma ligação de prospecção do produto GrowthLab. Inicie com abertura personalizada, identifique as principais dores do cliente, apresente uma proposta de valor única em 30 segundos, inclua 3 perguntas abertas para qualificação e finalize com um próximo passo direto (marcar demo). Forneça também 3 variações do encerramento para diferentes níveis de interesse.

Instruções adicionais (nº 295): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "prospeccao",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["prospeccao", "automático", "profissional"],
    copyCount: 2,
    isNew: true,
    isFeatured: false,
    order: 295,
  },
  {
    id: "bulk_296",
    slug: "bulk-prompt-296",
    title: "Refatorador de Componente React com Hooks e Performance — 296",
    description: "Analisa um componente React e sugere refatoração para otimizar renderizações e legibilidade.",
    content: `Você é um engenheiro front-end sênior. Receba o código do componente React abaixo (assuma código com classes ou hooks). Sugira e forneça a versão refatorada usando hooks, memoização quando necessário, divisão lógica em subcomponentes, e recomendações de testes. Explique cada mudança em 3 tópicos: performance, acessibilidade, testabilidade.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 296): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "react-next",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["react-next", "automático", "profissional", "código"],
    copyCount: 0,
    isNew: true,
    isFeatured: false,
    order: 296,
  },
  {
    id: "bulk_297",
    slug: "bulk-prompt-297",
    title: "Sequência de Emails de Onboarding de 7 Dias para Novo Usuário — 297",
    description: "Cria uma sequência completa de 7 emails para engajar novos clientes e aumentar ativação.",
    content: `Você é estrategista de onboarding. Crie 7 emails prontos para envio para usuários do produto NutriPlan, com assuntos curtos, pré-visualizações (preview), corpo do email com CTA claro, e uma sugestão de métrica de sucesso para cada email. Inclua assunto, preheader, corpo (max 200 palavras), CTA e objetivo de métrica.

Instruções adicionais (nº 297): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "email-marketing",
    type: "simple",
    aiCompatible: ["chatgpt", "claude"],
    tags: ["email-marketing", "automático", "profissional"],
    copyCount: 10,
    isNew: true,
    isFeatured: false,
    order: 297,
  },
  {
    id: "bulk_298",
    slug: "bulk-prompt-298",
    title: "Gerador de Migração SQL Otimizada para Índices — 298",
    description: "Cria uma migração SQL que adiciona índices apropriados com justificativa de custo-benefício.",
    content: `Analise a tabela de transações 'orders' (colunas: id, user_id, created_at, status, total_amount, product_id). Sugira índices a adicionar para consultas frequentes por user_id e por data, escreva a migração SQL compatível com PostgreSQL que cria índices parcialmente filtrados quando aplicável, e explique impacto em escrita e leitura.

Inclua também um exemplo de código funcional e recomendações de testes unitários.

Instruções adicionais (nº 298): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "sql",
    type: "simple",
    aiCompatible: ["copilot", "cursor", "chatgpt"],
    tags: ["sql", "automático", "profissional", "código"],
    copyCount: 35,
    isNew: true,
    isFeatured: false,
    order: 298,
  },
  {
    id: "bulk_299",
    slug: "bulk-prompt-299",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 299",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado CopyRocket. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 299): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 17,
    isNew: true,
    isFeatured: false,
    order: 299,
  },
  {
    id: "bulk_300",
    slug: "bulk-prompt-300",
    title: "Gerador de Headlines de Alta Conversão para Produto SaaS — 300",
    description: "Cria 12 headlines otimizadas para conversão em landing pages SaaS com foco em clareza e urgência.",
    content: `Escreva 12 headlines cuidadosamente trabalhadas para a página principal de um software chamado Prodify. Cada headline deve ter no máximo 12 palavras, explorar gatilhos diferentes (escassez, prova social, vantagem econômica, novidade), e vir acompanhada de uma breve justificativa de uma linha explicando por que funciona. Evite linguagem genérica; use especificidade e números quando possível. Depois disso, escreva 3 subheadlines que complementam as 3 melhores headlines, com tom direto e persuasivo.

Instruções adicionais (nº 300): Forneça exemplos práticos, passos acionáveis e uma checklist de implementação com 5 itens. Priorize linguagem objetiva e entregue em português brasileiro.`,
    categoryId: "copywriting",
    type: "simple",
    aiCompatible: ["chatgpt", "claude", "gemini"],
    tags: ["copywriting", "automático", "profissional"],
    copyCount: 0,
    isNew: true,
    isFeatured: true,
    order: 300,
  },
];