import React from 'react';

const ProjectStats = ({ views, likes, downloads }) => {
  const stats = [
    { label: 'Views', value: views, icon: '👁️' },
    { label: 'Likes', value: likes, icon: '❤️' },
    { label: 'Downloads', value: downloads, icon: '💾' }
  ];

  return (
    <div style={{ display: 'flex', gap: '30px' }}>
      {stats.map((stat, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{stat.icon}</div>
          <div className="nsp-heading" style={{ fontSize: '1rem', color: 'white' }}>{stat.value}</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--nsp-gray)', textTransform: 'uppercase' }}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;
