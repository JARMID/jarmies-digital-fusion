
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold font-orbitron mb-6">
              <span className="text-gradient">Contactez-Nous</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Prêt à vivre l'expérience Jarmie's ? Nous sommes là pour vous accompagner
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
              <h2 className="text-3xl font-bold font-orbitron text-white mb-8">
                Informations de <span className="text-gradient">Contact</span>
              </h2>

              <div className="space-y-8">
                <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-jarmie-cyan-500/20">
                      <MapPin className="w-6 h-6 text-jarmie-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Adresse</h3>
                      <p className="text-gray-300">
                        Centre-ville, Alger<br />
                        Algérie 16000
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-jarmie-yellow-500/20">
                      <Phone className="w-6 h-6 text-jarmie-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Téléphone</h3>
                      <p className="text-gray-300">+213 XX XXX XXXX</p>
                      <p className="text-gray-400 text-sm">Réservations et informations</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-jarmie-orange-500/20">
                      <Mail className="w-6 h-6 text-jarmie-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                      <p className="text-gray-300">contact@jarmies.dz</p>
                      <p className="text-gray-400 text-sm">Nous vous répondons sous 24h</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-jarmie-cyan-500/20">
                      <Clock className="w-6 h-6 text-jarmie-cyan-400" />
                    </div>
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
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold font-orbitron text-white mb-8">
                Envoyez-nous un <span className="text-gradient">Message</span>
              </h2>

              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-jarmie-cyan-500 transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-jarmie-cyan-500 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-jarmie-cyan-500 transition-colors"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-jarmie-cyan-500 transition-colors"
                    placeholder="Objet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-jarmie-cyan-500 transition-colors resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <Button type="submit" className="w-full btn-primary text-lg py-4 group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
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
