import React from 'react';
import { ArrowUp, Mail, Phone, ExternalLink, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="footer-grid">
        {/* Column 1: Brand & Bio */}
        <div className="footer-brand">
          <a href="#hero" className="footer-logo">
            Thiru<span>.</span>
          </a>
          <p style={{ lineHeight: 1.7, maxWidth: '340px' }}>
            Full Stack Developer specializing in production-grade web apps, Next.js/React architectures, and REST APIs. Pursuing MCA at Karpagam Academy of Higher Education.
          </p>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: '0.4rem' }}>
            <span style={{
              fontSize: '0.75rem',
              background: 'rgba(99, 102, 241, 0.15)',
              color: '#818cf8',
              padding: '0.25rem 0.75rem',
              borderRadius: '100px',
              fontFamily: "'DM Mono', monospace"
            }}>
              📍 {personalInfo.location}
            </span>
            <span style={{
              fontSize: '0.75rem',
              background: 'rgba(16, 185, 129, 0.15)',
              color: '#34d399',
              padding: '0.25rem 0.75rem',
              borderRadius: '100px',
              fontFamily: "'DM Mono', monospace"
            }}>
              🟢 Open for Roles
            </span>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <div className="footer-title">Navigation</div>
          <ul className="footer-links">
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Live Projects */}
        <div>
          <div className="footer-title">Live & Featured</div>
          <ul className="footer-links">
            <li>
              <a href="https://www.rirtoursandtravels.com/" target="_blank" rel="noopener noreferrer">
                RIR Tours & Travels <ExternalLink size={13} />
              </a>
            </li>
            <li><a href="#projects">GEN FASHION Store</a></li>
            <li><a href="#projects">IoT Driving Safety</a></li>
            <li><a href="#certifications">Certifications</a></li>
          </ul>
        </div>

        {/* Column 4: Quick Contact */}
        <div>
          <div className="footer-title">Connect</div>
          <ul className="footer-links">
            <li>
              <a href={`mailto:${personalInfo.email}`}>
                <Mail size={15} /> {personalInfo.email}
              </a>
            </li>
            <li>
              <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}>
                <Phone size={15} /> {personalInfo.phone}
              </a>
            </li>
            <li>
              <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub Portfolio <ExternalLink size={13} />
              </a>
            </li>
            <li>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">
                LinkedIn Profile <ExternalLink size={13} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div>
          © {new Date().getFullYear()} <strong>{personalInfo.name}</strong>. All rights reserved.
        </div>
        <div style={{ fontSize: '0.8rem', opacity: 0.75, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          Crafted with <Code2 size={15} color="#818cf8" /> in React &amp; Vite
        </div>
        <button
          onClick={scrollToTop}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#f8fafc',
            padding: '0.5rem 1rem',
            borderRadius: '100px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.8rem',
            fontFamily: "'DM Mono', monospace",
            transition: 'all 0.2s ease'
          }}
          title="Back to Top"
        >
          Back to top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
