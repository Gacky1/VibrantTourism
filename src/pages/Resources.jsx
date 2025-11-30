import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaFilePdf, FaVideo } from 'react-icons/fa';

const Resources = () => {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <Helmet>
        <title>Resource Center | Vibrant Tourism</title>
      </Helmet>
      <h1>Resource Download Center</h1>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Chef / Culinary Arts</h2>
        <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
            <li style={{ padding: '0.8rem 0', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaFilePdf style={{ color: 'red' }} /> <a href="#">Qualification Pack - Commis Chef</a>
            </li>
            <li style={{ padding: '0.8rem 0', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaFilePdf style={{ color: 'red' }} /> <a href="#">Model Curriculum - Level 4</a>
            </li>
            <li style={{ padding: '0.8rem 0', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaVideo style={{ color: 'blue' }} /> <a href="#">Knife Skills Demo Video</a>
            </li>
        </ul>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2>Front Office</h2>
        <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
            <li style={{ padding: '0.8rem 0', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaFilePdf style={{ color: 'red' }} /> <a href="#">Student Handbook - Front Office Associate</a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
