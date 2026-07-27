import { Prompt } from '@/types';

export const nichePrompts: Prompt[] = [
  // EDUCAÇÃO - ESTUDANTES
  {
    id: 'estudante_001',
    slug: 'resumo-inteligente-estudo',
    title: 'Resumo Inteligente para Estudos',
    description: 'Cria resumos otimizados para memorização e revisão.',
    content: `Você é um especialista em técnicas de aprendizagem e memorização.

Crie um resumo inteligente sobre:

**Matéria:** [DISCIPLINA]
**Tema específico:** [ASSUNTO]
**Nível:** [FUNDAMENTAL/MÉDIO/SUPERIOR/CONCURSO]
**Objetivo:** [PROVA/VESTIBULAR/CONCURSO/APRENDIZADO]

**Conteúdo base:**
[COLE O TEXTO/CAPÍTULO PARA RESUMIR]

**RESUMO OTIMIZADO:**

### 1. VISÃO GERAL (Mapa Mental Textual)
\`\`\`
TEMA CENTRAL
├── Subtema 1
│   ├── Ponto chave
│   └── Ponto chave
├── Subtema 2
│   ├── Ponto chave
│   └── Ponto chave
└── Subtema 3
\`\`\`

### 2. CONCEITOS ESSENCIAIS
Para cada conceito:
- **Nome:** Definição em 1-2 linhas
- **Exemplo:** Caso prático
- **Dica de memorização:** Mnemônico ou associação

### 3. RESUMO EM TÓPICOS
- Ponto 1
- Ponto 2
- Ponto 3
[Lista objetiva]

### 4. FLASHCARDS
| Frente (Pergunta) | Verso (Resposta) |
|-------------------|------------------|
| O que é X? | Definição |
| Qual a diferença entre X e Y? | Diferenças |
[10-15 flashcards]

### 5. QUESTÕES PROVÁVEIS
5 perguntas que podem cair na prova:
1. [Pergunta] → Resposta resumida
2. [Pergunta] → Resposta resumida
[...]

### 6. CONEXÕES
Como esse tema se conecta com:
- Tema anterior: [conexão]
- Próximo tema: [conexão]
- Outras disciplinas: [conexão]

### 7. RESUMO DO RESUMO
Em 3 linhas, o essencial sobre o tema.

### 8. CRONOGRAMA DE REVISÃO
- Revisar em 1 dia
- Revisar em 7 dias
- Revisar em 30 dias`,
    categoryId: 'estudantes',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['estudos', 'resumo', 'memorização', 'vestibular'],
    copyCount: 4521,
    isNew: false,
    isFeatured: true,
    order: 1
  },
  {
    id: 'estudante_002',
    slug: 'redacao-enem-nota-1000',
    title: 'Redação ENEM Nota 1000',
    description: 'Estrutura e guia para escrever redações nota máxima.',
    content: `Você é um corretor de redação do ENEM com experiência em nota 1000.

Ajude a escrever uma redação sobre:

**Tema:** [TEMA DA REDAÇÃO]
**Nível atual:** [INICIANTE/INTERMEDIÁRIO/AVANÇADO]
**Dificuldade:** [ARGUMENTAÇÃO/GRAMÁTICA/PROPOSTA]

**GUIA COMPLETO:**

### 1. ANÁLISE DO TEMA
- Palavras-chave do tema
- Recorte temático (o que deve abordar)
- O que NÃO abordar (tangentes)
- Possíveis abordagens

### 2. REPERTÓRIO SOCIOCULTURAL
**Área 1 - Filosofia/Sociologia:**
- [Autor]: "[Conceito/Citação]" - Como usar

**Área 2 - História:**
- [Evento/Período]: Paralelo com o tema

**Área 3 - Atualidades:**
- [Dado/Pesquisa]: Fonte e como usar

**Área 4 - Cultura:**
- [Filme/Livro/Série]: Conexão com o tema

### 3. ESTRUTURA DO TEXTO

**INTRODUÇÃO (7-10 linhas)**
- Contextualização (repertório)
- Apresentação do tema
- Tese (posicionamento claro)
- Preview dos argumentos

Modelo:
"[Contextualização com repertório]. Nesse sentido, [apresentação do tema]. Assim, [tese]. Isso ocorre devido a [argumento 1] e [argumento 2]."

**DESENVOLVIMENTO 1 (12-15 linhas)**
- Tópico frasal (argumento 1)
- Explicação
- Repertório/Prova
- Análise crítica
- Fechamento

**DESENVOLVIMENTO 2 (12-15 linhas)**
- Tópico frasal (argumento 2)
- [mesma estrutura]

**CONCLUSÃO (7-10 linhas)**
- Retomada da tese
- Proposta de intervenção completa:
  - AGENTE: Quem vai fazer
  - AÇÃO: O que vai fazer
  - MEIO: Como vai fazer
  - FINALIDADE: Para que
  - DETALHAMENTO: Mais informações

### 4. CONECTIVOS
Por competência:
- Introdução: "Desde...", "É notório que..."
- Desenvolvimento: "Em primeira análise...", "Além disso..."
- Conclusão: "Portanto...", "Diante do exposto..."

### 5. CHECKLIST FINAL
- [ ] Competência 1: Gramática e norma culta
- [ ] Competência 2: Compreensão do tema
- [ ] Competência 3: Argumentação
- [ ] Competência 4: Coesão
- [ ] Competência 5: Proposta de intervenção

### 6. ERROS COMUNS
O que evitar:
- Fuga do tema
- Clichês
- Proposta genérica
- Falta de repertório`,
    categoryId: 'estudantes',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['redação', 'enem', 'vestibular', 'escrita'],
    copyCount: 5432,
    isNew: false,
    isFeatured: true,
    order: 2
  },

  // EDUCAÇÃO - PROFESSORES
  {
    id: 'prof_001',
    slug: 'plano-aula-completo',
    title: 'Plano de Aula Completo',
    description: 'Cria planos de aula detalhados e engajadores.',
    content: `Você é um pedagogo especialista em metodologias ativas.

Crie um plano de aula para:

**Disciplina:** [MATÉRIA]
**Tema:** [CONTEÚDO DA AULA]
**Série/Ano:** [NÍVEL]
**Duração:** [TEMPO DA AULA]
**Número de alunos:** [QUANTIDADE]
**Recursos disponíveis:** [PROJETOR/INTERNET/LABORATÓRIO/etc]

**PLANO DE AULA:**

### 1. IDENTIFICAÇÃO
- Disciplina:
- Tema:
- Subtema:
- Data:
- Duração:
- Turma:

### 2. OBJETIVOS
**Objetivo Geral:**
Ao final da aula, o aluno será capaz de...

**Objetivos Específicos:**
- Conhecer...
- Compreender...
- Aplicar...
- Analisar...

**Habilidades BNCC:**
- (EF__XX00) Descrição da habilidade

### 3. CONTEÚDO
- Conceito 1
- Conceito 2
- Conceito 3

### 4. METODOLOGIA
**Momento 1 - Engajamento (X min)**
- Atividade de abertura
- Pergunta provocadora
- Dinâmica inicial

**Momento 2 - Exploração (X min)**
- Apresentação do conteúdo
- Metodologia utilizada
- Recursos visuais

**Momento 3 - Explicação (X min)**
- Aprofundamento
- Exemplos práticos
- Conexões com o cotidiano

**Momento 4 - Elaboração (X min)**
- Atividade prática
- Trabalho em grupo/individual
- Aplicação do conhecimento

**Momento 5 - Avaliação (X min)**
- Verificação de aprendizagem
- Feedback
- Encerramento

### 5. RECURSOS
- [ ] Projetor/TV
- [ ] Slides
- [ ] Material impresso
- [ ] Materiais manipulativos
- [ ] Aplicativos/Sites

### 6. AVALIAÇÃO
**Formativa:**
- Observação durante atividades
- Participação
- Perguntas orais

**Somativa:**
- Atividade avaliativa
- Critérios de avaliação

### 7. ATIVIDADES EXTRAS
**Para quem terminou antes:**
[Atividade de extensão]

**Para quem tem dificuldade:**
[Atividade de reforço]

### 8. REFERÊNCIAS
- [Fontes utilizadas]

### 9. REFLEXÃO PÓS-AULA
(Para preencher depois)
- O que funcionou:
- O que melhorar:
- Observações:`,
    categoryId: 'professores',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['plano de aula', 'educação', 'professor', 'pedagogia'],
    copyCount: 3876,
    isNew: false,
    isFeatured: true,
    order: 1
  },

  // CARREIRA - CURRÍCULO
  {
    id: 'curriculo_001',
    slug: 'curriculo-ats-friendly',
    title: 'Currículo ATS-Friendly',
    description: 'Cria currículos otimizados para sistemas de triagem.',
    content: `Você é especialista em recrutamento e currículos que passam no ATS.

Crie um currículo otimizado para:

**Vaga desejada:** [CARGO]
**Empresa/Setor:** [EMPRESA OU ÁREA]
**Anos de experiência:** [TEMPO]
**Formação:** [NÍVEL EDUCACIONAL]

**Experiências:**
[LISTE SUAS EXPERIÊNCIAS]

**Habilidades:**
[LISTE SUAS HABILIDADES]

**CURRÍCULO OTIMIZADO:**

### 1. INFORMAÇÕES PESSOAIS
Nome Completo
Cidade, Estado | (XX) XXXXX-XXXX | email@email.com
linkedin.com/in/seuperfil | portfolio.com (se aplicável)

### 2. RESUMO PROFISSIONAL
(3-4 linhas com palavras-chave da vaga)
Profissional de [área] com [X] anos de experiência em [especialidades]. Expertise em [habilidades-chave]. Histórico comprovado de [resultados]. Buscando contribuir com [o que pode agregar] como [cargo desejado].

### 3. EXPERIÊNCIA PROFISSIONAL

**Cargo Atual | Empresa**
Cidade, Estado | Mês/Ano - Presente

- [Verbo de ação] + [o que fez] + [resultado mensurável]
- Liderou [projeto] resultando em [X% de melhoria/economia]
- Implementou [sistema/processo] que [benefício]
- Gerenciou [equipe/orçamento] de [tamanho/valor]

**Cargo Anterior | Empresa**
[mesma estrutura]

### 4. FORMAÇÃO ACADÊMICA

**Grau - Curso**
Instituição | Ano de Conclusão
- Destaque relevante (se houver)

### 5. HABILIDADES

**Técnicas:**
Habilidade 1 | Habilidade 2 | Habilidade 3 | Habilidade 4

**Ferramentas:**
Ferramenta 1 | Ferramenta 2 | Ferramenta 3

**Idiomas:**
Inglês (Nível) | Espanhol (Nível)

### 6. CERTIFICAÇÕES
- Certificação 1 | Instituição | Ano
- Certificação 2 | Instituição | Ano

### OTIMIZAÇÃO ATS

**Palavras-chave incluídas:**
[Lista de keywords da vaga]

**Formato:**
- Fonte: Arial ou Calibri, 11-12pt
- Margens: 2,5cm
- Sem tabelas, colunas ou gráficos
- Salvar como .docx ou .pdf texto

**O que evitar:**
- Fotos
- Informações pessoais desnecessárias
- Formatação complexa
- Objetivos genéricos`,
    categoryId: 'curriculo',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['currículo', 'cv', 'emprego', 'ats'],
    copyCount: 4123,
    isNew: false,
    isFeatured: true,
    order: 1
  },
  {
    id: 'entrevista_001',
    slug: 'preparacao-entrevista-emprego',
    title: 'Preparação para Entrevista de Emprego',
    description: 'Guia completo para se preparar para entrevistas.',
    content: `Você é um coach de carreira especializado em entrevistas.

Prepare-me para uma entrevista:

**Cargo:** [POSIÇÃO]
**Empresa:** [NOME DA EMPRESA]
**Tipo de entrevista:** [PRESENCIAL/REMOTA/PAINEL/TÉCNICA]
**Minha experiência:** [RESUMO]
**Meus pontos fortes:** [LISTE]
**Meus pontos fracos:** [LISTE]

**PREPARAÇÃO COMPLETA:**

### 1. PESQUISA DA EMPRESA
O que pesquisar antes:
- Missão, visão, valores
- Produtos/serviços principais
- Notícias recentes
- Cultura (Glassdoor, LinkedIn)
- Entrevistador (se souber quem é)

### 2. PERGUNTAS COMUNS E RESPOSTAS

**"Fale sobre você"**
Estrutura PRESENTE-PASSADO-FUTURO:
[Resposta personalizada]

**"Por que quer trabalhar aqui?"**
[Resposta conectando seus valores com a empresa]

**"Qual seu maior ponto forte?"**
[Resposta com exemplo STAR]

**"Qual seu maior ponto fraco?"**
[Resposta honesta + o que está fazendo para melhorar]

**"Onde se vê em 5 anos?"**
[Resposta alinhada com a empresa]

**"Por que devemos te contratar?"**
[Resposta destacando diferencial]

**"Conte sobre um desafio que superou"**
[Resposta usando método STAR]

### 3. PERGUNTAS COMPORTAMENTAIS (STAR)

**Situação: [contexto]**
**Tarefa: [seu papel]**
**Ação: [o que fez]**
**Resultado: [resultado mensurável]**

Prepare histórias para:
- Liderança
- Trabalho em equipe
- Resolução de conflito
- Erro e aprendizado
- Pressão/deadline

### 4. PERGUNTAS PARA FAZER
10 perguntas inteligentes para o entrevistador:
1. Como é o dia típico nessa função?
2. Quais são os maiores desafios?
[...]

### 5. CHECKLIST PRÉ-ENTREVISTA
**No dia anterior:**
- [ ] Roupa separada
- [ ] Documentos prontos
- [ ] Trajeto planejado
- [ ] Alarmes configurados

**No dia:**
- [ ] Chegar 10-15 min antes
- [ ] Celular no silencioso
- [ ] Água disponível
- [ ] Material de anotação

**Se for remota:**
- [ ] Testar câmera e áudio
- [ ] Fundo neutro
- [ ] Iluminação adequada
- [ ] Conexão estável

### 6. LINGUAGEM CORPORAL
- Postura
- Contato visual
- Aperto de mão
- Tom de voz

### 7. FOLLOW-UP
Template de email de agradecimento pós-entrevista.`,
    categoryId: 'entrevistas',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['entrevista', 'emprego', 'carreira', 'preparação'],
    copyCount: 3654,
    isNew: false,
    isFeatured: false,
    order: 1
  },

  // NICHOS - IMOBILIÁRIO
  {
    id: 'imob_001',
    slug: 'descricao-imovel-vendedor',
    title: 'Descrição de Imóvel que Vende',
    description: 'Cria descrições irresistíveis para anúncios de imóveis.',
    content: `Você é um copywriter especializado no mercado imobiliário.

Crie uma descrição de imóvel para:

**Tipo:** [APARTAMENTO/CASA/COMERCIAL]
**Metragem:** [M²]
**Quartos/Suítes:** [QUANTIDADE]
**Banheiros:** [QUANTIDADE]
**Vagas:** [QUANTIDADE]
**Localização:** [BAIRRO, CIDADE]
**Valor:** [PREÇO]
**Condição:** [NOVO/USADO/REFORMA]

**Diferenciais:**
[LISTE OS PONTOS FORTES]

**DESCRIÇÃO OTIMIZADA:**

### 1. TÍTULO (3 opções)
- Título 1 (foco no lifestyle)
- Título 2 (foco nos números)
- Título 3 (foco na localização)

### 2. DESCRIÇÃO COMPLETA

**Abertura impactante (gancho):**
[2-3 linhas que capturam atenção]

**O imóvel:**
Descrição detalhada dos ambientes, fluindo naturalmente. Destaque pontos fortes, use adjetivos sensoriais.

**A localização:**
Proximidades, acessos, infraestrutura do bairro.

**O estilo de vida:**
Como é morar ali. Quem é o morador ideal.

**Chamada para ação:**
[CTA direto]

### 3. VERSÃO CURTA
Para portais com limite de caracteres (até 500 caracteres).

### 4. VERSÃO PARA INSTAGRAM
Com emojis e formatação para post.

### 5. VERSÃO PARA WHATSAPP
Mensagem para enviar diretamente.

### 6. FICHA TÉCNICA
- Área: X m²
- Quartos: X
- Suítes: X
- Banheiros: X
- Vagas: X
- Condomínio: R$ X
- IPTU: R$ X
- Valor: R$ X

### 7. SEO
- Título SEO
- Meta description
- Tags/Keywords

### 8. DICAS PARA FOTOS
O que fotografar e em que ordem.`,
    categoryId: 'imobiliario',
    type: 'simple',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['imóvel', 'corretor', 'imobiliária', 'vendas'],
    copyCount: 2341,
    isNew: false,
    isFeatured: false,
    order: 1
  },

  // NICHOS - RESTAURANTES
  {
    id: 'rest_001',
    slug: 'cardapio-descricoes-irresistiveis',
    title: 'Descrições de Cardápio que Vendem',
    description: 'Cria descrições de pratos que aumentam vendas.',
    content: `Você é um especialista em marketing gastronômico.

Crie descrições para o cardápio:

**Tipo de restaurante:** [ESTILO]
**Público:** [PERFIL DOS CLIENTES]
**Faixa de preço:** [POPULAR/MÉDIO/ALTO]
**Tom:** [CASUAL/SOFISTICADO/DESCONTRAÍDO]

**Pratos para descrever:**
1. [NOME DO PRATO] - Ingredientes principais
2. [NOME DO PRATO] - Ingredientes principais
3. [NOME DO PRATO] - Ingredientes principais

**DESCRIÇÕES:**

### REGRAS DE OURO
- Use linguagem sensorial (texturas, aromas, sabores)
- Destaque a origem dos ingredientes
- Conte uma pequena história
- Evite palavras negativas (sem, livre de)
- Use adjetivos específicos, não genéricos

### PRATO 1: [NOME]
**Descrição principal:**
[Descrição sensorial de 2-3 linhas que desperta apetite]

**Versão curta (cardápio físico):**
[1 linha apenas]

**Versão Instagram:**
[Com emojis e hashtags]

### PRATO 2: [NOME]
[mesma estrutura]

### PRATO 3: [NOME]
[mesma estrutura]

### CATEGORIAS DO MENU
Sugestões de nomes criativos para seções:
- Entradas → [nome criativo]
- Principais → [nome criativo]
- Sobremesas → [nome criativo]

### TEXTOS DE APOIO
**Frase de abertura do cardápio:**
[Texto de boas-vindas]

**Sugestão do chef:**
[Como apresentar]

**Informações importantes:**
Alérgenos, vegetariano, vegano - como indicar.

### DICAS EXTRAS
- Ordem dos pratos (mais lucrativos em destaque)
- Fotografia sugerida
- Preços (como posicionar)`,
    categoryId: 'restaurantes',
    type: 'simple',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['restaurante', 'cardápio', 'gastronomia', 'food'],
    copyCount: 1654,
    isNew: false,
    isFeatured: false,
    order: 1
  },

  // NICHOS - SAÚDE/FITNESS
  {
    id: 'fitness_001',
    slug: 'plano-treino-personalizado',
    title: 'Plano de Treino Personalizado',
    description: 'Cria programas de treino adaptados para cada objetivo.',
    content: `Você é um personal trainer certificado com 15 anos de experiência.

Crie um plano de treino para:

**Objetivo:** [HIPERTROFIA/EMAGRECIMENTO/CONDICIONAMENTO/FORÇA]
**Nível:** [INICIANTE/INTERMEDIÁRIO/AVANÇADO]
**Frequência:** [X dias por semana]
**Tempo disponível:** [X minutos por treino]
**Local:** [ACADEMIA/CASA/AR LIVRE]
**Equipamentos:** [O QUE TEM DISPONÍVEL]

**Informações pessoais:**
- Idade:
- Lesões/Limitações:
- Experiência prévia:

**PLANO DE TREINO:**

### 1. VISÃO GERAL
- Objetivo principal
- Periodização (X semanas)
- Divisão de treino (ABCD, Upper/Lower, Full Body)

### 2. DIVISÃO SEMANAL
| Dia | Treino | Foco |
|-----|--------|------|
| Seg | A | [grupo muscular] |
| Ter | B | [grupo muscular] |
| Qua | Descanso | Recuperação |
[...]

### 3. TREINO A - [FOCO]

**Aquecimento (5-10 min)**
- Exercício 1: X min
- Exercício 2: X min

**Treino Principal**
| Exercício | Séries | Reps | Descanso |
|-----------|--------|------|----------|
| Exercício 1 | 4 | 8-12 | 60s |
| Exercício 2 | 3 | 10-15 | 45s |
[...]

**Observações:**
- Cadência: X-X-X
- Técnica especial: [se houver]

**Alongamento (5 min)**
- Alongamentos específicos

### 4. TREINO B
[mesma estrutura]

### 5. PROGRESSÃO
- Semanas 1-4: [foco]
- Semanas 5-8: [foco]
- Como progredir carga

### 6. NUTRIÇÃO (geral)
- Calorias sugeridas
- Proteína: Xg/kg
- Hidratação

### 7. RECUPERAÇÃO
- Sono: X horas
- Descanso ativo
- Suplementação (opcional)

### 8. MONITORAMENTO
O que medir e quando:
- Peso: [frequência]
- Medidas: [frequência]
- Fotos: [frequência]
- Cargas: [como registrar]`,
    categoryId: 'fitness',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['treino', 'fitness', 'academia', 'personal'],
    copyCount: 2876,
    isNew: false,
    isFeatured: true,
    order: 1
  },

  // E-COMMERCE
  {
    id: 'ecom_001',
    slug: 'descricao-produto-ecommerce',
    title: 'Descrição de Produto E-commerce',
    description: 'Cria descrições que convertem visitantes em compradores.',
    content: `Você é um especialista em e-commerce e copywriting de produtos.

Crie descrição para:

**Produto:** [NOME DO PRODUTO]
**Categoria:** [TIPO]
**Preço:** [VALOR]
**Público-alvo:** [QUEM COMPRA]
**Diferenciais:** [O QUE DESTACA]
**Plataforma:** [LOJA PRÓPRIA/MARKETPLACE]

**Especificações:**
[LISTE CARACTERÍSTICAS TÉCNICAS]

**DESCRIÇÃO COMPLETA:**

### 1. TÍTULO OTIMIZADO
- Título principal (SEO + conversão)
- Variações para A/B test

### 2. DESCRIÇÃO CURTA
(Para área de destaque - 2-3 linhas)
[Benefício principal + diferencial]

### 3. BULLETS DE DESTAQUE
✓ [Benefício 1 - o que ganha]
✓ [Benefício 2 - o que ganha]
✓ [Benefício 3 - o que ganha]
✓ [Benefício 4 - o que ganha]
✓ [Benefício 5 - o que ganha]

### 4. DESCRIÇÃO COMPLETA

**Parágrafo 1 - Abertura**
[Gancho + principal benefício + para quem é]

**Parágrafo 2 - Detalhes**
[Como funciona/características em linguagem de benefício]

**Parágrafo 3 - Prova**
[Porque confiar - qualidade, garantia, etc]

**Parágrafo 4 - CTA**
[Chamada para ação]

### 5. ESPECIFICAÇÕES TÉCNICAS
| Característica | Especificação |
|----------------|---------------|
| Material | |
| Dimensões | |
| Peso | |
[...]

### 6. O QUE VEM NA CAIXA
- Item 1
- Item 2
- Item 3

### 7. FAQ DO PRODUTO
Q: [Pergunta comum 1]
A: [Resposta]

Q: [Pergunta comum 2]
A: [Resposta]

[3-5 perguntas]

### 8. SEO
- Title tag
- Meta description
- Keywords

### 9. VERSÃO PARA MARKETPLACE
Adaptação para Mercado Livre, Amazon, etc. (limitações de formatação).`,
    categoryId: 'descricao-produtos',
    type: 'mega',
    aiCompatible: ['chatgpt', 'claude', 'gemini'],
    tags: ['e-commerce', 'produto', 'descrição', 'vendas'],
    copyCount: 3421,
    isNew: false,
    isFeatured: true,
    order: 1
  },

  // DESIGN - CANVA
  {
    id: 'canva_001',
    slug: 'briefing-design-canva',
    title: 'Briefing de Design para Canva',
    description: 'Cria briefings detalhados para designs no Canva.',
    content: `Você é um designer gráfico especializado em Canva.

Crie um briefing de design para:

**Tipo de peça:** [POST/STORIES/CARROSSEL/BANNER/APRESENTAÇÃO]
**Plataforma:** [INSTAGRAM/FACEBOOK/LINKEDIN/YOUTUBE]
**Objetivo:** [VENDER/ENGAJAR/INFORMAR/BRANDING]
**Tema:** [ASSUNTO DO DESIGN]

**Marca:**
- Cores: [CORES DA MARCA]
- Fontes: [FONTES - ou sugerir]
- Tom: [SÉRIO/DIVERTIDO/ELEGANTE]

**BRIEFING COMPLETO:**

### 1. CONCEITO VISUAL
Descrição do estilo desejado:
- Minimalista / Maximalista
- Cores predominantes
- Mood/Atmosfera

### 2. ESTRUTURA DO LAYOUT

**Para Post (1080x1080):**
\`\`\`
+-------------------------+
|      [HEADLINE]         |
|                         |
|     [IMAGEM/ÍCONE]      |
|                         |
|    [TEXTO DE APOIO]     |
|                         |
|        [LOGO]           |
+-------------------------+
\`\`\`

### 3. ELEMENTOS NECESSÁRIOS

**Textos:**
- Headline: "[TEXTO]"
- Subheadline: "[TEXTO]"
- CTA: "[TEXTO]"
- Hashtags: [se aplicável]

**Imagens:**
- Sugestão de imagem/ilustração
- Onde encontrar (Canva, Unsplash, etc)

**Ícones:**
- Ícone 1: [descrição]
- Ícone 2: [descrição]

### 4. PALETA DE CORES
- Primária: #HEXCODE
- Secundária: #HEXCODE
- Fundo: #HEXCODE
- Texto: #HEXCODE

### 5. TIPOGRAFIA
- Título: [Nome da fonte], [tamanho], [peso]
- Corpo: [Nome da fonte], [tamanho], [peso]
- CTA: [Nome da fonte], [tamanho], [peso]

### 6. TEMPLATES CANVA SUGERIDOS
Links ou nomes de templates do Canva que servem de base.

### 7. CHECKLIST DE QUALIDADE
- [ ] Hierarquia visual clara
- [ ] Espaçamento adequado
- [ ] Contraste de cores
- [ ] Legibilidade em mobile
- [ ] Marca presente mas não invasiva

### 8. VARIAÇÕES
- Versão com foto
- Versão sem foto
- Versão dark mode
- Versão light mode`,
    categoryId: 'canva',
    type: 'simple',
    aiCompatible: ['chatgpt', 'claude'],
    tags: ['canva', 'design', 'social media', 'briefing'],
    copyCount: 2134,
    isNew: true,
    isFeatured: false,
    order: 1
  },
];
