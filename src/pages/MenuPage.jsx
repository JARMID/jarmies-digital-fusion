
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Star, Clock, ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = [
    {
      id: 1,
      name: "Le Cygnus X-1",
      description: "Notre burger signature avec viande premium, sauce mystère et légumes croquants dans un pain artisanal",
      price: "1,850 DA",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      prepTime: "12 min",
      category: "signatures"
    },
    {
      id: 2,
      name: "Nectar d'Andromède",
      description: "Boisson signature aux saveurs exotiques avec effets visuels LED et fruits tropicaux",
      price: "890 DA",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      prepTime: "5 min",
      category: "beverages"
    },
    {
      id: 3,
      name: "Singularité Sucrée",
      description: "Dessert architectural aux saveurs authentiques d'Algérie avec présentation futuriste",
      price: "1,250 DA",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      prepTime: "8 min",
      category: "desserts"
    },
    {
      id: 4,
      name: "Couscous Quantique",
      description: "Couscous traditionnel revisité avec légumes de saison et épices authentiques dans une présentation moderne",
      price: "2,200 DA",
      image: "https://images.unsplash.com/photo-1609501676725-7186f68e3121?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      prepTime: "18 min",
      category: "traditional"
    },
    {
      id: 5,
      name: "Tajine Stellaire",
      description: "Tajine aux épices d'Algérie avec viande fondante et légumes confits dans un cadre lumineux",
      price: "1,980 DA",
      image: "https://images.unsplash.com/photo-1574653853027-5395ca8d4277?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      prepTime: "25 min",
      category: "traditional"
    },
    {
      id: 6,
      name: "Quantum Kebab",
      description: "Brochettes d'agneau marinées aux herbes fraîches avec accompagnements futuristes",
      price: "2,100 DA",
      image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rc-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      prepTime: "15 min",
      category: "signatures"
    }
  ];

  const categories = [
    { id: 'all', name: 'Tout Voir', count: menuItems.length },
    { id: 'signatures', name: 'Plats Signatures', count: menuItems.filter(item => item.category === 'signatures').length },
    { id: 'traditional', name: 'Tradition Revisitée', count: menuItems.filter(item => item.category === 'traditional').length },
    { id: 'beverages', name: 'Boissons', count: menuItems.filter(item => item.category === 'beverages').length },
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
      <section className="relative pt-20 pb-16 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }}></div>
        </div>

        <div className="relative z-10 container-custom text-center">
          <h1 className="text-5xl lg:text-7xl font-bold font-orbitron mb-6">
            <span className="text-gradient">Menu Futuriste</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre collection de créations culinaires où tradition algérienne 
            et innovation technologique se rencontrent pour créer l'extraordinaire.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom">
          {/* Search Bar */}
          <div className="mb-12 text-center">
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Rechercher un plat..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:border-jarmie-cyan-500 focus:outline-none focus:ring-2 focus:ring-jarmie-cyan-500/20"
              />
              <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
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

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-400 mb-4">Aucun plat trouvé</p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                variant="outline"
                className="btn-secondary"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
