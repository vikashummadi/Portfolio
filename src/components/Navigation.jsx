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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-nav-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
    link.href = 'https://docs.google.com/document/d/1Q77H36xSN5M85ekXW4moe5Eh36l-5FPP/export?format=pdf';
    link.download = 'Vikash_Kumar_Reddy_Resume.pdf';
    link.click();
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-white/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
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
              className={`text-xl sm:text-2xl font-bold transition-all duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              <span className="relative">
                Vikash Ummadi 
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
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
                  className={`relative px-3 xl:px-4 py-2 font-medium transition-all duration-300 rounded-lg flex items-center space-x-2 text-sm xl:text-base ${
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
                  <span className="hidden xl:inline">{link.label}</span>
                  
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
                className="ml-2 xl:ml-4 px-4 xl:px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center space-x-2 text-sm xl:text-base"
              >
                <Download size={16} />
                <span className="hidden xl:inline">Resume</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-nav-container lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-lg transition-all duration-300 ${
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
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
              className="mobile-nav-container fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">Menu</h3>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X size={20} className="text-gray-600" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 py-6 overflow-y-auto">
                  <div className="space-y-2 px-6">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href, link.id);
                        }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-300 ${
                          activeSection === link.id
                            ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                        }`}
                      >
                        <link.icon size={20} />
                        <span className="font-medium text-lg">{link.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Resume Button */}
                <div className="p-6 border-t border-gray-200">
                  <motion.button
                    onClick={handleResumeDownload}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                  >
                    <Download size={20} />
                    <span>Download Resume</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};