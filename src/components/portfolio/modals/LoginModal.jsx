import React from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(8px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }} onClick={onClose}>
      <div 
        className="nsp-glass animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '450px',
          padding: '3rem',
          position: 'relative',
          border: '1px solid rgba(255, 0, 60, 0.2)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'transparent',
            border: 'none',
            color: 'var(--nsp-gray)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            transition: 'var(--nsp-transition)'
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--nsp-red)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--nsp-gray)'}
        >
          ×
        </button>

        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 className="nsp-heading" style={{ fontSize: '2rem', color: 'var(--nsp-white)' }}>
            Creator <span className="text-gradient">Portal</span>
          </h2>
          <p style={{ color: 'var(--nsp-gray)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Enter your credentials to access the studio dashboard.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ 
              display: 'block', 
              color: 'var(--nsp-white)', 
              fontSize: '0.7rem', 
              fontWeight: '800', 
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
              letterSpacing: '0.1em'
            }}>
              Email Address
            </label>
            <input 
              type="email" 
              placeholder="name@starnext.com"
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--nsp-glass-border)',
                padding: '1rem',
                color: 'white',
                borderRadius: '4px',
                outline: 'none',
                transition: 'var(--nsp-transition)'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--nsp-red)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--nsp-glass-border)'}
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ 
              display: 'block', 
              color: 'var(--nsp-white)', 
              fontSize: '0.7rem', 
              fontWeight: '800', 
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
              letterSpacing: '0.1em'
            }}>
              Password
            </label>
            <input 
              type="password" 
              placeholder="••••••••"
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--nsp-glass-border)',
                padding: '1rem',
                color: 'white',
                borderRadius: '4px',
                outline: 'none',
                transition: 'var(--nsp-transition)'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--nsp-red)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--nsp-glass-border)'}
            />
          </div>

          <button className="nsp-glow-hover" style={{
            width: '100%',
            padding: '1rem',
            background: 'var(--nsp-red)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            cursor: 'pointer',
            transition: 'var(--nsp-transition)'
          }}>
            Log In
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="#" style={{ color: 'var(--nsp-gray)', fontSize: '0.8rem', textDecoration: 'none' }}>
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
