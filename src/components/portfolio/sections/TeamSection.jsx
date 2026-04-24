import React from 'react';
import PortfolioContainer from '../layout/PortfolioContainer';

const team = [
  {
    name: "Siddharth",
    role: "Founder",
    specialty: "VFX & Animation",
    bio: "Visionary creator specializing in high-end cinematic VFX and animation. Turning complex concepts into breathtaking visual realities.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siddharth" // Using a nice avatar placeholder
  },
  {
    name: "Tushar",
    role: "Co-Founder",
    specialty: "Web & Mobile Development",
    bio: "Tech architect focused on building robust, scalable web and mobile ecosystems. Bridging the gap between design and functionality.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tushar"
  }
];

const TeamSection = () => {
  return (
    <section id="team" style={{ padding: '100px 0', background: 'var(--nsp-black)' }}>
      <PortfolioContainer>
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 className="nsp-heading" style={{ fontSize: '3rem', color: 'var(--nsp-white)' }}>
            The <span className="text-gradient">Founders</span>
          </h2>
          <p style={{ color: 'var(--nsp-gray)', maxWidth: '600px', margin: '1rem auto' }}>
            Meet the creative minds behind Next Star Pixel.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '3rem',
          justifyContent: 'center'
        }}>
          {team.map((member) => (
            <div 
              key={member.name}
              className="nsp-glass animate-fade-in"
              style={{
                padding: '3rem 2rem',
                textAlign: 'center',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'var(--nsp-dark-gray)',
                border: '2px solid var(--nsp-red)',
                marginBottom: '1.5rem',
                padding: '5px',
                overflow: 'hidden'
              }}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                />
              </div>
              
              <h3 className="nsp-heading" style={{ 
                fontSize: '2rem', 
                color: 'var(--nsp-white)',
                marginBottom: '0.2rem'
              }}>
                {member.name}
              </h3>
              
              <div style={{
                color: 'var(--nsp-red)',
                fontWeight: '800',
                textTransform: 'uppercase',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                marginBottom: '1.5rem'
              }}>
                {member.role} • {member.specialty}
              </div>

              <p style={{
                color: 'var(--nsp-gray)',
                lineHeight: '1.7',
                fontSize: '1rem'
              }}>
                {member.bio}
              </p>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                {['LinkedIn', 'Twitter', 'GitHub'].map(social => (
                  <button 
                    key={social}
                    style={{
                      background: 'var(--nsp-glass)',
                      border: '1px solid var(--nsp-glass-border)',
                      padding: '0.5rem 1rem',
                      color: 'var(--nsp-white)',
                      fontSize: '0.7rem',
                      fontWeight: '700',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      transition: 'var(--nsp-transition)'
                    }}
                    onMouseEnter={(e) => { e.target.style.borderColor = 'var(--nsp-red)'; e.target.style.color = 'var(--nsp-red)'; }}
                    onMouseLeave={(e) => { e.target.style.borderColor = 'var(--nsp-glass-border)'; e.target.style.color = 'var(--nsp-white)'; }}
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PortfolioContainer>
    </section>
  );
};

export default TeamSection;
