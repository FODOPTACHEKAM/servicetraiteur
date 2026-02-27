import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation, ExternalLink } from 'lucide-react';

export function LocationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="location" className="py-24 bg-[#FCFBF7] relative overflow-hidden">
      {/* Éléments de fond décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cameroon-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-cameroon-green/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          
          {/* Colonne Gauche : Détails */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-12">
              <span className="text-cameroon-gold font-bold tracking-widest uppercase text-sm mb-3 block">
                Proximité & Prestige
              </span>
              <h2 className="font-heading text-5xl md:text-6xl font-black text-cameroon-green mb-6 leading-tight">
                Au Cœur de <br/><span className="text-cameroon-gold">Vos Projets</span>
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed max-w-md">
                Venez nous rencontrer dans notre showroom pour donner vie à vos visions les plus ambitieuses.
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                { 
                  icon: <MapPin />, 
                  title: "Showroom Yaounde",
                  content: "123 Avenue de la Liberté, Efoulan, Yaoundé",
                  sub: "Immeuble Prestige, 2ème étage" 
                },
                { 
                  icon: <Clock />, 
                  title: "Horaires d'Ouverture", 
                  content: "Lun — Ven: 08:00 - 19:30",
                  sub: "Samedi: 09:00 - 14:00" 
                },
                { 
                  icon: <Phone />, 
                  title: "Ligne Directe", 
                  content: "+237 652 353 726",
                  sub: "Conciergerie disponible 24/7" 
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-6 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-cameroon-gold/20 transition-all duration-500"
                >
                  <div className="bg-cameroon-green/5 text-cameroon-green p-4 rounded-xl group-hover:bg-cameroon-green group-hover:text-white transition-colors duration-500">
                    {React.cloneElement(item.icon, { size: 24, strokeWidth: 1.5 })}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-cameroon-green transition-colors">{item.title}</h3>
                    <p className="text-gray-700 font-medium">{item.content}</p>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Colonne Droite : Visuel Carte */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 order-1 lg:order-2 relative h-[600px] w-full group"
          >
            {/* Cadre décoratif extérieur */}
            <div className="absolute -inset-4 border border-cameroon-gold/20 rounded-[40px] pointer-events-none transition-transform duration-700 group-hover:scale-105" />
            
            <div className="relative h-full w-full rounded-[32px] overflow-hidden shadow-2xl bg-gray-100">
              {/* Nouvelle Image de Localisation Stylisée */}
              <img
                src="http://googleusercontent.com/image_collection/image_retrieval/15663325816060497962_0"
                alt="Localisation Prestige Douala"
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay Dégradé */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cameroon-green/40 via-transparent to-transparent opacity-60" />

              {/* Marqueur animé au centre */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-cameroon-gold animate-ping opacity-75 scale-[2.5]" />
                  <div className="relative bg-cameroon-gold text-white p-5 rounded-full shadow-2xl border-4 border-white">
                    <MapPin size={32} fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Carte flottante basse */}
              <div className="absolute bottom-6 left-6 right-6 z-30">
                <div className="bg-white/85 backdrop-blur-xl p-6 rounded-2xl shadow-2xl flex flex-wrap md:flex-nowrap justify-between items-center gap-6 border border-white/20">
                  <div className="flex items-center gap-5">
                    <div className="hidden sm:flex w-14 h-14 bg-cameroon-green rounded-xl items-center justify-center text-white shadow-lg">
                      <Navigation size={28} />
                    </div>
                    <div>
                      <p className="font-black text-cameroon-green text-xl">Siège Administratif</p>
                      <p className="text-gray-600">Efoulan Yaounde Immeuble Prestige</p>
                    </div>
                  </div>
                  
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full md:w-auto flex items-center justify-center gap-3 bg-cameroon-gold text-white px-8 py-4 rounded-xl font-bold hover:bg-cameroon-green transition-all duration-300 group/btn shadow-xl shadow-cameroon-gold/20"
                  >
                    Ouvrir GPS
                    <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}