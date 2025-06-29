import React from 'react';

const Gallery = () => {
  // התמונות האמיתיות של לאה סאליקוב
  const hairstyleImages = [
    {
      id: 1,
      url: 'https://drive.google.com/uc?export=view&id=165TSB8-a0mV9e1Z7sFLVlAqZwDDfmLUd',
      alt: 'עבודת עיצוב שיער מקצועית 1'
    },
    {
      id: 2,
      url: 'https://drive.google.com/uc?export=view&id=1rxy_WybADWPPpanYTY-l9BnJMwAyDRFt',
      alt: 'עבודת עיצוב שיער מקצועית 2'
    },
    {
      id: 3,
      url: 'https://drive.google.com/uc?export=view&id=1Yr_OcJGpgdnhjDkMdGn895kcUwXntvmQ',
      alt: 'עבודת עיצוב שיער מקצועית 3'
    },
    {
      id: 4,
      url: 'https://drive.google.com/uc?export=view&id=1BNkxDSb_kKMX-AEhAoHIdrXpCvviAagz',
      alt: 'עבודת עיצוב שיער מקצועית 4'
    },
    {
      id: 5,
      url: 'https://drive.google.com/uc?export=view&id=1oDGw_28fmDFSmNg3he6wdr2wjRjvM9kk',
      alt: 'עבודת עיצוב שיער מקצועית 5'
    },
    {
      id: 6,
      url: 'https://drive.google.com/uc?export=view&id=140srPeYAsJj5riJ3T1iBOZ-rvgPO_PHO',
      alt: 'עבודת עיצוב שיער מקצועית 6'
    },
    {
      id: 7,
      url: 'https://drive.google.com/uc?export=view&id=1_nI7wQ59W005CrRnrL06RMmpcuxTFY2U',
      alt: 'עבודת עיצוב שיער מקצועית 7'
    },
    {
      id: 8,
      url: 'https://drive.google.com/uc?export=view&id=1N3e6ZnI1chHc4iAhtNNmV0RxJI0dD2k7',
      alt: 'עבודת עיצוב שיער מקצועית 8'
    },
    {
      id: 9,
      url: 'https://drive.google.com/uc?export=view&id=1uIbwNn1EsveCeeEVEKFL0PABFThiN1mk',
      alt: 'עבודת עיצוב שיער מקצועית 9'
    },
    {
      id: 10,
      url: 'https://drive.google.com/uc?export=view&id=12AlXEnaV-DesBknU68hGKTSmjr-eRVLJ',
      alt: 'עבודת עיצוב שיער מקצועית 10'
    },
    {
      id: 11,
      url: 'https://drive.google.com/uc?export=view&id=1ZkksGJeDF_zie7Sz5pcHmFwxFbDvZJll',
      alt: 'עבודת עיצוב שיער מקצועית 11'
    },
    {
      id: 12,
      url: 'https://drive.google.com/uc?export=view&id=1xJ8RD7bTmmv9qFkdFbGxYckuFYfzp_I_',
      alt: 'עבודת עיצוב שיער מקצועית 12'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            גלריית מוברשים ותסרוקות
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            התמחות בעיצוב שיער           </p>
          <div className="w-24 h-1 bg-rose-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {hairstyleImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 right-4">
                  <span className="text-white font-medium bg-rose-500/80 px-3 py-1 rounded-full text-sm">
                    עיצוב שיער
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-4">
            כל העבודות מבוצעות ברמה מקצועית גבוהה
          </p>
          <div className="inline-block bg-rose-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-rose-600 transition-colors duration-300 cursor-pointer">
            📞 התקשרו לקביעת תור: 0583298008
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;