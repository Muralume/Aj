import React, { useState, useEffect } from 'react';
import { navLinks, siteConfig } from '../data/siteContent';
import { Menu, X, MessageCircle } from 'lucide-react';
import './Header.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy for active nav link
      const sections = ['inicio', 'sobre', 'servicos', 'portfolio', 'processo', 'contato'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo */}
        <a href="#inicio" className="brand-logo" onClick={() => handleNavClick('#inicio')}>
          <div className="brand-monogram">
            <span>AJ</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">AJ Planejar</span>
            <span className="brand-sub">Móveis Sob Medida</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Navegação Principal">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.replace('#', '') ? 'nav-link--active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Action Button */}
        <div className="header-actions">
          <a
            href={siteConfig.getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary header-cta"
            aria-label="Solicitar orçamento pelo WhatsApp"
          >
            <MessageCircle size={17} />
            <span>Solicitar orçamento</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'mobile-drawer-backdrop--open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`mobile-drawer ${mobileMenuOpen ? 'mobile-drawer--open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="brand-logo">
            <div className="brand-monogram">
              <span>AJ</span>
            </div>
            <div className="brand-text">
              <span className="brand-name">AJ Planejar</span>
            </div>
          </div>
          <button
            type="button"
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-nav" aria-label="Navegação Mobile">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="mobile-nav-item">
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.href.replace('#', '') ? 'mobile-nav-link--active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-drawer-footer">
          <a
            href={siteConfig.getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            <MessageCircle size={18} />
            <span>Solicitar orçamento</span>
          </a>
          <p className="mobile-drawer-caption">Marcenaria e móveis planejados sob medida</p>
        </div>
      </div>
    </header>
  );
};
