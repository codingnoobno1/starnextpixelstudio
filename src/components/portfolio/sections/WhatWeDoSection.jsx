import React from 'react';
import PortfolioContainer from '../layout/PortfolioContainer';

const WhatWeDoSection = () => {
  const services = [
    {
      title: "Indie Game Development",
      description: "We create immersive, story-driven and mechanics-focused indie games. From concept to release, we focus on performance, engagement, and originality.",
      icon: "🎮"
    },
    {
      title: "VFX & Animation",
      description: "High-quality visual storytelling using modern pipelines. From cinematic sequences to real-time effects for games and media.",
      icon: "🎬"
    },
    {
      title: "Learning & Mentorship",
      description: "Learn game dev, coding, and VFX directly from creators. Practical, project-based, and industry-relevant.",
      icon: "🎓"
    },
    {
      title: "App & Web Solutions",
      description: "Scalable, modern digital solutions built with performance and user experience in mind.",
      icon: "🌐"
    }
  ];

  return (
    <section id="services" style={{ padding: '100px 0', background: 'var(--nsp-dark-gray)' }}>
      <PortfolioContainer>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="nsp-heading" style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
            What <span className="text-gradient">We Do</span>
          </h2>
          <p style={{ color: 'var(--nsp-gray)', maxWidth: '700px', margin: '0 auto' }}>
            NSP operates at the intersection of creativity and engineering. Our work spans entertainment, education, and digital services.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          {services.map((service, index) => (
            <div key={index} className="nsp-glass nsp-glow-hover" style={{ padding: '40px', transition: 'var(--nsp-transition)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{service.icon}</div>
              <h3 className="nsp-heading" style={{ fontSize: '1.2rem', marginBottom: '15px', color: 'var(--nsp-white)' }}>{service.title}</h3>
              <p style={{ color: 'var(--nsp-gray)', fontSize: '0.95rem', lineHeight: '1.6' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </PortfolioContainer>
    </section>
  );
};

export default WhatWeDoSection;
