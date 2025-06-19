import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Play, Star, Eye, GitBranch, Bot, Home, Users, Shield } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'CodeLearn - LMS Platform',
      category: 'fullstack',
      description: 'A comprehensive Learning Management System with AI-powered chatbot and real-time collaborative code rooms for interactive programming education.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'OpenAI API', 'Express.js', 'JWT'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 45, forks: 12, views: 890 },
      details: 'CodeLearn is a modern Learning Management System designed for programming education. It features an AI-powered chatbot that helps students with coding questions, real-time collaborative code rooms where multiple users can code together, progress tracking, assignment submission, and interactive quizzes. The platform supports multiple programming languages and provides instant feedback on code submissions.',
      highlights: [
        'AI Chatbot integration for instant help',
        'Real-time collaborative code editor',
        'Progress tracking and analytics',
        'Multi-language code execution',
        'Interactive quiz system',
        'Assignment management'
      ],
      icon: Bot
    },
    {
      id: 2,
      title: 'Nestora - Vacation Rental App',
      category: 'fullstack',
      description: 'An Airbnb-inspired vacation rental platform with advanced search, secure authentication, and cloud-based image management.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Cloudinary', 'Passport.js', 'Express.js', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 67, forks: 23, views: 1240 },
      details: 'Nestora is a full-featured vacation rental platform that allows users to list and book properties. It includes advanced search and filtering, secure user authentication with Passport.js, image upload and management with Cloudinary, booking management, payment integration with Stripe, user reviews and ratings, and responsive design for all devices.',
      highlights: [
        'Advanced property search and filters',
        'Secure authentication with Passport.js',
        'Cloud image management with Cloudinary',
        'Integrated payment system',
        'Review and rating system',
        'Responsive mobile-first design'
      ],
      icon: Home
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity }
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -40, 0]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 8, repeat: Infinity }
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16" animation="scaleIn">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 160 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"
          />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing my expertise in full-stack development through innovative projects that solve real-world problems.
          </p>
        </AnimatedSection>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={0.2 + index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Project Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  >
                    <project.icon size={24} className="text-white" />
                  </motion.div>

                  {/* Project Stats Overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 flex space-x-4 text-white text-sm"
                  >
                    <div className="flex items-center bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      <Star size={14} className="mr-1" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      <GitBranch size={14} className="mr-1" />
                      {project.stats.forks}
                    </div>
                    <div className="flex items-center bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      <Eye size={14} className="mr-1" />
                      {project.stats.views}
                    </div>
                  </motion.div>

                  {/* Play Button Overlay */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * techIndex }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-gray-400 text-sm">+{project.technologies.length - 4} more</span>
                    )}
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <>
                      <div className="relative">
                        <motion.img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-80 object-cover rounded-t-3xl"
                          layoutId={`project-image-${project.id}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-3xl" />
                        
                        <motion.button
                          onClick={() => setSelectedProject(null)}
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
                        >
                          <X size={24} className="text-white" />
                        </motion.button>

                        {/* Project Stats */}
                        <div className="absolute bottom-6 left-6 flex space-x-4">
                          {[
                            { icon: Star, value: project.stats.stars, label: 'Stars' },
                            { icon: GitBranch, value: project.stats.forks, label: 'Forks' },
                            { icon: Eye, value: project.stats.views, label: 'Views' }
                          ].map(({ icon: Icon, value, label }) => (
                            <motion.div
                              key={label}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              className="flex items-center bg-black/40 backdrop-blur-sm px-3 py-2 rounded-full text-white"
                            >
                              <Icon size={16} className="mr-2" />
                              <span className="font-semibold">{value}</span>
                              <span className="text-xs ml-1 opacity-75">{label}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="p-8">
                        <motion.h3 
                          className="text-3xl font-bold text-white mb-4"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          {project.title}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-gray-300 mb-6 leading-relaxed text-lg"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {project.details}
                        </motion.p>

                        {/* Highlights */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="mb-6"
                        >
                          <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {project.highlights.map((highlight, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="flex items-center text-gray-300"
                              >
                                <motion.span 
                                  className="text-green-400 mr-3"
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                >
                                  ✓
                                </motion.span>
                                {highlight}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="mb-8"
                        >
                          <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, index) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 + index * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                          className="flex space-x-4"
                        >
                          <motion.a
                            href={project.liveUrl}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-full transition-all duration-300 flex items-center"
                          >
                            <ExternalLink size={20} className="mr-2" />
                            Live Demo
                          </motion.a>
                          <motion.a
                            href={project.githubUrl}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-full transition-all duration-300 flex items-center"
                          >
                            <Github size={20} className="mr-2" />
                            View Code
                          </motion.a>
                        </motion.div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};