import { IoLocationOutline, IoCalendarOutline, IoArrowForwardOutline, IoCheckmarkOutline } from 'react-icons/io5';

const DestinationCard = ({ stateName, detail, selected, onClick }) => {
  const fallbackImg = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop';

  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-3xl text-left w-full transition-all duration-300 focus:outline-none cursor-pointer border bg-white ${
        selected
          ? 'border-blue-600 ring-4 ring-blue-500/10 shadow-lg shadow-blue-500/10 scale-[1.01]'
          : 'border-slate-150 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={detail?.image || fallbackImg}
          alt={stateName}
          className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-108 select-none pointer-events-none"
          draggable="false"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/5" />

        {/* Best time badge (frosted glass) */}
        {detail?.bestTime && (
          <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 shadow-sm">
            <IoCalendarOutline className="w-3.5 h-3.5 text-accent" />
            <span className="text-[10px] font-black text-white uppercase tracking-wider">{detail.bestTime}</span>
          </div>
        )}

        {/* Selected badge */}
        {selected && (
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center border-2 border-white shadow-lg animate-scale-in">
            <IoCheckmarkOutline className="w-4 h-4 stroke-[3px]" />
          </div>
        )}

        {/* State name overlay */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-600/90 text-white flex items-center justify-center border border-white/10">
            <IoLocationOutline className="w-4 h-4" />
          </div>
          <span className="text-white font-extrabold text-[16px] tracking-wide uppercase drop-shadow-sm">{stateName}</span>
        </div>
      </div>

      {/* Card Info Body */}
      <div className="p-5 bg-white flex flex-col justify-between min-h-[170px]">
        {detail?.description && (
          <p className="text-[12.5px] text-slate-500 leading-relaxed font-semibold mb-4 line-clamp-2">{detail.description}</p>
        )}
        
        {/* Highlight Tags */}
        {detail?.highlights && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {detail.highlights.slice(0, 3).map((h, i) => (
              <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-extrabold uppercase tracking-wide text-slate-500">
                {h}
              </span>
            ))}
          </div>
        )}

        {/* CTA Footer */}
        <div className={`flex items-center gap-1.5 text-[11.5px] font-extrabold uppercase tracking-widest transition-colors duration-200 mt-2 ${
          selected ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-600'
        }`}>
          {selected ? 'Selected' : 'Explore Destination'}
          <IoArrowForwardOutline className={`w-3.5 h-3.5 transition-transform duration-200 ${
            selected ? 'translate-x-0.5' : 'group-hover:translate-x-1'
          }`} />
        </div>
      </div>
    </button>
  );
};
export default DestinationCard;
