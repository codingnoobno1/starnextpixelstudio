'use client';
import React, { useState } from 'react';
import PortfolioContainer from '../layout/PortfolioContainer';

const projects = [
  {
    id: 1,
    title: "Shadow Protocol",
    status: "Current Production",
    category: "Action / Stealth",
    description: "A high-stakes espionage game set in a futuristic cyberpunk world.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000",
    color: "#ff003c"
  },
  {
    id: 2,
    title: "Cyber Rush 2099",
    status: "Current Production",
    category: "Racing",
    description: "High-speed vehicular combat across neon-drenched megacities.",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000",
    color: "#ff003c"
  },
  {
    id: 3,
    title: "Project Aether",
    status: "Upcoming",
    category: "Open World RPG",
    description: "Exploring the boundaries of magical technology in a vast, floating archipelago.",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1000",
    color: "#888888"
  },
  {
    id: 4,
    title: "VFX Masterclass: Void",
    status: "Upcoming",
    category: "Cinematic Experience",
    description: "A deep dive into advanced particle physics and black hole simulations.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
    color: "#888888"
  }
];

const GamingSessionSection = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.status.includes(filter));

  return (
    <section id="games" style={{ padding: '100px 0', background: '#050505' }}>
      <PortfolioContainer>
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 className="nsp-heading" style={{ fontSize: '3rem', color: 'var(--nsp-white)' }}>
            Gaming <span className="text-gradient">Session</span>
          </h2>
          <p style={{ color: 'var(--nsp-gray)', maxWidth: '600px', margin: '1rem auto' }}>
            Experience the next generation of digital entertainment. From live productions to future concepts.
          </p>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          marginBottom: '3rem' 
        }}>
          {['All', 'Current Production', 'Upcoming'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '0.8rem 1.5rem',
                background: filter === f ? 'var(--nsp-red)' : 'transparent',
                color: filter === f ? 'white' : 'var(--nsp-gray)',
                border: filter === f ? '1px solid var(--nsp-red)' : '1px solid var(--nsp-glass-border)',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '700',
                transition: 'var(--nsp-transition)',
                textTransform: 'uppercase',
                fontSize: '0.8rem'
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="nsp-glass nsp-glow-hover animate-fade-in"
              style={{ 
                overflow: 'hidden',
                transition: 'var(--nsp-transition)',
                cursor: 'pointer'
              }}
            >
              <div style={{ 
                height: '200px', 
                background: `url(${project.image}) center/cover`,
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  padding: '0.4rem 0.8rem',
                  background: project.status === 'Upcoming' ? 'rgba(0,0,0,0.7)' : 'var(--nsp-red)',
                  color: 'white',
                  fontSize: '0.7rem',
                  fontWeight: '800',
                  borderRadius: '4px',
                  textTransform: 'uppercase'
                }}>
                  {project.status}
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span style={{ 
                  color: 'var(--nsp-red)', 
                  fontSize: '0.8rem', 
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {project.category}
                </span>
                <h3 className="nsp-heading" style={{ 
                  margin: '0.5rem 0', 
                  fontSize: '1.5rem',
                  color: 'var(--nsp-white)'
                }}>
                  {project.title}
                </h3>
                <p style={{ 
                  color: 'var(--nsp-gray)', 
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  marginBottom: '1.5rem'
                }}>
                  {project.description}
                </p>
                <button style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--nsp-white)',
                  fontWeight: '700',
                  padding: 0,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  VIEW DETAILS <span style={{ color: 'var(--nsp-red)' }}>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </PortfolioContainer>
    </section>
  );
};

export default GamingSessionSection;
