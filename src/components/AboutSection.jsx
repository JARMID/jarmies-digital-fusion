
import { Shield, Zap, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-jarmie-cyan-400" />,
      title: "Qualité Premium",
      description: "Ingrédients sélectionnés avec soin pour une expérience gustative exceptionnelle"
    },
    {
      icon: <Zap className="w-8 h-8 text-jarmie-yellow-400" />,
      title: "Innovation Tech",
      description: "Technologies culinaires avancées pour repousser les limites du goût"
    },
    {
      icon: <Users className="w-8 h-8 text-jarmie-orange-400" />,
      title: "Service Personnalisé",
      description: "Expérience sur mesure adaptée aux préférences de chaque client"
    },
    {
      icon: <Award className="w-8 h-8 text-jarmie-cyan-400" />,
      title: "Excellence Culinaire",
      description: "Chefs experts alliant tradition algérienne et créativité moderne"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold font-orbitron mb-6">
              L'Art Culinaire <span className="text-gradient">Réinventé</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Chez Jarmie's, nous fusionnons l'héritage culinaire algérien avec les technologies 
              les plus avancées pour créer une expérience gastronomique unique au monde.
            </p>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              Notre mission : transformer chaque repas en voyage sensoriel, où tradition 
              et innovation s'unissent pour révéler des saveurs extraordinaires.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-gray-800/50">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Restaurant Jarmie's"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl font-bold text-gradient mb-1">2500+</div>
                    <div className="text-xs text-gray-300">Clients Satisfaits</div>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl font-bold text-gradient mb-1">4.9★</div>
                    <div className="text-xs text-gray-300">Note Moyenne</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-jarmie-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-jarmie-orange-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
