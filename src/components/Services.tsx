import React from 'react';
import { servicesContent, siteConfig } from '../data/siteContent';
import { ArrowUpRight } from 'lucide-react';
import './Services.css';

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="section services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper services-header">
          <div className="badge-tag">
            <span>{servicesContent.badge}</span>
          </div>
          <h2 className="section-title">
            {servicesContent.title}
          </h2>
          <p className="section-subtitle">
            {servicesContent.subtitle}
          </p>
        </div>

        {/* Services Editorial Grid */}
        <div className="services-grid">
          {servicesContent.services.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-image-container">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="service-image"
                  loading="lazy"
                />
                <div className="service-image-gradient" />
                <span className="service-number">{service.number}</span>
              </div>

              <div className="service-body">
                <div className="service-header-line">
                  <h3 className="service-title">{service.title}</h3>
                  <a
                    href={siteConfig.getWhatsappUrl(`Olá! Gostaria de saber mais sobre o serviço de ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-link-btn"
                    aria-label={`Consultar orçamento para ${service.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-bottom-accent" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
