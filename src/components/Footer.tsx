import React from 'react';
import { navLinks, siteConfig, footerContent } from '../data/siteContent';
import { MessageCircle, Instagram, MapPin, ArrowUp } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contato" className="site-footer">
      <div className="container">
        {/* Main Footer Columns */}
        <div className="footer-grid">
          {/* Column 1: Brand & Bio */}
          <div className="footer-col footer-col--brand">
            <a href="#inicio" className="brand-logo footer-logo" onClick={scrollToTop}>
              <div className="brand-monogram">
                <span>AJ</span>
              </div>
              <div className="brand-text">
                <span className="brand-name">AJ Planejar</span>
                <span className="brand-sub">Móveis Sob Medida</span>
              </div>
            </a>

            <p className="footer-bio">
              {footerContent.aboutText}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-heading">{footerContent.quickLinksTitle}</h3>
            <ul className="footer-links-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer-nav-link"
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
          </div>

          {/* Column 3: Contact & Placeholders */}
          <div className="footer-col">
            <h3 className="footer-heading">{footerContent.contactTitle}</h3>
            <div className="footer-contact-items">
              <a
                href={siteConfig.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
              >
                <MessageCircle size={18} className="contact-icon" />
                <span>WhatsApp: {siteConfig.whatsappNumber}</span>
              </a>

              <div className="footer-contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>Localização: {siteConfig.location}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Social */}
          <div className="footer-col">
            <h3 className="footer-heading">{footerContent.socialTitle}</h3>
            <div className="footer-social-links">
              <a
                href={siteConfig.instagramLink.startsWith('http') ? siteConfig.instagramLink : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-pill"
                aria-label="Instagram da AJ Planejar"
              >
                <Instagram size={18} />
                <span>Instagram ({siteConfig.instagramLink})</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="footer-bottom-bar">
          <div className="editorial-divider footer-divider" />
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              &copy; {currentYear} AJ Planejar. Todos os direitos reservados.
            </p>

            <button
              type="button"
              className="footer-back-to-top"
              onClick={scrollToTop}
              aria-label="Voltar ao topo da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
