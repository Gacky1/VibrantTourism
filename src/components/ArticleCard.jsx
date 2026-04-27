import { IoArrowForwardOutline, IoCalendarOutline } from 'react-icons/io5';

const ArticleCard = ({ title, date, excerpt, image, onClick }) => {
  return (
    <div className="card group overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div className="relative h-52 overflow-hidden img-zoom">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="card-img-overlay" />
        {/* Date pill on image */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm
            text-[11px] font-semibold text-gray-dark px-2.5 py-1 rounded-full shadow-sm">
            <IoCalendarOutline className="w-3 h-3 text-secondary" />
            {date}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Accent bar */}
        <div className="h-0.5 w-8 bg-accent rounded-full mb-3 transition-all duration-400 group-hover:w-14" />

        <h3 className="text-[15px] font-semibold text-gray-dark leading-snug mb-2
          group-hover:text-secondary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-[13px] text-gray-mid leading-relaxed mb-4 flex-grow">{excerpt}</p>

        <button
          onClick={onClick}
          className="flex items-center gap-1.5 text-[12px] font-semibold text-secondary
            hover:gap-3 transition-all duration-200 w-fit"
        >
          Read Article
          <IoArrowForwardOutline className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
