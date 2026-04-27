import * as IoIcons from 'react-icons/io5';

// Alternate between blue and gold icon boxes for visual rhythm
const boxStyles = [
  'icon-box',
  'icon-box-gold',
  'icon-box',
  'icon-box-gold',
];

const InfoCard = ({ title, description, icon, colorIndex = 0 }) => {
  const IconComponent = IoIcons[icon] || IoIcons.IoInformationCircleOutline;
  const boxClass = boxStyles[colorIndex % boxStyles.length];

  return (
    <div className="card p-6 flex flex-col h-full group">
      <div className={`${boxClass} mb-4`}>
        <IconComponent className="w-5 h-5" />
      </div>
      <h3 className="text-[15px] font-semibold text-gray-dark mb-2 group-hover:text-secondary transition-colors duration-150">
        {title}
      </h3>
      <p className="text-[13px] text-gray-mid leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

export default InfoCard;
