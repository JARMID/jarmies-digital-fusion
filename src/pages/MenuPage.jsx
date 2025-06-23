
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Star, Clock, Filter, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = [
    {
      id: 1,
      name: "Le Cygnus X-1",
      description: "Notre burger signature avec viande premium, sauce mystère et légumes croquants",
      price: "1,850 DA",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "burgers",
      rating: 4.9,
      prepTime: "12 min"
    },
    {
      id: 2,
      name: "Nectar d'Andromède",
      description: "Boisson signature aux saveurs exotiques avec effets visuels LED",
      price: "890 DA",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "boissons",
      rating: 4.8,
      prepTime: "5 min"
    },
    {
      id: 3,
      name: "Singularité Sucrée",
      description: "Dessert architectural aux saveurs authentiques d'Algérie",
      price: "1,250 DA",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "desserts",
      rating: 4.9,
      prepTime: "8 min"
    },
    {
      id: 4,
      name: "Couscous Quantique",
      description: "Couscous traditionnel revisité avec présentation futuriste",
      price: "2,200 DA",
      image: "https://images.unsplash.com/photo-1596040033229-a0b3b6b2b8aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "plats",
      rating: 4.7,
      prepTime: "18 min"
    },
    {
      id: 5,
      name: "Tajine Stellaire",
      description: "Tajine aux épices d'Algérie dans un cadre lumineux",
      price: "1,980 DA",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "plats",
      rating: 4.8,
      prepTime: "25 min"
    },
    {
      id: 6,
      name: "Wrap Vortex",
      description: "Wrap aux légumes frais et sauce signature dans une tortilla colorée",
      price: "1,450 DA",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "wraps",
      rating: 4.6,
      prepTime: "8 min"
    }
  ];

  const categories = [
    { id: 'all', name: 'Tout', count: menuItems.length },
    { id: 'burgers', name: 'Burgers', count: menuItems.filter(item => item.category === 'burgers').length },
    { id: 'plats', name: 'Plats Traditionnels', count: menuItems.filter(item => item.category === 'plats').length },
    { id: 'wraps', name: 'Wraps', count: menuItems.filter(item => item.category === 'wraps').length },
    { id: 'boissons', name: 'Boissons', count: menuItems.filter(item => item.category === 'boissons').length },
    { id: 'desserts', name: 'Desserts', count: menuItems.filter(item => item.category === 'desserts').length }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold font-orbitron mb-6">
              <span className="text-gradient">Menu Futuriste</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez nos créations culinaires où l'art traditionnel algérien rencontre l'innovation du futur
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un plat..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-jarmie-cyan-500 transition-colors"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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
        </div>
      </section>

      {/* Menu Items */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
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

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-xl">Aucun plat trouvé pour votre recherche.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
