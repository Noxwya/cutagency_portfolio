import React from 'react';
import { Play, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-green-900">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Photo et présentation */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-8">
              <img
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Éditeur vidéo professionnel"
                className="w-32 h-32 rounded-full mx-auto lg:mx-0 mb-6 border-4 border-green-600 shadow-xl"
              />
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                <span className="text-white">Montage Vidéo</span>
                <br />
                <span className="text-green-400">Professionnel</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Créateur de contenu vidéo engageant pour VSL, publicités, reels et YouTube. 
                Transformez vos idées en vidéos percutantes qui convertissent.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#portfolio"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Play size={20} />
                Voir mon travail
              </a>
              <a
                href="#contact"
                className="border-2 border-green-600 text-green-400 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Me contacter
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl text-center backdrop-blur-sm">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Play className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">200+</h3>
                <p className="text-gray-400">Vidéos créées</p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-xl text-center backdrop-blur-sm">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                <p className="text-gray-400">Clients satisfaits</p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-xl text-center backdrop-blur-sm">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">3+</h3>
                <p className="text-gray-400">Années d'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;