import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../styles/home.css';
import heroImage from '../assets/hero_tourism.png';

const Home = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>Home | Vibrant Tourism</title>
        <meta name="description" content="Vibrant Tourism - Skill development and placement organization for the Tourism and Hospitality sector." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <img src={heroImage} alt="Vibrant Tourism" className="hero-bg" />
        <div className="hero-overlay">
          <div className="container hero-content">
            <h1>Empowering the Future of Tourism</h1>
            <p>Bridging the gap between talent and opportunity in the hospitality sector.</p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">Explore Services</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-section container">
        <div className="stat-card">
          <h2>5000+</h2>
          <p>Students Trained</p>
        </div>
        <div className="stat-card">
          <h2>200+</h2>
          <p>Industry Partners</p>
        </div>
        <div className="stat-card">
          <h2>95%</h2>
          <p>Placement Rate</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>"Vibrant Tourism helped me launch my career as a chef in a 5-star hotel. The training was top-notch!"</p>
              <h4>- Rahul Sharma, Chef</h4>
            </div>
            <div className="testimonial-card">
              <p>"The placement support is incredible. I got placed immediately after certification."</p>
              <h4>- Priya Singh, Front Office</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Carousel (Simplified as grid for now) */}
      <section className="partners-section container">
        <h2 className="section-title">Our Partners</h2>
        <div className="partners-grid">
          <div className="partner-logo">Taj Hotels</div>
          <div className="partner-logo">Marriott</div>
          <div className="partner-logo">Oberoi Group</div>
          <div className="partner-logo">Hyatt</div>
        </div>
      </section>

      {/* Notifications */}
      <section className="notifications-section container">
        <h2 className="section-title">Important Notifications</h2>
        <ul className="notification-list">
          <li>📅 Assessment dates for Batch 25 announced.</li>
          <li>📢 New apprenticeship opportunities in Goa.</li>
          <li>🏆 Annual convocation ceremony on Dec 15th.</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
