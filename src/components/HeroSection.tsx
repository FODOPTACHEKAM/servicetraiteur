import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const logoSize = 80; // Taille légèrement réduite pour plus d'élégance
  const numLogos =20;

  // --- Configuration de la zone centrale ---
  // On définit une zone de navigation (ex: 60% de l'écran)
  const containerWidth = window.innerWidth * 2;
  const containerHeight = window.innerHeight * 2;
  // Calcul des offsets pour centrer cette zone
  const offsetX = (window.innerWidth - containerWidth) / 2;
  const offsetY = (window.innerHeight - containerHeight) / 2;

  const [logos, setLogos] = useState(
    Array.from({ length: numLogos }).map(() => ({
      pos: { 
        x: offsetX + Math.random() * (containerWidth - logoSize), 
        y: offsetY + Math.random() * (containerHeight - logoSize) 
      },
      // Vitesse négative en X pour aller vers la gauche
      vel: { x: -(Math.random() * 1.5 + 0.5), y: (Math.random() * 2 - 1) } 
    }))
  );

  useEffect(() => {
    const moveLogos = () => {
      setLogos((prevLogos) =>
        prevLogos.map((logo) => {
          let newX = logo.pos.x + logo.vel.x;
          let newY = logo.pos.y + logo.vel.y;
          let newVelX = logo.vel.x;
          let newVelY = logo.vel.y;

          // Rebond sur les limites de la ZONE CENTRALE (Gauche / Droite)
          if (newX <= offsetX || newX >= offsetX + containerWidth - logoSize) {
            newVelX = -logo.vel.x;
          }
          // Rebond sur les limites de la ZONE CENTRALE (Haut / Bas)
          if (newY <= offsetY || newY >= offsetY + containerHeight - logoSize) {
            newVelY = -logo.vel.y;
          }

          return {
            pos: { x: newX, y: newY },
            vel: { x: newVelX, y: newVelY }
          };
        })
      );
    };

    const animationFrame = requestAnimationFrame(moveLogos);
    return () => cancelAnimationFrame(animationFrame);
  }, [logos]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.5 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gold-wave {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-gold-wave {
          background: linear-gradient(90deg, #FCD116 0%, #FCD116 40%, #FFFFFF 50%, #FCD116 60%, #FCD116 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gold-wave 4s linear infinite;
        }
      `}} />

      {/* --- LOGOS NAVIGUANT DANS LA ZONE CENTRALE --- */}
      {logos.map((logo, index) => (
        <div 
          key={index}
          className="absolute z-20 pointer-events-none" // z-20 pour être derrière le texte principal mais devant le fond
          style={{ 
            transform: `translate(${logo.pos.x}px, ${logo.pos.y}px)`,
            width: logoSize,
            height: logoSize,
            opacity:16
          }}
        >
          <div className="w-full h-full rounded-full overflow-hidden border border-cameroon-gold/50 shadow-[0_0_20px_rgba(252,209,22,0.3)]">
            <img src="logo.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
        </div>
      ))}

      {/* Background with Parallax */}
      <motion.div style={{ y: yParallax, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-cameroon-green/90 z-10" />
        <img src="https://i.postimg.cc/1RcQ6zxf/userrrr2.jpg" alt="Table" className="w-full h-full object-cover" />
      </motion.div>

      {/* Content */}
      <motion.div className="relative z-30 text-center px-4 max-w-4xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block py-1 px-3 border border-cameroon-gold text-cameroon-gold uppercase tracking-[0.2em] text-sm md:text-base bg-black/30 backdrop-blur-sm rounded-sm">
            Service Traiteur Haut De Gamme
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-shadow-lg">
          <span className="animate-gold-wave">DIANE_TASTING</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
          L'Art de la Gastronomie Camerounaise sublimé pour vos moments d'exception.
        </motion.p>

        <motion.div variants={itemVariants}>
          <a href="#services" className="group inline-flex items-center gap-3 bg-cameroon-gold text-cameroon-green px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105">
            Découvrir Nos Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-white/70">Découvrir</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-0.5 h-12 bg-gradient-to-b from-cameroon-gold to-transparent" />
      </div>
    </section>
  );
}