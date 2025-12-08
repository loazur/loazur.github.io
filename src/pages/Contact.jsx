import { useState } from 'react';
import '../styles/Contact.css';
import emailIcon from '../assets/icons/icon-mail.png';
import linkedinIcon from '../assets/icons/icon-linkedin.png';
import githubIcon from '../assets/icons/icon-github.png';
import itchIcon from '../assets/icons/icon-itchio.webp';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact">
      <div className="contact-header">
        <h1>Me Contacter</h1>
        <p>Vous avez une question ou une opportunité ? N'hésitez pas à me contacter !</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <img src={emailIcon} alt="Email" />
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <a href="mailto:clement.bounaix@gmail.com">clement.bounaix@gmail.com</a>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <img src={linkedinIcon} alt="LinkedIn" />
            </div>
            <div className="info-content">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/clement-bounaix" target="_blank" rel="noopener noreferrer">Profil LinkedIn</a>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <img src={githubIcon} alt="GitHub" />
            </div>
            <div className="info-content">
              <h3>GitHub</h3>
              <a href="https://github.com/loazur" target="_blank" rel="noopener noreferrer">Profil GitHub</a>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <img src={itchIcon} alt="Itch.io" />
            </div>
            <div className="info-content">
              <h3>Itch.io</h3>
              <a href="https://loazur.itch.io" target="_blank" rel="noopener noreferrer">Profil Itch.io</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}
