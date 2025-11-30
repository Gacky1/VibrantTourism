import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Demand = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    requirements: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Demand Form Submitted:', formData);
    alert('Thank you! Your requirements have been submitted.');
    setFormData({ companyName: '', contactPerson: '', email: '', phone: '', requirements: '' });
  };

  return (
    <div className="container" style={{ padding: '2rem 0', maxWidth: '800px' }}>
      <Helmet>
        <title>Demand Aggregation | Vibrant Tourism</title>
      </Helmet>
      <h1>Demand Aggregation</h1>
      <p>Employers can submit their workforce requirements here.</p>
      
      <form onSubmit={handleSubmit} style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Company Name</label>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Contact Person</label>
                <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }} />
            </div>
            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }} />
            </div>
        </div>
        <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }} />
        </div>
        <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Requirements (Job Roles, Count, Location)</label>
            <textarea name="requirements" value={formData.requirements} onChange={handleChange} required rows="5" style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }}></textarea>
        </div>
        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Submit Requirements</button>
      </form>
    </div>
  );
};

export default Demand;
