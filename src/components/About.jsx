import React from 'react';
import { personalInfo, softSkills } from '../data/portfolioData';

export function About() {
  return (
    <section id="about">
      <div className="section-label">Who I Am</div>
      <h2 className="section-title">
        About <em>Me</em>
      </h2>
      <div className="about-grid reveal">
        <div className="about-text">
          <p>
            I'm <strong>{personalInfo.name}</strong>, a full-stack developer and MCA student at Karpagam Academy of Higher Education. I build end-to-end web applications — from JWT-authenticated backends and REST APIs to responsive, polished frontends — using modern tools like Next.js, React, Redux Toolkit, and Tailwind CSS.
          </p>
          <div className="about-highlight">"{personalInfo.objective}"</div>
          <p>{personalInfo.extendedBio}</p>

          <h3 style={{
            fontSize: '0.85rem',
            fontFamily: "'DM Mono', monospace",
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '0.75rem',
            marginTop: '1.5rem'
          }}>
            Soft Skills
          </h3>
          <div className="soft-skills">
            {softSkills.map((skill, i) => (
              <span className="soft-tag" key={i}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{
            fontSize: '0.85rem',
            fontFamily: "'DM Mono', monospace",
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '1rem'
          }}>
            Quick Facts
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{
              background: 'var(--surface2)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '1rem 1.25rem',
              display: 'flex',
              justifySpaceBetween: 'center',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Current Study</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontFamily: "'DM Mono', monospace" }}>
                {personalInfo.currentStudy}
              </span>
            </div>

            <div style={{
              background: 'var(--surface2)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '1rem 1.25rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Location</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontFamily: "'DM Mono', monospace" }}>
                {personalInfo.location}
              </span>
            </div>

            <div style={{
              background: 'var(--surface2)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '1rem 1.25rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Languages</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontFamily: "'DM Mono', monospace" }}>
                {personalInfo.languages.join(', ')}
              </span>
            </div>

            <div style={{
              background: 'var(--surface2)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '1rem 1.25rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email</span>
              <a href={`mailto:${personalInfo.email}`} style={{ fontSize: '0.85rem', color: 'var(--accent)', fontFamily: "'DM Mono', monospace", textDecoration: 'none' }}>
                {personalInfo.email}
              </a>
            </div>

            <div style={{
              background: 'var(--surface2)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '1rem 1.25rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>GitHub</span>
              <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: 'var(--accent)', fontFamily: "'DM Mono', monospace", textDecoration: 'none' }}>
                {personalInfo.github}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
