'use client';

import React from 'react';
import PortfolioLayout from '@/src/components/portfolio/layout/PortfolioLayout';
import PortfolioHeader from '@/src/components/portfolio/layout/PortfolioHeader';
import PortfolioFooter from '@/src/components/portfolio/layout/PortfolioFooter';
import PortfolioHero from '@/src/components/portfolio/sections/PortfolioHero';
import FeaturedProjectsSection from '@/src/components/portfolio/sections/FeaturedProjectsSection';
import WhatWeDoSection from '@/src/components/portfolio/sections/WhatWeDoSection';
import VisionSection from '@/src/components/portfolio/sections/VisionSection';
import WhyNSPSection from '@/src/components/portfolio/sections/WhyNSPSection';
import AcademySection from '@/src/components/portfolio/sections/AcademySection';

export default function Home() {
  return (
    <PortfolioLayout>
      <PortfolioHeader />
      <PortfolioHero />
      <WhatWeDoSection />
      <VisionSection />
      <WhyNSPSection />
      <AcademySection />
      <FeaturedProjectsSection />
      
      {/* Additional sections will be added here as they are implemented */}
      
      <PortfolioFooter />
    </PortfolioLayout>
  );
}
