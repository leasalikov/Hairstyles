import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            צרו קשר
          </h2>
          <p className="text-lg text-gray-600">
            לקביעת תור או לפרטים נוספים
          </p>
          <div className="w-24 h-1 bg-rose-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">פרטי התקשרות</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <span className="text-rose-600 text-xl">👤</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">לאה סאליקוב</p>
                  <p className="text-gray-600">מעצבת שיער מקצועית</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <span className="text-rose-600 text-xl">📞</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">0583298008</p>
                  <p className="text-gray-600">זמין לקביעת תורים</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <span className="text-rose-600 text-xl">✉️</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">leasalikov@gmail.com</p>
                  <p className="text-gray-600">לפניות באימייל</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">השירותים שלי</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-rose-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">✂️ עיצוב שיער</h4>
                <p className="text-gray-600">תסרוקות מקצועיות ופאנים לכל אירוע ואירוע </p>
              </div>

              <div className="p-4 bg-rose-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">💇‍♀️ סירוק פאות</h4>
                <p className="text-gray-600">סירוק פאות מותאם אישית</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-rose-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-rose-600 transition-colors duration-300 cursor-pointer">
            📞 התקשרו לקביעת תור: 0583298008
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;