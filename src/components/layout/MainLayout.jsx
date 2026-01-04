import Navbar from './Navbar';
import Footer from './Footer';
import { navigationMenu } from '../../data/mockData';

const MainLayout = ({ children, activeRoute = '/' }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar menuItems={navigationMenu} activeRoute={activeRoute} />
      
      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;