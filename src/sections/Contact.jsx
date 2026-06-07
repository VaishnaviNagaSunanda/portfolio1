import { useState } from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" style={{ padding: '100px 0', background: 'var(--bg2)' }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="section-label">08. Contact</motion.p>
          <div className="accent-line" />
          <motion.h2 variants={fadeUp} style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            fontWeight: 800, marginBottom: '16px',
          }}>
            Let's <span style={{ color: 'var(--accent)' }}>Work Together</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ color: 'var(--text2)', maxWidth: '520px', marginBottom: '50px', fontSize: '0.95rem', lineHeight: 1.8 }}>
            I'm actively looking for data analyst and BI roles. If you have an opportunity or just want to say hello, feel free to reach out!
          </motion.p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'start' }}>
            {/* Contact info */}
            <motion.div variants={fadeUp}>
              {[
                { icon: '✉️', label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
                { icon: '📞', label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
                { icon: '📍', label: 'Location', value: personal.location, href: null },
                { icon: '💼', label: 'LinkedIn', value: 'vaishnavi-naga-sunanda-parasa', href: personal.linkedin },
                { icon: '⌨️', label: 'GitHub', value: 'VaishnaviNagaSunanda', href: personal.github },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '14px', marginBottom: '20px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '10px',
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text3)', letterSpacing: '0.1em', marginBottom: '3px', textTransform: 'uppercase' }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text)', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s ease' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ color: 'var(--text)', fontSize: '0.88rem' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Availability badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '10px 18px', marginTop: '12px',
                background: 'rgba(0,240,180,0.08)',
                border: '1px solid rgba(0,240,180,0.25)',
                borderRadius: '10px',
              }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', animation: 'pulse-ring 2s infinite' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.08em' }}>
                  Open to Opportunities
                </span>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div variants={fadeUp} className="card" style={{ padding: '32px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '24px' }}>Send a Message</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: 'name', placeholder: 'Your Name', type: 'text' },
                  { name: 'email', placeholder: 'Your Email', type: 'email' },
                ].map(field => (
                  <input key={field.name} type={field.type} name={field.name} placeholder={field.placeholder}
                    value={form[field.name]} onChange={handleChange} required
                    style={{
                      padding: '12px 16px',
                      background: 'var(--surface2)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      color: 'var(--text)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.88rem',
                      outline: 'none',
                      transition: 'border-color 0.25s ease',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(0,240,180,0.4)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                ))}
                <textarea name="message" placeholder="Your Message" rows={5}
                  value={form.message} onChange={handleChange} required
                  style={{
                    padding: '12px 16px',
                    background: 'var(--surface2)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    color: 'var(--text)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.25s ease',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(0,240,180,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
                <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                  {submitted ? '✓ Sent!' : '🚀 Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
