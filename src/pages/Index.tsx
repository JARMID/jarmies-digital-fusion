
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import MenuPreview from '@/components/MenuPreview';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Menu Preview */}
      <MenuPreview />
      
      {/* Experience Section */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom">
          <div className={`text-center mb-16 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold font-orbitron mb-6">
              <span className="text-gradient">Expérience Unique</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Plongez dans l'avenir de la gastronomie avec Jarmie's, où tradition algérienne et innovation culinaire se rencontrent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8 text-jarmie-yellow-400" />,
                title: "Qualité Premium",
                description: "Ingrédients sélectionnés avec soin pour une expérience gustative exceptionnelle."
              },
              {
                icon: <Clock className="w-8 h-8 text-jarmie-cyan-400" />,
                title: "Service Rapide",
                description: "Technologie avancée pour un service efficace sans compromis sur la qualité."
              },
              {
                icon: <Users className="w-8 h-8 text-jarmie-orange-400" />,
                title: "Ambiance Conviviale",
                description: "Un cadre moderne et chaleureux pour partager des moments inoubliables."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`glass-card p-8 text-center hover:scale-105 transition-all duration-300 glow-effect ${
                  isLoaded ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-gray-800/50">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 font-orbitron text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hero-gradient">
        <div className="container-custom">
          <div className={`text-center ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold font-orbitron mb-6">
              Prêt pour l'<span className="text-gradient">Aventure ?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Rejoignez la révolution culinaire. Créez votre compte et découvrez un monde de saveurs authentiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild className="btn-primary group">
                <Link to="/auth" className="flex items-center gap-2">
                  Commencer l'Expérience
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="btn-secondary">
                <Link to="/menu">
                  Découvrir le Menu
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
