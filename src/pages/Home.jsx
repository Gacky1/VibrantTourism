import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import '../styles/home.css';
import heroImage from '../assets/hero_tourism.png';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>Home | Vibrant Tourism</title>
        <meta name="description" content="Vibrant Tourism - Skill development and placement organization for the Tourism and Hospitality sector." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <motion.img 
          src={heroImage} 
          alt="Vibrant Tourism" 
          className="hero-bg" 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="hero-overlay">
          <div className="container hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Empowering the Future of Tourism
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Bridging the gap between talent and opportunity in the hospitality sector.
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/services" className="btn btn-primary">Explore Services</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <ScrollReveal>
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
      </ScrollReveal>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Success Stories</h2>
          </ScrollReveal>
          <div className="testimonial-grid">
            <ScrollReveal delay={0.2}>
              <div className="testimonial-card">
                <p>"Vibrant Tourism helped me launch my career as a chef in a 5-star hotel. The training was top-notch!"</p>
                <h4>- Rahul Sharma, Chef</h4>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="testimonial-card">
                <p>"The placement support is incredible. I got placed immediately after certification."</p>
                <h4>- Priya Singh, Front Office</h4>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Partners Carousel (Simplified as grid for now) */}
      <section className="partners-section container">
        <ScrollReveal>
          <h2 className="section-title">Our Partners</h2>
        </ScrollReveal>
        <div className="partners-grid">
          <ScrollReveal delay={0.1}><div className="partner-logo">Taj Hotels</div></ScrollReveal>
          <ScrollReveal delay={0.2}><div className="partner-logo">Marriott</div></ScrollReveal>
          <ScrollReveal delay={0.3}><div className="partner-logo">Oberoi Group</div></ScrollReveal>
          <ScrollReveal delay={0.4}><div className="partner-logo">Hyatt</div></ScrollReveal>
        </div>
      </section>

      {/* Notifications */}
      <ScrollReveal>
        <section className="notifications-section container">
          <h2 className="section-title">Important Notifications</h2>
          <ul className="notification-list">
            <li>📅 Assessment dates for Batch 25 announced.</li>
            <li>📢 New apprenticeship opportunities in Goa.</li>
            <li>🏆 Annual convocation ceremony on Dec 15th.</li>
          </ul>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Home;
