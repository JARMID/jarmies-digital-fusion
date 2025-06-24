
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Star, Clock, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

const MenuPreview = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const menuCategories = {
    starters: {
      title: "Entrées Futuristes",
      items: [
        {
          name: "Chorba 3.0",
          description: "Soupe traditionnelle revisitée avec des ingrédients moléculaires",
          price: "1200 DA",
          image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          rating: 4.9,
          time: "15 min",
          spicy: false
        },
        {
          name: "Bourek Sphérique",
          description: "Bourek déconstruit en sphères croustillantes à l'azote liquide",
          price: "1800 DA",
          image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          rating: 4.8,
          time: "20 min",
          spicy: false
        }
      ]
    },
    mains: {
      title: "Plats Principaux",
      items: [
        {
          name: "Couscous Quantique",
          description: "Couscous traditionnel avec légumes cultivés en hydroponie",
          price: "2800 DA",
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          rating: 5.0,
          time: "35 min",
          spicy: false
        },
        {
          name: "Tagine Holographique",
          description: "Tagine d'agneau aux pruneaux avec projection d'arômes",
          price: "3200 DA",
          image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          rating: 4.9,
          time: "45 min",
          spicy: true
        }
      ]
    },
    desserts: {
      title: "Desserts Innovation",
      items: [
        {
          name: "Baklava Lévitant",
          description: "Baklava aux pistaches avec présentation anti-gravitationnelle",
          price: "1500 DA",
          image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          rating: 4.7,
          time: "10 min",
          spicy: false
        }
      ]
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-orbitron mb-6">
            Menu <span className="text-gradient">Futuriste</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre sélection de plats algériens traditionnels 
            revisités avec les technologies culinaires les plus avancées
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-gray-800/30 backdrop-blur-sm rounded-xl p-1 border border-gray-700/50">
            {Object.keys(menuCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-jarmie-cyan-500 text-black'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {menuCategories[category].title}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {menuCategories[activeCategory].items.map((item, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden hover:scale-105 transition-all duration-500 glow-effect animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs">
                    <Star className="w-3 h-3 text-jarmie-yellow-400" />
                    <span className="text-white">{item.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs">
                    <Clock className="w-3 h-3 text-jarmie-cyan-400" />
                    <span className="text-white">{item.time}</span>
                  </div>
                  {item.spicy && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs">
                      <Flame className="w-3 h-3 text-jarmie-orange-400" />
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="absolute bottom-4 right-4">
                  <div className="px-3 py-1 bg-jarmie-cyan-500 text-black font-bold rounded-full">
                    {item.price}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold font-orbitron text-white mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild className="btn-primary">
            <Link to="/menu">
              Voir le Menu Complet
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
