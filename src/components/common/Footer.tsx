import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import logoWhite from '../../assets/Creoviz_White.webp';

export const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, 50);
    }
  };

  const handleFooterLinkClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: 'Brand Identity', path: '/services' },
    { name: 'Logo Design', path: '/services' },
    { name: 'Packaging Design', path: '/services' },
    { name: 'Website Design', path: '/services' },
    { name: 'UI Design', path: '/services' },
    { name: 'Social Media Design', path: '/services' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative bg-[#1B2450] text-bg-light pt-24 pb-12 overflow-hidden z-20 border-t border-white/5">
      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] bg-gradient-to-t from-accent/5 to-transparent pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 md:gap-8 mb-20">
          {/* Brand Info */}
          <div className="md:col-span-2 pr-0 md:pr-12">
            <Link to="/" onClick={handleLogoClick} className="inline-block mb-6 group">
              <img
                src={logoWhite}
                alt="Creoviz Logo"
                className="h-[36px] lg:h-[42px] w-auto object-contain transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:brightness-[1.08]"
              />
            </Link>
            <p className="text-[#D9DCE7] text-sm font-sans font-light leading-relaxed max-w-sm mb-8">
              We help businesses build memorable brands through custom visual identity design, retail packaging box solutions, and modern digital interfaces.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/creoviz_graphics_studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-accent flex items-center justify-center text-white/60 hover:text-white hover:shadow-[0_0_16px_rgba(255,90,31,0.3)] transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="https://www.behance.net/creovizgraphics30"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-accent flex items-center justify-center text-white/60 hover:text-white hover:shadow-[0_0_16px_rgba(255,90,31,0.3)] transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 6h3.5a2.5 2.5 0 0 1 0 5H6M6 11h4a3.5 3.5 0 0 1 0 7H6M6 6v12" />
                  <path d="M14 13.5h6C20 10 14 10 14 14C14 18 20 18 20 16" />
                  <line x1="15" y1="8" x2="19" y2="8" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/tirth-patel-56030627a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-accent flex items-center justify-center text-white/60 hover:text-white hover:shadow-[0_0_16px_rgba(255,90,31,0.3)] transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold text-xs uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    onClick={() => handleFooterLinkClick(link.path)}
                    className="text-white/80 hover:text-accent transition-colors duration-300 text-sm font-sans font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h4 className="text-white font-display font-semibold text-xs uppercase tracking-widest mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    onClick={() => handleFooterLinkClick(link.path)}
                    className="text-white/80 hover:text-accent transition-colors duration-300 text-sm font-sans font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-display font-semibold text-xs uppercase tracking-widest mb-6">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 text-sm font-sans font-light text-white/80">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+919409073599" className="hover:text-accent transition-colors duration-300">
                  +91 94090 73599
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:creovizgraphic30@gmail.com" className="hover:text-accent transition-colors duration-300 break-all">
                  creovizgraphic30@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="hover:text-accent transition-colors duration-300">Bharuch, Gujarat, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/5 mb-8 mt-12" />

        {/* Bottom copyright & Scroll To Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans font-semibold text-white/60 uppercase tracking-widest">
          <div>
            &copy; {currentYear} CREOVIZ Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors duration-300 cursor-pointer focus:outline-none"
            >
              Back to Top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
