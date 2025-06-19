import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Palette, Smartphone, Cloud, Shield, Zap, Globe } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 90, description: 'Building modern, interactive user interfaces' },
        { name: 'JavaScript (ES6+)', level: 88, description: 'Modern JavaScript development' },
        { name: 'HTML5 & CSS3', level: 92, description: 'Semantic markup and responsive styling' },
        { name: 'Tailwind CSS', level: 85, description: 'Utility-first CSS framework' }
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 85, description: 'Server-side JavaScript runtime' },
        { name: 'Express.js', level: 88, description: 'Fast, minimalist web framework' },
        { name: 'MongoDB', level: 82, description: 'NoSQL database management' },
        { name: 'Java Script', level: 80, description: 'Server-side language' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git & GitHub', level: 90, description: 'Version control and collaboration' },
        { name: 'Cloudinary', level: 75, description: 'Cloud-based image management' },
        { name: 'Socket.io', level: 78, description: 'Real-time communication' },
        { name: 'Passport.js', level: 80, description: 'Authentication middleware' }
      ]
    },
    {
      title: 'Languages',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'JavaScript', level: 88, description: 'Primary programming language' },
        { name: 'Java', level: 80, description: 'Object-oriented programming' },
      ]
    }
  ];

  const tools = [
    { name: 'VS Code', icon: '💻', color: 'bg-blue-500' },
    { name: 'Git', icon: '🔧', color: 'bg-orange-500' },
    { name: 'MongoDB', icon: '🍃', color: 'bg-green-500' },
    { name: 'Postman', icon: '📡', color: 'bg-orange-600' },
    { name: 'Netlify', icon: '🚀', color: 'bg-teal-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity }
          }}
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -30, 0]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity }
          }}
          className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-pink-200/30 to-orange-200/30 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16" animation="scaleIn">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 150 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies and programming languages.
          </p>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection delay={0.2} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
                }`}
              >
                <category.icon size={20} className="mr-2" />
                {category.title}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -20, rotateX: 15 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg font-bold text-gray-900">{skill.name}</h4>
                    <motion.span 
                      className={`text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} text-white`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{skill.description}</p>
                  
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 0.5 + index * 0.1,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full relative`}
                      >
                        <motion.div
                          animate={{ x: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute right-0 top-0 h-full w-2 bg-white/30 rounded-full"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Tools & Technologies */}
        <AnimatedSection delay={0.4}>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  y: -5
                }}
                className={`${tool.color} text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <span className="mr-2">{tool.icon}</span>
                {tool.name}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Skill Summary */}
        <AnimatedSection delay={0.6} className="mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Skill Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="text-center"
                >
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <category.icon size={28} className="text-white" />
                  </motion.div>
                  <h4 className="font-semibold text-gray-900">{category.title}</h4>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                  >
                    {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};