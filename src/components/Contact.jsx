import React, { useState } from 'react';
import { Mail, Phone, Globe, Share2, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {
      console.log(err);
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" style={{ background: 'var(--surface2)' }}>
      <div className="section-label">Let's Connect</div>
      <h2 className="section-title">
        Get In <em>Touch</em>
      </h2>

      <div className="contact-wrapper reveal">
        <div className="contact-info">
          <p>
            I'm actively seeking internships, full-time roles, and freelance opportunities. Whether you have a project, a position, or just want to connect — I'd love to hear from you.
          </p>

          <div className="contact-links">
            <a href={`mailto:${personalInfo.email}`} className="contact-link">
              <div className="contact-link-icon">
                <Mail size={18} />
              </div>
              <div>
                <div className="contact-link-label">Email</div>
                <div className="contact-link-value">{personalInfo.email}</div>
              </div>
            </a>

            <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="contact-link">
              <div className="contact-link-icon">
                <Phone size={18} />
              </div>
              <div>
                <div className="contact-link-label">Phone</div>
                <div className="contact-link-value">{personalInfo.phone}</div>
              </div>
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon">in</div>
              <div>
                <div className="contact-link-label">LinkedIn</div>
                <div className="contact-link-value">{personalInfo.linkedin}</div>
              </div>
            </a>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon">GH</div>
              <div>
                <div className="contact-link-label">GitHub</div>
                <div className="contact-link-value">{personalInfo.githubUrl.replace('https://', '')}</div>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', marginBottom: '1.5rem' }}>
            Send a Message
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                placeholder="Hi Thiru Karthik, I'd love to connect about..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="form-btn">
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      {submitted && (
        <div className="toast-notification">
          <CheckCircle2 size={20} />
          Thank you! Message logged. Please also email directly.
        </div>
      )}
    </section>
  );
}
