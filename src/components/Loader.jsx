import { motion } from 'framer-motion';

export default function Loader({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onComplete}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'var(--bg)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '20px',
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)' }}
      >
        PVNS.
      </motion.div>

      {/* Loading bar */}
      <div style={{ width: '160px', height: '2px', background: 'var(--surface2)', borderRadius: '1px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
          onAnimationComplete={onComplete}
          style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent2), var(--accent))', borderRadius: '1px' }}
        />
      </div>

      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.2em' }}>
        LOADING PORTFOLIO...
      </p>
    </motion.div>
  );
}
