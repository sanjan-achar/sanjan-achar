import React from 'react';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Triventa Exports',
      role: 'Freelance Software Developer',
      duration: 'Jan. 2026 – Present',
      location: 'Remote',
      bullets: [
        'Designed and developed a responsive, high-performance company website using React.js and custom CSS.',
        'Implemented streamlined client enquiry and sample request workflows, deploying the production build via Netlify.',
        'Optimized site assets and structure to achieve an outstanding 94/100 Lighthouse performance score.'
      ],
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Netlify', 'SEO Optimization']
    },
    {
      company: 'Volvo Group',
      role: 'Graduate Apprentice Trainee',
      duration: 'May 2025 – May 2026',
      location: 'Bangalore, KA',
      bullets: [
        'Developed an enterprise administration dashboard using React.js, Redux, and Context API to manage user authorization for legacy mainframe applications.',
        'Engineered REST APIs using Node.js to integrate React.js with COBOL applications and DB2 databases using SQL and stored procedures.',
        'Enhanced legacy COBOL programs supporting warehouse management and invoice processing while validating APIs through Swagger and Insomnia.',
        'Monitored and debugged 50+ production batch jobs, resolving job abends and ensuring stable enterprise operations in an Agile environment.'
      ],
      technologies: ['React.js', 'Redux', 'Node.js', 'SQL', 'COBOL', 'DB2', 'Swagger', 'Insomnia']
    },
    {
      company: 'Kodnest Technologies',
      role: 'Graduate Intern',
      duration: 'Jan. 2024 – Jan. 2025',
      location: 'Bangalore, KA',
      bullets: [
        'Built responsive web applications using React.js, JavaScript, HTML and CSS.',
        'Developed backend modules using Java, Spring Boot and MySQL with REST API integration.',
        'Participated in debugging, testing and Agile software development.'
      ],
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Java', 'Spring Boot', 'MySQL', 'REST API']
    }
  ];

  return (
    <section id="experience" className="experience-section">
      {/* Decorative background grid */}
      <div className="grid-overlay"></div>

      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Journey</span>
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot">
                <Briefcase size={18} />
              </div>

              <div className="timeline-card glass">
                <div className="timeline-card-header">
                  <div className="header-main">
                    <h3 className="role-title">{exp.role}</h3>
                    <h4 className="company-title">{exp.company}</h4>
                  </div>
                  <div className="header-meta">
                    <span className="date-badge">
                      <Calendar size={14} />
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <ul className="bullets-list">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="bullet-item">
                      <span className="bullet-arrow">
                        <ChevronRight size={16} />
                      </span>
                      <p className="bullet-text">{bullet}</p>
                    </li>
                  ))}
                </ul>

                <div className="tech-tags">
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          background-color: var(--bg-secondary);
          overflow: hidden;
        }
        
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: linear-gradient(var(--border-color) 1px, transparent 1px),
                            linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.15;
          pointer-events: none;
          z-index: 1;
        }

        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 20px 0;
        }
        
        /* The main line of the timeline */
        .timeline::before {
          content: '';
          position: absolute;
          left: 31px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--primary) 0%, var(--secondary) 100%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 50px;
          padding-left: 80px;
        }
        
        .timeline-item:last-child {
          margin-bottom: 0;
        }

        /* Timeline Dot */
        .timeline-dot {
          position: absolute;
          left: 10px;
          top: 24px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 2px solid var(--primary);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: 0 0 15px rgba(var(--primary-rgb), 0.2);
          transition: var(--transition-smooth);
        }

        .timeline-item:hover .timeline-dot {
          background: var(--primary-gradient);
          color: #ffffff;
          border-color: transparent;
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.4);
        }

        /* Timeline Card */
        .timeline-card {
          padding: 32px;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--card-shadow);
          transition: var(--transition-smooth);
          position: relative;
        }

        .timeline-card:hover {
          transform: translateX(8px);
          box-shadow: var(--card-hover-shadow);
          border-color: rgba(var(--primary-rgb), 0.2);
        }

        .timeline-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 20px;
          margin-bottom: 20px;
          gap: 16px;
        }

        .role-title {
          font-size: 22px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .company-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--primary);
        }

        .date-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 50px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
        }

        .bullets-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .bullet-arrow {
          color: var(--primary);
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bullet-text {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          font-size: 12px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 4px;
          background: rgba(var(--primary-rgb), 0.05);
          color: var(--primary);
          border: 1px solid rgba(var(--primary-rgb), 0.1);
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 20px;
          }
          .timeline-dot {
            left: 0;
            top: 20px;
            width: 38px;
            height: 38px;
          }
          .timeline-item {
            padding-left: 54px;
            margin-bottom: 32px;
          }
          .timeline-card {
            padding: 24px;
          }
          .timeline-card-header {
            flex-direction: column;
            gap: 12px;
            padding-bottom: 16px;
            margin-bottom: 16px;
          }
          .role-title {
            font-size: 18px;
          }
          .timeline-card:hover {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </section>
  );
}
