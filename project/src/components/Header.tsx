import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-right">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              לאה סאליקוב
            </h1>
            <p className="text-rose-600 font-medium">מעצבת שיער ופאות מקצועית</p>
          </div>
          <div className="flex items-center space-x-6 space-x-reverse">
            <div className="text-sm text-gray-600">
              <p>📞 0583298008</p>
              <p>✉️ leasalikov@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;