import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/237652353726" // Placeholder number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors"
      initial={{
        scale: 0,
        opacity: 0
      }}
      animate={{
        scale: 1,
        opacity: 1
      }}
      whileHover={{
        scale: 1.05
      }}
      whileTap={{
        scale: 0.95
      }}>

      <motion.div
        animate={{
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop'
        }}>

        <MessageCircle className="w-6 h-6 fill-current" />
      </motion.div>
      <span className="font-bold hidden md:inline">
        Contactez-nous sur WhatsApp
      </span>
    </motion.a>);

}