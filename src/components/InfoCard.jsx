import * as IoIcons from 'react-icons/io5';

const boxStyles = ['icon-box', 'icon-box-gold', 'icon-box', 'icon-box-gold'];

const InfoCard = ({ title, description, icon, colorIndex = 0 }) => {
  const IconComponent = IoIcons[icon] || IoIcons.IoInformationCircleOutline;
  const boxClass = boxStyles[colorIndex % boxStyles.length];
  const isGold = boxClass === 'icon-box-gold';

  return (
    <div className="card p-6 flex flex-col h-full group">
      {/* Icon — lifts and changes bg on hover */}
      <div className={`${boxClass} mb-5 group-hover:scale-110 group-hover:shadow-md
        ${isGold ? 'group-hover:bg-amber-500 group-hover:text-white' : 'group-hover:bg-secondary group-hover:text-white'}
        transition-all duration-250`}>
        <IconComponent className="w-5 h-5" />
      </div>

      <h3 className="text-[15px] font-semibold text-gray-dark mb-2 group-hover:text-secondary transition-colors duration-200">
        {title}
      </h3>

      <p className="text-[13px] text-gray-mid leading-relaxed flex-grow">{description}</p>

      {/* Animated bottom accent */}
      <div className={`h-0.5 w-0 rounded-full mt-4 transition-all duration-500 group-hover:w-full
        ${isGold ? 'bg-amber-400' : 'bg-secondary/30'}`} />
    </div>
  );
};

export default InfoCard;
