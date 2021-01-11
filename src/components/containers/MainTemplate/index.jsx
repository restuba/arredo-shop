import React from 'react';

export const MainTemplate = ({ children }) => {
  return (
    <div className="bg-gray-100 w-full">
      Main template
      {children}
    </div>
  );
};