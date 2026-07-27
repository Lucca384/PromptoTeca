import { Prompt } from '@/types';

export const marketingPrompts: Prompt[] = [
  // COPYWRITING
  {
    id: 'copy_001',
    slug: 'headline-formula-aida',
    title: 'Gerador de Headlines com Fórmula AIDA',
    description: 'Cria headlines poderosas usando a fórmula AIDA (Atenção, Interesse, Desejo, Ação) para máxima conversão.',
    content: `Você é um copywriter especialista com 20 anos de experiência em headlines de alta conversão.

Use a fórmula AIDA para criar 10 headlines irresistíveis:

**Produto/Serviço:** [DESCREVA SEU PRODUTO]
**Público-alvo:** [QUEM É SEU CLIENTE IDEAL]
**Principal benefício:** [TRANSFORMAÇÃO QUE VOCÊ ENTREGA]
**Preço/Oferta:** [VALOR OU OFERTA ESPECIAL]

Para cada headline, siga esta estrutura:

**ATENÇÃO:** Capture o olhar imediatamente
- Use números específicos
- Crie curiosidade
- Seja ousado

**INTERESSE:** Mantenha o leitor engajado
- Mencione o problema
- Prometa a solução

**DESEJO:** Desperte a vontade
- Mostre o benefício
- Crie urgência

**AÇÃO:** Induza o próximo passo
- Implique ação imediata

Entregue:
1. 10 headlines completas (máx. 12 palavras cada)
2. Para cada uma, indique:
   - Qual elemento AIDA é mais forte
   - Gatilho mental utilizado
   - Onde usar (anúncio, landing page, email)

Bônus: Crie 3 subheadlines complementares para as 3 melhores headlines.`,
    categoryId: 'copywriting',
    type: 'simple',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['headline', 'aida', 'copywriting', 'conversão'],
    copyCount: 2847,
    isNew: false,
    isFeatured: true,
    order: 1
  },
  {
    id: 'copy_002',
    slug: 'pas-formula-copy',
    title: 'Copy Completa com Fórmula PAS',
    description: 'Estrutura de copy usando Problema-Agitação-Solução para páginas de vendas.',
    content: `Você é um copywriter direto-resposta especializado na fórmula PAS.

Crie uma copy de vendas completa usando:

**Produto:** [SEU PRODUTO/SERVIÇO]
**Avatar:** [DESCRIÇÃO DETALHADA DO CLIENTE]
**Preço:** [VALOR]
**Garantia:** [TIPO DE GARANTIA]

**ESTRUTURA PAS:**

## PROBLEMA (3-4 parágrafos)
- Descreva a dor atual do cliente
- Seja específico e empático
- Use linguagem do cliente
- Faça ele se sentir compreendido

## AGITAÇÃO (3-4 parágrafos)  
- Intensifique a dor
- Mostre as consequências de não resolver
- Projete o futuro negativo
- Crie urgência emocional

## SOLUÇÃO (4-5 parágrafos)
- Apresente seu produto como a resposta
- Liste os benefícios (não características)
- Prove com dados/depoimentos
- Mostre a transformação

## CALL TO ACTION
- CTA primário
- CTA secundário
- Elemento de urgência/escassez

Inclua também:
- 5 bullets de benefícios
- 3 provas sociais sugeridas
- Headline + subheadline`,
    categoryId: 'copywriting',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['pas', 'copy', 'página de vendas', 'conversão'],
    copyCount: 1923,
    isNew: false,
    isFeatured: true,
    order: 2
  },
  {
    id: 'copy_003',
    slug: 'bullets-transformacionais',
    title: 'Bullets Transformacionais que Vendem',
    description: 'Transforma características em benefícios emocionais com bullets irresistíveis.',
    content: `Você é especialista em escrever bullets de vendas que convertem.

Transforme as informações abaixo em bullets magnéticos:

**Produto:** [NOME DO PRODUTO]
**Características principais:**
1. [CARACTERÍSTICA 1]
2. [CARACTERÍSTICA 2]
3. [CARACTERÍSTICA 3]
4. [CARACTERÍSTICA 4]
5. [CARACTERÍSTICA 5]

**Público-alvo:** [QUEM VAI COMPRAR]
**Maior dor:** [PROBLEMA PRINCIPAL]
**Maior desejo:** [SONHO DO CLIENTE]

Para cada característica, crie 3 tipos de bullets:

**BULLET DE BENEFÍCIO:**
✓ Foco no que o cliente GANHA
"Descubra como [BENEFÍCIO] mesmo que [OBJEÇÃO]"

**BULLET DE CURIOSIDADE:**
✓ Desperta vontade de saber mais
"O método de 3 passos que [RESULTADO IMPRESSIONANTE]"

**BULLET DE PROVA:**
✓ Usa dados e especificidade
"127 clientes já [RESULTADO] em menos de [TEMPO]"

**REGRAS:**
- Máximo 2 linhas por bullet
- Comece com verbo de ação ou número
- Inclua resultado específico
- Use gatilhos de escassez quando apropriado

Entregue 15 bullets no total (3 para cada característica).`,
    categoryId: 'copywriting',
    type: 'simple',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['bullets', 'benefícios', 'vendas', 'copywriting'],
    copyCount: 1654,
    isNew: false,
    isFeatured: false,
    order: 3
  },
  {
    id: 'copy_004',
    slug: 'storytelling-jornada-heroi',
    title: 'Storytelling - Jornada do Herói para Vendas',
    description: 'Cria histórias de vendas usando a estrutura clássica da Jornada do Herói.',
    content: `Você é um storyteller profissional especializado em narrativas de vendas.

Crie uma história de vendas seguindo a Jornada do Herói:

**Contexto:**
- Produto/Serviço: [O QUE VOCÊ VENDE]
- Protagonista: [CLIENTE IDEAL - use nome fictício]
- Transformação: [ANTES → DEPOIS]
- Vilão: [PROBLEMA/OBSTÁCULO PRINCIPAL]

**ESTRUTURA DA JORNADA:**

### 1. MUNDO COMUM (2-3 frases)
A vida do herói antes da transformação. Rotina, frustrações, mediocridade.

### 2. CHAMADO À AVENTURA (2-3 frases)
O momento em que algo muda. Um problema se intensifica.

### 3. RECUSA DO CHAMADO (1-2 frases)
As dúvidas, medos, objeções iniciais.

### 4. ENCONTRO COM O MENTOR (2-3 frases)
Quando descobre a solução (seu produto). O "guru" aparece.

### 5. CRUZANDO O LIMIAR (1-2 frases)
A decisão de agir. O momento da compra.

### 6. TESTES E ALIADOS (2-3 frases)
Os primeiros resultados, pequenas vitórias.

### 7. APROXIMAÇÃO DA CAVERNA (1-2 frases)
O desafio maior. O medo de não conseguir.

### 8. PROVAÇÃO SUPREMA (2-3 frases)
O momento de virada. A grande transformação.

### 9. RECOMPENSA (2-3 frases)
Os resultados finais. A nova realidade.

### 10. RETORNO COM O ELIXIR (1-2 frases)
O herói compartilha a descoberta. CTA implícito.

**Tom:** Emocional, específico, sensorial
**Tamanho total:** 400-600 palavras`,
    categoryId: 'copywriting',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['storytelling', 'jornada do herói', 'narrativa', 'vendas'],
    copyCount: 1432,
    isNew: false,
    isFeatured: true,
    order: 4
  },
  {
    id: 'copy_005',
    slug: 'garantia-irresistivel',
    title: 'Texto de Garantia Irresistível',
    description: 'Cria textos de garantia que eliminam objeções e aumentam conversões.',
    content: `Você é especialista em reduzir risco percebido através de garantias poderosas.

Crie uma garantia irresistível para:

**Produto:** [SEU PRODUTO]
**Preço:** [VALOR]
**Prazo de garantia:** [7/15/30/365 dias]
**Tipo:** [Reembolso total / Parcial / Troca]

**Objeções comuns dos clientes:**
1. [OBJEÇÃO 1]
2. [OBJEÇÃO 2]
3. [OBJEÇÃO 3]

**ENTREGUE:**

### 1. NOME DA GARANTIA
Crie um nome memorável e poderoso
Ex: "Garantia Resultado ou Reembolso Total"

### 2. TEXTO PRINCIPAL (100-150 palavras)
- Comece com confiança absoluta
- Explique exatamente o que está coberto
- Seja específico sobre o processo
- Elimine qualquer risco percebido
- Use linguagem empática

### 3. BULLETS DE CONFIANÇA
- ✅ [Benefício da garantia 1]
- ✅ [Benefício da garantia 2]
- ✅ [Benefício da garantia 3]

### 4. FRASE DE INVERSÃO DE RISCO
Uma frase poderosa que mostra que TODO o risco está com você, não com o cliente.

### 5. SELO/BADGE DE GARANTIA
Descrição de como deve ser o visual do selo.

### 6. FAQ DA GARANTIA
3 perguntas frequentes sobre a garantia com respostas confiantes.`,
    categoryId: 'copywriting',
    type: 'simple',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['garantia', 'conversão', 'objeções', 'confiança'],
    copyCount: 987,
    isNew: false,
    isFeatured: false,
    order: 5
  },
  {
    id: 'copy_006',
    slug: 'urgencia-escassez',
    title: 'Gatilhos de Urgência e Escassez',
    description: 'Cria elementos de urgência e escassez éticos que aceleram decisões.',
    content: `Você é especialista em psicologia de vendas e gatilhos mentais.

Crie elementos de urgência e escassez para:

**Produto:** [SEU PRODUTO/SERVIÇO]
**Tipo de oferta:** [Lançamento / Promoção / Black Friday / etc]
**Duração real:** [PERÍODO DA OFERTA]
**Limitação real:** [VAGAS / ESTOQUE / BÔNUS]

**IMPORTANTE:** Todos os elementos devem ser VERDADEIROS e ÉTICOS.

**ENTREGUE:**

### URGÊNCIA DE TEMPO

**1. Countdown Copy (3 variações)**
Frases para usar junto com timer de contagem regressiva.

**2. Deadline Headlines (5 variações)**
Headlines com prazo específico.

**3. Última Chance Copy (3 variações)**
Texto para o último dia/horas.

### ESCASSEZ DE QUANTIDADE

**1. Vagas Limitadas (3 variações)**
Para produtos/serviços com limite de pessoas.

**2. Estoque Limitado (3 variações)**
Para produtos físicos ou digitais.

**3. Bônus Limitado (3 variações)**
Para bônus que serão removidos.

### ESCASSEZ DE PREÇO

**1. Preço Sobe (3 variações)**
Comunicando aumento de preço futuro.

**2. Desconto Temporário (3 variações)**
Comunicando desconto que acaba.

### COMBINADOS

**3 textos completos** combinando urgência + escassez de forma natural e ética.

**REGRAS:**
- Nunca minta sobre limitações
- Seja específico com números e datas
- Justifique a limitação quando possível`,
    categoryId: 'copywriting',
    type: 'simple',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['urgência', 'escassez', 'gatilhos mentais', 'conversão'],
    copyCount: 876,
    isNew: true,
    isFeatured: false,
    order: 6
  },

  // EMAIL MARKETING
  {
    id: 'email_001',
    slug: 'sequencia-lancamento-7-emails',
    title: 'Sequência de Lançamento (7 Emails)',
    description: 'Sequência completa de 7 emails para lançamento de produto digital.',
    content: `Você é um especialista em email marketing de lançamentos digitais.

Crie uma sequência de 7 emails de lançamento para:

**Produto:** [NOME DO PRODUTO]
**Preço de lançamento:** [VALOR]
**Preço normal:** [VALOR CHEIO]
**Data de abertura do carrinho:** [DATA]
**Data de fechamento:** [DATA]
**Bônus de lançamento:** [LISTE OS BÔNUS]

**Avatar:**
- Nome: [NOME FICTÍCIO]
- Dor principal: [PROBLEMA]
- Desejo principal: [SONHO]

**ESTRUTURA DA SEQUÊNCIA:**

### EMAIL 1 - AQUECIMENTO (D-3)
**Objetivo:** Gerar expectativa
- Assunto (3 opções)
- Preview text
- Corpo: Anuncie que algo está chegando
- Não revele o produto ainda
- Crie curiosidade extrema

### EMAIL 2 - HISTÓRIA (D-2)
**Objetivo:** Conexão emocional
- Assunto (3 opções)
- Corpo: Conte sua história ou de um cliente
- Problema → Descoberta → Transformação
- Termine com: "Amanhã revelo tudo"

### EMAIL 3 - REVELAÇÃO (D-1)
**Objetivo:** Apresentar o produto
- Assunto (3 opções)
- Corpo: Revele o produto
- Benefícios principais (bullets)
- Preview da oferta
- "Amanhã abre o carrinho"

### EMAIL 4 - ABERTURA (D-Day)
**Objetivo:** Primeira venda
- Assunto (3 opções) com urgência
- Corpo: Carrinho aberto!
- Oferta completa
- Bônus de early bird
- CTA forte

### EMAIL 5 - PROVA SOCIAL (D+1)
**Objetivo:** Eliminar dúvidas
- Assunto (3 opções)
- Corpo: Depoimentos e resultados
- Perguntas frequentes respondidas
- Lembrete da oferta

### EMAIL 6 - OBJEÇÕES (D+2)
**Objetivo:** Quebrar objeções
- Assunto (3 opções)
- Corpo: "Talvez você esteja pensando..."
- Liste e quebre 3-5 objeções
- Reforce a garantia

### EMAIL 7 - ÚLTIMO DIA (D+3)
**Objetivo:** Fechamento
- Assunto (3 opções) com URGÊNCIA
- Corpo: Últimas horas
- Resumo de tudo que está perdendo
- Escassez real
- CTA final poderoso

Para cada email inclua:
- 3 opções de assunto
- Preview text
- Corpo completo
- CTA`,
    categoryId: 'email-marketing',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['lançamento', 'email', 'sequência', 'vendas'],
    copyCount: 2341,
    isNew: false,
    isFeatured: true,
    order: 1
  },
  {
    id: 'email_002',
    slug: 'welcome-sequence-5-emails',
    title: 'Sequência de Boas-Vindas (5 Emails)',
    description: 'Nutra novos leads e prepare-os para comprar com esta sequência.',
    content: `Você é especialista em nutrição de leads via email.

Crie uma sequência de boas-vindas de 5 emails:

**Negócio:** [DESCREVA SEU NEGÓCIO]
**Lead Magnet entregue:** [O QUE A PESSOA BAIXOU]
**Produto a ser vendido:** [PRODUTO PRINCIPAL]
**Preço do produto:** [VALOR]

**Público:**
- Quem são: [DESCRIÇÃO]
- Maior dor: [PROBLEMA]
- Maior desejo: [OBJETIVO]

**ESTRUTURA:**

### EMAIL 1 - ENTREGA IMEDIATA (Minuto 0)
**Objetivo:** Entregar o prometido + primeira impressão

Estrutura:
- Assunto: Direto ao ponto
- Cumprimente pelo nome
- Entregue o lead magnet
- Breve apresentação (2-3 linhas)
- O que esperar dos próximos emails
- PS: Uma dica rápida de como usar o material

### EMAIL 2 - SUA HISTÓRIA (Dia 1)
**Objetivo:** Criar conexão e autoridade

Estrutura:
- Assunto: Curioso/Pessoal
- Conte sua jornada (versão curta)
- De onde você veio
- Como chegou onde está
- Por que decidiu ajudar outros
- PS: Preview do próximo email

### EMAIL 3 - CONTEÚDO DE VALOR (Dia 2)
**Objetivo:** Provar expertise

Estrutura:
- Assunto: Promessa de valor
- Dica prática e acionável
- Passo a passo se possível
- Resultados esperados
- PS: Convite para responder o email

### EMAIL 4 - CASES/PROVAS (Dia 4)
**Objetivo:** Prova social

Estrutura:
- Assunto: Nome + resultado
- História de sucesso (cliente ou sua)
- Antes e depois específicos
- Como a transformação aconteceu
- PS: Menção sutil do produto

### EMAIL 5 - SOFT PITCH (Dia 6)
**Objetivo:** Primeira oferta suave

Estrutura:
- Assunto: Pergunta ou curiosidade
- Reconheça a jornada até aqui
- Identifique o próximo passo lógico
- Apresente seu produto como solução
- Sem pressão, com clareza
- PS: Oferta ou próximo passo claro

Para cada email:
- 3 opções de assunto
- Preview text
- Corpo completo (~200 palavras)
- CTA apropriado`,
    categoryId: 'email-marketing',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['boas-vindas', 'nutrição', 'leads', 'automação'],
    copyCount: 1876,
    isNew: false,
    isFeatured: false,
    order: 2
  },
  {
    id: 'email_003',
    slug: 'assuntos-email-alta-abertura',
    title: '50 Assuntos de Email Alta Abertura',
    description: 'Gera 50 assuntos de email irresistíveis categorizados por tipo.',
    content: `Você é especialista em copywriting para assuntos de email.

Gere 50 assuntos de email de alta abertura para:

**Nicho:** [SEU NICHO]
**Produto/Serviço:** [O QUE VOCÊ VENDE]
**Tom de voz:** [FORMAL/CASUAL/AMIGÁVEL]
**Público:** [DESCRIÇÃO DO PÚBLICO]

**ORGANIZE EM CATEGORIAS (10 de cada):**

### 1. CURIOSIDADE (10 assuntos)
Assuntos que criam um "gap de curiosidade"
Exemplos de estrutura:
- "O que [PESSOA FAMOSA] sabe sobre [TEMA] que você não sabe"
- "Eu estava errado sobre [TEMA]"
- "Isso vai mudar como você pensa sobre [X]"

### 2. BENEFÍCIO DIRETO (10 assuntos)
Assuntos que prometem resultado claro
Exemplos:
- "Como [RESULTADO] em [TEMPO]"
- "[NÚMERO] formas de [BENEFÍCIO]"
- "O método para [RESULTADO DESEJADO]"

### 3. URGÊNCIA (10 assuntos)
Assuntos com senso de tempo
Exemplos:
- "Últimas horas para [AÇÃO]"
- "Isso expira amanhã"
- "[Nome], você viu isso?"

### 4. PESSOAL/CONVERSACIONAL (10 assuntos)
Assuntos que parecem de amigo
Exemplos:
- "Uma pergunta rápida"
- "Posso ser honesto?"
- "Eu preciso te contar uma coisa"

### 5. NÚMEROS E DADOS (10 assuntos)
Assuntos com especificidade
Exemplos:
- "147% mais [RESULTADO] com isso"
- "3 minutos para [BENEFÍCIO]"
- "O erro que 87% cometem"

**REGRAS:**
- Máximo 50 caracteres quando possível
- Evite palavras de spam
- Use emojis com moderação (máx 1)
- Personalize com [Nome] quando apropriado
- Seja específico, não genérico`,
    categoryId: 'email-marketing',
    type: 'simple',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['assunto', 'email', 'abertura', 'copywriting'],
    copyCount: 2156,
    isNew: false,
    isFeatured: true,
    order: 3
  },
  {
    id: 'email_004',
    slug: 'cold-email-b2b',
    title: 'Cold Email B2B que Gera Reuniões',
    description: 'Emails frios profissionais para prospecção B2B com alta taxa de resposta.',
    content: `Você é especialista em cold email B2B com taxa de resposta acima de 15%.

Crie cold emails para:

**Seu produto/serviço:** [O QUE VOCÊ VENDE]
**Cargo-alvo:** [CEO/CMO/DIRETOR/GERENTE]
**Tamanho da empresa:** [PME/MÉDIAS/GRANDES]
**Indústria:** [SETOR DE ATUAÇÃO]

**Seu diferencial:** [POR QUE ESCOLHER VOCÊ]
**Resultado que entrega:** [BENEFÍCIO PRINCIPAL]
**Prova social:** [CASE OU NÚMERO]

**CRIE 5 ABORDAGENS DIFERENTES:**

### ABORDAGEM 1 - DIRETO AO PONTO
- Assunto (máx 5 palavras)
- 3-4 linhas apenas
- Problema → Solução → Pergunta
- Sem enrolação

### ABORDAGEM 2 - CASE DE SUCESSO
- Assunto com nome de empresa similar
- Mencione resultado de cliente
- Sugira possibilidade similar
- CTA para call rápida

### ABORDAGEM 3 - INSIGHT/VALOR
- Assunto provocativo
- Compartilhe dado ou insight
- Conecte ao problema deles
- Ofereça conversa

### ABORDAGEM 4 - EVENTO/GATILHO
- Assunto: Sobre [evento recente]
- Referencie notícia/movimento
- Conecte ao seu serviço
- Proponha troca de ideias

### ABORDAGEM 5 - PERGUNTA CONSULTIVA
- Assunto: Pergunta
- Faça pergunta relevante
- Mostre que entende o contexto
- Peça opinião + ofereça ajuda

**REGRAS PARA TODOS:**
- Máximo 100 palavras no corpo
- Personalizável com [VARIÁVEIS]
- Sem "Espero que esteja bem"
- Foque no prospect, não em você
- CTA suave (pergunta, não comando)
- PS opcional com prova social`,
    categoryId: 'email-marketing',
    type: 'simple',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['cold email', 'b2b', 'prospecção', 'vendas'],
    copyCount: 1543,
    isNew: false,
    isFeatured: false,
    order: 4
  },
  {
    id: 'email_005',
    slug: 'recuperacao-carrinho-abandonado',
    title: 'Sequência Recuperação de Carrinho (3 Emails)',
    description: 'Recupere vendas perdidas com emails de carrinho abandonado.',
    content: `Você é especialista em recuperação de carrinhos abandonados.

Crie uma sequência de 3 emails para:

**Produto abandonado:** [NOME DO PRODUTO]
**Preço:** [VALOR]
**Incentivo disponível:** [DESCONTO/FRETE/BÔNUS]

**SEQUÊNCIA:**

### EMAIL 1 - LEMBRETE SUAVE (1 hora após)
**Objetivo:** Lembrar sem pressionar

**Assunto (3 opções):**
- Algo casual/amigável
- Referência ao carrinho
- Pergunta suave

**Corpo:**
- Tom amigável, não agressivo
- "Notamos que você deixou algo para trás"
- Imagem/nome do produto
- Responda possíveis objeções sutilmente
- Link direto para o carrinho
- Sem desconto ainda

### EMAIL 2 - VALOR + URGÊNCIA (24 horas após)
**Objetivo:** Reforçar valor e criar urgência

**Assunto (3 opções):**
- Mencione benefício
- Crie leve urgência
- Personalize

**Corpo:**
- Reforce os benefícios do produto
- Adicione prova social (avaliações)
- Responda objeção de preço
- Mencione garantia
- Crie urgência: "Reservamos por mais 24h"
- Link para o carrinho

### EMAIL 3 - ÚLTIMA CHANCE + INCENTIVO (48 horas após)
**Objetivo:** Converter com incentivo

**Assunto (3 opções):**
- Urgência máxima
- Mencione o incentivo
- Última chance

**Corpo:**
- "Última mensagem sobre isso"
- Revele o incentivo (desconto/bônus)
- Resumo de tudo que está levando
- Forte urgência (expira em X horas)
- Código do cupom se aplicável
- CTA direto e claro
- PS: Reforce a garantia

**Para cada email inclua:**
- 3 opções de assunto
- Preview text
- Corpo completo
- CTA com link`,
    categoryId: 'email-marketing',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['carrinho abandonado', 'e-commerce', 'recuperação', 'vendas'],
    copyCount: 1234,
    isNew: true,
    isFeatured: false,
    order: 5
  },

  // BRANDING
  {
    id: 'brand_001',
    slug: 'brand-voice-guidelines',
    title: 'Guia de Tom de Voz da Marca',
    description: 'Define a personalidade e tom de comunicação da sua marca.',
    content: `Você é especialista em branding e comunicação de marca.

Crie um guia completo de tom de voz para:

**Nome da marca:** [NOME]
**Segmento:** [NICHO DE ATUAÇÃO]
**Público-alvo:** [DESCRIÇÃO DETALHADA]
**Valores da marca:** [3-5 VALORES]
**Concorrentes:** [PRINCIPAIS CONCORRENTES]

**ENTREGUE:**

### 1. PERSONALIDADE DA MARCA
Descreva a marca como se fosse uma pessoa:
- Idade aproximada
- Profissão
- Como se veste
- Como fala
- O que valoriza
- O que detesta

### 2. PILARES DO TOM DE VOZ
Defina 4 características principais com espectro:
- [CARACTERÍSTICA 1] ←→ [OPOSTO]
  Onde estamos: [posição na escala]
  
Exemplo:
- Formal ←→ Casual: 70% casual
- Sério ←→ Bem-humorado: 40% bem-humorado

### 3. VOCABULÁRIO
**Palavras que USAMOS:**
- Lista de 20 palavras/expressões que representam a marca

**Palavras que EVITAMOS:**
- Lista de 20 palavras/expressões proibidas

### 4. EXEMPLOS PRÁTICOS
Para cada contexto, escreva exemplo do tom correto:

- Post de Instagram
- Resposta a reclamação
- Email de vendas
- Bio de rede social
- Descrição de produto

### 5. DO's AND DON'Ts
Lista de 10 "Faça" e 10 "Não faça" na comunicação.

### 6. ADAPTAÇÕES POR CANAL
Como o tom varia em:
- Instagram
- LinkedIn
- Email
- WhatsApp
- Site`,
    categoryId: 'branding',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['branding', 'tom de voz', 'identidade', 'comunicação'],
    copyCount: 987,
    isNew: false,
    isFeatured: false,
    order: 1
  },
  {
    id: 'brand_002',
    slug: 'naming-marca',
    title: 'Gerador de Nomes para Marca',
    description: 'Cria opções de nomes memoráveis para sua marca ou produto.',
    content: `Você é especialista em naming e criação de marcas.

Crie opções de nome para:

**Tipo:** [Empresa / Produto / Serviço / App]
**Segmento:** [ÁREA DE ATUAÇÃO]
**Proposta de valor:** [O QUE OFERECE DE ÚNICO]
**Público-alvo:** [QUEM VAI USAR]
**Personalidade:** [SÉRIA/DIVERTIDA/INOVADORA/etc]
**Nomes que GOSTA:** [REFERÊNCIAS]
**Nomes que NÃO GOSTA:** [O QUE EVITAR]

**GERE 30 OPÇÕES EM 6 CATEGORIAS:**

### 1. DESCRITIVOS (5 nomes)
Nomes que descrevem o que é/faz
Ex: PayPal, YouTube

### 2. INVENTADOS (5 nomes)
Palavras novas, únicas
Ex: Google, Spotify

### 3. COMPOSTOS (5 nomes)
Junção de duas palavras
Ex: Facebook, Instagram

### 4. METÁFORAS (5 nomes)
Associação com conceitos
Ex: Amazon, Apple

### 5. ACRÔNIMOS (5 nomes)
Siglas que formam palavras
Ex: NASA, ASAP

### 6. PESSOAIS/LOCAIS (5 nomes)
Nomes próprios ou lugares
Ex: Tesla, Adobe

**PARA CADA NOME, INCLUA:**
- O nome
- Por que funciona
- Facilidade de pronúncia: Alta/Média/Baixa
- Disponibilidade de domínio .com.br: Verificar
- Disponibilidade em redes sociais: Verificar
- Score geral (1-10)

**TOP 3 RECOMENDADOS:**
Destaque os 3 melhores com justificativa detalhada.`,
    categoryId: 'branding',
    type: 'simple',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['naming', 'marca', 'nome', 'branding'],
    copyCount: 1654,
    isNew: false,
    isFeatured: true,
    order: 2
  },

  // GROWTH
  {
    id: 'growth_001',
    slug: 'viral-loop-strategy',
    title: 'Estratégia de Viral Loop',
    description: 'Cria mecanismos de viralização para seu produto.',
    content: `Você é especialista em growth hacking e viralização.

Crie uma estratégia de viral loop para:

**Produto/Serviço:** [O QUE VOCÊ OFERECE]
**Modelo de negócio:** [Freemium/Pago/SaaS/etc]
**Público-alvo:** [QUEM USA]
**Estágio atual:** [Ideação/MVP/Crescimento]
**Orçamento:** [Baixo/Médio/Alto]

**ENTREGUE:**

### 1. ANÁLISE DE VIRALIDADE ATUAL
- K-factor atual estimado
- Pontos de compartilhamento existentes
- Barreiras ao compartilhamento

### 2. MECANISMOS DE VIRAL LOOP

**Loop de Valor:**
Como usuários ganham ao convidar outros?
- Benefício para quem convida
- Benefício para quem é convidado
- Gatilho de ativação

**Loop de Exposição:**
Como o produto se expõe naturalmente?
- Elementos visíveis ao uso
- Watermarks/badges
- Integrações sociais

**Loop de Conteúdo:**
Como o conteúdo gerado vira viral?
- Templates compartilháveis
- Resultados exibíveis
- Comparações/rankings

### 3. MECÂNICAS ESPECÍFICAS
5 ideias detalhadas de mecânicas virais:
- Nome da mecânica
- Como funciona
- Esforço de implementação (1-10)
- Impacto esperado (1-10)
- Exemplo de empresa que usa

### 4. GAMIFICAÇÃO
Como adicionar elementos de jogo:
- Pontos
- Níveis
- Conquistas
- Leaderboards
- Recompensas

### 5. PLANO DE IMPLEMENTAÇÃO
Roadmap de 90 dias para implementar as 3 mecânicas prioritárias.`,
    categoryId: 'growth',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['viral', 'growth', 'viralização', 'crescimento'],
    copyCount: 876,
    isNew: true,
    isFeatured: true,
    order: 1
  },

  // ANALYTICS
  {
    id: 'analytics_001',
    slug: 'analise-metricas-marketing',
    title: 'Análise de Métricas de Marketing',
    description: 'Analisa dados de marketing e gera insights acionáveis.',
    content: `Você é analista de marketing digital especializado em dados.

Analise as métricas e forneça insights:

**DADOS DO PERÍODO:**

**Tráfego:**
- Visitantes: [NÚMERO]
- Pageviews: [NÚMERO]
- Bounce rate: [%]
- Tempo médio: [MINUTOS]
- Origem do tráfego: [DISTRIBUIÇÃO %]

**Conversão:**
- Taxa de conversão: [%]
- Leads gerados: [NÚMERO]
- Vendas: [NÚMERO]
- Ticket médio: [VALOR]

**Email Marketing:**
- Taxa de abertura: [%]
- Taxa de clique: [%]
- Unsubscribes: [%]

**Redes Sociais:**
- Alcance: [NÚMERO]
- Engajamento: [%]
- Crescimento de seguidores: [%]

**Período anterior (para comparação):**
[MESMOS DADOS DO PERÍODO ANTERIOR]

**ENTREGUE:**

### 1. RESUMO EXECUTIVO
3-5 pontos principais do período.

### 2. ANÁLISE DETALHADA POR ÁREA
Para cada área, analise:
- Performance vs período anterior
- Performance vs benchmark do mercado
- Tendências identificadas
- Pontos de atenção

### 3. TOP 3 VITÓRIAS
O que funcionou bem e por quê.

### 4. TOP 3 OPORTUNIDADES
O que pode melhorar e como.

### 5. RECOMENDAÇÕES ACIONÁVEIS
5 ações específicas para o próximo período, com:
- Ação
- Responsável sugerido
- Prazo
- Impacto esperado
- Como medir

### 6. PROJEÇÃO
Baseado nos dados, projete o próximo período.`,
    categoryId: 'analytics',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['analytics', 'métricas', 'dados', 'relatório'],
    copyCount: 765,
    isNew: false,
    isFeatured: false,
    order: 1
  },
];
