import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  platform: 'youtube' | 'youtube-short' | 'instagram';
}

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const getVideoUrl = () => {
    switch (video.platform) {
      case 'youtube':
        return `https://youtu.be/${video.id}`;
      case 'youtube-short':
        return `https://youtube.com/shorts/${video.id}`;
      case 'instagram':
        return `https://www.instagram.com/reel/${video.id}/`;
      default:
        return '';
    }
  };

  const getThumbnail = () => {
    if (video.platform === 'youtube' || video.platform === 'youtube-short') {
      return `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
    }
    // Pour Instagram, on utilise une image placeholder
    return 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400';
  };

  const getPlatformBadge = () => {
    switch (video.platform) {
      case 'youtube':
        return { name: 'YouTube', color: 'bg-red-600' };
      case 'youtube-short':
        return { name: 'YouTube Shorts', color: 'bg-red-600' };
      case 'instagram':
        return { name: 'Instagram', color: 'bg-pink-600' };
      default:
        return { name: 'Video', color: 'bg-gray-600' };
    }
  };

  const badge = getPlatformBadge();

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
      <div className="relative">
        <img
          src={getThumbnail()}
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4">
            <a
              href={getVideoUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors duration-300"
            >
              <Play size={24} />
            </a>
            <a
              href={getVideoUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300"
            >
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
        <div className={`absolute top-3 left-3 ${badge.color} text-white text-xs px-2 py-1 rounded-full`}>
          {badge.name}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2">{video.title}</h3>
        <a
          href={getVideoUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-300 text-sm font-medium inline-flex items-center gap-1"
        >
          Voir la vidéo <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};

export default VideoCard;