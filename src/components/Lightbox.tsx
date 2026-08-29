import React, { useEffect } from 'react';
import { PortfolioItem } from '../data/siteContent';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import './Lightbox.css';

interface LightboxProps {
  isOpen: boolean;
  projects: PortfolioItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  projects,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const [touchStartX, setTouchStartX] = React.useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;
    if (diff < -50) {
      onNext();
    } else if (diff > 50) {
      onPrev();
    }
  };

  if (!isOpen || !projects[currentIndex]) return null;

  const currentProject = projects[currentIndex];

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Visualização do projeto: ${currentProject.title}`}
    >
      {/* Backdrop */}
      <div className="lightbox-backdrop" onClick={onClose} />

      {/* Close button */}
      <button
        type="button"
        className="lightbox-close-btn"
        onClick={onClose}
        aria-label="Fechar visualização de imagem"
      >
        <X size={28} />
      </button>

      {/* Navigation Buttons */}
      <button
        type="button"
        className="lightbox-nav-btn lightbox-nav-btn--prev"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Projeto anterior"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        type="button"
        className="lightbox-nav-btn lightbox-nav-btn--next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Próximo projeto"
      >
        <ChevronRight size={32} />
      </button>

      {/* Main Lightbox Content */}
      <div
        className="lightbox-container"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="lightbox-media-wrapper">
          <img
            src={currentProject.image}
            alt={currentProject.alt}
            className="lightbox-image"
          />
        </div>

        {/* Caption & Quick CTA */}
        <div className="lightbox-details">
          <div className="lightbox-meta">
            <span className="lightbox-category">{currentProject.category}</span>
            <span className="lightbox-counter">
              {currentIndex + 1} de {projects.length}
            </span>
          </div>

          <h3 className="lightbox-title">{currentProject.title}</h3>
          <p className="lightbox-description">{currentProject.description}</p>

          <a
            href={siteConfig.getWhatsappUrl(
              `Olá! Gostei muito do projeto de "${currentProject.title}" que vi no site e gostaria de um orçamento semelhante.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary lightbox-cta"
          >
            <MessageCircle size={17} />
            <span>Solicitar orçamento deste ambiente</span>
          </a>
        </div>
      </div>
    </div>
  );
};
