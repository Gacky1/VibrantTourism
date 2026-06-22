import * as IoIcons from 'react-icons/io5';
import { IoArrowForwardOutline } from 'react-icons/io5';

const TourismCard = ({ title, subtitle, image, icon, onClick }) => {
  const IconComponent = IoIcons[icon] || IoIcons.IoCompassOutline;

  return (
    <div
      onClick={onClick}
      className="img-card group cursor-pointer"
      style={{ height: '320px' }}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="img-card-overlay" />

      {/* Content pinned to bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        {/* Icon + category */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <IconComponent className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-white/75 text-[11px] font-semibold uppercase tracking-wider">{subtitle}</span>
        </div>

        <h3 className="text-white text-[18px] font-bold leading-tight mb-3"
          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}>
          {title}
        </h3>

        <div className="flex items-center gap-1.5 text-[12px] font-semibold text-white/80
          group-hover:text-white group-hover:gap-3 transition-all duration-250">
          Explore
          <IoArrowForwardOutline className="w-3.5 h-3.5 transition-transform duration-250 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

export default TourismCard;
