import React from 'react';
import { heroContent, siteConfig } from '../data/siteContent';
import { MessageCircle, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  const handleScrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToNext = () => {
    const el = document.getElementById('sobre');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero-section">
      {/* Background Image Container with Multi-layer Gradient */}
      <div className="hero-bg-container">
        <img
          src={heroContent.heroImage}
          alt={heroContent.heroImageAlt}
          className="hero-bg-image"
          fetchPriority="high"
        />
        <div className="hero-overlay" />
        <div className="hero-vignette" />
        <div className="hero-grid-pattern" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Badge Tag */}
          <div className="badge-tag hero-badge animate-fade-in">
            <Sparkles size={13} className="hero-badge-icon" />
            <span>{heroContent.badge}</span>
          </div>

          {/* Main H1 Title */}
          <h1 className="hero-title">
            Ambientes <span className="hero-title-accent">planejados</span> para viver melhor.
          </h1>

          {/* Subtitle / Description */}
          <p className="hero-description">
            {heroContent.description}
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a
              href={siteConfig.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hero-btn-main"
            >
              <MessageCircle size={19} />
              <span>{heroContent.ctaPrimary}</span>
            </a>

            <button
              type="button"
              onClick={handleScrollToPortfolio}
              className="btn btn-secondary hero-btn-secondary"
            >
              <span>{heroContent.ctaSecondary}</span>
              <ArrowRight size={17} />
            </button>
          </div>

          {/* Editorial Highlights Strip */}
          <div className="hero-editorial-strip">
            <div className="hero-strip-item">
              <span className="hero-strip-num">100%</span>
              <span className="hero-strip-label">Sob Medida</span>
            </div>
            <div className="hero-strip-divider" />
            <div className="hero-strip-item">
              <span className="hero-strip-num">Fino</span>
              <span className="hero-strip-label">Acabamento</span>
            </div>
            <div className="hero-strip-divider" />
            <div className="hero-strip-item">
              <span className="hero-strip-num">Design</span>
              <span className="hero-strip-label">Contemporâneo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        type="button"
        className="hero-scroll-indicator"
        onClick={handleScrollToNext}
        aria-label="Rolar para a seção Sobre"
      >
        <span className="scroll-label">Explorar</span>
        <div className="scroll-icon-wrapper">
          <ChevronDown size={18} className="scroll-chevron" />
        </div>
      </button>
    </section>
  );
};
