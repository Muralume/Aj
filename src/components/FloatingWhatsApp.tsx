import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteContent';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside
      className={`floating-whatsapp ${isVisible ? 'floating-whatsapp--visible' : ''}`}
      aria-label="Atendimento rápido via WhatsApp"
    >
      <a
        href={siteConfig.getWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Fale conosco no WhatsApp para solicitar um orçamento"
      >
        <div className="floating-pulse-ring" />
        <MessageCircle size={26} className="floating-icon" />
        <span className="floating-tooltip">Solicitar orçamento</span>
      </a>
    </aside>
  );
};
