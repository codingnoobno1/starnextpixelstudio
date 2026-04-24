import React from 'react';
import '../portfolio.css';

const PortfolioLayout = ({ children }) => {
  return (
    <div className="nsp-portfolio">
      <main>{children}</main>
    </div>
  );
};

export default PortfolioLayout;
