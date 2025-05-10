import React from "react";

interface TechCardProps {
  name: string; // Name of the technology
  iconSrc: string; // URL or path to the icon
}

const TechCard: React.FC<TechCardProps> = ({ name, iconSrc }) => {
  return (
    <div className="flex items-center gap-3 rounded-lg shadow-sm bg-white p-2 md:p-3">
      <div className="w-6 h-6">
        <img src={iconSrc} alt={name} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-gray-800 font-medium">{name}</h3>
    </div>
  );
};

export default TechCard;