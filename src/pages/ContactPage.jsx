
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsLoading(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-jarmie-cyan-400" />,
      title: "Adresse",
      details: ["Centre-ville, Alger", "Algérie, 16000"]
    },
    {
      icon: <Phone className="w-6 h-6 text-jarmie-cyan-400" />,
      title: "Téléphone",
      details: ["+213 23 456 789", "+213 555 123 456"]
    },
    {
      icon: <Mail className="w-6 h-6 text-jarmie-cyan-400" />,
      title: "Email",
      details: ["contact@jarmies.dz", "reservation@jarmies.dz"]
    },
    {
      icon: <Clock className="w-6 h-6 text-jarmie-cyan-400" />,
      title: "Horaires",
      details: ["Lun-Jeu: 11h00-23h00", "Ven-Sam: 11h00-00h30", "Dim: 12h00-22h00"]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }}></div>
        </div>

        <div className="relative z-10 container-custom text-center">
          <h1 className="text-5xl lg:text-7xl font-bold font-orbitron mb-6">
            <span className="text-gradient">Contactez-Nous</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nous sommes à votre écoute pour toute question, réservation ou suggestion. 
            Rejoignez l'expérience Jarmie's dès aujourd'hui.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="glass-card p-8 glow-effect">
                <h2 className="text-3xl font-bold font-orbitron text-white mb-6">
                  Envoyez-nous un Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300 font-medium">
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-jarmie-cyan-500 focus:ring-jarmie-cyan-500/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300 font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-jarmie-cyan-500 focus:ring-jarmie-cyan-500/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300 font-medium">
                        Téléphone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+213 XXX XXX XXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-jarmie-cyan-500 focus:ring-jarmie-cyan-500/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-300 font-medium">
                        Sujet *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Sujet de votre message"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-jarmie-cyan-500 focus:ring-jarmie-cyan-500/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300 font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Écrivez votre message ici..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-jarmie-cyan-500 focus:ring-jarmie-cyan-500/20 resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full btn-primary"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Envoyer le Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold font-orbitron text-white mb-8">
                Informations de Contact
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 hover:scale-105 transition-all duration-300 glow-effect"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-gray-800/50">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold font-orbitron text-white mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-400 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="glass-card p-4 glow-effect">
                <div 
                  className="w-full h-64 bg-gray-800/50 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 text-center">
                    <MapPin className="w-8 h-8 text-jarmie-cyan-400 mx-auto mb-2" />
                    <p className="text-white font-medium">Centre-ville, Alger</p>
                    <p className="text-gray-400 text-sm">Localisation exacte disponible sur demande</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
