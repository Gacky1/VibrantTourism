import React from 'react';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <Helmet>
        <title>Our Services | Vibrant Tourism</title>
      </Helmet>
      <h1>Our Services</h1>
      <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        <div className="card" style={{ padding: '2rem', boxShadow: 'var(--shadow-sm)', borderRadius: '8px', background: '#fff' }}>
          <h3 style={{color: 'var(--color-primary)'}}>Affiliation Process</h3>
          <p>Streamlined process for training centers to get affiliated. We ensure quality standards and infrastructure compliance.</p>
          <button className="btn btn-secondary" style={{marginTop: '1rem', color: 'var(--color-primary)', borderColor: 'var(--color-primary)'}}>Learn More</button>
        </div>
        <div className="card" style={{ padding: '2rem', boxShadow: 'var(--shadow-sm)', borderRadius: '8px', background: '#fff' }}>
          <h3 style={{color: 'var(--color-primary)'}}>Apprenticeship Program</h3>
          <p>On-the-job training opportunities with industry leaders. Gain real-world experience while you learn.</p>
          <button className="btn btn-secondary" style={{marginTop: '1rem', color: 'var(--color-primary)', borderColor: 'var(--color-primary)'}}>Apply Now</button>
        </div>
        <div className="card" style={{ padding: '2rem', boxShadow: 'var(--shadow-sm)', borderRadius: '8px', background: '#fff' }}>
          <h3 style={{color: 'var(--color-primary)'}}>Assessment & Certification</h3>
          <p>Third-party assessment and government-recognized certification to validate your skills.</p>
          <button className="btn btn-secondary" style={{marginTop: '1rem', color: 'var(--color-primary)', borderColor: 'var(--color-primary)'}}>View Schedule</button>
        </div>
        <div className="card" style={{ padding: '2rem', boxShadow: 'var(--shadow-sm)', borderRadius: '8px', background: '#fff' }}>
          <h3 style={{color: 'var(--color-primary)'}}>Placements</h3>
          <p>Connecting certified candidates with employers. We organize job fairs and campus drives.</p>
          <button className="btn btn-secondary" style={{marginTop: '1rem', color: 'var(--color-primary)', borderColor: 'var(--color-primary)'}}>Job Portal</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
