import React, { useState } from 'react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'cuts', name: 'Cuts' },
    { id: 'color', name: 'Color' },
    { id: 'styling', name: 'Styling' },
    { id: 'bridal', name: 'Bridal' },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'cuts',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      title: 'Modern Bob Cut',
      description: 'Sleek and sophisticated bob with subtle layers',
    },
    {
      id: 2,
      category: 'color',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      title: 'Balayage Highlights',
      description: 'Natural-looking highlights with seamless blend',
    },
    {
      id: 3,
      category: 'styling',
      image: 'https://images.pexels.com/photos/3065545/pexels-photo-3065545.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      title: 'Elegant Updo',
      description: 'Sophisticated updo perfect for special occasions',
    },
    {
      id: 4,
      category: 'bridal',
      image: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      title: 'Bridal Styling',
      description: 'Romantic bridal hairstyle with delicate details',
    },
    {
      id: 5,
      category: 'cuts',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      title: 'Textured Layers',
      description: 'Dynamic layered cut with natural texture',
    },
    {
      id: 6,
      category: 'color',
      image: 'https://images.pexels.com/photos/3065175/pexels-photo-3065175.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      title: 'Ombré Color',
      description: 'Beautiful ombré technique with rich tones',
    },
    {
      id: 7,
      category: 'styling',
      image: 'https://images.pexels.com/photos/3065204/pexels-photo-3065204.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      title: 'Beach Waves',
      description: 'Effortless beach waves with natural movement',
    },
    {
      id: 8,
      category: 'cuts',
      image: 'https://images.pexels.com/photos/3992633/pexels-photo-3992633.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      title: 'Pixie Cut',
      description: 'Bold pixie cut with edgy styling',
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            My Portfolio
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the artistry behind each transformation. Every style tells a unique story.
          </p>
          <div className="w-16 h-1 bg-gold rounded mx-auto mt-4"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gold text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;