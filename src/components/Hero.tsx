
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
              alt="Villa Swami Kiran"
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Villa Swami Kiran
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-300 mb-8">
            Full Stack Developer & Software Instructor
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate software engineer with expertise in full-stack development, 
            currently mentoring aspiring developers and building innovative solutions.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.linkedin.com/in/swami-kiran-villa-3a43b520a"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/villaswami"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:villa.swamikiran9490@gmail.com"
              className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/60" size={32} />
      </div>
    </section>
  );
};

export default Hero;
