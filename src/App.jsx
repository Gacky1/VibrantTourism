import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import EducationPage from './pages/EducationPage';
import SkillEducationPage from './pages/SkillEducationPage';
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
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;