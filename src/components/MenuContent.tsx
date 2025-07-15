import React from 'react';

interface MenuContentProps {
  children?: React.ReactNode;
  className?: string;
}

const MenuContent: React.FC<MenuContentProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={className}>
      {/* MenuContent component body will go here */}
    </div>
  );
};

export default MenuContent; 