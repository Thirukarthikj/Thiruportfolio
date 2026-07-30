import React from 'react';
import { skillCategories } from '../data/portfolioData';

export function Skills() {
  return (
    <section id="skills">
      <div className="section-label">What I Know</div>
      <h2 className="section-title">
        Technical <em>Skills</em>
      </h2>
      <div className="skills-grid reveal">
        {skillCategories.map((cat, idx) => (
          <div className="skill-card" key={idx}>
            <div className="skill-card-title">{cat.title}</div>
            <div className="skill-pills">
              {cat.skills.map((skill, sIdx) => (
                <span className="skill-pill" key={sIdx}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
