import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';

const allCategories = ['All', ...new Set(projects.map(p => p.category))];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const categoryColors = {
  'Full Stack': '#00f0b4',
  'AI / ML': '#a78bfa',
  'AI / Chatbot': '#60a5fa',
};

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="card"
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Top bar */}
      <div style={{
        height: '4px',
        background: categoryColors[project.category] || 'var(--accent)',
        width: '100%',
      }} />

      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
              color: categoryColors[project.category] || 'var(--accent)',
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
              {project.date}
            </span>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700,
              color: 'var(--text)', marginTop: '4px', lineHeight: 1.3,
            }}>
              {project.title}
            </h3>
          </div>
          <span style={{
            padding: '4px 10px', borderRadius: '999px', fontSize: '0.62rem',
            fontFamily: 'var(--font-mono)', letterSpacing: '0.08em',
            background: `${categoryColors[project.category]}20` || 'var(--accent-dim)',
            color: categoryColors[project.category] || 'var(--accent)',
            border: `1px solid ${categoryColors[project.category]}40` || 'var(--border)',
            flexShrink: 0, marginLeft: '8px', marginTop: '4px',
          }}>
            {project.category}
          </span>
        </div>

        <p style={{ color: 'var(--text2)', fontSize: '0.88rem', lineHeight: 1.75, flex: 1, marginBottom: '20px' }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {project.tech.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
              color: 'var(--text2)', textDecoration: 'none',
              padding: '7px 14px', border: '1px solid var(--border)',
              borderRadius: '6px', background: 'var(--surface2)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'rgba(0,240,180,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
          >
            ⌨️ GitHub
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                color: 'var(--accent)', textDecoration: 'none',
                padding: '7px 14px', border: '1px solid rgba(0,240,180,0.3)',
                borderRadius: '6px', background: 'var(--accent-dim)',
                transition: 'all 0.25s ease',
              }}
            >
              🔗 Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ padding: '100px 0' }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="section-label">03. Projects</motion.p>
          <div className="accent-line" />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
            <motion.h2 variants={fadeUp} style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800,
            }}>
              Featured <span style={{ color: 'var(--accent)' }}>Projects</span>
            </motion.h2>

            {/* Filter */}
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {allCategories.map(cat => (
                <button key={cat} onClick={() => setFilter(cat)} style={{
                  padding: '7px 14px', borderRadius: '8px', border: '1px solid',
                  borderColor: filter === cat ? 'var(--accent)' : 'var(--border)',
                  background: filter === cat ? 'var(--accent-dim)' : 'transparent',
                  color: filter === cat ? 'var(--accent)' : 'var(--text2)',
                  fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                  cursor: 'pointer', transition: 'all 0.25s ease', letterSpacing: '0.05em',
                }}>
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Cards grid */}
          <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
