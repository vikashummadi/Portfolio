import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Star, Code, Globe, Cpu, Users, Shield } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const About = () => {
  const education = {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    university: "Mohan Babu University",
    cgpa: "9.66",
    year: "2021 - 2025",
    location: "Tirupati, Andhra Pradesh"
  };

  const certifications = [
    {
      title: "Web Full Stack Developer Virtual Internship",
      provider: "AICTE",
      year: "2024",
      color: "from-blue-500 to-cyan-500",
      icon: Code
    },
    {
      title: "Build a free website with WordPress",
      provider: "Coursera",
      year: "2024",
      color: "from-orange-500 to-red-500",
      icon: Globe
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      provider: "Coursera IBM",
      year: "2024",
      color: "from-green-500 to-emerald-500",
      icon: Cpu
    },
    {
      title: "Agile development and Scrum",
      provider: "Coursera IBM",
      year: "2024",
      color: "from-purple-500 to-fuchsia-600",
      icon: Users
    },
    {
      title: "Introduction to Cybersecurity",
      provider: "Cisco Networking Academy",
      year: "2025",
      color: "from-gray-400 to-slate-600",
      icon: Shield
    }

  ];

  const highlights = [
    { icon: GraduationCap, text: "Top 5% in Computer Science Engineering", color: "text-blue-400" },
    { icon: Award, text: "Multiple coding competition winner", color: "text-yellow-400" },
    { icon: BookOpen, text: "Self-taught MERN Stack Developer", color: "text-green-400" },
    { icon: Star, text: "Active contributor to open source", color: "text-purple-400" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity } }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, y: [0, -30, 0] }}
          transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity } }}
          className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16" animation="scaleIn">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A passionate computer science student with a strong foundation in software development 
            and a keen interest in building innovative solutions that make a difference.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Education & Background */}
          <AnimatedSection delay={0.2} animation="fadeInLeft">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Education & Background</h3>
              
              {/* Education Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <GraduationCap size={28} className="text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{education.degree}</h4>
                    <p className="text-blue-600 font-semibold mb-1">{education.university}</p>
                    <div className="flex items-center space-x-4 text-gray-600 text-sm">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {education.year}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {education.location}
                      </div>
                    </div>
                    <motion.div 
                      className="mt-3 inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Star size={16} className="mr-2" />
                      CGPA: {education.cgpa}/10.0
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Highlights */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Key Highlights</h4>
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-300"
                  >
                    <highlight.icon size={20} className={highlight.color} />
                    <span className="text-gray-700">{highlight.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Profile Image & Stats */}
          <AnimatedSection delay={0.4} animation="fadeInRight">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="w-80 h-80 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
                    />
                    <div className="text-8xl relative z-10">👨‍🎓</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg flex items-center justify-center"
              >
                <span className="text-2xl">🎯</span>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, 10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg flex items-center justify-center"
              >
                <span className="text-xl">💡</span>
              </motion.div>
              
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full shadow-lg flex items-center justify-center"
              >
                <span className="text-lg">🚀</span>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Certifications */}
        <AnimatedSection delay={0.6}>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Certifications & Learning</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${cert.color} mb-6 shadow-lg text-white`}
                >
                  <cert.icon size={32} />
                </motion.div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {cert.title}
                </h4>
                <p className="text-blue-600 font-semibold mb-2">{cert.provider}</p>
                <p className="text-gray-500 text-sm">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Career Objective */}
        <AnimatedSection delay={0.8} className="mt-20">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center shadow-2xl"
          >
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Career Objective
            </motion.h3>
            <motion.p 
              className="text-lg leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              To leverage my strong foundation in computer science and hands-on experience in full-stack development 
              to contribute to innovative projects while continuously learning and growing in a dynamic technology environment. 
              I aim to build scalable solutions that solve real-world problems and make a positive impact on users' lives.
            </motion.p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};