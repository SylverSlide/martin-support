import { useState, useEffect } from 'react';
import { Clock, Mail, Phone, Linkedin, Github, Calendar, ChevronDown } from 'lucide-react';

const TechnicienSupportSite = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Patterns SVG décoratifs */}
      <div className="fixed inset-0 z-0">
        {/* Pattern grille */}
        <div className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
        
        {/* Formes abstraites */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] opacity-30 animate-pulse"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1), transparent 70%)'
          }}
        />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 255, 0.1), transparent 70%)'
          }}
        />
        
        {/* Lignes décoratives */}
        <svg className="absolute top-0 left-0 w-full h-screen opacity-[0.15]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.1" />
          <path d="M0,100 L100,0" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.1" />
        </svg>
      </div>

      {/* Navigation flottante */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-light tracking-wider">M<span className="text-cyan-400">.</span></div>
            
            {/* Menu mobile button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-cyan-400 z-50"
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

            {/* Menu mobile overlay */}
            <div className={`fixed inset-0 bg-black/95 backdrop-blur-lg md:hidden transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {['Services', 'Disponibilité', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl tracking-wider hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Menu desktop */}
            <div className="hidden md:flex space-x-8">
              {['Services', 'Disponibilité', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm tracking-wider hover:text-cyan-400 transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section avec blobs animés */}
      <section className="h-screen flex items-center relative overflow-hidden">
        {/* Blobs avec nouvelles animations */}
        <div 
          className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500/30 rounded-full mix-blend-screen filter blur-3xl"
          style={{
            animation: 'moveBlob1 15s infinite',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
        <div 
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-screen filter blur-3xl"
          style={{
            animation: 'moveBlob2 18s infinite',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            animationDelay: '-2s'
          }}
        />
        <div 
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-screen filter blur-3xl"
          style={{
            animation: 'moveBlob3 20s infinite',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            animationDelay: '-4s'
          }}
        />

        {/* Style pour les animations des blobs */}
        <style jsx>{`
          @keyframes moveBlob1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(50px, 50px) scale(1.1); }
            50% { transform: translate(-30px, 20px) scale(0.9); }
            75% { transform: translate(20px, -50px) scale(1.05); }
          }
          @keyframes moveBlob2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-50px, -30px) scale(1.1); }
            66% { transform: translate(30px, 50px) scale(0.9); }
          }
          @keyframes moveBlob3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-50px, 30px) scale(0.9); }
          }
        `}</style>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl backdrop-blur-sm p-8 rounded-2xl">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-light mb-6 tracking-tight">
                Support
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Technique
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 tracking-wide">
                Expert en solutions informatiques innovantes
              </p>
              <div className="flex space-x-6">
                <button className="px-8 py-4 bg-cyan-400 text-black font-medium rounded-full hover:bg-cyan-300 transition-colors">
                  Prendre RDV
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>

            {/* Section infos clés */}
            <div className="w-full md:w-[400px] space-y-4 backdrop-blur-sm p-4 sm:p-8 rounded-2xl border border-white/10">
              <img 
                src="/api/placeholder/150/150" 
                alt="Portrait"
                className="rounded-full w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 object-cover border-2 border-cyan-400"
              />
              
              {/* Infos principales avec meilleure adaptation mobile */}
              <div className="space-y-3 sm:space-y-4">
                <div className="p-2 sm:p-3 rounded-lg bg-white/5">
                  <h3 className="text-cyan-400 text-xs sm:text-sm mb-1">Certifications</h3>
                  <p className="text-gray-300 text-sm sm:text-base">ITIL v4 • CompTIA A+ • Microsoft 365</p>
                </div>
                
                <div className="p-2 sm:p-3 rounded-lg bg-white/5">
                  <h3 className="text-cyan-400 text-xs sm:text-sm mb-1">Expertise</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Windows • Linux • Mac OS • Cloud • Réseaux</p>
                </div>
                
                <div className="p-2 sm:p-3 rounded-lg bg-white/5">
                  <h3 className="text-cyan-400 text-xs sm:text-sm mb-1">Langues</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Français • Anglais</p>
                </div>

                <div className="p-2 sm:p-3 rounded-lg bg-white/5">
                  <h3 className="text-cyan-400 text-xs sm:text-sm mb-1">Interventions</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Sur site • À distance • Astreintes 24/7</p>
                </div>
              </div>

              {/* Stats rapides */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-4 sm:mt-6">
                <div className="text-center p-2 sm:p-3 rounded-lg bg-white/5">
                  <p className="text-xl sm:text-2xl font-light text-cyan-400">98%</p>
                  <p className="text-xs sm:text-sm text-gray-400">Satisfaction client</p>
                </div>
                <div className="text-center p-2 sm:p-3 rounded-lg bg-white/5">
                  <p className="text-xl sm:text-2xl font-light text-cyan-400">1h</p>
                  <p className="text-xs sm:text-sm text-gray-400">Temps de réponse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChevronDown 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce"
          size={32}
        />
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        {/* Pattern géométrique */}
        <div className="absolute inset-0 opacity-[0.07]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl mb-20 font-light tracking-wide">Services<span className="text-cyan-400">.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Maintenance",
                desc: "Optimisation et surveillance proactive de vos systèmes",
                bg: "from-blue-400/20 to-cyan-400/20"
              },
              {
                title: "Dépannage",
                desc: "Intervention rapide et efficace sur site ou à distance",
                bg: "from-cyan-400/20 to-purple-400/20"
              },
              {
                title: "Conseil",
                desc: "Accompagnement stratégique et formation personnalisée",
                bg: "from-purple-400/20 to-blue-400/20"
              }
            ].map((service) => (
              <div 
                key={service.title}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bg} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="relative p-8 border border-white/10 rounded-2xl h-full backdrop-blur-sm hover:border-white/20 transition-colors">
                  <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disponibilité Section */}
      <section id="disponibilite" className="py-32 relative bg-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl mb-20 font-light tracking-wide">Disponibilité<span className="text-cyan-400">.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-white/20 transition-colors">
              <h3 className="text-2xl font-light mb-6 flex items-center">
                <Clock className="mr-3 text-cyan-400" /> Horaires
              </h3>
              <ul className="space-y-4 text-gray-400">
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
            <div className="p-8 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-white/20 transition-colors">
              <h3 className="text-2xl font-light mb-6 flex items-center">
                <Calendar className="mr-3 text-cyan-400" /> Urgences
              </h3>
              <p className="text-gray-400">
                Service d'assistance prioritaire 24/7 disponible pour les clients sous contrat.
                Temps de réponse garanti sous 2 heures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl mb-20 font-light tracking-wide">Contact<span className="text-cyan-400">.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-6">Restons en contact</h3>
                <p className="text-gray-400 max-w-md">
                  Une question ? Un projet ? N'hésitez pas à me contacter pour en discuter.
                </p>
              </div>
              <div className="space-y-4">
                <a href="mailto:contact@martin-support.fr" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                  <Mail className="mr-4" /> contact@martin-support.fr
                </a>
                <a href="tel:+33600000000" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                  <Phone className="mr-4" /> +33 6 00 00 00 00
                </a>
              </div>
              <div className="flex space-x-6">
                <a href="https://linkedin.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
            <form className="space-y-6">
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Votre nom"
                  className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-xl focus:border-cyan-400 transition-colors text-white placeholder-gray-500"
                />
                <input 
                  type="email" 
                  placeholder="Votre email"
                  className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-xl focus:border-cyan-400 transition-colors text-white placeholder-gray-500"
                />
                <textarea 
                  placeholder="Votre message"
                  rows={4}
                  className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-xl focus:border-cyan-400 transition-colors text-white placeholder-gray-500"
                />
              </div>
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-cyan-400 text-black font-medium rounded-xl hover:bg-cyan-300 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 Martin - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
};

export default TechnicienSupportSite;