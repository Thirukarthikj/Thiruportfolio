import React from 'react';
import { X, ExternalLink } from 'lucide-react';

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="project-tag" style={{ marginBottom: '0.8rem' }}>
          {project.tag}
        </div>
        <h2 className="project-title" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
          {project.title}
        </h2>
        <p className="project-desc" style={{ fontSize: '1rem' }}>
          {project.description}
        </p>

        {project.highlights && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '0.8rem',
              margin: '1.5rem 0',
              background: 'var(--surface2)',
              padding: '1.2rem',
              borderRadius: '12px',
              border: '1px solid var(--border)'
            }}
          >
            {Object.entries(project.highlights).map(([key, val]) => (
              <div key={key}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: "'DM Mono', monospace" }}>
                  {key}
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: '600', color: 'var(--accent)', marginTop: '0.2rem' }}>
                  {val}
                </div>
              </div>
            ))}
          </div>
        )}

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 0.8rem', fontFamily: "'Playfair Display', serif" }}>
          Key Technical Highlights & Modules
        </h3>
        <ul className="project-features" style={{ marginBottom: '1.8rem' }}>
          {project.features.map((feat, idx) => (
            <li key={idx}>{feat}</li>
          ))}
        </ul>

        <h3 style={{ fontSize: '0.82rem', fontFamily: "'DM Mono', monospace", color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
          Technologies Used
        </h3>
        <div className="tech-stack" style={{ marginBottom: '1.8rem' }}>
          {project.techStack.map((tech, idx) => (
            <span className="tech-chip" key={idx}>
              {tech}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <ExternalLink size={18} /> Visit Live Website
            </a>
          )}
          <button
            className={project.liveUrl ? "btn-outline" : "btn-primary"}
            onClick={onClose}
            style={{ flex: project.liveUrl ? 'none' : 1, justifyContent: 'center' }}
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
