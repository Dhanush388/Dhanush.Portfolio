import React, { useState } from 'react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      num: "01",
      title: "Juci Cool",
      category: "Full-Stack Development · Cloud Deployment",
      summary: "A product-focused e-commerce platform for a beverage and confectionery enterprise featuring dynamic inventory, wholesale inquiries, and automated deployment.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Express.js", "Supabase", "PostgreSQL", "Vercel"],
      features: [
        "Responsive product catalog with categorized drink & snack selections",
        "Real-time customer ordering & shopping cart workflow",
        "Specialized dealer and bulk commercial enquiry system",
        "Administrative dashboard with analytics and catalog management",
        "Supabase / PostgreSQL database integration with cloud CDN delivery"
      ]
    },
    {
      num: "02",
      title: "Astroid Men’s Wear",
      category: "Cloud & DevOps · Containerized E-Commerce",
      summary: "A scalable, containerized retail platform engineered with modern microservices, database caching, and cloud infrastructure deployment roadmaps.",
      tech: ["Next.js", "React", "NestJS", "PostgreSQL", "Redis", "Docker", "TypeORM", "JWT"],
      features: [
        "Containerized frontend and backend services using Docker Compose",
        "High-throughput caching integration via Redis for product feeds",
        "Secure JWT authentication and role-based access control architecture",
        "Relational database modeling with TypeORM & PostgreSQL",
        "Production-ready deployment pipeline with environment segregation"
      ]
    },
    {
      num: "03",
      title: "Paverasa Cloud Backend",
      category: "AWS · Infrastructure · Node.js Backend",
      summary: "Production-grade cloud-hosted backend demonstrating practical AWS infrastructure architecture, secure networking, and database clustering.",
      tech: ["AWS EC2", "AWS VPC", "Amazon RDS", "MySQL", "Node.js", "Express.js", "PM2"],
      features: [
        "Custom multi-AZ AWS Virtual Private Cloud (VPC) with public/private subnets",
        "Hardened EC2 instances running PM2 process supervisor for zero-downtime",
        "Amazon RDS MySQL instance isolated inside private subnets",
        "Secure RESTful API endpoints handling client transactions",
        "IAM least-privilege security policies and CloudWatch alarms"
      ]
    },
    {
      num: "04",
      title: "Cloud Monitoring & Observability Lab",
      category: "DevOps · SRE Observability",
      summary: "A complete distributed monitoring and alerting environment tracking system health, resource consumption, and microservice metrics.",
      tech: ["Docker", "Prometheus", "Grafana", "Node Exporter", "Nginx", "Linux", "Cloudflare Tunnel"],
      features: [
        "Containerized observability stack orchestrated with Docker",
        "Node Exporter metrics scraping for CPU, memory, network, and disk I/O",
        "Custom Grafana telemetry dashboards with live traffic monitoring",
        "Alertmanager rules configured for threshold notifications",
        "Encrypted egress access via Cloudflare Zero Trust tunnel"
      ]
    }
  ];

  const generateProjectArt = (index) => {
    const colors = [
      { c1: '#3B82F6', c2: '#22D3EE', c3: '#6366F1' },
      { c1: '#22D3EE', c2: '#3B82F6', c3: '#10B981' },
      { c1: '#6366F1', c2: '#3B82F6', c3: '#22D3EE' },
      { c1: '#3B82F6', c2: '#6366F1', c3: '#22D3EE' }
    ];
    const c = colors[index % colors.length];

    return (
      <svg viewBox="0 0 460 220" aria-hidden="true">
        <defs>
          <radialGradient id={`react-grad-${index}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={c.c1} stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0B0F14" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`react-line-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c.c2} stopOpacity="0.8" />
            <stop offset="100%" stopColor={c.c1} stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <rect width="460" height="220" fill={`url(#react-grad-${index})`} />
        {/* Network Grid */}
        <g stroke="rgba(148,163,184,0.12)" strokeWidth="1">
          <line x1="40" y1="0" x2="40" y2="220" />
          <line x1="120" y1="0" x2="120" y2="220" />
          <line x1="200" y1="0" x2="200" y2="220" />
          <line x1="280" y1="0" x2="280" y2="220" />
          <line x1="360" y1="0" x2="360" y2="220" />
          <line x1="440" y1="0" x2="440" y2="220" />
          <line x1="0" y1="60" x2="460" y2="60" />
          <line x1="0" y1="110" x2="460" y2="110" />
          <line x1="0" y1="160" x2="460" y2="160" />
        </g>
        {/* Orbitals */}
        <circle cx="230" cy="110" r="75" fill="none" stroke={`url(#react-line-grad-${index})`} strokeWidth="1.5" strokeDasharray="4 4" />
        <ellipse cx="230" cy="110" rx="140" ry="45" fill="none" stroke={c.c1} strokeOpacity="0.4" strokeWidth="1.5" transform={`rotate(${index * 25 - 15} 230 110)`} />
        <ellipse cx="230" cy="110" rx="110" ry="35" fill="none" stroke={c.c2} strokeOpacity="0.6" strokeWidth="1.5" transform={`rotate(${-index * 20 + 20} 230 110)`} />
        {/* Central Hub Node */}
        <circle cx="230" cy="110" r="14" fill={c.c1} fillOpacity="0.9" />
        <circle cx="230" cy="110" r="24" fill="none" stroke={c.c2} strokeWidth="2" strokeOpacity="0.7" />
        {/* Satellite Nodes */}
        <circle cx="150" cy="80" r="6" fill={c.c2} />
        <line x1="150" y1="80" x2="230" y2="110" stroke={c.c2} strokeWidth="1.5" strokeOpacity="0.6" />
        <circle cx="310" cy="140" r="6" fill={c.c1} />
        <line x1="310" y1="140" x2="230" y2="110" stroke={c.c1} strokeWidth="1.5" strokeOpacity="0.6" />
        <circle cx="330" cy="75" r="5" fill={c.c3} />
        <line x1="330" y1="75" x2="230" y2="110" stroke={c.c3} strokeWidth="1.2" strokeOpacity="0.5" />
        <circle cx="130" cy="145" r="5" fill={c.c1} />
        <line x1="130" y1="145" x2="230" y2="110" stroke={c.c1} strokeWidth="1.2" strokeOpacity="0.5" />
      </svg>
    );
  };

  return (
    <section id="projects">
      <div className="w">
        <span className="section-tag">03 — Projects</span>
        <h2 className="section-title reveal in">Featured Engineering Projects</h2>
        <p className="section-desc reveal in">
          Real-world cloud architectures, e-commerce applications, and DevOps observability labs.
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <button
              key={p.num}
              className="project-card reveal in"
              onClick={() => setSelectedProject(p)}
            >
              <div className="project-art">
                {generateProjectArt(i)}
              </div>
              <div className="project-body">
                <span className="project-num">PROJECT // {p.num}</span>
                <h3 className="project-title">{p.title}</h3>
                <div className="project-category">{p.category}</div>
                <p className="project-summary">{p.summary}</p>
                <div className="tech-chips" style={{ marginBottom: '16px' }}>
                  {p.tech.slice(0, 4).map((t) => (
                    <span className="tech-badge" key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-footer">
                  <span className="project-action-link">
                    View Case Study
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span className="font-mono" style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    Stack: {p.tech.length} Tools
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close dialog"
            >
              ✕ Close
            </button>
            <div className="section-tag">{selectedProject.category}</div>
            <h3>{selectedProject.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '20px' }}>
              {selectedProject.summary}
            </p>
            <h4 style={{ fontSize: '16px', color: 'var(--accent)', marginTop: '16px' }}>
              Key Architecture &amp; Engineering Highlights:
            </h4>
            <ul>
              {selectedProject.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <h4 style={{ fontSize: '16px', color: 'var(--accent)', margin: '20px 0 10px' }}>
              Technologies Deployed:
            </h4>
            <div className="tech-chips" style={{ marginBottom: '26px' }}>
              {selectedProject.tech.map((t) => (
                <span className="tech-badge" key={t}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
              <a
                className="btn primary"
                href="https://github.com/Dhanush388"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Code on GitHub ↗
              </a>
              <button
                className="btn outline-cyan"
                onClick={() => setSelectedProject(null)}
              >
                Back to Portfolio
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

