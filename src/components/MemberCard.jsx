import { IoCheckmarkCircle } from 'react-icons/io5';

const MemberCard = ({ name, designation, image }) => {
  return (
    <div className="card p-6 flex flex-col items-center text-center group">
      <div className="relative mb-4">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-secondary transition-colors duration-200">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <IoCheckmarkCircle className="absolute -bottom-1 -right-1 w-5 h-5 text-secondary bg-white rounded-full" />
      </div>
      <h3 className="text-[15px] font-semibold text-gray-dark mb-1 group-hover:text-secondary transition-colors duration-150">
        {name}
      </h3>
      <p className="text-[11px] font-medium text-gray-mid uppercase tracking-wider">{designation}</p>
    </div>
  );
};

export default MemberCard;
