
import { Shield, Award, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-jarmie-cyan-400" />,
      title: "Qualité Garantie",
      description: "Ingrédients premium sélectionnés avec soin pour une expérience gustative exceptionnelle."
    },
    {
      icon: <Award className="w-8 h-8 text-jarmie-yellow-400" />,
      title: "Excellence Culinaire",
      description: "Chefs experts combinant techniques traditionnelles et innovations modernes."
    },
    {
      icon: <Users className="w-8 h-8 text-jarmie-orange-400" />,
      title: "Service Personnalisé",
      description: "Expérience sur mesure adaptée aux goûts et préférences de chaque client."
    },
    {
      icon: <Zap className="w-8 h-8 text-jarmie-cyan-400" />,
      title: "Innovation Continue",
      description: "Technologie de pointe pour repousser les limites de l'art culinaire."
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
              Notre vision : transformer chaque repas en voyage sensoriel, où tradition 
              et innovation s'unissent pour révéler des saveurs extraordinaires dans un 
              cadre futuriste sans précédent.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center glass-card p-4">
                <div className="text-3xl font-bold text-gradient mb-1">500+</div>
                <div className="text-sm text-gray-400">Clients Satisfaits</div>
              </div>
              <div className="text-center glass-card p-4">
                <div className="text-3xl font-bold text-gradient mb-1">4.9★</div>
                <div className="text-sm text-gray-400">Note Moyenne</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:scale-105 transition-all duration-300 glow-effect animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="p-3 rounded-full bg-gray-800/50 w-fit">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold font-orbitron text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
