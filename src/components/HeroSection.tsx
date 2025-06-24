
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-jarmie-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-jarmie-cyan-500/10 backdrop-blur-sm border border-jarmie-cyan-500/20 rounded-full px-6 py-2 mb-8 animate-glow">
            <Sparkles className="w-4 h-4 text-jarmie-cyan-400" />
            <span className="text-sm font-medium text-jarmie-cyan-400">
              Restaurant Futuriste d'Alger
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-orbitron mb-6 leading-tight">
            <span className="block text-white mb-2">Bienvenue chez</span>
            <span className="block text-gradient animate-float">Jarmie's</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Découvrez une expérience culinaire révolutionnaire où les saveurs authentiques d'Algérie 
            rencontrent l'innovation technologique dans un cadre futuriste unique.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button asChild className="btn-primary group text-lg px-10 py-6">
              <Link to="/auth" className="flex items-center gap-3">
                Commencer l'Aventure
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="btn-secondary text-lg px-10 py-6 group">
              <Link to="/menu" className="flex items-center gap-3">
                <Play className="w-5 h-5" />
                Découvrir le Menu
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Cuisine Authentique",
                description: "Saveurs traditionnelles algériennes revisitées"
              },
              {
                title: "Expérience Immersive",
                description: "Technologie avancée pour une ambiance unique"
              },
              {
                title: "Service Premium",
                description: "Excellence et innovation à chaque étape"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`glass-card p-6 transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.5 + index * 0.2}s` }}
              >
                <h3 className="text-lg font-bold font-orbitron text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-jarmie-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-jarmie-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
