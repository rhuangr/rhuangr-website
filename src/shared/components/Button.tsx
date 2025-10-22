import React from 'react';

interface ButtonProps {
  icon: React.ReactNode;
  link: string;
  size?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ icon, link, size = '15px', className = '' }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <button
      aria-label="Open profile"
      className={`ml-4 text-white rounded-md hover:text-gray-800 hover:rounded-full transition-colors flex items-center justify-center p-0 focus:outline-none cursor-pointer ${className}`}
      onClick={handleClick}
      style={{ width: size, height: size }}
    >
      {icon}
    </button>
  );
};

export default Button;