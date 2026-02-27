import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Utensils,
  ShoppingBasket,
  Palette,
  PartyPopper,
  HeartHandshake
} from 'lucide-react';

const steps = [
  { icon: MessageSquare, title: 'Consultation', description: "Nous écoutons vos besoins et imaginons l'événement parfait.", image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800' },
  { icon: Utensils, title: 'Menu', description: 'Choix des mets parmi notre répertoire camerounais et international.', image: 'https://i.postimg.cc/c45HDTZY/pati.jpg' },
  { icon: ShoppingBasket, title: 'Ingrédients', description: 'Achats au marché local le jour même pour une fraîcheur absolue.', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800' },
  { icon: Palette, title: 'Mise en Place', description: 'Installation soignée et décoration pour une ambiance féerique.', image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800' },
  { icon: PartyPopper, title: 'Service', description: 'Un service impeccable et chaleureux pour ravir vos convives.', image: 'https://i.postimg.cc/15pSFHtc/ser-et-ani.jpg' },
  { icon: HeartHandshake, title: 'Satisfaction', description: "Nous nous assurons que tout a été parfait jusqu'au bout.", image: 'https://i.postimg.cc/fT0nNvmQ/2.jpg' }
];

export function ReceptionCycleSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-cameroon-green mb-2">Notre Processus</h2>
          <p className="text-gray-500 text-sm">Survolez une étape pour explorer</p>
        </div>

        {/* Barre d'icônes horizontale */}
        <div className="flex justify-between items-center relative mb-12 px-4">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeIndex === index;
            return (
              <div key={index} className="relative z-10 flex flex-col items-center">
                <button
                  onMouseEnter={() => { setActiveIndex(index); setIsPaused(true); }}
                  onMouseLeave={() => setIsPaused(false)}
                  className={`w-10 h-10 md:w-14 md:h-14 rounded-full border-2 transition-all duration-300 flex items-center justify-center
                    ${isActive ? 'bg-cameroon-gold border-cameroon-gold scale-110 shadow-lg' : 'bg-white border-gray-200 text-gray-400'}`}
                >
                  <Icon className={`w-5 h-5 md:w-6 md:h-6 ${isActive ? 'text-white' : ''}`} />
                </button>
                <span className={`absolute -bottom-7 text-[10px] md:text-xs font-medium whitespace-nowrap transition-colors ${isActive ? 'text-cameroon-green font-bold' : 'text-gray-400'}`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Carte de contenu dynamique */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden min-h-[300px] flex flex-col md:flex-row border border-gray-100">
          <div className="w-full md:w-1/2 h-48 md:h-auto relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={steps[activeIndex].image}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <span className="text-cameroon-gold font-bold text-sm uppercase tracking-widest">Étape {activeIndex + 1}</span>
                <h3 className="text-2xl font-bold text-cameroon-green">{steps[activeIndex].title}</h3>
                <p className="text-gray-600 leading-relaxed">{steps[activeIndex].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}