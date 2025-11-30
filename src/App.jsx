import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Partners from './pages/Partners';
import Services from './pages/Services';
import Media from './pages/Media';
import Demand from './pages/Demand';
import Contact from './pages/Contact';
import JobPortal from './pages/JobPortal';
import Resources from './pages/Resources';
import Events from './pages/Events';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about/*" element={<About />} />
        <Route path="partners/*" element={<Partners />} />
        <Route path="services" element={<Services />} />
        <Route path="media" element={<Media />} />
        <Route path="demand" element={<Demand />} />
        <Route path="contact" element={<Contact />} />
        <Route path="jobs" element={<JobPortal />} />
        <Route path="resources" element={<Resources />} />
        <Route path="events" element={<Events />} />
      </Route>
    </Routes>
  );
}

export default App;
