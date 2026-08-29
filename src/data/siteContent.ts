export interface NavLink {
  label: string;
  href: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const siteConfig = {
  name: 'AJ Planejar',
  tagline: 'Marcenaria e móveis planejados',
  whatsappNumber: '[NÚMERO_DO_WHATSAPP]',
  whatsappMessage: 'Olá! Conheci a AJ Planejar pelo site e gostaria de solicitar um orçamento para móveis planejados.',
  instagramLink: '[LINK_DO_INSTAGRAM]',
  location: '[CIDADE_E_ESTADO]',
  getWhatsappUrl: (customMsg?: string) => {
    const phone = siteConfig.whatsappNumber.replace(/\D/g, '');
    const text = encodeURIComponent(customMsg || siteConfig.whatsappMessage);
    // If phone placeholder is unpopulated, we still provide a clean wa.me target with encoded message
    return phone ? `https://wa.me/${phone}?text=${text}` : `https://wa.me/?text=${text}`;
  }
};

export const navLinks: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Processo', href: '#processo' },
  { label: 'Contato', href: '#contato' },
];

export const heroContent = {
  badge: 'Marcenaria e móveis planejados',
  title: 'Ambientes planejados para viver melhor.',
  description: 'Projetamos móveis sob medida que unem funcionalidade, beleza e personalidade em cada detalhe.',
  ctaPrimary: 'Solicitar orçamento',
  ctaSecondary: 'Conhecer projetos',
  heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
  heroImageAlt: 'Cozinha e sala integradas com móveis planejados de alto padrão em marcenaria nobre'
};

export const aboutContent = {
  badge: 'Sobre a AJ Planejar',
  title: 'Planejamento que transforma espaços',
  paragraph: 'A AJ Planejar desenvolve móveis personalizados para transformar espaços em ambientes funcionais, organizados e visualmente marcantes. Cada projeto é pensado de acordo com as necessidades, preferências e características do ambiente, valorizando cada centímetro disponível.',
  differentials: [
    {
      id: 'diff-1',
      title: 'Projetos personalizados',
      description: 'Soluções exclusivas desenhadas milimetricamente para o seu espaço e estilo de vida.'
    },
    {
      id: 'diff-2',
      title: 'Aproveitamento inteligente dos espaços',
      description: 'Otimização máxima de cada metro quadrado com compartimentos ergonômicos e funcionais.'
    },
    {
      id: 'diff-3',
      title: 'Acabamentos cuidadosamente selecionados',
      description: 'Padrões de madeira nobre, ferragens com amortecimento e revestimentos de alta durabilidade.'
    },
    {
      id: 'diff-4',
      title: 'Atendimento próximo em todas as etapas',
      description: 'Acompanhamento do primeiro contato até o ajuste final da montagem com transparência.'
    }
  ] as Differential[],
  image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
  imageAlt: 'Detalhes de acabamento em marcenaria planejada com iluminação suave e textura nobre'
};

export const servicesContent = {
  badge: 'O que oferecemos',
  title: 'Soluções pensadas para cada ambiente',
  subtitle: 'Concepção arquitetônica e execução de marcenaria fina para valorizar a sua rotina com elegância.',
  services: [
    {
      id: 'cozinhas',
      number: '01',
      title: 'Cozinhas planejadas',
      description: 'Organização, funcionalidade e acabamento sob medida para o dia a dia.',
      image: '/images/servico-cozinha.jpg',
      alt: 'Cozinha planejada moderna com armários escuros e bancada elegante'
    },
    {
      id: 'dormitorios-closets',
      number: '02',
      title: 'Dormitórios e closets',
      description: 'Soluções personalizadas para aproveitar o espaço com conforto e praticidade.',
      image: '/images/servico-closet.jpg',
      alt: 'Closet planejado com iluminação embutida e gavetas organizadoras'
    },
    {
      id: 'salas-paineis',
      number: '03',
      title: 'Salas e painéis',
      description: 'Móveis que integram tecnologia, decoração e organização.',
      image: '/images/servico-sala.jpg',
      alt: 'Painel ripado de sala planejado com suporte de TV e nichos iluminados'
    },
    {
      id: 'home-offices',
      number: '04',
      title: 'Home offices e ambientes comerciais',
      description: 'Projetos funcionais para espaços de trabalho modernos e bem planejados.',
      image: '/images/servico-homeoffice.jpg',
      alt: 'Home office planejado contemporâneo com bancada e prateleiras suspensas'
    }
  ] as ServiceItem[]
};

