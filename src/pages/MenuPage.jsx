
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Star, Clock, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tout', count: 12 },
    { id: 'burgers', name: 'Burgers Futuristes', count: 4 },
    { id: 'traditional', name: 'Tradition Revisitée', count: 3 },
    { id: 'drinks', name: 'Boissons Cosmiques', count: 3 },
    { id: 'desserts', name: 'Desserts Stellaires', count: 2 }
  ];

  const menuItems = [
    {
      id: 1,
      name: "Le Cygnus X-1",
      description: "Notre burger signature avec viande premium, sauce mystère et légumes croquants dans un pain artisanal",
      price: "1,850 DA",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      prepTime: "12 min",
      category: "burgers"
    },
    {
      id: 2,
      name: "Couscous Quantique",
      description: "Couscous traditionnel algérien revisité avec légumes de saison et épices secrètes, présentation futuriste",
      price: "2,200 DA",
      image: "https://images.unsplash.com/photo-1596040033229-a0b3b6b2b8aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      prepTime: "18 min",
      category: "traditional"
    },
    {
      id: 3,
      name: "Tajine Stellaire",
      description: "Tajine aux saveurs authentiques d'Algérie, mijoté lentement avec des épices rares dans un tajine lumineux",
      price: "1,980 DA",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      prepTime: "25 min",
      category: "traditional"
    },
    {
      id: 4,
      name: "Nectar d'Andromède",
      description: "Boisson signature aux saveurs exotiques avec effets visuels LED et bulles aromatiques",
      price: "890 DA",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      prepTime: "5 min",
      category: "drinks"
    },
    {
      id: 5,
      name: "Singularité Sucrée",
      description: "Dessert architectural aux saveurs authentiques d'Algérie, présenté comme une œuvre d'art comestible",
      price: "1,250 DA",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      prepTime: "8 min",
      category: "desserts"
    },
    {
      id: 6,
      name: "Burger Orbital",
      description: "Double viande, fromage fondu, sauce spéciale et garnitures premium dans un pain aux graines",
      price: "2,100 DA",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      prepTime: "14 min",
      category: "burgers"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold font-orbitron mb-6">
              Menu <span className="text-gradient">Futuriste</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez notre sélection de créations culinaires où tradition algérienne et innovation se rencontrent
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-jarmie-cyan-500 text-black shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-70">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="glass-card overflow-hidden hover:scale-105 transition-all duration-500"
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
                    <Button className="bg-jarmie-cyan-500 hover:bg-jarmie-cyan-600 text-black">
                      Commander
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
