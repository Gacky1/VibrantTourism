import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Team = () => (
  <div>
    <h2>Our Team</h2>
    <p>Meet the dedicated professionals behind Vibrant Tourism.</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
            <div style={{ width: '150px', height: '150px', background: '#ddd', borderRadius: '50%', margin: '0 auto 1rem' }}></div>
            <h4>John Doe</h4>
            <p>CEO</p>
        </div>
        <div style={{ textAlign: 'center' }}>
            <div style={{ width: '150px', height: '150px', background: '#ddd', borderRadius: '50%', margin: '0 auto 1rem' }}></div>
            <h4>Jane Smith</h4>
            <p>Director of Operations</p>
        </div>
    </div>
  </div>
);

const Vision = () => (
  <div>
    <h2>Vision & Mission</h2>
    <div style={{ background: '#f9f9f9', padding: '2rem', borderRadius: '8px', marginTop: '1rem' }}>
        <h3 style={{ color: 'var(--color-secondary)' }}>Vision</h3>
        <p>To be the leading skill development organization in the tourism sector, creating a world-class workforce.</p>
        <h3 style={{ color: 'var(--color-secondary)', marginTop: '1.5rem' }}>Mission</h3>
        <p>To empower youth with employable skills, foster industry partnerships, and ensure quality standards in vocational training.</p>
    </div>
  </div>
);

const Stakeholders = () => (
  <div>
    <h2>Stakeholders</h2>
    <p>Our ecosystem includes students, training partners, industry partners, and government bodies.</p>
    <ul style={{ listStyle: 'disc', paddingLeft: '2rem', marginTop: '1rem' }}>
        <li><strong>Students:</strong> The core of our mission.</li>
        <li><strong>Training Partners:</strong> Delivering quality education.</li>
        <li><strong>Industry Partners:</strong> Providing employment opportunities.</li>
        <li><strong>Assessors:</strong> Ensuring standards and certification.</li>
    </ul>
  </div>
);

const About = () => {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <Helmet>
        <title>About Us | Vibrant Tourism</title>
      </Helmet>
      <h1>About Us</h1>
      <div className="about-nav" style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link to="team" className="btn btn-secondary" style={{color: 'var(--color-primary)', borderColor: 'var(--color-primary)'}}>Our Team</Link>
        <Link to="vision" className="btn btn-secondary" style={{color: 'var(--color-primary)', borderColor: 'var(--color-primary)'}}>Vision & Mission</Link>
        <Link to="stakeholders" className="btn btn-secondary" style={{color: 'var(--color-primary)', borderColor: 'var(--color-primary)'}}>Stakeholders</Link>
        <Link to="general-body" className="btn btn-secondary" style={{color: 'var(--color-primary)', borderColor: 'var(--color-primary)'}}>General Body</Link>
      </div>
      
      <Routes>
        <Route path="team" element={<Team />} />
        <Route path="vision" element={<Vision />} />
        <Route path="stakeholders" element={<Stakeholders />} />
        <Route path="general-body" element={<div><h2>General Body</h2><p>Organization structure and governing council details.</p></div>} />
        <Route index element={<Vision />} />
      </Routes>
    </div>
  );
};

export default About;
