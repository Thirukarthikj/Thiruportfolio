import React from 'react';
import { experienceList } from '../data/portfolioData';

export function Experience() {
  return (
    <section id="experience">
      <div className="section-label">Work Experience</div>
      <h2 className="section-title">
        Professional <em>Experience</em>
      </h2>
      <div className="exp-stack reveal">
        {experienceList.map((exp) => (
          <div className="exp-card" key={exp.id}>
            <div className="exp-logo">{exp.logoText}</div>
            <div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-duration">{exp.duration}</div>
              <p className="exp-desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
