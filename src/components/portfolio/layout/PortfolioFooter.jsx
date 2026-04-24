import React from 'react';
import PortfolioContainer from './PortfolioContainer';

const PortfolioFooter = () => {
  return (
    <footer style={{
      padding: '80px 0 40px',
      background: 'var(--nsp-black)',
      borderTop: '1px solid var(--nsp-glass-border)'
    }}>
      <PortfolioContainer>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          <div>
            <h3 className="nsp-heading" style={{ color: 'var(--nsp-white)', marginBottom: '20px' }}>
              NEXT STAR<span style={{ color: 'var(--nsp-red)' }}> PIXEL</span>
            </h3>
            <p style={{ color: 'var(--nsp-gray)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              A creative technology studio focused on indie game development, VFX animation, and digital education.
            </p>
          </div>
          
          <div>
            <h4 className="nsp-heading" style={{ color: 'var(--nsp-white)', fontSize: '1rem', marginBottom: '20px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Games', 'Academy', 'Assets', 'Services', 'Blog'].map(link => (
                <li key={link} style={{ marginBottom: '10px' }}>
                  <a href={`#${link.toLowerCase()}`} style={{ color: 'var(--nsp-gray)', textDecoration: 'none', transition: 'var(--nsp-transition)' }} 
                     onMouseEnter={(e) => e.target.style.color = 'var(--nsp-red)'}
                     onMouseLeave={(e) => e.target.style.color = 'var(--nsp-gray)'}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="nsp-heading" style={{ color: 'var(--nsp-white)', fontSize: '1rem', marginBottom: '20px' }}>Contact</h4>
            <p style={{ color: 'var(--nsp-gray)', fontSize: '0.9rem', marginBottom: '10px' }}>hello@nextstarpixel.com</p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
              {/* Social Icons Placeholders */}
              {['Twitter', 'Discord', 'YouTube', 'LinkedIn'].map(social => (
                <a key={social} href="#" className="nsp-glass" style={{ width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--nsp-white)', fontSize: '0.8rem' }}>
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div style={{
          paddingTop: '30px',
          borderTop: '1px solid var(--nsp-glass-border)',
          textAlign: 'center'
        }}>
          <p style={{ color: 'var(--nsp-gray)', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} Next Star Pixel. Built with passion for creators.
          </p>
        </div>
      </PortfolioContainer>
    </footer>
  );
};

export default PortfolioFooter;
