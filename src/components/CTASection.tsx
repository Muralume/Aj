import React from 'react';
import { ctaContent, siteConfig } from '../data/siteContent';
import { MessageCircle, Sparkles } from 'lucide-react';
import './CTASection.css';

export const CTASection: React.FC = () => {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-ambient-glow" />
          <div className="cta-content-wrapper">
            <div className="badge-tag cta-badge">
              <Sparkles size={12} />
              <span>Orçamento Sem Compromisso</span>
            </div>

            <h2 className="cta-title">
              {ctaContent.title}
            </h2>

            <p className="cta-description">
              {ctaContent.description}
            </p>

            <div className="cta-actions">
              <a
                href={siteConfig.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary cta-btn-whatsapp"
              >
                <MessageCircle size={22} />
                <span>{ctaContent.buttonText}</span>
              </a>
            </div>

            <div className="cta-guarantee-note">
              <span>Atendimento ágil e personalizado para o seu projeto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
