import React from 'react';
import PortfolioContainer from '../layout/PortfolioContainer';

const PortfolioHero = () => {
  return (
    <section className="animate-fade-in" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #0a0a0a 100%)',
      paddingTop: '80px'
    }}>
      <PortfolioContainer>
        <div style={{ maxWidth: '800px' }}>
          <h1 className="nsp-heading" style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            color: 'var(--nsp-white)'
          }}>
            We <span className="text-gradient">Build</span> Worlds.<br />
            We Teach <span className="text-gradient">Creation</span>.
          </h1>
          
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--nsp-gray)', 
            marginBottom: '2.5rem',
            maxWidth: '600px',
            lineHeight: 1.6
          }}>
            From indie games to cinematic VFX and real-world applications — 
            <span style={{ color: 'var(--nsp-white)', fontWeight: '600' }}> NSP</span> is where creativity meets technology. 
            Explore, learn, and build with us.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button className="nsp-glow-hover" style={{
              background: 'var(--nsp-red)',
              color: 'white',
              border: 'none',
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'var(--nsp-transition)'
            }}>
              🎮 Explore Games
            </button>
            
            <button className="nsp-glass nsp-glow-hover" style={{
              color: 'white',
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'var(--nsp-transition)'
            }}>
              🎓 Start Learning
            </button>
          </div>
        </div>
      </PortfolioContainer>
    </section>
  );
};

export default PortfolioHero;
