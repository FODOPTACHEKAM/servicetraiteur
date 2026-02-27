import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Newspaper } from 'lucide-react';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-cameroon-green/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 1.5
      }}>

      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div
  className="flex items-center gap-2 text-white cursor-pointer"
  onClick={() => scrollToSection('hero')}
>
 {/* Logo Container */}
<div className="bg-cameroon-gold rounded-full flex items-center justify-center overflow-hidden w-10 h-10">
  <img 
    src="/logo.jpg" 
    alt="Diana Tasting Logo" 
    className="w-full h-full object-cover" 
  />
</div>

  {/* Brand Name */}
  <span
    className={`font-heading font-bold text-xl md:text-2xl tracking-wider ${
      isScrolled ? 'text-white' : 'text-white text-shadow'
    }`}
  >
    DIANE TASTING
  </span>
</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('services')}
            className={`flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:text-cameroon-gold transition-colors ${isScrolled ? 'text-white' : 'text-white text-shadow'}`}>

            <Menu className="w-4 h-4" />
            Menu & Services
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className={`flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:text-cameroon-gold transition-colors ${isScrolled ? 'text-white' : 'text-white text-shadow'}`}>

            <Newspaper className="w-4 h-4" />
            Actualités
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-cameroon-gold text-cameroon-green px-6 py-2 rounded-full font-bold hover:bg-white transition-colors">

            Réserver
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-cameroon-green border-t border-cameroon-gold/20">

            <div className="flex flex-col p-4 space-y-4">
              <button
              onClick={() => scrollToSection('services')}
              className="text-white text-left py-2 border-b border-white/10">

                Nos Services
              </button>
              <button
              onClick={() => scrollToSection('gallery')}
              className="text-white text-left py-2 border-b border-white/10">

                Galerie
              </button>
              <button
              onClick={() => scrollToSection('about')}
              className="text-white text-left py-2 border-b border-white/10">

                À Propos
              </button>
              <button
              onClick={() => scrollToSection('contact')}
              className="text-cameroon-gold font-bold text-left py-2">

                Réserver Maintenant
              </button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.header>);

}