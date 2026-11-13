import React from 'react';

export default function Journey() {
  const timelineData = [
    {
      date: "2024 – 2027",
      title: "B.Tech in Computer Science & Engineering",
      desc: "CMR Institute of Technology, Hyderabad. Core focus in Operating Systems, Distributed Systems, Computer Networks, and Cloud Infrastructure."
    },
    {
      date: "2026 – Present",
      title: "Cloud & DevOps Engineer Intern · Paverasa Private Limited",
      desc: "Architecting and provisioning AWS cloud resources (VPC, EC2, RDS, IAM, S3). Automating CI/CD workflows using GitHub Actions and managing Node.js/Express application clusters."
    },
    {
      date: "2026",
      title: "AWS & Cloud Certifications",
      desc: "Earned AWS Cloud Quest: Cloud Practitioner Badge, Fundamentals of DevOps on AWS (Simplilearn), and Google Cloud Generative AI Leader credentials."
    },
    {
      date: "2026",
      title: "GCP & AI Data Analytics Pipeline",
      desc: "Built a real-time streaming analytics pipeline with Google Cloud Pub/Sub, Dataflow, BigQuery, Vertex AI, and Cloud Run; completed Tata GenAI Data Analytics simulation."
    },
    {
      date: "Ongoing",
      title: "Continuous Cloud-Native Labs & Infrastructure Research",
      desc: "Deploying microservices with Docker & Kubernetes, instrumenting Prometheus/Grafana observability environments, and writing infrastructure as code."
    }
  ];

  return (
    <section id="journey">
      <div className="w">
        <span className="section-tag">04 — Timeline</span>
        <h2 className="section-title reveal in">My Engineering Journey</h2>
        <p className="section-desc reveal in">
          Academic foundation, industry internship experience, certifications, and hands-on milestones.
        </p>

        <div className="timeline">
          {timelineData.map((t, idx) => (
            <div className="timeline-item reveal in" key={idx}>
              <div className="timeline-dot"></div>
              <div className="timeline-glass-card">
                <div className="timeline-date">{t.date}</div>
                <h3 className="timeline-title">{t.title}</h3>
                <p className="timeline-desc">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
