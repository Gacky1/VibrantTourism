import { useState, useEffect } from 'react';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onComplete && onComplete(), 500);
          }, 800);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent-300/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-ping"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo Container */}
        <div className="mb-8 transform transition-all duration-1000 ease-out">
          <div className="relative">
            <img 
              src="/images/Logo-Transparent.png" 
              alt="Vibrant Tourism" 
              className="h-32 md:h-40 lg:h-48 w-auto mx-auto drop-shadow-2xl animate-pulse"
            />
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 animate-fade-in">
            Welcome to Vibrant Tourism
          </h2>
          <p className="text-white/80 text-lg animate-fade-in-delay">
            Preparing your journey...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-sm mx-auto">
          <div className="bg-white/20 rounded-full h-2 mb-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-white to-accent-200 h-full rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <div className="text-white/90 text-sm font-medium">
            {Math.round(Math.min(progress, 100))}%
          </div>
        </div>

        {/* Floating Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default Loader;