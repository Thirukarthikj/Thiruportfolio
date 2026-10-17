import React, { useState } from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import { projectsList } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <div className="section-label">What I've Built</div>
      <h2 className="section-title">
        Featured <em>Projects</em>
      </h2>
      <div className="projects-stack">
        {projectsList.map((project) => (
          <div className="project-card reveal" key={project.id}>
            <div>
              <div className="project-tag">{project.tag}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <ul className="project-features">
                {project.features.map((feat, fIdx) => (
                  <li key={fIdx}>{feat}</li>
                ))}
              </ul>

              <div className="tech-stack" style={{ marginBottom: '1.5rem' }}>
                {project.techStack.map((tech, tIdx) => (
                  <span className="tech-chip" key={tIdx}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions" style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem' }}
                  >
                    <ExternalLink size={16} /> Visit Live Website
                  </a>
                )}
                <button
                  className="btn-outline"
                  style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem' }}
                  onClick={() => setSelectedProject(project)}
                >
                  <Layers size={16} /> View Details & Metrics
                </button>
              </div>
            </div>

            <div className="project-icon-wrapper" aria-hidden="true">
              {project.iconChar}
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
