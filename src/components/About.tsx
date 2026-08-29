import React from 'react';
import { aboutContent } from '../data/siteContent';
import { Compass, Maximize2, ShieldCheck, UserCheck } from 'lucide-react';
import './About.css';

const diffIcons = [
  <Compass size={22} className="diff-icon" key="icon-1" />,
  <Maximize2 size={22} className="diff-icon" key="icon-2" />,
  <ShieldCheck size={22} className="diff-icon" key="icon-3" />,
  <UserCheck size={22} className="diff-icon" key="icon-4" />
];

export const About: React.FC = () => {
  return (
    <section id="sobre" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Column 1: Image Composition */}
          <div className="about-visual">
            <div className="about-image-wrapper">
              <img
                src={aboutContent.image}
                alt={aboutContent.imageAlt}
                className="about-image"
                loading="lazy"
              />
              <div className="about-image-badge">
                <span className="badge-year">AJ</span>
                <span className="badge-text">Qualidade em Cada Detalhe</span>
              </div>
              <div className="about-frame-border" />
            </div>
          </div>

          {/* Column 2: Brand Story & Differentials */}
          <div className="about-content">
            <div className="badge-tag">
              <span>{aboutContent.badge}</span>
            </div>

            <h2 className="section-title about-title">
              {aboutContent.title}
            </h2>

            <p className="about-description">
              {aboutContent.paragraph}
            </p>

            {/* Differentials Grid */}
            <div className="differentials-list">
              {aboutContent.differentials.map((item, index) => (
                <div key={item.id} className="differential-card">
                  <div className="diff-icon-box">
                    {diffIcons[index % diffIcons.length]}
                  </div>
                  <div className="diff-text-box">
                    <h3 className="diff-title">{item.title}</h3>
                    <p className="diff-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
