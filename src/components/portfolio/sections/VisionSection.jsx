import React from 'react';
import PortfolioContainer from '../layout/PortfolioContainer';

const VisionSection = () => {
  return (
    <section id="vision" style={{ 
      padding: '120px 0', 
      background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=2000")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      textAlign: 'center'
    }}>
      <PortfolioContainer>
        <div style={{ maxWidth: '800px', margin: '0 auto' }} className="nsp-glass">
          <div style={{ padding: '60px' }}>
            <h2 className="nsp-heading" style={{ fontSize: '2.5rem', marginBottom: '25px' }}>
              Our <span className="text-gradient">Vision</span>
            </h2>
            <p style={{ 
              fontSize: '1.4rem', 
              color: 'var(--nsp-white)', 
              lineHeight: '1.6',
              fontWeight: '300',
              fontStyle: 'italic'
            }}>
              "To build a decentralized creative ecosystem where developers, artists, and learners collaborate to create impactful digital experiences."
            </p>
          </div>
        </div>
      </PortfolioContainer>
    </section>
  );
};

export default VisionSection;
