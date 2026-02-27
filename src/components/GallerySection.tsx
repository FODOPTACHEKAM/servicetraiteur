import React, { useState } from 'react';
import { motion } from 'framer-motion';
const photos = [
{
  id: 1,
  url: 'https://i.postimg.cc/cJFwLdZr/traditio.jpg',
  title: 'Plats Traditionnels',
  rotation: -2
},
{
  id: 2,
  url: 'https://i.postimg.cc/tJXKtdw3/buf-et-cock.jpg',
  title: 'Buffets Exquis',
  rotation: 3
},
{
  id: 3,
  url: 'https://i.postimg.cc/Gt0YF2vL/ev-entre.jpg',
  title: 'Dîners de Gala',
  rotation: -1
},
{
  id: 4,
  url: 'https://i.postimg.cc/d0wLCpnG/fraicheur.jpg',
  title: 'Fraîcheur Garantie',
  rotation: 2
},
{
  id: 5,
  url: 'https://i.postimg.cc/ZnxTJ5tH/serv-trai.jpg',
  title: 'Service Traiteur',
  rotation: -3
},
{
  id: 6,
  url: 'https://i.postimg.cc/YSDb05w2/fruits.jpg',
  title: 'Présentation Soignée',
  rotation: 1
},
{
  id: 7,
  url: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=800',
  title: 'Mariages',
  rotation: -2
},
{
  id: 8,
  url: 'https://i.postimg.cc/kgNSxq5X/chick-plus.jpg',
  title: 'Décoration Florale',
  rotation: 2
}];

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-24 bg-cameroon-green relative overflow-hidden">

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-cameroon-gold blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cameroon-terracotta blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">

            Notre Galerie
          </motion.h2>
          <motion.div
            initial={{
              width: 0
            }}
            whileInView={{
              width: 100
            }}
            viewport={{
              once: true
            }}
            className="h-1 bg-cameroon-gold mx-auto mb-6" />

          <motion.p
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2
            }}
            className="text-cameroon-cream/80 text-lg max-w-2xl mx-auto">

            Découvrez nos créations culinaires et nos mises en scène
            spectaculaires.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 p-4">
          {photos.map((photo, index) =>
          <PhotoFrame key={photo.id} photo={photo} index={index} />
          )}
        </div>
      </div>
    </section>);

}
function PhotoFrame({ photo, index }: {photo: any;index: number;}) {
  // Calculate random initial positions for the "scatter" effect
  const randomX = Math.random() * 200 - 100;
  const randomY = Math.random() * 200 - 100;
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: randomX,
        y: randomY,
        scale: 0.8,
        rotate: Math.random() * 20 - 10
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: photo.rotation
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 15,
        delay: index * 0.1
      }}
      whileHover={{
        scale: 1.1,
        rotate: 0,
        zIndex: 10,
        transition: {
          duration: 0.3
        }
      }}
      className="relative group cursor-pointer">

      <div className="bg-white p-3 pb-12 shadow-2xl transform transition-transform duration-300">
        <div className="overflow-hidden aspect-[4/5] bg-gray-200">
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-full object-cover filter sepia-[0.2] group-hover:sepia-0 transition-all duration-500" />

        </div>
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="font-heading font-bold text-cameroon-charcoal text-lg opacity-80 group-hover:opacity-100 transition-opacity">
            {photo.title}
          </p>
        </div>

        {/* Pin effect */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cameroon-gold shadow-md border border-white/50 z-20"></div>
      </div>
    </motion.div>);

}