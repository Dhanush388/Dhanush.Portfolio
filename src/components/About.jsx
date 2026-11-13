import React from 'react';

export default function About() {
  const pillars = [
    {
      title: 'Cloud Infrastructure',
      desc: 'AWS & GCP multi-tier VPCs, IAM security, RDS databases.',
      icon: (
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: 'CI/CD Automation',
      desc: 'Repeatable GitHub Actions workflows & zero-downtime deploys.',
      icon: (
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: 'Containers & K8s',
      desc: 'Dockerized microservices & container orchestration.',
      icon: (
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: 'Observability',
      desc: 'Prometheus, Grafana, and proactive telemetry metrics.',
      icon: (
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about">
      <div className="w">
        <span className="section-tag">01 — About Me</span>
        <h2 className="section-title reveal in">Engineering Scalable Systems &amp; Automation</h2>
        <p className="section-desc reveal in">
          I bridge the gap between development and cloud operations, crafting architectures that are resilient, automated, and secure.
        </p>

        <div className="about-grid">
          <div className="about-card reveal in">
            <h3>Background &amp; Focus</h3>
            <p style={{ marginBottom: '16px' }}>
              I’m a Computer Science undergraduate at CMR Institute of Technology, Hyderabad (Class of 2027), deeply enthusiastic about cloud-native infrastructure, site reliability, and modern automation.
            </p>
            <p style={{ marginBottom: '16px' }}>
              Currently serving as a Cloud &amp; DevOps Engineer Intern at Paverasa Private Limited, where I architect AWS VPCs, provision EC2 &amp; RDS clusters, and streamline automated deployment pipelines via GitHub Actions.
            </p>
            <p>
              I love combining backend architectures with cloud-native tooling and AI experimentation to build dependable digital products.
            </p>
          </div>

          <div className="about-card reveal in">
            <h3>Core Technical Pillars</h3>
            <div className="about-pillars">
              {pillars.map((p) => (
                <div className="pillar-item" key={p.title}>
                  <div className="pillar-icon">{p.icon}</div>
                  <div className="pillar-text">
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

