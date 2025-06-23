
import { useEffect, useState } from 'react';
import { TrendingUp, Clock, Star, Users } from 'lucide-react';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    orders: 0,
    avgTime: 0,
    rating: 0,
    customers: 0
  });

  const finalValues = {
    orders: 2500,
    avgTime: 12,
    rating: 4.9,
    customers: 850
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        orders: Math.floor(finalValues.orders * progress),
        avgTime: Math.floor(finalValues.avgTime * progress),
        rating: Math.floor((finalValues.rating * progress) * 10) / 10,
        customers: Math.floor(finalValues.customers * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(finalValues);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8 text-jarmie-cyan-400" />,
      value: `${counters.orders.toLocaleString()}+`,
      label: "Commandes Servies",
      color: "from-jarmie-cyan-400 to-jarmie-cyan-600"
    },
    {
      icon: <Clock className="w-8 h-8 text-jarmie-yellow-400" />,
      value: `${counters.avgTime} min`,
      label: "Temps Moyen",
      color: "from-jarmie-yellow-400 to-jarmie-orange-500"
    },
    {
      icon: <Star className="w-8 h-8 text-jarmie-orange-400" />,
      value: `${counters.rating}★`,
      label: "Note Moyenne",
      color: "from-jarmie-orange-400 to-jarmie-yellow-400"
    },
    {
      icon: <Users className="w-8 h-8 text-jarmie-cyan-400" />,
      value: `${counters.customers}+`,
      label: "Clients Fidèles",
      color: "from-jarmie-cyan-400 to-jarmie-cyan-600"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center glass-card p-8 hover:scale-105 transition-all duration-500 glow-effect animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-gray-800/50 animate-float">
                  {stat.icon}
                </div>
              </div>

              {/* Value */}
              <div className={`text-4xl lg:text-5xl font-bold font-orbitron mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>

              {/* Animated line */}
              <div className="mt-4 mx-auto w-12 h-0.5 bg-gradient-to-r from-transparent via-jarmie-cyan-400 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
