import React from 'react';

interface ClayCardProps {
  children: React.ReactNode;
  variant?: 'white' | 'purple' | 'yellow';
  className?: string;
  onClick?: () => void;
}

export const ClayCard: React.FC<ClayCardProps> = ({ 
  children, 
  variant = 'white', 
  className = '',
  onClick 
}) => {
  const baseClass = variant === 'purple' 
    ? 'clay-card-purple text-white' 
    : variant === 'yellow' 
    ? 'clay-card-yellow text-[#1C2C5B]' // Navy text on Gold card
    : 'clay-card-white text-[#1C2C5B]'; // Navy text on White card

  return (
    <div 
      onClick={onClick}
      className={`p-8 transition-transform duration-300 hover:scale-[1.02] active:scale-95 ${baseClass} ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      {children}
    </div>
  );
};