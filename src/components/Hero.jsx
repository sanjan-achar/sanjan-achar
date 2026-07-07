import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const words = ["Software Engineer", "React.js Developer", "Mainframe Integrator", "Problem Solver"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1200);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 45 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  // Blinker effect
  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return (
    <section id="hero" className="hero-section">
      {/* Dynamic Ambient Blur Background Elements */}
      <div className="glow-sphere sphere-1"></div>
      <div className="glow-sphere sphere-2"></div>
      <div className="glow-sphere sphere-3"></div>

      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <div className="hero-badge-container">
            <span className="hero-badge">Available for opportunities</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Sanjan Acharya K</span>
          </h1>

          <h2 className="hero-subtitle">
            Just a{' '}
            <span className="typewriter-text">
              {words[index].substring(0, subIndex)}
              <span className={`cursor ${blink ? 'blink' : ''}`}>|</span>
            </span>
          </h2>

          <p className="hero-description">
            Software Engineer specializing in building modern, high-performance web applications with <strong>React.js</strong> and integrating secure, scalable backend architectures.
          </p>

          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">
              Explore Experience <ArrowRight size={18} />
            </a>
            <a href="/Sanjan Resume.pdf" download="Sanjan_CV.pdf" className="btn btn-secondary">
              Download CV <Download size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Talk
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/sanjan-achar"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/sanjan-acharya"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="mailto:acharsanjan@gmail.com"
              className="social-icon"
              title="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 120px;
          overflow: hidden;
          background: radial-gradient(circle at 50% 50%, var(--bg-primary) 0%, var(--bg-primary) 100%);
        }
        
        /* Floating Blur Spheres */
        .glow-sphere {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          z-index: 1;
          pointer-events: none;
        }
        [data-theme="light"] .glow-sphere {
          opacity: 0.08;
          filter: blur(80px);
        }
        .sphere-1 {
          width: 350px;
          height: 350px;
          background: var(--primary);
          top: 15%;
          left: 10%;
          animation: float 12s ease-in-out infinite alternate;
        }
        .sphere-2 {
          width: 400px;
          height: 400px;
          background: var(--secondary);
          bottom: 10%;
          right: 10%;
          animation: float 16s ease-in-out infinite alternate-reverse;
        }
        .sphere-3 {
          width: 250px;
          height: 250px;
          background: var(--accent);
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: float 10s ease-in-out infinite alternate;
        }

        .hero-container {
          width: 100%;
        }
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-badge-container {
          margin-bottom: 24px;
        }
        .hero-badge {
          font-size: 13px;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 50px;
          background: rgba(var(--primary-rgb), 0.1);
          color: var(--primary);
          border: 1px solid rgba(var(--primary-rgb), 0.15);
          letter-spacing: 0.5px;
        }
        .hero-title {
          font-size: 64px;
          font-weight: 800;
          line-height: 1.1;
          color: var(--text-primary);
          letter-spacing: -2px;
          margin-bottom: 20px;
        }
        .hero-subtitle {
          font-size: 28px;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 24px;
          min-height: 42px;
        }
        .typewriter-text {
          color: var(--primary);
          font-weight: 700;
        }
        .cursor {
          display: inline-block;
          font-weight: 300;
          margin-left: 2px;
        }
        .cursor.blink {
          opacity: 0;
        }
        .hero-description {
          font-size: 18px;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 680px;
          margin-bottom: 40px;
        }
        .hero-description strong {
          color: var(--text-primary);
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 48px;
        }
        .hero-socials {
          display: flex;
          gap: 20px;
        }
        .social-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          box-shadow: var(--card-shadow);
          transition: var(--transition-smooth);
        }
        .social-icon:hover {
          color: var(--text-primary);
          border-color: var(--primary);
          transform: translateY(-5px);
          box-shadow: var(--card-hover-shadow);
        }
        
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-30px) rotate(15deg); }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 44px;
            letter-spacing: -1px;
          }
          .hero-subtitle {
            font-size: 20px;
            min-height: 30px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }
          .hero-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
