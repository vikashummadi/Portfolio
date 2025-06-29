import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Target, Award, TrendingUp, Zap } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Achievements = () => {
  const achievements = [
    {
      title: 'LeetCode Problem Solver',
      description: '50+ problems solved across various difficulty levels',
      icon: Code,
      color: 'from-yellow-500 to-orange-500',
      stats: '50+',
      category: 'Coding',
      link: 'https://leetcode.com/u/Vikashummadi/'
    },
    {
      title: 'GeeksforGeeks Contributor',
      description: '190+ problems solved with consistent practice',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      stats: '190+',
      category: 'Problem Solving',
      link: 'https://www.geeksforgeeks.org/user/vikashu01j7/'
    },
    {
      title: 'AINCAT Rank Achievement',
      description: 'Secured 26,000 rank in All India National Coding Assessment Test',
      icon: Trophy,
      color: 'from-blue-500 to-purple-500',
      stats: '26K',
      category: 'Competition',
      link: '#'
    },
    {
      title: 'Codequezt Top Performer',
      description: 'Achieved top 1.2K rank in competitive programming contest',
      icon: Award,
      color: 'from-purple-500 to-pink-500',
      stats: '1.2K',
      category: 'Contest',
      link: '#'
    }
  ];


  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity }
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16" animation="scaleIn">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Recognition</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 180 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-6"
          />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing my competitive programming journey and problem-solving achievements across various platforms.
          </p>
        </AnimatedSection>

        {/* Achievement Cards */}
        <AnimatedSection delay={0.4}>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => {
                  if (achievement.link && achievement.link !== '#') {
                    window.open(achievement.link, '_blank');
                  }
                }}
              >
                <div className="flex items-start space-x-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <achievement.icon size={32} className="text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 transition-all duration-300">
                        {achievement.title}
                      </h3>
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                        className={`text-2xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}
                      >
                        {achievement.stats}
                      </motion.span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{achievement.description}</p>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${achievement.color} text-white shadow-lg`}
                    >
                      <TrendingUp size={16} className="mr-2" />
                      {achievement.category}
                    </motion.div>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <span className="text-white text-sm">🔗</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Coding Journey Timeline */}
        <AnimatedSection delay={0.6} className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Coding Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full"></div>
              
              {[
                { year: '2022', event: 'Started B.Tech CSE', description: 'Began my journey in Computer Science' },
                { year: '2023', event: 'First Programming Contest', description: 'Participated in college coding competition' },
                { year: '2023-24', event: 'MERN Stack Learning', description: 'Mastered full-stack web development' },
                { year: '2024-25', event: 'Major Projects', description: 'Built Nestora applications and Chat Room' }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg"
                    >
                      <h4 className="text-lg font-bold text-white mb-2">{milestone.event}</h4>
                      <p className="text-gray-300 mb-3">{milestone.description}</p>
                      <span className="text-yellow-400 font-semibold">{milestone.year}</span>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full border-4 border-slate-800 shadow-lg"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};