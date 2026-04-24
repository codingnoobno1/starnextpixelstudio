import React from 'react';
import PortfolioContainer from '../layout/PortfolioContainer';

const WhyNSPSection = () => {
  const highlights = [
    { title: "Real-world projects", description: "Not just theory, but actual building.", icon: "⚡" },
    { title: "Industry-focused", description: "Skills that matter in the modern market.", icon: "🎯" },
    { title: "Innovation-driven", description: "Always pushing the boundaries of tech.", icon: "🚀" },
    { title: "Mentorship", description: "Learn from those who actually create.", icon: "🤝" }
  ];

  return (
    <section style={{ padding: '100px 0', background: 'var(--nsp-black)' }}>
      <PortfolioContainer>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
          <div style={{ gridColumn: 'span 2' }}>
            <h2 className="nsp-heading" style={{ fontSize: '3rem', marginBottom: '20px' }}>
              Why <span className="text-gradient">NSP?</span>
            </h2>
            <p style={{ color: 'var(--nsp-gray)', fontSize: '1.1rem', maxWidth: '500px' }}>
              We don't just teach or build; we empower creators to become part of the next generation of digital innovators.
            </p>
          </div>
          
          {highlights.map((h, i) => (
            <div key={i} style={{ borderLeft: '2px solid var(--nsp-red)', paddingLeft: '25px' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{h.icon}</div>
              <h4 className="nsp-heading" style={{ fontSize: '1rem', marginBottom: '10px', color: 'var(--nsp-white)' }}>{h.title}</h4>
              <p style={{ color: 'var(--nsp-gray)', fontSize: '0.85rem' }}>{h.description}</p>
            </div>
          ))}
        </div>
      </PortfolioContainer>
    </section>
  );
};

export default WhyNSPSection;
