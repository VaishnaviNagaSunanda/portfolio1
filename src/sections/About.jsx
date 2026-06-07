import { motion } from 'framer-motion';
import { personal } from '../data/portfolioData';
import profileImg from '../assets/profile.jpeg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 0' }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="section-label">01. About Me</motion.p>
          <div className="accent-line" />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            {/* Image col */}
            <motion.div variants={fadeUp} style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '20px', overflow: 'hidden',
                border: '1px solid var(--border)',
                position: 'relative',
                maxWidth: '380px',
              }}>
                <img src={profileImg} alt="Vaishnavi" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
                {/* Overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(10,15,26,0.8) 100%)',
                }} />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700 }}>Vaishnavi Naga Sunanda</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', marginTop: '4px' }}>Data Analyst · MCA Candidate</p>
                </div>
              </div>
              {/* Decorative corner */}
              <div style={{
                position: 'absolute', top: '-10px', left: '-10px',
                width: '60px', height: '60px',
                border: '2px solid var(--accent)',
                borderRight: 'none', borderBottom: 'none',
                borderRadius: '4px 0 0 0',
              }} />
              <div style={{
                position: 'absolute', bottom: '-10px', right: '-10px',
                width: '60px', height: '60px',
                border: '2px solid var(--accent)',
                borderLeft: 'none', borderTop: 'none',
                borderRadius: '0 0 4px 0',
              }} />
            </motion.div>

            {/* Text col */}
            <div>
              <motion.h2 variants={fadeUp} style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 800, lineHeight: 1.2, marginBottom: '20px',
              }}>
                Turning Data Into<br />
                <span style={{ color: 'var(--accent)' }}>Decisions</span>
              </motion.h2>

              <motion.p variants={fadeUp} style={{ color: 'var(--text2)', lineHeight: 1.9, marginBottom: '16px', fontSize: '0.95rem' }}>
                I'm a detail-oriented <strong style={{ color: 'var(--text)' }}>Data Analyst and MCA candidate</strong> with a deep passion for uncovering patterns within complex datasets and converting raw data into compelling, actionable stories.
              </motion.p>

              <motion.p variants={fadeUp} style={{ color: 'var(--text2)', lineHeight: 1.9, marginBottom: '28px', fontSize: '0.95rem' }}>
                My toolkit spans <strong style={{ color: 'var(--accent)' }}>Tableau, Power BI, Python, and SQL</strong>, with hands-on experience designing end-to-end data pipelines, building ML models, and architecting AWS cloud environments. I believe great analysis isn't just about numbers — it's about crafting insights that drive real decisions.
              </motion.p>

              {/* Quick facts */}
              <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
                {[
                  { label: 'Location', value: personal.location },
                  { label: 'Email', value: personal.email.split('@')[0] + '...' },
                  { label: 'Current', value: 'MCA – SCET Narsapuram' },
                  { label: 'Available', value: 'Open to Opportunities' },
                ].map(fact => (
                  <div key={fact.label} style={{
                    padding: '14px 16px',
                    background: 'var(--surface)',
                    borderRadius: '10px',
                    border: '1px solid var(--border)',
                  }}>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text3)', letterSpacing: '0.1em', marginBottom: '4px', textTransform: 'uppercase' }}>{fact.label}</p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text)', fontWeight: 500 }}>{fact.value}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.82rem', padding: '10px 20px' }}>
                  ⌨️ GitHub
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '0.82rem', padding: '9px 20px' }}>
                  💼 LinkedIn
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          #about .about-img-wrap { max-width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
