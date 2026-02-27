import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Briefcase,
  Gift,
  Wine,
  Truck,
  GraduationCap,
  X // Pour le bouton fermer
} from 'lucide-react';

// Définition du type pour un service
interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  video: string;
}

const services: Service[] = [
  {
    icon: Users,
    title: 'Mariages & Cérémonies',
    description: 'Des menus sur mesure pour le plus beau jour de votre vie. Buffet ou service à table.',
    video: './2.mp4',
  },
  {
    icon: Briefcase,
    title: "Événements d'Entreprise",
    description: "Cocktails, séminaires, repas d'affaires. Impressionnez vos partenaires.",
    video: './1.mp4',
  },
  {
    icon: Gift,
    title: 'Anniversaires & Fêtes',
    description: 'Célébrez vos moments joyeux avec des gâteaux spectaculaires et des buffets variés.',
    video: './3.mp4',
  },
  {
    icon: Wine,
    title: 'Buffets & Cocktails',
    description: 'Une variété de bouchées fines et de boissons rafraîchissantes pour vos réceptions.',
    video: './4.mp4',
  },
  {
    icon: Truck,
    title: 'Service à Domicile',
    description: 'Le restaurant vient à vous. Profitez de nos chefs dans le confort de votre maison.',
    video: './5.mp4',
  },
  {
    icon: GraduationCap,
    title: 'Formation Culinaire',
    description: 'Apprenez les secrets de la cuisine camerounaise avec nos ateliers pratiques.',
    video: './6.mp4',
  }
];

export function ServicesSection() {
  // État pour la vidéo sélectionnée
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 bg-cameroon-cream bg-pattern-overlay relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-cameroon-green mb-4">
            Nos Services
          </h2>
          <div className="h-1 w-24 bg-cameroon-terracotta mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
              onClick={() => setActiveVideo(service.video)} 
            />
          ))}
        </div>
      </div>

      {/* MODAL VIDEO OVERLAY */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)} // Ferme au clic sur le fond
          >
            {/* Bouton Fermer */}
            <button 
              className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
              onClick={() => setActiveVideo(null)}
            >
              <X size={48} />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique sur la vidéo
            >
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ServiceCard({ service, index, onClick }: { service: Service; index: number; onClick: () => void }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative h-[400px] rounded-xl overflow-hidden shadow-xl cursor-pointer bg-black"
    >
      {/* Background Video Preview */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6 }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
        >
          <source src={service.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="w-14 h-14 bg-cameroon-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-cameroon-gold/50 group-hover:bg-cameroon-gold group-hover:text-cameroon-green transition-colors duration-300">
            <Icon className="w-7 h-7 text-cameroon-gold group-hover:text-cameroon-green transition-colors duration-300" />
          </div>

          <h3 className="font-heading text-2xl font-bold mb-3 text-cameroon-gold group-hover:text-white transition-colors">
            {service.title}
          </h3>

          <p className="text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
            {service.description}
          </p>

          <div className="h-1 w-12 bg-cameroon-gold mt-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 delay-150" />
        </div>
      </div>
    </motion.div>
  );
}