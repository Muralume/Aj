import React from 'react';
import { processContent } from '../data/siteContent';
import { MessageSquareText, PenTool, Hammer, CheckCircle2 } from 'lucide-react';
import './Process.css';

const stepIcons = [
  <MessageSquareText size={22} className="step-icon" key="icon-1" />,
  <PenTool size={22} className="step-icon" key="icon-2" />,
  <Hammer size={22} className="step-icon" key="icon-3" />,
  <CheckCircle2 size={22} className="step-icon" key="icon-4" />
];

export const Process: React.FC = () => {
  return (
    <section id="processo" className="section process-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper process-header">
          <div className="badge-tag">
            <span>{processContent.badge}</span>
          </div>
          <h2 className="section-title">{processContent.title}</h2>
          <p className="section-subtitle">{processContent.subtitle}</p>
        </div>

        {/* Process Steps Timeline */}
        <div className="process-timeline">
          <div className="process-timeline-line" />

          <div className="process-steps-grid">
            {processContent.steps.map((step, index) => (
              <div key={step.number} className="process-step-item">
                <div className="step-node-wrapper">
                  <div className="step-icon-circle">
                    {stepIcons[index % stepIcons.length]}
                  </div>
                  <span className="step-number-badge">{step.number}</span>
                </div>

                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
