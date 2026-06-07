import { motion } from 'framer-motion';
import { achievements } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: '100px 0' }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="section-label">07. Achievements</motion.p>
          <div className="accent-line" />
          <motion.h2 variants={fadeUp} style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            fontWeight: 800, marginBottom: '50px',
          }}>
            Highlights & <span style={{ color: 'var(--accent)' }}>Milestones</span>
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {achievements.map((ach, i) => (
              <motion.div key={ach.title} variants={fadeUp} className="card" style={{ padding: '28px' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '14px' }}>{ach.icon}</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700,
                  color: 'var(--accent)', marginBottom: '10px', lineHeight: 1.3,
                }}>
                  {ach.title}
                </h3>
                <p style={{ color: 'var(--text2)', fontSize: '0.86rem', lineHeight: 1.75, marginBottom: '16px' }}>
                  {ach.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {ach.platforms.map(p => (
                    <span key={p} className="tag">{p}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
