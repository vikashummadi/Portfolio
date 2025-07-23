import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download, Code, Database, Cpu } from 'lucide-react';

export const Hero = () => {
  const [text, setText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Aspiring MERN Stack Developer", "Java DSA", "Problem Solving"];
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let currentText = '';

    const typeWriter = () => {
      const currentRole = roles[index % roles.length];

      if (isDeleting) {
        currentText = currentRole.substring(0, currentText.length - 1);
      } else {
        currentText = currentRole.substring(0, currentText.length + 1);
      }

      setText(currentText);

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentText === currentRole) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        index++;
        typeSpeed = 500;
      }

      setTimeout(typeWriter, typeSpeed);
    };

    typeWriter();
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://docs.google.com/document/d/1Q77H36xSN5M85ekXW4moe5Eh36l-5FPP/export?format=pdf';
    link.download = 'Vikash_Kumar_Reddy_Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-10 w-32 h-32 border border-blue-400/30 rounded-full"
        />

        <motion.div
          animate={{
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg backdrop-blur-sm"
        />

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-10 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="mb-8 relative inline-block"
          >
            <div className="w-40 h-40 mx-auto relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </motion.div>

              {/* Floating tech icons */}
              {[Code, Database, Cpu].map((Icon, index) => (
                <motion.div
                  key={index}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, delay: index * 0.5 }
                  }}
                  className="absolute w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                  style={{
                    top: `${20 + Math.sin(index * 2.1) * 60}%`,
                    left: `${20 + Math.cos(index * 2.1) * 60}%`,
                  }}
                >
                  <Icon size={16} className="text-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Name */}
          <motion.div className="mb-6">
            {["Vikash", "Kumar", "Reddy"].map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + wordIndex * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className={`inline-block text-4xl md:text-6xl font-bold mr-4 ${wordIndex === 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400' : 'text-white'
                  }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Animated role text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 3, // Slower: 3 seconds
              delay: 1.5,  // Delay before animation starts
              ease: [0.25, 0.1, 0.25, 1] // Custom cubic-bezier for smooth easing (ease-in-out)
            }}
            className="text-xl md:text-2xl text-gray-300 mb-8 h-12 flex items-center justify-center"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              {text}
            </span>
            <span
              className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-700 text-blue-400`}
            >
              |
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            4th-year B.Tech CSE student at Mohan Babu University with{' '}
            <motion.span
              animate={{ color: ['#60a5fa', '#a855f7', '#ec4899', '#60a5fa'] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="font-semibold"
            >
              9.66 CGPA
            </motion.span>
            . Passionate about building scalable web applications using{' '}
            <motion.span
              animate={{ color: ['#ec4899', '#60a5fa', '#a855f7', '#ec4899'] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="font-semibold"
            >
              MERN Stack
            </motion.span>
            {' '}and solving complex problems with{' '}
            <motion.span
              animate={{ color: ['#a855f7', '#ec4899', '#60a5fa', '#a855f7'] }}
              transition={{ duration: 3, repeat: Infinity, delay: 3 }}
              className="font-semibold"
            >
              Java & DSA
            </motion.span>
            .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center">
                <Code size={20} className="mr-2" />
                View My Projects
              </span>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:border-white/50 transition-all duration-300 flex items-center justify-center"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex justify-center space-x-6 mb-16"
          >
            {[
              { Icon: Github, href: "https://github.com/vikashummadi/", color: "hover:text-gray-300" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/vikash-4946752a5/", color: "hover:text-blue-400" },
              { Icon: Mail, href: "#contact", color: "hover:text-green-400" }
            ].map(({ Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target={href.startsWith('http') ? '_blank' : '_self'}
                rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  y: -5
                }}
                whileTap={{ scale: 0.9 }}
                className={`w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 ${color} border border-white/20 hover:border-white/40`}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center backdrop-blur-sm hover:border-white/50 transition-all duration-300"
        >
          <ChevronDown size={24} className="text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
};