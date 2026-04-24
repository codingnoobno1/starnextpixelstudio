import React from 'react';

const PortfolioContainer = ({ children, className = '' }) => {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '0 20px',
      width: '100%'
    }} className={className}>
      {children}
    </div>
  );
};

export default PortfolioContainer;
