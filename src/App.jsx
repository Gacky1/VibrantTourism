import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import EducationPage from './pages/EducationPage';
import SkillEducationPage from './pages/SkillEducationPage';
import UpskillingPage from './pages/UpskillingPage';
import ContactPage from './pages/ContactPage';
import MembershipPage from './pages/MembershipPage';
import EmploymentPage from './pages/EmploymentPage';
import MediaPage from './pages/MediaPage';
import ExploreTourism from './pages/ExploreTourism';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Loader from './components/ui/Loader';
import './styles/globals.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loader onComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout activeRoute="/">
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/destination"
          element={
            <MainLayout activeRoute="/destination">
              <DestinationPage />
            </MainLayout>
          }
        />
        <Route
          path="/education"
          element={
            <MainLayout activeRoute="/education">
              <EducationPage />
            </MainLayout>
          }
        />
        <Route
          path="/skill-education"
          element={
            <MainLayout activeRoute="/skill-education">
              <SkillEducationPage />
            </MainLayout>
          }
        />
        <Route
          path="/upskilling"
          element={
            <MainLayout activeRoute="/upskilling">
              <UpskillingPage />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout activeRoute="/contact">
              <ContactPage />
            </MainLayout>
          }
        />
        <Route
          path="/membership"
          element={
            <MainLayout activeRoute="/membership">
              <MembershipPage />
            </MainLayout>
          }
        />
        <Route
          path="/employment"
          element={
            <MainLayout activeRoute="/employment">
              <EmploymentPage />
            </MainLayout>
          }
        />
        <Route
          path="/media"
          element={
            <MainLayout activeRoute="/media">
              <MediaPage />
            </MainLayout>
          }
        />
        <Route
          path="/explore-tourism"
          element={
            <MainLayout activeRoute="/explore-tourism">
              <ExploreTourism />
            </MainLayout>
          }
        />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;