import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.',
      achievements: [
        'Increased application performance by 60% through optimization',
        'Led a team of 5 developers on critical projects',
        'Implemented CI/CD pipelines reducing deployment time by 80%',
        'Mentored 10+ junior developers'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      location: 'New York, NY',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed e-commerce platforms and payment integrations. Improved application performance by 40% through optimization techniques.',
      achievements: [
        'Built 3 major e-commerce platforms from scratch',
        'Integrated multiple payment gateways (Stripe, PayPal)',
        'Reduced page load times by 40%',
        'Implemented real-time chat system'
      ],
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Stripe API', 'Redis', 'Socket.io'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Built responsive web applications and mobile-first designs. Collaborated with UX team to implement pixel-perfect interfaces.',
      achievements: [
        'Developed responsive designs for 15+ projects',
        'Collaborated with design team on UI/UX improvements',
        'Implemented automated testing reducing bugs by 50%',
        'Created reusable component library'
      ],
      technologies: ['React', 'TypeScript', 'Sass', 'Jest', 'Figma', 'Storybook'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Junior Developer',
      company: 'WebDev Agency',
      location: 'Remote',
      period: '2018 - 2019',
      type: 'Contract',
      description: 'Started my professional journey building websites for small businesses and learning modern web development practices.',
      achievements: [
        'Delivered 20+ client websites on time',
        'Learned modern JavaScript frameworks',
        'Improved client satisfaction scores by 30%',
        'Built first full-stack application'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
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
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"
          />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A journey through my professional career, building innovative solutions and growing as a developer.
          </p>
        </AnimatedSection>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Timeline Navigation */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2} animation="fadeInLeft">
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      onClick={() => setSelectedExperience(index)}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                        selectedExperience === index
                          ? 'bg-white/10 border-blue-400/50 backdrop-blur-sm'
                          : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className={`font-semibold transition-colors ${
                            selectedExperience === index ? 'text-blue-400' : 'text-white'
                          }`}>
                            {exp.title}
                          </h3>
                          <p className="text-gray-400 text-sm">{exp.company}</p>
                          <p className="text-gray-500 text-xs">{exp.period}</p>
                        </div>
                        <ChevronRight 
                          size={20} 
                          className={`transition-all duration-300 ${
                            selectedExperience === index 
                              ? 'text-blue-400 rotate-90' 
                              : 'text-gray-500'
                          }`} 
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Experience Details */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedExperience}
                  initial={{ opacity: 0, x: 20, rotateY: -10 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -20, rotateY: 10 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl"
                >
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <motion.h3 
                          className="text-2xl font-bold text-white mb-2"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          {experiences[selectedExperience].title}
                        </motion.h3>
                        <motion.div 
                          className="flex items-center space-x-4 text-gray-300"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="flex items-center">
                            <Building size={16} className="mr-2 text-blue-400" />
                            <span>{experiences[selectedExperience].company}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2 text-green-400" />
                            <span>{experiences[selectedExperience].location}</span>
                          </div>
                        </motion.div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center bg-blue-500/20 px-3 py-1 rounded-full"
                      >
                        <Calendar size={14} className="mr-2 text-blue-400" />
                        <span className="text-sm text-blue-300">{experiences[selectedExperience].period}</span>
                      </motion.div>
                    </div>

                    <motion.p 
                      className="text-gray-300 leading-relaxed mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {experiences[selectedExperience].description}
                    </motion.p>

                    {/* Achievements */}
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {experiences[selectedExperience].achievements.map((achievement, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className="flex items-start text-gray-300"
                          >
                            <motion.span 
                              className="text-green-400 mr-3 mt-1"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                            >
                              ✓
                            </motion.span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {experiences[selectedExperience].technologies.map((tech, index) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 + index * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${experiences[selectedExperience].color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};