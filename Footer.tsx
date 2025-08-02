import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo et nom */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-white">N</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Noxwya</h3>
              <p className="text-sm text-green-400">Editing</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-1">
              © 2024 Noxwya Editing. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-xs flex items-center justify-center md:justify-end gap-1">
              Créé avec <Heart className="text-red-500" size={12} /> pour vos projets vidéo
            </p>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-800 mt-6 pt-6">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Montage vidéo professionnel • VSL • Publicités • Reels • YouTube
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;