export const portfolioContent = {
  badge: 'Portfólio de Projetos',
  title: 'Projetos que traduzem personalidade',
  subtitle: 'Conheça alguns ambientes desenvolvidos para unir estética, funcionalidade e aproveitamento inteligente do espaço.',
  projects: [
    {
      id: 'proj-1',
      title: 'Móveis Planejados',
      category: 'Residencial',
      description: 'Integração completa de marcenaria nobre entre ambientes com aproveitamento inteligente de espaço.',
      image: '/images/moveis-planejados.jpg',
      alt: 'Projeto de móveis planejados integrados de alto padrão'
    },
    {
      id: 'proj-2',
      title: 'Cozinha Planejada',
      category: 'Cozinha',
      description: 'Mobiliário sob medida com ilha em mármore, armários com amortecimento e iluminação em fita de LED.',
      image: '/images/cozinha-planejada.jpg',
      alt: 'Projeto de cozinha planejada contemporânea de alto padrão'
    },
    {
      id: 'proj-3',
      title: 'Sala Planejada',
      category: 'Living',
      description: 'Painel ripado em madeira nobre com rack suspenso, nichos iluminados e fiação 100% oculta.',
      image: '/images/sala-planejada.jpg',
      alt: 'Painel de sala planejado com acabamento em marcenaria nobre e iluminação'
    },
    {
      id: 'proj-4',
      title: 'Quarto Planejado',
      category: 'Quarto',
      description: 'Dormitório elegante com guarda-roupa embutido em vidro reflecta, cabeceira ripada e iluminação aconchegante.',
      image: '/images/quarto-planejado.jpg',
      alt: 'Dormitório de casal planejado com design minimalista e acolhedor'
    },
    {
      id: 'proj-5',
      title: 'Escritório Planejado',
      category: 'Home Office',
      description: 'Espaço de trabalho ergonômico com mesa em madeira nobre, estante planejada e nichos aéreos.',
      image: '/images/escritorio-planejado.jpg',
      alt: 'Home office planejado funcional e sofisticado'
    },
    {
      id: 'proj-6',
      title: 'Espaço Gourmet Planejado',
      category: 'Área Gourmet',
      description: 'Bancada gourmet com churrasqueira integrada, adega climatizada e armários resistentes sob medida.',
      image: '/images/espaco-gourmet-planejado.jpg',
      alt: 'Espaço gourmet planejado com bancada em granito e marcenaria premium'
    }
  ] as PortfolioItem[]
};

export const processContent = {
  badge: 'Como Trabalhamos',
  title: 'Processo de atendimento',
  subtitle: 'Uma jornada transparente e cuidadosa desde a concepção até o acabamento do seu ambiente.',
  steps: [
    {
      number: '01',
      title: 'Contato inicial',
      description: 'Entendimento das necessidades e características do ambiente.'
    },
    {
      number: '02',
      title: 'Planejamento',
      description: 'Definição da proposta, organização dos espaços e acabamentos.'
    },
    {
      number: '03',
      title: 'Produção',
      description: 'Fabricação dos móveis conforme o projeto aprovado.'
    },
    {
      number: '04',
      title: 'Entrega e montagem',
      description: 'Finalização do ambiente com atenção aos detalhes.'
    }
  ] as ProcessStep[]
};

export const ctaContent = {
  title: 'Vamos planejar o seu próximo ambiente?',
  description: 'Conte para a AJ Planejar o que você deseja transformar e solicite um orçamento personalizado.',
  buttonText: 'Falar pelo WhatsApp'
};

export const footerContent = {
  aboutText: 'Marcenaria de alto padrão e móveis planejados sob medida. Transformamos espaços em ambientes elegantes, funcionais e duráveis.',
  quickLinksTitle: 'Navegação rápida',
  contactTitle: 'Contato & Localização',
  socialTitle: 'Redes Sociais'
};
