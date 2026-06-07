import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, skillIcons } from '../data/portfolioData';

const categories = Object.keys(skills);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

function SkillBar({ name, level, delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      style={{ marginBottom: '14px' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', alignItems: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>{skillIcons[name] || '🔹'}</span>
          {name}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent)' }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" style={{ padding: '100px 0', background: 'var(--bg2)' }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="section-label">02. Skills</motion.p>
          <div className="accent-line" />
          <motion.h2 variants={fadeUp} style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            fontWeight: 800, marginBottom: '40px',
          }}>
            Technical <span style={{ color: 'var(--accent)' }}>Arsenal</span>
          </motion.h2>

          {/* Category tabs */}
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)} style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: active === cat ? 'var(--accent)' : 'var(--border)',
                background: active === cat ? 'var(--accent-dim)' : 'var(--surface)',
                color: active === cat ? 'var(--accent)' : 'var(--text2)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                letterSpacing: '0.05em',
              }}>
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Skills grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <motion.div
              key={active}
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
            >
              {skills[active].map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.06} />
              ))}
            </motion.div>

            {/* Summary card */}
            <motion.div variants={fadeUp} className="card" style={{ padding: '28px', height: 'fit-content' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', color: 'var(--accent)' }}>
                {active} Overview
              </h3>
              <p style={{ color: 'var(--text2)', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: '20px' }}>
                {active === 'Data & Visualization' && 'Skilled in creating compelling visual narratives from complex datasets using industry-leading BI tools. Proficient in dashboard design, KPI monitoring, and data storytelling.'}
                {active === 'Programming' && 'Strong foundation in Python for data science workflows — from data wrangling with Pandas to building ML models with Scikit-learn. Solid SQL skills for complex query optimization.'}
                {active === 'Database' && 'Experience with both relational (MySQL, SQLite) and NoSQL (MongoDB) databases. Proficient in schema design, query optimization, and managing data pipelines.'}
                {active === 'Cloud & AI' && 'Hands-on AWS experience deploying EC2, S3, and IAM configurations. Applied deep learning CNNs for image classification with transfer learning techniques.'}
                {active === 'Tools' && 'Proficient with the modern data science toolkit — Jupyter Notebooks for analysis, Git for version control, and VS Code for development.'}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skills[active].map(s => (
                  <span key={s.name} className="tag">{skillIcons[s.name]} {s.name.split('(')[0].trim()}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* All skills chips */}
          <motion.div variants={fadeUp} style={{ marginTop: '50px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text3)', letterSpacing: '0.15em', marginBottom: '16px', textTransform: 'uppercase' }}>All Technologies</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {Object.values(skills).flat().map(s => (
                <span key={s.name} className="tag">{s.name.split('(')[0].trim()}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
