import * as IoIcons from 'react-icons/io5';

const InterestCard = ({ category, selected, onClick }) => {
  const Icon = IoIcons[category.icon] || IoIcons.IoCompassOutline;

  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-3xl text-left w-full transition-all duration-300 focus:outline-none cursor-pointer border ${
        selected
          ? 'border-blue-600 ring-4 ring-blue-500/10 shadow-lg shadow-blue-500/10 scale-[1.02]'
          : 'border-slate-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1'
      }`}
      style={{ aspectRatio: '4/3' }}
    >
      {/* Background image */}
      <img
        src={category.image}
        alt={category.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 select-none pointer-events-none"
        draggable="false"
      />

      {/* Dark gradient overlay for typography readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5 transition-opacity duration-300 group-hover:opacity-90" />

      {/* Selection Active Indicator (Top-Right Badge) */}
      {selected && (
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg border-2 border-white animate-scale-in">
          <IoIcons.IoCheckmarkOutline className="w-4 h-4 stroke-[3px]" />
        </div>
      )}

      {/* Content overlay */}
      <div className="absolute bottom-0 inset-x-0 p-5 z-10 flex flex-col gap-1.5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-white/12 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-transparent group-hover:text-white text-white">
            <Icon className="w-[17px] h-[17px]" />
          </div>
          <h3 className="text-white font-extrabold text-[15px] tracking-wide leading-tight drop-shadow-md uppercase">
            {category.title}
          </h3>
        </div>
        <p className="text-white/80 text-[11px] leading-relaxed font-semibold font-sans drop-shadow-sm pl-0.5">
          {category.subtitle}
        </p>
      </div>
    </button>
  );
};

export default InterestCard;
