import React from 'react';
import { Helmet } from 'react-helmet-async';

const Events = () => {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <Helmet>
        <title>Events & Calendar | Vibrant Tourism</title>
      </Helmet>
      <h1>Events & Calendar</h1>
      
      <div style={{ marginTop: '2rem', display: 'grid', gap: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px' }}>
            <div style={{ background: 'var(--color-secondary)', color: '#fff', padding: '1rem', borderRadius: '8px', textAlign: 'center', minWidth: '80px' }}>
                <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 'bold' }}>15</span>
                <span>DEC</span>
            </div>
            <div>
                <h3 style={{ color: 'var(--color-primary)' }}>Annual Convocation Ceremony</h3>
                <p>New Delhi Campus</p>
                <p style={{ marginTop: '0.5rem' }}>Celebrating the success of our graduating batch.</p>
            </div>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px' }}>
            <div style={{ background: 'var(--color-secondary)', color: '#fff', padding: '1rem', borderRadius: '8px', textAlign: 'center', minWidth: '80px' }}>
                <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 'bold' }}>20</span>
                <span>JAN</span>
            </div>
            <div>
                <h3 style={{ color: 'var(--color-primary)' }}>Training of Trainers (TOT)</h3>
                <p>Mumbai Center</p>
                <p style={{ marginTop: '0.5rem' }}>Workshop for new trainers in the hospitality sector.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
