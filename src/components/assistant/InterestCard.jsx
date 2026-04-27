import * as IoIcons from 'react-icons/io5';

const InterestCard = ({ category, selected, onClick }) => {
  const Icon = IoIcons[category.icon] || IoIcons.IoCompassOutline;

  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl text-left w-full transition-all duration-300 focus:outline-none ${
        selected
          ? 'ring-3 ring-secondary shadow-lg shadow-blue-100 scale-[1.02]'
          : 'hover:shadow-lg hover:-translate-y-1'
      }`}
      style={{ aspectRatio: '4/3' }}
    >
      {/* Background image */}
      <img
        src={category.image}
        alt={category.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* Selected indicator */}
      {selected && (
        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-secondary flex items-center justify-center shadow-md">
          <IoIcons.IoCheckmarkOutline className="w-4 h-4 text-white" />
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Icon className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-white font-bold text-[14px] leading-tight">{category.title}</h3>
        </div>
        <p className="text-white/75 text-[11px] leading-snug">{category.subtitle}</p>
      </div>
    </button>
  );
};

export default InterestCard;
