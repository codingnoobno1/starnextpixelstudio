import React from 'react';

const ProjectCard = ({ title, category, image, description }) => {
  return (
    <div className="nsp-glass nsp-glow-hover" style={{
      overflow: 'hidden',
      transition: 'var(--nsp-transition)',
      cursor: 'pointer',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        height: '220px',
        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${image || 'https://via.placeholder.com/400x225/1a1a1a/ff003c?text=Project'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          bottom: '15px',
          left: '15px',
          background: 'var(--nsp-red)',
          color: 'white',
          padding: '4px 10px',
          fontSize: '0.7rem',
          fontWeight: '800',
          textTransform: 'uppercase',
          borderRadius: '2px'
        }}>
          {category}
        </div>
      </div>
      
      <div style={{ padding: '20px', flexGrow: 1 }}>
        <h3 className="nsp-heading" style={{ margin: '0 0 10px 0', fontSize: '1.2rem', color: 'var(--nsp-white)' }}>
          {title}
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--nsp-gray)', margin: 0, lineHeight: 1.5 }}>
          {description}
        </p>
      </div>
      
      <div style={{ padding: '0 20px 20px 20px' }}>
        <a href="#" style={{ 
          color: 'var(--nsp-red)', 
          textDecoration: 'none', 
          fontSize: '0.8rem', 
          fontWeight: '700',
          textTransform: 'uppercase'
        }}>
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
