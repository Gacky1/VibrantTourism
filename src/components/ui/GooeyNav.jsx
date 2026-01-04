import React from 'react';

const GooeyNav = ({ 
  items, 
  particleCount, 
  particleDistances, 
  particleR, 
  initialActiveIndex, 
  animationTime, 
  timeVariance, 
  colors 
}) => {
  return (
    <nav className="gooey-nav">
      <div className="nav-items">
        {items.map((item, index) => (
          <a key={index} href={item.href} className="nav-item">
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default GooeyNav;