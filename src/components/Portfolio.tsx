import React, { useState, useEffect, useRef, useCallback } from 'react';
import { portfolioContent } from '../data/siteContent';
import { ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { Lightbox } from './Lightbox';
import './Portfolio.css';

export const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Drag / Swipe State
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const totalProjects = portfolioContent.projects.length;

  // Responsive items count calculation
  const updateItemsVisible = useCallback(() => {
    const width = window.innerWidth;
    if (width < 680) {
      setItemsVisible(1);
    } else if (width < 1024) {
      setItemsVisible(2);
    } else {
      setItemsVisible(3);
    }
  }, []);

  useEffect(() => {
    updateItemsVisible();
    window.addEventListener('resize', updateItemsVisible);
    return () => window.removeEventListener('resize', updateItemsVisible);
  }, [updateItemsVisible]);

  const maxIndex = Math.max(0, totalProjects - itemsVisible);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay with pause on hover or interaction
  useEffect(() => {
    if (isHovered || lightboxOpen || isDragging) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered, lightboxOpen, isDragging, nextSlide]);

  // Keyboard navigation within carousel
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -50) {
      nextSlide();
    } else if (dragOffset > 50) {
      prevSlide();
    }
    setDragOffset(0);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -50) {
      nextSlide();
    } else if (dragOffset > 50) {
      prevSlide();
    }
    setDragOffset(0);
  };

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  // Calculate slide translation percentage
  const slideWidthPercent = 100 / itemsVisible;
  const transformX = -(currentIndex * slideWidthPercent);

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        {/* Section Header with Controls */}
        <div className="portfolio-header-wrapper">
          <div className="portfolio-title-group">
            <div className="badge-tag">
              <Sparkles size={12} />
              <span>{portfolioContent.badge}</span>
            </div>
            <h2 className="section-title">{portfolioContent.title}</h2>
            <p className="section-subtitle">{portfolioContent.subtitle}</p>
          </div>

          {/* Carousel Arrows */}
          <div className="carousel-nav-arrows">
            <button
              type="button"
              className="carousel-btn carousel-btn--prev"
              onClick={prevSlide}
              aria-label="Ver projeto anterior"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="carousel-btn carousel-btn--next"
              onClick={nextSlide}
              aria-label="Ver próximo projeto"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="carousel-wrapper"
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            if (isDragging) handleMouseUp();
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Carrossel de projetos AJ Planejar"
        >
          <div
            className="carousel-track"
            style={{
              transform: `translateX(calc(${transformX}% + ${dragOffset}px))`,
              transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {portfolioContent.projects.map((project, index) => (
              <div
                key={project.id}
                className="carousel-slide"
                style={{ width: `${slideWidthPercent}%` }}
              >
                <div
                  className="portfolio-card"
                  onClick={() => openLightbox(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(index);
                    }
                  }}
                  aria-label={`Ampliar projeto ${project.title}`}
                >
                  <div className="portfolio-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="portfolio-image"
                      loading="lazy"
                      draggable={false}
                    />
                    <div className="portfolio-card-overlay" />
                    
                    <button
                      type="button"
                      className="portfolio-zoom-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(index);
                      }}
                      aria-label={`Ampliar imagem do projeto ${project.title}`}
                    >
                      <Maximize2 size={18} />
                    </button>
                    
                    <div className="portfolio-badge-pill">
                      {project.category}
                    </div>
                  </div>

                  <div className="portfolio-card-info">
                    <h3 className="portfolio-item-title">{project.title}</h3>
                    <p className="portfolio-item-desc">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="carousel-indicators" role="tablist" aria-label="Indicadores do carrossel">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
            <button
              key={`dot-${dotIndex}`}
              type="button"
              className={`carousel-dot ${currentIndex === dotIndex ? 'carousel-dot--active' : ''}`}
              onClick={() => setCurrentIndex(dotIndex)}
              aria-label={`Ir para a posição ${dotIndex + 1}`}
              aria-selected={currentIndex === dotIndex}
              role="tab"
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        projects={portfolioContent.projects}
        currentIndex={selectedImageIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setSelectedImageIndex((prev) => (prev <= 0 ? totalProjects - 1 : prev - 1))
        }
        onNext={() =>
          setSelectedImageIndex((prev) => (prev >= totalProjects - 1 ? 0 : prev + 1))
        }
      />
    </section>
  );
};
