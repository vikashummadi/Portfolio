import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Code, ExternalLink, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/vikashummadi/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vikash-4946752a5/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vikashummadi@gmail.com', label: 'Email' },
    { icon: Code, href: 'https://leetcode.com/u/Vikashummadi/', label: 'LeetCode' },
    { icon: ExternalLink, href: 'https://www.geeksforgeeks.org/user/vikashu01j7/', label: 'GeeksforGeeks' }
  ];

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity 
          }}
          className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-3xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Vikash Kumar Reddy
            </motion.h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Aspiring Full-Stack Developer passionate about creating innovative solutions 
              and solving complex problems through code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    y: -3
                  }}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: '#60a5fa' }}
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-3 text-gray-400"
                whileHover={{ x: 5 }}
              >
                <Mail size={18} className="text-blue-400" />
                <span>vikashummadi@gmail.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-gray-400"
                whileHover={{ x: 5 }}
              >
                <Code size={18} className="text-green-400" />
                <span>Available for opportunities</span>
              </motion.div>
            </div>
            
            <motion.div
              className="mt-6 p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/30"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-blue-300 mb-2">Currently seeking</p>
              <p className="text-white font-semibold">Full-Stack Developer Opportunities</p>
              <p className="text-white font-semibold">Software Development Engineer (SDE)</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-400 flex items-center mb-4 md:mb-0"
              whileHover={{ scale: 1.05 }}
            >
              Made with <Heart size={16} className="text-red-500 mx-2 animate-pulse" /> by Vikash Kumar Reddy
              <span className="mx-2">•</span>
              © 2025 All rights reserved
            </motion.p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ 
                scale: 1.1,
                y: -3,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};