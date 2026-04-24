import React from 'react';
import PortfolioContainer from '../layout/PortfolioContainer';

const CaseStudySection = ({ projectName, problem, solution, outcome }) => {
  return (
    <section style={{ padding: '100px 0', background: 'var(--nsp-dark-gray)' }}>
      <PortfolioContainer>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
          <div>
            <h4 className="nsp-heading" style={{ color: 'var(--nsp-red)', marginBottom: '10px', fontSize: '0.9rem' }}>Case Study</h4>
            <h2 className="nsp-heading" style={{ fontSize: '3rem', color: 'white', marginBottom: '30px' }}>{projectName}</h2>
            <div className="nsp-glass" style={{ height: '300px', background: 'url("https://via.placeholder.com/600x400/1a1a1a/ff003c") center/cover' }}></div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ marginBottom: '40px' }}>
              <h5 className="nsp-heading" style={{ color: 'white', fontSize: '1.1rem', marginBottom: '15px' }}>The Problem</h5>
              <p style={{ color: 'var(--nsp-gray)', lineHeight: '1.7' }}>{problem}</p>
            </div>
            
            <div style={{ marginBottom: '40px' }}>
              <h5 className="nsp-heading" style={{ color: 'white', fontSize: '1.1rem', marginBottom: '15px' }}>The Solution</h5>
              <p style={{ color: 'var(--nsp-gray)', lineHeight: '1.7' }}>{solution}</p>
            </div>
            
            <div>
              <h5 className="nsp-heading" style={{ color: 'white', fontSize: '1.1rem', marginBottom: '15px' }}>The Outcome</h5>
              <p style={{ color: 'var(--nsp-gray)', lineHeight: '1.7' }}>{outcome}</p>
            </div>
          </div>
        </div>
      </PortfolioContainer>
    </section>
  );
};

export default CaseStudySection;
