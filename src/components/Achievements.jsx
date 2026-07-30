import React from 'react';
import { achievementsList } from '../data/portfolioData';

export function Achievements() {
  return (
    <section id="achievements">
      <div className="section-label">Beyond the Classroom</div>
      <h2 className="section-title">
        Activities & <em>Achievements</em>
      </h2>
      <div className="achievement-list reveal">
        {achievementsList.map((item, idx) => (
          <div className="achievement-item" key={idx}>
            <div className="achievement-num">{item.num}</div>
            <div>
              <div className="achievement-title">{item.title}</div>
              <div className="achievement-text">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
