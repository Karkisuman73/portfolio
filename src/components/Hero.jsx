import React from 'react';
import { motion } from 'framer-motion';
import profilepic from "../assets/image.JPG"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30"></div>
      <div className="absolute top-10 left-10 md:top-1/4 md:left-1/4 w-48 h-48 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-20 right-10 md:top-1/3 md:right-1/4 w-48 h-48 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-10 md:bottom-1/4 md:left-1/3 w-48 h-48 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24 relative z-10">
        <div className="lg:hidden mb-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-xs mx-auto">
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl md:rounded-3xl blur-lg md:blur-xl opacity-30 animate-pulse"></div>
              
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl md:rounded-2xl p-1 md:p-2 shadow-lg md:shadow-2xl">
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl">
                  <img
                    src={profilepic}
                    alt="Suman Karki - Full Stack Developer"
                    className="w-full h-auto rounded-lg md:rounded-xl object-cover aspect-square"
                  />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-lg md:rounded-xl"></div>
                </div>

                <div className="absolute -bottom-3 -left-3 bg-white px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm md:text-base font-semibold text-gray-800">Open to Work</span>
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-2xl md:blur-3xl opacity-20"></div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-xs md:text-sm font-medium text-blue-700">Available for Opportunities</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 md:mb-4 leading-snug md:leading-tight">
              <span className="block text-2xl sm:text-3xl md:text-4xl">Hey there! I'm</span>
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Suman Karki
                </span>
                <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              </span>
            </h1>

            <div className="mb-4 md:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-1 md:mb-2">
                <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600">Specializing in MERN Stack & Modern Web Technologies</p>
            </div>

            <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. 
              Let's turn your ideas into reality with clean code and modern solutions.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-8 md:mb-12 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="text-sm md:text-base">Explore My Work</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg md:rounded-xl blur opacity-0 group-hover:opacity-70 transition duration-300 -z-10"></div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl bg-white text-gray-800 font-semibold border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm md:text-base">Contact Me</span>
              </motion.a>
            </div>

            <div className="mb-6 md:mb-8">
              <p className="text-gray-600 mb-3 md:mb-4 font-medium">Tech I work with:</p>
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start">
                {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Next.js', 'Tailwind'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 md:px-4 md:py-2 bg-white/80 backdrop-blur-sm rounded-lg text-sm md:text-base text-gray-700 font-medium border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:flex justify-end"
          >
            <div className="relative w-full max-w-2xl mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-2 shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={profilepic}
                    alt="Suman Karki - Full Stack Developer"
                    className="w-full h-auto rounded-xl object-cover aspect-square"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-xl"></div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white px-4 py-3 rounded-xl shadow-xl border border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-gray-800">Open to Work</span>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 w-72 h-72 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20"></div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors">
            <span className="text-xs md:text-sm mb-1 md:mb-2">Scroll Down</span>
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;