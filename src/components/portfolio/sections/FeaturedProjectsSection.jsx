import React from 'react';
import PortfolioContainer from '../layout/PortfolioContainer';
import ProjectCard from '../cards/ProjectCard';

const FeaturedProjectsSection = () => {
  const projects = [
    {
      title: "Star Odyssey",
      category: "Indie Game",
      description: "An immersive space exploration RPG built with Unity.",
      image: ""
    },
    {
      title: "Neon City VFX",
      category: "VFX Animation",
      description: "Cinematic visual effects for a cyberpunk short film.",
      image: ""
    },
    {
      title: "Creator Academy",
      category: "Education",
      description: "Comprehensive course on game development and VFX pipelines.",
      image: ""
    }
  ];

  return (
    <section id="projects" style={{ padding: '100px 0', background: 'var(--nsp-black)' }}>
      <PortfolioContainer>
        <div style={{ marginBottom: '50px' }}>
          <h2 className="nsp-heading" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
            Featured <span className="text-gradient">Showcase</span>
          </h2>
          <p style={{ color: 'var(--nsp-gray)', maxWidth: '600px' }}>
            Explore our latest creations across games, VFX, and digital products.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </PortfolioContainer>
    </section>
  );
};

export default FeaturedProjectsSection;
