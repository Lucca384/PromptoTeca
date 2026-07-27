import { Prompt } from '@/types';

export const productivityPrompts: Prompt[] = [
  // NOTION
  {
    id: 'notion_001',
    slug: 'sistema-notion-produtividade',
    title: 'Sistema de Produtividade no Notion',
    description: 'Cria um sistema completo de gestão pessoal no Notion.',
    content: `Você é especialista em Notion e sistemas de produtividade.

Crie um sistema de produtividade completo para:

**Perfil:** [PROFISSIONAL/ESTUDANTE/EMPREENDEDOR]
**Objetivo principal:** [O QUE QUER ORGANIZAR]
**Áreas da vida:** [TRABALHO/ESTUDOS/PESSOAL/PROJETOS]
**Metodologia preferida:** [GTD/PARA/PILLARS/OUTRO]

**SISTEMA COMPLETO:**

### 1. ESTRUTURA DE PÁGINAS

\`\`\`
📁 HOME (Dashboard)
├── 📊 Dashboard Semanal
├── 📝 Inbox (Captura rápida)
├── 
├── 📁 ÁREAS
│   ├── 💼 Trabalho
│   ├── 📚 Estudos
│   ├── 🏠 Pessoal
│   └── 💰 Finanças
├── 
├── 📁 PROJETOS
│   └── (database de projetos)
├── 
├── 📁 RECURSOS
│   ├── 📖 Base de Conhecimento
│   ├── 🔗 Links Úteis
│   └── 📋 Templates
└── 
└── 📁 ARQUIVO
    └── Projetos concluídos
\`\`\`

### 2. DATABASES

**Database: Tarefas**
Propriedades:
- Nome (título)
- Status (To Do / In Progress / Done)
- Prioridade (🔴 Alta / 🟡 Média / 🟢 Baixa)
- Data (date)
- Projeto (relation)
- Área (select)
- Energia (🔋 Alta / 🔋🔋 Média / 🔋🔋🔋 Baixa)
- Tempo estimado (select)
- Tags (multi-select)

Fórmulas úteis:
\`\`\`
// Dias até deadline
dateBetween(prop("Data"), now(), "days")
\`\`\`

**Database: Projetos**
[mesma estrutura detalhada]

**Database: Hábitos**
[mesma estrutura detalhada]

### 3. TEMPLATES DE PÁGINA

**Template: Planejamento Semanal**
\`\`\`markdown
# 📅 Semana de [Data]

## 🎯 Foco da Semana
- [ ] Objetivo 1
- [ ] Objetivo 2
- [ ] Objetivo 3

## 📋 Tarefas por Dia
### Segunda
### Terça
[...]

## 📊 Métricas
- Tarefas planejadas:
- Tarefas concluídas:
- Taxa de conclusão:

## 💭 Reflexão
O que funcionou:
O que melhorar:
\`\`\`

**Template: Reunião**
[estrutura completa]

**Template: Projeto**
[estrutura completa]

### 4. VIEWS ESSENCIAIS

**View: Hoje**
Filtros: Data = Hoje OU Prioridade = Alta
Ordenação: Prioridade, depois Data

**View: Esta Semana**
[configuração]

**View: Inbox**
[configuração]

### 5. AUTOMAÇÕES
Sugestões de automações com Notion API ou ferramentas externas.

### 6. ROTINA SUGERIDA
Como usar o sistema no dia a dia.`,
    categoryId: 'notion',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['notion', 'produtividade', 'organização', 'sistema'],
    copyCount: 3421,
    isNew: true,
    isFeatured: true,
    order: 1
  },

  // EXCEL
  {
    id: 'excel_001',
    slug: 'formula-excel-avancada',
    title: 'Fórmulas Avançadas do Excel',
    description: 'Cria fórmulas complexas para resolver problemas específicos.',
    content: `Você é especialista em Excel com 15 anos de experiência.

Crie uma fórmula para:

**Objetivo:** [O QUE QUER CALCULAR/FAZER]
**Dados de entrada:**
- Coluna A: [descrição]
- Coluna B: [descrição]
- Coluna C: [descrição]

**Exemplo de dados:**
| A | B | C |
|---|---|---|
| [exemplo] | [exemplo] | [exemplo] |

**Resultado esperado:** [O QUE DEVE RETORNAR]

**Versão do Excel:** [365/2021/2019/Sheets]

**ENTREGUE:**

### 1. FÓRMULA PRINCIPAL
\`\`\`
=FÓRMULA(argumentos)
\`\`\`

### 2. EXPLICAÇÃO PASSO A PASSO
Quebre a fórmula em partes:
1. Parte 1: o que faz
2. Parte 2: o que faz
[...]

### 3. FÓRMULA ALTERNATIVA
Se houver outro jeito de fazer:
\`\`\`
=FÓRMULA_ALTERNATIVA
\`\`\`

### 4. VERSÃO PARA GOOGLE SHEETS
Se a fórmula for diferente:
\`\`\`
=FÓRMULA_SHEETS
\`\`\`

### 5. TABELA DE REFERÊNCIA
Funções utilizadas e o que fazem:
| Função | Descrição |
|--------|-----------|
| PROCV | ... |
| SE | ... |

### 6. EDGE CASES
- E se a célula estiver vazia?
- E se for texto em vez de número?
- Como tratar erros?

### 7. OTIMIZAÇÃO
- É a forma mais rápida?
- Impacto em arquivos grandes
- Alternativas com Power Query/VBA se necessário`,
    categoryId: 'excel-sheets',
    type: 'simple',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['excel', 'fórmulas', 'planilha', 'cálculo'],
    copyCount: 4521,
    isNew: false,
    isFeatured: true,
    order: 1
  },
  {
    id: 'excel_002',
    slug: 'dashboard-excel-completo',
    title: 'Dashboard Excel Profissional',
    description: 'Cria dashboards interativos e profissionais no Excel.',
    content: `Você é especialista em Business Intelligence e Excel.

Crie um dashboard para:

**Objetivo:** [ACOMPANHAR VENDAS/FINANÇAS/PROJETOS/etc]
**Dados disponíveis:** [DESCREVA OS DADOS]
**KPIs principais:**
1. [KPI 1]
2. [KPI 2]
3. [KPI 3]
4. [KPI 4]

**Período:** [DIÁRIO/SEMANAL/MENSAL]
**Usuários:** [QUEM VAI USAR]

**DASHBOARD COMPLETO:**

### 1. ESTRUTURA DE ABAS
\`\`\`
Aba 1: Dashboard (visualização)
Aba 2: Dados (fonte de dados)
Aba 3: Cálculos (auxiliar)
Aba 4: Configurações (filtros, parâmetros)
\`\`\`

### 2. LAYOUT DO DASHBOARD
\`\`\`
+---------------------------+
|    TÍTULO / PERÍODO       |
+--------+--------+---------+
| KPI 1  | KPI 2  | KPI 3   |
+--------+--------+---------+
|   GRÁFICO PRINCIPAL       |
|        (Linha/Barras)     |
+-------------+-------------+
| GRÁFICO 2   | GRÁFICO 3   |
| (Pizza)     | (Barras)    |
+-------------+-------------+
|   TABELA DE DETALHES      |
+---------------------------+
\`\`\`

### 3. FÓRMULAS PARA KPIS
**KPI 1: [Nome]**
\`\`\`
=FÓRMULA
\`\`\`
Formatação: [número/percentual/moeda]

[Repita para cada KPI]

### 4. GRÁFICOS
**Gráfico 1: [Tipo]**
- Dados: [intervalo]
- Eixos: [configuração]
- Cores: [paleta sugerida]

[Configure cada gráfico]

### 5. FILTROS/SEGMENTADORES
- Período (Data)
- Categoria
- Região
[Liste todos os filtros necessários]

### 6. FORMATAÇÃO CONDICIONAL
Regras para destacar:
- Valores acima da meta (verde)
- Valores abaixo (vermelho)
- Tendências

### 7. TABELA DINÂMICA
Estrutura sugerida para análises detalhadas.

### 8. AUTOMAÇÃO
- Atualização automática
- Macros úteis (se necessário)
- Conexão com fontes externas

### 9. INSTRUÇÕES DE USO
Como o usuário final deve usar o dashboard.`,
    categoryId: 'excel-sheets',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['excel', 'dashboard', 'bi', 'gráficos'],
    copyCount: 2876,
    isNew: false,
    isFeatured: false,
    order: 2
  },

  // AUTOMAÇÃO
  {
    id: 'auto_001',
    slug: 'workflow-zapier-make',
    title: 'Workflow de Automação (Zapier/Make)',
    description: 'Cria fluxos de automação entre aplicativos.',
    content: `Você é especialista em automação no-code com Zapier, Make e n8n.

Crie um workflow de automação para:

**Objetivo:** [O QUE QUER AUTOMATIZAR]
**Trigger:** [O QUE INICIA A AUTOMAÇÃO]
**Ação final:** [RESULTADO ESPERADO]

**Ferramentas envolvidas:**
- [App 1]: [como usa]
- [App 2]: [como usa]
- [App 3]: [como usa]

**Frequência:** [A CADA EVENTO/AGENDADO]

**WORKFLOW COMPLETO:**

### 1. VISÃO GERAL
\`\`\`
[TRIGGER] → [PASSO 1] → [PASSO 2] → [AÇÃO FINAL]
\`\`\`

### 2. CONFIGURAÇÃO DETALHADA

**Trigger: [Nome]**
- App: [aplicativo]
- Evento: [qual evento dispara]
- Configuração: [detalhes]
- Filtros: [se aplicável]

**Passo 1: [Nome]**
- App: [aplicativo]
- Ação: [o que faz]
- Campos mapeados:
  - Campo 1: {{dados do trigger}}
  - Campo 2: {{dados do trigger}}

**Passo 2: [Nome]**
[mesma estrutura]

**Ação Final: [Nome]**
[mesma estrutura]

### 3. TRATAMENTO DE ERROS
- O que fazer se falhar
- Notificações
- Retentativas

### 4. FILTROS E CONDIÇÕES
Quando executar e quando pular:
- Condição 1: Se [campo] = [valor]
- Condição 2: Se [campo] contém [texto]

### 5. VERSÃO ZAPIER
Configuração específica para Zapier.

### 6. VERSÃO MAKE
Configuração específica para Make (Integromat).

### 7. VERSÃO N8N
Configuração específica para n8n (self-hosted).

### 8. TESTES
Como testar cada etapa.

### 9. CUSTOS
Estimativa de tasks/operações mensais.

### 10. ALTERNATIVAS
Outras formas de fazer a mesma automação.`,
    categoryId: 'automacao',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['zapier', 'make', 'automação', 'no-code'],
    copyCount: 1987,
    isNew: false,
    isFeatured: true,
    order: 1
  },

  // GESTÃO DE TEMPO
  {
    id: 'tempo_001',
    slug: 'planejamento-semanal-completo',
    title: 'Planejamento Semanal Completo',
    description: 'Organiza sua semana para máxima produtividade.',
    content: `Você é especialista em gestão de tempo e produtividade.

Crie um planejamento semanal para:

**Perfil:** [CARGO/PROFISSÃO]
**Objetivos da semana:**
1. [OBJETIVO 1]
2. [OBJETIVO 2]
3. [OBJETIVO 3]

**Compromissos fixos:**
[REUNIÕES, HORÁRIOS FIXOS]

**Desafios atuais:**
[O QUE ESTÁ DIFÍCIL]

**Energia:** [MATINAL/NOTURNO/VARIÁVEL]
**Horas disponíveis/dia:** [QUANTIDADE]

**PLANEJAMENTO:**

### 1. REVISÃO DOS OBJETIVOS
Para cada objetivo:
- É importante? É urgente?
- Qual o resultado esperado?
- Pode ser delegado/eliminado?
- Prazo real necessário

Priorização (Matriz Eisenhower):
| Urgente | Não Urgente |
|---------|-------------|
| [tarefas] | [tarefas] |

### 2. DECOMPOSIÇÃO EM TAREFAS
Objetivo 1 → Tarefas:
- [ ] Tarefa 1.1 (30min)
- [ ] Tarefa 1.2 (1h)
[...]

### 3. TIME BLOCKING
Estrutura diária sugerida:

**Manhã (Alta energia):**
- 08:00-09:00: [tarefa que exige foco]
- 09:00-10:30: [trabalho profundo]
- 10:30-10:45: Pausa
- 10:45-12:00: [tarefa importante]

**Tarde (Energia média):**
- [estrutura similar]

**Fim do dia (Baixa energia):**
- [tarefas administrativas]

### 4. QUADRO SEMANAL
| Horário | Seg | Ter | Qua | Qui | Sex |
|---------|-----|-----|-----|-----|-----|
| 08:00 | | | | | |
| 09:00 | | | | | |
[...]

### 5. BUFFERS
- Tempo para imprevistos: [quando]
- Tempo para responder mensagens: [quando]
- Tempo para descanso: [quando]

### 6. TOP 3 DIÁRIO
Para cada dia, as 3 tarefas essenciais.

### 7. RITUAIS
**Início do dia:**
1. [ação]
2. [ação]

**Fim do dia:**
1. [ação]
2. [ação]

**Revisão semanal:**
[quando e como]

### 8. MÉTRICAS
Como saber se a semana foi produtiva:
- [ ] Métrica 1
- [ ] Métrica 2`,
    categoryId: 'gestao-tempo',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['planejamento', 'produtividade', 'tempo', 'organização'],
    copyCount: 2654,
    isNew: false,
    isFeatured: true,
    order: 1
  },

  // EMAILS PROFISSIONAIS
  {
    id: 'email_pro_001',
    slug: 'templates-emails-profissionais',
    title: '20 Templates de Emails Profissionais',
    description: 'Emails para todas as situações do dia a dia profissional.',
    content: `Você é especialista em comunicação corporativa.

Crie templates de email para:

**Contexto:** [EMPRESA/CARGO/SETOR]
**Tom:** [FORMAL/SEMI-FORMAL/CASUAL]
**Relacionamento:** [HIERARQUIA/PARCERIA/CLIENTE]

**TEMPLATES:**

### 1. SOLICITAÇÃO DE REUNIÃO
**Assunto:** Solicitação de Reunião - [Tema]
**Corpo:**
[Template completo]

### 2. FOLLOW-UP PÓS REUNIÃO
**Assunto:** Resumo e Próximos Passos - [Reunião]
**Corpo:**
[Template]

### 3. SOLICITAÇÃO DE FEEDBACK
[Template]

### 4. ENTREGA DE PROJETO
[Template]

### 5. PEDIDO DE PRAZO
[Template]

### 6. RESPOSTA A RECLAMAÇÃO
[Template]

### 7. AGRADECIMENTO
[Template]

### 8. APRESENTAÇÃO PESSOAL
[Template]

### 9. PEDIDO DE INFORMAÇÃO
[Template]

### 10. COMUNICADO DE AUSÊNCIA
[Template]

### 11. CONVITE PARA EVENTO
[Template]

### 12. COBRANÇA SUTIL
[Template]

### 13. RESPOSTA NEGATIVA EDUCADA
[Template]

### 14. DELEGAÇÃO DE TAREFA
[Template]

### 15. ATUALIZAÇÃO DE STATUS
[Template]

### 16. PEDIDO DE AJUDA
[Template]

### 17. NETWORKING
[Template]

### 18. INDICAÇÃO/REFERÊNCIA
[Template]

### 19. DESPEDIDA (mudança de emprego)
[Template]

### 20. REATIVAÇÃO DE CONTATO
[Template]

**PARA CADA TEMPLATE:**
- 2 opções de assunto
- Corpo completo
- Variações de tom (mais/menos formal)
- Dicas de personalização`,
    categoryId: 'emails',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['email', 'profissional', 'templates', 'comunicação'],
    copyCount: 3245,
    isNew: false,
    isFeatured: false,
    order: 1
  },
];
