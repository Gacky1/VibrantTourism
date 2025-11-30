import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', formData);
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <Helmet>
        <title>Contact Us | Vibrant Tourism</title>
      </Helmet>
      <h1>Contact Us</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '2rem' }}>
        <div>
            <h2>Get in Touch</h2>
            <ul style={{ listStyle: 'none', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <FaMapMarkerAlt style={{ color: 'var(--color-secondary)', fontSize: '1.5rem' }} />
                    <div>
                        <strong>Address:</strong><br />
                        123 Tourism Plaza, Connaught Place,<br />New Delhi, India - 110001
                    </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <FaPhone style={{ color: 'var(--color-secondary)', fontSize: '1.5rem' }} />
                    <div>
                        <strong>Phone:</strong><br />
                        +91 98765 43210
                    </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <FaEnvelope style={{ color: 'var(--color-secondary)', fontSize: '1.5rem' }} />
                    <div>
                        <strong>Email:</strong><br />
                        info@vibranttourism.com
                    </div>
                </li>
            </ul>
            
            <div style={{ marginTop: '2rem', height: '300px', background: '#eee', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: '#888' }}>Google Maps Embed Placeholder</p>
            </div>
        </div>

        <div>
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Subject</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
