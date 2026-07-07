import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check if theme was saved or prefer-color-scheme is light
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const navLinks = [
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Interests', href: '#interests' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar glass">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">
          Sanjan<span className="dot">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Navbar Buttons */}
        <div className="navbar-mobile-actions">
          <button onClick={toggleTheme} className="theme-toggle-btn mobile-theme" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="navbar-toggle-btn"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu glass">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Navbar specific CSS */}
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          z-index: 1000;
          box-shadow: var(--nav-shadow);
          transition: var(--transition-smooth);
        }
        .navbar-container {
          max-width: var(--max-width);
          height: 100%;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-logo {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.5px;
        }
        .navbar-logo .dot {
          color: var(--primary);
          background: var(--primary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-link {
          font-size: 15px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: var(--transition-fast);
          position: relative;
          padding: 8px 0;
        }
        .nav-link:hover {
          color: var(--text-primary);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-gradient);
          transition: var(--transition-fast);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .theme-toggle-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }
        .theme-toggle-btn:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
          transform: rotate(15deg);
        }
        .navbar-mobile-actions {
          display: none;
        }
        .navbar-toggle-btn {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          padding: 24px;
          gap: 16px;
          border-top: none;
          border-left: none;
          border-right: none;
          box-shadow: var(--nav-shadow);
          animation: slideDown 0.3s ease-out forwards;
        }
        .mobile-nav-link {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-secondary);
          padding: 12px 8px;
          border-radius: var(--border-radius-sm);
          transition: var(--transition-fast);
        }
        .mobile-nav-link:hover {
          background: var(--bg-tertiary);
          color: var(--primary);
          padding-left: 16px;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .navbar-links {
            display: none;
          }
          .navbar-mobile-actions {
            display: flex;
            align-items: center;
            gap: 16px;
          }
        }
      `}</style>
    </nav>
  );
}
