
import React from 'react';
import { Github, ArrowUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI Travel Agent",
      description: "An intelligent AI-powered travel planning agent that helps users create personalized trip itineraries. Built with modern web technologies, this full-stack application uses AI to suggest destinations, accommodations, and activities based on user preferences and budget constraints.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
      technologies: ["React.js", "Node.js", "AI/ML", "MongoDB", "Express.js"],
      liveUrl: "https://addtrip.netlify.app/",
      githubUrl: "https://github.com/villaswami/AI_Agent_traveling",
      category: "Full Stack"
    },
    {
      title: "Travel Gemini Explorer",
      description: "A comprehensive travel exploration platform that leverages Google's Gemini AI to provide intelligent travel recommendations and planning. Features include destination discovery, itinerary generation, and personalized travel suggestions with a modern, responsive interface.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=300&fit=crop",
      technologies: ["React.js", "Gemini AI", "JavaScript", "CSS3", "API Integration"],
      liveUrl: "https://travel-gemini-explorer.lovable.app/",
      githubUrl: "https://github.com/villaswami/travel-gemini-explorer",
      category: "Full Stack"
    },
    {
      title: "Streaming Platform Backend",
      description: "A robust backend system for a streaming platform built with Node.js and Express.js. Features include user authentication, content management, video streaming optimization, user profiles, and comprehensive API endpoints for frontend integration.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Multer", "API Design"],
      githubUrl: "https://github.com/villaswami/streming_platform",
      category: "Backend"
    },
    {
      title: "Travel Booking System",
      description: "A comprehensive backend system for managing travel bookings including buses and airports. Features booking management, route optimization, payment processing, and real-time availability tracking with robust API architecture.",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=300&fit=crop",
      technologies: ["Node.js", "Express.js", "MongoDB", "Payment Integration", "Real-time APIs"],
      githubUrl: "https://github.com/villaswami/travlingBusesandAirports",
      category: "Backend"
    },
    {
      title: "24*7 Pizza Delivery",
      description: "A full-featured online pizza ordering system that allows users to customize and order pizzas from home. Built with React.js frontend, Node.js backend, and MongoDB database, featuring real-time order tracking and payment integration.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Payment Gateway"],
      category: "Full Stack"
    },
    {
      title: "Online Shopping System",
      description: "A comprehensive e-commerce platform providing users with convenient online shopping experience. Built with Java backend and MySQL database, featuring product catalog, shopping cart, user authentication, and secure payment processing.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      technologies: ["Java", "MySQL", "Spring Boot", "JSP", "Servlet"],
      category: "Full Stack"
    },
    {
      title: "Drowsiness Detection System",
      description: "An innovative car safety technology designed to prevent accidents caused by driver drowsiness and fatigue. Uses deep learning algorithms and computer vision to monitor driver behavior in real-time and provide alerts when drowsiness is detected.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=300&fit=crop",
      technologies: ["Python", "Deep Learning", "OpenCV", "TensorFlow", "Computer Vision"],
      category: "AI/ML"
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "Full Stack":
        return "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-400/30 hover:from-blue-400/30 hover:to-cyan-400/30";
      case "Backend":
        return "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-400/30 hover:from-green-400/30 hover:to-emerald-400/30";
      case "AI/ML":
        return "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-400/30 hover:from-purple-400/30 hover:to-pink-400/30";
      default:
        return "bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-300 border-gray-400/30 hover:from-gray-400/30 hover:to-slate-400/30";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900/80 via-purple-900/30 to-indigo-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-500">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 group-hover:text-white transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded text-xs border border-white/20 hover:border-white/40 hover:scale-110 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm hover:scale-110 hover:shadow-lg"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm hover:scale-110 hover:shadow-lg"
                    >
                      <ArrowUp size={16} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
