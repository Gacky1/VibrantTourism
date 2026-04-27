import * as IoIcons from 'react-icons/io5';
import { IoArrowForwardOutline } from 'react-icons/io5';

const iconColorMap = {
  'from-purple-500 to-pink-500':   { bg: 'bg-purple-50',  text: 'text-purple-600',  hover: 'group-hover:bg-purple-600'  },
  'from-blue-500 to-cyan-500':     { bg: 'bg-blue-50',    text: 'text-blue-600',    hover: 'group-hover:bg-blue-600'    },
  'from-amber-500 to-orange-500':  { bg: 'bg-amber-50',   text: 'text-amber-600',   hover: 'group-hover:bg-amber-600'   },
  'from-green-500 to-emerald-500': { bg: 'bg-emerald-50', text: 'text-emerald-600', hover: 'group-hover:bg-emerald-600' },
  'from-yellow-500 to-orange-500': { bg: 'bg-orange-50',  text: 'text-orange-600',  hover: 'group-hover:bg-orange-600'  },
  'from-red-500 to-pink-500':      { bg: 'bg-red-50',     text: 'text-red-600',     hover: 'group-hover:bg-red-600'     },
  'from-teal-500 to-green-500':    { bg: 'bg-teal-50',    text: 'text-teal-600',    hover: 'group-hover:bg-teal-600'    },
  'from-indigo-500 to-purple-500': { bg: 'bg-indigo-50',  text: 'text-indigo-600',  hover: 'group-hover:bg-indigo-600'  },
  'from-gray-600 to-gray-800':     { bg: 'bg-slate-100',  text: 'text-slate-600',   hover: 'group-hover:bg-slate-600'   },
};

const TourismCard = ({ title, subtitle, image, icon, onClick, color = '' }) => {
  const IconComponent = IoIcons[icon] || IoIcons.IoCompassOutline;
  const { bg, text, hover } = iconColorMap[color] || { bg: 'bg-blue-50', text: 'text-secondary', hover: 'group-hover:bg-secondary' };

  return (
    <div
      onClick={onClick}
      className="card group cursor-pointer overflow-hidden flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden img-zoom">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* Gradient overlay — deepens on hover */}
        <div className="card-img-overlay" />
        {/* Category label on image */}
        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="text-white text-[11px] font-semibold bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
            {subtitle}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Animated accent bar */}
        <div className="h-0.5 w-8 bg-accent rounded-full mb-4 transition-all duration-400 group-hover:w-full group-hover:opacity-70" />

        <div className="flex items-start gap-3 mb-2">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${bg} ${text} ${hover} group-hover:text-white group-hover:shadow-md`}>
            <IconComponent className="w-4 h-4" />
          </div>
          <h3 className="text-[15px] font-semibold text-gray-dark leading-snug group-hover:text-secondary transition-colors duration-200">
            {title}
          </h3>
        </div>

        <div className="mt-auto pl-12 flex items-center gap-1 text-[12px] font-semibold text-secondary
          group-hover:gap-2.5 transition-all duration-200">
          Explore
          <IoArrowForwardOutline className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

export default TourismCard;
