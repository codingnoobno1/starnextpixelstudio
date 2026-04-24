import React, { useState } from 'react';

const CategoryFilter = ({ categories = ['All', 'Games', 'VFX', 'Web', 'Apps'], onFilterChange }) => {
  const [active, setActive] = useState('All');

  const handleFilter = (cat) => {
    setActive(cat);
    if (onFilterChange) onFilterChange(cat);
  };

  return (
    <div style={{ display: 'flex', gap: '2rem', marginBottom: '40px', overflowX: 'auto', paddingBottom: '10px' }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleFilter(cat)}
          style={{
            background: 'none',
            border: 'none',
            color: active === cat ? 'var(--nsp-white)' : 'var(--nsp-gray)',
            fontSize: '0.9rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            cursor: 'pointer',
            padding: '5px 0',
            position: 'relative',
            transition: 'var(--nsp-transition)',
            whiteSpace: 'nowrap'
          }}
        >
          {cat}
          {active === cat && (
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '2px',
              background: 'var(--nsp-red)',
              boxShadow: 'var(--nsp-glow)'
            }}></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
