
import { ChefHat, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <ChefHat className="w-8 h-8 text-jarmie-cyan-400" />
              <span className="text-2xl font-bold font-orbitron text-white">
                Jarmie's
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Le restaurant futuriste d'Alger qui révolutionne l'art culinaire 
              en fusionnant tradition algérienne et innovation technologique.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-jarmie-cyan-400 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-jarmie-cyan-400 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-jarmie-cyan-400 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold font-orbitron text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'Menu', href: '/menu' },
                { name: 'À Propos', href: '/about' },
                { name: 'Contact', href: '/contact' },
                { name: 'Réservation', href: '/reservation' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold font-orbitron text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-jarmie-cyan-400 flex-shrink-0" />
                <span>Centre-ville, Alger, Algérie</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-jarmie-cyan-400 flex-shrink-0" />
                <span>+213 XX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-jarmie-cyan-400 flex-shrink-0" />
                <span>contact@jarmies.dz</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold font-orbitron text-white mb-4">Horaires</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-jarmie-cyan-400 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>Lun - Jeu: 11h00 - 23h00</div>
                  <div>Ven - Sam: 11h00 - 00h30</div>
                  <div>Dimanche: 12h00 - 22h00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Jarmie's Restaurant. Tous droits réservés. 
            <span className="mx-2">|</span>
            <Link to="/privacy" className="hover:text-jarmie-cyan-400 transition-colors duration-300">
              Politique de Confidentialité
            </Link>
            <span className="mx-2">|</span>
            <Link to="/terms" className="hover:text-jarmie-cyan-400 transition-colors duration-300">
              Conditions d'Utilisation
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
