import React from 'react';

export default function GithubActivity() {
  const heatmapCells = Array.from({ length: 32 * 7 }, (_, i) => {
    const active = (i * 37 % 11) > 6;
    let bg = '';
    if (active) {
      const level = i % 4;
      if (level === 0) bg = 'rgba(59, 130, 246, 0.35)';
      else if (level === 1) bg = 'rgba(59, 130, 246, 0.65)';
      else if (level === 2) bg = 'rgba(99, 102, 241, 0.85)';
      else bg = '#22D3EE';
    }
    return bg;
  });

  return (
    <section id="github">
      <div className="w">
        <span className="section-tag">06 — Activity</span>
        <h2 className="section-title reveal in">GitHub &amp; Open Source</h2>
        <p className="section-desc reveal in">
          Continuous building, committing infrastructure code, and exploring open technologies.
        </p>

        <div className="github-grid">
          <div className="gh-card reveal in">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <div>
                  <h3 style={{ fontSize: '22px', margin: 0 }}>Dhanush388</h3>
                  <span className="code-tag" style={{ fontSize: '12px', color: 'var(--accent)' }}>
                    github.com/Dhanush388
                  </span>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Active repositories covering Cloud configurations, Docker compose stacks, Terraform modules, and full-stack projects.
              </p>
              <div className="tech-chips" style={{ marginBottom: '24px' }}>
                <span className="tech-badge">Docker</span>
                <span className="tech-badge">AWS</span>
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Terraform</span>
              </div>
            </div>
            <a
              className="btn primary"
              href="https://github.com/Dhanush388"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Profile ↗
            </a>
          </div>

          <div className="gh-grid-box reveal in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '18px' }}>Commit &amp; Deployment Rhythm</h3>
              <span style={{ fontSize: '13px', color: 'var(--accent)' }} className="font-mono">
                Active Contributions
              </span>
            </div>
            <div className="gh-heatmap" aria-hidden="true">
              {heatmapCells.map((bg, idx) => (
                <i key={idx} style={{ background: bg || 'rgba(148, 163, 184, 0.08)' }} />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '6px', marginTop: '14px', fontSize: '12px', color: 'var(--text-secondary)' }}>
              <span>Less</span>
              <i style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'rgba(148,163,184,0.1)', display: 'inline-block' }}></i>
              <i style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'rgba(59,130,246,0.3)', display: 'inline-block' }}></i>
              <i style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'rgba(59,130,246,0.6)', display: 'inline-block' }}></i>
              <i style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#22D3EE', display: 'inline-block' }}></i>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

