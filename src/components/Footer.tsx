import React from 'react';
import { Facebook, Instagram, Twitter, Music2, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-cameroon-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-cameroon-gold mb-4">
              DIANE_TASTING
            </h3>
            <p className="text-gray-400 mb-6">
              L'excellence culinaire au service de vos événements les plus
              précieux. Une touche d'authenticité et de luxe pour chaque
              occasion.
            </p>
            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-cameroon-gold hover:text-cameroon-green transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/diane_tasting_official_?igsh=YzVkODRmOTdmMw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-cameroon-gold hover:text-cameroon-green transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

             

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@diane.tasting?_t=8jDfnbK58uU&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-cameroon-gold hover:text-cameroon-green transition-colors"
              >
                <Music2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl font-bold text-white mb-6">
              Contactez-nous
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cameroon-gold mt-1" />
                <span>
                  123 Avenue de la Liberté,
                  <br />
                  Yaounde, Cameroun
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cameroon-gold" />
                <span>+237 652 353 726</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cameroon-gold" />
                <span>contact@saveurscameroun.cm</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl font-bold text-white mb-6">
              Liens Rapides
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#hero" className="hover:text-cameroon-gold transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-cameroon-gold transition-colors">Nos Services</a></li>
              <li><a href="#gallery" className="hover:text-cameroon-gold transition-colors">Galerie</a></li>
              <li><a href="#about" className="hover:text-cameroon-gold transition-colors">À Propos</a></li>
              <li><a href="#contact" className="hover:text-cameroon-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Diane-Tasting. Tous droits
            réservés.
          </p>
          <p className="mt-2">Fait avec ❤️ au Cameroun</p>
          <p className="mt-2 font-semibold">Développé par FODOP TACHEKAM IVAN JORDAN</p>
          <p className="mt-2">Contact: 651 987 460</p>
        </div>
      </div>
    </footer>
  );
}