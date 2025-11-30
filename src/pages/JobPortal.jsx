import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const jobsData = [
  { id: 1, title: 'Commis Chef', company: 'Taj Hotels', location: 'Mumbai', type: 'Full-time' },
  { id: 2, title: 'Front Office Associate', company: 'Marriott', location: 'Delhi', type: 'Full-time' },
  { id: 3, title: 'Housekeeping Supervisor', company: 'Oberoi', location: 'Bangalore', type: 'Full-time' },
  { id: 4, title: 'F&B Service Steward', company: 'Hyatt', location: 'Goa', type: 'Full-time' },
];

const JobPortal = () => {
  const [filter, setFilter] = useState('');
  
  const filteredJobs = jobsData.filter(job => 
    job.title.toLowerCase().includes(filter.toLowerCase()) || 
    job.location.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <Helmet>
        <title>Job Portal | Vibrant Tourism</title>
      </Helmet>
      <h1>Job Portal</h1>
      
      <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <input 
          type="text" 
          placeholder="Search jobs by title or location..." 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: '0.8rem', width: '100%', maxWidth: '500px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
      </div>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {filteredJobs.map(job => (
          <div key={job.id} style={{ padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ color: 'var(--color-primary)' }}>{job.title}</h3>
            <p><strong>{job.company}</strong> | {job.location}</p>
            <p style={{ color: '#666', marginTop: '0.5rem' }}>{job.type}</p>
            <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Apply Now</button>
          </div>
        ))}
        {filteredJobs.length === 0 && <p>No jobs found.</p>}
      </div>
    </div>
  );
};

export default JobPortal;
