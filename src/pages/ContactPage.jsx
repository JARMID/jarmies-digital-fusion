
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold font-orbitron mb-6">
              <span className="text-gradient">Contact</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connectez-vous avec l'avenir de la gastronomie algérienne
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold font-orbitron mb-8 text-white">
                Informations de <span className="text-gradient">Contact</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 glass-card p-6">
                  <MapPin className="w-6 h-6 text-jarmie-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Adresse</h3>
                    <p className="text-gray-300">
                      Centre-ville, Alger<br />
                      Algérie, 16000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 glass-card p-6">
                  <Phone className="w-6 h-6 text-jarmie-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Téléphone</h3>
                    <p className="text-gray-300">+213 XX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 glass-card p-6">
                  <Mail className="w-6 h-6 text-jarmie-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                    <p className="text-gray-300">contact@jarmies.dz</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 glass-card p-6">
                  <Clock className="w-6 h-6 text-jarmie-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Horaires</h3>
                    <div className="text-gray-300 space-y-1">
                      <p>Lundi - Jeudi: 11h00 - 23h00</p>
                      <p>Vendredi - Samedi: 11h00 - 00h30</p>
                      <p>Dimanche: 12h00 - 22h00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold font-orbitron mb-8 text-white">
                Envoyez-nous un <span className="text-gradient">Message</span>
              </h2>
              
              <form className="glass-card p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-jarmie-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-jarmie-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-jarmie-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="Sujet de votre message"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-jarmie-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-jarmie-cyan-500 hover:bg-jarmie-cyan-600 text-black font-bold py-3 text-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
