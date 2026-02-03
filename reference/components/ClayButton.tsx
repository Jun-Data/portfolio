import React from 'react';

interface ClayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  children: React.ReactNode;
}

export const ClayButton: React.FC<ClayButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  let colorClass = '';
  
  switch(variant) {
    case 'primary': // Navy Blue
      colorClass = 'bg-[#1C2C5B] text-white hover:bg-[#283b75]';
      break;
    case 'secondary': // White/Light
      colorClass = 'bg-white text-[#1C2C5B] hover:bg-slate-50';
      break;
    case 'accent': // Gold
      colorClass = 'bg-[#DAA520] text-[#1C2C5B] hover:bg-[#c9961a]';
      break;
  }

  return (
    <button 
      className={`
        relative px-8 py-4 rounded-full font-bold text-lg
        shadow-[inset_4px_4px_8px_rgba(255,255,255,0.3),inset_-4px_-4px_8px_rgba(0,0,0,0.2),6px_6px_12px_rgba(28,44,91,0.2)]
        active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)]
        active:translate-y-1
        transition-all duration-200
        ${colorClass}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};