import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, FolderOpen, Code, Award, Mail, Download } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'projects', 'skills', 'achievements', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section === 'hero' ? '' : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#', label: 'Home', icon: Home, id: 'hero' },
    { href: '#about', label: 'About', icon: User, id: 'about' },
    { href: '#projects', label: 'Projects', icon: FolderOpen, id: 'projects' },
    { href: '#skills', label: 'Skills', icon: Code, id: 'skills' },
    { href: '#achievements', label: 'Achievements', icon: Award, id: 'achievements' },
    { href: '#contact', label: 'Contact', icon: Mail, id: 'contact' }
  ];

  const scrollToSection = (href, id) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleResumeDownload = () => {
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1hJjJotdSH6aCEeWzFlsk3nCCthiPrl-_/view';
    link.download = 'Vikash_Kumar_Reddy_Resume.pdf';
    link.click();
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-white/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#', 'hero');
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={`text-2xl font-bold transition-all duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              <span className="relative">
                Vikash Ummadi
              </span>
            </motion.a>

            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href, link.id);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg flex items-center space-x-2 ${
                    activeSection === link.id
                      ? scrolled
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-blue-400 bg-white/10'
                      : scrolled
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <link.icon size={16} />
                  <span>{link.label}</span>
                  
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
              
              <motion.button
                onClick={handleResumeDownload}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center space-x-2"
              >
                <Download size={16} />
                <span>Resume</span>
              </motion.button>
            </div>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-900 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl rounded-2xl mt-4 shadow-2xl border border-white/20"
              >
                <div className="py-6">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href, link.id);
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 px-6 py-3 text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                    >
                      <link.icon size={20} />
                      <span className="font-medium">{link.label}</span>
                    </motion.a>
                  ))}
                  <motion.button
                    onClick={handleResumeDownload}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                    className="flex items-center space-x-3 mx-6 mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                  >
                    <Download size={20} />
                    <span>Download Resume</span>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};