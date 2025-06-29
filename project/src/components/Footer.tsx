import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">לאה סאליקוב - מעצבת שיער</h3>
          <p className="text-gray-400 mb-4">התמחות בעיצוב שיער מקצועי</p>
          
          <div className="flex justify-center items-center space-x-6 space-x-reverse mb-4">
            <span className="text-gray-300">📞 0583298008</span>
            <span className="text-gray-300">✉️ leasalikov@gmail.com</span>
          </div>
          
          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-400 text-sm">
              &copy; 2025 לאה סאליקוב. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;