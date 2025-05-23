import React, { useState, useEffect, useRef } from 'react';
import { Clock, Mail, Phone, Linkedin, Github, Calendar, ChevronDown } from 'lucide-react';
import martinPhoto from './assets/martin-photo.jpg';

const TechnicienSupportSite = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Créer des références pour chaque section
  const servicesRef = useRef(null);
  const disponibiliteRef = useRef(null);
  const contactRef = useRef(null);

  // État du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // S'assurer que la page commence en haut
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Nouvelle fonction de scroll utilisant les refs
  const scrollToSection = (section) => {
    const refs = {
      services: servicesRef,
      disponibilite: disponibiliteRef,
      contact: contactRef
    };
    
    const ref = refs[section];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Gestionnaire d'événement pour le formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Uniquement quand formData change
  useEffect(() => {
    console.log('État actuel du formulaire:', formData);
  }, [formData]);

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden relative">
      {/* Patterns SVG décoratifs */}
      <div className="fixed inset-0 z-0">
        {/* Pattern grille */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        />
        
        {/* Formes abstraites */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] opacity-10 animate-pulse"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.05), transparent 70%)'
          }}
        />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-10 animate-pulse"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.05), transparent 70%)'
          }}
        />
      </div>

      {/* Navigation flottante */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-md text-white' : 'bg-transparent text-black'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-light tracking-wider">
              MARTIN<span className="text-cyan-400">.</span>YIPPÉ
            </div>
            
            {/* Menu mobile button */}
            <button 
              onClick={toggleMenu}
              className={`md:hidden hover:text-cyan-400 z-50 ${scrollY > 50 ? 'text-white' : 'text-black'}`}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Menu mobile overlay - Correction ici */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg md:hidden transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {['Services', 'Disponibilité', 'Contact'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-2xl tracking-wider hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu desktop */}
            <div className="hidden md:flex space-x-8">
              {['Services', 'Disponibilité', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm tracking-wider hover:text-cyan-400 transition-colors relative group ${scrollY > 50 ? 'text-white' : 'text-black'}`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-32 md:pt-40 flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl backdrop-blur-sm p-6 md:p-8 rounded-2xl">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-light mb-8 md:mb-10 tracking-tight">
                Support
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
                  Technique
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 tracking-wide">
                Expert en solutions informatiques innovantes
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-900 transition-colors">
                  Prendre RDV
                </button>
                <button className="px-8 py-4 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>

            {/* Carte Info */}
            <div className="w-full md:w-[400px] space-y-4 backdrop-blur-sm p-4 sm:p-8 rounded-2xl border border-gray-100 mt-8 md:mt-0">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full border-2 border-gray-800 overflow-hidden">
                  <img src={martinPhoto} alt="Martin Yippé" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-gray-50">
                  <h3 className="text-gray-800 text-sm mb-1 font-medium">Certifications</h3>
                  <p className="text-gray-700">ITIL v4 • CompTIA A+ • Microsoft 365</p>
                </div>
                
                <div className="p-3 rounded-lg bg-gray-50">
                  <h3 className="text-gray-800 text-sm mb-1 font-medium">Expertise</h3>
                  <p className="text-gray-700">Windows • Linux • Mac OS • Cloud • Réseaux</p>
                </div>
                
                <div className="p-3 rounded-lg bg-gray-50">
                  <h3 className="text-gray-800 text-sm mb-1 font-medium">Langues</h3>
                  <p className="text-gray-700">Français • Anglais</p>
                </div>

                <div className="p-3 rounded-lg bg-gray-50">
                  <h3 className="text-gray-800 text-sm mb-1 font-medium">Interventions</h3>
                  <p className="text-gray-700">Sur site • À distance • Astreintes 24/7</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-gray-50">
                    <p className="text-2xl font-light text-gray-800">98%</p>
                    <p className="text-sm text-gray-600">Satisfaction</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-gray-50">
                    <p className="text-2xl font-light text-gray-800">1h</p>
                    <p className="text-sm text-gray-600">Réponse</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section avec ref */}
      <section ref={servicesRef} className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl mb-20 font-light tracking-wide">Services<span className="text-gray-400">.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Maintenance",
                desc: "Optimisation et surveillance proactive de vos systèmes",
              },
              {
                title: "Dépannage",
                desc: "Intervention rapide et efficace sur site ou à distance",
              },
              {
                title: "Conseil",
                desc: "Accompagnement stratégique et formation personnalisée",
              }
            ].map((service) => (
              <div 
                key={service.title}
                className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-light mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disponibilité Section avec ref */}
      <section ref={disponibiliteRef} className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl mb-20 font-light tracking-wide">Disponibilité<span className="text-gray-400">.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-light mb-6 flex items-center text-gray-800">
                <Clock className="mr-3 text-gray-600" /> Horaires
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>9h - 18h</span>
                </li>
                <li className="flex justify-between">
                  <span>Samedi</span>
                  <span>Sur RDV</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-light mb-6 flex items-center text-gray-800">
                <Calendar className="mr-3 text-gray-600" /> Urgences
              </h3>
              <p className="text-gray-600">
                Service d'assistance prioritaire 24/7 disponible pour les clients sous contrat.
                Temps de réponse garanti sous 2 heures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section avec ref et z-index corrigé */}
      <section ref={contactRef} className="py-32 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl mb-20 font-light tracking-wide">Contact<span className="text-gray-400">.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-6 text-gray-800">Restons en contact</h3>
                <p className="text-gray-600 max-w-md">
                  Une question ? Un projet ? N'hésitez pas à me contacter pour en discuter.
                </p>
              </div>
              <div className="space-y-4">
                <a href="mailto:contact@papik-it.fr" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                  <Mail className="mr-4" /> contact@papik-it.fr
                </a>
                <a href="tel:+33652921417" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                  <Phone className="mr-4" /> +33 6 52 92 14 17
                </a>
              </div>
              <div className="flex space-x-6">
                <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-800 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com" className="text-gray-600 hover:text-gray-800 transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Votre nom"
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-gray-800"
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Votre email"
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-gray-800"
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Votre message"
                rows={4}
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-gray-800"
              />
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-black text-white font-medium rounded-xl hover:bg-gray-900 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Martin Yippé - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
};

export default TechnicienSupportSite;