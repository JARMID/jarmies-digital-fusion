
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Star, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MenuPreview = () => {
  const [activeCategory, setActiveCategory] = useState('signatures');

  const menuItems = {
    signatures: [
      {
        id: 1,
        name: "Le Cygnus X-1",
        description: "Notre burger signature avec viande premium, sauce mystère et légumes croquants",
        price: "1,850 DA",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        prepTime: "12 min"
      },
      {
        id: 2,
        name: "Nectar d'Andromède",
        description: "Boisson signature aux saveurs exotiques avec effets visuels LED",
        price: "890 DA",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        prepTime: "5 min"
      },
      {
        id: 3,
        name: "Singularité Sucrée",
        description: "Dessert architectural aux saveurs authentiques d'Algérie",
        price: "1,250 DA",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        prepTime: "8 min"
      }
    ],
    traditional: [
      {
        id: 4,
        name: "Couscous Quantique",
        description: "Couscous traditionnel revisité avec présentation futuriste",
        price: "2,200 DA",
        image: "https://images.unsplash.com/photo-1609501676725-7186f68e3121?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        prepTime: "18 min"
      },
      {
        id: 5,
        name: "Tajine Stellaire",
        description: "Tajine aux épices d'Algérie dans un cadre lumineux",
        price: "1,980 DA",
        image: "https://images.unsplash.com/photo-1574653853027-5395ca8d4277?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        prepTime: "25 min"
      }
    ]
  };

  const categories = [
    { id: 'signatures', name: 'Plats Signatures', count: 3 },
    { id: 'traditional', name: 'Tradition Revisitée', count: 2 }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-orbitron mb-6">
            <span className="text-gradient">Menu Futuriste</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explorez notre sélection de créations culinaires où tradition algérienne 
            et innovation technologique se rencontrent pour créer l'extraordinaire.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-jarmie-cyan-500 text-black shadow-lg glow-effect'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div
              key={item.id}
              className="glass-card overflow-hidden hover:scale-105 transition-all duration-500 glow-effect animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-jarmie-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-white">{item.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-jarmie-cyan-400" />
                    <span className="text-sm font-medium text-white">{item.prepTime}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-orbitron text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gradient">
                    {item.price}
                  </span>
                  <Button size="sm" className="bg-jarmie-cyan-500 hover:bg-jarmie-cyan-600 text-black">
                    Commander
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Button asChild className="btn-primary text-lg px-10 py-6 group">
            <Link to="/menu" className="flex items-center gap-3">
              Voir le Menu Complet
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
