import React from 'react';
import { Star, Quote } from 'lucide-react';

const Clients = () => {
  const testimonials = [
    {
      name: "Alexandre Martin",
      company: "TechStart Solutions",
      text: "Noxwya a transformé notre VSL avec un montage exceptionnel. Nos conversions ont augmenté de 150% !",
      rating: 5
    },
    {
      name: "Sophie Dubois",
      company: "Creative Agency",
      text: "Un travail de qualité professionnelle. Les délais sont toujours respectés et le résultat dépasse nos attentes.",
      rating: 5
    },
    {
      name: "Marc Leroy",
      company: "E-commerce Pro",
      text: "Nos publicités Facebook performent maintenant 3x mieux grâce au talent de Noxwya. Je recommande vivement !",
      rating: 5
    }
  ];

  const clientLogos = [
    "TechStart", "Creative Pro", "Digital Flow", "Brand Master", "Video Plus", "Media Expert"
  ];

  return (
    <section id="clients" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Clients qui nous font <span className="text-green-400">Confiance</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Des entrepreneurs aux grandes entreprises, découvrez ce que nos clients pensent de notre travail.
          </p>
        </div>

        {/* Témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl relative">
              <Quote className="text-green-600 mb-4" size={32} />
              <p className="text-gray-300 mb-6">"{testimonial.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-green-400 text-sm">{testimonial.company}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos des clients */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-8">Ils nous font confiance</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
                <span className="text-gray-400 font-bold text-lg">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;