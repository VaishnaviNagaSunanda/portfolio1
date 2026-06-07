import { personal } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '32px 0',
      textAlign: 'center',
    }}>
      <div className="container">
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '8px' }}>
          {personal.initials}
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text3)', letterSpacing: '0.1em', marginBottom: '20px' }}>
          PARASA VAISHNAVI NAGA SUNANDA
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {[
            { label: 'GitHub', href: personal.github },
            { label: 'LinkedIn', href: personal.linkedin },
            { label: 'Email', href: `mailto:${personal.email}` },
          ].map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text3)', textDecoration: 'none', letterSpacing: '0.08em', transition: 'color 0.25s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}
            >
              {link.label}
            </a>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text3)', letterSpacing: '0.1em' }}>
          © {new Date().getFullYear()} · Designed & Built with 💚
        </p>
      </div>
    </footer>
  );
}
