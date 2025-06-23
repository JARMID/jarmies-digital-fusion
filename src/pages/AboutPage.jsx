
import { Shield, Award, Users, Zap, Star, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold font-orbitron mb-6">
              À Propos de <span className="text-gradient">Jarmie's</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              L'histoire d'une révolution culinaire au cœur d'Alger
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold font-orbitron mb-6 text-white">
                Notre <span className="text-gradient">Vision</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Jarmie's est né d'une vision audacieuse : fusionner l'authenticité de la cuisine algérienne 
                avec les technologies les plus avancées pour créer une expérience gastronomique révolutionnaire.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Situé au cœur d'Alger, notre restaurant futuriste repousse les frontières de l'art culinaire 
                en combinant tradition séculaire et innovation technologique dans un cadre à couper le souffle.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Chaque plat raconte une histoire, chaque saveur transporte nos clients dans un voyage 
                sensoriel unique où le passé et l'avenir se rencontrent harmonieusement.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 text-center">
                <Star className="w-8 h-8 text-jarmie-yellow-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gradient mb-2">4.9★</div>
                <div className="text-sm text-gray-400">Note Moyenne</div>
              </div>
              <div className="glass-card p-6 text-center">
                <Users className="w-8 h-8 text-jarmie-cyan-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gradient mb-2">2500+</div>
                <div className="text-sm text-gray-400">Clients Satisfaits</div>
              </div>
              <div className="glass-card p-6 text-center">
                <Clock className="w-8 h-8 text-jarmie-orange-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gradient mb-2">12min</div>
                <div className="text-sm text-gray-400">Temps Moyen</div>
              </div>
              <div className="glass-card p-6 text-center">
                <Award className="w-8 h-8 text-jarmie-cyan-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gradient mb-2">2024</div>
                <div className="text-sm text-gray-400">Année de Création</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-orbitron mb-6 text-white">
              Nos <span className="text-gradient">Valeurs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Les principes qui guident notre approche révolutionnaire de la gastronomie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-jarmie-cyan-400" />,
                title: "Qualité Premium",
                description: "Sélection rigoureuse des meilleurs ingrédients pour une expérience gustative exceptionnelle."
              },
              {
                icon: <Award className="w-8 h-8 text-jarmie-yellow-400" />,
                title: "Excellence Culinaire",
                description: "Maîtrise parfaite des techniques traditionnelles enrichies par l'innovation moderne."
              },
              {
                icon: <Users className="w-8 h-8 text-jarmie-orange-400" />,
                title: "Service Client",
                description: "Attention personnalisée et expérience sur mesure pour chaque visiteur."
              },
              {
                icon: <Zap className="w-8 h-8 text-jarmie-cyan-400" />,
                title: "Innovation",
                description: "Adoption continue des dernières technologies pour repousser les limites culinaires."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="glass-card p-8 text-center hover:scale-105 transition-all duration-300 glow-effect"
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-gray-800/50">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold font-orbitron text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-orbitron mb-6 text-white">
              Notre <span className="text-gradient">Équipe</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des professionnels passionnés au service de l'excellence culinaire
            </p>
          </div>

          <div className="glass-card p-8 text-center max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              L'équipe Jarmie's réunit des chefs expérimentés, des technologues culinaires et des spécialistes 
              de l'expérience client, tous unis par la passion de créer des moments gastronomiques inoubliables.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Formés aux meilleures techniques internationales et profondément attachés aux traditions algériennes, 
              nos collaborateurs incarnent l'esprit d'innovation qui fait la renommée de Jarmie's.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
