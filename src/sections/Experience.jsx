import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 0', background: 'var(--bg2)' }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="section-label">04. Experience</motion.p>
          <div className="accent-line" />
          <motion.h2 variants={fadeUp} style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            fontWeight: 800, marginBottom: '50px',
          }}>
            Professional <span style={{ color: 'var(--accent)' }}>Journey</span>
          </motion.h2>

          {/* Timeline */}
          <div style={{ position: 'relative', paddingLeft: '32px' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute', left: '5px', top: '8px', bottom: '0',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent), rgba(0,240,180,0.1))',
            }} />

            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                variants={fadeUp}
                style={{ position: 'relative', marginBottom: '40px' }}
              >
                {/* Dot */}
                <div className="timeline-dot" style={{
                  position: 'absolute', left: '-27px', top: '6px',
                  background: exp.color,
                  boxShadow: `0 0 12px ${exp.color}60`,
                }} />

                <div className="card" style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700,
                        color: 'var(--text)', marginBottom: '4px',
                      }}>
                        {exp.role}
                      </h3>
                      <p style={{ color: exp.color, fontWeight: 500, fontSize: '0.9rem' }}>{exp.company}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                        color: 'var(--text3)', letterSpacing: '0.08em',
                        display: 'block', marginBottom: '4px',
                      }}>
                        {exp.period}
                      </span>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                        padding: '3px 10px', borderRadius: '999px',
                        background: `${exp.color}18`, color: exp.color,
                        border: `1px solid ${exp.color}40`,
                      }}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{ display: 'flex', gap: '10px', color: 'var(--text2)', fontSize: '0.88rem', lineHeight: 1.75 }}>
                        <span style={{ color: exp.color, flexShrink: 0, marginTop: '4px' }}>▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
