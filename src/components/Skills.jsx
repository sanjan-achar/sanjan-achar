import React from 'react';
import { Code2, Cpu, Wrench, Cloud } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} />,
      skills: ['JavaScript (ES6+)', 'Python', 'SQL', 'COBOL'],
      description: 'Core programming and database query languages used to build dynamic web logic and query enterprise records.'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Cpu size={24} />,
      skills: ['React.js', 'Node.js', 'Redux', 'Context API'],
      description: 'Modern architectures and client-state engines designed for complex state management and lightning-fast user interfaces.'
    },
    {
      title: 'Developer Tools',
      icon: <Wrench size={24} />,
      skills: ['Git & GitHub', 'Linux', 'IBM IDz & Endevor', 'Swagger', 'Insomnia', 'Postman', 'Firebase'],
      description: 'Version control, APIs discovery environments, debugging runtimes, and mainframe development suites.'
    },
    {
      title: 'Cloud Services',
      icon: <Cloud size={24} />,
      skills: ['Azure Cloud Services', 'Azure OpenAI', 'Azure AI Search', 'Azure Blob Storage', 'Azure Virtual Machines'],
      description: 'Experience in deploying, running, and organizing scalable modern infrastructure and database services.'
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-card glass">
              <div className="card-header">
                <div className="skill-icon-box">
                  {category.icon}
                </div>
                <h3 className="card-title">{category.title}</h3>
              </div>
              <p className="card-description">{category.description}</p>
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background-color: var(--bg-primary);
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-top: 20px;
        }
        .skill-card {
          padding: 40px;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--card-shadow);
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--primary-gradient);
          opacity: 0;
          transition: var(--transition-smooth);
        }
        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--card-hover-shadow);
          border-color: rgba(var(--primary-rgb), 0.2);
        }
        .skill-card:hover::before {
          opacity: 1;
        }
        .card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .skill-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--border-radius-md);
          background: rgba(var(--primary-rgb), 0.1);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }
        .skill-card:hover .skill-icon-box {
          background: var(--primary);
          color: #ffffff;
          transform: scale(1.05);
        }
        .card-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .card-description {
          font-size: 15px;
          color: var(--text-tertiary);
          line-height: 1.5;
          margin-bottom: 24px;
        }
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: auto;
        }
        .skill-tag {
          font-size: 14px;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: var(--border-radius-sm);
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          transition: var(--transition-fast);
        }
        .skill-tag:hover {
          background: var(--primary-gradient);
          color: #ffffff;
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(var(--primary-rgb), 0.2);
        }
        @media (max-width: 992px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .skill-card {
            padding: 30px;
          }
        }
      `}</style>
    </section>
  );
}
