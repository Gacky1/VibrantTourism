import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import IndustryPage from './pages/IndustryPage';
import DestinationPage from './pages/DestinationPage';
import EducationPage from './pages/EducationPage';
import SkillEducationPage from './pages/SkillEducationPage';
import UpskillingPage from './pages/UpskillingPage';
import EmploymentPage from './pages/EmploymentPage';
import MembershipPage from './pages/MembershipPage';
import MediaPage from './pages/MediaPage';
import ContactPage from './pages/ContactPage';

function App() {
  const currentPath = window.location.pathname;

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar activeRoute={currentPath} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destination" element={<DestinationPage />} />
            <Route path="/industry" element={<IndustryPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/skill-education" element={<SkillEducationPage />} />
            <Route path="/upskilling" element={<UpskillingPage />} />
            <Route path="/employment" element={<EmploymentPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
