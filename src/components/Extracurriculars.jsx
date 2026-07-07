import React from 'react';
import { Trophy, Users, BookOpen, Palette } from 'lucide-react';

export default function Extracurriculars() {
  const activities = [
    {
      title: 'Smart India Hackathon',
      role: 'Project Participant & Leader',
      detail: 'Secured AICTE project funding for an innovative solution addressing government-defined challenges.',
      icon: <Trophy size={26} />,
      colorClass: 'icon-trophy',
      metric: 'AICTE Funded'
    },
    {
      title: 'Aerophilia 2022',
      role: 'Chief Coordinator',
      detail: 'Managed operations, safety protocols, and resource allocations for the annual national-level technical aerofest.',
      icon: <Users size={26} />,
      colorClass: 'icon-aerophilia',
      metric: 'National Level Fest'
    },
    {
      title: 'SSTH 2019',
      role: 'Student Mentor',
      detail: 'Guided junior engineering teams through concept prototyping, pitch presentations, and software validation.',
      icon: <BookOpen size={26} />,
      colorClass: 'icon-ssth',
      metric: 'Academic Mentor'
    },
    {
      title: 'Team Challengers',
      role: 'Creative Head',
      detail: 'Spearheaded branding layouts, media coordination, and creative digital designs representing team events.',
      icon: <Palette size={26} />,
      colorClass: 'icon-challengers',
      metric: 'Branding & Design'
    }
  ];

  return (
    <section id="interests" className="activities-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Beyond Coding</span>
          <h2 className="section-title">Leadership & Interests</h2>
        </div>

        <div className="activities-grid">
          {activities.map((act, idx) => (
            <div key={idx} className="activity-card glass">
              <div className="activity-header">
                <div className={`activity-icon-container ${act.colorClass}`}>
                  {act.icon}
                </div>
                <span className="activity-badge">{act.metric}</span>
              </div>
              <h3 className="activity-title">{act.title}</h3>
              <h4 className="activity-role">{act.role}</h4>
              <p className="activity-detail">{act.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .activities-section {
          background-color: var(--bg-secondary);
        }
        .activities-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 20px;
        }
        .activity-card {
          padding: 30px;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--card-shadow);
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        .activity-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--card-hover-shadow);
          border-color: rgba(var(--primary-rgb), 0.2);
        }
        .activity-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        .activity-icon-container {
          width: 52px;
          height: 52px;
          border-radius: var(--border-radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }
        .activity-card:hover .activity-icon-container {
          transform: scale(1.1) rotate(5deg);
        }
        
        /* Icon color themes */
        .icon-trophy {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }
        .icon-aerophilia {
          background: rgba(99, 102, 241, 0.1);
          color: #6366f1;
        }
        .icon-ssth {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }
        .icon-challengers {
          background: rgba(236, 72, 153, 0.1);
          color: #ec4899;
        }

        .activity-badge {
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 50px;
          background: var(--bg-tertiary);
          color: var(--text-tertiary);
          border: 1px solid var(--border-color);
        }
        .activity-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 6px;
        }
        .activity-role {
          font-size: 14px;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 14px;
        }
        .activity-detail {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        @media (max-width: 1200px) {
          .activities-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        @media (max-width: 768px) {
          .activities-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
