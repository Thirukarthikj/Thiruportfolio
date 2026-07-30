import React from 'react';
import { ArrowRight, Mail, Code, Server, Sparkles } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export function Hero() {
  return (
    <section id="hero">
      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Open to Opportunities
          </div>
          <h1 className="hero-name">
            {personalInfo.name}<span className="accent">.</span>
          </h1>
          <p className="hero-title">{personalInfo.role}</p>
          <p className="hero-desc">{personalInfo.bio}</p>

          <div className="hero-btns">
            <a href="#projects" className="btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              Get in Touch <Mail size={18} />
            </a>
          </div>

          <div className="hero-stats">
            {stats.map((item, idx) => (
              <div key={idx}>
                <div className="stat-num">
                  {item.value}
                  <span>{item.total}</span>
                </div>
                <div className="stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <div className="hero-image-aura"></div>
            <div className="hero-image-frame">
              <img 
                src={personalInfo.avatarUrl} 
                alt={personalInfo.name} 
                className="hero-profile-img"
              />
            </div>
            
            {/* Floating Badges */}
            <div className="hero-float-badge float-badge-1">
              <Code size={16} className="float-icon" />
              <span>Full Stack</span>
            </div>
            
            <div className="hero-float-badge float-badge-2">
              <Server size={16} className="float-icon" />
              <span>MCA 2027</span>
            </div>

            <div className="hero-float-badge float-badge-3">
              <Sparkles size={16} className="float-icon" />
              <span>React & Node</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
