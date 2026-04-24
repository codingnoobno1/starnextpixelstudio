'use client';

import React from 'react';
import PortfolioLayout from '@/src/components/portfolio/layout/PortfolioLayout';
import PortfolioHeader from '@/src/components/portfolio/layout/PortfolioHeader';
import PortfolioFooter from '@/src/components/portfolio/layout/PortfolioFooter';
import PortfolioHero from '@/src/components/portfolio/sections/PortfolioHero';
import GamingSessionSection from '@/src/components/portfolio/sections/GamingSessionSection';
import FeaturedProjectsSection from '@/src/components/portfolio/sections/FeaturedProjectsSection';
import TeamSection from '@/src/components/portfolio/sections/TeamSection';
import WhatWeDoSection from '@/src/components/portfolio/sections/WhatWeDoSection';
import VisionSection from '@/src/components/portfolio/sections/VisionSection';
import WhyNSPSection from '@/src/components/portfolio/sections/WhyNSPSection';
import AcademySection from '@/src/components/portfolio/sections/AcademySection';

export default function Home() {
  return (
    <PortfolioLayout>
      <PortfolioHeader />
      <PortfolioHero />
      <GamingSessionSection />
      <WhatWeDoSection />
      <TeamSection />
      <VisionSection />
      <WhyNSPSection />
      <AcademySection />
      <FeaturedProjectsSection />
      <PortfolioFooter />
    </PortfolioLayout>
  );
}
