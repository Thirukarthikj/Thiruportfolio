import React from 'react';
import { Sparkles, Brain, Box, Database, Award, Cpu, ShieldCheck } from 'lucide-react';
import { certificationsList } from '../data/portfolioData';

const iconMap = {
  Sparkles: <Sparkles size={28} />,
  Brain: <Brain size={28} />,
  Box: <Box size={28} />,
  Database: <Database size={28} />,
  Award: <Award size={28} />,
  Cpu: <Cpu size={28} />
};

export function Certifications() {
  return (
    <section id="certifications">
      <div className="section-label">Verified Qualifications</div>
      <h2 className="section-title">
        Certifications & <em>Credentials</em>
      </h2>
      <div className="cert-grid reveal">
        {certificationsList.map((cert) => (
          <div className="cert-card" key={cert.id}>
            <div>
              <div className="cert-icon">
                {iconMap[cert.icon] || <ShieldCheck size={28} />}
              </div>
              <div className="cert-name">{cert.title}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                {cert.issuer}
              </div>
            </div>
            <span className="cert-badge">{cert.badge}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
