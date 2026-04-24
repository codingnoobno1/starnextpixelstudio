import React from 'react';
import PortfolioContainer from '../layout/PortfolioContainer';
import NeonGlowCard from '../cards/NeonGlowCard';

const AcademySection = () => {
  const courses = [
    { title: "Indie Game Mastery", subtitle: "Go from zero to published indie dev.", icon: "🕹️", color: "#ff003c" },
    { title: "Cinematic VFX", subtitle: "Learn high-end visual effects pipelines.", icon: "🎬", color: "#00f2ff" },
    { title: "Full-Stack Creative", subtitle: "Build apps that look and feel amazing.", icon: "💻", color: "#b300ff" }
  ];

  return (
    <section id="academy" style={{ padding: '100px 0', background: 'var(--nsp-black)' }}>
      <PortfolioContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h2 className="nsp-heading" style={{ fontSize: '3rem', marginBottom: '15px' }}>
              NSP <span className="text-gradient">Academy</span>
            </h2>
            <p style={{ color: 'var(--nsp-gray)', maxWidth: '500px' }}>
              Learn directly from creators. Build real projects. Gain practical skills.
            </p>
          </div>
          <button className="nsp-glass nsp-glow-hover" style={{ padding: '12px 30px', color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>
            View All Courses
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {courses.map((course, index) => (
            <NeonGlowCard key={index} {...course} />
          ))}
        </div>
        
        <div className="nsp-glass" style={{ marginTop: '60px', padding: '50px', textAlign: 'center' }}>
          <h3 className="nsp-heading" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>1-on-1 Mentorship</h3>
          <p style={{ color: 'var(--nsp-gray)', maxWidth: '600px', margin: '0 auto 30px' }}>
            Personalized learning designed for rapid growth. Custom roadmaps, live sessions, and direct project guidance.
          </p>
          <button style={{ 
            background: 'white', 
            color: 'black', 
            padding: '12px 40px', 
            borderRadius: '4px', 
            fontWeight: '900', 
            textTransform: 'uppercase',
            border: 'none',
            cursor: 'pointer'
          }}>
            Apply for Mentorship
          </button>
        </div>
      </PortfolioContainer>
    </section>
  );
};

export default AcademySection;
