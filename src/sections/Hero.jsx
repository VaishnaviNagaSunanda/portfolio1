import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data/portfolioData';
import profileImg from '../assets/profile.jpeg';

const roles = personal.roles;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="container" style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '60px', alignItems: 'center' }}>
          {/* Left content */}
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={item} className="section-label" style={{ marginBottom: '16px' }}>
              👋 Hello, I'm
            </motion.p>

            <motion.h1 variants={item} style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '8px',
            }}>
              {personal.name}
              <br />
              <span style={{ color: 'var(--text3)', fontSize: '0.65em', fontWeight: 500 }}>{personal.lastName}</span>
            </motion.h1>

            <motion.div variants={item} style={{ height: '48px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '2px' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                color: 'var(--accent)',
              }}>
                {displayed}
              </span>
              <span className="cursor-blink" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '1.1rem' }}>|</span>
            </motion.div>

            <motion.p variants={item} style={{ color: 'var(--text2)', maxWidth: '520px', fontSize: '1rem', lineHeight: 1.8, marginBottom: '36px' }}>
              {personal.bio}
            </motion.p>

            <motion.div variants={item} style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href={personal.resume} download className="btn-primary">
                📄 Download Resume
              </a>
              <button
                className="btn-outline"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                💬 Let's Connect
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} style={{ display: 'flex', gap: '36px', marginTop: '48px', flexWrap: 'wrap' }}>
              {[
                { num: '8.9', label: 'B.Sc CGPA' },
                { num: '8.5', label: 'MCA CGPA' },
                { num: '50+', label: 'Problems Solved' },
                { num: '4', label: 'Certifications' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent)' }}>{stat.num}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.1em' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} style={{ display: 'flex', gap: '14px', marginTop: '28px' }}>
              {[
                { label: 'GitHub', href: personal.github, icon: '⌨️' },
                { label: 'LinkedIn', href: personal.linkedin, icon: '💼' },
                { label: 'Email', href: `mailto:${personal.email}`, icon: '✉️' },
              ].map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text2)',
                    textDecoration: 'none', transition: 'color 0.3s ease',
                    padding: '8px 14px', border: '1px solid var(--border)',
                    borderRadius: '8px', background: 'var(--surface)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'rgba(0,240,180,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  {link.icon} {link.label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative' }}
            className="hero-image-wrap"
          >
            {/* Rotating ring */}
            <div style={{
              position: 'absolute', inset: '-16px',
              borderRadius: '50%',
              border: '1px dashed rgba(0,240,180,0.3)',
              animation: 'spin 20s linear infinite',
            }} />
            <div style={{
              position: 'absolute', inset: '-30px',
              borderRadius: '50%',
              border: '1px dashed rgba(0,240,180,0.12)',
              animation: 'spin 30s linear infinite reverse',
            }} />

            {/* Image */}
            <motion.div
              className="animate-float"
              style={{
                width: '260px', height: '260px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid var(--accent)',
                boxShadow: '0 0 40px rgba(0,240,180,0.25), 0 0 80px rgba(0,240,180,0.08)',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <img src={profileImg} alt="Vaishnavi Naga Sunanda"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </motion.div>

            {/* Accent dot */}
            <div style={{
              position: 'absolute', bottom: '10px', right: '10px', zIndex: 2,
              width: '24px', height: '24px', borderRadius: '50%',
              background: 'var(--accent)',
              animation: 'pulse-ring 2s infinite',
            }} />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ textAlign: 'center', marginTop: '60px' }}
        >
          <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text3)', letterSpacing: '0.15em' }}>SCROLL DOWN</span>
            <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--accent), transparent)', animation: 'pulse 1.5s ease infinite' }} />
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .hero-image-wrap { display: none !important; }
          #home > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
