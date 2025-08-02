import React, { useState } from 'react';
import { Mail, MessageCircle, Instagram, MessageSquare, Send, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', project: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:contact@noxwya.fr',
      color: 'bg-blue-600 hover:bg-blue-700',
      label: 'contact@noxwya.fr'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/33123456789',
      color: 'bg-green-600 hover:bg-green-700',
      label: 'WhatsApp'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/noxwya_editing',
      color: 'bg-pink-600 hover:bg-pink-700',
      label: '@noxwya_editing'
    },
    {
      name: 'Discord',
      icon: MessageSquare,
      href: 'https://discord.gg/noxwya',
      color: 'bg-indigo-600 hover:bg-indigo-700',
      label: 'Discord'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Prêt à collaborer <span className="text-green-400">ensemble</span> ?
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Contactez-moi pour discuter de votre projet. Je serais ravi de vous aider à créer 
            du contenu vidéo qui fait la différence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Envoyez-moi un message</h3>
            
            {isSubmitted && (
              <div className="bg-green-600 text-white p-4 rounded-lg mb-6 flex items-center gap-2">
                <Check size={20} />
                Message envoyé avec succès ! Je vous répondrai rapidement.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Nom *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-gray-300 mb-2">Type de projet</label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="vsl">VSL (Video Sales Letter)</option>
                  <option value="ads">Publicités / Ads</option>
                  <option value="reels">Instagram Reels</option>
                  <option value="youtube">Contenu YouTube</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Retrouvez-moi sur</h3>
            <div className="space-y-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${link.color} p-4 rounded-lg flex items-center gap-4 transition-all duration-300 hover:transform hover:scale-105`}
                  >
                    <Icon className="text-white" size={24} />
                    <div>
                      <h4 className="text-white font-semibold">{link.name}</h4>
                      <p className="text-gray-200 text-sm">{link.label}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 bg-gray-800 p-6 rounded-xl">
              <h4 className="text-white font-semibold mb-4">Délais de réponse</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Email : 24h maximum</li>
                <li>• WhatsApp : Quelques heures</li>
                <li>• Instagram : 1-2 jours</li>
                <li>• Discord : En temps réel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;