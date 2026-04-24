import React from 'react';
import PortfolioContainer from './PortfolioContainer';

const PortfolioHeader = () => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1.5rem 0'
    }} className="nsp-glass">
      <PortfolioContainer className="header-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
          <span style={{ color: 'var(--nsp-white)' }}>NEXT STAR</span>
          <span style={{ color: 'var(--nsp-red)' }}> PIXEL</span>
        </div>
        
        <nav style={{ display: 'flex', gap: '2rem' }}>
          {['Games', 'Academy', 'Assets', 'Services', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              style={{
                color: 'var(--nsp-white)',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'var(--nsp-transition)',
                opacity: 0.8
              }}
              onMouseEnter={(e) => { e.target.style.opacity = 1; e.target.style.color = 'var(--nsp-red)'; }}
              onMouseLeave={(e) => { e.target.style.opacity = 0.8; e.target.style.color = 'var(--nsp-white)'; }}
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="nsp-glass nsp-glow-hover" style={{
          padding: '0.6rem 1.5rem',
          color: 'var(--nsp-white)',
          fontWeight: '700',
          cursor: 'pointer',
          textTransform: 'uppercase',
          fontSize: '0.8rem'
        }}>
          Hire Us
        </button>
      </PortfolioContainer>
    </header>
  );
};

export default PortfolioHeader;
