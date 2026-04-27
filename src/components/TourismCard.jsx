import * as IoIcons from 'react-icons/io5';
import { IoArrowForwardOutline } from 'react-icons/io5';

// Map category color keys → single accent color for icon bg
const iconColorMap = {
  'from-purple-500 to-pink-500':   { bg: 'bg-purple-50',  text: 'text-purple-600' },
  'from-blue-500 to-cyan-500':     { bg: 'bg-blue-50',    text: 'text-blue-600'   },
  'from-amber-500 to-orange-500':  { bg: 'bg-amber-50',   text: 'text-amber-600'  },
  'from-green-500 to-emerald-500': { bg: 'bg-emerald-50', text: 'text-emerald-600'},
  'from-yellow-500 to-orange-500': { bg: 'bg-orange-50',  text: 'text-orange-600' },
  'from-red-500 to-pink-500':      { bg: 'bg-red-50',     text: 'text-red-600'    },
  'from-teal-500 to-green-500':    { bg: 'bg-teal-50',    text: 'text-teal-600'   },
  'from-indigo-500 to-purple-500': { bg: 'bg-indigo-50',  text: 'text-indigo-600' },
  'from-gray-600 to-gray-800':     { bg: 'bg-slate-100',  text: 'text-slate-600'  },
};

const TourismCard = ({ title, subtitle, image, icon, onClick, color = '' }) => {
  const IconComponent = IoIcons[icon] || IoIcons.IoCompassOutline;
  const { bg, text } = iconColorMap[color] || { bg: 'bg-blue-50', text: 'text-secondary' };

  return (
    <div
      onClick={onClick}
      className="card group cursor-pointer overflow-hidden flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden img-zoom">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Icon + title row */}
        <div className="flex items-start gap-3 mb-2">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${bg} ${text}`}>
            <IconComponent className="w-4.5 h-4.5" />
          </div>
          <h3 className="text-[15px] font-semibold text-gray-dark leading-snug group-hover:text-secondary transition-colors duration-150">
            {title}
          </h3>
        </div>

        {subtitle && (
          <p className="text-[13px] text-gray-mid leading-relaxed mb-4 pl-12">{subtitle}</p>
        )}

        <div className="mt-auto pl-12 flex items-center gap-1 text-[12px] font-semibold text-secondary group-hover:gap-2 transition-all duration-150">
          Explore
          <IoArrowForwardOutline className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

export default TourismCard;
