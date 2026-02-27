import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  CheckCircle,
  Calendar,
  Users,
  MessageSquare,
  Phone,
  Mail,
  User } from
'lucide-react';
export function ReservationSection() {
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'>(
    'idle');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch('https://formspree.io/f/mvzbdwvj', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json'
        }
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };
  return (
    <section
      id="contact"
      className="py-24 bg-cameroon-green relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
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
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">

            Réservez Votre Événement
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

            Confiez-nous l'organisation de votre prochain événement. Remplissez
            le formulaire ci-dessous et nous vous contacterons rapidement.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 shadow-2xl rounded-2xl overflow-hidden max-w-6xl mx-auto">
          {/* Left Side - Image & Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="lg:w-2/5 relative min-h-[400px] lg:min-h-full">

            <img
              src="https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=800"
              alt="Table de réception élégante"
              className="absolute inset-0 w-full h-full object-cover" />

            <div className="absolute inset-0 bg-cameroon-green/80 backdrop-blur-sm p-8 flex flex-col justify-center text-white">
              <div className="border-2 border-cameroon-gold p-8 h-full flex flex-col justify-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cameroon-green px-4">
                  <span className="text-cameroon-gold text-2xl">✦</span>
                </div>

                <h3 className="font-heading text-2xl font-bold mb-6 text-center text-cameroon-gold">
                  Informations de Contact
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-full text-cameroon-gold">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Téléphone</p>
                      <p className="font-bold">+237 600 000 000</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-full text-cameroon-gold">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Email</p>
                      <p className="font-bold">contact@saveurscameroun.cm</p>
                    </div>
                  </div>

                  <div className="mt-8 text-center text-sm text-gray-300 italic">
                    "Nous transformons vos rêves en réalité culinaire."
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="lg:w-3/5 bg-white p-8 md:p-12">

            {status === 'success' ?
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <motion.div
                initial={{
                  scale: 0
                }}
                animate={{
                  scale: 1
                }}
                className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">

                  <CheckCircle className="w-10 h-10" />
                </motion.div>
                <h3 className="font-heading text-3xl font-bold text-cameroon-green mb-4">
                  Message Envoyé !
                </h3>
                <p className="text-gray-600 max-w-md">
                  Merci de nous avoir contactés. Notre équipe examinera votre
                  demande et vous répondra dans les plus brefs délais.
                </p>
                <button
                onClick={() => setStatus('idle')}
                className="mt-8 text-cameroon-gold font-bold hover:underline">

                  Envoyer une autre demande
                </button>
              </div> :

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                    htmlFor="name"
                    className="text-sm font-bold text-gray-700 flex items-center gap-2">

                      <User className="w-4 h-4 text-cameroon-gold" /> Nom
                      Complet
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cameroon-gold focus:ring-1 focus:ring-cameroon-gold outline-none transition-all"
                    placeholder="Votre nom" />

                  </div>

                  <div className="space-y-2">
                    <label
                    htmlFor="email"
                    className="text-sm font-bold text-gray-700 flex items-center gap-2">

                      <Mail className="w-4 h-4 text-cameroon-gold" /> Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cameroon-gold focus:ring-1 focus:ring-cameroon-gold outline-none transition-all"
                    placeholder="votre@email.com" />

                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                    htmlFor="phone"
                    className="text-sm font-bold text-gray-700 flex items-center gap-2">

                      <Phone className="w-4 h-4 text-cameroon-gold" /> Téléphone
                    </label>
                    <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cameroon-gold focus:ring-1 focus:ring-cameroon-gold outline-none transition-all"
                    placeholder="+237..." />

                  </div>

                  <div className="space-y-2">
                    <label
                    htmlFor="type"
                    className="text-sm font-bold text-gray-700 flex items-center gap-2">

                      <Calendar className="w-4 h-4 text-cameroon-gold" /> Type
                      d'événement
                    </label>
                    <select
                    id="type"
                    name="type"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cameroon-gold focus:ring-1 focus:ring-cameroon-gold outline-none transition-all appearance-none">

                      <option value="Mariage">Mariage</option>
                      <option value="Entreprise">Événement d'Entreprise</option>
                      <option value="Anniversaire">Anniversaire</option>
                      <option value="Buffet">Buffet / Cocktail</option>
                      <option value="Domicile">Service à Domicile</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                    htmlFor="date"
                    className="text-sm font-bold text-gray-700 flex items-center gap-2">

                      <Calendar className="w-4 h-4 text-cameroon-gold" /> Date
                      Souhaitée
                    </label>
                    <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cameroon-gold focus:ring-1 focus:ring-cameroon-gold outline-none transition-all" />

                  </div>

                  <div className="space-y-2">
                    <label
                    htmlFor="guests"
                    className="text-sm font-bold text-gray-700 flex items-center gap-2">

                      <Users className="w-4 h-4 text-cameroon-gold" /> Nombre
                      d'invités
                    </label>
                    <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cameroon-gold focus:ring-1 focus:ring-cameroon-gold outline-none transition-all"
                    placeholder="Ex: 50" />

                  </div>
                </div>

                <div className="space-y-2">
                  <label
                  htmlFor="message"
                  className="text-sm font-bold text-gray-700 flex items-center gap-2">

                    <MessageSquare className="w-4 h-4 text-cameroon-gold" />{' '}
                    Message / Détails
                  </label>
                  <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cameroon-gold focus:ring-1 focus:ring-cameroon-gold outline-none transition-all resize-none"
                  placeholder="Parlez-nous de vos envies...">
                </textarea>
                </div>

                <motion.button
                whileHover={{
                  scale: 1.02
                }}
                whileTap={{
                  scale: 0.98
                }}
                disabled={status === 'submitting'}
                className="w-full bg-cameroon-gold text-cameroon-green font-bold text-lg py-4 rounded-lg shadow-lg hover:bg-cameroon-terracotta hover:text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">

                  {status === 'submitting' ?
                <span className="animate-pulse">Envoi en cours...</span> :

                <>
                      Envoyer la Demande <Send className="w-5 h-5" />
                    </>
                }
                </motion.button>

                {status === 'error' &&
              <p className="text-red-500 text-center text-sm">
                    Une erreur est survenue. Veuillez réessayer.
                  </p>
              }
              </form>
            }
          </motion.div>
        </div>
      </div>
    </section>);

}