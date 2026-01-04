import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import './styles/globals.css';

function App() {
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
        {/* Future routes */}
        <Route 
          path="/destination" 
          element={
            <MainLayout activeRoute="/destination">
              <div className="py-20 text-center">Destination Page - Coming Soon</div>
            </MainLayout>
          } 
        />
        <Route 
          path="/education" 
          element={
            <MainLayout activeRoute="/education">
              <div className="py-20 text-center">Education Page - Coming Soon</div>
            </MainLayout>
          } 
        />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;