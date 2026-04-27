import { IoLocationOutline, IoCalendarOutline, IoArrowForwardOutline } from 'react-icons/io5';

const DestinationCard = ({ stateName, detail, selected, onClick }) => {
  const fallbackImg = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop';

  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl text-left w-full transition-all duration-300 focus:outline-none ${
        selected
          ? 'ring-3 ring-secondary shadow-lg shadow-blue-100'
          : 'hover:shadow-lg hover:-translate-y-1'
      }`}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={detail?.image || fallbackImg}
          alt={stateName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Best time badge */}
        {detail?.bestTime && (
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1">
            <IoCalendarOutline className="w-3 h-3 text-secondary" />
            <span className="text-[10px] font-semibold text-gray-dark">{detail.bestTime}</span>
          </div>
        )}

        {/* Selected check */}
        {selected && (
          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-secondary flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}

        {/* State name on image */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
          <IoLocationOutline className="w-4 h-4 text-white" />
          <span className="text-white font-bold text-[15px]">{stateName}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 bg-white border border-gray-100 rounded-b-2xl">
        {detail?.description && (
          <p className="text-[12px] text-gray-mid leading-relaxed mb-3 line-clamp-2">{detail.description}</p>
        )}
        {detail?.highlights && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {detail.highlights.slice(0, 3).map((h, i) => (
              <span key={i} className="tag">{h}</span>
            ))}
          </div>
        )}
        <div className={`flex items-center gap-1 text-[12px] font-semibold transition-colors duration-150 ${
          selected ? 'text-secondary' : 'text-gray-mid group-hover:text-secondary'
        }`}>
          {selected ? 'Selected' : 'Explore'}
          <IoArrowForwardOutline className="w-3.5 h-3.5" />
        </div>
      </div>
    </button>
  );
};

export default DestinationCard;
