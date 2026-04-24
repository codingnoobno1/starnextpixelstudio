import React from 'react';

const VideoPreview = ({ url, title, thumbnail }) => {
  return (
    <div className="nsp-glass" style={{ 
      position: 'relative', 
      width: '100%', 
      aspectRatio: '16/9', 
      overflow: 'hidden',
      cursor: 'pointer'
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        background: `url(${thumbnail || 'https://via.placeholder.com/1280x720/0a0a0a/ff003c?text=Play+Video'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'transform 0.5s ease'
      }} className="hover-zoom">
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'var(--nsp-red)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--nsp-glow)'
          }}>
            <div style={{
              width: 0,
              height: 0,
              borderTop: '15px solid transparent',
              borderBottom: '15px solid transparent',
              borderLeft: '25px solid white',
              marginLeft: '5px'
            }}></div>
          </div>
        </div>
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px'
      }}>
        <h4 className="nsp-heading" style={{ color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{title}</h4>
      </div>
      
      <style jsx>{`
        .hover-zoom:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default VideoPreview;
