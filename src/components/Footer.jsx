import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#hero" className="footer-logo">
            Sanjan<span className="dot">.</span>
          </a>
          <p className="footer-tagline">Crafting modern interfaces & enterprise systems.</p>
        </div>

        <div className="footer-links">
          <a href="#skills" className="footer-link">Skills</a>
          <a href="#experience" className="footer-link">Experience</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#interests" className="footer-link">Interests</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Sanjan Acharya K. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          padding: 60px 24px 30px;
        }
        .footer-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }
        .footer-brand {
          text-align: center;
        }
        .footer-logo {
          font-size: 28px;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.5px;
          display: inline-block;
          margin-bottom: 12px;
        }
        .footer-logo .dot {
          color: var(--primary);
        }
        .footer-tagline {
          font-size: 14px;
          color: var(--text-tertiary);
        }
        .footer-links {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .footer-link {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }
        .footer-link:hover {
          color: var(--primary);
        }
        .footer-bottom {
          width: 100%;
          border-top: 1px solid var(--border-color);
          padding-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }
        .copyright {
          font-size: 13px;
          color: var(--text-tertiary);
        }
        .scroll-top-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .scroll-top-btn:hover {
          background: var(--primary-gradient);
          color: #ffffff;
          border-color: transparent;
          transform: translateY(-3px);
        }
        @media (max-width: 576px) {
          .footer-links {
            gap: 16px 24px;
          }
          .footer-bottom {
            flex-direction: column-reverse;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
