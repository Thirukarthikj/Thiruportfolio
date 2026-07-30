import React from 'react';
import { educationList } from '../data/portfolioData';

export function Education() {
  return (
    <section id="education">
      <div className="section-label">Academic Journey</div>
      <h2 className="section-title">
        My <em>Education</em>
      </h2>
      <div className="timeline reveal">
        {educationList.map((edu) => (
          <div className="timeline-item" key={edu.id}>
            <div className="timeline-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <img
                src={edu.logo}
                alt={`${edu.institution} Logo`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
                style={{
                  width: '64px',
                  height: '64px',
                  objectFit: 'contain',
                  borderRadius: '10px',
                  border: '1px solid var(--border)',
                  background: '#fff',
                  padding: '6px',
                  flexShrink: 0
                }}
              />
              <div
                style={{
                  display: 'none',
                  width: '64px',
                  height: '64px',
                  borderRadius: '10px',
                  border: '1px solid var(--border)',
                  background: 'var(--surface2)',
                  color: 'var(--accent)',
                  fontWeight: 700,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontFamily: "'DM Mono', monospace"
                }}
              >
                {edu.logoFallback}
              </div>

              <div>
                <div className="timeline-year">{edu.year}</div>
                <div className="timeline-degree">{edu.degree}</div>
                <div className="timeline-inst">
                  {edu.institution} &middot; {edu.type}
                </div>
                <span className="timeline-score">{edu.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
