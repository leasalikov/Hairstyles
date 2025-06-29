import React from 'react';
import { Award, Heart, Scissors, Star } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: <Award className="h-8 w-8 text-gold" />, number: '10+', text: 'Years Experience' },
    { icon: <Heart className="h-8 w-8 text-gold" />, number: '500+', text: 'Happy Clients' },
    { icon: <Scissors className="h-8 w-8 text-gold" />, number: '1000+', text: 'Transformations' },
    { icon: <Star className="h-8 w-8 text-gold" />, number: '5★', text: 'Average Rating' },
  ];

  return (
    <section id="about" className="py-20 bg-warmGray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
                About Your Stylist
              </h2>
              <div className="w-16 h-1 bg-gold rounded"></div>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              With over a decade of experience in the beauty industry, I'm passionate about creating 
              hairstyles that not only look stunning but also reflect your unique personality and lifestyle.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              My approach combines classic techniques with modern trends, ensuring every client leaves 
              feeling confident and beautiful. I believe that great hair is about more than just appearance—
              it's about how it makes you feel.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {achievements.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    {item.icon}
                  </div>
                  <div className="font-serif text-2xl font-bold text-charcoal">{item.number}</div>
                  <div className="text-gray-600 text-sm">{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Professional Hairstylist"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="font-serif text-2xl font-bold">Certified</div>
                <div className="text-sm">Professional Stylist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;