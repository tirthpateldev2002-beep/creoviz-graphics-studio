import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/Creoviz_Blue.png';
import { Magnetic } from '../ui/Magnetic';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' },
  ];

  // Mobile Menu Drawer Variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: 'afterChildren',
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -16 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 px-6 py-6 pointer-events-none">
        <header
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.68)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
          className={`mx-auto w-full max-w-7xl rounded-full transition-all duration-700 pointer-events-auto border border-white/40 shadow-premium-md ${
            scrolled ? 'px-8 py-3.5' : 'px-6 py-4'
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" onClick={handleLogoClick} className="flex items-center group focus:outline-none shrink-0">
              <img
                src={logo}
                alt="Creoviz Logo"
                className="h-[36px] lg:h-[42px] w-auto object-contain transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:brightness-[1.08]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full border border-primary/5 bg-primary/5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-5 py-2 text-xs font-sans font-bold uppercase tracking-wider transition-colors duration-300 rounded-full ${
                      isActive
                        ? 'text-[#FF5A1F]'
                        : 'text-text-secondary hover:text-[#FF5A1F]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{link.name}</span>
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-1 left-5 right-5 h-[2px] bg-[#FF5A1F] rounded-full"
                          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Magnetic>
                <button
                  onClick={() => {
                    navigate('/contact');
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className={`px-6 py-2.5 font-sans font-semibold tracking-wider text-xs uppercase rounded-full select-none cursor-pointer transition-all duration-300 ${
                    scrolled
                      ? 'bg-primary text-bg-light hover:bg-primary-light hover:shadow-premium-md'
                      : 'bg-white text-[#1B2450] hover:bg-white/90 hover:shadow-[0_4px_24px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:translate-y-0'
                  }`}
                >
                  Start a Project
                </button>
              </Magnetic>
            </div>

            {/* Mobile Menu Action */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 p-2 flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full border border-glass-border glass-panel hover:border-glass-border-glow transition-all duration-500 focus:outline-none"
                aria-label="Toggle Menu"
              >
                <span
                  className={`w-5 h-[1.5px] rounded-full transition-transform duration-300 bg-primary ${isOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`}
                />
                <span
                  className={`w-5 h-[1.5px] rounded-full transition-transform duration-300 bg-primary ${isOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`}
                />
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg-light/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-8 pt-32"
          >
            <motion.nav
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col gap-6"
            >
              {navLinks.map((link) => (
                <motion.div variants={itemVariants} key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `font-display font-bold text-4xl uppercase tracking-tight transition-colors duration-300 ${
                        isActive
                          ? 'text-[#FF5A1F]'
                          : 'text-primary hover:text-[#FF5A1F]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-6"
            >
              <div className="w-full h-[1px] bg-primary/10" />
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate('/contact');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="w-full py-4 rounded-full bg-primary hover:bg-primary-light text-bg-light font-sans font-bold text-center tracking-wider text-xs uppercase shadow-premium-sm transition-all duration-300"
              >
                Start a Project
              </button>
              <div className="text-center text-[10px] text-text-muted uppercase tracking-widest font-mono">
                CREOVIZ GRAPHICS STUDIO &bull; EST. 2026
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
