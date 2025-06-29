import React from 'react';
import { Clock, Scissors, Palette, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="h-8 w-8 text-gold" />,
      title: 'Hair Cuts & Styling',
      description: 'Precision cuts tailored to your face shape and lifestyle',
      price: 'From $80',
      duration: '45-60 min',
    },
    {
      icon: <Palette className="h-8 w-8 text-gold" />,
      title: 'Hair Coloring',
      description: 'Full color, highlights, balayage, and corrective color',
      price: 'From $120',
      duration: '2-3 hours',
    },
    {
      icon: <Sparkles className="h-8 w-8 text-gold" />,
      title: 'Special Occasion',
      description: 'Bridal, prom, and event styling for your special moments',
      price: 'From $150',
      duration: '1-2 hours',
    },
    {
      icon: <Clock className="h-8 w-8 text-gold" />,
      title: 'Hair Treatments',
      description: 'Deep conditioning, keratin treatments, and hair repair',
      price: 'From $100',
      duration: '1-2 hours',
    },
  ];

  return (
    <section id="services" className="py-20 bg-softPink">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Services & Pricing
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional hair services designed to enhance your natural beauty and boost your confidence.
          </p>
          <div className="w-16 h-1 bg-gold rounded mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gold/10 rounded-full">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="font-semibold text-gold text-lg">
                        {service.price}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            All services include a consultation to ensure the perfect result for you.
          </p>
          <button className="bg-gold text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-yellow-600 transition-colors duration-200">
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;