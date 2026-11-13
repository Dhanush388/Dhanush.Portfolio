import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="w">
        <div>
          <b style={{ color: 'var(--text-primary)', fontSize: '16px' }}>Dhanush Rao Dugyala</b>
          <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            Cloud &amp; DevOps Engineer · Hyderabad, India
          </div>
        </div>
        <div>
          © {currentYear} · Engineered with React &amp; Midnight Tech 3D Cloud.
        </div>
        <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
          <a href="https://github.com/Dhanush388" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/dugyaladhanush/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="btn" href="#hero" style={{ padding: '6px 16px', fontSize: '13px' }}>
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

