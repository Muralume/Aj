import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="app-layout">
      {/* Header Fixo */}
      <Header />

      {/* Conteúdo Principal com Estrutura Semântica */}
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <CTASection />
      </main>

      {/* Rodapé e Contato */}
      <Footer />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
