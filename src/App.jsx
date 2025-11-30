import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
import PageTransition from './components/PageTransition';
import Loader from './components/Loader';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      
      {!loading && (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
              <Route index element={<PageTransition><Home /></PageTransition>} />
              <Route path="about/*" element={<PageTransition><About /></PageTransition>} />
              <Route path="partners/*" element={<PageTransition><Partners /></PageTransition>} />
              <Route path="services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="media" element={<PageTransition><Media /></PageTransition>} />
              <Route path="demand" element={<PageTransition><Demand /></PageTransition>} />
              <Route path="contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="jobs" element={<PageTransition><JobPortal /></PageTransition>} />
              <Route path="resources" element={<PageTransition><Resources /></PageTransition>} />
              <Route path="events" element={<PageTransition><Events /></PageTransition>} />
            </Route>
          </Routes>
        </AnimatePresence>
      )}
    </>
  );
}

export default App;
