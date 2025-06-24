
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Award, Users, Zap, MapPin, Clock, Star } from 'lucide-react';

const AboutPage = () => {
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

  const team = [
    {
      name: "Chef Yacine Amrani",
      role: "Chef Exécutif",
      image: "https://images.unsplash.com/photo-1583394293214-28a5b0cc64c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Expert en cuisine algérienne traditionnelle et innovation culinaire"
    },
    {
      name: "Sarah Bensalem",
      role: "Chef Pâtissière",
      image: "https://images.unsplash.com/photo-1494790108755-2616c2a9a66a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Spécialiste des desserts fusion tradition-modernité"
    },
    {
      name: "Karim Benali",
      role: "Directeur Innovation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Responsable de l'intégration technologique en restauration"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }}></div>
        </div>

        <div className="relative z-10 container-custom text-center">
          <h1 className="text-5xl lg:text-7xl font-bold font-orbitron mb-6">
            <span className="text-gradient">Notre Histoire</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'histoire de Jarmie's, le restaurant qui révolutionne 
            l'art culinaire algérien avec une approche futuriste unique.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
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
                  <div className="text-3xl font-bold text-gradient mb-1">2500+</div>
                  <div className="text-sm text-gray-400">Clients Satisfaits</div>
                </div>
                <div className="text-center glass-card p-4">
                  <div className="text-3xl font-bold text-gradient mb-1">4.9★</div>
                  <div className="text-sm text-gray-400">Note Moyenne</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Restaurant Jarmie's"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-orbitron mb-6">
              Notre <span className="text-gradient">Équipe</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Rencontrez les artistes culinaires qui donnent vie à l'expérience Jarmie's
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden hover:scale-105 transition-all duration-300 glow-effect animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-orbitron text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-jarmie-cyan-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {member.description}
                  </p>
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

export default AboutPage;
