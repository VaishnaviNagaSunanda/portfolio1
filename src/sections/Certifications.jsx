import { motion } from 'framer-motion';
import { certifications } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '100px 0', background: 'var(--bg2)' }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="section-label">06. Certifications</motion.p>
          <div className="accent-line" />
          <motion.h2 variants={fadeUp} style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            fontWeight: 800, marginBottom: '50px',
          }}>
            Credentials & <span style={{ color: 'var(--accent)' }}>Certifications</span>
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
            {certifications.map((cert, i) => (
              <motion.div key={cert.title} variants={fadeUp} className="card" style={{ padding: '28px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                {/* Glow background */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(circle at 50% 0%, ${cert.color}12, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                <div style={{
                  width: '60px', height: '60px', borderRadius: '50%',
                  background: `${cert.color}18`,
                  border: `2px solid ${cert.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.8rem', margin: '0 auto 16px',
                  boxShadow: `0 0 20px ${cert.color}30`,
                }}>
                  {cert.icon}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700,
                  color: 'var(--text)', marginBottom: '8px', lineHeight: 1.4,
                }}>
                  {cert.title}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                  color: cert.color, letterSpacing: '0.08em',
                }}>
                  {cert.issuer}
                </p>

                {/* Verified badge */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '4px',
                  marginTop: '14px', padding: '4px 10px',
                  background: 'rgba(0,240,180,0.08)',
                  border: '1px solid rgba(0,240,180,0.2)',
                  borderRadius: '999px',
                }}>
                  <span style={{ fontSize: '0.6rem', color: 'var(--accent)' }}>✓</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--accent)', letterSpacing: '0.08em' }}>CERTIFIED</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
