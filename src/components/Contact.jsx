import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, ExternalLink, Code, AlertCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [activeField, setActiveField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // EmailJS configuration - you'll need to set up your own account
      const result = await emailjs.sendForm(
        'service_0jjpnyw', 
        'template_vfqmlsr', 
        formRef.current,
        'pV3z33OV8WEqPwZb3' 
      );
      
      console.log('Email sent successfully:', result.text);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setError('Failed to send message. Please try again or contact me directly at vikashummadi@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vikashummadi@gmail.com',
      description: 'Send me an email anytime!',
      color: 'from-blue-500 to-cyan-500',
      link: 'mailto:vikashummadi@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8522026947',
      description: 'Available for calls',
      color: 'from-green-500 to-emerald-500',
      link: 'tel:+91 8522026947'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Tirupati, Andhra Pradesh',
      description: 'Open to remote opportunities',
      color: 'from-purple-500 to-pink-500',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/vikashummadi/',
      color: 'hover:text-gray-300',
      description: 'Check out my code'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vikash-4946752a5/',
      color: 'hover:text-blue-400',
      description: 'Professional network'
    },
    {
      icon: Code,
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Vikashummadi/',
      color: 'hover:text-yellow-400',
      description: 'Coding practice'
    },
    {
      icon: ExternalLink,
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/user/vikashu01j7/',
      color: 'hover:text-green-400',
      description: 'Problem solving'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity },
            opacity: { duration: 6, repeat: Infinity }
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity },
            x: { duration: 8, repeat: Infinity },
            y: { duration: 6, repeat: Infinity }
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16" animation="scaleIn">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 140 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"
          />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on exciting projects? Let's connect and discuss how we can work together to build something amazing.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <AnimatedSection delay={0.2} animation="fadeInLeft">
            <div className="space-y-8">
              <motion.h3 
                className="text-3xl font-bold text-white mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                Let's Connect
              </motion.h3>
              
              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      x: 10,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                    }}
                    className="flex items-center space-x-6 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300 block"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <info.icon size={24} className="text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-blue-300 font-medium mb-1">{info.value}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-8"
              >
                <h4 className="text-xl font-semibold text-white mb-6">Find Me Online</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -5,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                      }}
                      className={`flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 text-white ${social.color}`}
                    >
                      <social.icon size={20} />
                      <div>
                        <p className="font-medium">{social.name}</p>
                        <p className="text-xs text-gray-400">{social.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.4} animation="fadeInRight">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Send a Message
              </motion.h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      required
                      whileFocus={{ scale: 1.02 }}
                      className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 ${
                        activeField === 'name' ? 'ring-2 ring-blue-400 border-blue-400' : ''
                      }`}
                      placeholder="Your Name"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      required
                      whileFocus={{ scale: 1.02 }}
                      className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 ${
                        activeField === 'email' ? 'ring-2 ring-blue-400 border-blue-400' : ''
                      }`}
                      placeholder="your@email.com"
                    />
                  </motion.div>
                </div>

                {/* Subject */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setActiveField('subject')}
                    onBlur={() => setActiveField(null)}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 ${
                      activeField === 'subject' ? 'ring-2 ring-blue-400 border-blue-400' : ''
                    }`}
                    placeholder="What's this about?"
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    required
                    rows={5}
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none ${
                      activeField === 'message' ? 'ring-2 ring-blue-400 border-blue-400' : ''
                    }`}
                    placeholder="Tell me about your project or opportunity..."
                  />
                </motion.div>

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300"
                  >
                    <AlertCircle size={20} />
                    <span>{error}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-green-600 disabled:to-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitted ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="flex items-center"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <CheckCircle size={20} className="mr-2" />
                          </motion.div>
                          Message Sent Successfully!
                        </motion.div>
                      ) : isSubmitting ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="flex items-center"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                          Sending Message...
                        </motion.div>
                      ) : (
                        <motion.div
                          key="default"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="flex items-center"
                        >
                          <Send size={20} className="mr-2" />
                          Send Message
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};