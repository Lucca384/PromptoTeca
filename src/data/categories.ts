import { Category } from '@/types';

export const categoriesData: Category[] = [
  // MARKETING
  {
    id: 'marketing',
    slug: 'marketing',
    name: 'Marketing Digital',
    description: 'Prompts para estratégias de marketing digital completas',
    icon: '📈',
    color: 'violet',
    parentId: null,
    order: 1,
    isNew: false,
    subcategories: [
      { id: 'copywriting', slug: 'copywriting', name: 'Copywriting', description: 'Textos persuasivos que vendem', icon: '✍️', color: 'violet', parentId: 'marketing', order: 1, isNew: false },
      { id: 'email-marketing', slug: 'email-marketing', name: 'Email Marketing', description: 'Campanhas e sequências de email', icon: '📧', color: 'violet', parentId: 'marketing', order: 2, isNew: false },
      { id: 'branding', slug: 'branding', name: 'Branding', description: 'Identidade e posicionamento de marca', icon: '🎨', color: 'violet', parentId: 'marketing', order: 3, isNew: false },
      { id: 'growth', slug: 'growth', name: 'Growth Hacking', description: 'Estratégias de crescimento acelerado', icon: '🚀', color: 'violet', parentId: 'marketing', order: 4, isNew: true },
      { id: 'analytics', slug: 'analytics', name: 'Analytics', description: 'Análise de dados e métricas', icon: '📊', color: 'violet', parentId: 'marketing', order: 5, isNew: false },
    ]
  },
  // REDES SOCIAIS
  {
    id: 'redes-sociais',
    slug: 'redes-sociais',
    name: 'Redes Sociais',
    description: 'Conteúdo para todas as plataformas sociais',
    icon: '📱',
    color: 'pink',
    parentId: null,
    order: 2,
    isNew: false,
    subcategories: [
      { id: 'instagram', slug: 'instagram', name: 'Instagram', description: 'Posts, Reels, Stories e carrosséis', icon: '📸', color: 'pink', parentId: 'redes-sociais', order: 1, isNew: false },
      { id: 'tiktok', slug: 'tiktok', name: 'TikTok', description: 'Vídeos virais e trends', icon: '🎵', color: 'pink', parentId: 'redes-sociais', order: 2, isNew: true },
      { id: 'youtube', slug: 'youtube', name: 'YouTube', description: 'Roteiros, títulos e descrições', icon: '🎬', color: 'pink', parentId: 'redes-sociais', order: 3, isNew: false },
      { id: 'linkedin', slug: 'linkedin', name: 'LinkedIn', description: 'Conteúdo profissional e B2B', icon: '💼', color: 'pink', parentId: 'redes-sociais', order: 4, isNew: false },
      { id: 'twitter', slug: 'twitter', name: 'Twitter/X', description: 'Threads e posts virais', icon: '🐦', color: 'pink', parentId: 'redes-sociais', order: 5, isNew: false },
      { id: 'facebook', slug: 'facebook', name: 'Facebook', description: 'Posts e anúncios', icon: '👤', color: 'pink', parentId: 'redes-sociais', order: 6, isNew: false },
      { id: 'whatsapp', slug: 'whatsapp', name: 'WhatsApp Business', description: 'Mensagens e automações', icon: '💬', color: 'pink', parentId: 'redes-sociais', order: 7, isNew: true },
    ]
  },
  // VENDAS
  {
    id: 'vendas',
    slug: 'vendas',
    name: 'Vendas',
    description: 'Prompts para vender mais e melhor',
    icon: '💰',
    color: 'emerald',
    parentId: null,
    order: 3,
    isNew: false,
    subcategories: [
      { id: 'prospeccao', slug: 'prospeccao', name: 'Prospecção', description: 'Encontre e aborde clientes', icon: '🎯', color: 'emerald', parentId: 'vendas', order: 1, isNew: false },
      { id: 'negociacao', slug: 'negociacao', name: 'Negociação', description: 'Técnicas de fechamento', icon: '🤝', color: 'emerald', parentId: 'vendas', order: 2, isNew: false },
      { id: 'objecoes', slug: 'objecoes', name: 'Objeções', description: 'Respostas para objeções', icon: '🛡️', color: 'emerald', parentId: 'vendas', order: 3, isNew: false },
      { id: 'scripts', slug: 'scripts', name: 'Scripts de Vendas', description: 'Roteiros completos', icon: '📋', color: 'emerald', parentId: 'vendas', order: 4, isNew: false },
      { id: 'propostas', slug: 'propostas', name: 'Propostas', description: 'Propostas comerciais', icon: '📄', color: 'emerald', parentId: 'vendas', order: 5, isNew: false },
    ]
  },
  // NEGÓCIOS
  {
    id: 'negocios',
    slug: 'negocios',
    name: 'Negócios',
    description: 'Gestão e estratégia empresarial',
    icon: '🏢',
    color: 'blue',
    parentId: null,
    order: 4,
    isNew: false,
    subcategories: [
      { id: 'estrategia', slug: 'estrategia', name: 'Estratégia', description: 'Planejamento estratégico', icon: '♟️', color: 'blue', parentId: 'negocios', order: 1, isNew: false },
      { id: 'financas', slug: 'financas', name: 'Finanças', description: 'Gestão financeira', icon: '💵', color: 'blue', parentId: 'negocios', order: 2, isNew: false },
      { id: 'rh', slug: 'rh', name: 'Recursos Humanos', description: 'Gestão de pessoas', icon: '👥', color: 'blue', parentId: 'negocios', order: 3, isNew: false },
      { id: 'empreendedorismo', slug: 'empreendedorismo', name: 'Empreendedorismo', description: 'Iniciar e escalar negócios', icon: '🌱', color: 'blue', parentId: 'negocios', order: 4, isNew: false },
      { id: 'startups', slug: 'startups', name: 'Startups', description: 'Ecossistema de inovação', icon: '🦄', color: 'blue', parentId: 'negocios', order: 5, isNew: true },
    ]
  },
  // ATENDIMENTO
  {
    id: 'atendimento',
    slug: 'atendimento',
    name: 'Atendimento ao Cliente',
    description: 'Suporte e experiência do cliente',
    icon: '🎧',
    color: 'cyan',
    parentId: null,
    order: 5,
    isNew: true,
    subcategories: [
      { id: 'sac', slug: 'sac', name: 'SAC', description: 'Atendimento ao consumidor', icon: '📞', color: 'cyan', parentId: 'atendimento', order: 1, isNew: false },
      { id: 'chatbot', slug: 'chatbot', name: 'Chatbots', description: 'Respostas automatizadas', icon: '🤖', color: 'cyan', parentId: 'atendimento', order: 2, isNew: true },
      { id: 'faq', slug: 'faq-atendimento', name: 'FAQ', description: 'Perguntas frequentes', icon: '❓', color: 'cyan', parentId: 'atendimento', order: 3, isNew: false },
      { id: 'reclamacoes', slug: 'reclamacoes', name: 'Reclamações', description: 'Gestão de crises', icon: '😤', color: 'cyan', parentId: 'atendimento', order: 4, isNew: false },
    ]
  },
  // PROGRAMAÇÃO
  {
    id: 'programacao',
    slug: 'programacao',
    name: 'Programação',
    description: 'Prompts para desenvolvedores',
    icon: '💻',
    color: 'green',
    parentId: null,
    order: 6,
    isNew: false,
    subcategories: [
      { id: 'javascript', slug: 'javascript', name: 'JavaScript', description: 'JS, Node, TypeScript', icon: '🟨', color: 'green', parentId: 'programacao', order: 1, isNew: false },
      { id: 'python', slug: 'python', name: 'Python', description: 'Scripts e automação', icon: '🐍', color: 'green', parentId: 'programacao', order: 2, isNew: false },
      { id: 'react-next', slug: 'react-next', name: 'React & Next.js', description: 'Frontend moderno', icon: '⚛️', color: 'green', parentId: 'programacao', order: 3, isNew: false },
      { id: 'html-css', slug: 'html-css', name: 'HTML & CSS', description: 'Estrutura e estilo', icon: '🎨', color: 'green', parentId: 'programacao', order: 4, isNew: false },
      { id: 'sql', slug: 'sql', name: 'SQL & Banco de Dados', description: 'Queries e modelagem', icon: '🗄️', color: 'green', parentId: 'programacao', order: 5, isNew: false },
      { id: 'devops', slug: 'devops', name: 'DevOps', description: 'CI/CD e infraestrutura', icon: '⚙️', color: 'green', parentId: 'programacao', order: 6, isNew: true },
      { id: 'debug', slug: 'debug', name: 'Debug & Otimização', description: 'Correção de bugs', icon: '🐛', color: 'green', parentId: 'programacao', order: 7, isNew: false },
    ]
  },
  // SEO & CONTEÚDO
  {
    id: 'seo-conteudo',
    slug: 'seo-conteudo',
    name: 'SEO & Conteúdo',
    description: 'Otimização e criação de conteúdo',
    icon: '🔍',
    color: 'orange',
    parentId: null,
    order: 7,
    isNew: false,
    subcategories: [
      { id: 'seo-tecnico', slug: 'seo-tecnico', name: 'SEO Técnico', description: 'Otimização técnica', icon: '🔧', color: 'orange', parentId: 'seo-conteudo', order: 1, isNew: false },
      { id: 'keyword-research', slug: 'keyword-research', name: 'Pesquisa de Keywords', description: 'Palavras-chave', icon: '🔑', color: 'orange', parentId: 'seo-conteudo', order: 2, isNew: false },
      { id: 'blog', slug: 'blog', name: 'Blog & Artigos', description: 'Conteúdo para blog', icon: '📝', color: 'orange', parentId: 'seo-conteudo', order: 3, isNew: false },
      { id: 'link-building', slug: 'link-building', name: 'Link Building', description: 'Construção de links', icon: '🔗', color: 'orange', parentId: 'seo-conteudo', order: 4, isNew: false },
    ]
  },
  // DESIGN
  {
    id: 'design',
    slug: 'design',
    name: 'Design & Criação',
    description: 'Design gráfico e visual',
    icon: '🎨',
    color: 'purple',
    parentId: null,
    order: 8,
    isNew: false,
    subcategories: [
      { id: 'canva', slug: 'canva', name: 'Canva', description: 'Design no Canva', icon: '🖼️', color: 'purple', parentId: 'design', order: 1, isNew: true },
      { id: 'ui-ux', slug: 'ui-ux', name: 'UI/UX Design', description: 'Interfaces e experiência', icon: '📱', color: 'purple', parentId: 'design', order: 2, isNew: false },
      { id: 'branding-visual', slug: 'branding-visual', name: 'Identidade Visual', description: 'Logos e branding', icon: '✨', color: 'purple', parentId: 'design', order: 3, isNew: false },
      { id: 'midjourney', slug: 'midjourney', name: 'Midjourney & DALL-E', description: 'IA generativa de imagens', icon: '🖌️', color: 'purple', parentId: 'design', order: 4, isNew: false },
    ]
  },
  // E-COMMERCE
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    name: 'E-commerce',
    description: 'Vendas online e lojas virtuais',
    icon: '🛒',
    color: 'amber',
    parentId: null,
    order: 9,
    isNew: false,
    subcategories: [
      { id: 'descricao-produtos', slug: 'descricao-produtos', name: 'Descrição de Produtos', description: 'Textos que vendem', icon: '📦', color: 'amber', parentId: 'ecommerce', order: 1, isNew: false },
      { id: 'dropshipping', slug: 'dropshipping', name: 'Dropshipping', description: 'Negócio sem estoque', icon: '🚚', color: 'amber', parentId: 'ecommerce', order: 2, isNew: false },
      { id: 'marketplace', slug: 'marketplace', name: 'Marketplaces', description: 'Mercado Livre, Amazon', icon: '🏪', color: 'amber', parentId: 'ecommerce', order: 3, isNew: false },
      { id: 'anuncios-pagos', slug: 'anuncios-pagos', name: 'Anúncios Pagos', description: 'Facebook Ads, Google Ads', icon: '💳', color: 'amber', parentId: 'ecommerce', order: 4, isNew: false },
    ]
  },
  // PRODUTIVIDADE
  {
    id: 'produtividade',
    slug: 'produtividade',
    name: 'Produtividade',
    description: 'Organize e otimize seu tempo',
    icon: '⚡',
    color: 'yellow',
    parentId: null,
    order: 10,
    isNew: false,
    subcategories: [
      { id: 'notion', slug: 'notion', name: 'Notion', description: 'Templates e sistemas', icon: '📓', color: 'yellow', parentId: 'produtividade', order: 1, isNew: true },
      { id: 'excel-sheets', slug: 'excel-sheets', name: 'Excel & Google Sheets', description: 'Planilhas e fórmulas', icon: '📊', color: 'yellow', parentId: 'produtividade', order: 2, isNew: false },
      { id: 'automacao', slug: 'automacao', name: 'Automação', description: 'Zapier, Make, n8n', icon: '🔄', color: 'yellow', parentId: 'produtividade', order: 3, isNew: false },
      { id: 'gestao-tempo', slug: 'gestao-tempo', name: 'Gestão de Tempo', description: 'Planejamento e foco', icon: '⏰', color: 'yellow', parentId: 'produtividade', order: 4, isNew: false },
      { id: 'emails', slug: 'emails', name: 'Emails Profissionais', description: 'Comunicação eficiente', icon: '✉️', color: 'yellow', parentId: 'produtividade', order: 5, isNew: false },
    ]
  },
  // EDUCAÇÃO
  {
    id: 'educacao',
    slug: 'educacao',
    name: 'Educação',
    description: 'Para estudantes e professores',
    icon: '📚',
    color: 'indigo',
    parentId: null,
    order: 11,
    isNew: false,
    subcategories: [
      { id: 'estudantes', slug: 'estudantes', name: 'Para Estudantes', description: 'Estudo e aprendizado', icon: '🎓', color: 'indigo', parentId: 'educacao', order: 1, isNew: false },
      { id: 'professores', slug: 'professores', name: 'Para Professores', description: 'Aulas e material', icon: '👨‍🏫', color: 'indigo', parentId: 'educacao', order: 2, isNew: false },
      { id: 'cursos-online', slug: 'cursos-online', name: 'Cursos Online', description: 'Criação de cursos', icon: '🖥️', color: 'indigo', parentId: 'educacao', order: 3, isNew: false },
      { id: 'redacao', slug: 'redacao', name: 'Redação & Escrita', description: 'TCC, artigos, textos', icon: '✏️', color: 'indigo', parentId: 'educacao', order: 4, isNew: false },
    ]
  },
  // CARREIRA
  {
    id: 'carreira',
    slug: 'carreira',
    name: 'Carreira',
    description: 'Desenvolvimento profissional',
    icon: '🎯',
    color: 'rose',
    parentId: null,
    order: 12,
    isNew: true,
    subcategories: [
      { id: 'curriculo', slug: 'curriculo', name: 'Currículo', description: 'CVs que impressionam', icon: '📄', color: 'rose', parentId: 'carreira', order: 1, isNew: false },
      { id: 'entrevistas', slug: 'entrevistas', name: 'Entrevistas', description: 'Prepare-se para entrevistas', icon: '🎤', color: 'rose', parentId: 'carreira', order: 2, isNew: false },
      { id: 'linkedin-carreira', slug: 'linkedin-carreira', name: 'LinkedIn', description: 'Perfil profissional', icon: '💼', color: 'rose', parentId: 'carreira', order: 3, isNew: false },
      { id: 'freelancer', slug: 'freelancer', name: 'Freelancer', description: 'Trabalho autônomo', icon: '🏠', color: 'rose', parentId: 'carreira', order: 4, isNew: true },
    ]
  },
  // NICHOS ESPECÍFICOS
  {
    id: 'nichos',
    slug: 'nichos',
    name: 'Nichos Específicos',
    description: 'Prompts para áreas específicas',
    icon: '🎪',
    color: 'teal',
    parentId: null,
    order: 13,
    isNew: false,
    subcategories: [
      { id: 'imobiliario', slug: 'imobiliario', name: 'Imobiliário', description: 'Corretores e imóveis', icon: '🏠', color: 'teal', parentId: 'nichos', order: 1, isNew: false },
      { id: 'restaurantes', slug: 'restaurantes', name: 'Restaurantes', description: 'Food service', icon: '🍽️', color: 'teal', parentId: 'nichos', order: 2, isNew: false },
      { id: 'beleza', slug: 'beleza', name: 'Beleza & Estética', description: 'Salões e clínicas', icon: '💅', color: 'teal', parentId: 'nichos', order: 3, isNew: false },
      { id: 'saude', slug: 'saude', name: 'Saúde', description: 'Profissionais de saúde', icon: '🏥', color: 'teal', parentId: 'nichos', order: 4, isNew: false },
      { id: 'fitness', slug: 'fitness', name: 'Fitness', description: 'Personal e academias', icon: '💪', color: 'teal', parentId: 'nichos', order: 5, isNew: false },
      { id: 'turismo', slug: 'turismo', name: 'Turismo & Viagens', description: 'Agências e hotéis', icon: '✈️', color: 'teal', parentId: 'nichos', order: 6, isNew: false },
      { id: 'juridico', slug: 'juridico', name: 'Jurídico', description: 'Advogados e escritórios', icon: '⚖️', color: 'teal', parentId: 'nichos', order: 7, isNew: true },
      { id: 'contabilidade', slug: 'contabilidade', name: 'Contabilidade', description: 'Contadores e financeiro', icon: '🧮', color: 'teal', parentId: 'nichos', order: 8, isNew: false },
    ]
  },
  // ORGANIZAÇÃO PESSOAL
  {
    id: 'organizacao',
    slug: 'organizacao',
    name: 'Organização Pessoal',
    description: 'Vida pessoal organizada',
    icon: '🗓️',
    color: 'sky',
    parentId: null,
    order: 14,
    isNew: false,
    subcategories: [
      { id: 'planejamento', slug: 'planejamento', name: 'Planejamento', description: 'Metas e objetivos', icon: '📆', color: 'sky', parentId: 'organizacao', order: 1, isNew: false },
      { id: 'habitos', slug: 'habitos', name: 'Hábitos', description: 'Construa bons hábitos', icon: '🔁', color: 'sky', parentId: 'organizacao', order: 2, isNew: false },
      { id: 'financas-pessoais', slug: 'financas-pessoais', name: 'Finanças Pessoais', description: 'Controle financeiro', icon: '💰', color: 'sky', parentId: 'organizacao', order: 3, isNew: false },
      { id: 'bem-estar', slug: 'bem-estar', name: 'Bem-estar', description: 'Saúde mental', icon: '🧘', color: 'sky', parentId: 'organizacao', order: 4, isNew: false },
    ]
  },
  // MEGA-PROMPTS
  {
    id: 'mega-prompts',
    slug: 'mega-prompts',
    name: 'Mega-Prompts',
    description: 'Prompts avançados e completos',
    icon: '🌟',
    color: 'gradient',
    parentId: null,
    order: 15,
    isNew: false,
    subcategories: [
      { id: 'assistentes', slug: 'assistentes', name: 'Assistentes Virtuais', description: 'Assistentes especializados', icon: '🤖', color: 'gradient', parentId: 'mega-prompts', order: 1, isNew: false },
      { id: 'agentes', slug: 'agentes', name: 'Agentes de IA', description: 'Agentes autônomos', icon: '🧠', color: 'gradient', parentId: 'mega-prompts', order: 2, isNew: true },
      { id: 'workflows', slug: 'workflows', name: 'Workflows Completos', description: 'Processos automatizados', icon: '⚡', color: 'gradient', parentId: 'mega-prompts', order: 3, isNew: false },
      { id: 'frameworks', slug: 'frameworks', name: 'Frameworks', description: 'Metodologias completas', icon: '🏗️', color: 'gradient', parentId: 'mega-prompts', order: 4, isNew: false },
    ]
  },
  // PROMPT ENGINEERING
  {
    id: 'prompt-engineering',
    slug: 'prompt-engineering',
    name: 'Prompt Engineering',
    description: 'Aprenda a criar prompts melhores',
    icon: '🔬',
    color: 'fuchsia',
    parentId: null,
    order: 16,
    isNew: true,
    subcategories: [
      { id: 'tecnicas', slug: 'tecnicas', name: 'Técnicas Avançadas', description: 'Chain of thought, few-shot', icon: '🎓', color: 'fuchsia', parentId: 'prompt-engineering', order: 1, isNew: true },
      { id: 'templates', slug: 'templates', name: 'Templates', description: 'Estruturas reutilizáveis', icon: '📋', color: 'fuchsia', parentId: 'prompt-engineering', order: 2, isNew: false },
      { id: 'otimizacao', slug: 'otimizacao', name: 'Otimização', description: 'Melhore seus prompts', icon: '🔧', color: 'fuchsia', parentId: 'prompt-engineering', order: 3, isNew: false },
    ]
  },
  {
    id: 'ia-modelos',
    slug: 'ia-modelos',
    name: 'IA & Modelos',
    description: 'Prompts específicos para modelos e plataformas de IA',
    icon: '🤖',
    color: 'violet',
    parentId: null,
    order: 17,
    isNew: true,
    subcategories: [
      { id: 'chatgpt', slug: 'chatgpt', name: 'ChatGPT', description: 'Prompts otimizados para ChatGPT', icon: '🤖', color: 'violet', parentId: 'ia-modelos', order: 1, isNew: true },
      { id: 'claude', slug: 'claude', name: 'Claude', description: 'Prompts otimizados para Claude', icon: '🧠', color: 'violet', parentId: 'ia-modelos', order: 2, isNew: true },
      { id: 'gemini', slug: 'gemini', name: 'Gemini', description: 'Prompts otimizados para Gemini', icon: '✨', color: 'violet', parentId: 'ia-modelos', order: 3, isNew: true },
      { id: 'copilot', slug: 'copilot', name: 'Copilot', description: 'Prompts para Copilot e assistentes de código', icon: '🐙', color: 'violet', parentId: 'ia-modelos', order: 4, isNew: true },
      { id: 'cursor', slug: 'cursor', name: 'Cursor', description: 'Prompts para fluxo de trabalho em Cursor', icon: '🧭', color: 'violet', parentId: 'ia-modelos', order: 5, isNew: true },
      { id: 'veo', slug: 'veo', name: 'Veo', description: 'Prompts focados em produtividade com VEO', icon: '🚀', color: 'violet', parentId: 'ia-modelos', order: 6, isNew: true },
      { id: 'flux', slug: 'flux', name: 'Flux', description: 'Prompts para automação e fluxo', icon: '⚡', color: 'violet', parentId: 'ia-modelos', order: 7, isNew: true },
      { id: 'midjourney-modelos', slug: 'midjourney-modelos', name: 'Midjourney', description: 'Prompts para gerar imagens no Midjourney', icon: '🎨', color: 'violet', parentId: 'ia-modelos', order: 8, isNew: true },
      { id: 'ideogram', slug: 'ideogram', name: 'Ideogram', description: 'Prompts para criação visual no Ideogram', icon: '🖼️', color: 'violet', parentId: 'ia-modelos', order: 9, isNew: true },
    ]
  },
  {
    id: 'temas-especiais',
    slug: 'temas-especiais',
    name: 'Temas Especiais',
    description: 'Prompts para áreas específicas e nichos profissionais',
    icon: '🧠',
    color: 'teal',
    parentId: null,
    order: 18,
    isNew: true,
    subcategories: [
      { id: 'podcast', slug: 'podcast', name: 'Podcast', description: 'Roteiros, pautas e formatos para podcasts', icon: '🎙️', color: 'teal', parentId: 'temas-especiais', order: 1, isNew: true },
      { id: 'musica', slug: 'musica', name: 'Música', description: 'Briefings, letras e conceitos musicais', icon: '🎵', color: 'teal', parentId: 'temas-especiais', order: 2, isNew: true },
      { id: 'fotografia', slug: 'fotografia', name: 'Fotografia', description: 'Briefings e direção para fotografia profissional', icon: '📸', color: 'teal', parentId: 'temas-especiais', order: 3, isNew: true },
      { id: 'video', slug: 'video', name: 'Vídeo', description: 'Roteiros e conceitos para vídeo e audiovisual', icon: '🎬', color: 'teal', parentId: 'temas-especiais', order: 4, isNew: true },
      { id: 'cinema', slug: 'cinema', name: 'Cinema', description: 'Sinopses, personagens e conceitos de filmes', icon: '🎞️', color: 'teal', parentId: 'temas-especiais', order: 5, isNew: true },
      { id: 'arquitetura', slug: 'arquitetura', name: 'Arquitetura', description: 'Conceitos de projeto e descrição de espaços', icon: '🏛️', color: 'teal', parentId: 'temas-especiais', order: 6, isNew: true },
      { id: 'engenharia', slug: 'engenharia', name: 'Engenharia', description: 'Riscos, requisitos e planos de projetos técnicos', icon: '🛠️', color: 'teal', parentId: 'temas-especiais', order: 7, isNew: true },
      { id: 'psicologia', slug: 'psicologia', name: 'Psicologia', description: 'Análises comportamentais e planos de mudança', icon: '🧩', color: 'teal', parentId: 'temas-especiais', order: 8, isNew: true },
      { id: 'nutricao', slug: 'nutricao', name: 'Nutrição', description: 'Planos alimentares e orientações saudáveis', icon: '🥗', color: 'teal', parentId: 'temas-especiais', order: 9, isNew: true },
      { id: 'viagens', slug: 'viagens', name: 'Viagens', description: 'Roteiros, guias e experiências de viagem', icon: '✈️', color: 'teal', parentId: 'temas-especiais', order: 10, isNew: true },
      { id: 'idiomas', slug: 'idiomas', name: 'Idiomas', description: 'Planos de estudo e adaptação de textos', icon: '🗣️', color: 'teal', parentId: 'temas-especiais', order: 11, isNew: true },
      { id: 'ciencia', slug: 'ciencia', name: 'Ciência', description: 'Explicações e estudos científicos', icon: '🔬', color: 'teal', parentId: 'temas-especiais', order: 12, isNew: true },
      { id: 'matematica', slug: 'matematica', name: 'Matemática', description: 'Conceitos e explicações matemáticas', icon: '➗', color: 'teal', parentId: 'temas-especiais', order: 13, isNew: true },
    ]
  },
];

export function getAllCategories(): Category[] {
  return categoriesData;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  for (const cat of categoriesData) {
    if (cat.slug === slug) return cat;
    if (cat.subcategories) {
      const sub = cat.subcategories.find(s => s.slug === slug);
      if (sub) return sub;
    }
  }
  return undefined;
}

export function getParentCategory(categoryId: string): Category | undefined {
  for (const cat of categoriesData) {
    if (cat.subcategories?.some(s => s.id === categoryId)) {
      return cat;
    }
  }
  return undefined;
}

export function getCategoryById(id: string): Category | undefined {
  for (const cat of categoriesData) {
    if (cat.id === id) return cat;
    if (cat.subcategories) {
      const sub = cat.subcategories.find(s => s.id === id);
      if (sub) return sub;
    }
  }
  return undefined;
}
