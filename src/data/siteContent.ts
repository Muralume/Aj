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
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
      alt: 'Cozinha planejada moderna com armários escuros e bancada elegante'
    },
    {
      id: 'dormitorios-closets',
      number: '02',
      title: 'Dormitórios e closets',
      description: 'Soluções personalizadas para aproveitar o espaço com conforto e praticidade.',
      image: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1000&q=80',
      alt: 'Closet planejado com iluminação embutida e gavetas organizadoras'
    },
    {
      id: 'salas-paineis',
      number: '03',
      title: 'Salas e painéis',
      description: 'Móveis que integram tecnologia, decoração e organização.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
      alt: 'Painel ripado de sala planejado com suporte de TV e nichos iluminados'
    },
    {
      id: 'home-offices',
      number: '04',
      title: 'Home offices e ambientes comerciais',
      description: 'Projetos funcionais para espaços de trabalho modernos e bem planejados.',
      image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1000&q=80',
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
      title: 'Cozinha planejada',
      category: 'Cozinha',
      description: 'Mobiliário integrado com torre quente, armários em tons escuros e iluminação em fita de LED.',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=85',
      alt: 'Projeto de cozinha planejada contemporânea de alto padrão'
    },
    {
      id: 'proj-2',
      title: 'Closet personalizado',
      category: 'Closet',
      description: 'Divisões sob medida com perfis metálicos, nichos para acessórios e portas reflecta.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
      alt: 'Projeto de closet personalizado com espelho e organização precisa'
    },
    {
      id: 'proj-3',
      title: 'Painel para sala',
      category: 'Living',
      description: 'Composição de painel ripado em madeira nobre com rack suspenso e fiação 100% oculta.',
      image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85',
      alt: 'Painel de sala planejado com acabamento em marcenaria nobre e iluminação'
    },
    {
      id: 'proj-4',
      title: 'Dormitório planejado',
      category: 'Quarto',
      description: 'Cabeceira estofada com painel lateral em marcenaria e mesas de cabeceira flutuantes.',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
      alt: 'Dormitório de casal planejado com design minimalista e acolhedor'
    },
    {
      id: 'proj-5',
      title: 'Home office',
      category: 'Escritório',
      description: 'Espaço ergonômico com mesa ampla, nichos aéreos para livros e canaletas embutidas.',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85',
      alt: 'Home office planejado funcional e sofisticado'
    },
    {
      id: 'proj-6',
      title: 'Ambiente comercial',
      category: 'Corporativo',
      description: 'Recepção e sala de reuniões com balcão curvo em marcenaria e painéis decorativos.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      alt: 'Ambiente corporativo planejado com marcenaria sob medida elegante'
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
