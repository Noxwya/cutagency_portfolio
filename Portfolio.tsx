import React, { useState } from 'react';
import VideoCard from './VideoCard';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('vsl');

  const categories = [
    { id: 'vsl', name: 'VSL', description: 'Video Sales Letters' },
    { id: 'ads', name: 'Publicités', description: 'Ads & Shorts' },
    { id: 'reels', name: 'Reels', description: 'Instagram Reels' },
    { id: 'youtube', name: 'YouTube', description: 'Contenu YouTube' }
  ];

  const videos = {
    vsl: [
      { id: 'zC3hpydTRs8', title: 'VSL Performance Marketing', platform: 'youtube' },
      { id: 'ggfN5HjMjNA', title: 'VSL Conversion', platform: 'youtube' },
      { id: 'mchXWT0YqVE', title: 'VSL Storytelling', platform: 'youtube' },
      { id: 'skcFFS4YwuY', title: 'VSL Engagement', platform: 'youtube' }
    ],
    ads: [
      { id: '3pOGUHS9fWw', title: 'Publicité Dynamique', platform: 'youtube-short' },
      { id: 'tpHimbujx3s', title: 'Ad Creative', platform: 'youtube-short' },
      { id: 'wamgB00-YBI', title: 'Social Media Ad', platform: 'youtube-short' }
    ],
    reels: [
      { id: 'DMYXZatqyAA', title: 'Reel Viral', platform: 'instagram' }
    ],
    youtube: [
      { id: 'eSJVqjn7n7M', title: 'Contenu YouTube Premium', platform: 'youtube' },
      { id: 'XqUu_p3lZrA', title: 'YouTube Storytelling', platform: 'youtube' },
      { id: 'F0tkmkQbse8', title: 'Long Form Content', platform: 'youtube' },
      { id: 'nhJq_Jc8GnU', title: 'YouTube Engagement', platform: 'youtube' },
      { id: 'TXYyeO6uHYY', title: 'Educational Content', platform: 'youtube' }
    ]
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Mon <span className="text-green-400">Portfolio</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Découvrez une sélection de mes meilleurs projets de montage vidéo, organisés par catégorie 
            pour vous aider à visualiser mes compétences dans chaque domaine.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <div className="text-center">
                <div className="font-bold">{category.name}</div>
                <div className="text-sm opacity-75">{category.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos[activeCategory as keyof typeof videos].map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;