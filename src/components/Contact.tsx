import { useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormState>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate async send
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-inner">
        {/* Left column */}
        <div className="contact-info">
          <p className="section-label">Let's talk</p>
          <h2 className="section-title">Get in touch</h2>
          <p className="section-subtitle">
            Have a project in mind, a question, or just want to say hi? My inbox
            is always open.
          </p>

          <div className="contact-meta">
            <div className="meta-item">
              <span className="meta-icon">📍</span>
              <span>Buenos Aires, Argentina</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">⏰</span>
              <span>GMT-3 · Available for freelance</span>
            </div>
          </div>
        </div>

        {/* Right column — form */}
        <div className="contact-form-wrap">
          {status === 'success' ? (
            <div className="success-msg">
              <span className="success-icon">✅</span>
              <h3>Message sent!</h3>
              <p>Thank you for reaching out. I'll get back to you soon.</p>
              <button
                onClick={() => setStatus('idle')}
                className="btn-reset"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <span className="spinner" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  'Send Message →'
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact-section {
          border-top: 1px solid var(--border);
        }

        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .contact-meta {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 32px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: var(--text-secondary);
        }

        .meta-icon {
          font-size: 16px;
        }

        /* Form */
        .contact-form-wrap {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 36px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        label {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          letter-spacing: 0.3px;
        }

        input,
        textarea {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 12px 16px;
          font-size: 14px;
          font-family: inherit;
          color: var(--text-primary);
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
          resize: vertical;
          width: 100%;
        }

        input::placeholder,
        textarea::placeholder {
          color: var(--text-muted);
        }

        input:focus,
        textarea:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }

        .btn-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 28px;
          background: var(--accent);
          color: #fff;
          border: none;
          border-radius: var(--radius-sm);
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s;
          letter-spacing: 0.3px;
        }

        .btn-submit:hover:not(:disabled) {
          background: var(--accent-dim);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(168, 85, 247, 0.3);
        }

        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .spinner {
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Success */
        .success-msg {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
          padding: 16px 0;
        }

        .success-icon {
          font-size: 40px;
        }

        .success-msg h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .success-msg p {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .btn-reset {
          margin-top: 8px;
          background: none;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          padding: 9px 22px;
          border-radius: var(--radius-sm);
          font-size: 13px;
          font-weight: 500;
          transition: border-color 0.2s, color 0.2s;
        }

        .btn-reset:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        @media (max-width: 768px) {
          .contact-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}
