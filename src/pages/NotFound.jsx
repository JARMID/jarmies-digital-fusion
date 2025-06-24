
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold font-orbitron text-gradient mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">Page Non Trouvée</h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            La page que vous recherchez n'existe pas dans l'univers futuriste de Jarmie's.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="btn-primary">
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Retour à l'Accueil
            </Link>
          </Button>
          <Button asChild variant="outline" className="btn-secondary">
            <Link to="/menu" className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Découvrir le Menu
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
