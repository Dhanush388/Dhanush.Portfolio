import React, { useState } from 'react';

export default function Navbar({ motionOn, toggleMotion }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'GitHub', href: '#github' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav aria-label="Main Navigation">
      <div className="w">
        <a href="#hero" className="logo">
          <span className="logo-badge"></span>
          Dhanush Rao<span style={{ color: 'var(--primary)' }}>.</span>
        </a>

        <ul className={menuOpen ? 'open' : ''}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="btn nav-btn"
            onClick={toggleMotion}
            aria-pressed={motionOn}
            title="Toggle UI animation"
          >
            Motion: {motionOn ? 'on' : 'off'}
          </button>
          <a className="btn primary nav-btn" href="#contact">
            Hire Me
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}

