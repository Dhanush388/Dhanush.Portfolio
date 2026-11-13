import React from 'react';
import Cloud3D from './Cloud3D';

export default function Hero() {
  const profileImg = '/profile.jpg';

  const devopsCycle = [
    { label: 'PLAN & CODE', color: 'var(--accent)' },
    { label: 'BUILD', color: 'var(--primary)' },
    { label: 'TEST', color: 'var(--accent)' },
    { label: 'RELEASE', color: 'var(--gold, #F59E0B)' },
    { label: 'DEPLOY & OPERATE', color: 'var(--amber, #FBBF24)' },
    { label: 'MONITOR', color: 'var(--gold, #F59E0B)' }
  ];

  return (
    <header id="hero">
      {/* 3D DevOps Cloud + Infinity Loop Background */}
      <Cloud3D />

      <div className="w hero-grid">
        {/* HERO LEFT: PROFESSIONAL PHOTO */}
        <div className="hero-photo-wrap reveal in">
          <div className="photo-frame">
            <div className="orbit-ring"></div>
            <div className="orbit-ring-second"></div>
            <div className="photo-inner">
              <img
                src={profileImg}
                alt="Dhanush Rao Dugyala"
                width="360"
                height="360"
              />
            </div>
          </div>

          <div className="status-badge">
            <span className="status-dot"></span>
            <span>Open to Roles &amp; Internships</span>
          </div>

          {/* DevOps Infinity Badge */}
          <div className="devops-formula-pill">
            <span style={{ color: 'var(--accent)' }}>DevOps</span>
            <span style={{ color: 'var(--text-secondary)' }}>+</span>
            <span style={{ color: 'var(--primary)' }}>Cloud</span>
            <span style={{ color: 'var(--text-secondary)' }}>=</span>
            <span style={{ color: '#FBBF24', fontWeight: 700 }}>Transformation</span>
          </div>
        </div>

        {/* HERO RIGHT: INTRODUCTION */}
        <div className="hero-intro reveal in">
          <div className="terminal-tag">
            <span>// CLOUD &amp; DEVOPS ENGINEER · AI ENTHUSIAST</span>
            <span className="cursor"></span>
          </div>

          <h1 className="hero-title">
            Dhanush Rao <span className="gradient-text">Dugyala</span>
          </h1>

          <p className="hero-subtitle">
            Building scalable cloud infrastructure, automating deployments, and engineering intelligent cloud-native systems.
          </p>

          <p className="hero-bio">
            I’m a Computer Science undergraduate focused on Cloud Architecture, DevOps automation, and full-stack systems. Currently interning as a Cloud &amp; DevOps Engineer at Paverasa Private Limited, designing reliable AWS environments and building automated CI/CD pipelines.
          </p>

          {/* Interactive DevOps Pipeline Ribbon */}
          <div className="devops-pipeline-ribbon">
            {devopsCycle.map((stage, idx) => (
              <span key={stage.label} className="pipeline-step">
                <span className="step-dot" style={{ background: stage.color, boxShadow: `0 0 8px ${stage.color}` }}></span>
                <span className="step-text" style={{ color: stage.color }}>{stage.label}</span>
                {idx < devopsCycle.length - 1 && <span className="step-arrow">→</span>}
              </span>
            ))}
          </div>

          {/* Metric highlights */}
          <div className="hero-metrics">
            <div className="metric-pill">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              <span>Cloud: <b>AWS &amp; GCP</b></span>
            </div>
            <div className="metric-pill">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>DevOps: <b>Docker &amp; K8s</b></span>
            </div>
            <div className="metric-pill">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>IaC: <b>Terraform &amp; CI/CD</b></span>
            </div>
          </div>

          {/* Call to actions */}
          <div className="hero-cta">
            <a className="btn primary" href="#projects">
              Explore My Work
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a className="btn outline-cyan" href="#contact">
              Let’s Connect
            </a>

            <div className="hero-socials">
              <a
                className="social-icon-btn"
                href="https://github.com/Dhanush388"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                className="social-icon-btn"
                href="https://linkedin.com/in/dugyaladhanush/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
