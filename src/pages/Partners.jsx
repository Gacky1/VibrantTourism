import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Industry = () => (
  <div>
    <h2>Industry Partners</h2>
    <p>Leading hotels and tourism boards collaborating with us.</p>
    <div className="partners-grid" style={{ marginTop: '2rem' }}>
      <div className="partner-logo">Taj Hotels</div>
      <div className="partner-logo">Marriott International</div>
      <div className="partner-logo">ITC Hotels</div>
      <div className="partner-logo">Radisson</div>
    </div>
    <div style={{marginTop: '3rem', background: '#f4f7fa', padding: '2rem', borderRadius: '8px'}}>
      <h3>Become an Industry Partner</h3>
      <p>Join us in shaping the future workforce.</p>
      <button className="btn btn-primary" style={{marginTop: '1rem'}}>Affiliation Form</button>
    </div>
  </div>
);

const Training = () => (
  <div>
    <h2>Training Partners</h2>
    <p>Authorized training centers across the country.</p>
    <div style={{marginTop: '2rem'}}>
        <input type="text" placeholder="Search Training Partners..." style={{padding: '0.5rem', width: '100%', maxWidth: '400px', borderRadius: '4px', border: '1px solid #ddd'}} />
    </div>
    <div style={{marginTop: '3rem', background: '#f4f7fa', padding: '2rem', borderRadius: '8px'}}>
      <h3>Become a Training Partner</h3>
      <p>Apply to become an authorized training center.</p>
      <button className="btn btn-primary" style={{marginTop: '1rem'}}>Affiliation Form</button>
    </div>
  </div>
);

const Partners = () => {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <Helmet>
        <title>Our Partners | Vibrant Tourism</title>
      </Helmet>
      <h1>Our Partners</h1>
      <div className="about-nav" style={{ marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
        <Link to="industry" className="btn btn-secondary" style={{color: 'var(--color-primary)', borderColor: 'var(--color-primary)'}}>Industry Partners</Link>
        <Link to="training" className="btn btn-secondary" style={{color: 'var(--color-primary)', borderColor: 'var(--color-primary)'}}>Training Partners</Link>
      </div>
      
      <Routes>
        <Route path="industry" element={<Industry />} />
        <Route path="training" element={<Training />} />
        <Route index element={<Industry />} />
      </Routes>
    </div>
  );
};

export default Partners;
