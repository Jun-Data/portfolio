import React from 'react';

interface BadgeProps {
  children: string;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <span className="
      inline-block px-4 py-2 m-1 rounded-full text-sm font-bold bg-white text-[#1C2C5B]
      shadow-[inset_2px_2px_4px_rgba(255,255,255,0.8),inset_-2px_-2px_4px_rgba(0,0,0,0.05),4px_4px_8px_rgba(28,44,91,0.15)]
    ">
      {children}
    </span>
  );
};