import { Prompt } from '@/types';

export const businessPrompts: Prompt[] = [
  // VENDAS - PROSPECÇÃO
  {
    id: 'vendas_001',
    slug: 'mensagem-prospeccao-fria',
    title: 'Mensagem de Prospecção Fria',
    description: 'Abordagens eficazes para prospectar clientes que não te conhecem.',
    content: `Você é um especialista em outbound sales com mais de 10 anos de experiência.

Crie mensagens de prospecção fria para:

**Seu produto/serviço:** [O QUE VOCÊ VENDE]
**Cargo-alvo:** [QUEM VOCÊ QUER ABORDAR]
**Segmento:** [INDÚSTRIA DO CLIENTE]
**Canal:** [EMAIL/LINKEDIN/WHATSAPP/TELEFONE]

**Seu diferencial:** [POR QUE ESCOLHER VOCÊ]
**Case de sucesso:** [RESULTADO COM CLIENTE SIMILAR]

**CRIE 5 ABORDAGENS:**

### ABORDAGEM 1 - DIRETO AO VALOR
- Vá direto ao ponto
- Mencione resultado específico
- Pergunta de abertura
- Sem enrolação

### ABORDAGEM 2 - GATILHO/EVENTO
- Referencie algo recente (notícia, movimento, contratação)
- Conecte ao seu serviço
- Mostre que você pesquisou

### ABORDAGEM 3 - CASE DE SUCESSO
- Mencione resultado com empresa similar
- Faça paralelo com a realidade deles
- Pergunte se faz sentido conversar

### ABORDAGEM 4 - INSIGHT DE VALOR
- Compartilhe dado ou insight relevante
- Não peça nada imediatamente
- Posicione-se como especialista

### ABORDAGEM 5 - INDICAÇÃO SIMULADA
- "Vi que você é [cargo] na [empresa]..."
- Fale como se alguém tivesse indicado
- Mais pessoal e menos "frio"

**PARA CADA ABORDAGEM:**
- Mensagem completa
- Variação para cada canal
- Follow-up (para quem não respondeu)
- Taxa de resposta esperada

**REGRAS:**
- Personalização é obrigatória
- Máximo 100 palavras
- Foque no prospect, não em você
- CTA suave (pergunta)
- Sem "Espero que esteja bem"`,
    categoryId: 'prospeccao',
    type: 'simple',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['prospecção', 'cold call', 'vendas', 'outbound'],
    copyCount: 2134,
    isNew: false,
    isFeatured: true,
    order: 1
  },
  {
    id: 'vendas_002',
    slug: 'qualificacao-leads-spin',
    title: 'Perguntas de Qualificação SPIN',
    description: 'Qualifique leads usando a metodologia SPIN Selling.',
    content: `Você é um especialista em SPIN Selling com mais de 1000 vendas fechadas.

Crie um roteiro de qualificação SPIN para:

**Produto/Serviço:** [O QUE VOCÊ VENDE]
**Ticket médio:** [VALOR]
**Ciclo de venda:** [CURTO/MÉDIO/LONGO]
**Público:** [QUEM COMPRA]
**Principal dor:** [PROBLEMA QUE RESOLVE]

**ROTEIRO SPIN:**

### S - SITUAÇÃO (Situation)
**Objetivo:** Entender o contexto atual

5 perguntas para descobrir:
- Como funciona atualmente?
- Quais ferramentas/processos usam?
- Quem é responsável por isso?
- Há quanto tempo fazem assim?
- Qual o volume/tamanho da operação?

### P - PROBLEMA (Problem)
**Objetivo:** Identificar dores e dificuldades

5 perguntas para descobrir:
- O que não funciona bem?
- Onde perdem mais tempo/dinheiro?
- O que gostariam de fazer diferente?
- Quais resultados não estão alcançando?
- O que já tentaram para resolver?

### I - IMPLICAÇÃO (Implication)
**Objetivo:** Amplificar a dor, mostrar consequências

5 perguntas para amplificar:
- O que acontece se não resolver?
- Como isso impacta [métrica importante]?
- Quanto isso custa por mês/ano?
- Como afeta a equipe/clientes?
- Se continuar assim, o que acontece em 6-12 meses?

### N - NECESSIDADE DE SOLUÇÃO (Need-Payoff)
**Objetivo:** Fazer o prospect visualizar a solução

5 perguntas para criar visão:
- Se resolvesse [problema], o que mudaria?
- Quanto economizaria se [benefício]?
- Como seria ter [resultado desejado]?
- O que faria com o tempo/dinheiro economizado?
- Que outras áreas seriam impactadas positivamente?

**TRANSIÇÕES:**
Frases para transitar entre cada fase naturalmente.

**SINAIS DE QUALIFICAÇÃO:**
- ✅ Sinais de que está qualificado
- ❌ Sinais de que não é o momento
- ⚠️ Sinais de alerta

**PRÓXIMOS PASSOS:**
Scripts para propor reunião/demo após qualificação.`,
    categoryId: 'prospeccao',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['spin', 'qualificação', 'vendas', 'perguntas'],
    copyCount: 1567,
    isNew: false,
    isFeatured: false,
    order: 2
  },

  // VENDAS - OBJEÇÕES
  {
    id: 'vendas_003',
    slug: 'respostas-objecoes-completo',
    title: 'Guia Completo de Objeções',
    description: 'Respostas para as 20 objeções mais comuns em vendas.',
    content: `Você é um closer com mais de 1000 vendas de alto ticket.

Crie respostas para objeções do meu produto:

**Produto/Serviço:** [O QUE VOCÊ VENDE]
**Preço:** [VALOR]
**Público:** [QUEM COMPRA]
**Diferencial:** [O QUE TE DESTACA]
**Garantia:** [TIPO DE GARANTIA]

**OBJEÇÕES E RESPOSTAS:**

### PREÇO
**"Está muito caro"**
- Resposta 1: Ancoragem de valor
- Resposta 2: Comparação com custo de não resolver
- Resposta 3: Parcelamento/facilidade

**"Não tenho dinheiro agora"**
- Resposta 1: Priorização
- Resposta 2: Plano de pagamento
- Resposta 3: Versão menor

**"Encontrei mais barato"**
- Resposta 1: Diferenciação
- Resposta 2: "Barato sai caro"
- Resposta 3: ROI comparativo

### TEMPO
**"Preciso pensar"**
- Resposta 1: Descoberta (o que falta?)
- Resposta 2: Urgência
- Resposta 3: Compromisso de próximo passo

**"Não é o momento"**
- Resposta 1: Custo de esperar
- Resposta 2: Quando seria o momento?
- Resposta 3: Início gradual

**"Estou muito ocupado"**
- Resposta 1: É justamente por isso...
- Resposta 2: Quanto tempo você perde com [problema]?
- Resposta 3: Fazemos tudo por você

### CONFIANÇA
**"Preciso falar com meu sócio/esposa"**
- Resposta 1: Incluir na conversa
- Resposta 2: Preparar para apresentar
- Resposta 3: Descobrir objeção real

**"Não conheço vocês"**
- Resposta 1: Provas sociais
- Resposta 2: Cases de sucesso
- Resposta 3: Garantia

**"Já fui enganado antes"**
- Resposta 1: Empatia + diferenciação
- Resposta 2: O que te faria confiar?
- Resposta 3: Começar pequeno

### NECESSIDADE
**"Não preciso disso"**
- Resposta 1: Volte ao problema
- Resposta 2: Pergunte mais
- Resposta 3: Case de alguém que pensava igual

**"Já tenho algo parecido"**
- Resposta 1: O que funciona? O que não?
- Resposta 2: Complementar vs substituir
- Resposta 3: Por que está conversando comigo então?

**"Vou resolver sozinho"**
- Resposta 1: Quanto tempo vai levar?
- Resposta 2: Quanto vai custar em erros?
- Resposta 3: Foco no seu core

**PARA CADA OBJEÇÃO:**
- A objeção
- Por que ela surge (psicologia)
- 3 formas de responder
- Pergunta para avançar
- O que NÃO fazer`,
    categoryId: 'objecoes',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['objeções', 'vendas', 'fechamento', 'respostas'],
    copyCount: 3245,
    isNew: false,
    isFeatured: true,
    order: 1
  },

  // VENDAS - PROPOSTAS
  {
    id: 'vendas_004',
    slug: 'proposta-comercial-irresistivel',
    title: 'Proposta Comercial Irresistível',
    description: 'Cria propostas que fecham negócios.',
    content: `Você é especialista em propostas comerciais de alto valor.

Crie uma proposta comercial para:

**Sua empresa:** [NOME]
**Cliente:** [NOME DO CLIENTE]
**Projeto/Serviço:** [O QUE ESTÁ PROPONDO]
**Valor total:** [INVESTIMENTO]
**Prazo:** [DURAÇÃO]

**Contexto:**
**Problema do cliente:** [DOR IDENTIFICADA]
**Objetivo dele:** [META QUE QUER ATINGIR]
**Reuniões anteriores:** [O QUE JÁ DISCUTIRAM]
**Concorrentes:** [OUTRAS PROPOSTAS EM AVALIAÇÃO]

**ESTRUTURA DA PROPOSTA:**

### CAPA
- Título da proposta
- Para: [Cliente]
- De: [Sua empresa]
- Data e validade

### 1. SUMÁRIO EXECUTIVO
(1 página máximo)
- Contexto em 2-3 parágrafos
- Solução proposta
- Investimento
- Resultado esperado
- Por que sua empresa

### 2. DIAGNÓSTICO
- Situação atual
- Desafios identificados
- Impacto do problema (em números se possível)
- Oportunidade de melhoria

### 3. SOLUÇÃO PROPOSTA
- Visão geral da solução
- Metodologia/Abordagem
- Fases do projeto
- Entregáveis específicos
- Timeline visual

### 4. BENEFÍCIOS ESPERADOS
- Benefícios tangíveis (números)
- Benefícios intangíveis
- ROI projetado
- Comparativo antes/depois

### 5. INVESTIMENTO
- Valor total
- O que está incluso
- Condições de pagamento
- Bônus/vantagens incluídas
- O que NÃO está incluso

### 6. GARANTIAS
- Garantia de satisfação
- SLAs se aplicável
- Suporte incluso

### 7. CASES DE SUCESSO
- 2-3 cases relevantes
- Resultados alcançados
- Depoimentos

### 8. PRÓXIMOS PASSOS
- Como aprovar
- Timeline de início
- Preparação necessária
- Contato direto

### 9. SOBRE A EMPRESA
- Breve sobre
- Diferenciais
- Equipe/credenciais

### ANEXOS
- Cronograma detalhado
- Termos e condições
- Escopo técnico (se necessário)`,
    categoryId: 'propostas',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['proposta', 'comercial', 'vendas', 'b2b'],
    copyCount: 1876,
    isNew: false,
    isFeatured: true,
    order: 1
  },

  // NEGÓCIOS - ESTRATÉGIA
  {
    id: 'negocios_001',
    slug: 'plano-negocios-lean',
    title: 'Plano de Negócios Lean (1 Página)',
    description: 'Cria um plano de negócios enxuto e prático.',
    content: `Você é consultor de startups e especialista em Lean Canvas.

Crie um plano de negócios lean para:

**Ideia/Negócio:** [DESCREVA O NEGÓCIO]
**Estágio:** [IDEIA/VALIDAÇÃO/TRAÇÃO/ESCALA]
**Investimento disponível:** [QUANTO PODE INVESTIR]
**Tempo disponível:** [DEDICAÇÃO - FULL TIME/PARCIAL]
**Habilidades do fundador:** [O QUE SABE FAZER]

**LEAN CANVAS:**

### 1. PROBLEMA (3 problemas)
Os 3 principais problemas que você resolve:
1. [Problema crítico]
2. [Problema importante]
3. [Problema desejável]

### 2. SEGMENTO DE CLIENTES
- Early adopters (primeiros clientes)
- Características específicas
- Onde encontrá-los
- Quanto estão dispostos a pagar

### 3. PROPOSTA DE VALOR ÚNICA
Uma frase que explica:
- O que você faz
- Para quem
- Por que é diferente

### 4. SOLUÇÃO
Para cada problema:
- Feature/solução específica
- MVP mínimo viável

### 5. CANAIS
Como vai:
- Adquirir clientes
- Entregar o produto
- Receber feedback

### 6. FONTES DE RECEITA
- Modelo de monetização
- Preço/ticket médio
- Projeção de faturamento

### 7. ESTRUTURA DE CUSTOS
- Custos fixos
- Custos variáveis
- Ponto de equilíbrio

### 8. MÉTRICAS-CHAVE
As 5 métricas que importam agora:
1. [Métrica de aquisição]
2. [Métrica de ativação]
3. [Métrica de retenção]
4. [Métrica de receita]
5. [Métrica de indicação]

### 9. VANTAGEM COMPETITIVA
O que você tem que é difícil copiar:
- [Vantagem 1]
- [Vantagem 2]

### PLANO DE AÇÃO (90 DIAS)
Mês 1: [3 ações]
Mês 2: [3 ações]
Mês 3: [3 ações]

### RISCOS E MITIGAÇÃO
3 principais riscos e como mitigar cada um.`,
    categoryId: 'estrategia',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['plano de negócios', 'lean', 'startup', 'estratégia'],
    copyCount: 2341,
    isNew: false,
    isFeatured: true,
    order: 1
  },
  {
    id: 'negocios_002',
    slug: 'analise-swot-completa',
    title: 'Análise SWOT Completa',
    description: 'Análise estratégica detalhada do seu negócio.',
    content: `Você é consultor estratégico com experiência em Fortune 500.

Crie uma análise SWOT completa para:

**Empresa/Projeto:** [NOME]
**Segmento:** [MERCADO]
**Fase:** [STARTUP/CRESCIMENTO/MATURIDADE]
**Objetivo:** [META PRINCIPAL]

**Contexto:**
**Produtos/Serviços:** [O QUE OFERECE]
**Diferenciais:** [PONTOS FORTES]
**Desafios:** [PROBLEMAS ATUAIS]
**Concorrentes:** [PRINCIPAIS]

**ANÁLISE SWOT:**

### FORÇAS (Strengths) - Internas
**O que você faz bem:**

1. [Força 1]
   - Por que é uma força
   - Como alavancar
   - Impacto competitivo

2. [Força 2]
   [mesma estrutura]

3-7. [Continue]

### FRAQUEZAS (Weaknesses) - Internas
**O que precisa melhorar:**

1. [Fraqueza 1]
   - Por que é fraqueza
   - Impacto no negócio
   - Como minimizar

2-7. [Continue]

### OPORTUNIDADES (Opportunities) - Externas
**O que o mercado oferece:**

1. [Oportunidade 1]
   - Por que é oportunidade
   - Como capturar
   - Timing

2-7. [Continue]

### AMEAÇAS (Threats) - Externas
**O que pode prejudicar:**

1. [Ameaça 1]
   - Por que é ameaça
   - Probabilidade
   - Como mitigar

2-7. [Continue]

### MATRIZ DE AÇÃO

**SO (Forças + Oportunidades):**
3 ações para usar forças e capturar oportunidades

**WO (Fraquezas + Oportunidades):**
3 ações para superar fraquezas aproveitando oportunidades

**ST (Forças + Ameaças):**
3 ações para usar forças e neutralizar ameaças

**WT (Fraquezas + Ameaças):**
3 ações defensivas para proteger o negócio

### PRIORIZAÇÃO
Top 5 ações por impacto x esforço.`,
    categoryId: 'estrategia',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['swot', 'análise', 'estratégia', 'planejamento'],
    copyCount: 1654,
    isNew: false,
    isFeatured: false,
    order: 2
  },

  // NEGÓCIOS - RH
  {
    id: 'rh_001',
    slug: 'descricao-vaga-atrativa',
    title: 'Descrição de Vaga que Atrai Talentos',
    description: 'Cria job descriptions que atraem os melhores candidatos.',
    content: `Você é especialista em Talent Acquisition e Employer Branding.

Crie uma descrição de vaga para:

**Cargo:** [TÍTULO DA POSIÇÃO]
**Nível:** [JÚNIOR/PLENO/SÊNIOR/LIDERANÇA]
**Modelo:** [PRESENCIAL/HÍBRIDO/REMOTO]
**Localização:** [CIDADE/ESTADO]
**Empresa:** [NOME E SEGMENTO]
**Faixa salarial:** [SE QUISER INFORMAR]

**Sobre a vaga:**
**Área:** [DEPARTAMENTO]
**Reporta para:** [CARGO DO GESTOR]
**Tamanho do time:** [PESSOAS]
**Principais desafios:** [O QUE A PESSOA VAI ENFRENTAR]

**ESTRUTURA DA VAGA:**

### TÍTULO ATRATIVO
(Mais que só o cargo)
Ex: "Product Manager - Transforme a Experiência de Milhões"

### SOBRE A EMPRESA
- O que fazemos (2-3 linhas)
- Nossa missão
- Por que trabalhamos aqui
- Números impressionantes
- Cultura em uma frase

### SOBRE A OPORTUNIDADE
- O que essa pessoa vai fazer
- Impacto do cargo
- Por que existe essa vaga
- O que vai aprender

### RESPONSABILIDADES
(6-8 bullets, foco no impacto, não em tarefas)
- "Você vai [verbo de ação] para [resultado]"

### REQUISITOS
**Obrigatórios:**
(Apenas o essencial)

**Desejáveis:**
(Nice to have)

**Soft Skills:**
(3-4 características pessoais)

### BENEFÍCIOS
(Lista completa e honesta)
- Remuneração
- Benefícios tradicionais
- Diferenciais da empresa
- Desenvolvimento

### PROCESSO SELETIVO
- Etapas
- Duração esperada
- O que avaliam

### CTA
- Como se candidatar
- Prazo se houver
- Contato para dúvidas

**VERSÃO RESUMIDA:**
Para LinkedIn (até 300 caracteres)

**DICAS DE DIVULGAÇÃO:**
- Onde publicar
- Hashtags
- Título SEO`,
    categoryId: 'rh',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['vaga', 'recrutamento', 'rh', 'job description'],
    copyCount: 1432,
    isNew: false,
    isFeatured: false,
    order: 1
  },
  {
    id: 'rh_002',
    slug: 'roteiro-entrevista-competencias',
    title: 'Roteiro de Entrevista por Competências',
    description: 'Perguntas estruturadas para avaliar candidatos.',
    content: `Você é especialista em recrutamento e seleção.

Crie um roteiro de entrevista para:

**Cargo:** [POSIÇÃO]
**Nível:** [JÚNIOR/PLENO/SÊNIOR]
**Competências críticas:**
1. [COMPETÊNCIA 1]
2. [COMPETÊNCIA 2]
3. [COMPETÊNCIA 3]
4. [COMPETÊNCIA 4]

**ROTEIRO DA ENTREVISTA:**

### ABERTURA (5 min)
- Apresentação
- Quebra-gelo
- Explicação do processo

### PERGUNTAS COMPORTAMENTAIS (STAR)
Para cada competência, 3 perguntas usando método STAR:

**Competência 1: [NOME]**

Pergunta 1:
"Me conte sobre uma situação em que você [contexto relacionado à competência]..."
- O que buscar na resposta
- Red flags
- Follow-ups

Pergunta 2:
[mesma estrutura]

Pergunta 3:
[mesma estrutura]

[Repita para cada competência]

### PERGUNTAS SITUACIONAIS
3 cenários hipotéticos:
"O que você faria se..."
- Cenário 1
- Cenário 2
- Cenário 3

### PERGUNTAS TÉCNICAS
5 perguntas para avaliar conhecimento técnico.

### MOTIVAÇÃO E FIT CULTURAL
- Por que essa empresa?
- Por que essa posição?
- Onde se vê em 3 anos?
- Como é seu ambiente ideal?
- O que te motiva/desmotiva?

### PERGUNTAS DO CANDIDATO
- Tempo para perguntas
- O que isso revela

### FECHAMENTO
- Próximos passos
- Timeline
- Agradecimento

### SCORECARD
Planilha de avaliação:
- Competência → Nota (1-5) → Observações
- Parecer final
- Recomendação

### RED FLAGS
Sinais de alerta a observar durante a entrevista.`,
    categoryId: 'rh',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['entrevista', 'recrutamento', 'rh', 'seleção'],
    copyCount: 987,
    isNew: false,
    isFeatured: false,
    order: 2
  },

  // ATENDIMENTO - SAC
  {
    id: 'atend_001',
    slug: 'respostas-sac-padrão',
    title: 'Templates de Respostas para SAC',
    description: 'Respostas profissionais para atendimento ao cliente.',
    content: `Você é especialista em Customer Experience e atendimento.

Crie templates de resposta para:

**Empresa:** [NOME DA EMPRESA]
**Segmento:** [ÁREA DE ATUAÇÃO]
**Tom de voz:** [FORMAL/AMIGÁVEL/DESCONTRAÍDO]
**Canais:** [EMAIL/CHAT/WHATSAPP/TELEFONE]

**SITUAÇÕES E RESPOSTAS:**

### SAUDAÇÕES
**Abertura de atendimento:**
- Versão formal
- Versão casual
- Versão para cliente antigo

**Despedida:**
- Versão padrão
- Versão após resolver problema
- Versão após não resolver

### INFORMAÇÕES
**Dúvida sobre produto/serviço:**
- Template com placeholder para info

**Dúvida sobre preços:**
- Como apresentar valores

**Dúvida sobre prazo:**
- Entrega
- Instalação
- Atendimento

### PROBLEMAS
**Produto com defeito:**
- Primeira resposta
- Se não resolver
- Escalação

**Atraso na entrega:**
- Pedido de desculpas
- Explicação
- Compensação

**Cobrança indevida:**
- Reconhecer
- Solucionar
- Compensar

**Serviço não prestado:**
- Entender
- Resolver
- Prevenir

### RECLAMAÇÕES GRAVES
**Cliente muito irritado:**
- Acalmar
- Demonstrar empatia
- Resolver

**Ameaça de processo/Procon:**
- Resposta adequada
- Escalação
- Registro

**Reclamação pública (redes):**
- Resposta no canal
- Convite para privado
- Follow-up

### SOLICITAÇÕES
**Cancelamento:**
- Tentar reter
- Se não der, facilitar
- Feedback

**Reembolso:**
- Quando aceitar
- Processo
- Prazo

**Troca:**
- Condições
- Processo
- Alternativas

### FIDELIZAÇÃO
**Agradecimento por compra:**
- Primeira compra
- Cliente recorrente
- Grande compra

**Pedido de feedback:**
- Após atendimento
- Após compra
- NPS

**PARA CADA TEMPLATE:**
- Versão email
- Versão chat/WhatsApp
- Variações de tom`,
    categoryId: 'sac',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['sac', 'atendimento', 'customer service', 'templates'],
    copyCount: 2876,
    isNew: false,
    isFeatured: true,
    order: 1
  },
  {
    id: 'atend_002',
    slug: 'fluxo-chatbot-atendimento',
    title: 'Fluxo de Chatbot para Atendimento',
    description: 'Cria fluxos conversacionais para automação de atendimento.',
    content: `Você é especialista em design conversacional e chatbots.

Crie um fluxo de chatbot para:

**Empresa:** [NOME]
**Objetivo do bot:** [ATENDER/VENDER/QUALIFICAR]
**Canais:** [SITE/WHATSAPP/INSTAGRAM]
**Integração humana:** [QUANDO TRANSFERIR]

**Perguntas frequentes:**
1. [FAQ 1]
2. [FAQ 2]
3. [FAQ 3]
4. [FAQ 4]
5. [FAQ 5]

**ESTRUTURA DO FLUXO:**

### ABERTURA
**Saudação inicial:**
- Durante horário comercial
- Fora do horário
- Retorno de usuário

**Menu principal:**
"Olá! 👋 Sou o [Nome do Bot]. Como posso ajudar?

1️⃣ [Opção 1]
2️⃣ [Opção 2]
3️⃣ [Opção 3]
4️⃣ Falar com atendente"

### FLUXO 1 - [TEMA]
**Intenção:** O que o usuário quer

Passo 1:
- Mensagem do bot
- Opções de resposta
- Próximo passo para cada opção

Passo 2:
[Continue o fluxo]

Resolução:
- Se resolver automaticamente
- Se precisar de humano

### FLUXO 2 - [TEMA]
[Mesma estrutura]

### FLUXO 3 - [TEMA]
[Mesma estrutura]

### TRANSFERÊNCIA PARA HUMANO
**Quando transferir:**
- Critérios automáticos
- Solicitação do usuário

**Mensagem de transferência:**
- Durante horário
- Fora do horário

**Coleta de informações antes:**
- Nome
- Email/telefone
- Resumo do problema

### FALLBACKS
**Não entendeu:**
- Primeira vez
- Segunda vez
- Terceira vez (transferir)

**Erro técnico:**
- Mensagem de contingência

### FECHAMENTO
**Após resolver:**
- Perguntar se ajuda em mais algo
- Pedir avaliação
- Despedida

### MÉTRICAS SUGERIDAS
- Taxa de resolução
- Tempo médio
- Satisfação
- Taxa de transferência`,
    categoryId: 'chatbot',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['chatbot', 'automação', 'atendimento', 'conversacional'],
    copyCount: 1234,
    isNew: true,
    isFeatured: false,
    order: 1
  },
];
