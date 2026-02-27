import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function AboutSection() {
  const scrollConfig = {
    once: false,
    amount: 0.3
  };

  return (
    <section
      id="about"
      className="py-24 bg-cameroon-green text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* CÔTÉ IMAGE - AVEC 3 CERCLES ANIMÉS */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={scrollConfig}
              transition={{ duration: 0.8, ease: "easeOut" }}
              
              animate={{
                y: [0, -15, 0],
                rotate: [0, 0.5, -0.5, 0]
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-72 h-72 md:w-96 md:h-96"
            >
              {/* 1. CERCLE EXTÉRIEUR : Pointillés Or (Rotation lente) */}
              <div className="absolute inset-0 border-4 border-dashed border-cameroon-gold/30 rounded-full animate-[spin_40s_linear_infinite]"></div>
              
              {/* 2. NOUVEAU CERCLE : Orange (Rotation sens inverse) */}
              <div className="absolute -inset-4 border-2 border-orange-5000/40 rounded-full animate-[spin_35s_linear_infinite_reverse]"></div>
              
              {/* 3. CERCLE INTERMÉDIAIRE : Ligne continue Or (Plus rapide) */}
              <div className="absolute inset-3 border-2 border-cameroon-gold/600 rounded-full animate-[spin_25s_linear_infinite]"></div>

              {/* Aura lumineuse pulsante */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.15, 1], 
                  opacity: [0.2, 0.4, 0.2] 
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-8 bg-cameroon-gold/20 rounded-full blur-3xl"
              />

              {/* Conteneur de l'image principale */}
              <div className="absolute inset-6 overflow-hidden rounded-full border-4 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] z-10">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  src="https://i.postimg.cc/WpMwcLCL/USER.png"
                  alt="Chef Cuisinier"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Côté Texte */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.h2
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={scrollConfig}
              className="font-heading text-4xl md:text-5xl font-bold mb-2"
            >
              Le Chef
            </motion.h2>
            
            <motion.h3
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={scrollConfig}
              transition={{ delay: 0.1 }}
              className="text-cameroon-gold text-xl font-bold mb-6 uppercase tracking-widest"
            >
              Derrière Diane_Tasting du Cameroun
            </motion.h3>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={scrollConfig}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-cameroon-cream/90 leading-relaxed"
            >
              <p>
                "Passionnée par les trésors culinaires de notre terroir, j'ai fondé Diane_Tasting avec une ambition claire : sublimer notre gastronomie pour en faire une véritable expérience artistique."
              </p>
              <p>
                "Chaque assiette raconte une histoire : celle d'un savoir-faire passionné et d'une hospitalité qui nous ressemble."
              </p>
            </motion.div>

            {/* BLOC CITATION */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={scrollConfig}
              transition={{ 
                duration: 1, 
                ease: [0.16, 1, 0.3, 1], 
                delay: 0.4 
              }}
              className="mt-12 p-8 bg-gradient-to-br from-white/10 to-transparent rounded-2xl border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-cameroon-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <Quote className="absolute top-4 left-4 w-10 h-10 text-cameroon-gold/20" />
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={scrollConfig}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <p className="font-heading italic text-base sm:text-xl lg:text-2xl pl-8 relative z-10 leading-snug whitespace-nowrap">
  "La cuisine est le seul art qui nourrit à la fois le corps et l'âme."
</p>
                
                <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: "40px" }}
                   viewport={scrollConfig}
                   transition={{ delay: 1.2, duration: 0.6 }}
                   className="h-1 bg-cameroon-gold mt-6 ml-8"
                />

                <p className="text-right mt-4 font-bold text-cameroon-gold tracking-widest text-sm uppercase">
                  — Chef Diane
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}