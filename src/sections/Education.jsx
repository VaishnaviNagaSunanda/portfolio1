import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export default function Education() {
  return (
    <section id="education" style={{ padding: '100px 0' }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="section-label">05. Education</motion.p>
          <div className="accent-line" />
          <motion.h2 variants={fadeUp} style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            fontWeight: 800, marginBottom: '50px',
          }}>
            Academic <span style={{ color: 'var(--accent)' }}>Background</span>
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {education.map((edu, i) => (
              <motion.div key={edu.degree} variants={fadeUp} className="card" style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}>
                {/* Background number */}
                <div style={{
                  position: 'absolute', right: '20px', top: '16px',
                  fontFamily: 'var(--font-display)', fontSize: '6rem',
                  fontWeight: 900, color: 'rgba(0,240,180,0.04)', lineHeight: 1,
                  pointerEvents: 'none',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{edu.icon}</div>

                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700,
                  color: 'var(--accent)', marginBottom: '8px', lineHeight: 1.3,
                }}>
                  {edu.degree}
                </h3>

                <p style={{ color: 'var(--text)', fontWeight: 500, fontSize: '0.9rem', marginBottom: '4px' }}>
                  {edu.institution}
                </p>
                <p style={{ color: 'var(--text3)', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', marginBottom: '20px', letterSpacing: '0.05em' }}>
                  {edu.location} · {edu.period}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    padding: '8px 18px',
                    background: 'var(--accent-dim)',
                    border: '1px solid rgba(0,240,180,0.3)',
                    borderRadius: '8px',
                  }}>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>CGPA</p>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>{edu.cgpa}</p>
                  </div>
                  <div>
                    {/* Mini CGPA bar */}
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text3)', marginBottom: '6px' }}>out of 10.0</p>
                    <div style={{ width: '120px', height: '6px', background: 'var(--surface2)', borderRadius: '3px', overflow: 'hidden' }}>
                      <motion.div
                        style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent2), var(--accent))', borderRadius: '3px' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(parseFloat(edu.cgpa) / 10) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #education .card-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
