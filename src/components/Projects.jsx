import React from 'react';
import { ExternalLink, Award, ShieldAlert, Cpu } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Triventa Exports',
      subtitle: 'Corporate Logistics Webpage',
      image: '/triventa.png',
      link: 'https://triventaexports.com',
      github: '#',
      tech: ['React.js', 'Vite', 'Vanilla CSS', 'Netlify', 'GoDaddy', 'SEO Optimization'],
      metric: '94/100 Lighthouse Performance',
      metricIcon: <Award size={18} />,
      bullets: [
        'Developed a highly responsive and custom React.js frontend with reusable UI elements.',
        'Implemented enquiry request forms and sample workflow handling deployed via Netlify.',
        'Structured semantic HTML, optimized assets, and configured metadata for SEO efficiency.'
      ]
    },
    {
      title: 'Autonomous Ground Vehicle (AGV)',
      subtitle: 'Robotics SLAM Navigation System',
      image: '/agv.png',
      link: '',
      github: 'https://github.com/sanjan-achar',
      tech: ['Python', 'ROS (Robot Operating System)', 'SLAM Navigation', 'SQL Logging', 'Sensor Fusion'],
      metric: '90% Path Accuracy',
      metricIcon: <Cpu size={18} />,
      bullets: [
        'Built a complete navigation routine combining SLAM mapping and path trajectory calculations.',
        'Configured obstacle detection sensors and synchronized warning streams.',
        'Programmed a real-time logging module to store telemetry streams into SQL tables.'
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Portfolio Showcase</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card glass">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="overlay-content">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-action-btn" title="Live Preview">
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-action-btn" title="Source Code">
                        <svg className="github-icon" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-info">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <h4 className="project-subtitle">{project.subtitle}</h4>
                  </div>
                  <div className="project-metric">
                    <span className="metric-badge">
                      {project.metricIcon}
                      {project.metric}
                    </span>
                  </div>
                </div>

                <ul className="project-bullets">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="project-bullet-item">{bullet}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="project-tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          background-color: var(--bg-primary);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          margin-top: 20px;
        }
        .project-card {
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--card-shadow);
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
        }
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--card-hover-shadow);
          border-color: rgba(var(--primary-rgb), 0.2);
        }
        .project-image-container {
          position: relative;
          height: 250px;
          overflow: hidden;
          border-bottom: 1px solid var(--border-color);
        }
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }
        .project-card:hover .project-image {
          transform: scale(1.05);
        }
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(11, 15, 25, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition-smooth);
          z-index: 2;
        }
        .project-image-container:hover .project-overlay {
          opacity: 1;
        }
        .overlay-content {
          display: flex;
          gap: 16px;
        }
        .project-action-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #ffffff;
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          transition: var(--transition-fast);
        }
        .project-action-btn:hover {
          transform: scale(1.1);
          background: var(--primary);
          color: #ffffff;
        }
        .project-info {
          padding: 32px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          gap: 12px;
        }
        .project-title {
          font-size: 22px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .project-subtitle {
          font-size: 14px;
          color: var(--primary);
          font-weight: 600;
        }
        .metric-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          color: var(--secondary);
          background: rgba(45, 212, 191, 0.1);
          padding: 6px 12px;
          border-radius: 50px;
          border: 1px solid rgba(45, 212, 191, 0.2);
        }
        .project-bullets {
          list-style-type: none;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex-grow: 1;
        }
        .project-bullet-item {
          font-size: 14px;
          line-height: 1.5;
          color: var(--text-secondary);
          position: relative;
          padding-left: 18px;
        }
        .project-bullet-item::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: bold;
          font-size: 18px;
          top: -2px;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
        }
        .project-tech-badge {
          font-size: 11px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 4px;
          background: var(--bg-tertiary);
          color: var(--text-tertiary);
          border: 1px solid var(--border-color);
        }
        @media (max-width: 992px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>
    </section>
  );
}
