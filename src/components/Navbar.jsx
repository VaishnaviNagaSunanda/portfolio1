import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '../data/portfolioData';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Certifications', 'Achievements', 'Contact'];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navItems.map(n => document.getElementById(n.toLowerCase()));
      const current = sections.filter(s => s && window.scrollY >= s.offsetTop - 120).pop();
      if (current) setActive(current.id.charAt(0).toUpperCase() + current.id.slice(1));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '14px 0',
        background: scrolled ? 'rgba(10,15,26,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,240,180,0.08)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem', cursor: 'pointer', color: 'var(--accent)' }}
          onClick={() => scrollTo('home')}
        >
          {personal.initials}
        </motion.div>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="desktop-nav">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`nav-link ${active === item ? 'active' : ''}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0' }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '8px', padding: '8px', cursor: 'pointer', display: 'none' }}
          className="hamburger"
        >
          <div style={{ width: 20, height: 2, background: 'var(--accent)', marginBottom: 5, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <div style={{ width: 20, height: 2, background: 'var(--accent)', marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
          <div style={{ width: 20, height: 2, background: 'var(--accent)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(10,15,26,0.98)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid var(--border)',
              padding: '16px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: active === item ? 'var(--accent)' : 'var(--text2)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  padding: '10px 12px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  borderLeft: active === item ? '2px solid var(--accent)' : '2px solid transparent',
                }}
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}
