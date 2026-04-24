import React from 'react';

const ProjectSkeleton = () => {
  return (
    <div className="nsp-glass" style={{ height: '350px', overflow: 'hidden' }}>
      <div className="shimmer" style={{ height: '220px', background: '#1a1a1a', position: 'relative' }}></div>
      <div style={{ padding: '20px' }}>
        <div className="shimmer" style={{ height: '24px', width: '60%', background: '#1a1a1a', marginBottom: '15px' }}></div>
        <div className="shimmer" style={{ height: '16px', width: '90%', background: '#1a1a1a', marginBottom: '10px' }}></div>
        <div className="shimmer" style={{ height: '16px', width: '40%', background: '#1a1a1a' }}></div>
      </div>
      
      <style jsx>{`
        .shimmer {
          position: relative;
          overflow: hidden;
        }
        .shimmer::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
          animation: loading 1.5s infinite;
        }
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default ProjectSkeleton;
