import React from 'react';

export default function Skills() {
  const handlePointerMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="skills">
      <div className="w">
        <span className="section-tag">02 — Toolkit</span>
        <h2 className="section-title reveal in">Technical Skills &amp; Stack</h2>
        <p className="section-desc reveal in">
          Categorized Bento-grid cards showcasing core technologies, cloud platforms, and DevOps tooling.
        </p>

        <div className="bento-grid">
          {/* 1. Cloud Platforms (Bento 8) */}
          <div
            className="bento-card bento-col-8 reveal in"
            onPointerMove={handlePointerMove}
          >
            <div className="bento-header">
              <div className="bento-icon-box">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div>
                <h3>Cloud Platforms &amp; Architecture</h3>
                <p className="bento-desc" style={{ marginBottom: 0 }}>
                  Production cloud infrastructure, serverless runtimes &amp; data stores.
                </p>
              </div>
            </div>
            <div className="tech-chips">
              <span className="tech-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 16l4-8 4 8m4-6l2 6m-9-2h4" /></svg>
                AWS
              </span>
              <span className="tech-badge">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z" /></svg>
                GCP
              </span>
              <span className="tech-badge">EC2</span>
              <span className="tech-badge">S3</span>
              <span className="tech-badge">VPC</span>
              <span className="tech-badge">RDS</span>
              <span className="tech-badge">IAM</span>
              <span className="tech-badge">AWS Lambda</span>
              <span className="tech-badge">CloudWatch</span>
              <span className="tech-badge">Cloud Run</span>
              <span className="tech-badge">GKE</span>
              <span className="tech-badge">BigQuery</span>
            </div>
          </div>

          {/* 2. Monitoring & Observability (Bento 4) */}
          <div
            className="bento-card bento-col-4 reveal in"
            onPointerMove={handlePointerMove}
          >
            <div className="bento-header">
              <div className="bento-icon-box">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3>Observability</h3>
                <p className="bento-desc" style={{ marginBottom: 0 }}>
                  Metrics &amp; uptime dashboards.
                </p>
              </div>
            </div>
            <div className="tech-chips">
              <span className="tech-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Prometheus
              </span>
              <span className="tech-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                Grafana
              </span>
              <span className="tech-badge">Node Exporter</span>
              <span className="tech-badge">CloudWatch</span>
            </div>
          </div>

          {/* 3. DevOps & IaC (Bento 6) */}
          <div
            className="bento-card bento-col-6 reveal in"
            onPointerMove={handlePointerMove}
          >
            <div className="bento-header">
              <div className="bento-icon-box">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3>DevOps &amp; Infrastructure as Code</h3>
                <p className="bento-desc" style={{ marginBottom: 0 }}>
                  Automated provisioning &amp; container lifecycle.
                </p>
              </div>
            </div>
            <div className="tech-chips">
              <span className="tech-badge">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" /></svg>
                Docker
              </span>
              <span className="tech-badge">Kubernetes</span>
              <span className="tech-badge">Terraform</span>
              <span className="tech-badge">GitHub Actions</span>
              <span className="tech-badge">CI/CD Pipelines</span>
              <span className="tech-badge">Linux</span>
              <span className="tech-badge">Nginx</span>
            </div>
          </div>

          {/* 4. Programming & Backend (Bento 6) */}
          <div
            className="bento-card bento-col-6 reveal in"
            onPointerMove={handlePointerMove}
          >
            <div className="bento-header">
              <div className="bento-icon-box">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3>Programming &amp; Backend</h3>
                <p className="bento-desc" style={{ marginBottom: 0 }}>
                  Robust APIs and transactional database systems.
                </p>
              </div>
            </div>
            <div className="tech-chips">
              <span className="tech-badge">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm-1 14.5v-9l6 4.5-6 4.5z" /></svg>
                Python
              </span>
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Express.js</span>
              <span className="tech-badge">Flask</span>
              <span className="tech-badge">PostgreSQL</span>
              <span className="tech-badge">MySQL</span>
              <span className="tech-badge">SQL</span>
            </div>
          </div>

          {/* 5. AI & Data Engineering (Bento 7) */}
          <div
            className="bento-card bento-col-7 reveal in"
            onPointerMove={handlePointerMove}
          >
            <div className="bento-header">
              <div className="bento-icon-box">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3>AI &amp; Data Engineering</h3>
                <p className="bento-desc" style={{ marginBottom: 0 }}>
                  Intelligent APIs, pipelines and cloud analytics.
                </p>
              </div>
            </div>
            <div className="tech-chips">
              <span className="tech-badge">Generative AI</span>
              <span className="tech-badge">Vertex AI</span>
              <span className="tech-badge">Machine Learning</span>
              <span className="tech-badge">BigQuery Analytics</span>
              <span className="tech-badge">Google Pub/Sub</span>
              <span className="tech-badge">Dataflow</span>
              <span className="tech-badge">Pandas</span>
            </div>
          </div>

          {/* 6. Frontend & Developer Tools (Bento 5) */}
          <div
            className="bento-card bento-col-5 reveal in"
            onPointerMove={handlePointerMove}
          >
            <div className="bento-header">
              <div className="bento-icon-box">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <h3>Frontend &amp; Version Control</h3>
                <p className="bento-desc" style={{ marginBottom: 0 }}>
                  Modern web stacks &amp; Git collaboration.
                </p>
              </div>
            </div>
            <div className="tech-chips">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Next.js</span>
              <span className="tech-badge">Tailwind CSS</span>
              <span className="tech-badge">Git</span>
              <span className="tech-badge">GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

