import { IoStarOutline, IoStar, IoLogoWhatsapp,
         IoBookmarkOutline, IoAddCircleOutline, IoCheckmarkCircle } from 'react-icons/io5';

const StarRating = ({ rating, name = '' }) => {
  const reviewsCount = name ? ((name.charCodeAt(0) + name.charCodeAt(name.length - 1)) * 3) % 120 + 45 : 75;
  return (
    <div className="flex items-center gap-1 mt-1">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          i <= Math.floor(rating)
            ? <IoStar        key={i} className="w-3.5 h-3.5 text-amber-400" />
            : <IoStarOutline key={i} className="w-3.5 h-3.5 text-slate-200"  />
        ))}
      </div>
      <span className="text-[11px] font-black text-slate-500 ml-1">{rating} <span className="text-slate-400 font-semibold">({reviewsCount} reviews)</span></span>
    </div>
  );
};

const ProviderCard = ({ provider, inCompare, onToggleCompare, onBook, onDetails }) => (
  <div className={`group bg-white rounded-3xl border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
    inCompare ? 'border-blue-600 shadow-md shadow-blue-500/5' : 'border-slate-150 shadow-sm'
  }`}>
    {/* Image container */}
    <div className="relative h-48 overflow-hidden">
      <img
        src={provider.image}
        alt={provider.name}
        className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-105 select-none pointer-events-none"
        draggable="false"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Price badge */}
      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-sm border border-slate-100">
        <span className="text-[12.5px] font-extrabold text-[#0A2540]">{provider.price}</span>
      </div>

      {/* Compare toggle */}
      <button
        onClick={() => onToggleCompare(provider)}
        className={`absolute top-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10.5px] font-extrabold uppercase tracking-wider transition-all duration-200 shadow-sm cursor-pointer ${
          inCompare
            ? 'bg-blue-600 text-white'
            : 'bg-white/95 text-slate-600 hover:bg-blue-600 hover:text-white border border-slate-100'
        }`}
      >
        {inCompare ? (
          <><IoCheckmarkCircle className="w-3.5 h-3.5" /> Added</>
        ) : (
          <><IoAddCircleOutline className="w-3.5 h-3.5" /> Compare</>
        )}
      </button>
    </div>

    {/* Info Body */}
    <div className="p-5 flex flex-col justify-between min-h-[220px]">
      <div>
        <h3 className="text-[16px] font-extrabold text-[#0A2540] mb-1 group-hover:text-blue-600 transition-colors duration-200 uppercase tracking-wide leading-tight">
          {provider.name}
        </h3>
        
        <StarRating rating={provider.rating} name={provider.name} />

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
          {provider.tags.map((t, i) => (
            <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-extrabold uppercase tracking-wide text-slate-500">
              {t}
            </span>
          ))}
        </div>

        <p className="text-[12.5px] text-slate-500 leading-relaxed mb-5 font-semibold line-clamp-2">{provider.description}</p>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => onBook(provider)}
          className="btn-primary flex-grow justify-center text-xs py-3 rounded-xl shadow-md cursor-pointer hover:bg-blue-700 transition-all"
        >
          <IoBookmarkOutline className="w-3.5 h-3.5" />
          Book Now
        </button>
        
        <a
          href={provider.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-11 h-11 rounded-xl border border-green-200 text-green-600 hover:bg-green-50 transition-colors duration-200"
          title="Chat on WhatsApp"
        >
          <IoLogoWhatsapp className="w-5 h-5" />
        </a>
        
        <button
          onClick={() => onDetails(provider)}
          className="px-4 h-11 rounded-xl border border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 text-xs font-black uppercase tracking-wider cursor-pointer"
        >
          Details
        </button>
      </div>
    </div>
  </div>
);
export default ProviderCard;
