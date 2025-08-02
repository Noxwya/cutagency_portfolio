import React from 'react';
import { Zap, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="a-propos" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            À Propos de <span className="text-green-400">Noxwya Editing</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Passionné par l'art du storytelling visuel, je transforme vos contenus en expériences 
            mémorables qui captent l'attention et génèrent des résultats.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
              <Zap className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Créativité & Innovation</h3>
            <p className="text-gray-300">
              Chaque projet est une opportunité d'explorer de nouvelles techniques et de créer 
              du contenu unique qui se démarque de la concurrence.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Résultats Orientés</h3>
            <p className="text-gray-300">
              Mes montages sont conçus pour convertir. Que ce soit pour des VSL, des publicités 
              ou du contenu organique, l'objectif est toujours le même : performer.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Passion & Dévouement</h3>
            <p className="text-gray-300">
              Plus qu'un travail, le montage est ma passion. Je m'investis pleinement dans 
              chaque projet pour livrer un résultat qui dépasse vos attentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;