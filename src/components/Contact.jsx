import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ text: '', ok: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please add a subject.';
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setStatus({ text: 'Please review the highlighted fields.', ok: false });
      return;
    }

    // Default mailto fallback
    const mailtoUrl = `mailto:dhanushrao388@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message + '\n\n— ' + formData.name + ' (' + formData.email + ')')}`;
    window.location.href = mailtoUrl;

    setStatus({ text: 'Opening your default email client…', ok: true });
  };

  return (
    <section id="contact">
      <div className="w">
        <span className="section-tag">07 — Contact</span>
        <h2 className="section-title reveal in">Have a Project or Role in Mind? Let’s Talk.</h2>
        <p className="section-desc reveal in">
          I’m open to internships, entry-level Cloud &amp; DevOps engineer opportunities, and technical collaboration.
        </p>

        <div className="contact-grid">
          {/* Interactive Form */}
          <form className="contact-form reveal in" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="form-name">Your Name</label>
              <input
                id="form-name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
              />
              <span className="form-error">{errors.name}</span>
            </div>

            <div className="form-group">
              <label htmlFor="form-email">Email Address</label>
              <input
                id="form-email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
              <span className="form-error">{errors.email}</span>
            </div>

            <div className="form-group">
              <label htmlFor="form-subject">Subject</label>
              <input
                id="form-subject"
                name="subject"
                placeholder="Cloud & DevOps Engineering Opportunity"
                value={formData.subject}
                onChange={handleChange}
              />
              <span className="form-error">{errors.subject}</span>
            </div>

            <div className="form-group">
              <label htmlFor="form-message">Message</label>
              <textarea
                id="form-message"
                name="message"
                rows="5"
                placeholder="Hi Dhanush, I came across your portfolio and would love to connect regarding..."
                value={formData.message}
                onChange={handleChange}
              />
              <span className="form-error">{errors.message}</span>
            </div>

            <button className="btn primary" type="submit" style={{ justifySelf: 'start' }}>
              Send Message
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <div className={`form-status ${status.ok ? 'ok' : ''}`} role="status" aria-live="polite">
              {status.text}
            </div>
          </form>

          {/* Direct Contact Cards */}
          <div className="contact-info-list reveal in">
            <a className="contact-info-card" href="mailto:dhanushrao388@gmail.com">
              <div className="contact-info-left">
                <div className="contact-info-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-title">Email</div>
                  <div className="contact-info-val">dhanushrao388@gmail.com</div>
                </div>
              </div>
              <span style={{ color: 'var(--accent)' }}>↗</span>
            </a>

            <a
              className="contact-info-card"
              href="https://linkedin.com/in/dugyaladhanush/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-info-left">
                <div className="contact-info-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-title">LinkedIn</div>
                  <div className="contact-info-val">in/dugyaladhanush</div>
                </div>
              </div>
              <span style={{ color: 'var(--accent)' }}>↗</span>
            </a>

            <a
              className="contact-info-card"
              href="https://github.com/Dhanush388"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-info-left">
                <div className="contact-info-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-title">GitHub</div>
                  <div className="contact-info-val">github.com/Dhanush388</div>
                </div>
              </div>
              <span style={{ color: 'var(--accent)' }}>↗</span>
            </a>

            <div className="contact-info-card">
              <div className="contact-info-left">
                <div className="contact-info-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-title">Location</div>
                  <div className="contact-info-val">Hyderabad, Telangana, India</div>
                </div>
              </div>
              <span style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>IST (UTC+5:30)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

