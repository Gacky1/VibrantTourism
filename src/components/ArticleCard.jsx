import { IoArrowForwardOutline, IoCalendarOutline } from 'react-icons/io5';

const ArticleCard = ({ title, date, excerpt, image, onClick }) => {
  return (
    <div className="card group overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 overflow-hidden img-zoom">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-1.5 text-[11px] text-gray-mid mb-3">
          <IoCalendarOutline className="w-3.5 h-3.5 text-secondary" />
          {date}
        </div>

        <h3 className="text-[15px] font-semibold text-gray-dark leading-snug mb-2 group-hover:text-secondary transition-colors duration-150">
          {title}
        </h3>
        <p className="text-[13px] text-gray-mid leading-relaxed mb-4 flex-grow">{excerpt}</p>

        <button
          onClick={onClick}
          className="flex items-center gap-1 text-[12px] font-semibold text-secondary hover:gap-2 transition-all duration-150"
        >
          Read Article
          <IoArrowForwardOutline className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
