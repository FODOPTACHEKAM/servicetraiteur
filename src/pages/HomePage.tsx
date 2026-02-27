import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { LocationSection } from '../components/LocationSection';
import { GallerySection } from '../components/GallerySection';
import { ReceptionCycleSection } from '../components/ReceptionCycleSection';
import { ServicesSection } from '../components/ServicesSection';
import { AboutSection } from '../components/AboutSection';
import { ReservationSection } from '../components/ReservationSection';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
export function HomePage() {
  return (
    <div className="min-h-screen bg-cameroon-cream overflow-x-hidden">
      <Header />

      <main>
        <HeroSection />
        <LocationSection />
        <GallerySection />
        <ReceptionCycleSection />
        <ServicesSection />
        <AboutSection />
        <ReservationSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>);

}