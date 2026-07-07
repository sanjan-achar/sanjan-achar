import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="section-title">Contact Information</h2>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-card glass">
            <h3 className="card-info-title">Let's connect</h3>
            <p className="card-info-desc">
              Have an exciting project, a role open, or simply want to discuss frontend integrations? Drop a message!
            </p>

            <div className="contact-details-list">
              <div className="detail-item">
                <div className="detail-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="detail-label">Email</h4>
                  <a href="mailto:acharsanjan@gmail.com" className="detail-value">acharsanjan@gmail.com</a>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="detail-label">Phone</h4>
                  <a href="tel:+917026543514" className="detail-value">+91 7026543514</a>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="detail-label">Location</h4>
                  <p className="detail-value">Bangalore, KA, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="contact-form-card glass">
            {isSuccess ? (
              <div className="success-state">
                <CheckCircle2 size={64} className="success-icon" />
                <h3 className="success-title">Message Sent!</h3>
                <p className="success-desc">
                  Thank you for reaching out. Sanjan will respond to your message at your email shortly.
                </p>
                <button onClick={() => setIsSuccess(false)} className="btn btn-primary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Collaboration Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary submit-btn"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-primary);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: 40px;
          margin-top: 20px;
        }
        .contact-info-card {
          padding: 40px;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--card-shadow);
          display: flex;
          flex-direction: column;
        }
        .card-info-title {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
        }
        .card-info-desc {
          font-size: 15px;
          color: var(--text-tertiary);
          line-height: 1.6;
          margin-bottom: 40px;
        }
        .contact-details-list {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .detail-item {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .detail-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--border-radius-md);
          background: rgba(var(--primary-rgb), 0.08);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .detail-label {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-tertiary);
          font-weight: 600;
          margin-bottom: 2px;
        }
        .detail-value {
          font-size: 16px;
          color: var(--text-primary);
          font-weight: 600;
          transition: var(--transition-fast);
        }
        a.detail-value:hover {
          color: var(--primary);
        }
        .contact-form-card {
          padding: 40px;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--card-shadow);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-row {
          display: flex;
          gap: 20px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-grow: 1;
        }
        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
        }
        .form-input {
          padding: 14px 18px;
          font-size: 15px;
          font-family: var(--font-sans);
          border-radius: var(--border-radius-md);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          transition: var(--transition-fast);
          width: 100%;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--primary);
          background: var(--bg-secondary);
          box-shadow: 0 0 10px rgba(var(--primary-rgb), 0.15);
        }
        .form-textarea {
          resize: vertical;
        }
        .submit-btn {
          align-self: flex-start;
          width: auto;
          margin-top: 10px;
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px 0;
          animation: fadeInUp 0.4s ease-out;
        }
        .success-icon {
          color: var(--secondary);
          margin-bottom: 20px;
        }
        .success-title {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        .success-desc {
          font-size: 15px;
          color: var(--text-secondary);
          max-width: 320px;
          margin-bottom: 24px;
          line-height: 1.5;
        }
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .contact-info-card, .contact-form-card {
            padding: 30px;
          }
        }
        @media (max-width: 576px) {
          .form-row {
            flex-direction: column;
            gap: 20px;
          }
          .submit-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
