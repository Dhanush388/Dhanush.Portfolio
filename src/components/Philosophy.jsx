import React from 'react';

export default function Philosophy() {
  const philosophyData = [
    {
      num: "01",
      title: "Automate Everything",
      desc: "Build repeatable workflows and eliminate error-prone manual interventions through code-defined automation."
    },
    {
      num: "02",
      title: "Design for Scale & Reliability",
      desc: "Architect modular, fault-tolerant infrastructure built to handle unexpected load and heal automatically."
    },
    {
      num: "03",
      title: "Learn by Building",
      desc: "Turn abstract system theory into active implementations, hands-on labs, and production-tested architectures."
    },
    {
      num: "04",
      title: "Continuous Evolution",
      desc: "Stay curious, measure outcomes relentlessly, and incorporate modern cloud and AI advancements."
    }
  ];

  return (
    <section id="philosophy">
      <div className="w">
        <span className="section-tag">05 — Principles</span>
        <h2 className="section-title reveal in">Engineering Principles</h2>
        <p className="section-desc reveal in">
          How I approach software reliability, infrastructure design, and continuous learning.
        </p>

        <div className="philosophy-grid">
          {philosophyData.map((p) => (
            <div className="philosophy-card reveal in" key={p.num}>
              <span className="philosophy-num">{p.num}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

