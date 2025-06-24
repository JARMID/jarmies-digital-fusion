
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")`,
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
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className={`space-y-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jarmie-cyan-500/10 backdrop-blur-sm border border-jarmie-cyan-500/20 text-jarmie-cyan-400 font-medium animate-glow">
            <Sparkles className="w-4 h-4" />
            Révolution Culinaire 2024
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold font-orbitron leading-tight">
            <span className="block text-white mb-4">Bienvenue chez</span>
            <span className="text-gradient">Jarmie's</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Le premier restaurant futuriste d'Alger où la tradition algérienne 
            rencontre l'innovation culinaire de demain
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button asChild className="btn-primary group text-lg px-8 py-4">
              <Link to="/auth" className="flex items-center gap-3">
                Découvrir l'Expérience
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="btn-secondary text-lg px-8 py-4">
              <Link to="/menu">
                Explorer le Menu
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            {[
              { title: "Cuisine Authentique", desc: "Saveurs traditionnelles algériennes" },
              { title: "Innovation Tech", desc: "Expérience culinaire futuriste" },
              { title: "Ambiance Unique", desc: "Design avant-gardiste immersif" }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`text-center space-y-3 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.5 + index * 0.2}s` }}
              >
                <h3 className="text-lg font-bold font-orbitron text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
