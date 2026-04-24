'use client';

import React from 'react';
import PortfolioLayout from '@/src/components/portfolio/layout/PortfolioLayout';
import PortfolioHeader from '@/src/components/portfolio/layout/PortfolioHeader';
import PortfolioHero from '@/src/components/portfolio/sections/PortfolioHero';
import FeaturedProjectsSection from '@/src/components/portfolio/sections/FeaturedProjectsSection';

export default function PortfolioDemo() {
  return (
    <PortfolioLayout>
      <PortfolioHeader />
      <PortfolioHero />
      <FeaturedProjectsSection />
      
      {/* Footer and other sections can be added here */}
      <footer style={{ padding: '50px 0', borderTop: '1px solid var(--nsp-glass-border)', textAlign: 'center', background: 'var(--nsp-black)' }}>
        <p style={{ color: 'var(--nsp-gray)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} <span style={{ color: 'var(--nsp-red)', fontWeight: 'bold' }}>NEXT STAR PIXEL</span>. All rights reserved.
        </p>
      </footer>
    </PortfolioLayout>
  );
}
