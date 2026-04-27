import { IoCheckmarkCircle } from 'react-icons/io5';

const MemberCard = ({ name, designation, image }) => {
  return (
    <div className="card p-6 flex flex-col items-center text-center group">
      <div className="relative mb-5">
        {/* Avatar with zoom + ring */}
        <div className="w-22 h-22 rounded-full overflow-hidden border-2 border-gray-200
          group-hover:border-secondary transition-all duration-300
          group-hover:shadow-[0_0_0_4px_rgba(37,99,235,0.12)]
          w-[88px] h-[88px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Verified badge */}
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm">
          <IoCheckmarkCircle className="w-5 h-5 text-secondary" />
        </div>
      </div>

      <h3 className="text-[15px] font-semibold text-gray-dark mb-1 group-hover:text-secondary transition-colors duration-200">
        {name}
      </h3>
      <p className="text-[11px] font-medium text-gray-mid uppercase tracking-wider">{designation}</p>

      {/* Animated underline */}
      <div className="h-0.5 w-0 bg-secondary/30 rounded-full mt-3 transition-all duration-400 group-hover:w-12" />
    </div>
  );
};

export default MemberCard;
