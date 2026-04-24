import React from 'react';

const NeonGlowCard = ({ title, subtitle, icon, color = 'var(--nsp-red)' }) => {
  return (
    <div className="nsp-glass" style={{
      padding: '30px',
      position: 'relative',
      overflow: 'hidden',
      transition: 'var(--nsp-transition)',
      border: `1px solid ${color}`,
      boxShadow: `0 0 15px ${color}33`,
      cursor: 'pointer'
    }}>
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '100px',
        height: '100px',
        background: color,
        filter: 'blur(40px)',
        opacity: 0.3
      }}></div>
      
      <div style={{ fontSize: '2rem', marginBottom: '20px' }}>{icon}</div>
      <h3 className="nsp-heading" style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'white' }}>{title}</h3>
      <p style={{ color: 'var(--nsp-gray)', fontSize: '0.9rem' }}>{subtitle}</p>
      
      <div className="glow-on-hover" style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '3px',
        background: color,
        boxShadow: `0 0 10px ${color}`
      }}></div>
    </div>
  );
};

export default NeonGlowCard;
