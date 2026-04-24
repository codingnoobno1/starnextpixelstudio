import React from 'react';
import PortfolioContainer from '../layout/PortfolioContainer';

const ProjectDetailsModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div 
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.9)',
          backdropFilter: 'blur(10px)'
        }}
      ></div>
      
      <div className="nsp-glass" style={{
        width: '100%',
        maxWidth: '1000px',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        zIndex: 2001,
        background: 'var(--nsp-black)',
        border: '1px solid var(--nsp-glass-border)'
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          ✕
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
          <div style={{
            height: '400px',
            background: `url(${project?.image || 'https://via.placeholder.com/800x600'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
          
          <div style={{ padding: '40px' }}>
            <div style={{ color: 'var(--nsp-red)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '10px' }}>
              {project?.category}
            </div>
            <h2 className="nsp-heading" style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'white' }}>{project?.title}</h2>
            <p style={{ color: 'var(--nsp-gray)', lineHeight: '1.8', marginBottom: '30px' }}>{project?.description}</p>
            
            <div style={{ marginBottom: '30px' }}>
              <h4 className="nsp-heading" style={{ fontSize: '0.9rem', color: 'white', marginBottom: '15px' }}>Tech Stack</h4>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {['Unity', 'C#', 'Blender', 'Photon'].map(tech => (
                  <span key={tech} className="nsp-glass" style={{ padding: '5px 12px', fontSize: '0.7rem', color: 'white' }}>{tech}</span>
                ))}
              </div>
            </div>

            <button style={{
              background: 'var(--nsp-red)',
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              cursor: 'pointer',
              width: '100%'
            }}>
              Launch Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
