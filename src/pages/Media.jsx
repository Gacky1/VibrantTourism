import React from 'react';
import { Helmet } from 'react-helmet-async';

const Media = () => {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <Helmet>
        <title>Media Center | Vibrant Tourism</title>
      </Helmet>
      <h1>Media Center</h1>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>News & Press Releases</h2>
        <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ padding: '1rem', border: '1px solid #eee', borderRadius: '8px' }}>
                <h4>Vibrant Tourism wins National Award</h4>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>Nov 20, 2025</p>
                <p>We are proud to announce that we have been recognized as the Best Skill Development Center.</p>
            </div>
            <div style={{ padding: '1rem', border: '1px solid #eee', borderRadius: '8px' }}>
                <h4>New Center opened in Jaipur</h4>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>Oct 15, 2025</p>
                <p>Expanding our footprint to the Pink City to train more youth.</p>
            </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Photo Gallery</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ height: '150px', background: '#ddd', borderRadius: '8px' }}></div>
            <div style={{ height: '150px', background: '#ddd', borderRadius: '8px' }}></div>
            <div style={{ height: '150px', background: '#ddd', borderRadius: '8px' }}></div>
            <div style={{ height: '150px', background: '#ddd', borderRadius: '8px' }}></div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Newsletter Downloads</h2>
        <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}><a href="#" style={{ color: 'var(--color-primary)' }}>📄 October 2025 Newsletter</a></li>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}><a href="#" style={{ color: 'var(--color-primary)' }}>📄 September 2025 Newsletter</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Media;
