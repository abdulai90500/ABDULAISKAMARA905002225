"use client";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind? Feel free to reach out and let&apos;s work together.</p>
        </div>
        <div className="contact-grid">
          {/* Info */}
          <div>
            <h3 className="contact-info-title">Let&apos;s Talk</h3>
            <p className="contact-info-desc">
              If you want to contact me, feel free to reach out. Abdulai Development is the best choice for your digital needs.
            </p>
            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-info-icon"><i className="fas fa-map-marker-alt" /></div>
                <div className="contact-info-text"><span>Location</span>12b Water Street, Tombo, Sierra Leone</div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><i className="fas fa-phone" /></div>
                <div className="contact-info-text"><span>Phone</span>+232 99 096 245</div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><i className="fas fa-envelope" /></div>
                <div className="contact-info-text"><span>Email</span>abdulaiskamara4@gmail.com</div>
              </div>
            </div>
            <div className="contact-socials">
              {[
                { icon: "fab fa-facebook-f", href: "#" },
                { icon: "fab fa-instagram", href: "#" },
                { icon: "fab fa-twitter", href: "#" },
                { icon: "fab fa-linkedin-in", href: "#" },
                { icon: "fab fa-github", href: "#" },
              ].map((s) => (
                <a key={s.icon} href={s.href} className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>
          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className={`form-success${sent ? " show" : ""}`}>
              <i className="fas fa-check-circle" style={{ marginRight: 8 }} />
              Your message has been sent. Thank you!
            </div>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                className="form-input"
                type="text"
                placeholder="John Doe"
                required
                minLength={4}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Your Email</label>
              <input
                className="form-input"
                type="email"
                placeholder="john@example.com"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                className="form-input"
                type="text"
                placeholder="Project Inquiry"
                required
                minLength={4}
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                placeholder="Tell me about your project..."
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button type="submit" className="form-submit">
              <i className="fas fa-paper-plane" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
