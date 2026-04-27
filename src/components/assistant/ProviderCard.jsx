import { IoStarOutline, IoStar, IoLogoWhatsapp,
         IoBookmarkOutline, IoAddCircleOutline, IoCheckmarkCircle } from 'react-icons/io5';

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map(i => (
      i <= Math.floor(rating)
        ? <IoStar        key={i} className="w-3.5 h-3.5 text-amber-400" />
        : <IoStarOutline key={i} className="w-3.5 h-3.5 text-gray-300"  />
    ))}
    <span className="text-[11px] font-semibold text-gray-mid ml-1">{rating} ({Math.floor(Math.random() * 100 + 50)})</span>
  </div>
);

const ProviderCard = ({ provider, inCompare, onToggleCompare, onBook, onDetails }) => (
  <div className={`group bg-white rounded-2xl border overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${
    inCompare ? 'border-secondary shadow-md shadow-blue-50' : 'border-gray-200 shadow-sm'
  }`}>
    {/* Image */}
    <div className="relative h-44 overflow-hidden">
      <img
        src={provider.image}
        alt={provider.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Price badge */}
      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-2.5 py-1 shadow-sm">
        <span className="text-[12px] font-bold text-gray-dark">{provider.price}</span>
      </div>

      {/* Compare toggle */}
      <button
        onClick={() => onToggleCompare(provider)}
        className={`absolute top-3 left-3 flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold transition-all duration-150 ${
          inCompare
            ? 'bg-secondary text-white'
            : 'bg-white/90 text-gray-mid hover:bg-secondary hover:text-white'
        }`}
      >
        {inCompare
          ? <><IoCheckmarkCircle className="w-3.5 h-3.5" /> Added</>
          : <><IoAddCircleOutline className="w-3.5 h-3.5" /> Compare</>
        }
      </button>
    </div>

    {/* Body */}
    <div className="p-4">
      <h3 className="text-[15px] font-bold text-gray-dark mb-1 group-hover:text-secondary transition-colors duration-150">
        {provider.name}
      </h3>
      <StarRating rating={provider.rating} />

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-2.5 mb-3">
        {provider.tags.map((t, i) => (
          <span key={i} className="tag">{t}</span>
        ))}
      </div>

      <p className="text-[12px] text-gray-mid leading-relaxed mb-4 line-clamp-2">{provider.description}</p>

      {/* CTAs */}
      <div className="flex gap-2">
        <button
          onClick={() => onBook(provider)}
          className="btn-primary flex-1 justify-center text-xs py-2"
        >
          <IoBookmarkOutline className="w-3.5 h-3.5" />
          Book Now
        </button>
        <a
          href={provider.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-green-300 text-green-600 hover:bg-green-50 transition-colors duration-150 text-xs font-semibold"
        >
          <IoLogoWhatsapp className="w-4 h-4" />
        </a>
        <button
          onClick={() => onDetails(provider)}
          className="px-3 py-2 rounded-lg border border-gray-200 text-gray-mid hover:border-secondary hover:text-secondary transition-colors duration-150 text-xs font-semibold"
        >
          Details
        </button>
      </div>
    </div>
  </div>
);

export default ProviderCard;
